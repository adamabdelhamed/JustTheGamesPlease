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

// projects/NeonSwarm/CombatDefinition/ShowstopperFamily.ts
var dragonBreathIntent = {
  durationMs: 1e3,
  centerCameraMs: 50,
  returnCameraMs: 250,
  attackStartProgress: 0.1,
  attackEndProgress: 1,
  rowsAhead: 15,
  musicDuckVolume: 0.3,
  timeWarp: [
    { progress: 0, gameplayScale: 1, easing: "easeInOut" },
    { progress: 0.0333, gameplayScale: 0.1, easing: "easeIn" },
    { progress: 0.2667, gameplayScale: 0.4, easing: "easeIn" },
    { progress: 1, gameplayScale: 1, easing: "easeIn" }
  ],
  camera: [
    { progress: 0, height: 65, lookAngleDegrees: 27, followDistance: 20, zoom: 0.2, horizon: 0.51 },
    { progress: 0.1167, height: 45, lookAngleDegrees: 27, followDistance: -5, zoom: 0.28, horizon: 0.47, backgroundForwardOffset: 0.12, backgroundVerticalOffset: -0.25, backgroundZoomOffset: 0.24, easing: "easeIn" },
    { progress: 0.2583, height: 35, lookAngleDegrees: 27, followDistance: -25, zoom: 0.32, horizon: 0.45, backgroundForwardOffset: 0.22, backgroundVerticalOffset: -0.38, backgroundZoomOffset: 0.32, easing: "easeInOut" }
  ],
  soundCues: {
    deploy: "WavePressure",
    attackStart: "DragonBreath",
    resolve: "ProjectileHit"
  }
};
function dragonBreathMember(intent) {
  return {
    label: "Dragon's Breath",
    description: "A banked cinematic clear where a friendly neon shape dives ahead and lays a thick wave of fire.",
    rarity: "rare",
    bankBehavior: "bankedManualTrigger",
    durationMs: intent.durationMs,
    centerCameraMs: intent.centerCameraMs,
    returnCameraMs: intent.returnCameraMs,
    timeWarp: pointsAtMs(intent.timeWarp, intent.durationMs),
    camera: pointsAtMs(intent.camera, intent.durationMs),
    timelineEvents: [
      { type: "startAttack", progress: intent.attackStartProgress, atMs: msAtProgress(intent.attackStartProgress, intent.durationMs) },
      { type: "stopAttack", progress: intent.attackEndProgress, atMs: msAtProgress(intent.attackEndProgress, intent.durationMs) }
    ],
    attack: {
      startMs: msAtProgress(intent.attackStartProgress, intent.durationMs),
      endMs: intent.durationMs,
      rowsAhead: intent.rowsAhead,
      targeting: "allLanesAhead"
    },
    musicDuckVolume: intent.musicDuckVolume,
    pickupColor: "orange",
    soundCues: intent.soundCues
  };
}
function pointsAtMs(points, durationMs) {
  return points.map((point) => ({
    ...point,
    atMs: msAtProgress(point.progress, durationMs)
  }));
}
function msAtProgress(progress, durationMs) {
  return Math.round(Math.max(0, Math.min(1, progress)) * durationMs);
}
var ShowstopperFamilyDefinition = class extends FamilyDefinition {
  familyId = "showstopper";
  label = "Showstopper";
  implementation = {
    banked: true,
    manualTrigger: true,
    cinematicDirector: true,
    deterministicClear: true
  };
  members = {
    dragonsBreath: dragonBreathMember(dragonBreathIntent)
  };
  constructor() {
    super();
    this.validate();
  }
  validate() {
    for (const [id, member] of Object.entries(this.members)) {
      this.require(member.durationMs > 0, `${id} durationMs must be positive.`);
      this.require(member.centerCameraMs >= 0, `${id} centerCameraMs cannot be negative.`);
      this.require(member.returnCameraMs > 0, `${id} returnCameraMs must be positive.`);
      this.require(member.timeWarp.length >= 2, `${id} must define at least two time-warp points.`);
      this.require(member.camera.length >= 2, `${id} must define at least two camera poses.`);
      this.require(member.timelineEvents.length >= 2, `${id} must define at least two timeline events.`);
      this.require(member.attack.startMs >= 0 && member.attack.endMs > member.attack.startMs, `${id} attack must have a valid time range.`);
      this.require(member.attack.endMs <= member.durationMs, `${id} attack cannot exceed duration.`);
      this.require(member.attack.rowsAhead > 0, `${id} attack rowsAhead must be positive.`);
      this.require(member.musicDuckVolume > 0 && member.musicDuckVolume <= 1, `${id} musicDuckVolume must be in the 0-1 range.`);
      this.require(neonPalette[member.pickupColor] !== void 0, `${id} has an unknown pickup color.`);
      this.validateTimedPoints(id, "timeWarp", member.timeWarp, member.durationMs);
      this.validateTimedPoints(id, "camera", member.camera, member.durationMs);
      this.validateTimedPoints(id, "timelineEvents", member.timelineEvents, member.durationMs);
      for (const point of member.timeWarp) {
        this.require(point.gameplayScale > 0 && point.gameplayScale <= 1, `${id} gameplayScale must be in the 0-1 range.`);
      }
      for (const pose of member.camera) {
        this.require(pose.height >= -200, `${id} camera height is outside the supported lab range.`);
        this.require(pose.zoom > 0, `${id} camera zoom must be positive.`);
        this.require(pose.horizon > 0 && pose.horizon < 1, `${id} camera horizon must be between 0 and 1.`);
      }
    }
  }
  validateTimedPoints(id, label, points, durationMs) {
    let previous = Number.NEGATIVE_INFINITY;
    for (const point of points) {
      this.require(point.atMs >= 0 && point.atMs <= durationMs, `${id} ${label} point atMs is outside the sequence.`);
      this.require(point.atMs >= previous, `${id} ${label} points must be sorted by atMs.`);
      previous = point.atMs;
    }
  }
};
var showstopperFamily = new ShowstopperFamilyDefinition();

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
  "unitMultiplier.squadPlusOne": "pickup.unitMultiplier.2x",
  "showstopper.dragonsBreath": "pickup.showstopper.dragonsBreath",
  "dragonsBreath": "pickup.showstopper.dragonsBreath"
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
  "pickup.unitMultiplier.2x": "2",
  "pickup.showstopper.dragonsBreath": "Q"
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
  if (id.startsWith("pickup.showstopper.")) {
    const memberId = id.slice("pickup.showstopper.".length);
    if (!(memberId in showstopperFamily.members)) throw new Error(`Unknown showstopper id "${id}".`);
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
  if (id === "showstopper.dragonsBreath" || id === "pickup.showstopper.dragonsBreath") {
    return 14;
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
function selectWeapon(recipe, role, tier, state2, rng) {
  if (role === "upgrade") return null;
  const rawPool = role === "support" ? recipe.supportWeapons : role === "closeRange" ? recipe.closeRangeWeapons : recipe.preferredWeapons;
  const rolePool = role === "closeRange" ? rawPool : role === "primary" ? rawPool.filter((weapon) => !canonicalWeaponId(weapon).startsWith("pickup.weapon.shield.")) : rawPool;
  const pool = rolePool.length > 0 ? rolePool : rawPool;
  const tierPool = pool.filter((weapon) => minimumTierForWeapon(weapon) <= tier);
  const availablePool = tierPool.length > 0 ? tierPool : pool.filter((weapon) => minimumTierForWeapon(weapon) === 1);
  if (availablePool.length === 0) {
    state2.warnings.push(`No ${role} weapon was available for tier ${tier} in ${recipe.theme}.`);
    return null;
  }
  const offset = Math.min(availablePool.length - 1, state2.cycle);
  const candidates = availablePool.slice(offset).concat(availablePool.slice(0, offset));
  return rng.pick(candidates);
}
function placePickups(section, recipe, beat, tier, rows, state2, rng) {
  const roles = beat.pickupRoles ?? [];
  const columns = [c.left.mid, c.right.mid, c.left.nearOuter, c.right.nearOuter, c.left.nearInner, c.right.nearInner];
  const weapons = [];
  const pickups = [];
  let row = 0;
  for (const role of roles) {
    if (role === "upgrade") {
      const authoredUpgrade = beat.pickupRoles?.includes("upgrade") ?? false;
      if (authoredUpgrade || state2.cycle % recipe.upgradeSpacing === 0) {
        section.at(row).pickup("unitMultiplier.2x", { column: columns[(row + 1) % columns.length] });
        state2.playerPower += pickupPower("unitMultiplier.2x");
        state2.selectedPickups.add("pickup.unitMultiplier.2x");
        pickups.push("pickup.unitMultiplier.2x");
      }
    } else {
      const weapon = selectWeapon(recipe, role, tier, state2, rng);
      if (weapon) {
        section.at(row).weapon(weapon, { column: columns[row % columns.length] });
        state2.playerPower += weaponPower(weapon);
        state2.selectedWeapons.add(canonicalWeaponId(weapon));
        weapons.push(canonicalWeaponId(weapon));
      }
    }
    row += 2;
  }
  if (tier >= 2 && beat.kind === "rebuild") {
    const pickup = "pickup.showstopper.dragonsBreath";
    const pickupRow = Math.max(0, Math.min(rows - 1, rows - 3));
    section.at(pickupRow).pickup(pickup, { column: state2.cycle % 2 === 0 ? c.left.inner : c.right.inner });
    state2.playerPower += pickupPower(pickup);
    state2.selectedPickups.add(pickup);
    pickups.push(pickup);
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
function bossForPressure(recipe, tier, state2) {
  const availableBosses = recipe.bossEnemies.filter((id) => minimumTierForEnemy(id) <= tier + 1);
  if (availableBosses.length === 0) {
    state2.warnings.push(`No boss enemy is available for ${recipe.theme} at tier ${tier}.`);
    return null;
  }
  return availableBosses[state2.bossesPlaced % availableBosses.length];
}
function canPlaceBoss(tier, state2, trackRow) {
  const maxBosses = tier === 2 ? 2 : tier >= 3 ? 4 : 0;
  const minSpacing = tier === 2 ? 34 : 58;
  return state2.bossesPlaced < maxBosses && trackRow - state2.lastBossTrackRow >= minSpacing;
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
function placePressure(section, recipe, beat, tier, profile, state2, rng, startRow = 0) {
  const pressure = beat.pressure ?? "medium";
  const targetThreat = profile.pressureThreat[pressure] + state2.playerPower * (pressure === "peak" ? 0.45 : 0.25);
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
    const trackRow = state2.cursor + row;
    const tierTwoFinaleBossRows = [
      startRow + Math.floor((beatRows - startRow) * 0.3),
      startRow + Math.floor((beatRows - startRow) * 0.72)
    ];
    const tierTwoFinaleBoss = tier === 2 && beat.kind === "finale" && state2.bossesPlaced < tierTwoFinaleBossRows.length && row >= tierTwoFinaleBossRows[state2.bossesPlaced] && canPlaceBoss(tier, state2, trackRow);
    const tierThreeBoss = tier >= 3 && canPlaceBoss(tier, state2, trackRow) && emittedThreat < targetThreat * 1.15 && (style === "tankBreak" || pressure === "peak" && remainingThreat > 18 && row > 12);
    const shouldUseHeavy = tierTwoFinaleBoss || tierThreeBoss;
    const bossEnemy = shouldUseHeavy ? bossForPressure(recipe, tier, state2) : null;
    const enemy = shouldUseHeavy ? bossEnemy ?? enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length))) : enemyForPressure(recipe, tier, pressure, row, Math.max(4, remainingThreat / Math.max(1, columns.length)));
    if (tierTwoFinaleBoss && bossEnemy) {
      const column = state2.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state2.bossesPlaced++;
      state2.lastBossTrackRow = trackRow;
      enemies.add(bossEnemy === "basic" ? "enemy.basic" : `enemy.${bossEnemy}`);
      row += 12;
      continue;
    }
    if (tierThreeBoss && bossEnemy) {
      const column = state2.bossesPlaced % 2 === 0 ? c.left.nearOuter : c.right.inner;
      section.at(row).enemy(bossEnemy, { column });
      emittedThreat += enemyThreat(bossEnemy);
      state2.bossesPlaced++;
      state2.lastBossTrackRow = trackRow;
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
  for (const enemy of enemies) state2.selectedEnemies.add(enemy);
  return { threat: emittedThreat, enemies: [...enemies] };
}
function compileBeat(builder, recipe, beat, tier, profile, state2, rng) {
  const rows = rowsForBeat(beat, profile);
  const segmentStartPower = state2.playerPower;
  let placedWeapons = [];
  let placedPickups = [];
  let emittedThreat = 0;
  let selectedEnemies = [];
  if (beat.kind === "rest") {
    builder.respite(rows);
  } else {
    const sectionKind = beat.kind === "intro" || beat.kind === "rebuild" ? "rebuild" : "pressure";
    builder.section(sectionKind, rows, (section) => {
      const pickups = placePickups(section, recipe, beat, tier, rows, state2, rng);
      placedWeapons = pickups.weapons;
      placedPickups = pickups.pickups;
      if (beat.kind !== "intro" && beat.kind !== "rebuild") {
        const pressureStartRow = Math.max(0, (beat.pickupRoles?.length ?? 0) * 2 - 1);
        const pressure = placePressure(section, recipe, beat, tier, profile, state2, rng, pressureStartRow);
        emittedThreat = pressure.threat;
        selectedEnemies = pressure.enemies;
      } else if (beat.kind === "rebuild" && rows > 4) {
        const enemy = recipe.preferredEnemies[0];
        section.at(rows - 2).enemy(enemy, { column: rng.pick(allColumns) });
        emittedThreat = enemyThreat(enemy);
        selectedEnemies = [enemy === "basic" ? "enemy.basic" : `enemy.${enemy}`];
        state2.selectedEnemies.add(selectedEnemies[0]);
      }
    });
  }
  state2.cursor += rows;
  state2.cycle++;
  state2.segments.push({
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
  const state2 = createState();
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
  }, options.tier, profile, state2, rng);
  for (const beat of trackRecipe.journey.filter((item) => item.kind !== "intro")) {
    if (state2.cursor >= profile.targetRows - profile.pressureRows.high) break;
    compileBeat(builder, recipe, beat, options.tier, profile, state2, rng);
  }
  while (state2.cursor < profile.targetRows - profile.pressureRows.high) {
    compileBeat(builder, recipe, { kind: state2.cycle % 3 === 0 ? "rebuild" : "pressure", pressure: state2.cycle % 2 === 0 ? "high" : "medium", pickupRoles: state2.cycle % 3 === 0 ? ["primary", "upgrade"] : void 0 }, options.tier, profile, state2, rng);
  }
  compileBeat(builder, recipe, { kind: "finale", pressure: options.tier === 1 ? "high" : "peak" }, options.tier, profile, state2, rng);
  const track = builder.build();
  const generatedRows = track.definition.layout.split(/\r?\n/).filter((row) => row.trim()).length;
  const weaponPowerEntries = [...state2.selectedWeapons].map((id) => [id, Number(weaponPower(id).toFixed(2))]);
  const enemyThreatEntries = [...state2.selectedEnemies].map((id) => [id, Number(enemyThreat(id).toFixed(2))]);
  return {
    track,
    debug: {
      seed,
      seedValue: rng.seedValue,
      familyId: options.theme,
      trackId,
      tier: options.tier,
      generatedRows,
      selectedWeapons: [...state2.selectedWeapons],
      selectedPickups: [...state2.selectedPickups],
      selectedEnemies: [...state2.selectedEnemies],
      weaponPower: Object.fromEntries(weaponPowerEntries),
      enemyThreat: Object.fromEntries(enemyThreatEntries),
      segments: state2.segments,
      warnings: state2.warnings
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

// projects/NeonSwarm/src/combat/shieldEvaluator.ts
var ShieldState = class {
  shieldId;
  /** Active shield level. Repeated pickups of the same shield increase this up to 5. */
  level;
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
  constructor(shieldId, maxCharges, level3 = 1) {
    this.shieldId = shieldId;
    this.level = Math.min(5, Math.max(1, Math.floor(level3)));
    this.charges = maxCharges;
    this.cooldownLeft = 0;
    this.hitFlashUntil = 0;
    this.hitFlashProgress = 1;
    this.pulseEffects = [];
  }
};
function resolveShieldContact(state2, shield, target, shieldX, shieldY, now, scale = 1) {
  const result = {
    contacted: false,
    absorbed: false,
    damageAbsorbed: 0,
    enemyDestroyed: false
  };
  if (target.dying || state2.interceptedEnemyIds.has(target.id)) return result;
  const radius = shield.radius * scale + target.radius;
  const dx = target.x - shieldX;
  const dy = target.y - shieldY;
  if (dx * dx + dy * dy > radius * radius) return result;
  result.contacted = true;
  state2.interceptedEnemyIds.add(target.id);
  if (state2.charges <= 0) return result;
  const absorbed = Math.min(state2.charges, target.health);
  state2.charges -= absorbed;
  target.health -= absorbed;
  state2.hitFlashUntil = now + 280;
  state2.hitFlashProgress = 0;
  state2.cooldownLeft = shield.cooldownSeconds;
  result.absorbed = true;
  result.damageAbsorbed = absorbed;
  result.enemyDestroyed = target.health <= 0;
  return result;
}

// projects/NeonSwarm/test-pages/shield-family/smoke.ts
var status = document.querySelector("#test-status");
var resultsElement = document.querySelector("#results");
function validateShield(id, shield) {
  const failures = [];
  if (shield.radius <= 0) failures.push(`radius ${shield.radius} must be positive`);
  if (shield.orbiterCount < 0) failures.push(`orbiterCount ${shield.orbiterCount} cannot be negative`);
  if (shield.orbiterSpeed < 0) failures.push(`orbiterSpeed ${shield.orbiterSpeed} cannot be negative`);
  if (!neonPalette[shield.color]) failures.push(`color "${shield.color}" not in neonPalette`);
  if (shield.mode !== "charge") failures.push(`mode must be charge, got ${shield.mode}`);
  if (shield.maxCharges <= 0) failures.push(`strength must be positive, got ${shield.maxCharges}`);
  return { shieldId: id, passed: failures.length === 0, failures };
}
var run = () => {
  const results = Object.entries(shieldFamily.members).map(([id, shield]) => validateShield(id, shield));
  resultsElement.innerHTML = results.map((r) => `
    <li data-passed="${r.passed}" data-shield-id="${r.shieldId}">
      <strong>${shieldFamily.members[r.shieldId].label}</strong>
      <span>${r.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">${r.passed ? `mode: ${shieldFamily.members[r.shieldId].mode} \xB7 radius: ${shieldFamily.members[r.shieldId].radius}px` : r.failures.join(" | ")}</span>
    </li>`).join("");
  return results;
};
var test = createTestPage("neon-swarm-shield-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.shieldId} definition is valid`,
    result.passed,
    result.failures.join("; ") || "all checks passed"
  );
}
var lightGuard = shieldFamily.members.lightGuard;
var state = new ShieldState("lightGuard", lightGuard.maxCharges);
var horizontalEnemy = { id: 1, x: 225 + lightGuard.radius, y: 650, radius: 6.25, health: 1, dying: false };
var firstContact = resolveShieldContact(state, lightGuard, horizontalEnemy, 225, 650, 1e3);
test.assert(
  "shield intercepts horizontal lane-shift contact",
  firstContact.absorbed && firstContact.enemyDestroyed && state.charges === lightGuard.maxCharges - 1,
  `absorbed=${firstContact.absorbed} destroyed=${firstContact.enemyDestroyed} charges=${state.charges}`
);
var repeatedContact = resolveShieldContact(state, lightGuard, horizontalEnemy, 225, 650, 1016);
test.assert(
  "one enemy cannot drain shield repeatedly",
  !repeatedContact.contacted && state.charges === lightGuard.maxCharges - 1,
  `contacted=${repeatedContact.contacted} charges=${state.charges}`
);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9MaWdodG5pbmdGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU2hvd3N0b3BwZXJGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tEZWZpbml0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrQnVpbGRlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2tDYXRhbG9nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vc3JjL2NvbWJhdC9zaGllbGRFdmFsdWF0b3IudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL3Rlc3QtcGFnZXMvc2hpZWxkLWZhbWlseS9zbW9rZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IG5lb25QYWxldHRlID0ge1xuICBjeWFuOiBcIiM1NWU3ZmZcIixcbiAgcGluazogXCIjZmY0ZjlhXCIsXG4gIGdyZWVuOiBcIiM3ZmZmYzJcIixcbiAgZ29sZDogXCIjZmZkNDVjXCIsXG4gIHZpb2xldDogXCIjYTk4N2ZmXCIsXG4gIG9yYW5nZTogXCIjZmY4YTQ1XCIsXG4gIHJlZDogXCIjZmY1NTc3XCIsXG4gIGRlZXBCbHVlOiBcIiMyODdkZmZcIixcbiAgd2hpdGVIb3Q6IFwiI2Y0ZmJmZlwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTmVvbkNvbG9yTmFtZSA9IGtleW9mIHR5cGVvZiBuZW9uUGFsZXR0ZTtcblxuZXhwb3J0IGNvbnN0IGdsb3dQcmVzZXRzID0ge1xuICBzb2Z0OiAwLjM4LFxuICBzdGFuZGFyZDogMC42NSxcbiAgaW50ZW5zZTogMSxcbn0gYXMgY29uc3Q7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcblxuZXhwb3J0IHR5cGUgTmVvblNoYXBlRmFtaWx5ID0gXCJwbGF5ZXJcIiB8IFwiaHVudGVyXCIgfCBcImJydWlzZXJcIiB8IFwidGFua1wiIHwgXCJ0cmlja3N0ZXJcIiB8IFwiZWxpdGVcIjtcbmV4cG9ydCB0eXBlIE5lb25Sb2NrU3R5bGUgPSBcInBpdGNoXCIgfCBcInJvbGxcIiB8IFwieWF3XCIgfCBcInB1bHNlXCIgfCBcIm9yYml0XCI7XG5leHBvcnQgdHlwZSBOZW9uUG9pbnQgPSByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5O1xuICBjb2xvcjogc3RyaW5nO1xuICBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdO1xuICBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXTtcbiAgcm9jazogTmVvblJvY2tTdHlsZTtcbiAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IHJlZ3VsYXIgPSAoc2lkZXM6IG51bWJlciwgcm90YXRpb24gPSAtTWF0aC5QSSAvIDIsIHN4ID0gMSwgc3kgPSAxKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogc2lkZXMgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgKiAyIC8gc2lkZXM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiBzeCwgTWF0aC5zaW4oYW5nbGUpICogc3ldIGFzIGNvbnN0O1xuICB9KTtcblxuY29uc3Qgc3RhciA9IChwb2ludHM6IG51bWJlciwgaW5uZXIgPSAuNDIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyKTogTmVvblBvaW50W10gPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9pbnRzICogMiB9LCAoXywgaSkgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IGkgJSAyID8gaW5uZXIgOiAxO1xuICAgIGNvbnN0IGFuZ2xlID0gcm90YXRpb24gKyBpICogTWF0aC5QSSAvIHBvaW50cztcbiAgICByZXR1cm4gW01hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IGRpYW1vbmQ6IE5lb25Qb2ludFtdID0gW1swLCAtMV0sIFsxLCAwXSwgWzAsIDFdLCBbLTEsIDBdXTtcbmNvbnN0IGFycm93OiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbLjgyLCAuNjhdLCBbLjI3LCAuNDVdLCBbMCwgLjkyXSwgWy0uMjcsIC40NV0sIFstLjgyLCAuNjhdXTtcbmNvbnN0IGNoZXZyb246IE5lb25Qb2ludFtdID0gW1stMSwgLS42Ml0sIFswLCAtLjA1XSwgWzEsIC0uNjJdLCBbLjI4LCAuODJdLCBbMCwgLjM0XSwgWy0uMjgsIC44Ml1dO1xuY29uc3Qgc3F1YXJlOiBOZW9uUG9pbnRbXSA9IHJlZ3VsYXIoNCwgTWF0aC5QSSAvIDQpO1xuY29uc3QgY29sb3JzOiBSZWNvcmQ8TmVvblNoYXBlRmFtaWx5LCBzdHJpbmc+ID0ge1xuICBwbGF5ZXI6IG5lb25QYWxldHRlLmN5YW4sIGh1bnRlcjogbmVvblBhbGV0dGUucmVkLCBicnVpc2VyOiBuZW9uUGFsZXR0ZS52aW9sZXQsXG4gIHRhbms6IG5lb25QYWxldHRlLmdvbGQsIHRyaWNrc3RlcjogXCIjOWNmZjUyXCIsIGVsaXRlOiBcIiM3MGRmZmZcIixcbn07XG5cbmNvbnN0IG1ha2UgPSAoXG4gIGZhbWlseTogTmVvblNoYXBlRmFtaWx5LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgTmVvblBvaW50W10sXG4gIHJvY2s6IE5lb25Sb2NrU3R5bGUsIGhvbGVzPzogcmVhZG9ubHkgKHJlYWRvbmx5IE5lb25Qb2ludFtdKVtdLFxuKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiA9PiAoeyBpZCwgbmFtZSwgZmFtaWx5LCBwb2ludHMsIGhvbGVzLCByb2NrLCBjb2xvcjogY29sb3JzW2ZhbWlseV0sIGRlcHRoOiBmYW1pbHkgPT09IFwidGFua1wiID8gLjIyIDogLjE0IH0pO1xuXG5leHBvcnQgY29uc3QgbmVvblNoYXBlQ2F0YWxvZzogcmVhZG9ubHkgTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbltdID0gW1xuICBtYWtlKFwicGxheWVyXCIsIFwiYXJyb3ctY2xhc3NpY1wiLCBcIkFycm93IENsYXNzaWNcIiwgYXJyb3csIFwicGl0Y2hcIiwgW2Fycm93Lm1hcCgoW3gsIHldKSA9PiBbeCAqIC40MiwgeSAqIC40Ml0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJkZWx0YS1zbGVla1wiLCBcIkRlbHRhIFNsZWVrXCIsIFtbMCwtMV0sWy45LC44Ml0sWzAsLjQ4XSxbLS45LC44Ml1dLCBcInBpdGNoXCIsIFtbWzAsLS40NV0sWy4zNSwuNDVdLFswLC4yOF0sWy0uMzUsLjQ1XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN0YXItY29yZVwiLCBcIlN0YXIgQ29yZVwiLCBzdGFyKDQsIC4zMiksIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInBsYXllclwiLCBcImhleC1maWdodGVyXCIsIFwiSGV4IEZpZ2h0ZXJcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwgLU1hdGguUEkvMiwgLjQ4LCAuNDgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ3aW5nLXNwbGl0XCIsIFwiV2luZyBTcGxpdFwiLCBbWy0xLC0uODVdLFstLjI1LC4xXSxbMCwtLjI1XSxbLjI1LC4xXSxbMSwtLjg1XSxbLjY2LC43Ml0sWzAsLjM1XSxbLS42NiwuNzJdXSwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pID0+IFt4Ki4xOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJ0cmlhZC1wb2RcIiwgXCJUcmlhZCBQb2RcIiwgcmVndWxhcigzKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMywgLU1hdGguUEkvMiwgLjM4LCAuMzgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcIlNwaWtlIExhbmNlXCIsIFtbMCwtMV0sWy40OCwuNjVdLFsuMTgsLjQyXSxbMCwxXSxbLS4xOCwuNDJdLFstLjQ4LC42NV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtYXJjLWthdGFuYVwiLCBcIlN3b3JkIEFyYyBLYXRhbmFcIiwgW1stLjE2LC0xXSwgWy4xNiwtMV0sIFsuMjIsLjI4XSwgWy40OCwuNjJdLCBbLjE4LC41Ml0sIFsuMSwxXSwgWy0uMSwxXSwgWy0uMTgsLjUyXSwgWy0uNDgsLjYyXSwgWy0uMjIsLjI4XV0sIFwicGl0Y2hcIiwgW1tbLS4wNTUsLS43Ml0sIFsuMDU1LC0uNzJdLCBbLjA1NSwuMThdLCBbLS4wNTUsLjE4XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWNsZWF2ZXItd2lkZVwiLCBcIlN3b3JkIENsZWF2ZXIgV2lkZVwiLCBbWy0uMjgsLTFdLCBbLjI4LC0xXSwgWy40NCwtLjc2XSwgWy4zNCwuMzRdLCBbLjcyLC41OF0sIFsuMjIsLjU1XSwgWy4xNiwxXSwgWy0uMTYsMV0sIFstLjIyLC41NV0sIFstLjcyLC41OF0sIFstLjM0LC4zNF0sIFstLjQ0LC0uNzZdXSwgXCJyb2xsXCIsIFtbWy0uMSwtLjY4XSwgWy4xLC0uNjhdLCBbLjA4LC4xOF0sIFstLjA4LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1uZWVkbGUtc2FicmVcIiwgXCJTd29yZCBOZWVkbGUgU2FicmVcIiwgW1swLC0xXSwgWy4wOCwtLjgyXSwgWy4xMSwuNV0sIFsuMzIsLjcyXSwgWy4wOCwuNjRdLCBbLjA1LDFdLCBbLS4wNSwxXSwgWy0uMDgsLjY0XSwgWy0uMzIsLjcyXSwgWy0uMTEsLjVdLCBbLS4wOCwtLjgyXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1ndWFyZGVkLWJsYWRlXCIsIFwiU3dvcmQgR3VhcmRlZCBCbGFkZVwiLCBbWy0uMTIsLTFdLCBbLjEyLC0xXSwgWy4xNiwuMzZdLCBbLjYyLC4zNl0sIFsuNjIsLjU0XSwgWy4xNCwuNTZdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE0LC41Nl0sIFstLjYyLC41NF0sIFstLjYyLC4zNl0sIFstLjE2LC4zNl1dLCBcInlhd1wiLCBbW1stLjA0NSwtLjcyXSwgWy4wNDUsLS43Ml0sIFsuMDQ1LC4yMl0sIFstLjA0NSwuMjJdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtcHJpc20tZ3JlYXRibGFkZVwiLCBcIlN3b3JkIFByaXNtIEdyZWF0YmxhZGVcIiwgW1swLC0xXSwgWy4zNCwtLjc0XSwgWy4zLC4yOF0sIFsuNTYsLjUyXSwgWy4yLC40OF0sIFsuMTIsMV0sIFstLjEyLDFdLCBbLS4yLC40OF0sIFstLjU2LC41Ml0sIFstLjMsLjI4XSwgWy0uMzQsLS43NF1dLCBcInJvbGxcIiwgW1tbLS4wOCwtLjQ4XSwgWy4wOCwtLjQ4XSwgWy4wOCwuMTZdLCBbLS4wOCwuMTZdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwib3JiaXQtZHJvbmVcIiwgXCJPcmJpdCBEcm9uZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwgMCwgLjU4LCAuNTgpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzaGllbGQtcmluZ1wiLCBcIlNoaWVsZCBSaW5nXCIsIHJlZ3VsYXIoMzIpLCBcIm9yYml0XCIsIFtyZWd1bGFyKDMyLCAwLCAuOTEsIC45MSldKSxcblxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWRhcnRcIiwgXCJEYXJ0XCIsIFtbLTEsLS43XSxbMSwwXSxbLTEsLjddLFstLjQ1LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1raXRlXCIsIFwiS2l0ZVwiLCBbWy0xLC0uNzVdLFsxLDBdLFstMSwuNzVdLFstLjU1LDBdXSwgXCJyb2xsXCIsIFtyZWd1bGFyKDMsMCwuMzUsLjM1KV0pLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLW5lZWRsZVwiLCBcIk5lZWRsZVwiLCBbWy0xLC0uNDJdLFsxLDBdLFstMSwuNDJdLFstLjU1LDBdXSwgXCJ5YXdcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdGFsb25cIiwgXCJUYWxvblwiLCBzdGFyKDMsLjI4KSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXNoYXJkXCIsIFwiU2hhcmRcIiwgZGlhbW9uZCwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci12ZWVcIiwgXCJWZWVcIiwgY2hldnJvbiwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1leWVcIiwgXCJXYXRjaGVyXCIsIHJlZ3VsYXIoMywgTWF0aC5QSS8yKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMyxNYXRoLlBJLzIsLjQyLC40MildKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1idXJzdFwiLCBcIkJ1cnN0XCIsIHN0YXIoOCwuMzUpLCBcInB1bHNlXCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLWJvbHRcIiwgXCJCb2x0XCIsIFtbLS43LC0xXSxbLjE1LC0uMzVdLFstLjI1LC0uMl0sWy43LDFdLFstLjEsLjMyXSxbLjMsLjE1XV0sIFwicm9sbFwiKSxcblxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZnJhbWVcIiwgXCJGcmFtZVwiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDgseSouNDhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItZ2VtXCIsIFwiR2VtXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1oZXhcIiwgXCJIZXggQ29yZVwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3duXCIsIFwiQ3Jvd25cIiwgW1stMSwtLjc1XSxbLS41LC0uNTVdLFswLC0uODVdLFsuNSwtLjU1XSxbMSwtLjc1XSxbLjgsLjhdLFstLjgsLjhdXSwgXCJyb2xsXCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItY3Jvc3NcIiwgXCJDcm9zc1wiLCBbWy0uMzUsLTFdLFsuMzUsLTFdLFsuMzUsLS4zNV0sWzEsLS4zNV0sWzEsLjM1XSxbLjM1LC4zNV0sWy4zNSwxXSxbLS4zNSwxXSxbLS4zNSwuMzVdLFstMSwuMzVdLFstMSwtLjM1XSxbLS4zNSwtLjM1XV0sIFwieWF3XCIpLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJQcmlzbVwiLCBkaWFtb25kLCBcInB1bHNlXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlYXJcIiwgXCJHZWFyXCIsIHN0YXIoOCwuNzIpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjI4LC4yOCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXhcIiwgXCJYIENvcmVcIiwgW1stMSwtLjY1XSxbLS42NSwtMV0sWzAsLS4zNV0sWy42NSwtMV0sWzEsLS42NV0sWy4zNSwwXSxbMSwuNjVdLFsuNjUsMV0sWzAsLjM1XSxbLS42NSwxXSxbLTEsLjY1XSxbLS4zNSwwXV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXNsYWJcIiwgXCJTbGFiXCIsIFtbLS42NSwtMV0sWzEsLTFdLFsuNjUsMV0sWy0xLDFdXSwgXCJwaXRjaFwiKSxcblxuICBtYWtlKFwidGFua1wiLCBcInRhbmstaGV4XCIsIFwiSGVhdnkgSGV4XCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsMCwuMzgsLjM4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmFyXCIsIFwiQXJtb3IgQmFyXCIsIFtbLS43NSwtMV0sWy43NSwtMV0sWzEsLS40NV0sWy43NSwxXSxbLS43NSwxXSxbLTEsLjQ1XV0sIFwicGl0Y2hcIiwgW1tbLS40OCwtLjE4XSxbLjQ4LC0uMThdLFsuNDgsLjE4XSxbLS40OCwuMThdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstYmxvY2tcIiwgXCJCbG9ja1wiLCBzcXVhcmUsIFwicm9sbFwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNDIseSouNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstb2N0XCIsIFwiT2N0YWdvblwiLCByZWd1bGFyKDgpLCBcInlhd1wiLCBbcmVndWxhcig4LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWZvcnRcIiwgXCJGb3J0cmVzc1wiLCByZWd1bGFyKDYpLCBcInBpdGNoXCIsIFtyZWd1bGFyKDYsMCwuNTgsLjU4KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstcmVhY3RvclwiLCBcIlJlYWN0b3JcIiwgcmVndWxhcigxMCksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuNTQsLjU0KV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstY2l0YWRlbFwiLCBcIkNpdGFkZWxcIiwgW1stLjY1LC0xXSxbLjY1LC0xXSxbLjY1LC0uNzJdLFsxLC0uNzJdLFsxLC43Ml0sWy42NSwuNzJdLFsuNjUsMV0sWy0uNjUsMV0sWy0uNjUsLjcyXSxbLTEsLjcyXSxbLTEsLS43Ml0sWy0uNjUsLS43Ml1dLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjI4LHkqLjI4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJ1bmtlclwiLCBcIkJ1bmtlclwiLCBbWy0uNzIsLTFdLFsuNzIsLTFdLFsxLC0uNThdLFsxLC41OF0sWy43MiwxXSxbLS43MiwxXSxbLTEsLjU4XSxbLTEsLS41OF1dLCBcInBpdGNoXCIsIFtbWy0uNSwtLjE0XSxbLjUsLS4xNF0sWy41LC4xNF0sWy0uNSwuMTRdXV0pLFxuICBtYWtlKFwidGFua1wiLCBcInRhbmstc3VuXCIsIFwiU3VuIFRhbmtcIiwgcmVndWxhcigxMiksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjI4LC4yOCldKSxcblxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZGlhbW9uZFwiLCBcIlBoYXNlIERpYW1vbmRcIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMix5Ki4yXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNoZXZyb25cIiwgXCJTbGlwc3RyZWFtXCIsIFtbLTEsLS44XSxbLS4yLDBdLFstMSwuOF0sWy0uMzUsLjhdLFsuNDUsMF0sWy0uMzUsLS44XSxbLjI1LC0uOF0sWzEsMF0sWy4yNSwuOF1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stc3F1YXJlXCIsIFwiVGlsdCBCb3hcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjM0LHkqLjM0XSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWNvbXBhc3NcIiwgXCJDb21wYXNzXCIsIGRpYW1vbmQsIFwieWF3XCIpLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZXllXCIsIFwiUGhhc2UgRXllXCIsIHJlZ3VsYXIoMyksIFwicHVsc2VcIiwgW3JlZ3VsYXIoOCwwLC4xOCwuMTgpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1ob3VyZ2xhc3NcIiwgXCJIb3VyZ2xhc3NcIiwgW1stMSwtMV0sWzEsLTFdLFsuMjgsMF0sWzEsMV0sWy0xLDFdLFstLjI4LDBdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWxpbmtcIiwgXCJMaW5rXCIsIHJlZ3VsYXIoMTIsMCwxLC41NSksIFwieWF3XCIsIFtyZWd1bGFyKDEyLDAsLjYyLC4yMildKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXZvcnRleFwiLCBcIlZvcnRleFwiLCBzdGFyKDcsLjU2KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDcsMCwuMjUsLjI1KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2stZ2F0ZVwiLCBcIkdob3N0IEdhdGVcIiwgc3F1YXJlLCBcInB1bHNlXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki43OCx5Ki43OF0gYXMgY29uc3QpXSksXG5cbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc3RhclwiLCBcIk5vdmEgU3RhclwiLCBzdGFyKDgsLjU1KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMywuMyldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2F3XCIsIFwiSGFsbyBTYXdcIiwgc3RhcigxMiwuNzIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC40MiwuNDIpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLWNyb3duXCIsIFwiVm9pZCBDcm93blwiLCBzdGFyKDcsLjQ4KSwgXCJwaXRjaFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIyLHkqLjIyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtcHJpc21cIiwgXCJSb3lhbCBQcmlzbVwiLCBkaWFtb25kLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki41LHkqLjVdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1vcmJpdFwiLCBcIk9yYml0IEV5ZVwiLCByZWd1bGFyKDEyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigxMiwwLC42LC42KSwgcmVndWxhcigxMiwwLC4yLC4yKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jaXJjdWl0XCIsIFwiQ2lyY3VpdCBMb3JkXCIsIHN0YXIoOCwuNzUpLCBcInlhd1wiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNCx5Ki40XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtc2VudGluZWxcIiwgXCJTZW50aW5lbFwiLCBzdGFyKDEwLC42MiksIFwicHVsc2VcIiwgW3JlZ3VsYXIoMTAsMCwuMjIsLjIyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS13aW5nc1wiLCBcIk5pZ2h0IFdpbmdzXCIsIFtbLTEsLS44XSxbLS43LC4zNV0sWy0uMjUsLjA1XSxbMCwuODVdLFsuMjUsLjA1XSxbLjcsLjM1XSxbMSwtLjhdLFsuMzUsLS4zNV0sWzAsLS4wNV0sWy0uMzUsLS4zNV1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1lbXBlcm9yXCIsIFwiRW1wZXJvclwiLCBzdGFyKDgsLjQ4KSwgXCJyb2xsXCIsIFtyZWd1bGFyKDgsMCwuMjQsLjI0KV0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE5lb25TaGFwZSA9IChpZDogc3RyaW5nKTogTmVvbkdlb21ldHJpY1NoYXBlRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCA9PlxuICBuZW9uU2hhcGVDYXRhbG9nLmZpbmQoc2hhcGUgPT4gc2hhcGUuaWQgPT09IGlkKTtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHR5cGUgeyBOZW9uUHJpbWl0aXZlIH0gZnJvbSBcIi4vcHJpbWl0aXZlLXJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IE5lb25Ub3BEb3duU2NlbmUgfSBmcm9tIFwiLi90b3AtZG93bi1zY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgbGFuZVJ1bm5lclNjZW5lSWRzID0gW1wibmVvbkhhbGxcIiwgXCJhdXJvcmFcIiwgXCJjcnlzdGFsRm9yZ2VcIiwgXCJ2b2lkR2FyZGVuXCIsIFwic29sYXJBcnJheVwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgTGFuZVJ1bm5lclNjZW5lSWQgPSB0eXBlb2YgbGFuZVJ1bm5lclNjZW5lSWRzW251bWJlcl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyB7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdGltZU1zOiBudW1iZXI7XG59XG5cbmNvbnN0IHNjZW5lTmFtZXM6IFJlY29yZDxMYW5lUnVubmVyU2NlbmVJZCwgc3RyaW5nPiA9IHtcbiAgbmVvbkhhbGw6IFwiTmVvbiBIYWxsXCIsXG4gIGF1cm9yYTogXCJBdXJvcmFcIixcbiAgY3J5c3RhbEZvcmdlOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgdm9pZEdhcmRlbjogXCJWb2lkIEdhcmRlblwiLFxuICBzb2xhckFycmF5OiBcIlNvbGFyIEFycmF5XCIsXG59O1xuXG5jb25zdCBoYWxsQm90dG9tV2lkdGggPSAwLjkyO1xuY29uc3QgaGFsbEZsb29yQ29sb3IgPSBcIiMwNTEwMWZcIjtcbmNvbnN0IGhhbGxEZWVwQmx1ZSA9IFwiIzEyMzU2YVwiO1xuY29uc3QgaGFsbE11dGVkQmx1ZSA9IFwiIzFiNGM4ZFwiO1xuY29uc3QgaGFsbE11dGVkQ3lhbiA9IFwiIzJhYzRkY1wiO1xuY29uc3QgaGFsbE11dGVkVmlvbGV0ID0gXCIjNDUzMDc5XCI7XG5jb25zdCBoYWxsQWNjZW50UGluayA9IFwiI2E3MzU3ZVwiO1xuY29uc3QgaGFsbEVuZXJneVNwZWVkID0gMC4wMDE3O1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZVBhbGV0dGUge1xuICBmbG9vcjogc3RyaW5nO1xuICBib3VuZGFyeTogc3RyaW5nO1xuICBsYW5lOiBzdHJpbmc7XG4gIGNlbnRlckxhbmU6IHN0cmluZztcbiAgYWNjZW50OiBzdHJpbmc7XG4gIGxhbmVIaWdobGlnaHQ6IHN0cmluZztcbn1cblxuY29uc3Qgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IGhhbGxGbG9vckNvbG9yLFxuICBib3VuZGFyeTogaGFsbERlZXBCbHVlLFxuICBsYW5lOiBoYWxsTXV0ZWRCbHVlLFxuICBjZW50ZXJMYW5lOiBoYWxsTXV0ZWRWaW9sZXQsXG4gIGFjY2VudDogaGFsbEFjY2VudFBpbmssXG4gIGxhbmVIaWdobGlnaHQ6IGhhbGxNdXRlZEN5YW4sXG59O1xuXG5jb25zdCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzAzMTEwZlwiLFxuICBib3VuZGFyeTogXCIjMTc4YzkyXCIsXG4gIGxhbmU6IFwiIzE3ZDdiM1wiLFxuICBjZW50ZXJMYW5lOiBcIiM4ZjU2ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmYzdcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjYjlmZjZhXCIsXG59O1xuXG5jb25zdCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzA3MTAxOFwiLFxuICBib3VuZGFyeTogXCIjMjZkN2ZmXCIsXG4gIGxhbmU6IFwiIzYzZjFmZlwiLFxuICBjZW50ZXJMYW5lOiBcIiNmZjVmZDhcIixcbiAgYWNjZW50OiBcIiNmZmI4NGRcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZjRmYmZmXCIsXG59O1xuXG5jb25zdCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwODA4MThcIixcbiAgYm91bmRhcnk6IFwiIzZmNTNmZlwiLFxuICBsYW5lOiBcIiMzNWU4YjZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY0ZmM3XCIsXG4gIGFjY2VudDogXCIjYjlmZjZhXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiIzliZDdmZlwiLFxufTtcblxuY29uc3Qgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMTEwYzA3XCIsXG4gIGJvdW5kYXJ5OiBcIiNmZjllMzhcIixcbiAgbGFuZTogXCIjZmZkNDVhXCIsXG4gIGNlbnRlckxhbmU6IFwiIzI2ZDdmZlwiLFxuICBhY2NlbnQ6IFwiI2ZmNGY2NlwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiNmZmY2YjhcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5lUnVubmVyU2NlbmVOYW1lKHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNjZW5lTmFtZXNbc2NlbmVJZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhbmVSdW5uZXJTY2VuZUlkKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBMYW5lUnVubmVyU2NlbmVJZCB7XG4gIHJldHVybiAobGFuZVJ1bm5lclNjZW5lSWRzIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5lUnVubmVyU2NlbmUob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICByZXR1cm4gc2NlbmVDcmVhdG9yc1tvcHRpb25zLnNjZW5lSWRdKG9wdGlvbnMpO1xufVxuXG5jb25zdCBzY2VuZUNyZWF0b3JzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKSA9PiBOZW9uVG9wRG93blNjZW5lPiA9IHtcbiAgbmVvbkhhbGw6IGNyZWF0ZU5lb25IYWxsLFxuICBhdXJvcmE6IGNyZWF0ZUF1cm9yYSxcbiAgY3J5c3RhbEZvcmdlOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBjcnlzdGFsRm9yZ2VMYW5lUnVubmVyUGFsZXR0ZSwgYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyksXG4gIHZvaWRHYXJkZW46IG9wdGlvbnMgPT4gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnMsIHZvaWRHYXJkZW5MYW5lUnVubmVyUGFsZXR0ZSwgYWRkVm9pZEdhcmRlbkRldGFpbHMpLFxuICBzb2xhckFycmF5OiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCBzb2xhckFycmF5TGFuZVJ1bm5lclBhbGV0dGUsIGFkZFNvbGFyQXJyYXlEZXRhaWxzKSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5lb25IYWxsKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgc3RhbmRhcmRMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkSGFsbExhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRmxvb3JHbHlwaHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbFNpZGVQYW5lbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxFbmVyZ3lUcmFjZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG5cbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdXJvcmEob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyk6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuXG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBhdXJvcmFMYW5lUnVubmVyUGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkQXVyb3JhSG9yaXpvblZlaWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhlbWVkTGFuZVJ1bm5lclNjZW5lKFxuICBvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zLFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICBhZGREZXRhaWxzOiAoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKSA9PiB2b2lkLFxuKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG4gIGFkZFN0YW5kYXJkTGFuZVJ1bm5lclBlcnNwZWN0aXZlKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCBwYWxldHRlLCB0aW1lTXMpO1xuICBhZGRUaGVtZWRMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkRGV0YWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgcmV0dXJuIHsgcHJpbWl0aXZlcyB9O1xufVxuXG5mdW5jdGlvbiBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgY29uc3QgdnAgPSB7IHg6IHdpZHRoICogLjUsIHk6IC1oZWlnaHQgfTtcbiAgY29uc3QgYm90dG9tWSA9IGhlaWdodCAqIC45ODU7XG4gIGNvbnN0IGJvdHRvbUhhbGYgPSB3aWR0aCAqIGhhbGxCb3R0b21XaWR0aCAqIC41O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2cCxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgLSBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IGJvdHRvbVkgfSxcbiAgICBsZWZ0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICAgIHJpZ2h0SG9yaXpvbjogeyB4OiB3aWR0aCAqIC41ICsgYm90dG9tSGFsZiwgeTogdnAueSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShcbiAgaXRlbXM6IE5lb25QcmltaXRpdmVbXSxcbiAgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sXG4gIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsXG4gIHRpbWVNczogbnVtYmVyLFxuKTogdm9pZCB7XG4gIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtcywgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSk7XG4gIGFkZExhbmVSdW5uZXJEZXB0aExpbmVzKGl0ZW1zLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckZsb29yKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBwdWxzZSA9IC41NSArIE1hdGguc2luKHRpbWVNcyAqIGhhbGxFbmVyZ3lTcGVlZCkgKiAuMjtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogaGVpZ2h0ICogLjQyLCB3aWR0aDogd2lkdGggKiBoYWxsQm90dG9tV2lkdGgsIGhlaWdodDogaGVpZ2h0ICogMS4wOCwgY29sb3I6IHBhbGV0dGUuZmxvb3IsIHNlY29uZGFyeUNvbG9yOiBcIiMwMjA1MGRcIiwgZ2xvdzogLjA1LCBpbnRlbnNpdHk6IC4yMywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjksIHdpZHRoOiB3aWR0aCAqIC4zNCwgaGVpZ2h0OiAxLjQsIGNvbG9yOiBwYWxldHRlLmJvdW5kYXJ5LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBnbG93OiAuMywgaW50ZW5zaXR5OiAuMTggKyBwdWxzZSAqIC4wNywgc2hhcGU6IFwiYm9sdFwiIH0pO1xuICBpdGVtcy5wdXNoKHsgeDogd2lkdGggLyAyLCB5OiAtaGVpZ2h0ICogLjc4LCB3aWR0aDogd2lkdGggKiAuMTgsIGhlaWdodDogMS4yLCBjb2xvcjogcGFsZXR0ZS5hY2NlbnQsIHNlY29uZGFyeUNvbG9yOiBwYWxldHRlLmNlbnRlckxhbmUsIGdsb3c6IC4yNCwgaW50ZW5zaXR5OiAuMDgsIHNoYXBlOiBcImJvbHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lclJhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IFtib3R0b20sIGhvcml6b25dIG9mIFtbbGVmdEJvdHRvbSwgbGVmdEhvcml6b25dLCBbcmlnaHRCb3R0b20sIHJpZ2h0SG9yaXpvbl1dIGFzIGNvbnN0KSB7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGJvdHRvbSwgaG9yaXpvbiwgcGFsZXR0ZS5ib3VuZGFyeSwgLjQ4LCA2LjUpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgLjU2LCAxLjMpO1xuICB9XG5cbiAgZm9yIChsZXQgbGFuZSA9IDE7IGxhbmUgPD0gMzsgbGFuZSsrKSB7XG4gICAgY29uc3QgdSA9IGxhbmUgLyA0O1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVycFBvaW50KGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCB1KTtcbiAgICBjb25zdCBlbmQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3QgY29sb3IgPSBsYW5lID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5sYW5lO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBjb2xvciwgbGFuZSA9PT0gMiA/IC4yOCA6IC4yLCAzLjQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBzdGFydCwgZW5kLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIGxhbmUgPT09IDIgPyAuMjYgOiAuMTgsIC45KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDE1OyByb3crKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgcm93UHVsc2UgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA0ODAgKyByb3cgKiAuNzgpICogLjQyO1xuICAgIGNvbnN0IHN1cmdlID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZU1zIC8gODIwIC0gcm93ICogLjcyKSk7XG4gICAgY29uc3QgY29sb3IgPSByb3cgJSA0ID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcm93ICUgNCA9PT0gMSA/IHBhbGV0dGUubGFuZSA6IHJvdyAlIDQgPT09IDIgPyBwYWxldHRlLmNlbnRlckxhbmUgOiBwYWxldHRlLmFjY2VudDtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGNvbG9yLCAoLjE1ICsgdCAqIC4yMykgKiAoLjU1ICsgcm93UHVsc2UgKiAuNDUpICsgc3VyZ2UgKiAuMDU1LCAzLjEgKyB0ICogMik7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4yICsgdCAqIC4yNykgKiAoLjUyICsgcm93UHVsc2UgKiAuNDgpICsgc3VyZ2UgKiAuMDcsIC43NSArIHQgKiAuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA3OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTkwMCArIHB1bHNlSW5kZXggLyA3KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41NSk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zNCAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIGhhbGxNdXRlZEN5YW4sIG9wYWNpdHksIDEuMSArIHQgKiAxLjQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxGbG9vckdseXBocyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IHJvd3MgPSBbMiwgNCwgNiwgOCwgMTAsIDEyXTtcbiAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyhyb3cgLyAxNCwgMS44Mik7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgLjUpO1xuICAgIGNvbnN0IHNjYWxlID0gLjQ1ICsgdCAqIDEuMTtcbiAgICBjb25zdCBwdWxzZSA9IC40OCArIE1hdGguc2luKHRpbWVNcyAvIDcyMCArIHJvdyAqIDEuMykgKiAuMjQ7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IDcgKiBzY2FsZSxcbiAgICAgIGhlaWdodDogNyAqIHNjYWxlLFxuICAgICAgY29sb3I6IHJvdyAlIDQgPT09IDAgPyBoYWxsTXV0ZWRWaW9sZXQgOiBoYWxsRGVlcEJsdWUsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogcm93ICUgMyA9PT0gMCA/IGhhbGxBY2NlbnRQaW5rIDogaGFsbE11dGVkQ3lhbixcbiAgICAgIGdsb3c6IC4zNCxcbiAgICAgIGludGVuc2l0eTogLjI0ICsgcHVsc2UgKiAuMTYsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEhvcml6b25EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgY29uc3QgZ2xvd1B1bHNlID0gLjc1ICsgTWF0aC5zaW4odGltZU1zIC8gNjgwKSAqIC4yNTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjEyLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAxMiB9LCB7IHg6IHZwLnggKyB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgaGFsbEFjY2VudFBpbmssIC4yICsgZ2xvd1B1bHNlICogLjA4LCAxLjEpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCAtIHdpZHRoICogLjA2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRDeWFuLCAuMTYsIC44NSk7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggKyB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIGhhbGxNdXRlZFZpb2xldCwgLjE2LCAuODUpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCArIC41KSAvIDg7XG4gICAgY29uc3QgYmFzZSA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB1KTtcbiAgICBjb25zdCBzaWRlQmlhcyA9IE1hdGguYWJzKHUgLSAuNSkgKiAyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogYmFzZS54LFxuICAgICAgeTogYmFzZS55IC0gaGVpZ2h0ICogKC4wMTggKyBzaWRlQmlhcyAqIC4wMTgpLFxuICAgICAgd2lkdGg6IDEgKyBzaWRlQmlhcyAqIC43LFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHNpZGVCaWFzICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsQWNjZW50UGluayxcbiAgICAgIGdsb3c6IC4yNCxcbiAgICAgIGludGVuc2l0eTogLjA3ICsgZ2xvd1B1bHNlICogLjAzNSxcbiAgICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbihpbmRleCAqIDEuNykgKiAuMTIsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbFNpZGVQYW5lbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGNvbnN0IHNpZGUgb2YgWzAsIDFdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDEwLCAxLjY4KTtcbiAgICAgIGNvbnN0IHJhaWwgPSBzaWRlID09PSAwXG4gICAgICAgID8gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KVxuICAgICAgICA6IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICAgIGNvbnN0IG91dHdhcmQgPSBzaWRlID09PSAwID8gLTEgOiAxO1xuICAgICAgY29uc3QgZmxpY2tlciA9IC41OCArIE1hdGguc2luKHRpbWVNcyAvIDYwMCArIGluZGV4ICogMS41ICsgc2lkZSkgKiAuMjg7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgeDogcmFpbC54ICsgb3V0d2FyZCAqIHdpZHRoICogKC4wMzUgKyB0ICogLjA2KSxcbiAgICAgICAgeTogcmFpbC55IC0gaGVpZ2h0ICogKC4wMTggKyB0ICogLjAxMiksXG4gICAgICAgIHdpZHRoOiAxLjIgKyB0ICogMS4yLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDM1ICsgdCAqIC4wOCksXG4gICAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMSA/IGhhbGxNdXRlZEJsdWUgOiBoYWxsTXV0ZWRDeWFuLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcjogaGFsbE11dGVkVmlvbGV0LFxuICAgICAgICBnbG93OiAuMyxcbiAgICAgICAgaW50ZW5zaXR5OiAoLjA3NSArIHQgKiAuMDY1KSAqIGZsaWNrZXIsXG4gICAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRW5lcmd5VHJhY2VzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI0OyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGVwdGggPSAuMTIgKyAoKGluZGV4ICogMzcpICUgMTAwKSAvIDExNjtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5wb3coZGVwdGgsIDEuNykpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPT09IDAgPyAuMTggOiBpbmRleCAlIDQgPT09IDEgPyAuMzQgOiBpbmRleCAlIDQgPT09IDIgPyAuNjYgOiAuODI7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIHNpZGUgKyBNYXRoLnNpbihpbmRleCAqIDEuNyArIHRpbWVNcyAvIDE3MDApICogLjAzNSk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC42MiArIE1hdGguc2luKHRpbWVNcyAvIDM5MCArIGluZGV4ICogMS4xKSAqIC4zODtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IC44ICsgaW5kZXggJSAzICogLjUsXG4gICAgICBoZWlnaHQ6IDEwICsgaW5kZXggJSA1ICogNyxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDUgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGluZGV4ICUgMyA9PT0gMCA/IGhhbGxNdXRlZEN5YW4gOiBoYWxsTXV0ZWRCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIGdsb3c6IC4zMixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIChpbmRleCAlIDQpICogLjAxOCkgKiBzaGltbWVyLFxuICAgICAgc2hhcGU6IFwiYm9sdFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUxhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA5OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTU1MCArIHB1bHNlSW5kZXggLyA5KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS40OCk7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3Qgb3BhY2l0eSA9IC4zMiAqICgxIC0gdHJhdmVsKTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMxN2Q3YjNcIiwgb3BhY2l0eSwgMSArIHQgKiAxLjcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUdyb3VuZEZsYXJlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjA4ICsgKChpbmRleCAqIDI5KSAlIDEwMCkgLyAxMTI7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjYyKSk7XG4gICAgY29uc3QgbGFuZVNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMjIgOiAuNzg7XG4gICAgY29uc3QgbGVmdCA9IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcmlnaHQgPSBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgY29uc3QgcG9pbnQgPSBsZXJwUG9pbnQobGVmdCwgcmlnaHQsIGxhbmVTaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjEgKyB0aW1lTXMgLyAxODAwKSAqIC4wNCk7XG4gICAgY29uc3Qgc2hpbW1lciA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDQzMCArIGluZGV4ICogMS4zKSAqIC4zNTtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IHBvaW50LngsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDkgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogaW5kZXggJSAzID09PSAxID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC4zOCxcbiAgICAgIGludGVuc2l0eTogKC4wOCArIHQgKiAuMDYpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBpbmRleCAlIDQgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuMTgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXVyb3JhSG9yaXpvblZlaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IHZwLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDc7IGluZGV4KyspIHtcbiAgICBjb25zdCB1ID0gKGluZGV4IC0gMykgLyA2O1xuICAgIGNvbnN0IHdhdmUgPSBNYXRoLnNpbih0aW1lTXMgLyAxMTAwICsgaW5kZXggKiAuOSk7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiB2cC54ICsgdSAqIHdpZHRoICogLjM2LFxuICAgICAgeTogdnAueSArIGhlaWdodCAqICguMDc1ICsgaW5kZXggKiAuMDA2KSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDM1ICsgaW5kZXggKiAuMDA0KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4xMiArIE1hdGguYWJzKHdhdmUpICogLjAzKSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiMxN2Q3YjNcIiA6IFwiIzhmNTZmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4wNDUgKyBNYXRoLmFicyh3YXZlKSAqIC4wMjUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogdSAqIC4yOCArIHdhdmUgKiAuMDgsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVGhlbWVkTGFuZVNpZ25hbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBwdWxzZUluZGV4ID0gMDsgcHVsc2VJbmRleCA8IDg7IHB1bHNlSW5kZXgrKykge1xuICAgIGNvbnN0IHRyYXZlbCA9ICh0aW1lTXMgLyAxNzAwICsgcHVsc2VJbmRleCAvIDgpICUgMTtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3codHJhdmVsLCAxLjUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgcHVsc2VJbmRleCAlIDIgPT09IDAgPyBwYWxldHRlLmxhbmVIaWdobGlnaHQgOiBwYWxldHRlLmFjY2VudCwgLjI4ICogKDEgLSB0cmF2ZWwpLCAxLjEgKyB0ICogMS42KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDcnlzdGFsRm9yZ2VEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNjsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE3LCAxLjU1KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjE0IDogLjg2O1xuICAgIGNvbnN0IGVkZ2UgPSBsZXJwUG9pbnQobGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KSwgbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpLCBzaWRlKTtcbiAgICBjb25zdCBnbGludCA9IC41NSArIE1hdGguc2luKHRpbWVNcyAvIDUyMCArIGluZGV4ICogMS4xNykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBlZGdlLngsXG4gICAgICB5OiBlZGdlLnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxMiArIHQgKiAuMDEyKSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMjUgKyB0ICogLjA2KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmI4NGRcIiA6IFwiIzYzZjFmZlwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiI2ZmNWZkOFwiIDogXCIjZjRmYmZmXCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBnbGludCxcbiAgICAgIHNoYXBlOiBcImRpYW1vbmRcIixcbiAgICAgIHJvdGF0aW9uOiAoc2lkZSA8IC41ID8gLS4yMiA6IC4yMikgKyBNYXRoLnNpbih0aW1lTXMgLyAxNDAwICsgaW5kZXgpICogLjA4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMywgeTogdnAueSArIGhlaWdodCAqIC4wNDUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIFwiI2ZmYjg0ZFwiLCAuMjIsIDEuMyk7XG59XG5cbmZ1bmN0aW9uIGFkZFZvaWRHYXJkZW5EZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyguMDggKyAoKGluZGV4ICogMjMpICUgMTAwKSAvIDExMiwgMS42NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgNCA8IDIgPyAuMTggOiAuODI7XG4gICAgY29uc3QgY2VudGVyID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSArIE1hdGguc2luKHRpbWVNcyAvIDE5MDAgKyBpbmRleCkgKiAuMDM1KTtcbiAgICBjb25zdCBibG9vbSA9IC41ICsgTWF0aC5zaW4odGltZU1zIC8gNzYwICsgaW5kZXggKiAuOCkgKiAuMzI7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBjZW50ZXIueCxcbiAgICAgIHk6IGNlbnRlci55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBoZWlnaHQ6IHdpZHRoICogKC4wMDYgKyB0ICogLjAxNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjYjlmZjZhXCIgOiBcIiMzNWU4YjZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDIgPT09IDAgPyBcIiM2ZjUzZmZcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjQyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA3ICsgdCAqIC4wNSkgKiBibG9vbSxcbiAgICAgIHNoYXBlOiBpbmRleCAlIDIgPT09IDAgPyBcImRpYW1vbmRcIiA6IFwiYm9sdFwiLFxuICAgICAgcm90YXRpb246IE1hdGguc2luKHRpbWVNcyAvIDEyMDAgKyBpbmRleCkgKiAuNCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTgsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDcgfSwgXCIjMzVlOGI2XCIsIC4xOCwgMS4xKTtcbn1cblxuZnVuY3Rpb24gYWRkU29sYXJBcnJheURldGFpbHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQsIHZwIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE4OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KChpbmRleCArIDEpIC8gMTksIDEuNDgpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDIgPT09IDAgPyAuMSA6IC45O1xuICAgIGNvbnN0IG1vdW50ID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgcHVsc2UgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyA2MTAgKyBpbmRleCAqIDEuMDUpICogLjM7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBtb3VudC54LFxuICAgICAgeTogbW91bnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDE4ICsgdCAqIC4wMzUpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxMiArIHQgKiAuMDI0KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNmZmQ0NWFcIiA6IFwiI2ZmOWUzOFwiLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IGluZGV4ICUgNCA9PT0gMCA/IFwiIzI2ZDdmZlwiIDogXCIjZmY0ZjY2XCIsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA1NSkgKiBwdWxzZSxcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBzaWRlIDwgLjUgPyAtLjM4IDogLjM4LFxuICAgIH0pO1xuICB9XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMSwgeTogdnAueSArIGhlaWdodCAqIC4wMzUgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIFwiI2ZmZjZiOFwiLCAuMjQsIDEuNCk7XG59XG5cbmZ1bmN0aW9uIGFkZEdsb3dpbmdMaW5lKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCB0aGlja25lc3M6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkeCA9IGIueCAtIGEueDtcbiAgY29uc3QgZHkgPSBiLnkgLSBhLnk7XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgaXRlbXMucHVzaCh7XG4gICAgeDogKGEueCArIGIueCkgLyAyLFxuICAgIHk6IChhLnkgKyBiLnkpIC8gMixcbiAgICB3aWR0aDogdGhpY2tuZXNzLFxuICAgIGhlaWdodDogbGVuZ3RoIC8gMixcbiAgICBjb2xvcixcbiAgICBzZWNvbmRhcnlDb2xvcjogbmVvblBhbGV0dGUud2hpdGVIb3QsXG4gICAgZ2xvdzogLjMyLFxuICAgIGludGVuc2l0eTogYWxwaGEsXG4gICAgc2hhcGU6IFwibGluZVwiLFxuICAgIHJvdGF0aW9uOiBNYXRoLmF0YW4yKC1keCwgZHkpLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbGVycFBvaW50KGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCB0OiBudW1iZXIpOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICByZXR1cm4geyB4OiBhLnggKyAoYi54IC0gYS54KSAqIHQsIHk6IGEueSArIChiLnkgLSBhLnkpICogdCB9O1xufVxuIiwgImV4cG9ydCB0eXBlIFRlc3RTdGF0dXMgPSBcImJvb3RpbmdcIiB8IFwicmVhZHlcIiB8IFwicGFzc2VkXCIgfCBcImZhaWxlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RBc3NlcnRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3NlZDogYm9vbGVhbjtcbiAgZGV0YWlsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RQYWdlU25hcHNob3Qge1xuICBpZDogc3RyaW5nO1xuICBzdGF0dXM6IFRlc3RTdGF0dXM7XG4gIGFzc2VydGlvbnM6IFRlc3RBc3NlcnRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3RQYWdlPFREcml2ZXIgZXh0ZW5kcyBvYmplY3Q+KFxuICBpZDogc3RyaW5nLFxuICBkcml2ZXI6IFREcml2ZXIsXG4gIHN0YXR1c0VsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKSB7XG4gIGNvbnN0IHNuYXBzaG90OiBUZXN0UGFnZVNuYXBzaG90ID0geyBpZCwgc3RhdHVzOiBcImJvb3RpbmdcIiwgYXNzZXJ0aW9uczogW10gfTtcbiAgY29uc3QgcHVibGlzaCA9ICgpID0+IHtcbiAgICBzdGF0dXNFbGVtZW50LmRhdGFzZXQuc3RhdHVzID0gc25hcHNob3Quc3RhdHVzO1xuICAgIHN0YXR1c0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtzbmFwc2hvdC5zdGF0dXMudG9VcHBlckNhc2UoKX0gXHUwMEI3ICR7c25hcHNob3QuYXNzZXJ0aW9ucy5maWx0ZXIoYSA9PiBhLnBhc3NlZCkubGVuZ3RofS8ke3NuYXBzaG90LmFzc2VydGlvbnMubGVuZ3RofSBhc3NlcnRpb25zYDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50ZXN0U3RhdHVzID0gc25hcHNob3Quc3RhdHVzO1xuICB9O1xuICBjb25zdCBhcGkgPSB7XG4gICAgLi4uZHJpdmVyLFxuICAgIGdldFNuYXBzaG90OiAoKTogVGVzdFBhZ2VTbmFwc2hvdCA9PiBzdHJ1Y3R1cmVkQ2xvbmUoc25hcHNob3QpLFxuICAgIHJlYWR5KCk6IHZvaWQge1xuICAgICAgc25hcHNob3Quc3RhdHVzID0gXCJyZWFkeVwiO1xuICAgICAgcHVibGlzaCgpO1xuICAgIH0sXG4gICAgYXNzZXJ0KG5hbWU6IHN0cmluZywgcGFzc2VkOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LmFzc2VydGlvbnMucHVzaCh7IG5hbWUsIHBhc3NlZCwgZGV0YWlsIH0pO1xuICAgICAgc25hcHNob3Quc3RhdHVzID0gc25hcHNob3QuYXNzZXJ0aW9ucy5ldmVyeShhc3NlcnRpb24gPT4gYXNzZXJ0aW9uLnBhc3NlZCkgPyBcInBhc3NlZFwiIDogXCJmYWlsZWRcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICB9O1xuICAod2luZG93IGFzIHVua25vd24gYXMgeyBuZW9uRmFjdG9yeVRlc3Q6IHR5cGVvZiBhcGkgfSkubmVvbkZhY3RvcnlUZXN0ID0gYXBpO1xuICBwdWJsaXNoKCk7XG4gIHJldHVybiBhcGk7XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBDb21iYXRUdW5pbmcge1xuICAvKipcbiAgICogTXVsdGlwbGllcyB0aGUgd2hvbGUgY29tYmF0IHNpbXVsYXRpb24gcGFjZSB3aGlsZSBwcmVzZXJ2aW5nIHJlbGF0aXZlXG4gICAqIHRpbWluZyBiZXR3ZWVuIG1vdmVtZW50LCBjb29sZG93bnMsIHByb2plY3RpbGVzLCBhbmQgYXV0aG9yZWQgdHJhY2sgYmVhdHMuXG4gICAqL1xuICBnbG9iYWxTcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbWJhdFR1bmluZyA9IHtcbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiAxLjUsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBDb21iYXRUdW5pbmc7XG5cbmlmICghTnVtYmVyLmlzRmluaXRlKGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIpIHx8IGNvbWJhdFR1bmluZy5nbG9iYWxTcGVlZE11bHRpcGxpZXIgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb21iYXRUdW5pbmc6IGdsb2JhbFNwZWVkTXVsdGlwbGllciBtdXN0IGJlIGEgcG9zaXRpdmUgZmluaXRlIG51bWJlci5cIik7XG59XG4iLCAiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbWlseURlZmluaXRpb248VE1lbWJlcnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICBhYnN0cmFjdCByZWFkb25seSBmYW1pbHlJZDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICBhYnN0cmFjdCByZWFkb25seSBtZW1iZXJzOiBUTWVtYmVycztcblxuICBwcm90ZWN0ZWQgcmVxdWlyZShjb25kaXRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IGFzc2VydHMgY29uZGl0aW9uIHtcbiAgICBpZiAoIWNvbmRpdGlvbikgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuZmFtaWx5SWR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBhYnN0cmFjdCB2YWxpZGF0ZSgpOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3RQYXR0ZXJuID0gXCJzaW5nbGVcIiB8IFwicmFwaWRTaW5nbGVcIiB8IFwiYnVyc3RcIiB8IFwiaGVhdnlTaW5nbGVcIiB8IFwicGFpcmVkU3ByZWFkXCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlQmVoYXZpb3IgPSBcInN0cmFpZ2h0XCIgfCBcInBpZXJjaW5nU3RyYWlnaHRcIjtcbmV4cG9ydCB0eXBlIFByb2plY3RpbGVTaGFwZSA9IFwibmVlZGxlXCIgfCBcImRhcnRcIiB8IFwic2x1Z1wiIHwgXCJzcGxpdEJvbHRcIjtcbmV4cG9ydCB0eXBlIE11enpsZUVmZmVjdCA9IFwiY3Jpc3BTdGFyXCIgfCBcInJhcGlkRmxpY2tlclwiIHwgXCJncm91cGVkUHVsc2VcIiB8IFwic2hvY2tEaWFtb25kXCIgfCBcInR3aW5Qcm9uZ3NcIjtcbmV4cG9ydCB0eXBlIEltcGFjdEVmZmVjdCA9IFwicGluU3BhcmtcIiB8IFwibmVlZGxlU2NhdHRlclwiIHwgXCJidXJzdENyb3NzXCIgfCBcImltcGFjdFJpbmdcIiB8IFwic3BsaXRSaXBwbGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHdW5MZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGZpcmVSYXRlUGVyU2Vjb25kOiBudW1iZXI7XG4gIGRhbWFnZTogbnVtYmVyO1xuICBwcm9qZWN0aWxlU3BlZWQ6IG51bWJlcjtcbiAgcHJvamVjdGlsZVJhZGl1czogbnVtYmVyO1xuICBjb2xsaXNpb25SYWRpdXNTY2FsZT86IG51bWJlcjtcbiAgcHJvamVjdGlsZUNvdW50OiBudW1iZXI7XG4gIGJ1cnN0Q291bnQ6IG51bWJlcjtcbiAgYnVyc3RJbnRlcnZhbE1zOiBudW1iZXI7XG4gIHNwcmVhZERlZ3JlZXM6IG51bWJlcjtcbiAgcGllcmNlOiBudW1iZXI7XG4gIHRyYWlsTGVuZ3RoOiBudW1iZXI7XG4gIHRyYWNlckV2ZXJ5TnRoU2hvdDogbnVtYmVyO1xuICBpbXBhY3RSYWRpdXM/OiBudW1iZXI7XG4gIGtub2NrYmFjazogbnVtYmVyO1xuICBtdXp6bGVGbGFzaFNjYWxlOiBudW1iZXI7XG4gIGhpdEZsYXNoU2NhbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdW5WaXN1YWxJZGVudGl0eSB7XG4gIHNpbGhvdWV0dGU6IHN0cmluZztcbiAgbW90aW9uTGFuZ3VhZ2U6IHN0cmluZztcbiAgcHJvamVjdGlsZVNoYXBlOiBQcm9qZWN0aWxlU2hhcGU7XG4gIHByb2plY3RpbGVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgdHJhaWxDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgY29yZUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBwcm9qZWN0aWxlQXNwZWN0OiBudW1iZXI7XG4gIHRyYWlsV2lkdGhTY2FsZTogbnVtYmVyO1xuICB2aXN1YWxJbnRlbnNpdHk6IG51bWJlcjtcbiAgbXV6emxlRWZmZWN0OiBNdXp6bGVFZmZlY3Q7XG4gIGltcGFjdEVmZmVjdDogSW1wYWN0RWZmZWN0O1xuICBtdXp6bGVEdXJhdGlvbk1zOiBudW1iZXI7XG4gIGltcGFjdER1cmF0aW9uTXM6IG51bWJlcjtcbiAgaG9yaXpvbnRhbEppdHRlcjogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIgfCBcImZpcnN0QnVpbGRcIiB8IFwicHJlc3N1cmVcIjtcbiAgc2hvdFBhdHRlcm46IFNob3RQYXR0ZXJuO1xuICBwcm9qZWN0aWxlQmVoYXZpb3I6IFByb2plY3RpbGVCZWhhdmlvcjtcbiAgdmlzdWFsSWRlbnRpdHk6IEd1blZpc3VhbElkZW50aXR5O1xuICBsZXZlbHM6IHJlYWRvbmx5IEd1bkxldmVsW107XG59XG5cbmNvbnN0IGxldmVsID0gKFxuICBsZXZlbE51bWJlcjogbnVtYmVyLFxuICB2YWx1ZXM6IE9taXQ8R3VuTGV2ZWwsIFwibGV2ZWxcIiB8IFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIj4gJlxuICAgIFBhcnRpYWw8UGljazxHdW5MZXZlbCwgXCJwcm9qZWN0aWxlQ291bnRcIiB8IFwiYnVyc3RDb3VudFwiIHwgXCJidXJzdEludGVydmFsTXNcIiB8IFwic3ByZWFkRGVncmVlc1wiIHwgXCJwaWVyY2VcIiB8IFwidHJhY2VyRXZlcnlOdGhTaG90XCIgfCBcImtub2NrYmFja1wiIHwgXCJpbXBhY3RSYWRpdXNcIj4+LFxuKTogR3VuTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICBwcm9qZWN0aWxlQ291bnQ6IDEsXG4gIGJ1cnN0Q291bnQ6IDEsXG4gIGJ1cnN0SW50ZXJ2YWxNczogMCxcbiAgc3ByZWFkRGVncmVlczogMCxcbiAgcGllcmNlOiAwLFxuICB0cmFjZXJFdmVyeU50aFNob3Q6IDAsXG4gIGtub2NrYmFjazogMCxcbiAgLi4udmFsdWVzLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBHdW5GYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJndW5cIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIkd1blwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBhdXRvRmlyZXM6IHRydWUsXG4gICAgdGFyZ2V0aW5nOiBcImxhbmVGb3J3YXJkXCIsXG4gICAgcHJvamVjdGlsZU1vZGVsOiBcImtpbmVtYXRpY1wiLFxuICAgIGNvbGxpc2lvbk1vZGVsOiBcImNpcmNsZVZzRW5lbXlcIixcbiAgICBhbGxvd2VkU2hvdFBhdHRlcm5zOiBbXCJzaW5nbGVcIiwgXCJyYXBpZFNpbmdsZVwiLCBcImJ1cnN0XCIsIFwiaGVhdnlTaW5nbGVcIiwgXCJwYWlyZWRTcHJlYWRcIl0gc2F0aXNmaWVzIFNob3RQYXR0ZXJuW10sXG4gICAgYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnM6IFtcInN0cmFpZ2h0XCIsIFwicGllcmNpbmdTdHJhaWdodFwiXSBzYXRpc2ZpZXMgUHJvamVjdGlsZUJlaGF2aW9yW10sXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBwdWxzZVBpc3RvbDoge1xuICAgICAgbGFiZWw6IFwiUHVsc2UgUGlzdG9sXCIsIHJhcml0eTogXCJzdGFydGVyXCIsIHVubG9ja1BoYXNlOiBcInN0YXJ0XCIsIHNob3RQYXR0ZXJuOiBcInNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwidGlueUJ1bGxldFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjbGVhblNpbmdsZVNob3RcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImN5YW5cIiwgdHJhaWxDb2xvcjogXCJkZWVwQmx1ZVwiLCBjb3JlQ29sb3I6IFwiY3lhblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjgsIHRyYWlsV2lkdGhTY2FsZTogMC42NSwgdmlzdWFsSW50ZW5zaXR5OiAwLjksIG11enpsZUVmZmVjdDogXCJjcmlzcFN0YXJcIiwgaW1wYWN0RWZmZWN0OiBcInBpblNwYXJrXCIsIG11enpsZUR1cmF0aW9uTXM6IDcyLCBpbXBhY3REdXJhdGlvbk1zOiAxMDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo1NDAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNzUsZGFtYWdlOjEuMTUscHJvamVjdGlsZVNwZWVkOjU4MCxwcm9qZWN0aWxlUmFkaXVzOjMsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjIuMTUsZGFtYWdlOjEuMzUscHJvamVjdGlsZVNwZWVkOjYyMCxwcm9qZWN0aWxlUmFkaXVzOjMuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNzUsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoyLjQ1LGRhbWFnZToxLjUscHJvamVjdGlsZVNwZWVkOjY1MCxwcm9qZWN0aWxlUmFkaXVzOjMuMzUsdHJhaWxMZW5ndGg6MTksbXV6emxlRmxhc2hTY2FsZTouOCxoaXRGbGFzaFNjYWxlOi45NX0pLFxuICAgICAgICBsZXZlbCg1LHtmaXJlUmF0ZVBlclNlY29uZDoyLjc1LGRhbWFnZToxLjY1LHByb2plY3RpbGVTcGVlZDo2ODAscHJvamVjdGlsZVJhZGl1czozLjUsdHJhaWxMZW5ndGg6MjAsbXV6emxlRmxhc2hTY2FsZTouODUsaGl0Rmxhc2hTY2FsZToxfSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgbmVlZGxlclNtZzoge1xuICAgICAgbGFiZWw6IFwiTmVlZGxlciBTTUdcIiwgcmFyaXR5OiBcImNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJmaXJzdEJ1aWxkXCIsIHNob3RQYXR0ZXJuOiBcInJhcGlkU2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJzcHJheVNwaGVyZVwiLCBtb3Rpb25MYW5ndWFnZTogXCJzdG9jaGFzdGljTmVlZGxlU3ByYXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcIm5lZWRsZVwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ3JlZW5cIiwgdHJhaWxDb2xvcjogXCJjeWFuXCIsIGNvcmVDb2xvcjogXCJncmVlblwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLCB0cmFpbFdpZHRoU2NhbGU6IDAuMjgsIHZpc3VhbEludGVuc2l0eTogMC43OCwgbXV6emxlRWZmZWN0OiBcInJhcGlkRmxpY2tlclwiLCBpbXBhY3RFZmZlY3Q6IFwibmVlZGxlU2NhdHRlclwiLCBtdXp6bGVEdXJhdGlvbk1zOiA0NiwgaW1wYWN0RHVyYXRpb25NczogODUsIGhvcml6b250YWxKaXR0ZXI6IDcgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDo1LjI1LGRhbWFnZTouNDIscHJvamVjdGlsZVNwZWVkOjY5MCxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjEwLHRyYWNlckV2ZXJ5TnRoU2hvdDo1LG11enpsZUZsYXNoU2NhbGU6LjM1LGhpdEZsYXNoU2NhbGU6LjQ1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjcuMjUsZGFtYWdlOi40OCxwcm9qZWN0aWxlU3BlZWQ6NzM1LHByb2plY3RpbGVSYWRpdXM6MixzcHJlYWREZWdyZWVzOjEuNSx0cmFpbExlbmd0aDoxMSx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi40LGhpdEZsYXNoU2NhbGU6LjV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6OS4yNSxkYW1hZ2U6LjU0LHByb2plY3RpbGVTcGVlZDo3ODAscHJvamVjdGlsZVJhZGl1czoyLjE1LHNwcmVhZERlZ3JlZXM6Mix0cmFpbExlbmd0aDoxMix0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi40NSxoaXRGbGFzaFNjYWxlOi41NX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoxMC43NSxkYW1hZ2U6LjU5LHByb2plY3RpbGVTcGVlZDo4MTUscHJvamVjdGlsZVJhZGl1czoyLjIsc3ByZWFkRGVncmVlczoyLjI1LHRyYWlsTGVuZ3RoOjEzLHRyYWNlckV2ZXJ5TnRoU2hvdDo0LG11enpsZUZsYXNoU2NhbGU6LjUsaGl0Rmxhc2hTY2FsZTouNn0pLFxuICAgICAgICBsZXZlbCg1LHtmaXJlUmF0ZVBlclNlY29uZDoxMi4yNSxkYW1hZ2U6LjY0LHByb2plY3RpbGVTcGVlZDo4NTAscHJvamVjdGlsZVJhZGl1czoyLjI1LHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LHRyYWNlckV2ZXJ5TnRoU2hvdDozLG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgYnVyc3RDYXJiaW5lOiB7XG4gICAgICBsYWJlbDogXCJCdXJzdCBDYXJiaW5lXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJidXJzdFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic2hvcnRUcmFjZXJCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiZ3JvdXBlZFZvbGxleVwiLCBwcm9qZWN0aWxlU2hhcGU6IFwiZGFydFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwiZ29sZFwiLCB0cmFpbENvbG9yOiBcIm9yYW5nZVwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAyLjIsIHRyYWlsV2lkdGhTY2FsZTogMC44LCB2aXN1YWxJbnRlbnNpdHk6IDEuMDUsIG11enpsZUVmZmVjdDogXCJncm91cGVkUHVsc2VcIiwgaW1wYWN0RWZmZWN0OiBcImJ1cnN0Q3Jvc3NcIiwgbXV6emxlRHVyYXRpb25NczogODYsIGltcGFjdER1cmF0aW9uTXM6IDEyMCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi45NSxkYW1hZ2U6Ljc1LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czoyLjc1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NzIsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNTUsaGl0Rmxhc2hTY2FsZTouNjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4wOCxkYW1hZ2U6Ljg1LHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLjg1LGJ1cnN0Q291bnQ6MyxidXJzdEludGVydmFsTXM6NjQsc3ByZWFkRGVncmVlczouNzUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNixoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMTUsZGFtYWdlOi45LHByb2plY3RpbGVTcGVlZDo3MjUscHJvamVjdGlsZVJhZGl1czozLGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTgsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE3LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMjgsZGFtYWdlOjEscHJvamVjdGlsZVNwZWVkOjc2MCxwcm9qZWN0aWxlUmFkaXVzOjMuMDUsYnVyc3RDb3VudDo0LGJ1cnN0SW50ZXJ2YWxNczo1NCxzcHJlYWREZWdyZWVzOjEsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi44Mn0pLFxuICAgICAgICBsZXZlbCg1LHtmaXJlUmF0ZVBlclNlY29uZDoxLjM4LGRhbWFnZToxLjA4LHByb2plY3RpbGVTcGVlZDo3OTUscHJvamVjdGlsZVJhZGl1czozLjEsYnVyc3RDb3VudDo1LGJ1cnN0SW50ZXJ2YWxNczo1MCxzcHJlYWREZWdyZWVzOjEuMTUsdHJhaWxMZW5ndGg6MTksbXV6emxlRmxhc2hTY2FsZTouNzgsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGhlYXZ5Q2Fubm9uOiB7XG4gICAgICBsYWJlbDogXCJIZWF2eSBDYW5ub25cIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcImhlYXZ5U2luZ2xlXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJwaWVyY2luZ1N0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcImNodW5reUJvbHRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic2xvd0hlYXZ5UHVuY2hcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNsdWdcIiwgcHJvamVjdGlsZUNvbG9yOiBcIm9yYW5nZVwiLCB0cmFpbENvbG9yOiBcInJlZFwiLCBjb3JlQ29sb3I6IFwiZ29sZFwiLCBwcm9qZWN0aWxlQXNwZWN0OiAxLjM1LCB0cmFpbFdpZHRoU2NhbGU6IDEuMzUsIHZpc3VhbEludGVuc2l0eTogMS4yLCBtdXp6bGVFZmZlY3Q6IFwic2hvY2tEaWFtb25kXCIsIGltcGFjdEVmZmVjdDogXCJpbXBhY3RSaW5nXCIsIG11enpsZUR1cmF0aW9uTXM6IDEzNSwgaW1wYWN0RHVyYXRpb25NczogMTkwLCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjcyLGRhbWFnZToyLjQscHJvamVjdGlsZVNwZWVkOjUwMCxwcm9qZWN0aWxlUmFkaXVzOjQuNSxwaWVyY2U6MSx0cmFpbExlbmd0aDoyMixpbXBhY3RSYWRpdXM6MTQsa25vY2tiYWNrOjE0LG11enpsZUZsYXNoU2NhbGU6MS4xLGhpdEZsYXNoU2NhbGU6MS4yNX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDouODIsZGFtYWdlOjMscHJvamVjdGlsZVNwZWVkOjUzNSxwcm9qZWN0aWxlUmFkaXVzOjQuNzUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjQsaW1wYWN0UmFkaXVzOjE2LGtub2NrYmFjazoxOCxtdXp6bGVGbGFzaFNjYWxlOjEuMixoaXRGbGFzaFNjYWxlOjEuMzV9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6LjksZGFtYWdlOjMuNixwcm9qZWN0aWxlU3BlZWQ6NTcwLHByb2plY3RpbGVSYWRpdXM6NSxwaWVyY2U6Mix0cmFpbExlbmd0aDoyNixpbXBhY3RSYWRpdXM6MTgsa25vY2tiYWNrOjIyLG11enpsZUZsYXNoU2NhbGU6MS4zLGhpdEZsYXNoU2NhbGU6MS41fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOi45OCxkYW1hZ2U6NC4xLHByb2plY3RpbGVTcGVlZDo2MDAscHJvamVjdGlsZVJhZGl1czo1LjIscGllcmNlOjIsdHJhaWxMZW5ndGg6MjgsaW1wYWN0UmFkaXVzOjIwLGtub2NrYmFjazoyNixtdXp6bGVGbGFzaFNjYWxlOjEuNCxoaXRGbGFzaFNjYWxlOjEuNjJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4wNSxkYW1hZ2U6NC42LHByb2plY3RpbGVTcGVlZDo2MzAscHJvamVjdGlsZVJhZGl1czo1LjQscGllcmNlOjMsdHJhaWxMZW5ndGg6MzAsaW1wYWN0UmFkaXVzOjIyLGtub2NrYmFjazozMCxtdXp6bGVGbGFzaFNjYWxlOjEuNSxoaXRGbGFzaFNjYWxlOjEuNzV9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBzcGxpdHRlclJpZmxlOiB7XG4gICAgICBsYWJlbDogXCJTcGxpdHRlciBSaWZsZVwiLCByYXJpdHk6IFwidW5jb21tb25cIiwgdW5sb2NrUGhhc2U6IFwicHJlc3N1cmVcIiwgc2hvdFBhdHRlcm46IFwicGFpcmVkU3ByZWFkXCIsIHByb2plY3RpbGVCZWhhdmlvcjogXCJzdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJwYWlyZWRCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImN1cnJlbnRMYW5lRm9ya1wiLCBwcm9qZWN0aWxlU2hhcGU6IFwic3BsaXRCb2x0XCIsIHByb2plY3RpbGVDb2xvcjogXCJ2aW9sZXRcIiwgdHJhaWxDb2xvcjogXCJwaW5rXCIsIGNvcmVDb2xvcjogXCJ2aW9sZXRcIiwgcHJvamVjdGlsZUFzcGVjdDogMy40LCB0cmFpbFdpZHRoU2NhbGU6IDAuNTUsIHZpc3VhbEludGVuc2l0eTogMSwgbXV6emxlRWZmZWN0OiBcInR3aW5Qcm9uZ3NcIiwgaW1wYWN0RWZmZWN0OiBcInNwbGl0UmlwcGxlXCIsIG11enpsZUR1cmF0aW9uTXM6IDk1LCBpbXBhY3REdXJhdGlvbk1zOiAxNDUsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOCxwcm9qZWN0aWxlU3BlZWQ6NTg1LHByb2plY3RpbGVSYWRpdXM6Mi43NSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Mi41LHRyYWlsTGVuZ3RoOjE0LG11enpsZUZsYXNoU2NhbGU6LjY1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMzUsZGFtYWdlOi45NSxwcm9qZWN0aWxlU3BlZWQ6NjI1LHByb2plY3RpbGVSYWRpdXM6Mi44NSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjg1LHByb2plY3RpbGVDb3VudDoyLHNwcmVhZERlZ3JlZXM6Myx0cmFpbExlbmd0aDoxNSxtdXp6bGVGbGFzaFNjYWxlOi43LGhpdEZsYXNoU2NhbGU6Ljd9KSxcbiAgICAgICAgbGV2ZWwoMyx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS41LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo2NjAscHJvamVjdGlsZVJhZGl1czoyLjk1LGNvbGxpc2lvblJhZGl1c1NjYWxlOjEuOSxwcm9qZWN0aWxlQ291bnQ6MyxzcHJlYWREZWdyZWVzOjUsdHJhaWxMZW5ndGg6MTYsbXV6emxlRmxhc2hTY2FsZTouNzgsaGl0Rmxhc2hTY2FsZTouNzV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS43LGRhbWFnZToxLjEyLHByb2plY3RpbGVTcGVlZDo3MDAscHJvamVjdGlsZVJhZGl1czozLjA1LGNvbGxpc2lvblJhZGl1c1NjYWxlOjEuOSxwcm9qZWN0aWxlQ291bnQ6MyxzcHJlYWREZWdyZWVzOjUuNSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi44NCxoaXRGbGFzaFNjYWxlOi44Mn0pLFxuICAgICAgICBsZXZlbCg1LHtmaXJlUmF0ZVBlclNlY29uZDoxLjg1LGRhbWFnZToxLjIscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjMuMSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjk1LHByb2plY3RpbGVDb3VudDo0LHNwcmVhZERlZ3JlZXM6Ni4yNSx0cmFpbExlbmd0aDoxOCxtdXp6bGVGbGFzaFNjYWxlOi45MixoaXRGbGFzaFNjYWxlOi45fSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIEd1bk1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZ3VuXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUodGhpcy5pbXBsZW1lbnRhdGlvbi5hbGxvd2VkU2hvdFBhdHRlcm5zLmluY2x1ZGVzKGd1bi5zaG90UGF0dGVybiksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgc2hvdCBwYXR0ZXJuLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFByb2plY3RpbGVCZWhhdmlvcnMuaW5jbHVkZXMoZ3VuLnByb2plY3RpbGVCZWhhdmlvciksIGAke2lkfSBoYXMgYW4gdW5zdXBwb3J0ZWQgcHJvamVjdGlsZSBiZWhhdmlvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkucHJvamVjdGlsZUNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcHJvamVjdGlsZSBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtndW4udmlzdWFsSWRlbnRpdHkudHJhaWxDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHRyYWlsIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi52aXN1YWxJZGVudGl0eS5tdXp6bGVEdXJhdGlvbk1zID4gMCAmJiBndW4udmlzdWFsSWRlbnRpdHkuaW1wYWN0RHVyYXRpb25NcyA+IDAsIGAke2lkfSBlZmZlY3QgZHVyYXRpb25zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoZ3VuLmxldmVscy5sZW5ndGggPiAwLCBgJHtpZH0gbXVzdCBkZWZpbmUgbGV2ZWxzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID09PSA1LCBgJHtpZH0gbXVzdCBkZWZpbmUgZXhhY3RseSBmaXZlIGxldmVscy5gKTtcbiAgICAgIGZvciAoY29uc3QgdHVuaW5nIG9mIGd1bi5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5maXJlUmF0ZVBlclNlY29uZCA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gZmlyZSByYXRlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVNwZWVkID4gMCAmJiB0dW5pbmcucHJvamVjdGlsZVJhZGl1cyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgcHJvamVjdGlsZSBwb3dlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jb2xsaXNpb25SYWRpdXNTY2FsZSA9PT0gdW5kZWZpbmVkIHx8IHR1bmluZy5jb2xsaXNpb25SYWRpdXNTY2FsZSA+PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGNvbGxpc2lvbiByYWRpdXMgc2NhbGUgY2Fubm90IHNocmluayBjb2xsaXNpb24uYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnVyc3RDb3VudCA+PSAxICYmIHR1bmluZy5wcm9qZWN0aWxlQ291bnQgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBoYXMgaW52YWxpZCBjb3VudHMuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBndW5GYW1pbHkgPSBuZXcgR3VuRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgR3VuSWQgPSBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBFbmVteVNwYXduRW50cmFuY2UgPSBcInNjYXR0ZXJcIiB8IFwiZmFkZVwiO1xuZXhwb3J0IHR5cGUgRW5lbXlEZWF0aFZpc3VhbCA9IFwiY2xvdWRcIiB8IFwibm9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9yYk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICBjb250YWN0RGFtYWdlOiBudW1iZXI7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJhc2VDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcmltQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNoYWRvd0NvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFwZUlkOiBzdHJpbmc7XG4gIGdsb3c6IG51bWJlcjtcbiAgc3VyZmFjZVRleHR1cmU6IG51bWJlcjtcbiAgcmltSW50ZW5zaXR5OiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIGhpdEZsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICBkZWF0aEZsYXNoU2NhbGU6IG51bWJlcjtcbiAgc2hhcGVab29tOiBudW1iZXI7XG4gIGltcGFjdFJlc2lzdGFuY2U6IG51bWJlcjtcbiAgZXhwbG9zaW9uTWFnbml0dWRlOiBudW1iZXI7XG4gIHNwYXduRW50cmFuY2U6IEVuZW15U3Bhd25FbnRyYW5jZTtcbiAgc3Bhd25Tb3VuZDogc3RyaW5nIHwgbnVsbDtcbiAgZGVhdGhTb3VuZDogc3RyaW5nO1xuICBkZWF0aFZpc3VhbDogRW5lbXlEZWF0aFZpc3VhbDtcbn1cblxuZXhwb3J0IGNsYXNzIE9yYkZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcIm9yYlwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiT3JiIEVuZW15XCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgYmFzaWNPcmI6IHtcbiAgICAgIGxhYmVsOiBcIkJhc2ljIE9yYlwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDU4LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiaHVudGVyLWV5ZVwiLFxuICAgICAgZ2xvdzogMC44MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAwLjI4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjI1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IDAuNzIsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDkwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjgsXG4gICAgICBzaGFwZVpvb206IDMuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC40OCxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwic2NhdHRlclwiLFxuICAgICAgc3Bhd25Tb3VuZDogXCJFbmVteVNwYXduXCIsXG4gICAgICBkZWF0aFNvdW5kOiBcIkVuZW15RGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gICAgZ2xhc3NTaGllbGQ6IHtcbiAgICAgIGxhYmVsOiBcIkdsYXNzIFNoaWVsZFwiLFxuICAgICAgaGVhbHRoOiAuMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNS42LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IC4xLFxuICAgICAgc2NvcmU6IDMsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidHJpY2stZ2F0ZVwiLFxuICAgICAgZ2xvdzogLjYyLFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xMixcbiAgICAgIHJpbUludGVuc2l0eTogMC45LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC40NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogNzAsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuMSxcbiAgICAgIHNoYXBlWm9vbTogMy4wNSxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IC42NSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjI1LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJmYWRlXCIsXG4gICAgICBzcGF3blNvdW5kOiBudWxsLFxuICAgICAgZGVhdGhTb3VuZDogXCJHbGFzc1NoaWVsZFNoYXR0ZXJcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIHdpbmdlcjoge1xuICAgICAgbGFiZWw6IFwiV2luZ2VyXCIsXG4gICAgICBoZWFsdGg6IDEsXG4gICAgICBzcGVlZDogNzYsXG4gICAgICByYWRpdXM6IDYuMjUsXG4gICAgICBjb2x1bW5TcGFuOiAxLFxuICAgICAgY29udGFjdERhbWFnZTogMSxcbiAgICAgIHNjb3JlOiAxNCxcbiAgICAgIGJhc2VDb2xvcjogXCJwaW5rXCIsXG4gICAgICByaW1Db2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNoYWRvd0NvbG9yOiBcInZpb2xldFwiLFxuICAgICAgc2hhcGVJZDogXCJlbGl0ZS13aW5nc1wiLFxuICAgICAgZ2xvdzogLjg2LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4yMixcbiAgICAgIHJpbUludGVuc2l0eTogMS4yLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC42NixcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogODUsXG4gICAgICBkZWF0aEZsYXNoU2NhbGU6IDEuNzUsXG4gICAgICBzaGFwZVpvb206IDMuMjUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIHRhbms6IHtcbiAgICAgIGxhYmVsOiBcIlRhbmtcIixcbiAgICAgIGhlYWx0aDogMjQsXG4gICAgICBzcGVlZDogNDQsXG4gICAgICByYWRpdXM6IDE2LFxuICAgICAgY29sdW1uU3BhbjogMyxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDIsXG4gICAgICBzY29yZTogODAsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwidGFuay1idW5rZXJcIixcbiAgICAgIGdsb3c6IDEuMDUsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogLjE4LFxuICAgICAgcmltSW50ZW5zaXR5OiAxLjQ1LFxuICAgICAgc2hhZG93U3RyZW5ndGg6IC44NSxcbiAgICAgIGhpdEZsYXNoRHVyYXRpb25NczogMTMwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAyLjcsXG4gICAgICBzaGFwZVpvb206IDQuNCxcbiAgICAgIGltcGFjdFJlc2lzdGFuY2U6IDIuMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjksXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiQm9zc1wiLFxuICAgICAgZGVhdGhTb3VuZDogXCJCb3NzRGVzdHJveWVkXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJjbG91ZFwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIE9yYk1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgb3JiXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLmhlYWx0aCA+IDAsIGAke2lkfSBoZWFsdGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuc3BlZWQgPiAwLCBgJHtpZH0gc3BlZWQgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIucmFkaXVzID4gMCwgYCR7aWR9IHJhZGl1cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIob3JiLmNvbHVtblNwYW4pICYmIG9yYi5jb2x1bW5TcGFuID49IDEsIGAke2lkfSBjb2x1bW5TcGFuIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5nbG93ID49IDAgJiYgb3JiLnJpbUludGVuc2l0eSA+PSAwLCBgJHtpZH0gdmlzdWFsIGludGVuc2l0aWVzIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuc3VyZmFjZVRleHR1cmUgPj0gMCAmJiBvcmIuc3VyZmFjZVRleHR1cmUgPD0gMSwgYCR7aWR9IHN1cmZhY2VUZXh0dXJlIG11c3QgYmUgZnJvbSAwIHRvIDEuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcmJGYW1pbHkgPSBuZXcgT3JiRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgT3JiSWQgPSBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgTGlnaHRuaW5nVGFyZ2V0aW5nTW9kZSA9IFwibmVhcmVzdEZvcndhcmRcIiB8IFwiZGVuc2VzdENsdXN0ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaWdodG5pbmdMZXZlbCB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgY2hhaW5SYW5nZTogbnVtYmVyO1xuICBtYXhKdW1wczogbnVtYmVyO1xuICBicmFuY2hGYW5vdXQ6IG51bWJlcjtcbiAgbWF4RGVwdGg6IG51bWJlcjtcbiAgYnJhbmNoRGVjYXk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWdodG5pbmdWaXN1YWxJZGVudGl0eSB7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzZWNvbmRhcnlDb2xvcjogc3RyaW5nO1xuICBqYWdnZWRuZXNzOiBudW1iZXI7XG4gIHNlZ21lbnRzOiBudW1iZXI7XG4gIG1vdmVtZW50OiBudW1iZXI7XG4gIGJvbHRXaWR0aDogbnVtYmVyO1xuICBoYWxvV2lkdGg6IG51bWJlcjtcbiAgaW50ZW5zaXR5OiBudW1iZXI7XG4gIGdsb3c6IG51bWJlcjtcbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICBicmFuY2hTcGFya3M6IG51bWJlcjtcbiAgc3BhcmtWZWxvY2l0eTogbnVtYmVyO1xuICBzcGFya1ZlbG9jaXR5U3ByZWFkOiBudW1iZXI7XG4gIHNwYXJrRWFzZVBvd2VyOiBudW1iZXI7XG4gIHNwYXJrRGltUG93ZXI6IG51bWJlcjtcbiAgc3BhcmtMZW5ndGg6IG51bWJlcjtcbiAgc3BhcmtXaWR0aDogbnVtYmVyO1xuICBpbXBhY3RTcGFya3M6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtWZWxvY2l0eTogbnVtYmVyO1xuICBpbXBhY3RTcGFya1JhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0bmluZ01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJsaWdodG5pbmdcIjtcbiAgcmFyaXR5OiBcInVuY29tbW9uXCIgfCBcInJhcmVcIjtcbiAgdGFyZ2V0aW5nTW9kZTogTGlnaHRuaW5nVGFyZ2V0aW5nTW9kZTtcbiAgaW5jbHVkZUFkamFjZW50TGFuZXM6IGJvb2xlYW47XG4gIHZpc3VhbElkZW50aXR5OiBMaWdodG5pbmdWaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBMaWdodG5pbmdMZXZlbFtdO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5jb25zdCBsZXZlbCA9IChsZXZlbE51bWJlcjogbnVtYmVyLCB2YWx1ZXM6IE9taXQ8TGlnaHRuaW5nTGV2ZWwsIFwibGV2ZWxcIj4pOiBMaWdodG5pbmdMZXZlbCA9PiAoe1xuICBsZXZlbDogbGV2ZWxOdW1iZXIsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5jb25zdCBzaGFyZWRWaXN1YWwgPSB7XG4gIGNvbG9yOiBcImN5YW5cIixcbiAgc2Vjb25kYXJ5Q29sb3I6IFwiI2ZmZmZmZlwiLFxuICBqYWdnZWRuZXNzOiA5NixcbiAgc2VnbWVudHM6IDgsXG4gIG1vdmVtZW50OiAuNTUsXG4gIGJvbHRXaWR0aDogLjEsXG4gIGhhbG9XaWR0aDogOCxcbiAgaW50ZW5zaXR5OiAzLjA3LFxuICBnbG93OiA2LjIsXG4gIGR1cmF0aW9uTXM6IDUyOSxcbiAgYnJhbmNoU3BhcmtzOiAuMTEsXG4gIHNwYXJrVmVsb2NpdHk6IDE1MCxcbiAgc3BhcmtWZWxvY2l0eVNwcmVhZDogLjU1LFxuICBzcGFya0Vhc2VQb3dlcjogLjQ0LFxuICBzcGFya0RpbVBvd2VyOiAuNixcbiAgc3BhcmtMZW5ndGg6IDYsXG4gIHNwYXJrV2lkdGg6IC43LFxuICBpbXBhY3RTcGFya3M6IDI2LFxuICBpbXBhY3RTcGFya1ZlbG9jaXR5OiAxNTQsXG4gIGltcGFjdFNwYXJrUmFkaXVzOiAxMCxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIExpZ2h0bmluZ1Zpc3VhbElkZW50aXR5O1xuXG5leHBvcnQgY2xhc3MgTGlnaHRuaW5nRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgTGlnaHRuaW5nTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibGlnaHRuaW5nXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJMaWdodG5pbmdcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGNoYWluU3Bhcms6IHtcbiAgICAgIGxhYmVsOiBcIkNoYWluIFNwYXJrXCIsXG4gICAgICBmYW1pbHk6IFwibGlnaHRuaW5nXCIsXG4gICAgICByYXJpdHk6IFwidW5jb21tb25cIixcbiAgICAgIHRhcmdldGluZ01vZGU6IFwibmVhcmVzdEZvcndhcmRcIixcbiAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiB0cnVlLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHNoYXJlZFZpc3VhbCxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLCB7IGNvb2xkb3duU2Vjb25kczogMS45NSwgZGFtYWdlOiAxLjI1LCBjaGFpblJhbmdlOiAxNTAsIG1heEp1bXBzOiAyLCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjcyIH0pLFxuICAgICAgICBsZXZlbCgyLCB7IGNvb2xkb3duU2Vjb25kczogMS43LCBkYW1hZ2U6IDEuMzgsIGNoYWluUmFuZ2U6IDE3MCwgbWF4SnVtcHM6IDMsIGJyYW5jaEZhbm91dDogMSwgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNzIgfSksXG4gICAgICAgIGxldmVsKDMsIHsgY29vbGRvd25TZWNvbmRzOiAxLjUsIGRhbWFnZTogMS41LCBjaGFpblJhbmdlOiAxOTAsIG1heEp1bXBzOiA0LCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAzLCBicmFuY2hEZWNheTogLjcgfSksXG4gICAgICAgIGxldmVsKDQsIHsgY29vbGRvd25TZWNvbmRzOiAxLjM0LCBkYW1hZ2U6IDEuNjQsIGNoYWluUmFuZ2U6IDIxMiwgbWF4SnVtcHM6IDUsIGJyYW5jaEZhbm91dDogMSwgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNyB9KSxcbiAgICAgICAgbGV2ZWwoNSwgeyBjb29sZG93blNlY29uZHM6IDEuMTgsIGRhbWFnZTogMS44LCBjaGFpblJhbmdlOiAyMzYsIG1heEp1bXBzOiA2LCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiA0LCBicmFuY2hEZWNheTogLjY4IH0pLFxuICAgICAgXSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRmFzdCBzaW5nbGUtY2hhaW4gY2xlYW51cC4gQmVzdCBhZ2FpbnN0IHN0YWdnZXJlZCBlbmVtaWVzOyB3ZWFrZXIgYWdhaW5zdCBpc29sYXRlZCBkdXJhYmxlIHRhcmdldHMgdGhhbiBmb2N1c2VkIGd1bnMuXCIsXG4gICAgfSxcbiAgICBmb3JrQ2FwYWNpdG9yOiB7XG4gICAgICBsYWJlbDogXCJGb3JrIENhcGFjaXRvclwiLFxuICAgICAgZmFtaWx5OiBcImxpZ2h0bmluZ1wiLFxuICAgICAgcmFyaXR5OiBcInJhcmVcIixcbiAgICAgIHRhcmdldGluZ01vZGU6IFwiZGVuc2VzdENsdXN0ZXJcIixcbiAgICAgIGluY2x1ZGVBZGphY2VudExhbmVzOiB0cnVlLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHtcbiAgICAgICAgLi4uc2hhcmVkVmlzdWFsLFxuICAgICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgICAgYm9sdFdpZHRoOiAyLjEsXG4gICAgICAgIGJyYW5jaFNwYXJrczogLjE4LFxuICAgICAgICBpbXBhY3RTcGFya3M6IDM0LFxuICAgICAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLCB7IGNvb2xkb3duU2Vjb25kczogMi41NSwgZGFtYWdlOiAxLjgsIGNoYWluUmFuZ2U6IDEzOCwgbWF4SnVtcHM6IDMsIGJyYW5jaEZhbm91dDogMiwgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNTggfSksXG4gICAgICAgIGxldmVsKDIsIHsgY29vbGRvd25TZWNvbmRzOiAyLjM1LCBkYW1hZ2U6IDEuOTUsIGNoYWluUmFuZ2U6IDE1MiwgbWF4SnVtcHM6IDQsIGJyYW5jaEZhbm91dDogMiwgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNTggfSksXG4gICAgICAgIGxldmVsKDMsIHsgY29vbGRvd25TZWNvbmRzOiAyLjE4LCBkYW1hZ2U6IDIuMSwgY2hhaW5SYW5nZTogMTY4LCBtYXhKdW1wczogNSwgYnJhbmNoRmFub3V0OiAzLCBtYXhEZXB0aDogMiwgYnJhbmNoRGVjYXk6IC41NiB9KSxcbiAgICAgICAgbGV2ZWwoNCwgeyBjb29sZG93blNlY29uZHM6IDIuMDIsIGRhbWFnZTogMi4yOCwgY2hhaW5SYW5nZTogMTg0LCBtYXhKdW1wczogNywgYnJhbmNoRmFub3V0OiAzLCBtYXhEZXB0aDogMywgYnJhbmNoRGVjYXk6IC41NCB9KSxcbiAgICAgICAgbGV2ZWwoNSwgeyBjb29sZG93blNlY29uZHM6IDEuODYsIGRhbWFnZTogMi40NSwgY2hhaW5SYW5nZTogMjA0LCBtYXhKdW1wczogOSwgYnJhbmNoRmFub3V0OiA0LCBtYXhEZXB0aDogMywgYnJhbmNoRGVjYXk6IC41MiB9KSxcbiAgICAgIF0sXG4gICAgICBhZ2VudE5vdGVzOiBcIkNsdXN0ZXIgZGlzY2hhcmdlLiBUaGUgYW5jaG9yIGhpdHMgaGFyZCwgdGhlbiBzaGFsbG93IHNpYmxpbmcgYnJhbmNoZXMgc3ByZWFkIHRocm91Z2ggcGFja2VkIGZvcm1hdGlvbnMuXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTGlnaHRuaW5nTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5mYW1pbHkgPT09IFwibGlnaHRuaW5nXCIsIGAke2lkfSBtdXN0IGJlIGluIGxpZ2h0bmluZyBmYW1pbHkuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS52aXN1YWxJZGVudGl0eS5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyB1bmtub3duIGNvbG9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubGV2ZWxzLmxlbmd0aCA9PT0gNSwgYCR7aWR9IG11c3QgZGVmaW5lIGV4YWN0bHkgZml2ZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBpdGVtLmxldmVscykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gY29vbGRvd24gbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5kYW1hZ2UgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmNoYWluUmFuZ2UgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGNoYWluUmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5tYXhKdW1wcyA+PSAxICYmIHR1bmluZy5icmFuY2hGYW5vdXQgPj0gMSAmJiB0dW5pbmcubWF4RGVwdGggPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBicmFuY2ggY291bnRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuYnJhbmNoRGVjYXkgPiAwICYmIHR1bmluZy5icmFuY2hEZWNheSA8PSAxLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGJyYW5jaERlY2F5IG11c3QgYmUgaW4gKDAsIDFdLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbGlnaHRuaW5nRmFtaWx5ID0gbmV3IExpZ2h0bmluZ0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIExpZ2h0bmluZ0lkID0ga2V5b2YgdHlwZW9mIGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlwbGllck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNxdWFkQWRkZWQ6IG51bWJlcjtcbiAgbWF4U3F1YWRTaXplOiBudW1iZXI7XG4gIG1lbWJlcnNQZXJSb3c6IG51bWJlcjtcbiAgbWVtYmVyUmFkaXVzOiBudW1iZXI7XG4gIHNwYWNpbmc6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHVsc2VSYXRlOiBudW1iZXI7XG4gIHBpY2t1cFNoYXBlWm9vbTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIE11bHRpcGxpZXJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJtdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTcXVhZCBNdWx0aXBsaWVyXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgc3F1YWRQbHVzT25lOiB7XG4gICAgICBsYWJlbDogXCIrMSBXaW5nbWF0ZVwiLFxuICAgICAgc3F1YWRBZGRlZDogMSxcbiAgICAgIG1heFNxdWFkU2l6ZTogMTAsXG4gICAgICBtZW1iZXJzUGVyUm93OiA1LFxuICAgICAgbWVtYmVyUmFkaXVzOiA1LjI1LFxuICAgICAgc3BhY2luZzogMjksXG4gICAgICBwaWNrdXBDb2xvcjogXCJnb2xkXCIsXG4gICAgICBjb3JlQ29sb3I6IFwiY3lhblwiLFxuICAgICAgcHVsc2VSYXRlOiAyLjIsXG4gICAgICBwaWNrdXBTaGFwZVpvb206IDMuMSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBpdGVtXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5zcXVhZEFkZGVkID4gMCwgYCR7aWR9IG11c3QgYWRkIHNxdWFkIG1lbWJlcnMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tYXhTcXVhZFNpemUgPj0gaXRlbS5tZW1iZXJzUGVyUm93LCBgJHtpZH0gbWF4IHNxdWFkIG11c3QgZml0IGF0IGxlYXN0IG9uZSByb3cuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXRlbS5tZW1iZXJSYWRpdXMgPiAwICYmIGl0ZW0uc3BhY2luZyA+IGl0ZW0ubWVtYmVyUmFkaXVzICogMiwgYCR7aWR9IG1lbWJlciBnZW9tZXRyeSBvdmVybGFwcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtpdGVtLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbGllckZhbWlseSA9IG5ldyBNdWx0aXBsaWVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgTXVsdGlwbGllcklkID0ga2V5b2YgdHlwZW9mIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaGllbGRPcmJpdGVyU2hhcGUgPSBcImRvdFwiIHwgXCJoZXhcIjtcbmV4cG9ydCB0eXBlIFNoaWVsZE1vZGUgPSBcImNoYXJnZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzaGllbGRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIG1vZGU6IFNoaWVsZE1vZGU7XG4gIHJhZGl1czogbnVtYmVyO1xuICAvKiogQmFzaWMgc2hpZWxkIHN0cmVuZ3RoLiBFbmVteSBIUCBpcyBzdWJ0cmFjdGVkIGZyb20gdGhpcyB2YWx1ZS4gKi9cbiAgbWF4Q2hhcmdlczogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogMDtcbiAgcHVzaERpc3RhbmNlOiAwO1xuICBzbG93TXVsdGlwbGllcjogMTtcbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIG9yYml0ZXJTaGFwZTogU2hpZWxkT3JiaXRlclNoYXBlO1xuICBvcmJpdGVyQ291bnQ6IG51bWJlcjtcbiAgb3JiaXRlclNwZWVkOiBudW1iZXI7XG4gIG9yYml0ZXJTaXplOiBudW1iZXI7XG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzaGllbGRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNoaWVsZFwiO1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgbGlnaHRHdWFyZDoge1xuICAgICAgbGFiZWw6IFwiTGlnaHQgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAyOCxcbiAgICAgIG1heENoYXJnZXM6IDIsXG4gICAgICBjb29sZG93blNlY29uZHM6IDgsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBvcmJpdGVyU2hhcGU6IFwiZG90XCIsXG4gICAgICBvcmJpdGVyQ291bnQ6IDQsXG4gICAgICBvcmJpdGVyU3BlZWQ6IDEsXG4gICAgICBvcmJpdGVyU2l6ZTogNC41LFxuICAgICAgYWdlbnROb3RlczogXCJMaWdodHdlaWdodCBzaGllbGQgd2l0aCB0d28gcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgc2F0ZWxsaXRlR3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIlNhdGVsbGl0ZSBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiA0LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMCxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcInZpb2xldFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA2LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjc1LFxuICAgICAgb3JiaXRlclNpemU6IDQuNzUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkJhbGFuY2VkIHNoaWVsZCB3aXRoIGZvdXIgcG9pbnRzIG9mIHN0cmVuZ3RoLlwiLFxuICAgIH0sXG4gICAgaGV4R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkhleCBHdWFyZFwiLFxuICAgICAgZmFtaWx5OiBcInNoaWVsZFwiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICBtb2RlOiBcImNoYXJnZVwiLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIG1heENoYXJnZXM6IDcsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEyLFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiZ29sZFwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImhleFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA4LFxuICAgICAgb3JiaXRlclNwZWVkOiAwLjQ1LFxuICAgICAgb3JiaXRlclNpemU6IDUsXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IHNoaWVsZCB3aXRoIHNldmVuIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaGllbGRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHNoaWVsZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5tb2RlID09PSBcImNoYXJnZVwiLCBgJHtpZH0gbXVzdCB1c2UgdGhlIHNoYXJlZCBjaGFyZ2UgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubWF4Q2hhcmdlcyA+IDAsIGAke2lkfSBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyQ291bnQgPiAwLCBgJHtpZH0gbXVzdCBoYXZlIG9yYml0ZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5vcmJpdGVyU3BlZWQgPj0gMCwgYCR7aWR9IG9yYml0ZXJTcGVlZCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc2hpZWxkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaGllbGRGYW1pbHkgPSBuZXcgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hpZWxkSWQgPSBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hvd3N0b3BwZXJCYW5rQmVoYXZpb3IgPSBcImJhbmtlZE1hbnVhbFRyaWdnZXJcIjtcbmV4cG9ydCB0eXBlIFNob3dzdG9wcGVyVGFyZ2V0aW5nTW9kZSA9IFwiYWxsTGFuZXNBaGVhZFwiIHwgXCJjdXJyZW50TGFuZUFoZWFkXCI7XG5leHBvcnQgdHlwZSBTaG93c3RvcHBlckVhc2luZyA9IFwibGluZWFyXCIgfCBcImVhc2VJblwiIHwgXCJlYXNlT3V0XCIgfCBcImVhc2VJbk91dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dzdG9wcGVyVGltZVdhcnBQb2ludCB7XG4gIGF0TXM6IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGdhbWVwbGF5U2NhbGU6IG51bWJlcjtcbiAgZWFzaW5nPzogU2hvd3N0b3BwZXJFYXNpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJDYW1lcmFQb3NlIHtcbiAgYXRNczogbnVtYmVyO1xuICBwcm9ncmVzcz86IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxvb2tBbmdsZURlZ3JlZXM6IG51bWJlcjtcbiAgZm9sbG93RGlzdGFuY2U6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBob3Jpem9uOiBudW1iZXI7XG4gIGJhY2tncm91bmRGb3J3YXJkT2Zmc2V0PzogbnVtYmVyO1xuICBiYWNrZ3JvdW5kVmVydGljYWxPZmZzZXQ/OiBudW1iZXI7XG4gIGJhY2tncm91bmRab29tT2Zmc2V0PzogbnVtYmVyO1xuICBlYXNpbmc/OiBTaG93c3RvcHBlckVhc2luZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93c3RvcHBlckF0dGFja0RlZmluaXRpb24ge1xuICBzdGFydE1zOiBudW1iZXI7XG4gIGVuZE1zOiBudW1iZXI7XG4gIHJvd3NBaGVhZDogbnVtYmVyO1xuICB0YXJnZXRpbmc6IFNob3dzdG9wcGVyVGFyZ2V0aW5nTW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93c3RvcHBlclRpbWVsaW5lRXZlbnQge1xuICB0eXBlOiBcInN0YXJ0QXR0YWNrXCIgfCBcInN0b3BBdHRhY2tcIjtcbiAgYXRNczogbnVtYmVyO1xuICBwcm9ncmVzcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93c3RvcHBlck1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJhcml0eTogXCJyYXJlXCIgfCBcImVwaWNcIiB8IFwibGVnZW5kYXJ5XCI7XG4gIGJhbmtCZWhhdmlvcjogU2hvd3N0b3BwZXJCYW5rQmVoYXZpb3I7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgY2VudGVyQ2FtZXJhTXM6IG51bWJlcjtcbiAgcmV0dXJuQ2FtZXJhTXM6IG51bWJlcjtcbiAgdGltZVdhcnA6IHJlYWRvbmx5IFNob3dzdG9wcGVyVGltZVdhcnBQb2ludFtdO1xuICBjYW1lcmE6IHJlYWRvbmx5IFNob3dzdG9wcGVyQ2FtZXJhUG9zZVtdO1xuICB0aW1lbGluZUV2ZW50czogcmVhZG9ubHkgU2hvd3N0b3BwZXJUaW1lbGluZUV2ZW50W107XG4gIGF0dGFjazogU2hvd3N0b3BwZXJBdHRhY2tEZWZpbml0aW9uO1xuICBtdXNpY0R1Y2tWb2x1bWU6IG51bWJlcjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNvdW5kQ3VlczogUmVhZG9ubHk8UmVjb3JkPFwiZGVwbG95XCIgfCBcImF0dGFja1N0YXJ0XCIgfCBcInJlc29sdmVcIiwgc3RyaW5nPj47XG59XG5cbnR5cGUgVGltZWRCeVByb2dyZXNzPFQ+ID0gT21pdDxULCBcImF0TXNcIj4gJiB7IHByb2dyZXNzOiBudW1iZXIgfTtcblxuaW50ZXJmYWNlIERyYWdvbkJyZWF0aEludGVudCB7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgY2VudGVyQ2FtZXJhTXM6IG51bWJlcjtcbiAgcmV0dXJuQ2FtZXJhTXM6IG51bWJlcjtcbiAgYXR0YWNrU3RhcnRQcm9ncmVzczogbnVtYmVyO1xuICBhdHRhY2tFbmRQcm9ncmVzczogbnVtYmVyO1xuICByb3dzQWhlYWQ6IG51bWJlcjtcbiAgbXVzaWNEdWNrVm9sdW1lOiBudW1iZXI7XG4gIHRpbWVXYXJwOiByZWFkb25seSBUaW1lZEJ5UHJvZ3Jlc3M8U2hvd3N0b3BwZXJUaW1lV2FycFBvaW50PltdO1xuICBjYW1lcmE6IHJlYWRvbmx5IFRpbWVkQnlQcm9ncmVzczxTaG93c3RvcHBlckNhbWVyYVBvc2U+W107XG4gIHNvdW5kQ3VlczogU2hvd3N0b3BwZXJNZW1iZXJbXCJzb3VuZEN1ZXNcIl07XG59XG5cbmNvbnN0IGRyYWdvbkJyZWF0aEludGVudCA9IHtcbiAgZHVyYXRpb25NczogMTAwMCxcbiAgY2VudGVyQ2FtZXJhTXM6IDUwLFxuICByZXR1cm5DYW1lcmFNczogMjUwLFxuICBhdHRhY2tTdGFydFByb2dyZXNzOiAuMSxcbiAgYXR0YWNrRW5kUHJvZ3Jlc3M6IDEsXG4gIHJvd3NBaGVhZDogMTUsXG4gIG11c2ljRHVja1ZvbHVtZTogLjMsXG4gIHRpbWVXYXJwOiBbXG4gICAgeyBwcm9ncmVzczogMCwgZ2FtZXBsYXlTY2FsZTogMSwgZWFzaW5nOiBcImVhc2VJbk91dFwiIH0sXG4gICAgeyBwcm9ncmVzczogLjAzMzMsIGdhbWVwbGF5U2NhbGU6IC4xLCBlYXNpbmc6IFwiZWFzZUluXCIgfSxcbiAgICB7IHByb2dyZXNzOiAuMjY2NywgZ2FtZXBsYXlTY2FsZTogLjQsIGVhc2luZzogXCJlYXNlSW5cIiB9LFxuICAgIHsgcHJvZ3Jlc3M6IDEsIGdhbWVwbGF5U2NhbGU6IDEsIGVhc2luZzogXCJlYXNlSW5cIiB9LFxuICBdLFxuICBjYW1lcmE6IFtcbiAgICB7IHByb2dyZXNzOiAwLCBoZWlnaHQ6IDY1LCBsb29rQW5nbGVEZWdyZWVzOiAyNywgZm9sbG93RGlzdGFuY2U6IDIwLCB6b29tOiAuMiwgaG9yaXpvbjogLjUxIH0sXG4gICAgeyBwcm9ncmVzczogLjExNjcsIGhlaWdodDogNDUsIGxvb2tBbmdsZURlZ3JlZXM6IDI3LCBmb2xsb3dEaXN0YW5jZTogLTUsIHpvb206IC4yOCwgaG9yaXpvbjogLjQ3LCBiYWNrZ3JvdW5kRm9yd2FyZE9mZnNldDogLjEyLCBiYWNrZ3JvdW5kVmVydGljYWxPZmZzZXQ6IC0uMjUsIGJhY2tncm91bmRab29tT2Zmc2V0OiAuMjQsIGVhc2luZzogXCJlYXNlSW5cIiB9LFxuICAgIHsgcHJvZ3Jlc3M6IC4yNTgzLCBoZWlnaHQ6IDM1LCBsb29rQW5nbGVEZWdyZWVzOiAyNywgZm9sbG93RGlzdGFuY2U6IC0yNSwgem9vbTogLjMyLCBob3Jpem9uOiAuNDUsIGJhY2tncm91bmRGb3J3YXJkT2Zmc2V0OiAuMjIsIGJhY2tncm91bmRWZXJ0aWNhbE9mZnNldDogLS4zOCwgYmFja2dyb3VuZFpvb21PZmZzZXQ6IC4zMiwgZWFzaW5nOiBcImVhc2VJbk91dFwiIH0sXG4gIF0sXG4gIHNvdW5kQ3Vlczoge1xuICAgIGRlcGxveTogXCJXYXZlUHJlc3N1cmVcIixcbiAgICBhdHRhY2tTdGFydDogXCJEcmFnb25CcmVhdGhcIixcbiAgICByZXNvbHZlOiBcIlByb2plY3RpbGVIaXRcIixcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIERyYWdvbkJyZWF0aEludGVudDtcblxuZnVuY3Rpb24gZHJhZ29uQnJlYXRoTWVtYmVyKGludGVudDogRHJhZ29uQnJlYXRoSW50ZW50KTogU2hvd3N0b3BwZXJNZW1iZXIge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiBcIkRyYWdvbidzIEJyZWF0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgYmFua2VkIGNpbmVtYXRpYyBjbGVhciB3aGVyZSBhIGZyaWVuZGx5IG5lb24gc2hhcGUgZGl2ZXMgYWhlYWQgYW5kIGxheXMgYSB0aGljayB3YXZlIG9mIGZpcmUuXCIsXG4gICAgcmFyaXR5OiBcInJhcmVcIixcbiAgICBiYW5rQmVoYXZpb3I6IFwiYmFua2VkTWFudWFsVHJpZ2dlclwiLFxuICAgIGR1cmF0aW9uTXM6IGludGVudC5kdXJhdGlvbk1zLFxuICAgIGNlbnRlckNhbWVyYU1zOiBpbnRlbnQuY2VudGVyQ2FtZXJhTXMsXG4gICAgcmV0dXJuQ2FtZXJhTXM6IGludGVudC5yZXR1cm5DYW1lcmFNcyxcbiAgICB0aW1lV2FycDogcG9pbnRzQXRNcyhpbnRlbnQudGltZVdhcnAsIGludGVudC5kdXJhdGlvbk1zKSxcbiAgICBjYW1lcmE6IHBvaW50c0F0TXMoaW50ZW50LmNhbWVyYSwgaW50ZW50LmR1cmF0aW9uTXMpLFxuICAgIHRpbWVsaW5lRXZlbnRzOiBbXG4gICAgICB7IHR5cGU6IFwic3RhcnRBdHRhY2tcIiwgcHJvZ3Jlc3M6IGludGVudC5hdHRhY2tTdGFydFByb2dyZXNzLCBhdE1zOiBtc0F0UHJvZ3Jlc3MoaW50ZW50LmF0dGFja1N0YXJ0UHJvZ3Jlc3MsIGludGVudC5kdXJhdGlvbk1zKSB9LFxuICAgICAgeyB0eXBlOiBcInN0b3BBdHRhY2tcIiwgcHJvZ3Jlc3M6IGludGVudC5hdHRhY2tFbmRQcm9ncmVzcywgYXRNczogbXNBdFByb2dyZXNzKGludGVudC5hdHRhY2tFbmRQcm9ncmVzcywgaW50ZW50LmR1cmF0aW9uTXMpIH0sXG4gICAgXSxcbiAgICBhdHRhY2s6IHtcbiAgICAgIHN0YXJ0TXM6IG1zQXRQcm9ncmVzcyhpbnRlbnQuYXR0YWNrU3RhcnRQcm9ncmVzcywgaW50ZW50LmR1cmF0aW9uTXMpLFxuICAgICAgZW5kTXM6IGludGVudC5kdXJhdGlvbk1zLFxuICAgICAgcm93c0FoZWFkOiBpbnRlbnQucm93c0FoZWFkLFxuICAgICAgdGFyZ2V0aW5nOiBcImFsbExhbmVzQWhlYWRcIixcbiAgICB9LFxuICAgIG11c2ljRHVja1ZvbHVtZTogaW50ZW50Lm11c2ljRHVja1ZvbHVtZSxcbiAgICBwaWNrdXBDb2xvcjogXCJvcmFuZ2VcIixcbiAgICBzb3VuZEN1ZXM6IGludGVudC5zb3VuZEN1ZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBvaW50c0F0TXM8VCBleHRlbmRzIHsgcHJvZ3Jlc3M6IG51bWJlciB9Pihwb2ludHM6IHJlYWRvbmx5IFRbXSwgZHVyYXRpb25NczogbnVtYmVyKTogQXJyYXk8VCAmIHsgYXRNczogbnVtYmVyIH0+IHtcbiAgcmV0dXJuIHBvaW50cy5tYXAocG9pbnQgPT4gKHtcbiAgICAuLi5wb2ludCxcbiAgICBhdE1zOiBtc0F0UHJvZ3Jlc3MocG9pbnQucHJvZ3Jlc3MsIGR1cmF0aW9uTXMpLFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1zQXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyLCBkdXJhdGlvbk1zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcykpICogZHVyYXRpb25Ncyk7XG59XG5cbmV4cG9ydCBjbGFzcyBTaG93c3RvcHBlckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNob3dzdG9wcGVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hvd3N0b3BwZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNob3dzdG9wcGVyXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGJhbmtlZDogdHJ1ZSxcbiAgICBtYW51YWxUcmlnZ2VyOiB0cnVlLFxuICAgIGNpbmVtYXRpY0RpcmVjdG9yOiB0cnVlLFxuICAgIGRldGVybWluaXN0aWNDbGVhcjogdHJ1ZSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGRyYWdvbnNCcmVhdGg6IGRyYWdvbkJyZWF0aE1lbWJlcihkcmFnb25CcmVhdGhJbnRlbnQpLFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaG93c3RvcHBlck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgbWVtYmVyXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLmR1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5jZW50ZXJDYW1lcmFNcyA+PSAwLCBgJHtpZH0gY2VudGVyQ2FtZXJhTXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5yZXR1cm5DYW1lcmFNcyA+IDAsIGAke2lkfSByZXR1cm5DYW1lcmFNcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci50aW1lV2FycC5sZW5ndGggPj0gMiwgYCR7aWR9IG11c3QgZGVmaW5lIGF0IGxlYXN0IHR3byB0aW1lLXdhcnAgcG9pbnRzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5jYW1lcmEubGVuZ3RoID49IDIsIGAke2lkfSBtdXN0IGRlZmluZSBhdCBsZWFzdCB0d28gY2FtZXJhIHBvc2VzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci50aW1lbGluZUV2ZW50cy5sZW5ndGggPj0gMiwgYCR7aWR9IG11c3QgZGVmaW5lIGF0IGxlYXN0IHR3byB0aW1lbGluZSBldmVudHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLmF0dGFjay5zdGFydE1zID49IDAgJiYgbWVtYmVyLmF0dGFjay5lbmRNcyA+IG1lbWJlci5hdHRhY2suc3RhcnRNcywgYCR7aWR9IGF0dGFjayBtdXN0IGhhdmUgYSB2YWxpZCB0aW1lIHJhbmdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5hdHRhY2suZW5kTXMgPD0gbWVtYmVyLmR1cmF0aW9uTXMsIGAke2lkfSBhdHRhY2sgY2Fubm90IGV4Y2VlZCBkdXJhdGlvbi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIuYXR0YWNrLnJvd3NBaGVhZCA+IDAsIGAke2lkfSBhdHRhY2sgcm93c0FoZWFkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLm11c2ljRHVja1ZvbHVtZSA+IDAgJiYgbWVtYmVyLm11c2ljRHVja1ZvbHVtZSA8PSAxLCBgJHtpZH0gbXVzaWNEdWNrVm9sdW1lIG11c3QgYmUgaW4gdGhlIDAtMSByYW5nZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVttZW1iZXIucGlja3VwQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBwaWNrdXAgY29sb3IuYCk7XG4gICAgICB0aGlzLnZhbGlkYXRlVGltZWRQb2ludHMoaWQsIFwidGltZVdhcnBcIiwgbWVtYmVyLnRpbWVXYXJwLCBtZW1iZXIuZHVyYXRpb25Ncyk7XG4gICAgICB0aGlzLnZhbGlkYXRlVGltZWRQb2ludHMoaWQsIFwiY2FtZXJhXCIsIG1lbWJlci5jYW1lcmEsIG1lbWJlci5kdXJhdGlvbk1zKTtcbiAgICAgIHRoaXMudmFsaWRhdGVUaW1lZFBvaW50cyhpZCwgXCJ0aW1lbGluZUV2ZW50c1wiLCBtZW1iZXIudGltZWxpbmVFdmVudHMsIG1lbWJlci5kdXJhdGlvbk1zKTtcbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgbWVtYmVyLnRpbWVXYXJwKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZShwb2ludC5nYW1lcGxheVNjYWxlID4gMCAmJiBwb2ludC5nYW1lcGxheVNjYWxlIDw9IDEsIGAke2lkfSBnYW1lcGxheVNjYWxlIG11c3QgYmUgaW4gdGhlIDAtMSByYW5nZS5gKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcG9zZSBvZiBtZW1iZXIuY2FtZXJhKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZShwb3NlLmhlaWdodCA+PSAtMjAwLCBgJHtpZH0gY2FtZXJhIGhlaWdodCBpcyBvdXRzaWRlIHRoZSBzdXBwb3J0ZWQgbGFiIHJhbmdlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUocG9zZS56b29tID4gMCwgYCR7aWR9IGNhbWVyYSB6b29tIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZShwb3NlLmhvcml6b24gPiAwICYmIHBvc2UuaG9yaXpvbiA8IDEsIGAke2lkfSBjYW1lcmEgaG9yaXpvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlVGltZWRQb2ludHMoaWQ6IHN0cmluZywgbGFiZWw6IHN0cmluZywgcG9pbnRzOiByZWFkb25seSB7IGF0TXM6IG51bWJlciB9W10sIGR1cmF0aW9uTXM6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBwcmV2aW91cyA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHBvaW50cykge1xuICAgICAgdGhpcy5yZXF1aXJlKHBvaW50LmF0TXMgPj0gMCAmJiBwb2ludC5hdE1zIDw9IGR1cmF0aW9uTXMsIGAke2lkfSAke2xhYmVsfSBwb2ludCBhdE1zIGlzIG91dHNpZGUgdGhlIHNlcXVlbmNlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHBvaW50LmF0TXMgPj0gcHJldmlvdXMsIGAke2lkfSAke2xhYmVsfSBwb2ludHMgbXVzdCBiZSBzb3J0ZWQgYnkgYXRNcy5gKTtcbiAgICAgIHByZXZpb3VzID0gcG9pbnQuYXRNcztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNob3dzdG9wcGVyRmFtaWx5ID0gbmV3IFNob3dzdG9wcGVyRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU2hvd3N0b3BwZXJJZCA9IGtleW9mIHR5cGVvZiBzaG93c3RvcHBlckZhbWlseS5tZW1iZXJzO1xuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nU2hvd3N0b3BwZXJJZDogU2hvd3N0b3BwZXJJZCA9IFwiZHJhZ29uc0JyZWF0aFwiO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEhvdyB0aGUgc3dvcmQgc2VsZWN0cyB0YXJnZXRzIGZyb20gdGhlIG5lYXJieSB0aHJlYXQgcG9vbC5cbiAqIEFsbCBtb2RlcyBhcmUgbGFuZS1hd2FyZSB2aWEgdGhlIE5lYXJieVRocmVhdFF1ZXJ5IG1vZHVsZS5cbiAqL1xuZXhwb3J0IHR5cGUgU3dvcmRUYXJnZXRpbmdNb2RlID1cbiAgfCBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIgICAvLyBjbG9zZXN0IGVuZW15IGluIHRoZSBwbGF5ZXIncyBhY3RpdmUgbGFuZVxuICB8IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiICAgIC8vIGNsb3Nlc3QgZW5lbXkgcmVnYXJkbGVzcyBvZiBsYW5lXG4gIHwgXCJmcm9udE1vc3RUaHJlYXRcIiAgICAgICAgLy8gZmFydGhlc3QtYWR2YW5jZWQgKGhpZ2hlc3QgeSkgZW5lbXkgaW4gcmFuZ2VcbiAgfCBcImNsdXN0ZXJOZWFyUGxheWVyXCI7ICAgICAvLyBwaWNrcyB1cCB0byBtYXhUYXJnZXRzIGVuZW1pZXMgd2l0aGluIHJlYWNoXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dvcmRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic3dvcmRcIjtcbiAgcmFyaXR5OiBcInN0YXJ0ZXJcIiB8IFwiY29tbW9uXCIgfCBcInVuY29tbW9uXCI7XG4gIC8qKlxuICAgKiBBdHRhY2sgcmFuZ2UgaW4gcGl4ZWxzIChhdCBzY2FsZSAxKS5cbiAgICogU3dvcmQgb25seSBzd2luZ3Mgd2hlbiBhbiBlbmVteSBlbnRlcnMgdGhpcyByYWRpdXMuXG4gICAqL1xuICByYW5nZTogbnVtYmVyO1xuICAvKipcbiAgICogQW5ndWxhciB3aWR0aCBvZiB0aGUgc2xhc2ggYXJjIGluIGRlZ3JlZXMuXG4gICAqIFdpZGVyID0gaGVhdmllciwgaGl0cyBtb3JlIGVuZW1pZXMgcGVyIHN3aW5nLlxuICAgKi9cbiAgYXJjRGVncmVlczogbnVtYmVyO1xuICAvKiogRGFtYWdlIHBlciBoaXQuICovXG4gIGRhbWFnZTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgbGV2ZWwgNSBkYW1hZ2UgcGVyIGhpdC5cbiAgICpcbiAgICogTGV2ZWwgMSB1c2VzIGRhbWFnZSwgbGV2ZWwgNSB1c2VzIGRhbWFnZUF0TGV2ZWw1LCBhbmQgaW50ZXJtZWRpYXRlIGxldmVsc1xuICAgKiBpbnRlcnBvbGF0ZS4gVXNlIHRoaXMgd2hlbiBkdXBsaWNhdGUgcGlja3VwcyBzaG91bGQgaW5jcmVhc2UgdG90YWwgSFBcbiAgICogY2xlYXJlZCB3aXRob3V0IGNoYW5naW5nIHByb3hpbWl0eSBydWxlcy5cbiAgICovXG4gIGRhbWFnZUF0TGV2ZWw1PzogbnVtYmVyO1xuICAvKiogQ29vbGRvd24gYmV0d2VlbiBzd2luZ3MgaW4gc2Vjb25kcy4gU3dvcmRzIGRvIG5vdCBmaXJlIG9uIGEgdGltZXI7IG9ubHkgd2hlbiBhIHRhcmdldCBleGlzdHMuICovXG4gIGNvb2xkb3duU2Vjb25kczogbnVtYmVyO1xuICAvKiogTWF4aW11bSB0YXJnZXRzIGhpdCBwZXIgc3dpbmcuICovXG4gIG1heFRhcmdldHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZlcnRpY2FsIHJlYWNoIGluIGF1dGhvcmVkIHRyYWNrIHJvd3MuXG4gICAqXG4gICAqIEhlYXZ5IHN3ZWVwaW5nIHN3b3JkcyBjYW4gdXNlIHRoaXMgd2l0aCByZXBlYXRlZCBwaWNrdXBzOiBsZXZlbCAxIHVzZXNcbiAgICogbGV2ZWwxIHJvd3MsIGxldmVsIDUgdXNlcyBsZXZlbDUgcm93cywgYW5kIGludGVybWVkaWF0ZSBsZXZlbHMgaW50ZXJwb2xhdGUuXG4gICAqIFRoaXMgZXhwYW5kcyBhZmZlY3RlZCByb3dzIGFmdGVyIGEgY2xvc2UgdGFyZ2V0IGlzIGZvdW5kOyBpdCBkb2VzIG5vdFxuICAgKiBsb29zZW4gdGhlIG5lYXItcGxheWVyIHByb3hpbWl0eSB0aHJlc2hvbGQuXG4gICAqL1xuICByb3dSZWFjaD86IHtcbiAgICBsZXZlbDE6IG51bWJlcjtcbiAgICBsZXZlbDU6IG51bWJlcjtcbiAgfTtcbiAgLyoqIExhbmUtYXdhcmUgdGFyZ2V0IHNlbGVjdGlvbiBtb2RlLiAqL1xuICB0YXJnZXRpbmdNb2RlOiBTd29yZFRhcmdldGluZ01vZGU7XG4gIC8qKiBWaXN1YWwgc2xhc2ggYXJjIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy4gKi9cbiAgc2xhc2hEdXJhdGlvbk1zOiBudW1iZXI7XG4gIC8qKiBQcmltYXJ5IHNsYXNoIGNvbG9yLiAqL1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgLyoqIFZpc3VhbCB0aGlja25lc3MgbXVsdGlwbGllciBmb3IgdGhlIHNoYXJlZCBzd29yZCB0cmFpbC4gMS4wID0gZGVmYXVsdC4gKi9cbiAgc2xhc2hUaGlja25lc3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRlc2lnbiBub3Rlcy4gTm90IHVzZWQgYnkgcnVudGltZTsgZG9jdW1lbnRzIGludGVudCBmb3IgZnV0dXJlIGFnZW50cy5cbiAgICovXG4gIGFnZW50Tm90ZXM/OiBzdHJpbmc7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRmFtaWx5IGRlZmluaXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU3dvcmRGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInN3b3JkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTd29yZFwiO1xuXG4gIC8qKlxuICAgKiBGYW1pbHktbGV2ZWwgaW1wbGVtZW50YXRpb24gbm90ZXM6XG4gICAqIC0gU3dvcmRzIGFyZSBub3QgcGVyaW9kLWJhc2VkIGxpa2UgZ3Vucy4gVGhleSBzd2luZyBvbmx5IHdoZW4gYSB2YWxpZCB0YXJnZXRcbiAgICogICBpcyB3aXRoaW4gcmFuZ2UgYW5kIGNvb2xkb3duIGlzIHJlYWR5LiBUaGV5IGlkbGUgc2lsZW50bHkgb3RoZXJ3aXNlLlxuICAgKiAtIE9uZSBhY3RpdmUgc3dvcmQgcGVyIHBsYXllciAoZmFtaWx5LXNjb3BlZCBleGNsdXNpdml0eSkuXG4gICAqIC0gUmVwZWF0ZWQgcGlja3VwcyBvZiB0aGUgc2FtZSBzd29yZCBpbmNyZWFzZSB0aGF0IHN3b3JkJ3MgYWN0aXZlIGxldmVsLlxuICAgKiAtIENhbiBjb2V4aXN0IHdpdGggYW4gYWN0aXZlIEd1biBhbmQgYW4gYWN0aXZlIFNoaWVsZCBzaW11bHRhbmVvdXNseS5cbiAgICogLSBUYXJnZXRpbmcgaXMgbGFuZS1hd2FyZSB2aWEgcXVlcnlOZWFyYnlUaHJlYXRzKCkuXG4gICAqIC0gVGhlIHNsYXNoIGFuaW1hdGlvbiBydW5zIGZvciBzbGFzaER1cmF0aW9uTXMgbWlsbGlzZWNvbmRzLCB0aGVuIGZhZGVzLlxuICAgKiAtIERhbWFnZSBpcyBhcHBsaWVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHN3aW5nIHN0YXJ0cyAobm90IGF0IGFuaW1hdGlvbiBlbmQpLlxuICAgKlxuICAgKiBQcmVjZWRlbmNlOiBzd29yZCBhdHRhY2tzIG9jY3VyIGFmdGVyIHNoaWVsZEJsb2NrL3NoaWVsZFB1bHNlIGJ1dCBiZWZvcmVcbiAgICogc2hpZWxkQ29udGFjdERhbWFnZSBhbmQgc2hpZWxkQXVyYS4gU2VlIG1haW4udHMgbmVhclBsYXllckVmZmVjdE9yZGVyLlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICAvKipcbiAgICAgKiBBcmMgQmxhZGUgLSBDb3JlIHN3b3JkLiBGYXN0LCBjdXJ2ZWQsIHRhcmdldHMgbmVhcmVzdCBlbmVteSBpbiBsYW5lLlxuICAgICAqIFNob3J0IGNvb2xkb3duIG1ha2VzIGl0IHVzZWZ1bCBhZ2FpbnN0IGRlbnNlIHNpbmdsZS1sYW5lIHdhdmVzLlxuICAgICAqL1xuICAgIGFyY0JsYWRlOiB7XG4gICAgICBsYWJlbDogXCJBcmMgQmxhZGVcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcInN0YXJ0ZXJcIixcbiAgICAgIHJhbmdlOiA1MixcbiAgICAgIGFyY0RlZ3JlZXM6IDcwLFxuICAgICAgZGFtYWdlOiAxLjUsXG4gICAgICBjb29sZG93blNlY29uZHM6IDAuNTUsXG4gICAgICBtYXhUYXJnZXRzOiAyLFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAxNTAsXG4gICAgICBjb2xvcjogXCJjeWFuXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS4wLFxuICAgICAgYWdlbnROb3RlczogXCJGYXN0IGFuZCBzaGFycC4gQ3VydmVkIG5lb24gc2xhc2guIDEyMC0xODBtcyBmZWVsLiBGYWRpbmcgYWZ0ZXJpbWFnZS4gTGlrZSBhIHdoaXAtbGlrZSBrYXRhbmEgYXJjLlwiLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhdmVyIC0gSGVhdnkgc3dvcmQuIFNsb3dlciwgYnV0IHN3ZWVwcyBhY3Jvc3MgZXZlcnkgY29sdW1uLlxuICAgICAqIFN0YXJ0cyB3aXRoIDIgcm93cyBvZiB2ZXJ0aWNhbCByZWFjaCBhbmQgc2NhbGVzIHRvIDQgcm93cyBhdCBsZXZlbCA1LlxuICAgICAqL1xuICAgIGNsZWF2ZXI6IHtcbiAgICAgIGxhYmVsOiBcIkNsZWF2ZXJcIixcbiAgICAgIGZhbWlseTogXCJzd29yZFwiLFxuICAgICAgcmFyaXR5OiBcImNvbW1vblwiLFxuICAgICAgcmFuZ2U6IDY4LFxuICAgICAgYXJjRGVncmVlczogMzYwLFxuICAgICAgZGFtYWdlOiAyLjQsXG4gICAgICBkYW1hZ2VBdExldmVsNTogMy40LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxLjM1LFxuICAgICAgbWF4VGFyZ2V0czogMTIsXG4gICAgICByb3dSZWFjaDogeyBsZXZlbDE6IDIsIGxldmVsNTogNCB9LFxuICAgICAgdGFyZ2V0aW5nTW9kZTogXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDI2MCxcbiAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuOSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiSGVhdnkgYWxsLWNvbHVtbiBzd2VlcC4gUmVwZWF0ZWQgY2xlYXZlciBwaWNrdXBzIGxldmVsIGl0IHVwIGZyb20gMiByb3dzIG9mIHJlYWNoIHRvIDQgcm93cyBhdCBsZXZlbCA1LCB3aXRoIG1vcmUgdG90YWwgZGFtYWdlIHBlciBzd2luZy5cIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTd29yZE1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3dvcmRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykgYXMgQXJyYXk8W3N0cmluZywgU3dvcmRNZW1iZXJdPikge1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnJhbmdlID4gMCwgYCR7aWR9IHJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuYXJjRGVncmVlcyA+IDAgJiYgc3dvcmQuYXJjRGVncmVlcyA8PSAzNjAsIGAke2lkfSBhcmNEZWdyZWVzIG11c3QgYmUgaW4gKDAsIDM2MF0uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlID4gMCwgYCR7aWR9IGRhbWFnZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgaWYgKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ICE9PSB1bmRlZmluZWQpIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2VBdExldmVsNSA+PSBzd29yZC5kYW1hZ2UsIGAke2lkfSBkYW1hZ2VBdExldmVsNSBtdXN0IGJlIGF0IGxlYXN0IGRhbWFnZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gY29vbGRvd25TZWNvbmRzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQubWF4VGFyZ2V0cyA+PSAxLCBgJHtpZH0gbWF4VGFyZ2V0cyBtdXN0IGJlIGF0IGxlYXN0IDEuYCk7XG4gICAgICBpZiAoc3dvcmQucm93UmVhY2gpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWwxKSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDEgPj0gMSwgYCR7aWR9IHJvd1JlYWNoLmxldmVsMSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKE51bWJlci5pc0ludGVnZXIoc3dvcmQucm93UmVhY2gubGV2ZWw1KSAmJiBzd29yZC5yb3dSZWFjaC5sZXZlbDUgPj0gc3dvcmQucm93UmVhY2gubGV2ZWwxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgbGV2ZWwxLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoRHVyYXRpb25NcyA+IDAsIGAke2lkfSBzbGFzaER1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaFRoaWNrbmVzcyA+IDAsIGAke2lkfSBzbGFzaFRoaWNrbmVzcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3N3b3JkLmNvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gY29sb3IuYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzd29yZEZhbWlseSA9IG5ldyBTd29yZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFN3b3JkSWQgPSBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xlZ2VuZEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCYWxhbmNlIHtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEZWZpbml0aW9uIHtcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIGxlZ2VuZDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgVHJhY2tMZWdlbmRFbnRyeT4+O1xuICBiYWxhbmNlOiBUcmFja0JhbGFuY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBkZWZpbml0aW9uOiBUcmFja0RlZmluaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tJZCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFRyYWNrRW50aXR5IHtcbiAgaWQ6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBsYW5lSW5kZXg6IG51bWJlcjtcbiAgY29sdW1uU3BhbjogbnVtYmVyO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBkaXN0YW5jZUZyb21QbGF5ZXI6IG51bWJlcjtcbiAgc3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmNvbnN0IGlzRW5lbXkgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4gaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKTtcbmNvbnN0IGVuZW15SWRGcm9tVHJhY2tJZCA9IChpZDogc3RyaW5nKTogT3JiSWQgfCBudWxsID0+IHtcbiAgaWYgKGlkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNhbmRpZGF0ZSA9IGlkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZSBpbiBvcmJGYW1pbHkubWVtYmVycyA/IGNhbmRpZGF0ZSBhcyBPcmJJZCA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVRyYWNrUm93cyh0cmFjazogVHJhY2tEZWZpbml0aW9uKTogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHNvdXJjZUluZGV4OiBudW1iZXIgfT4ge1xuICBjb25zdCByb3dzID0gdHJhY2subGF5b3V0XG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKCh0ZXh0LCBzb3VyY2VJbmRleCkgPT4gKHsgdGV4dDogdGV4dC50cmltKCksIHNvdXJjZUluZGV4OiBzb3VyY2VJbmRleCArIDEgfSkpXG4gICAgLmZpbHRlcihyb3cgPT4gcm93LnRleHQubGVuZ3RoID4gMCk7XG5cbiAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYXlvdXQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSByb3cuXCIpO1xuICByZXR1cm4gcm93cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBQYXJzZWRUcmFja0VudGl0eVtdIHtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBmb3IgKGNvbnN0IFtzeW1ib2wsIGVudHJ5XSBvZiBPYmplY3QuZW50cmllcyh0cmFjay5sZWdlbmQpKSB7XG4gICAgaWYgKFsuLi5zeW1ib2xdLmxlbmd0aCAhPT0gMSB8fCAvXFxzfFxcfC8udGVzdChzeW1ib2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBrZXkgXCIke3N5bWJvbH1cIiBtdXN0IGJlIG9uZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBcInxcIi5gKTtcbiAgICB9XG4gICAgaWYgKCFlbnRyeS5pZCkgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgbXVzdCBoYXZlIGFuIGlkLmApO1xuICAgIGlmIChlbnRyeS5zcGVlZCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LnNwZWVkIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm93cyA9IHBhcnNlVHJhY2tSb3dzKHRyYWNrKTtcbiAgbGV0IGxlZnRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBsZXQgcmlnaHRXaWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRpdGllczogUGFyc2VkVHJhY2tFbnRpdHlbXSA9IFtdO1xuXG4gIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBpcGVDb3VudCA9IFsuLi5yb3cudGV4dF0uZmlsdGVyKGNoYXJhY3RlciA9PiBjaGFyYWN0ZXIgPT09IFwifFwiKS5sZW5ndGg7XG4gICAgaWYgKHBpcGVDb3VudCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gbXVzdCBjb250YWluIGV4YWN0bHkgb25lIFwifFwiIHNlcGFyYXRvcjsgZm91bmQgJHtwaXBlQ291bnR9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSByb3cudGV4dC5zcGxpdChcInxcIikubWFwKHNpZGUgPT4gc2lkZS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICAgIGxlZnRXaWR0aCA/Pz0gbGVmdC5sZW5ndGg7XG4gICAgcmlnaHRXaWR0aCA/Pz0gcmlnaHQubGVuZ3RoO1xuXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSBsZWZ0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyBsZWZ0IHdpZHRoICR7bGVmdC5sZW5ndGh9OyBleHBlY3RlZCAke2xlZnRXaWR0aH0uYCk7XG4gICAgfVxuICAgIGlmIChyaWdodC5sZW5ndGggIT09IHJpZ2h0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IGhhcyByaWdodCB3aWR0aCAke3JpZ2h0Lmxlbmd0aH07IGV4cGVjdGVkICR7cmlnaHRXaWR0aH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzdGFuY2VGcm9tUGxheWVyID0gcm93cy5sZW5ndGggLSAxIC0gcm93SW5kZXg7XG4gICAgZm9yIChjb25zdCBbc2lkZSwgbGFuZV0gb2YgW1tcImxlZnRcIiwgbGVmdF0sIFtcInJpZ2h0XCIsIHJpZ2h0XV0gYXMgY29uc3QpIHtcbiAgICAgIGNvbnN0IG9jY3VwaWVkQnkgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICAgICAgWy4uLmxhbmVdLmZvckVhY2goKHN5bWJvbCwgbGFuZUluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdHJhY2subGVnZW5kW3N5bWJvbF07XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSB1c2VzIHN5bWJvbCBcIiR7c3ltYm9sfVwiIGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBpcyBtaXNzaW5nIGZyb20gdGhlIGxlZ2VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuaWQgPT09IFwiZW1wdHlcIikgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbmVteUlkID0gZW5lbXlJZEZyb21UcmFja0lkKGVudHJ5LmlkKTtcbiAgICAgICAgY29uc3QgY29sdW1uU3BhbiA9IGVuZW15SWQgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkXS5jb2x1bW5TcGFuIDogMTtcbiAgICAgICAgaWYgKGxhbmVJbmRleCArIGNvbHVtblNwYW4gPiBsYW5lLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgbmVlZHMgJHtjb2x1bW5TcGFufSBjb2x1bW5zIGFuZCBvbmx5ICR7bGFuZS5sZW5ndGggLSBsYW5lSW5kZXh9IHJlbWFpbi5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykge1xuICAgICAgICAgIGNvbnN0IG9jY3VwaWVkID0gb2NjdXBpZWRCeS5nZXQobGFuZUluZGV4ICsgb2Zmc2V0KTtcbiAgICAgICAgICBpZiAob2NjdXBpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHBsYWNlcyAke2VudHJ5LmlkfSBvbiAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXggKyBvZmZzZXR9LCBhbHJlYWR5IG9jY3VwaWVkIGJ5ICR7b2NjdXBpZWR9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBjb2x1bW5TcGFuOyBvZmZzZXQrKykgb2NjdXBpZWRCeS5zZXQobGFuZUluZGV4ICsgb2Zmc2V0LCBlbnRyeS5pZCk7XG5cbiAgICAgICAgZW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGVudHJ5LmlkLFxuICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICBzaWRlLFxuICAgICAgICAgIGxhbmVJbmRleCxcbiAgICAgICAgICBjb2x1bW5TcGFuLFxuICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgIGRpc3RhbmNlRnJvbVBsYXllcixcbiAgICAgICAgICBzcGVlZE11bHRpcGxpZXI6IChlbnRyeS5zcGVlZCA/PyAxKSAqIChpc0VuZW15KGVudHJ5LmlkKSA/IHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA6IDEpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+XG4gICAgYS5kaXN0YW5jZUZyb21QbGF5ZXIgLSBiLmRpc3RhbmNlRnJvbVBsYXllciB8fFxuICAgIGEucm93SW5kZXggLSBiLnJvd0luZGV4IHx8XG4gICAgYS5zaWRlLmxvY2FsZUNvbXBhcmUoYi5zaWRlKSB8fFxuICAgIGEubGFuZUluZGV4IC0gYi5sYW5lSW5kZXgpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbGlnaHRuaW5nRmFtaWx5IH0gZnJvbSBcIi4vTGlnaHRuaW5nRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5IH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHNob3dzdG9wcGVyRmFtaWx5IH0gZnJvbSBcIi4vU2hvd3N0b3BwZXJGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5IH0gZnJvbSBcIi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uLCB0eXBlIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbi8qKlxuICogR2xvYmFsIDAtYmFzZWQgY29sdW1uIGluZGV4IGFjcm9zcyBib3RoIGxhbmVzLlxuICpcbiAqIEN1cnJlbnQgbGF5b3V0IHNoYXBlOlxuICogLSBjb2x1bW5zIDAtNCBhcmUgdGhlIGxlZnQgbGFuZVxuICogLSBjb2x1bW5zIDUtOSBhcmUgdGhlIHJpZ2h0IGxhbmVcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC0gMiA9IGxlZnQgbGFuZSBtaWRkbGVcbiAqIC0gNyA9IHJpZ2h0IGxhbmUgbWlkZGxlXG4gKi9cbmV4cG9ydCB0eXBlIFRyYWNrQ29sdW1uID0gbnVtYmVyO1xuXG4vKipcbiAqIEZyaWVuZGx5IGNvbHVtbiBjb25zdGFudHMgZm9yIHRoZSBjdXJyZW50IDItbGFuZSAvIDUtY29sdW1uIHRyYWNrIGZvcm1hdC5cbiAqXG4gKiBUaGVzZSBhcmUgb25seSBzdWdhci4gVGhlIGJ1aWxkZXIgc3RpbGwgYWNjZXB0cyByYXcgbnVtYmVycyBmb3IgZmFzdCBhdXRob3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDb2x1bW5zIHtcbiAgcmVhZG9ubHkgbGVmdDoge1xuICAgIHJlYWRvbmx5IG91dGVyOiAwO1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogMTtcbiAgICByZWFkb25seSBtaWQ6IDI7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiAzO1xuICAgIHJlYWRvbmx5IGlubmVyOiA0O1xuICB9O1xuICByZWFkb25seSByaWdodDoge1xuICAgIHJlYWRvbmx5IGlubmVyOiA1O1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogNjtcbiAgICByZWFkb25seSBtaWQ6IDc7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiA4O1xuICAgIHJlYWRvbmx5IG91dGVyOiA5O1xuICB9O1xufVxuXG4vKipcbiAqIENvbW1vbiBleHBvcnRlZCBjb2x1bW4gY29uc3RhbnRzLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIGJ1aWxkZXIuZW5lbXkoXCJiYXNpY1wiLCB7IGNvbHVtbjogYy5sZWZ0Lm1pZCB9KVxuICogYnVpbGRlci53ZWFwb24oXCJzd29yZC5hcmNCbGFkZVwiLCB7IGNvbHVtbjogYy5yaWdodC5taWQgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGM6IFRyYWNrQ29sdW1ucyA9IHtcbiAgbGVmdDogeyBvdXRlcjogMCwgbmVhck91dGVyOiAxLCBtaWQ6IDIsIG5lYXJJbm5lcjogMywgaW5uZXI6IDQgfSxcbiAgcmlnaHQ6IHsgaW5uZXI6IDUsIG5lYXJJbm5lcjogNiwgbWlkOiA3LCBuZWFyT3V0ZXI6IDgsIG91dGVyOiA5IH0sXG59O1xuXG5leHBvcnQgdHlwZSBUcmFja0VuZW15UmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tXZWFwb25SZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1BpY2t1cFJlZiA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1BsYWNlbWVudE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICAvKipcbiAgICogT3B0aW9uYWwgcGVyLXN5bWJvbCBzcGVlZCBtdWx0aXBsaWVyIGVtaXR0ZWQgaW50byB0aGUgdHJhY2sgbGVnZW5kLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFRoZSBkZWZhdWx0IGlzIDEsIGFuZCBmdXR1cmUgdHJhY2sgZWRpdHNcbiAgICogc2hvdWxkIHByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseSBhc2tzIGZvciBzcGVlZCB0dW5pbmcuXG4gICAqIENoYW5naW5nIHRoaXMgdmFsdWUgaXMgYSBzaWduaWZpY2FudCBiYWxhbmNlIGNoYW5nZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGluZU9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrV2FsbE9wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgd2FsbC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRHJpcE9wdGlvbnMge1xuICBjb2x1bW46IFRyYWNrQ29sdW1uO1xuICByb3dzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQbGFjZSBvbmUgZW5lbXkgZXZlcnkgTiByb3dzLlxuICAgKlxuICAgKiBEcmlwIGlzIGludGVudGlvbmFsbHkgc3BhcnNlLiBQcmVmZXIgbGluZS9hbHRlcm5hdGluZyB3aXRob3V0IGEgZ2FwIGZvclxuICAgKiBub3JtYWwgcHJlc3N1cmUsIGFuZCB1c2UgZHJpcCBvbmx5IHdoZW4gdGhlIHNwYXJzZSBjYWRlbmNlIGlzIGRlbGliZXJhdGUuXG4gICAqL1xuICBldmVyeTogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgZHJpcCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgYmFsYW5jZToge1xuICAgIGVuZW15SHA6IG51bWJlcjtcbiAgICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIH07XG4gIHBsYXllclN0YXJ0Q29sdW1uPzogVHJhY2tDb2x1bW47XG4gIGxhbmVXaWR0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXIge1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICAvKipcbiAgICogQWRkIGEgZGFuZ2VyLWZvY3VzZWQgc2VjdGlvbiB3aXRoIGEgZml4ZWQgZHVyYXRpb24uXG4gICAqXG4gICAqIFByZXNzdXJlIHNob3VsZCB1c3VhbGx5IGNvbnRhaW4gZW5lbXkgcGxhY2VtZW50IGV2ZXJ5IHJvdy4gVXNlIGV4cGxpY2l0XG4gICAqIGdhcHMgb3IgZHJpcCBwYXR0ZXJucyBvbmx5IHdoZW4gdGhlIHF1aWV0IHNwYWNlIGlzIGludGVudGlvbmFsLlxuICAgKi9cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBidWlsZCgpOiBUcmFja01lbWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0J1aWxkZXJGYWN0b3J5IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG59XG5cbmludGVyZmFjZSBQbGFjZW1lbnQge1xuICByb3c6IG51bWJlcjtcbiAgY29sdW1uOiBudW1iZXI7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHNwYW46IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdExhbmVXaWR0aCA9IDU7XG5jb25zdCBlbXB0eVN5bWJvbCA9IFwiLlwiO1xuY29uc3QgcGxheWVyU3ltYm9sID0gXCJNXCI7XG5jb25zdCBlbmVteUFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBiYXNpYzogXCJlbmVteS5iYXNpY1wiLFxuICBiYXNpY09yYjogXCJlbmVteS5iYXNpY09yYlwiLFxuICBnbGFzczogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICBnbGFzc1NoaWVsZDogXCJlbmVteS5nbGFzc1NoaWVsZFwiLFxuICB3aW5nZXI6IFwiZW5lbXkud2luZ2VyXCIsXG4gIHRhbms6IFwiZW5lbXkudGFua1wiLFxufTtcbmNvbnN0IHdlYXBvblByZWZpeGVzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgZ3VuOiBcInBpY2t1cC53ZWFwb24uZ3VuLlwiLFxuICBzaGllbGQ6IFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIsXG4gIHN3b3JkOiBcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsXG4gIGxpZ2h0bmluZzogXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIixcbn07XG5jb25zdCBwaWNrdXBBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJ1bml0TXVsdGlwbGllci4yeFwiOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLFxuICBcInVuaXRNdWx0aXBsaWVyLnNxdWFkUGx1c09uZVwiOiBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiLFxuICBcInNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIjogXCJwaWNrdXAuc2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiLFxuICBcImRyYWdvbnNCcmVhdGhcIjogXCJwaWNrdXAuc2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiLFxufTtcbmNvbnN0IHByZWZlcnJlZFN5bWJvbHM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcImVuZW15LmJhc2ljXCI6IFwiRVwiLFxuICBcImVuZW15LmJhc2ljT3JiXCI6IFwiRVwiLFxuICBcImVuZW15LmdsYXNzU2hpZWxkXCI6IFwiRFwiLFxuICBcImVuZW15LndpbmdlclwiOiBcIldcIixcbiAgXCJlbmVteS50YW5rXCI6IFwiVFwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLnB1bHNlUGlzdG9sXCI6IFwiR1wiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLm5lZWRsZXJTbWdcIjogXCJOXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uYnVyc3RDYXJiaW5lXCI6IFwiQlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmhlYXZ5Q2Fubm9uXCI6IFwiSFwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLnNwbGl0dGVyUmlmbGVcIjogXCJSXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQubGlnaHRHdWFyZFwiOiBcIlNcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiOiBcIlZcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5oZXhHdWFyZFwiOiBcIlhcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmFyY0JsYWRlXCI6IFwiYVwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuY2xlYXZlclwiOiBcImNcIixcbiAgXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5jaGFpblNwYXJrXCI6IFwiTFwiLFxuICBcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIjogXCJGXCIsXG4gIFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwiMlwiLFxuICBcInBpY2t1cC5zaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCI6IFwiUVwiLFxufTtcbmNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejIzNDU2Nzg5ISMkJSYqKywtLzo7PD0+P0BeX35cIi5zcGxpdChcIlwiKVxuICAuZmlsdGVyKHN5bWJvbCA9PiBzeW1ib2wgIT09IGVtcHR5U3ltYm9sICYmIHN5bWJvbCAhPT0gcGxheWVyU3ltYm9sKTtcblxuZnVuY3Rpb24gcmVxdWlyZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIodmFsdWUpKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgYW4gaW50ZWdlci5gKTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIHJlcXVpcmVJbnRlZ2VyKHZhbHVlLCBsYWJlbCk7XG4gIGlmICh2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwZWVkKHNwZWVkOiBudW1iZXIgfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZSA9IHNwZWVkID8/IDE7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uYCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRW5lbXlJZChpZDogVHJhY2tFbmVteVJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBlbmVteUFsaWFzZXNbaWRdID8/IGBlbmVteS4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVdlYXBvbklkKGlkOiBUcmFja1dlYXBvblJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgZG90SW5kZXggPSBpZC5pbmRleE9mKFwiLlwiKTtcbiAgaWYgKGRvdEluZGV4IDw9IDApIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBtdXN0IHVzZSBmYW1pbHkuaWQgc2hvcnRoYW5kIG9yIGEgY2Fub25pY2FsIHBpY2t1cC53ZWFwb24gaWQuYCk7XG4gIGNvbnN0IGZhbWlseSA9IGlkLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgY29uc3QgbWVtYmVyID0gaWQuc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgY29uc3QgcHJlZml4ID0gd2VhcG9uUHJlZml4ZXNbZmFtaWx5XTtcbiAgaWYgKCFwcmVmaXgpIHRocm93IG5ldyBFcnJvcihgV2VhcG9uIGlkIFwiJHtpZH1cIiBoYXMgdW5rbm93biB3ZWFwb24gZmFtaWx5IFwiJHtmYW1pbHl9XCIuYCk7XG4gIHJldHVybiBgJHtwcmVmaXh9JHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGlja3VwSWQoaWQ6IFRyYWNrUGlja3VwUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuXCIpKSByZXR1cm4gaWQ7XG4gIHJldHVybiBwaWNrdXBBbGlhc2VzW2lkXSA/PyBgcGlja3VwLiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZW5lbXlNZW1iZXJJZChjYW5vbmljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChjYW5vbmljYWxJZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWNhbm9uaWNhbElkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2Fub25pY2FsSWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICBpZiAoZW5lbXlJZCkge1xuICAgIGlmICghKGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZW5lbXkgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZGF0b3JzOiByZWFkb25seSBbc3RyaW5nLCBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIHN0cmluZ11bXSA9IFtcbiAgICBbXCJwaWNrdXAud2VhcG9uLmd1bi5cIiwgZ3VuRmFtaWx5Lm1lbWJlcnMsIFwiZ3VuXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLCBzaGllbGRGYW1pbHkubWVtYmVycywgXCJzaGllbGRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zd29yZC5cIiwgc3dvcmRGYW1pbHkubWVtYmVycywgXCJzd29yZFwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIiwgbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnMsIFwibGlnaHRuaW5nXCJdLFxuICBdO1xuICBmb3IgKGNvbnN0IFtwcmVmaXgsIG1lbWJlcnMsIGxhYmVsXSBvZiB2YWxpZGF0b3JzKSB7XG4gICAgaWYgKCFpZC5zdGFydHNXaXRoKHByZWZpeCkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgaWYgKCEobWVtYmVySWQgaW4gbWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biAke2xhYmVsfSBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIikgcmV0dXJuO1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC51bml0TXVsdGlwbGllci5cIikpIHtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiLmxlbmd0aCk7XG4gICAgaWYgKCEobWVtYmVySWQgaW4gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG11bHRpcGxpZXIgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC5zaG93c3RvcHBlci5cIikpIHtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKFwicGlja3VwLnNob3dzdG9wcGVyLlwiLmxlbmd0aCk7XG4gICAgaWYgKCEobWVtYmVySWQgaW4gc2hvd3N0b3BwZXJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBzaG93c3RvcHBlciBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgdHJhY2sgZW50aXR5IGlkIFwiJHtpZH1cIi5gKTtcbn1cblxuZnVuY3Rpb24gc3BhbkZvcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgZW5lbXlJZCA9IGVuZW15TWVtYmVySWQoaWQpO1xuICByZXR1cm4gZW5lbXlJZCAmJiBlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdLmNvbHVtblNwYW4gOiAxO1xufVxuXG5jbGFzcyBUcmFja0J1aWxkZXJDb3JlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYW5lV2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGN1cnNvciA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKSB7XG4gICAgdGhpcy5sYW5lV2lkdGggPSBvcHRpb25zLmxhbmVXaWR0aCA/PyBkZWZhdWx0TGFuZVdpZHRoO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodGhpcy5sYW5lV2lkdGgsIFwiVHJhY2sgbGFuZVdpZHRoXCIpO1xuICAgIGlmICh0aGlzLmxhbmVXaWR0aCA8IDMpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhbmVXaWR0aCBtdXN0IGJlIGF0IGxlYXN0IDMuXCIpO1xuICAgIGlmICghb3B0aW9ucy5sYWJlbC50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxhYmVsIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMuZGVzY3JpcHRpb24udHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15U3BlZWQgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteVNwZWVkIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkLCBcInBsYXllclN0YXJ0Q29sdW1uXCIsIDEpO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcImVuZW15XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcIndlYXBvblwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJwaWNrdXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIFwiYWR2YW5jZVJvd3Mgcm93c1wiKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5hZHZhbmNlUm93cyhyb3dzKTtcbiAgfVxuXG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIGlmICghbmFtZS50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIHNlY3Rpb24gbmFtZSBpcyByZXF1aXJlZC5cIik7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7bmFtZX1cIiByb3dzYCk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IG5ldyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSh0aGlzLCBuYW1lLCB0aGlzLmN1cnNvciwgcm93cyk7XG4gICAgYnVpbGQoc2VjdGlvbik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInByZXNzdXJlXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIHJlYnVpbGQocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicmVidWlsZFwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZExpbmUodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwibGluZVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRBbHRlcm5hdGluZyh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJhbHRlcm5hdGluZ1wiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkV2FsbCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJ3YWxsXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGREcmlwKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImRyaXBcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRTZWN0aW9uRW5lbXkoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplRW5lbXlJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBlbmVteWApO1xuICB9XG5cbiAgYWRkU2VjdGlvbldlYXBvbihiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgd2VhcG9uYCk7XG4gIH1cblxuICBhZGRTZWN0aW9uUGlja3VwKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwaWNrdXBgKTtcbiAgfVxuXG4gIGFkZExpbmUoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFsdGVybmF0aW5nKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IG9wdGlvbnMuY29sdW1uc1tpbmRleCAlIG9wdGlvbnMuY29sdW1ucy5sZW5ndGhdO1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkV2FsbChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2Ygb3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRHJpcChiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5yb3dzLCBgJHtsYWJlbH0gcm93c2ApO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5ldmVyeSwgYCR7bGFiZWx9IGV2ZXJ5YCk7XG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgb3B0aW9ucy5yb3dzOyBvZmZzZXQgKz0gb3B0aW9ucy5ldmVyeSkge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBvZmZzZXQsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBidWlsZCgpOiBUcmFja01lbWJlciB7XG4gICAgY29uc3QgcGxheWVyU3RhcnRDb2x1bW4gPSB0aGlzLm9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZDtcbiAgICBjb25zdCBtYXhQbGFjZW1lbnRSb3cgPSB0aGlzLnBsYWNlbWVudHMucmVkdWNlKChtYXgsIGl0ZW0pID0+IE1hdGgubWF4KG1heCwgaXRlbS5yb3cpLCAwKTtcbiAgICBjb25zdCByb3dDb3VudCA9IE1hdGgubWF4KHRoaXMuY3Vyc29yLCBtYXhQbGFjZW1lbnRSb3cgKyAxLCAxKTtcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5sYW5lV2lkdGggKiAyIH0sICgpID0+IGVtcHR5U3ltYm9sKSk7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpKTtcbiAgICBjb25zdCBsZWdlbmQgPSBuZXcgTWFwPHN0cmluZywgeyBpZDogc3RyaW5nOyBzcGVlZDogbnVtYmVyIH0+KCk7XG4gICAgbGVnZW5kLnNldChlbXB0eVN5bWJvbCwgeyBpZDogXCJlbXB0eVwiLCBzcGVlZDogMSB9KTtcbiAgICBsZWdlbmQuc2V0KHBsYXllclN5bWJvbCwgeyBpZDogXCJwbGF5ZXIuc3RhcnRcIiwgc3BlZWQ6IDEgfSk7XG4gICAgY29uc3QgdXNlZFN5bWJvbHMgPSBuZXcgU2V0KFtlbXB0eVN5bWJvbCwgcGxheWVyU3ltYm9sXSk7XG4gICAgY29uc3Qgc3ltYm9sQnlFbnRpdHkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gdGhpcy5jZWxsc0ZvcihwbGF5ZXJTdGFydENvbHVtbiwgMSk7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIHBsYXllckNlbGxzKSBvY2N1cGllZFswXS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIFwicGxheWVyLnN0YXJ0XCIpO1xuICAgIHJvd3NbMF1bcGxheWVyU3RhcnRDb2x1bW5dID0gcGxheWVyU3ltYm9sO1xuXG4gICAgZm9yIChjb25zdCBwbGFjZW1lbnQgb2YgdGhpcy5wbGFjZW1lbnRzKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnN5bWJvbEZvcihwbGFjZW1lbnQsIHVzZWRTeW1ib2xzLCBzeW1ib2xCeUVudGl0eSk7XG4gICAgICBsZWdlbmQuc2V0KHN5bWJvbCwgeyBpZDogcGxhY2VtZW50LmlkLCBzcGVlZDogcGxhY2VtZW50LnNwZWVkIH0pO1xuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHRoaXMuY2VsbHNGb3IocGxhY2VtZW50LmNvbHVtbiwgcGxhY2VtZW50LnNwYW4pKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uZ2V0KGNlbGwuZ2xvYmFsQ29sdW1uKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBwbGFjZW1lbnQgb3ZlcmxhcCBhdCByb3cgJHtwbGFjZW1lbnQucm93fSwgY29sdW1uICR7Y2VsbC5nbG9iYWxDb2x1bW59LiBFeGlzdGluZyBpZCBcIiR7ZXhpc3Rpbmd9XCIsIG5ldyBpZCBcIiR7cGxhY2VtZW50LmlkfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLnNldChjZWxsLmdsb2JhbENvbHVtbiwgcGxhY2VtZW50LmlkKTtcbiAgICAgIH1cbiAgICAgIHJvd3NbcGxhY2VtZW50LnJvd11bcGxhY2VtZW50LmNvbHVtbl0gPSBzeW1ib2w7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxheW91dDogYFxcbiR7cm93cy5zbGljZSgpLnJldmVyc2UoKS5tYXAocm93ID0+IGAke3Jvdy5zbGljZSgwLCB0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX0gfCAke3Jvdy5zbGljZSh0aGlzLmxhbmVXaWR0aCkuam9pbihcIlwiKX1gKS5qb2luKFwiXFxuXCIpfVxcbmAsXG4gICAgICBsZWdlbmQ6IE9iamVjdC5mcm9tRW50cmllcyhbLi4ubGVnZW5kLmVudHJpZXMoKV0ubWFwKChbc3ltYm9sLCBlbnRyeV0pID0+IFtcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBlbnRyeS5zcGVlZCA9PT0gMSA/IHsgaWQ6IGVudHJ5LmlkIH0gOiB7IGlkOiBlbnRyeS5pZCwgc3BlZWQ6IGVudHJ5LnNwZWVkIH0sXG4gICAgICBdKSksXG4gICAgICBiYWxhbmNlOiB0aGlzLm9wdGlvbnMuYmFsYW5jZSxcbiAgICB9O1xuICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy5vcHRpb25zLmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMub3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB0aGlzLm9wdGlvbnMuZW52aXJvbm1lbnQsXG4gICAgICBkZWZpbml0aW9uLFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvd09mZnNldCwgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXRgKTtcbiAgICBpZiAocm93T2Zmc2V0IDwgMCB8fCByb3dPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0ICR7cm93T2Zmc2V0fSBpcyBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uU3BhbihzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyLCBjb3ZlcmVkUm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihjb3ZlcmVkUm93cywgYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGNvdmVyZWQgcm93c2ApO1xuICAgIHRoaXMudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lLCByb3dPZmZzZXQsIHJvd3MpO1xuICAgIGNvbnN0IGxhc3RPZmZzZXQgPSByb3dPZmZzZXQgKyBjb3ZlcmVkUm93cyAtIDE7XG4gICAgaWYgKGxhc3RPZmZzZXQgPj0gcm93cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBwYXR0ZXJuIHJlYWNoZXMgcm93IG9mZnNldCAke2xhc3RPZmZzZXR9LCBvdXRzaWRlIHRoZSAwLSR7cm93cyAtIDF9IHNlY3Rpb24gcmFuZ2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwbGFjZShpZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMsIHJvdzogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93LCBgJHtsYWJlbH0gcm93YCk7XG4gICAgaWYgKHJvdyA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gcm93IGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICB2YWxpZGF0ZUNhbm9uaWNhbElkKGlkKTtcbiAgICBjb25zdCBzcGFuID0gc3BhbkZvcihpZCk7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLmNvbHVtbiwgYCR7bGFiZWx9IGNvbHVtbmAsIHNwYW4pO1xuICAgIHRoaXMucGxhY2VtZW50cy5wdXNoKHtcbiAgICAgIHJvdyxcbiAgICAgIGNvbHVtbjogb3B0aW9ucy5jb2x1bW4sXG4gICAgICBpZCxcbiAgICAgIHNwZWVkOiBub3JtYWxpemVTcGVlZChvcHRpb25zLnNwZWVkLCBsYWJlbCksXG4gICAgICBzcGFuLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUNvbHVtbihjb2x1bW46IFRyYWNrQ29sdW1uLCBsYWJlbDogc3RyaW5nLCBzcGFuOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihjb2x1bW4sIGxhYmVsKTtcbiAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5sYW5lV2lkdGggKiAyO1xuICAgIGlmIChjb2x1bW4gPCAwIHx8IGNvbHVtbiA+PSB0b3RhbFdpZHRoKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBpcyBvdXRzaWRlIHRoZSAwLSR7dG90YWxXaWR0aCAtIDF9IHRyYWNrIHJhbmdlLmApO1xuICAgIGNvbnN0IHNpZGVDb2x1bW4gPSBjb2x1bW4gJSB0aGlzLmxhbmVXaWR0aDtcbiAgICBpZiAoc2lkZUNvbHVtbiArIHNwYW4gPiB0aGlzLmxhbmVXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gY2Fubm90IGZpdCBhICR7c3Bhbn0tY29sdW1uIGVudGl0eSBpbnNpZGUgYSAke3RoaXMubGFuZVdpZHRofS1jb2x1bW4gbGFuZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNlbGxzRm9yKGNvbHVtbjogbnVtYmVyLCBzcGFuOiBudW1iZXIpOiBBcnJheTx7IGdsb2JhbENvbHVtbjogbnVtYmVyIH0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc3BhbiB9LCAoXywgb2Zmc2V0KSA9PiAoeyBnbG9iYWxDb2x1bW46IGNvbHVtbiArIG9mZnNldCB9KSk7XG4gIH1cblxuICBwcml2YXRlIHN5bWJvbEZvcihwbGFjZW1lbnQ6IFBsYWNlbWVudCwgdXNlZFN5bWJvbHM6IFNldDxzdHJpbmc+LCBzeW1ib2xCeUVudGl0eTogTWFwPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3Qga2V5ID0gYCR7cGxhY2VtZW50LmlkfUAke3BsYWNlbWVudC5zcGVlZH1gO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3ltYm9sQnlFbnRpdHkuZ2V0KGtleSk7XG4gICAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XG4gICAgY29uc3QgcHJlZmVycmVkID0gcHJlZmVycmVkU3ltYm9sc1twbGFjZW1lbnQuaWRdO1xuICAgIGNvbnN0IHN5bWJvbCA9IHByZWZlcnJlZCAmJiAhdXNlZFN5bWJvbHMuaGFzKHByZWZlcnJlZClcbiAgICAgID8gcHJlZmVycmVkXG4gICAgICA6IGZhbGxiYWNrU3ltYm9scy5maW5kKGNhbmRpZGF0ZSA9PiAhdXNlZFN5bWJvbHMuaGFzKGNhbmRpZGF0ZSkpO1xuICAgIGlmICghc3ltYm9sKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBidWlsZGVyIHJhbiBvdXQgb2Ygb25lLWNoYXJhY3RlciBsZWdlbmQgc3ltYm9scy5cIik7XG4gICAgdXNlZFN5bWJvbHMuYWRkKHN5bWJvbCk7XG4gICAgc3ltYm9sQnlFbnRpdHkuc2V0KGtleSwgc3ltYm9sKTtcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG59XG5cbmNsYXNzIFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlIGltcGxlbWVudHMgVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gIHByaXZhdGUgcm93T2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudDogVHJhY2tCdWlsZGVyQ29yZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhc2VSb3c6IG51bWJlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7fVxuXG4gIGF0KHJvd09mZnNldDogbnVtYmVyKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHRoaXMubmFtZSwgcm93T2Zmc2V0LCB0aGlzLnJvd3MpO1xuICAgIHRoaXMucm93T2Zmc2V0ID0gcm93T2Zmc2V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25FbmVteSh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25XZWFwb24odGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uUGlja3VwKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZExpbmUodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgbGluZWApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkQWx0ZXJuYXRpbmcodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgYWx0ZXJuYXRpbmdgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFdhbGwodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgd2FsbGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJpcChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIG9wdGlvbnMucm93cyk7XG4gICAgdGhpcy5wYXJlbnQuYWRkRHJpcCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBkcmlwYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrQnVpbGRlcjogVHJhY2tCdWlsZGVyRmFjdG9yeSA9IHtcbiAgY3JlYXRlKG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpOiBUcmFja0J1aWxkZXIge1xuICAgIHJldHVybiBuZXcgVHJhY2tCdWlsZGVyQ29yZShvcHRpb25zKTtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgVHJhY2tUaGVtZUlkID0gXCJndW5TY2hvb2xcIiB8IFwiZ3VhcmRCbGFkZXNcIiB8IFwiY3J5c3RhbFNpZWdlXCIgfCBcInN3YXJtQmxvb21cIiB8IFwibWlycm9yQXJyYXlcIjtcbmV4cG9ydCB0eXBlIFRyYWNrVGllciA9IDEgfCAyIHwgMztcbmV4cG9ydCB0eXBlIFRyYWNrTm9kZVNoYXBlSWQgPSBcImh1bnRlci1leWVcIiB8IFwiYnJ1aXNlci1wcmlzbVwiIHwgXCJlbGl0ZS1zdGFyXCIgfCBcInRyaWNrLXZvcnRleFwiIHwgXCJ0YW5rLXJlYWN0b3JcIiB8IFwic3Bpa2UtbGFuY2VcIiB8IFwiaHVudGVyLWJvbHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0NhdGFsb2dFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB0aGVtZTogVHJhY2tUaGVtZUlkO1xuICB0aWVyOiBUcmFja1RpZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tGYW1pbHlDYXRhbG9nRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgYWNjZW50OiBzdHJpbmc7XG4gIHRyYWNrSWRzOiByZWFkb25seSBUcmFja0NhdGFsb2dJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrVGhlbWVDYXRhbG9nRW50cnkge1xuICBpZDogVHJhY2tUaGVtZUlkO1xuICBsYWJlbDogc3RyaW5nO1xuICBub2RlU2hhcGVJZHM6IHJlYWRvbmx5IFRyYWNrTm9kZVNoYXBlSWRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrVGhlbWVDYXRhbG9nID0ge1xuICBndW5TY2hvb2w6IHtcbiAgICBpZDogXCJndW5TY2hvb2xcIixcbiAgICBsYWJlbDogXCJHdW4gU2Nob29sXCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJodW50ZXItZXllXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxuICBndWFyZEJsYWRlczoge1xuICAgIGlkOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgbGFiZWw6IFwiR3VhcmQgQmxhZGVzXCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJlbGl0ZS1zdGFyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgY3J5c3RhbFNpZWdlOiB7XG4gICAgaWQ6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBTaWVnZVwiLFxuICAgIG5vZGVTaGFwZUlkczogW1widGFuay1yZWFjdG9yXCIsIFwiYnJ1aXNlci1wcmlzbVwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxuICBzd2FybUJsb29tOiB7XG4gICAgaWQ6IFwic3dhcm1CbG9vbVwiLFxuICAgIGxhYmVsOiBcIlN3YXJtIEJsb29tXCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJ0cmljay12b3J0ZXhcIiwgXCJodW50ZXItZXllXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG4gIG1pcnJvckFycmF5OiB7XG4gICAgaWQ6IFwibWlycm9yQXJyYXlcIixcbiAgICBsYWJlbDogXCJNaXJyb3IgQXJyYXlcIixcbiAgICBub2RlU2hhcGVJZHM6IFtcInNwaWtlLWxhbmNlXCIsIFwiZWxpdGUtc3RhclwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPFRyYWNrVGhlbWVJZCwgVHJhY2tUaGVtZUNhdGFsb2dFbnRyeT47XG5cbmV4cG9ydCBjb25zdCB0cmFja0NhdGFsb2cgPSB7XG4gIFwibmVvbi1uZWJ1bGFlLTFcIjoge1xuICAgIGlkOiBcIm5lb24tbmVidWxhZS0xXCIsXG4gICAgbGFiZWw6IFwiRmlyc3QgR2xvd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZ3VuLWZvcndhcmQgTmVvbiBOZWJ1bGFlIG9wZW5lciB3aXRoIGNsZWFyIHJlYnVpbGQgc2hlbHZlcyBhbmQgb25seSBhIGZldyBzaGllbGQgc2FmZXR5IG5ldHMuXCIsXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICAgIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwibmVvbi1uZWJ1bGFlLTJcIjoge1xuICAgIGlkOiBcIm5lb24tbmVidWxhZS0yXCIsXG4gICAgbGFiZWw6IFwiRHJpZnQgTGVzc29uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsb25nZXIgTmVvbiBOZWJ1bGFlIGd1biBsZXNzb24gdGhhdCBhZGRzIHdpbmcgcHJlc3N1cmUsIHN0cm9uZ2VyIGZpcmVhcm0gY2hvaWNlcywgYW5kIHNwYXJzZSBzaGllbGQgcmVsaWVmLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcIm5lb24tbmVidWxhZS0zXCI6IHtcbiAgICBpZDogXCJuZW9uLW5lYnVsYWUtM1wiLFxuICAgIGxhYmVsOiBcIk5lYnVsYSBHYXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIE5lb24gTmVidWxhZSBndW4gZmluYWxlIGxheWVycyBoZWF2aWVyIGZpcmVhcm1zLCB0YW5rcywgYW5kIHN1c3RhaW5lZCBsYW5lIHJlYWRpbmcgd2l0aG91dCBsZWFuaW5nIG9uIHNwZWVkIGNoYW5nZXMuXCIsXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICAgIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG4gIFwiYXVyb3JhLTFcIjoge1xuICAgIGlkOiBcImF1cm9yYS0xXCIsXG4gICAgbGFiZWw6IFwiU2t5YnJlYWtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBBdXJvcmEgb3BlbmVyIGZvY3VzZWQgb24gc2hpZWxkcywgc2hvcnQgc3dvcmQgcmVhZHMsIGFuZCBwYXRpZW50IGNsb3NlLXJhbmdlIGNsZWFudXAuXCIsXG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwiYXVyb3JhLTJcIjoge1xuICAgIGlkOiBcImF1cm9yYS0yXCIsXG4gICAgbGFiZWw6IFwiUmliYm9uIFN0b3JtXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXVyb3JhIHByZXNzdXJlIGV4cGFuZHMgaW50byBhbHRlcm5hdGluZyBzaGllbGQgcmVidWlsZHMsIHdpZGVyIHN3b3JkIGNob2ljZXMsIGFuZCBjbHVzdGVyZWQgY2xvc2UtcmFuZ2UgdGhyZWF0cy5cIixcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICAgIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJhdXJvcmEtM1wiOiB7XG4gICAgaWQ6IFwiYXVyb3JhLTNcIixcbiAgICBsYWJlbDogXCJNYWduZXRpYyBEYXduXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEF1cm9yYSBmaW5hbGUgYXNrcyBmb3IgZGVsaWJlcmF0ZSBzaGllbGQgdGltaW5nIGFuZCBzd29yZCBzZWxlY3Rpb24gYWdhaW5zdCBsb25nLCByZWFkYWJsZSB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG4gIFwiY3J5c3RhbC1mb3JnZS0xXCI6IHtcbiAgICBpZDogXCJjcnlzdGFsLWZvcmdlLTFcIixcbiAgICBsYWJlbDogXCJQcmlzbSBJZ25pdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgQ3J5c3RhbCBGb3JnZSBvcGVuZXIgYnVpbHQgYXJvdW5kIGJ1cnN0IGZpcmUsIGdsYXNzIGRlY295cywgYW5kIGVhcmx5IGhlYXZ5LXRocmVhdCByZWhlYXJzYWwuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcImNyeXN0YWwtZm9yZ2UtMlwiOiB7XG4gICAgaWQ6IFwiY3J5c3RhbC1mb3JnZS0yXCIsXG4gICAgbGFiZWw6IFwiRmFjZXQgUnVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ3J5c3RhbCBGb3JnZSBkZW5zaXR5IHNoYXJwZW5zIHdpdGggaGVhdmllciBndW5zLCBzdHVyZGllciBzaGllbGRzLCBhbmQgdGFuayBicmVha3MgZnJhbWVkIGJ5IGdsYXNzIGRlY295cy5cIixcbiAgICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwiY3J5c3RhbC1mb3JnZS0zXCI6IHtcbiAgICBpZDogXCJjcnlzdGFsLWZvcmdlLTNcIixcbiAgICBsYWJlbDogXCJHbGFzcyBIYW1tZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgQ3J5c3RhbCBGb3JnZSBmaW5hbGUgY29tbWl0cyB0byBoZWF2eSB3ZWFwb24gcGF5b2ZmcywgcmVwZWF0ZWQgdGFuayBsYW5lcywgYW5kIHByaXNtYXRpYyBkZWNveSBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG4gIFwidm9pZC1nYXJkZW4tMVwiOiB7XG4gICAgaWQ6IFwidm9pZC1nYXJkZW4tMVwiLFxuICAgIGxhYmVsOiBcIkJsb29tIFNpZ25hbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgVm9pZCBHYXJkZW4gb3BlbmVyIGFib3V0IGdyb3dpbmcgdGhlIHNxdWFkIGVhcmx5IGFuZCBzdXN0YWluaW5nIGNhbG0gY3Jvc3MtbGFuZSBibG9vbSBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJ2b2lkLWdhcmRlbi0yXCI6IHtcbiAgICBpZDogXCJ2b2lkLWdhcmRlbi0yXCIsXG4gICAgbGFiZWw6IFwiUm9vdCBMYXR0aWNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVm9pZCBHYXJkZW4gYWRkcyBkZW5zZXIgc3F1YWQgZ3Jvd3RoIHdpbmRvd3MsIHNwbGl0IHdlYXBvbiBzdXBwb3J0LCBhbmQgc2xvdy1ibG9vbWluZyBwYWlyZWQgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwidm9pZC1nYXJkZW4tM1wiOiB7XG4gICAgaWQ6IFwidm9pZC1nYXJkZW4tM1wiLFxuICAgIGxhYmVsOiBcIk5pZ2h0IE9yY2hhcmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgVm9pZCBHYXJkZW4gZmluYWxlIGxlYW5zIGludG8gc3F1YWQgcmVjb3ZlcnksIGxheWVyZWQgc3VwcG9ydCBwaWNrdXBzLCBhbmQgYnJvYWQgb3JnYW5pYyBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gICAgdGllcjogMyxcbiAgfSxcbiAgXCJzb2xhci1hcnJheS0xXCI6IHtcbiAgICBpZDogXCJzb2xhci1hcnJheS0xXCIsXG4gICAgbGFiZWw6IFwiUGFuZWwgRGF3blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgU29sYXIgQXJyYXkgb3BlbmVyIHdpdGggbWlycm9yZWQgcmVhZHMsIHNwbGl0LWxhbmUgd2VhcG9uIHRpbWluZywgYW5kIGJyaWdodCBidXQgbWVhc3VyZWQgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gICAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcInNvbGFyLWFycmF5LTJcIjoge1xuICAgIGlkOiBcInNvbGFyLWFycmF5LTJcIixcbiAgICBsYWJlbDogXCJIZWxpb3N0YXQgUnVzaFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbGFyIEFycmF5IHByZXNzdXJlIGdyb3dzIHRocm91Z2ggbWlycm9yZWQgd2FsbHMsIHByZWNpc2lvbiByZWJ1aWxkcywgYW5kIGFsdGVybmF0aW5nIG91dGVyLWxhbmUgc3VyZ2VzLlwiLFxuICAgIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICAgIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJzb2xhci1hcnJheS0zXCI6IHtcbiAgICBpZDogXCJzb2xhci1hcnJheS0zXCIsXG4gICAgbGFiZWw6IFwiTWlycm9yIFplbml0aFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBTb2xhciBBcnJheSBmaW5hbGUgbWl4ZXMgbWlycm9yZWQgdGFuayBicmVha3MsIHNwbGl0LWZpcmUgcmVidWlsZHMsIGFuZCBsb25nLWZvcm0gcHJlY2lzaW9uIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICAgIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gICAgdGllcjogMyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrQ2F0YWxvZ0VudHJ5PjtcblxuZXhwb3J0IHR5cGUgVHJhY2tDYXRhbG9nSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tDYXRhbG9nO1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHlDYXRhbG9nID0ge1xuICBuZW9uTmVidWxhZToge1xuICAgIGlkOiBcIm5lb25OZWJ1bGFlXCIsXG4gICAgbGFiZWw6IFwiTmVvbiBOZWJ1bGFlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBsZWFybmluZyBhcmMgYWJvdXQgbGFuZXMsIHBpY2t1cHMsIHNoaWVsZHMsIGFuZCBjb250cm9sbGVkIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICBhY2NlbnQ6IFwiI2ZmM2JkNVwiLFxuICAgIHRyYWNrSWRzOiBbXCJuZW9uLW5lYnVsYWUtMVwiLCBcIm5lb24tbmVidWxhZS0yXCIsIFwibmVvbi1uZWJ1bGFlLTNcIl0sXG4gIH0sXG4gIGF1cm9yYToge1xuICAgIGlkOiBcImF1cm9yYVwiLFxuICAgIGxhYmVsOiBcIkF1cm9yYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlbnNlIHBsYW5ldGFyeSBhc3NhdWx0cyB3aXRoIGJyaWdodGVyIHJlY292ZXJ5IHdpbmRvd3MgYW5kIHNoYXJwZXIgdGhyZWF0IHdhdmVzLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgYWNjZW50OiBcIiMyMGVhZmZcIixcbiAgICB0cmFja0lkczogW1wiYXVyb3JhLTFcIiwgXCJhdXJvcmEtMlwiLCBcImF1cm9yYS0zXCJdLFxuICB9LFxuICBjcnlzdGFsRm9yZ2U6IHtcbiAgICBpZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICBsYWJlbDogXCJDcnlzdGFsIEZvcmdlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJpc21hdGljIGZhY3RvcnkgbGFuZXMgd2l0aCBzaGFycCBwcmVzc3VyZSwgZ2xhc3MgZGVjb3lzLCBhbmQgaGVhdnkgY3J5c3RhbGxpbmUgYnJlYWtzLlwiLFxuICAgIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgYWNjZW50OiBcIiM5YjQyZmZcIixcbiAgICB0cmFja0lkczogW1wiY3J5c3RhbC1mb3JnZS0xXCIsIFwiY3J5c3RhbC1mb3JnZS0yXCIsIFwiY3J5c3RhbC1mb3JnZS0zXCJdLFxuICB9LFxuICB2b2lkR2FyZGVuOiB7XG4gICAgaWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIGxhYmVsOiBcIlZvaWQgR2FyZGVuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQmlvbHVtaW5lc2NlbnQgbmlnaHQgbGFuZXMgd2l0aCBzcGFyc2UgYmxvb21zLCBkZWNveXMsIGFuZCBjb250cm9sbGVkIHJlY292ZXJ5IHBvY2tldHMuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgYWNjZW50OiBcIiM0Yjg2ZmZcIixcbiAgICB0cmFja0lkczogW1widm9pZC1nYXJkZW4tMVwiLCBcInZvaWQtZ2FyZGVuLTJcIiwgXCJ2b2lkLWdhcmRlbi0zXCJdLFxuICB9LFxuICBzb2xhckFycmF5OiB7XG4gICAgaWQ6IFwic29sYXJBcnJheVwiLFxuICAgIGxhYmVsOiBcIlNvbGFyIEFycmF5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQnJpZ2h0IG9yYml0YWwgbGFuZXMgd2l0aCBtaXJyb3JlZCB3YWxscywgZmFzdCBvdXRlciBzdXJnZXMsIGFuZCBkZWNpc2l2ZSBoZWF2eSB0b29scy5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICBhY2NlbnQ6IFwiI2ZmYjIzYVwiLFxuICAgIHRyYWNrSWRzOiBbXCJzb2xhci1hcnJheS0xXCIsIFwic29sYXItYXJyYXktMlwiLCBcInNvbGFyLWFycmF5LTNcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseUNhdGFsb2dFbnRyeT47XG5cbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5Q2F0YWxvZ0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Q2F0YWxvZztcblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWxpZXNGcm9tQ2F0YWxvZyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgT2JqZWN0LmVudHJpZXModHJhY2tGYW1pbHlDYXRhbG9nKS5tYXAoKFtpZCwgZmFtaWx5XSkgPT4gW1xuICAgIGlkLFxuICAgIHtcbiAgICAgIGxhYmVsOiBmYW1pbHkubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogZmFtaWx5LmRlc2NyaXB0aW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogZmFtaWx5LnNjZW5lSWQgfSxcbiAgICAgIHRyYWNrSWRzOiBmYW1pbHkudHJhY2tJZHMsXG4gICAgfSxcbiAgXSksXG4pIGFzIHVua25vd24gYXMgeyByZWFkb25seSBbRmFtaWx5SWQgaW4gVHJhY2tGYW1pbHlDYXRhbG9nSWRdOiBUcmFja0ZhbWlseU1lbWJlcjxUcmFja0NhdGFsb2dJZD4gfTtcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBndW5GYW1pbHkgfSBmcm9tIFwiLi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBsaWdodG5pbmdGYW1pbHkgfSBmcm9tIFwiLi4vTGlnaHRuaW5nRmFtaWx5XCI7XG5pbXBvcnQgeyBtdWx0aXBsaWVyRmFtaWx5IH0gZnJvbSBcIi4uL011bHRpcGxpZXJGYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuLi9PcmJGYW1pbHlcIjtcbmltcG9ydCB7IHNoaWVsZEZhbWlseSB9IGZyb20gXCIuLi9TaGllbGRGYW1pbHlcIjtcbmltcG9ydCB7IHN3b3JkRmFtaWx5LCB0eXBlIFN3b3JkTWVtYmVyIH0gZnJvbSBcIi4uL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBjLCB0cmFja0J1aWxkZXIsIHR5cGUgVHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrQ29sdW1uLCB0eXBlIFRyYWNrRW5lbXlSZWYsIHR5cGUgVHJhY2tTZWN0aW9uQnVpbGRlciB9IGZyb20gXCIuLi9UcmFja0J1aWxkZXJcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja0NhdGFsb2csIHR5cGUgVHJhY2tDYXRhbG9nSWQsIHR5cGUgVHJhY2tUaGVtZUlkLCB0eXBlIFRyYWNrVGllciB9IGZyb20gXCIuL1RyYWNrQ2F0YWxvZ1wiO1xuXG5leHBvcnQgdHlwZSBKb3VybmV5QmVhdEtpbmQgPSBcImludHJvXCIgfCBcInJhbXBcIiB8IFwibGVzc29uXCIgfCBcInByZXNzdXJlXCIgfCBcInJlc3RcIiB8IFwicmVidWlsZFwiIHwgXCJjaGFsbGVuZ2VcIiB8IFwiZmluYWxlXCI7XG5leHBvcnQgdHlwZSBQcmVzc3VyZUxldmVsID0gXCJsb3dcIiB8IFwibWVkaXVtXCIgfCBcImhpZ2hcIiB8IFwicGVha1wiO1xuZXhwb3J0IHR5cGUgUHJlc3N1cmVTdHlsZSA9IFwiY2VudGVyQWx0ZXJuYXRpbmdcIiB8IFwib3V0ZXJBbHRlcm5hdGluZ1wiIHwgXCJsYW5lTGluZVwiIHwgXCJtaXJyb3JlZFdhbGxzXCIgfCBcIndpZGVTd2VlcFwiIHwgXCJ0YW5rQnJlYWtcIjtcbmV4cG9ydCB0eXBlIFBpY2t1cFJvbGUgPSBcInByaW1hcnlcIiB8IFwic3VwcG9ydFwiIHwgXCJjbG9zZVJhbmdlXCIgfCBcInVwZ3JhZGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBKb3VybmV5QmVhdFJlY2lwZSB7XG4gIGtpbmQ6IEpvdXJuZXlCZWF0S2luZDtcbiAgcHJlc3N1cmU/OiBQcmVzc3VyZUxldmVsO1xuICByb3dzPzogbnVtYmVyO1xuICBwaWNrdXBSb2xlcz86IHJlYWRvbmx5IFBpY2t1cFJvbGVbXTtcbiAgc3R5bGVzPzogcmVhZG9ubHkgUHJlc3N1cmVTdHlsZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrUmVjaXBlIHtcbiAgZ29hbHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWVkOiBzdHJpbmc7XG4gIGpvdXJuZXk6IHJlYWRvbmx5IEpvdXJuZXlCZWF0UmVjaXBlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFtaWx5UmVjaXBlIHtcbiAgdGhlbWU6IFRyYWNrVGhlbWVJZDtcbiAgcHJlZmVycmVkV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHN1cHBvcnRXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgY2xvc2VSYW5nZVdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBwcmVmZXJyZWRFbmVtaWVzOiByZWFkb25seSBUcmFja0VuZW15UmVmW107XG4gIGJvc3NFbmVtaWVzOiByZWFkb25seSBUcmFja0VuZW15UmVmW107XG4gIHByZXNzdXJlU3R5bGVzOiByZWFkb25seSBQcmVzc3VyZVN0eWxlW107XG4gIG9wZW5pbmdXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgb3BlbmluZ1BpY2t1cHM/OiByZWFkb25seSBzdHJpbmdbXTtcbiAgdXBncmFkZVNwYWNpbmc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWVyUHJvZmlsZSB7XG4gIHRhcmdldFJvd3M6IG51bWJlcjtcbiAgZW5lbXlIcDogbnVtYmVyO1xuICBlbmVteVNwZWVkOiBudW1iZXI7XG4gIHByZXNzdXJlVGhyZWF0OiBSZWNvcmQ8UHJlc3N1cmVMZXZlbCwgbnVtYmVyPjtcbiAgcHJlc3N1cmVSb3dzOiBSZWNvcmQ8UHJlc3N1cmVMZXZlbCwgbnVtYmVyPjtcbiAgcmVidWlsZFJvd3M6IG51bWJlcjtcbiAgcmVzdFJvd3M6IG51bWJlcjtcbiAgbWF4V2FsbFdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudERlYnVnU3VtbWFyeSB7XG4gIGtpbmQ6IEpvdXJuZXlCZWF0S2luZDtcbiAgcm93czogbnVtYmVyO1xuICBwcmVzc3VyZTogUHJlc3N1cmVMZXZlbCB8IFwibm9uZVwiO1xuICB0aHJlYXRFc3RpbWF0ZTogbnVtYmVyO1xuICBwbGF5ZXJQb3dlckVzdGltYXRlOiBudW1iZXI7XG4gIHNlbGVjdGVkV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHNlbGVjdGVkUGlja3VwczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHNlbGVjdGVkRW5lbWllczogcmVhZG9ubHkgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zZXJEZWJ1Z1N1bW1hcnkge1xuICBzZWVkOiBzdHJpbmc7XG4gIHNlZWRWYWx1ZTogbnVtYmVyO1xuICBmYW1pbHlJZDogVHJhY2tUaGVtZUlkO1xuICB0cmFja0lkOiBUcmFja0NhdGFsb2dJZDtcbiAgdGllcjogVHJhY2tUaWVyO1xuICBnZW5lcmF0ZWRSb3dzOiBudW1iZXI7XG4gIHNlbGVjdGVkV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHNlbGVjdGVkUGlja3VwczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHNlbGVjdGVkRW5lbWllczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHdlYXBvblBvd2VyOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PjtcbiAgZW5lbXlUaHJlYXQ6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIG51bWJlcj4+O1xuICBzZWdtZW50czogcmVhZG9ubHkgU2VnbWVudERlYnVnU3VtbWFyeVtdO1xuICB3YXJuaW5nczogcmVhZG9ubHkgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9zZWRUcmFja09wdGlvbnMge1xuICB0cmFja0lkPzogVHJhY2tDYXRhbG9nSWQ7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB0aGVtZTogVHJhY2tUaGVtZUlkO1xuICB0aWVyOiBUcmFja1RpZXI7XG4gIHNlZWQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDb21wb3NlUmVzdWx0IHtcbiAgdHJhY2s6IFRyYWNrTWVtYmVyO1xuICBkZWJ1ZzogQ29tcG9zZXJEZWJ1Z1N1bW1hcnk7XG59XG5cbmludGVyZmFjZSBHZW5lcmF0b3JTdGF0ZSB7XG4gIGN1cnNvcjogbnVtYmVyO1xuICBwbGF5ZXJQb3dlcjogbnVtYmVyO1xuICBjeWNsZTogbnVtYmVyO1xuICByZWFkb25seSBzZWxlY3RlZFdlYXBvbnM6IFNldDxzdHJpbmc+O1xuICByZWFkb25seSBzZWxlY3RlZFBpY2t1cHM6IFNldDxzdHJpbmc+O1xuICByZWFkb25seSBzZWxlY3RlZEVuZW1pZXM6IFNldDxzdHJpbmc+O1xuICByZWFkb25seSBzZWdtZW50czogU2VnbWVudERlYnVnU3VtbWFyeVtdO1xuICByZWFkb25seSB3YXJuaW5nczogc3RyaW5nW107XG4gIGJvc3Nlc1BsYWNlZDogbnVtYmVyO1xuICBsYXN0Qm9zc1RyYWNrUm93OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBSbmcge1xuICBuZXh0KCk6IG51bWJlcjtcbiAgcGljazxUPihpdGVtczogcmVhZG9ubHkgVFtdKTogVDtcbn1cblxuY29uc3QgdGllclByb2ZpbGVzOiBSZWNvcmQ8VHJhY2tUaWVyLCBUaWVyUHJvZmlsZT4gPSB7XG4gIDE6IHtcbiAgICB0YXJnZXRSb3dzOiAxMTIsXG4gICAgZW5lbXlIcDogMSxcbiAgICBlbmVteVNwZWVkOiAxLFxuICAgIHByZXNzdXJlVGhyZWF0OiB7IGxvdzogMTgsIG1lZGl1bTogMzAsIGhpZ2g6IDQ0LCBwZWFrOiA1NiB9LFxuICAgIHByZXNzdXJlUm93czogeyBsb3c6IDE4LCBtZWRpdW06IDI2LCBoaWdoOiAzNCwgcGVhazogNDAgfSxcbiAgICByZWJ1aWxkUm93czogOCxcbiAgICByZXN0Um93czogMixcbiAgICBtYXhXYWxsV2lkdGg6IDQsXG4gIH0sXG4gIDI6IHtcbiAgICB0YXJnZXRSb3dzOiAyNzAsXG4gICAgZW5lbXlIcDogMSxcbiAgICBlbmVteVNwZWVkOiAxLFxuICAgIHByZXNzdXJlVGhyZWF0OiB7IGxvdzogMjAsIG1lZGl1bTogMzQsIGhpZ2g6IDUwLCBwZWFrOiA2NiB9LFxuICAgIHByZXNzdXJlUm93czogeyBsb3c6IDI0LCBtZWRpdW06IDM0LCBoaWdoOiA0NCwgcGVhazogNTIgfSxcbiAgICByZWJ1aWxkUm93czogOSxcbiAgICByZXN0Um93czogMyxcbiAgICBtYXhXYWxsV2lkdGg6IDQsXG4gIH0sXG4gIDM6IHtcbiAgICB0YXJnZXRSb3dzOiA0MzAsXG4gICAgZW5lbXlIcDogMSxcbiAgICBlbmVteVNwZWVkOiAxLFxuICAgIHByZXNzdXJlVGhyZWF0OiB7IGxvdzogMzQsIG1lZGl1bTogNTYsIGhpZ2g6IDkyLCBwZWFrOiAxMzYgfSxcbiAgICBwcmVzc3VyZVJvd3M6IHsgbG93OiAzMCwgbWVkaXVtOiA0MiwgaGlnaDogNTQsIHBlYWs6IDc0IH0sXG4gICAgcmVidWlsZFJvd3M6IDgsXG4gICAgcmVzdFJvd3M6IDIsXG4gICAgbWF4V2FsbFdpZHRoOiA1LFxuICB9LFxufTtcblxuY29uc3QgZmFtaWx5UmVjaXBlczogUmVjb3JkPFRyYWNrVGhlbWVJZCwgRmFtaWx5UmVjaXBlPiA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5uZWVkbGVyU21nXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJzd29yZC5hcmNCbGFkZVwiXSxcbiAgICBwcmVmZXJyZWRFbmVtaWVzOiBbXCJiYXNpY1wiLCBcImdsYXNzU2hpZWxkXCIsIFwid2luZ2VyXCJdLFxuICAgIGJvc3NFbmVtaWVzOiBbXCJ0YW5rXCJdLFxuICAgIHByZXNzdXJlU3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiLCBcIndpZGVTd2VlcFwiXSxcbiAgICBvcGVuaW5nV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDIsXG4gIH0sXG4gIGd1YXJkQmxhZGVzOiB7XG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJzd29yZC5hcmNCbGFkZVwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcInNoaWVsZC5oZXhHdWFyZFwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIGNsb3NlUmFuZ2VXZWFwb25zOiBbXCJzd29yZC5hcmNCbGFkZVwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBwcmVmZXJyZWRFbmVtaWVzOiBbXCJiYXNpY1wiLCBcImdsYXNzU2hpZWxkXCIsIFwid2luZ2VyXCJdLFxuICAgIGJvc3NFbmVtaWVzOiBbXCJ0YW5rXCJdLFxuICAgIHByZXNzdXJlU3R5bGVzOiBbXCJsYW5lTGluZVwiLCBcImNlbnRlckFsdGVybmF0aW5nXCIsIFwid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiXSxcbiAgICBvcGVuaW5nV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICB1cGdyYWRlU3BhY2luZzogMyxcbiAgfSxcbiAgY3J5c3RhbFNpZWdlOiB7XG4gICAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwibGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIiwgXCJzd29yZC5jbGVhdmVyXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcInNoaWVsZC5oZXhHdWFyZFwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIGNsb3NlUmFuZ2VXZWFwb25zOiBbXCJzd29yZC5jbGVhdmVyXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiZ2xhc3NTaGllbGRcIiwgXCJiYXNpY1wiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wibWlycm9yZWRXYWxsc1wiLCBcInRhbmtCcmVha1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIiwgXCJ3aWRlU3dlZXBcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIG9wZW5pbmdQaWNrdXBzOiBbXCJ1bml0TXVsdGlwbGllci4yeFwiXSxcbiAgICB1cGdyYWRlU3BhY2luZzogMixcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJndW4ubmVlZGxlclNtZ1wiLCBcInN3b3JkLmFyY0JsYWRlXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJndW4uYnVyc3RDYXJiaW5lXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJsaWdodG5pbmcuZm9ya0NhcGFjaXRvclwiLCBcInNoaWVsZC5oZXhHdWFyZFwiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcInN3b3JkLmNsZWF2ZXJcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJ3aW5nZXJcIiwgXCJnbGFzc1NoaWVsZFwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJ3aWRlU3dlZXBcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIG9wZW5pbmdQaWNrdXBzOiBbXCJ1bml0TXVsdGlwbGllci4yeFwiXSxcbiAgICB1cGdyYWRlU3BhY2luZzogMSxcbiAgfSxcbiAgbWlycm9yQXJyYXk6IHtcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwibGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcInNoaWVsZC5oZXhHdWFyZFwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIGNsb3NlUmFuZ2VXZWFwb25zOiBbXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcInN3b3JkLmNsZWF2ZXJcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJnbGFzc1NoaWVsZFwiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wibWlycm9yZWRXYWxsc1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIiwgXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcInRhbmtCcmVha1wiXSxcbiAgICBvcGVuaW5nV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDIsXG4gIH0sXG59O1xuXG5jb25zdCBkZWZhdWx0Sm91cm5leTogUmVjb3JkPFRyYWNrVGllciwgcmVhZG9ubHkgSm91cm5leUJlYXRSZWNpcGVbXT4gPSB7XG4gIDE6IFtcbiAgICB7IGtpbmQ6IFwiaW50cm9cIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImxlc3NvblwiLCBwcmVzc3VyZTogXCJsb3dcIiB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJtZWRpdW1cIiB9LFxuICAgIHsga2luZDogXCJyZXN0XCIgfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcImhpZ2hcIiwgcGlja3VwUm9sZXM6IFtcInN1cHBvcnRcIl0gfSxcbiAgICB7IGtpbmQ6IFwiZmluYWxlXCIsIHByZXNzdXJlOiBcImhpZ2hcIiB9LFxuICBdLFxuICAyOiBbXG4gICAgeyBraW5kOiBcImludHJvXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmFtcFwiLCBwcmVzc3VyZTogXCJsb3dcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIl0sIHN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiXSB9LFxuICAgIHsga2luZDogXCJsZXNzb25cIiwgcHJlc3N1cmU6IFwibWVkaXVtXCIsIHN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJvdXRlckFsdGVybmF0aW5nXCJdIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInN1cHBvcnRcIl0gfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiLCBzdHlsZXM6IFtcImxhbmVMaW5lXCIsIFwiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJvdXRlckFsdGVybmF0aW5nXCJdIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBcImhpZ2hcIiB9LFxuICAgIHsga2luZDogXCJjaGFsbGVuZ2VcIiwgcHJlc3N1cmU6IFwicGVha1wiIH0sXG4gICAgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIgfSxcbiAgXSxcbiAgMzogW1xuICAgIHsga2luZDogXCJpbnRyb1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIiwgXCJjbG9zZVJhbmdlXCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJyYW1wXCIsIHByZXNzdXJlOiBcImxvd1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiXSwgc3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJjaGFsbGVuZ2VcIiwgcHJlc3N1cmU6IFwibWVkaXVtXCIsIHN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wic3VwcG9ydFwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IFwiaGlnaFwiIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJjbG9zZVJhbmdlXCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJjaGFsbGVuZ2VcIiwgcHJlc3N1cmU6IFwicGVha1wiIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInN1cHBvcnRcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBcInBlYWtcIiwgc3R5bGVzOiBbXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiXSB9LFxuICAgIHsga2luZDogXCJmaW5hbGVcIiwgcHJlc3N1cmU6IFwicGVha1wiLCBzdHlsZXM6IFtcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIiwgXCJ3aWRlU3dlZXBcIiwgXCJvdXRlckFsdGVybmF0aW5nXCJdIH0sXG4gIF0sXG59O1xuXG5jb25zdCB0cmFja1JlY2lwZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIE9iamVjdC5lbnRyaWVzKHRyYWNrQ2F0YWxvZykubWFwKChbdHJhY2tJZCwgZW50cnldKSA9PiBbXG4gICAgdHJhY2tJZCxcbiAgICB7XG4gICAgICBnb2FsczogW2VudHJ5LmRlc2NyaXB0aW9uXSxcbiAgICAgIHNlZWQ6IGAke3RyYWNrSWR9OiR7ZW50cnkudGllcn1gLFxuICAgICAgam91cm5leTogZGVmYXVsdEpvdXJuZXlbZW50cnkudGllcl0sXG4gICAgfSxcbiAgXSksXG4pIGFzIHVua25vd24gYXMgUmVjb3JkPFRyYWNrQ2F0YWxvZ0lkLCBUcmFja1JlY2lwZT47XG5cbmNvbnN0IGFsbENvbHVtbnMgPSBbYy5sZWZ0Lm91dGVyLCBjLmxlZnQubmVhck91dGVyLCBjLmxlZnQubWlkLCBjLmxlZnQubmVhcklubmVyLCBjLmxlZnQuaW5uZXIsIGMucmlnaHQuaW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm1pZCwgYy5yaWdodC5uZWFyT3V0ZXIsIGMucmlnaHQub3V0ZXJdIGFzIGNvbnN0O1xuY29uc3QgY2VudGVyQ29sdW1ucyA9IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0gYXMgY29uc3Q7XG5jb25zdCBvdXRlckNvbHVtbnMgPSBbYy5sZWZ0Lm91dGVyLCBjLnJpZ2h0Lm91dGVyLCBjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlcl0gYXMgY29uc3Q7XG5jb25zdCBsZWZ0Q29sdW1ucyA9IFtjLmxlZnQub3V0ZXIsIGMubGVmdC5uZWFyT3V0ZXIsIGMubGVmdC5taWQsIGMubGVmdC5uZWFySW5uZXIsIGMubGVmdC5pbm5lcl0gYXMgY29uc3Q7XG5jb25zdCByaWdodENvbHVtbnMgPSBbYy5yaWdodC5pbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQubWlkLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5yaWdodC5vdXRlcl0gYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJuZyhzZWVkOiBzdHJpbmcpOiBSbmcgJiB7IHJlYWRvbmx5IHNlZWRWYWx1ZTogbnVtYmVyIH0ge1xuICBsZXQgdmFsdWUgPSAyMTY2MTM2MjYxO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VlZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB2YWx1ZSBePSBzZWVkLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIHZhbHVlID0gTWF0aC5pbXVsKHZhbHVlLCAxNjc3NzYxOSk7XG4gIH1cbiAgdmFsdWUgPj4+PSAwO1xuICByZXR1cm4ge1xuICAgIHNlZWRWYWx1ZTogdmFsdWUsXG4gICAgbmV4dCgpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5pbXVsKHZhbHVlICsgMHg2ZDJiNzlmNSwgMSk7XG4gICAgICBsZXQgbWl4ZWQgPSB2YWx1ZTtcbiAgICAgIG1peGVkID0gTWF0aC5pbXVsKG1peGVkIF4gbWl4ZWQgPj4+IDE1LCBtaXhlZCB8IDEpO1xuICAgICAgbWl4ZWQgXj0gbWl4ZWQgKyBNYXRoLmltdWwobWl4ZWQgXiBtaXhlZCA+Pj4gNywgbWl4ZWQgfCA2MSk7XG4gICAgICByZXR1cm4gKChtaXhlZCBeIG1peGVkID4+PiAxNCkgPj4+IDApIC8gNDI5NDk2NzI5NjtcbiAgICB9LFxuICAgIHBpY2s8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSk6IFQge1xuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBpY2sgZnJvbSBhbiBlbXB0eSBjb2xsZWN0aW9uLlwiKTtcbiAgICAgIHJldHVybiBpdGVtc1tNYXRoLmZsb29yKHRoaXMubmV4dCgpICogaXRlbXMubGVuZ3RoKV07XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2Fub25pY2FsV2VhcG9uSWQoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5cIikpIHJldHVybiBpZDtcbiAgY29uc3QgW2ZhbWlseSwgbWVtYmVyXSA9IGlkLnNwbGl0KFwiLlwiKTtcbiAgcmV0dXJuIGBwaWNrdXAud2VhcG9uLiR7ZmFtaWx5fS4ke21lbWJlcn1gO1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtVGllckZvcldlYXBvbihpZDogc3RyaW5nKTogVHJhY2tUaWVyIHtcbiAgY29uc3QgY2Fub25pY2FsID0gY2Fub25pY2FsV2VhcG9uSWQoaWQpO1xuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBndW5GYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwic3RhcnRlclwiID8gMSA6IG1lbWJlci5yYXJpdHkgPT09IFwiY29tbW9uXCIgPyAyIDogMztcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5zd29yZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzXSBhcyBTd29yZE1lbWJlcjtcbiAgICByZXR1cm4gbWVtYmVyLnJhcml0eSA9PT0gXCJzdGFydGVyXCIgPyAxIDogbWVtYmVyLnJhcml0eSA9PT0gXCJjb21tb25cIiA/IDIgOiAzO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzXTtcbiAgICByZXR1cm4gbWVtYmVyLnJhcml0eSA9PT0gXCJzdGFydGVyXCIgPyAxIDogbWVtYmVyLnJhcml0eSA9PT0gXCJjb21tb25cIiA/IDIgOiAzO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzXTtcbiAgICByZXR1cm4gbWVtYmVyLnJhcml0eSA9PT0gXCJ1bmNvbW1vblwiID8gMyA6IDM7XG4gIH1cbiAgcmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIG1pbmltdW1UaWVyRm9yRW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYpOiBUcmFja1RpZXIge1xuICBjb25zdCBjYW5vbmljYWwgPSBpZCA9PT0gXCJiYXNpY1wiIHx8IGlkID09PSBcImVuZW15LmJhc2ljXCIgPyBcImJhc2ljT3JiXCIgOiBpZC5yZXBsYWNlKC9eZW5lbXlcXC4vLCBcIlwiKTtcbiAgaWYgKGNhbm9uaWNhbCA9PT0gXCJ0YW5rXCIpIHJldHVybiAzO1xuICBpZiAoY2Fub25pY2FsID09PSBcIndpbmdlclwiKSByZXR1cm4gMjtcbiAgcmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIHdlYXBvblBvd2VyKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBjYW5vbmljYWwgPSBjYW5vbmljYWxXZWFwb25JZChpZCk7XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uZ3VuLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IGd1bkZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uZ3VuLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzXTtcbiAgICBjb25zdCBsZXZlbCA9IG1lbWJlci5sZXZlbHNbMF07XG4gICAgcmV0dXJuIGxldmVsLmZpcmVSYXRlUGVyU2Vjb25kICogbGV2ZWwuZGFtYWdlICogbGV2ZWwucHJvamVjdGlsZUNvdW50ICogbGV2ZWwuYnVyc3RDb3VudCAqICgxICsgbGV2ZWwucGllcmNlICogMC4zNSk7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zd29yZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzd29yZEZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVyc10gYXMgU3dvcmRNZW1iZXI7XG4gICAgcmV0dXJuIG1lbWJlci5kYW1hZ2UgKiBtZW1iZXIubWF4VGFyZ2V0cyAvIG1lbWJlci5jb29sZG93blNlY29uZHMgKiAobWVtYmVyLnJvd1JlYWNoID8gMS4zNSA6IDEpO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IHNoaWVsZEZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzXTtcbiAgICByZXR1cm4gbWVtYmVyLm1heENoYXJnZXMgKiAwLjggKyBtZW1iZXIucmFkaXVzIC8gMzA7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnNdO1xuICAgIGNvbnN0IGxldmVsID0gbWVtYmVyLmxldmVsc1swXTtcbiAgICByZXR1cm4gbGV2ZWwuZGFtYWdlICogKGxldmVsLm1heEp1bXBzICsgbGV2ZWwuYnJhbmNoRmFub3V0KSAvIGxldmVsLmNvb2xkb3duU2Vjb25kcztcbiAgfVxuICByZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gZW5lbXlUaHJlYXQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG1lbWJlcklkID0gaWQgPT09IFwiYmFzaWNcIiB8fCBpZCA9PT0gXCJlbmVteS5iYXNpY1wiID8gXCJiYXNpY09yYlwiIDogaWQucmVwbGFjZSgvXmVuZW15XFwuLywgXCJcIikgYXMgT3JiSWQ7XG4gIGNvbnN0IGVuZW15ID0gb3JiRmFtaWx5Lm1lbWJlcnNbbWVtYmVySWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzXTtcbiAgcmV0dXJuIGVuZW15LmhlYWx0aCAqIDIgKyBlbmVteS5zcGVlZCAvIDU4ICsgZW5lbXkuY29sdW1uU3BhbiAqIDEuNCArIGVuZW15LmNvbnRhY3REYW1hZ2UgKiAxLjYgKyBlbmVteS5pbXBhY3RSZXNpc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBlbmVteUNvbHVtblNwYW4oaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG1lbWJlcklkID0gaWQgPT09IFwiYmFzaWNcIiB8fCBpZCA9PT0gXCJlbmVteS5iYXNpY1wiID8gXCJiYXNpY09yYlwiIDogaWQucmVwbGFjZSgvXmVuZW15XFwuLywgXCJcIikgYXMgT3JiSWQ7XG4gIHJldHVybiBvcmJGYW1pbHkubWVtYmVyc1ttZW1iZXJJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdLmNvbHVtblNwYW47XG59XG5cbmZ1bmN0aW9uIHBpY2t1cFBvd2VyKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBpZiAoaWQgPT09IFwidW5pdE11bHRpcGxpZXIuMnhcIiB8fCBpZCA9PT0gXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIikge1xuICAgIHJldHVybiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMuc3F1YWRQbHVzT25lLnNxdWFkQWRkZWQgKiA0O1xuICB9XG4gIGlmIChpZCA9PT0gXCJzaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCIgfHwgaWQgPT09IFwicGlja3VwLnNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIikge1xuICAgIHJldHVybiAxNDtcbiAgfVxuICByZXR1cm4gd2VhcG9uUG93ZXIoaWQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZSgpOiBHZW5lcmF0b3JTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgY3Vyc29yOiAxLFxuICAgIHBsYXllclBvd2VyOiAxLFxuICAgIGN5Y2xlOiAwLFxuICAgIHNlbGVjdGVkV2VhcG9uczogbmV3IFNldCgpLFxuICAgIHNlbGVjdGVkUGlja3VwczogbmV3IFNldCgpLFxuICAgIHNlbGVjdGVkRW5lbWllczogbmV3IFNldCgpLFxuICAgIHNlZ21lbnRzOiBbXSxcbiAgICB3YXJuaW5nczogW10sXG4gICAgYm9zc2VzUGxhY2VkOiAwLFxuICAgIGxhc3RCb3NzVHJhY2tSb3c6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcm93c0ZvckJlYXQoYmVhdDogSm91cm5leUJlYXRSZWNpcGUsIHByb2ZpbGU6IFRpZXJQcm9maWxlKTogbnVtYmVyIHtcbiAgaWYgKGJlYXQucm93cykgcmV0dXJuIGJlYXQucm93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJpbnRyb1wiKSByZXR1cm4gcHJvZmlsZS5yZWJ1aWxkUm93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyZWJ1aWxkXCIpIHJldHVybiBwcm9maWxlLnJlYnVpbGRSb3dzO1xuICBpZiAoYmVhdC5raW5kID09PSBcInJlc3RcIikgcmV0dXJuIHByb2ZpbGUucmVzdFJvd3M7XG4gIGlmIChiZWF0LmtpbmQgPT09IFwicmFtcFwiKSByZXR1cm4gcHJvZmlsZS5wcmVzc3VyZVJvd3MubWVkaXVtO1xuICByZXR1cm4gcHJvZmlsZS5wcmVzc3VyZVJvd3NbYmVhdC5wcmVzc3VyZSA/PyBcIm1lZGl1bVwiXTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0V2VhcG9uKHJlY2lwZTogRmFtaWx5UmVjaXBlLCByb2xlOiBQaWNrdXBSb2xlLCB0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHJvbGUgPT09IFwidXBncmFkZVwiKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmF3UG9vbCA9IHJvbGUgPT09IFwic3VwcG9ydFwiXG4gICAgPyByZWNpcGUuc3VwcG9ydFdlYXBvbnNcbiAgICA6IHJvbGUgPT09IFwiY2xvc2VSYW5nZVwiXG4gICAgPyByZWNpcGUuY2xvc2VSYW5nZVdlYXBvbnNcbiAgICA6IHJlY2lwZS5wcmVmZXJyZWRXZWFwb25zO1xuICBjb25zdCByb2xlUG9vbCA9IHJvbGUgPT09IFwiY2xvc2VSYW5nZVwiXG4gICAgPyByYXdQb29sXG4gICAgOiByb2xlID09PSBcInByaW1hcnlcIlxuICAgID8gcmF3UG9vbC5maWx0ZXIod2VhcG9uID0+ICFjYW5vbmljYWxXZWFwb25JZCh3ZWFwb24pLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpXG4gICAgOiByYXdQb29sO1xuICBjb25zdCBwb29sID0gcm9sZVBvb2wubGVuZ3RoID4gMCA/IHJvbGVQb29sIDogcmF3UG9vbDtcbiAgY29uc3QgdGllclBvb2wgPSBwb29sLmZpbHRlcih3ZWFwb24gPT4gbWluaW11bVRpZXJGb3JXZWFwb24od2VhcG9uKSA8PSB0aWVyKTtcbiAgY29uc3QgYXZhaWxhYmxlUG9vbCA9IHRpZXJQb29sLmxlbmd0aCA+IDAgPyB0aWVyUG9vbCA6IHBvb2wuZmlsdGVyKHdlYXBvbiA9PiBtaW5pbXVtVGllckZvcldlYXBvbih3ZWFwb24pID09PSAxKTtcbiAgaWYgKGF2YWlsYWJsZVBvb2wubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUud2FybmluZ3MucHVzaChgTm8gJHtyb2xlfSB3ZWFwb24gd2FzIGF2YWlsYWJsZSBmb3IgdGllciAke3RpZXJ9IGluICR7cmVjaXBlLnRoZW1lfS5gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBvZmZzZXQgPSBNYXRoLm1pbihhdmFpbGFibGVQb29sLmxlbmd0aCAtIDEsIHN0YXRlLmN5Y2xlKTtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IGF2YWlsYWJsZVBvb2wuc2xpY2Uob2Zmc2V0KS5jb25jYXQoYXZhaWxhYmxlUG9vbC5zbGljZSgwLCBvZmZzZXQpKTtcbiAgcmV0dXJuIHJuZy5waWNrKGNhbmRpZGF0ZXMpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVBpY2t1cHMoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgcmVjaXBlOiBGYW1pbHlSZWNpcGUsIGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHJvd3M6IG51bWJlciwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCBybmc6IFJuZyk6IHsgd2VhcG9uczogc3RyaW5nW107IHBpY2t1cHM6IHN0cmluZ1tdIH0ge1xuICBjb25zdCByb2xlcyA9IGJlYXQucGlja3VwUm9sZXMgPz8gW107XG4gIGNvbnN0IGNvbHVtbnMgPSBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWQsIGMubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyLCBjLmxlZnQubmVhcklubmVyLCBjLnJpZ2h0Lm5lYXJJbm5lcl0gYXMgY29uc3Q7XG4gIGNvbnN0IHdlYXBvbnM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHBpY2t1cHM6IHN0cmluZ1tdID0gW107XG4gIGxldCByb3cgPSAwO1xuICBmb3IgKGNvbnN0IHJvbGUgb2Ygcm9sZXMpIHtcbiAgICBpZiAocm9sZSA9PT0gXCJ1cGdyYWRlXCIpIHtcbiAgICAgIGNvbnN0IGF1dGhvcmVkVXBncmFkZSA9IGJlYXQucGlja3VwUm9sZXM/LmluY2x1ZGVzKFwidXBncmFkZVwiKSA/PyBmYWxzZTtcbiAgICAgIGlmIChhdXRob3JlZFVwZ3JhZGUgfHwgc3RhdGUuY3ljbGUgJSByZWNpcGUudXBncmFkZVNwYWNpbmcgPT09IDApIHtcbiAgICAgICAgc2VjdGlvbi5hdChyb3cpLnBpY2t1cChcInVuaXRNdWx0aXBsaWVyLjJ4XCIsIHsgY29sdW1uOiBjb2x1bW5zWyhyb3cgKyAxKSAlIGNvbHVtbnMubGVuZ3RoXSB9KTtcbiAgICAgICAgc3RhdGUucGxheWVyUG93ZXIgKz0gcGlja3VwUG93ZXIoXCJ1bml0TXVsdGlwbGllci4yeFwiKTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRQaWNrdXBzLmFkZChcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKTtcbiAgICAgICAgcGlja3Vwcy5wdXNoKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3ZWFwb24gPSBzZWxlY3RXZWFwb24ocmVjaXBlLCByb2xlLCB0aWVyLCBzdGF0ZSwgcm5nKTtcbiAgICAgIGlmICh3ZWFwb24pIHtcbiAgICAgICAgc2VjdGlvbi5hdChyb3cpLndlYXBvbih3ZWFwb24sIHsgY29sdW1uOiBjb2x1bW5zW3JvdyAlIGNvbHVtbnMubGVuZ3RoXSB9KTtcbiAgICAgICAgc3RhdGUucGxheWVyUG93ZXIgKz0gd2VhcG9uUG93ZXIod2VhcG9uKTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRXZWFwb25zLmFkZChjYW5vbmljYWxXZWFwb25JZCh3ZWFwb24pKTtcbiAgICAgICAgd2VhcG9ucy5wdXNoKGNhbm9uaWNhbFdlYXBvbklkKHdlYXBvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICByb3cgKz0gMjtcbiAgfVxuICBpZiAodGllciA+PSAyICYmIGJlYXQua2luZCA9PT0gXCJyZWJ1aWxkXCIpIHtcbiAgICBjb25zdCBwaWNrdXAgPSBcInBpY2t1cC5zaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCI7XG4gICAgY29uc3QgcGlja3VwUm93ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93cyAtIDEsIHJvd3MgLSAzKSk7XG4gICAgc2VjdGlvbi5hdChwaWNrdXBSb3cpLnBpY2t1cChwaWNrdXAsIHsgY29sdW1uOiBzdGF0ZS5jeWNsZSAlIDIgPT09IDAgPyBjLmxlZnQuaW5uZXIgOiBjLnJpZ2h0LmlubmVyIH0pO1xuICAgIHN0YXRlLnBsYXllclBvd2VyICs9IHBpY2t1cFBvd2VyKHBpY2t1cCk7XG4gICAgc3RhdGUuc2VsZWN0ZWRQaWNrdXBzLmFkZChwaWNrdXApO1xuICAgIHBpY2t1cHMucHVzaChwaWNrdXApO1xuICB9XG4gIHJldHVybiB7IHdlYXBvbnMsIHBpY2t1cHMgfTtcbn1cblxuZnVuY3Rpb24gZW5lbXlGb3JUaHJlYXQocmVjaXBlOiBGYW1pbHlSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgdGFyZ2V0OiBudW1iZXIpOiBUcmFja0VuZW15UmVmIHtcbiAgY29uc3QgYWxsb3dlZEVuZW1pZXMgPSByZWNpcGUucHJlZmVycmVkRW5lbWllcy5maWx0ZXIoaWQgPT4gbWluaW11bVRpZXJGb3JFbmVteShpZCkgPD0gdGllcik7XG4gIGNvbnN0IHBvb2wgPSBhbGxvd2VkRW5lbWllcy5sZW5ndGggPiAwID8gYWxsb3dlZEVuZW1pZXMgOiByZWNpcGUucHJlZmVycmVkRW5lbWllcztcbiAgY29uc3QgY2FuZGlkYXRlcyA9IHBvb2wuZmlsdGVyKGlkID0+IGVuZW15VGhyZWF0KGlkKSA8PSB0YXJnZXQgKyA0KTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXNbY2FuZGlkYXRlcy5sZW5ndGggLSAxXSA/PyBwb29sWzBdO1xufVxuXG5mdW5jdGlvbiBlbmVteUZvclByZXNzdXJlKHJlY2lwZTogRmFtaWx5UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHByZXNzdXJlOiBQcmVzc3VyZUxldmVsLCByb3c6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpOiBUcmFja0VuZW15UmVmIHtcbiAgaWYgKHRpZXIgPT09IDIgJiYgKHByZXNzdXJlID09PSBcImxvd1wiIHx8IHByZXNzdXJlID09PSBcIm1lZGl1bVwiKSkge1xuICAgIGNvbnN0IGhhc0dsYXNzID0gcmVjaXBlLnByZWZlcnJlZEVuZW1pZXMuaW5jbHVkZXMoXCJnbGFzc1NoaWVsZFwiKTtcbiAgICBjb25zdCBoYXNXaW5nZXIgPSByZWNpcGUucHJlZmVycmVkRW5lbWllcy5pbmNsdWRlcyhcIndpbmdlclwiKTtcbiAgICBpZiAoaGFzV2luZ2VyICYmIHJvdyAlIDcgPT09IDApIHJldHVybiBcIndpbmdlclwiO1xuICAgIGlmIChoYXNHbGFzcykgcmV0dXJuIFwiZ2xhc3NTaGllbGRcIjtcbiAgfVxuICByZXR1cm4gZW5lbXlGb3JUaHJlYXQocmVjaXBlLCB0aWVyLCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBib3NzRm9yUHJlc3N1cmUocmVjaXBlOiBGYW1pbHlSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgc3RhdGU6IEdlbmVyYXRvclN0YXRlKTogVHJhY2tFbmVteVJlZiB8IG51bGwge1xuICBjb25zdCBhdmFpbGFibGVCb3NzZXMgPSByZWNpcGUuYm9zc0VuZW1pZXMuZmlsdGVyKGlkID0+IG1pbmltdW1UaWVyRm9yRW5lbXkoaWQpIDw9IHRpZXIgKyAxKTtcbiAgaWYgKGF2YWlsYWJsZUJvc3Nlcy5sZW5ndGggPT09IDApIHtcbiAgICBzdGF0ZS53YXJuaW5ncy5wdXNoKGBObyBib3NzIGVuZW15IGlzIGF2YWlsYWJsZSBmb3IgJHtyZWNpcGUudGhlbWV9IGF0IHRpZXIgJHt0aWVyfS5gKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gYXZhaWxhYmxlQm9zc2VzW3N0YXRlLmJvc3Nlc1BsYWNlZCAlIGF2YWlsYWJsZUJvc3Nlcy5sZW5ndGhdO1xufVxuXG5mdW5jdGlvbiBjYW5QbGFjZUJvc3ModGllcjogVHJhY2tUaWVyLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHRyYWNrUm93OiBudW1iZXIpOiBib29sZWFuIHtcbiAgY29uc3QgbWF4Qm9zc2VzID0gdGllciA9PT0gMiA/IDIgOiB0aWVyID49IDMgPyA0IDogMDtcbiAgY29uc3QgbWluU3BhY2luZyA9IHRpZXIgPT09IDIgPyAzNCA6IDU4O1xuICByZXR1cm4gc3RhdGUuYm9zc2VzUGxhY2VkIDwgbWF4Qm9zc2VzICYmIHRyYWNrUm93IC0gc3RhdGUubGFzdEJvc3NUcmFja1JvdyA+PSBtaW5TcGFjaW5nO1xufVxuXG5mdW5jdGlvbiBjb2x1bW5zRm9yU3R5bGUoc3R5bGU6IFByZXNzdXJlU3R5bGUsIHJuZzogUm5nLCBtYXhXYWxsV2lkdGg6IG51bWJlcik6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10ge1xuICBpZiAoc3R5bGUgPT09IFwiY2VudGVyQWx0ZXJuYXRpbmdcIikgcmV0dXJuIGNlbnRlckNvbHVtbnM7XG4gIGlmIChzdHlsZSA9PT0gXCJvdXRlckFsdGVybmF0aW5nXCIpIHJldHVybiBvdXRlckNvbHVtbnM7XG4gIGlmIChzdHlsZSA9PT0gXCJ3aWRlU3dlZXBcIikgcmV0dXJuIHJuZy5uZXh0KCkgPiAwLjUgPyBsZWZ0Q29sdW1ucy5zbGljZSgwLCBtYXhXYWxsV2lkdGgpIDogcmlnaHRDb2x1bW5zLnNsaWNlKDAsIG1heFdhbGxXaWR0aCk7XG4gIGlmIChzdHlsZSA9PT0gXCJtaXJyb3JlZFdhbGxzXCIpIHJldHVybiBbYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXIsIGMubGVmdC5taWQsIGMucmlnaHQubWlkXS5zbGljZSgwLCBNYXRoLm1heCgyLCBNYXRoLm1pbig0LCBtYXhXYWxsV2lkdGgpKSk7XG4gIGlmIChzdHlsZSA9PT0gXCJ0YW5rQnJlYWtcIikgcmV0dXJuIHJuZy5uZXh0KCkgPiAwLjUgPyBbYy5sZWZ0Lm5lYXJPdXRlcl0gOiBbYy5yaWdodC5pbm5lcl07XG4gIHJldHVybiBybmcubmV4dCgpID4gMC41ID8gW2MubGVmdC5uZWFyT3V0ZXJdIDogW2MucmlnaHQubmVhck91dGVyXTtcbn1cblxuZnVuY3Rpb24gY29sdW1uc1RoYXRGaXQoZW5lbXk6IFRyYWNrRW5lbXlSZWYsIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10pOiByZWFkb25seSBUcmFja0NvbHVtbltdIHtcbiAgY29uc3Qgc3BhbiA9IGVuZW15Q29sdW1uU3BhbihlbmVteSk7XG4gIHJldHVybiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uICUgNSArIHNwYW4gPD0gNSk7XG59XG5cbmZ1bmN0aW9uIG5vbk92ZXJsYXBwaW5nQ29sdW1ucyhlbmVteTogVHJhY2tFbmVteVJlZiwgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSk6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10ge1xuICBjb25zdCBzcGFuID0gZW5lbXlDb2x1bW5TcGFuKGVuZW15KTtcbiAgY29uc3Qgb2NjdXBpZWQgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgY29uc3Qgc2VsZWN0ZWQ6IFRyYWNrQ29sdW1uW10gPSBbXTtcbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xuICAgIGNvbnN0IGNlbGxzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc3BhbiB9LCAoXywgb2Zmc2V0KSA9PiBjb2x1bW4gKyBvZmZzZXQpO1xuICAgIGlmIChjZWxscy5zb21lKGNlbGwgPT4gb2NjdXBpZWQuaGFzKGNlbGwpKSkgY29udGludWU7XG4gICAgc2VsZWN0ZWQucHVzaChjb2x1bW4pO1xuICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykgb2NjdXBpZWQuYWRkKGNlbGwpO1xuICB9XG4gIHJldHVybiBzZWxlY3RlZDtcbn1cblxuZnVuY3Rpb24gcGxhY2VQcmVzc3VyZShzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCByZWNpcGU6IEZhbWlseVJlY2lwZSwgYmVhdDogSm91cm5leUJlYXRSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgcHJvZmlsZTogVGllclByb2ZpbGUsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcsIHN0YXJ0Um93ID0gMCk6IHsgdGhyZWF0OiBudW1iZXI7IGVuZW1pZXM6IHN0cmluZ1tdIH0ge1xuICBjb25zdCBwcmVzc3VyZSA9IGJlYXQucHJlc3N1cmUgPz8gXCJtZWRpdW1cIjtcbiAgY29uc3QgdGFyZ2V0VGhyZWF0ID0gcHJvZmlsZS5wcmVzc3VyZVRocmVhdFtwcmVzc3VyZV0gKyBzdGF0ZS5wbGF5ZXJQb3dlciAqIChwcmVzc3VyZSA9PT0gXCJwZWFrXCIgPyAwLjQ1IDogMC4yNSk7XG4gIGNvbnN0IGJhc2VTdHlsZXMgPSBiZWF0LnN0eWxlcyA/PyByZWNpcGUucHJlc3N1cmVTdHlsZXM7XG4gIGNvbnN0IHN0eWxlcyA9IHRpZXIgPT09IDEgJiYgcHJlc3N1cmUgPT09IFwiaGlnaFwiXG4gICAgPyBbLi4uYmFzZVN0eWxlcywgXCJ3aWRlU3dlZXBcIiwgXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCJdIGFzIGNvbnN0XG4gICAgOiB0aWVyID49IDMgJiYgcHJlc3N1cmUgPT09IFwicGVha1wiXG4gICAgPyBbLi4uYmFzZVN0eWxlcywgXCJ3aWRlU3dlZXBcIiwgXCJ3aWRlU3dlZXBcIiwgXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCIsIFwibWlycm9yZWRXYWxsc1wiXSBhcyBjb25zdFxuICAgIDogYmFzZVN0eWxlcztcbiAgbGV0IHJvdyA9IHN0YXJ0Um93O1xuICBsZXQgZW1pdHRlZFRocmVhdCA9IDA7XG4gIGNvbnN0IGVuZW1pZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgYmVhdFJvd3MgPSByb3dzRm9yQmVhdChiZWF0LCBwcm9maWxlKTtcbiAgd2hpbGUgKHJvdyA8IGJlYXRSb3dzIC0gMSkge1xuICAgIGNvbnN0IHN0eWxlID0gcm5nLnBpY2soc3R5bGVzKTtcbiAgICBjb25zdCBjb2x1bW5zID0gY29sdW1uc0ZvclN0eWxlKHN0eWxlLCBybmcsIHByb2ZpbGUubWF4V2FsbFdpZHRoKTtcbiAgICBjb25zdCByZW1haW5pbmdUaHJlYXQgPSBNYXRoLm1heCgwLCB0YXJnZXRUaHJlYXQgLSBlbWl0dGVkVGhyZWF0KTtcbiAgICBjb25zdCB0cmFja1JvdyA9IHN0YXRlLmN1cnNvciArIHJvdztcbiAgICBjb25zdCB0aWVyVHdvRmluYWxlQm9zc1Jvd3MgPSBbXG4gICAgICBzdGFydFJvdyArIE1hdGguZmxvb3IoKGJlYXRSb3dzIC0gc3RhcnRSb3cpICogLjMpLFxuICAgICAgc3RhcnRSb3cgKyBNYXRoLmZsb29yKChiZWF0Um93cyAtIHN0YXJ0Um93KSAqIC43MiksXG4gICAgXTtcbiAgICBjb25zdCB0aWVyVHdvRmluYWxlQm9zcyA9IHRpZXIgPT09IDJcbiAgICAgICYmIGJlYXQua2luZCA9PT0gXCJmaW5hbGVcIlxuICAgICAgJiYgc3RhdGUuYm9zc2VzUGxhY2VkIDwgdGllclR3b0ZpbmFsZUJvc3NSb3dzLmxlbmd0aFxuICAgICAgJiYgcm93ID49IHRpZXJUd29GaW5hbGVCb3NzUm93c1tzdGF0ZS5ib3NzZXNQbGFjZWRdXG4gICAgICAmJiBjYW5QbGFjZUJvc3ModGllciwgc3RhdGUsIHRyYWNrUm93KTtcbiAgICBjb25zdCB0aWVyVGhyZWVCb3NzID0gdGllciA+PSAzXG4gICAgICAmJiBjYW5QbGFjZUJvc3ModGllciwgc3RhdGUsIHRyYWNrUm93KVxuICAgICAgJiYgZW1pdHRlZFRocmVhdCA8IHRhcmdldFRocmVhdCAqIDEuMTVcbiAgICAgICYmIChzdHlsZSA9PT0gXCJ0YW5rQnJlYWtcIiB8fCAocHJlc3N1cmUgPT09IFwicGVha1wiICYmIHJlbWFpbmluZ1RocmVhdCA+IDE4ICYmIHJvdyA+IDEyKSk7XG4gICAgY29uc3Qgc2hvdWxkVXNlSGVhdnkgPSB0aWVyVHdvRmluYWxlQm9zcyB8fCB0aWVyVGhyZWVCb3NzO1xuICAgIGNvbnN0IGJvc3NFbmVteSA9IHNob3VsZFVzZUhlYXZ5ID8gYm9zc0ZvclByZXNzdXJlKHJlY2lwZSwgdGllciwgc3RhdGUpIDogbnVsbDtcbiAgICBjb25zdCBlbmVteSA9IHNob3VsZFVzZUhlYXZ5XG4gICAgICA/IGJvc3NFbmVteSA/PyBlbmVteUZvclByZXNzdXJlKHJlY2lwZSwgdGllciwgcHJlc3N1cmUsIHJvdywgTWF0aC5tYXgoNCwgcmVtYWluaW5nVGhyZWF0IC8gTWF0aC5tYXgoMSwgY29sdW1ucy5sZW5ndGgpKSlcbiAgICAgIDogZW5lbXlGb3JQcmVzc3VyZShyZWNpcGUsIHRpZXIsIHByZXNzdXJlLCByb3csIE1hdGgubWF4KDQsIHJlbWFpbmluZ1RocmVhdCAvIE1hdGgubWF4KDEsIGNvbHVtbnMubGVuZ3RoKSkpO1xuICAgIGlmICh0aWVyVHdvRmluYWxlQm9zcyAmJiBib3NzRW5lbXkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHN0YXRlLmJvc3Nlc1BsYWNlZCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lcjtcbiAgICAgIHNlY3Rpb24uYXQocm93KS5lbmVteShib3NzRW5lbXksIHsgY29sdW1uIH0pO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSBlbmVteVRocmVhdChib3NzRW5lbXkpO1xuICAgICAgc3RhdGUuYm9zc2VzUGxhY2VkKys7XG4gICAgICBzdGF0ZS5sYXN0Qm9zc1RyYWNrUm93ID0gdHJhY2tSb3c7XG4gICAgICBlbmVtaWVzLmFkZChib3NzRW5lbXkgPT09IFwiYmFzaWNcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2Jvc3NFbmVteX1gKTtcbiAgICAgIHJvdyArPSAxMjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAodGllclRocmVlQm9zcyAmJiBib3NzRW5lbXkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHN0YXRlLmJvc3Nlc1BsYWNlZCAlIDIgPT09IDAgPyBjLmxlZnQubmVhck91dGVyIDogYy5yaWdodC5pbm5lcjtcbiAgICAgIHNlY3Rpb24uYXQocm93KS5lbmVteShib3NzRW5lbXksIHsgY29sdW1uIH0pO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSBlbmVteVRocmVhdChib3NzRW5lbXkpO1xuICAgICAgc3RhdGUuYm9zc2VzUGxhY2VkKys7XG4gICAgICBzdGF0ZS5sYXN0Qm9zc1RyYWNrUm93ID0gdHJhY2tSb3c7XG4gICAgICBlbmVtaWVzLmFkZChib3NzRW5lbXkgPT09IFwiYmFzaWNcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2Jvc3NFbmVteX1gKTtcbiAgICAgIHJvdyArPSAxNDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBmaXR0aW5nQ29sdW1ucyA9IGNvbHVtbnNUaGF0Rml0KGVuZW15LCBjb2x1bW5zKTtcbiAgICBjb25zdCBzYWZlRW5lbXkgPSBmaXR0aW5nQ29sdW1ucy5sZW5ndGggPiAwID8gZW5lbXkgOiBcImJhc2ljXCI7XG4gICAgY29uc3Qgc2FmZUNvbHVtbnMgPSBub25PdmVybGFwcGluZ0NvbHVtbnMoc2FmZUVuZW15LCBmaXR0aW5nQ29sdW1ucy5sZW5ndGggPiAwID8gZml0dGluZ0NvbHVtbnMgOiBjb2x1bW5zVGhhdEZpdChcImJhc2ljXCIsIGNvbHVtbnMpKTtcbiAgICBjb25zdCB0aHJlYXQgPSBlbmVteVRocmVhdChzYWZlRW5lbXkpICogc2FmZUNvbHVtbnMubGVuZ3RoO1xuICAgIGNvbnN0IGJyZWF0aFJvd3MgPSB0aWVyID09PSAxICYmIHByZXNzdXJlICE9PSBcImhpZ2hcIiAmJiBwcmVzc3VyZSAhPT0gXCJwZWFrXCIgPyAxIDogMDtcbiAgICBpZiAoc3R5bGUgPT09IFwibGFuZUxpbmVcIiAmJiBzYWZlQ29sdW1ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4oOCwgTWF0aC5tYXgoMSwgYmVhdFJvd3MgLSByb3cgLSAxKSk7XG4gICAgICBzZWN0aW9uLmF0KHJvdykubGluZShzYWZlRW5lbXksIHsgY29sdW1uOiBzYWZlQ29sdW1uc1swXSwgY291bnQgfSk7XG4gICAgICByb3cgKz0gY291bnQgKyBicmVhdGhSb3dzO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSBlbmVteVRocmVhdChzYWZlRW5lbXkpICogY291bnQ7XG4gICAgfSBlbHNlIGlmIChzdHlsZSA9PT0gXCJtaXJyb3JlZFdhbGxzXCIgfHwgc3R5bGUgPT09IFwid2lkZVN3ZWVwXCIgfHwgKHRpZXIgPT09IDEgJiYgcHJlc3N1cmUgPT09IFwiaGlnaFwiICYmIHNhZmVDb2x1bW5zLmxlbmd0aCA+IDEpKSB7XG4gICAgICBzZWN0aW9uLmF0KHJvdykud2FsbChzYWZlRW5lbXksIHsgY29sdW1uczogc2FmZUNvbHVtbnMgfSk7XG4gICAgICByb3cgKz0gcHJlc3N1cmUgPT09IFwibG93XCIgPyAzIDogMjtcbiAgICAgIGVtaXR0ZWRUaHJlYXQgKz0gdGhyZWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWluKDE0LCBNYXRoLm1heCgxLCBiZWF0Um93cyAtIHJvdyAtIDEpKTtcbiAgICAgIHNlY3Rpb24uYXQocm93KS5hbHRlcm5hdGluZyhzYWZlRW5lbXksIHsgY29sdW1uczogc2FmZUNvbHVtbnMsIGNvdW50IH0pO1xuICAgICAgcm93ICs9IGNvdW50ICsgYnJlYXRoUm93cztcbiAgICAgIGVtaXR0ZWRUaHJlYXQgKz0gZW5lbXlUaHJlYXQoc2FmZUVuZW15KSAqIGNvdW50O1xuICAgIH1cbiAgICBlbmVtaWVzLmFkZChzYWZlRW5lbXkgPT09IFwiYmFzaWNcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke3NhZmVFbmVteX1gKTtcbiAgfVxuICBmb3IgKGNvbnN0IGVuZW15IG9mIGVuZW1pZXMpIHN0YXRlLnNlbGVjdGVkRW5lbWllcy5hZGQoZW5lbXkpO1xuICByZXR1cm4geyB0aHJlYXQ6IGVtaXR0ZWRUaHJlYXQsIGVuZW1pZXM6IFsuLi5lbmVtaWVzXSB9O1xufVxuXG5mdW5jdGlvbiBjb21waWxlQmVhdChidWlsZGVyOiBUcmFja0J1aWxkZXIsIHJlY2lwZTogRmFtaWx5UmVjaXBlLCBiZWF0OiBKb3VybmV5QmVhdFJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBwcm9maWxlOiBUaWVyUHJvZmlsZSwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCBybmc6IFJuZyk6IHZvaWQge1xuICBjb25zdCByb3dzID0gcm93c0ZvckJlYXQoYmVhdCwgcHJvZmlsZSk7XG4gIGNvbnN0IHNlZ21lbnRTdGFydFBvd2VyID0gc3RhdGUucGxheWVyUG93ZXI7XG4gIGxldCBwbGFjZWRXZWFwb25zOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgcGxhY2VkUGlja3Vwczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGVtaXR0ZWRUaHJlYXQgPSAwO1xuICBsZXQgc2VsZWN0ZWRFbmVtaWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGlmIChiZWF0LmtpbmQgPT09IFwicmVzdFwiKSB7XG4gICAgYnVpbGRlci5yZXNwaXRlKHJvd3MpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNlY3Rpb25LaW5kID0gYmVhdC5raW5kID09PSBcImludHJvXCIgfHwgYmVhdC5raW5kID09PSBcInJlYnVpbGRcIiA/IFwicmVidWlsZFwiIDogXCJwcmVzc3VyZVwiO1xuICAgIGJ1aWxkZXIuc2VjdGlvbihzZWN0aW9uS2luZCwgcm93cywgc2VjdGlvbiA9PiB7XG4gICAgICBjb25zdCBwaWNrdXBzID0gcGxhY2VQaWNrdXBzKHNlY3Rpb24sIHJlY2lwZSwgYmVhdCwgdGllciwgcm93cywgc3RhdGUsIHJuZyk7XG4gICAgICBwbGFjZWRXZWFwb25zID0gcGlja3Vwcy53ZWFwb25zO1xuICAgICAgcGxhY2VkUGlja3VwcyA9IHBpY2t1cHMucGlja3VwcztcbiAgICAgIGlmIChiZWF0LmtpbmQgIT09IFwiaW50cm9cIiAmJiBiZWF0LmtpbmQgIT09IFwicmVidWlsZFwiKSB7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlU3RhcnRSb3cgPSBNYXRoLm1heCgwLCAoYmVhdC5waWNrdXBSb2xlcz8ubGVuZ3RoID8/IDApICogMiAtIDEpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZSA9IHBsYWNlUHJlc3N1cmUoc2VjdGlvbiwgcmVjaXBlLCBiZWF0LCB0aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nLCBwcmVzc3VyZVN0YXJ0Um93KTtcbiAgICAgICAgZW1pdHRlZFRocmVhdCA9IHByZXNzdXJlLnRocmVhdDtcbiAgICAgICAgc2VsZWN0ZWRFbmVtaWVzID0gcHJlc3N1cmUuZW5lbWllcztcbiAgICAgIH0gZWxzZSBpZiAoYmVhdC5raW5kID09PSBcInJlYnVpbGRcIiAmJiByb3dzID4gNCkge1xuICAgICAgICBjb25zdCBlbmVteSA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzWzBdO1xuICAgICAgICBzZWN0aW9uLmF0KHJvd3MgLSAyKS5lbmVteShlbmVteSwgeyBjb2x1bW46IHJuZy5waWNrKGFsbENvbHVtbnMpIH0pO1xuICAgICAgICBlbWl0dGVkVGhyZWF0ID0gZW5lbXlUaHJlYXQoZW5lbXkpO1xuICAgICAgICBzZWxlY3RlZEVuZW1pZXMgPSBbZW5lbXkgPT09IFwiYmFzaWNcIiA/IFwiZW5lbXkuYmFzaWNcIiA6IGBlbmVteS4ke2VuZW15fWBdO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZEVuZW1pZXMuYWRkKHNlbGVjdGVkRW5lbWllc1swXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5jdXJzb3IgKz0gcm93cztcbiAgc3RhdGUuY3ljbGUrKztcbiAgc3RhdGUuc2VnbWVudHMucHVzaCh7XG4gICAga2luZDogYmVhdC5raW5kLFxuICAgIHJvd3MsXG4gICAgcHJlc3N1cmU6IGJlYXQucHJlc3N1cmUgPz8gXCJub25lXCIsXG4gICAgdGhyZWF0RXN0aW1hdGU6IE51bWJlcihlbWl0dGVkVGhyZWF0LnRvRml4ZWQoMikpLFxuICAgIHBsYXllclBvd2VyRXN0aW1hdGU6IE51bWJlcihzZWdtZW50U3RhcnRQb3dlci50b0ZpeGVkKDIpKSxcbiAgICBzZWxlY3RlZFdlYXBvbnM6IHBsYWNlZFdlYXBvbnMsXG4gICAgc2VsZWN0ZWRQaWNrdXBzOiBwbGFjZWRQaWNrdXBzLFxuICAgIHNlbGVjdGVkRW5lbWllcyxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VJbnRlcm5hbChvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IENvbXBvc2VSZXN1bHQge1xuICBjb25zdCBwcm9maWxlID0gdGllclByb2ZpbGVzW29wdGlvbnMudGllcl07XG4gIGNvbnN0IHJlY2lwZSA9IGZhbWlseVJlY2lwZXNbb3B0aW9ucy50aGVtZV07XG4gIGNvbnN0IHRyYWNrSWQgPSBvcHRpb25zLnRyYWNrSWQgPz8gXCJuZW9uLW5lYnVsYWUtMVwiO1xuICBjb25zdCB0cmFja1JlY2lwZSA9IG9wdGlvbnMudHJhY2tJZCA/IHRyYWNrUmVjaXBlc1tvcHRpb25zLnRyYWNrSWRdIDogeyBnb2FsczogW29wdGlvbnMuZGVzY3JpcHRpb25dLCBzZWVkOiBvcHRpb25zLnNlZWQgPz8gYCR7b3B0aW9ucy50aGVtZX06JHtvcHRpb25zLnRpZXJ9YCwgam91cm5leTogZGVmYXVsdEpvdXJuZXlbb3B0aW9ucy50aWVyXSB9O1xuICBjb25zdCBzZWVkID0gb3B0aW9ucy5zZWVkID8/IHRyYWNrUmVjaXBlLnNlZWQ7XG4gIGNvbnN0IHJuZyA9IGNyZWF0ZVJuZyhzZWVkKTtcbiAgY29uc3Qgc3RhdGUgPSBjcmVhdGVTdGF0ZSgpO1xuICBjb25zdCBidWlsZGVyID0gdHJhY2tCdWlsZGVyLmNyZWF0ZSh7XG4gICAgbGFiZWw6IG9wdGlvbnMubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgZW52aXJvbm1lbnQ6IHsgc2NlbmVJZDogb3B0aW9ucy5zY2VuZUlkIH0sXG4gICAgYmFsYW5jZTogeyBlbmVteUhwOiBwcm9maWxlLmVuZW15SHAsIGVuZW15U3BlZWQ6IHByb2ZpbGUuZW5lbXlTcGVlZCB9LFxuICB9KTtcblxuICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIHtcbiAgICBraW5kOiBcImludHJvXCIsXG4gICAgcm93czogcHJvZmlsZS5yZWJ1aWxkUm93cyxcbiAgICBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIiwgLi4uKG9wdGlvbnMudGllciA+PSAzID8gW1wiY2xvc2VSYW5nZVwiIGFzIGNvbnN0XSA6IFtdKSwgLi4uKHJlY2lwZS5vcGVuaW5nUGlja3Vwcz8ubGVuZ3RoID8gW1widXBncmFkZVwiIGFzIGNvbnN0XSA6IFtdKV0sXG4gIH0sIG9wdGlvbnMudGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZyk7XG4gIGZvciAoY29uc3QgYmVhdCBvZiB0cmFja1JlY2lwZS5qb3VybmV5LmZpbHRlcihpdGVtID0+IGl0ZW0ua2luZCAhPT0gXCJpbnRyb1wiKSkge1xuICAgIGlmIChzdGF0ZS5jdXJzb3IgPj0gcHJvZmlsZS50YXJnZXRSb3dzIC0gcHJvZmlsZS5wcmVzc3VyZVJvd3MuaGlnaCkgYnJlYWs7XG4gICAgY29tcGlsZUJlYXQoYnVpbGRlciwgcmVjaXBlLCBiZWF0LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuICB9XG4gIHdoaWxlIChzdGF0ZS5jdXJzb3IgPCBwcm9maWxlLnRhcmdldFJvd3MgLSBwcm9maWxlLnByZXNzdXJlUm93cy5oaWdoKSB7XG4gICAgY29tcGlsZUJlYXQoYnVpbGRlciwgcmVjaXBlLCB7IGtpbmQ6IHN0YXRlLmN5Y2xlICUgMyA9PT0gMCA/IFwicmVidWlsZFwiIDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogc3RhdGUuY3ljbGUgJSAyID09PSAwID8gXCJoaWdoXCIgOiBcIm1lZGl1bVwiLCBwaWNrdXBSb2xlczogc3RhdGUuY3ljbGUgJSAzID09PSAwID8gW1wicHJpbWFyeVwiLCBcInVwZ3JhZGVcIl0gOiB1bmRlZmluZWQgfSwgb3B0aW9ucy50aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nKTtcbiAgfVxuICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIHsga2luZDogXCJmaW5hbGVcIiwgcHJlc3N1cmU6IG9wdGlvbnMudGllciA9PT0gMSA/IFwiaGlnaFwiIDogXCJwZWFrXCIgfSwgb3B0aW9ucy50aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nKTtcblxuICBjb25zdCB0cmFjayA9IGJ1aWxkZXIuYnVpbGQoKTtcbiAgY29uc3QgZ2VuZXJhdGVkUm93cyA9IHRyYWNrLmRlZmluaXRpb24ubGF5b3V0LnNwbGl0KC9cXHI/XFxuLykuZmlsdGVyKHJvdyA9PiByb3cudHJpbSgpKS5sZW5ndGg7XG4gIGNvbnN0IHdlYXBvblBvd2VyRW50cmllcyA9IFsuLi5zdGF0ZS5zZWxlY3RlZFdlYXBvbnNdLm1hcChpZCA9PiBbaWQsIE51bWJlcih3ZWFwb25Qb3dlcihpZCkudG9GaXhlZCgyKSldIGFzIGNvbnN0KTtcbiAgY29uc3QgZW5lbXlUaHJlYXRFbnRyaWVzID0gWy4uLnN0YXRlLnNlbGVjdGVkRW5lbWllc10ubWFwKGlkID0+IFtpZCwgTnVtYmVyKGVuZW15VGhyZWF0KGlkKS50b0ZpeGVkKDIpKV0gYXMgY29uc3QpO1xuICByZXR1cm4ge1xuICAgIHRyYWNrLFxuICAgIGRlYnVnOiB7XG4gICAgICBzZWVkLFxuICAgICAgc2VlZFZhbHVlOiBybmcuc2VlZFZhbHVlLFxuICAgICAgZmFtaWx5SWQ6IG9wdGlvbnMudGhlbWUsXG4gICAgICB0cmFja0lkLFxuICAgICAgdGllcjogb3B0aW9ucy50aWVyLFxuICAgICAgZ2VuZXJhdGVkUm93cyxcbiAgICAgIHNlbGVjdGVkV2VhcG9uczogWy4uLnN0YXRlLnNlbGVjdGVkV2VhcG9uc10sXG4gICAgICBzZWxlY3RlZFBpY2t1cHM6IFsuLi5zdGF0ZS5zZWxlY3RlZFBpY2t1cHNdLFxuICAgICAgc2VsZWN0ZWRFbmVtaWVzOiBbLi4uc3RhdGUuc2VsZWN0ZWRFbmVtaWVzXSxcbiAgICAgIHdlYXBvblBvd2VyOiBPYmplY3QuZnJvbUVudHJpZXMod2VhcG9uUG93ZXJFbnRyaWVzKSxcbiAgICAgIGVuZW15VGhyZWF0OiBPYmplY3QuZnJvbUVudHJpZXMoZW5lbXlUaHJlYXRFbnRyaWVzKSxcbiAgICAgIHNlZ21lbnRzOiBzdGF0ZS5zZWdtZW50cyxcbiAgICAgIHdhcm5pbmdzOiBzdGF0ZS53YXJuaW5ncyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYWNrKG9wdGlvbnM6IENvbXBvc2VkVHJhY2tPcHRpb25zKTogVHJhY2tNZW1iZXIge1xuICByZXR1cm4gY29tcG9zZUludGVybmFsKG9wdGlvbnMpLnRyYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVDb21wb3NlZFRyYWNrKG9wdGlvbnM6IENvbXBvc2VkVHJhY2tPcHRpb25zKTogQ29tcG9zZXJEZWJ1Z1N1bW1hcnkge1xuICByZXR1cm4gY29tcG9zZUludGVybmFsKG9wdGlvbnMpLmRlYnVnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZUNhdGFsb2dUcmFjayh0cmFja0lkOiBUcmFja0NhdGFsb2dJZCk6IFRyYWNrTWVtYmVyIHtcbiAgY29uc3QgZW50cnkgPSB0cmFja0NhdGFsb2dbdHJhY2tJZF07XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwoe1xuICAgIHRyYWNrSWQsXG4gICAgbGFiZWw6IGVudHJ5LmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBlbnRyeS5kZXNjcmlwdGlvbixcbiAgICBzY2VuZUlkOiBlbnRyeS5zY2VuZUlkLFxuICAgIHRoZW1lOiBlbnRyeS50aGVtZSxcbiAgICB0aWVyOiBlbnRyeS50aWVyLFxuICB9KS50cmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9zZWRDYXRhbG9nVHJhY2sodHJhY2tJZDogVHJhY2tDYXRhbG9nSWQpOiBDb21wb3NlckRlYnVnU3VtbWFyeSB7XG4gIGNvbnN0IGVudHJ5ID0gdHJhY2tDYXRhbG9nW3RyYWNrSWRdO1xuICByZXR1cm4gY29tcG9zZUludGVybmFsKHtcbiAgICB0cmFja0lkLFxuICAgIGxhYmVsOiBlbnRyeS5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogZW50cnkuZGVzY3JpcHRpb24sXG4gICAgc2NlbmVJZDogZW50cnkuc2NlbmVJZCxcbiAgICB0aGVtZTogZW50cnkudGhlbWUsXG4gICAgdGllcjogZW50cnkudGllcixcbiAgfSkuZGVidWc7XG59XG4iLCAiaW1wb3J0IHsgY29tcG9zZUNhdGFsb2dUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcbmltcG9ydCB7IHRyYWNrQ2F0YWxvZywgdHJhY2tGYW1pbGllc0Zyb21DYXRhbG9nIH0gZnJvbSBcIi4vVHJhY2tDYXRhbG9nXCI7XG5cbmV4cG9ydCBjb25zdCB0cmFja3MgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIE9iamVjdC5rZXlzKHRyYWNrQ2F0YWxvZykubWFwKHRyYWNrSWQgPT4gW3RyYWNrSWQsIGNvbXBvc2VDYXRhbG9nVHJhY2sodHJhY2tJZCBhcyBrZXlvZiB0eXBlb2YgdHJhY2tDYXRhbG9nKV0pLFxuKSBhcyB7IHJlYWRvbmx5IFtUcmFja0lkIGluIGtleW9mIHR5cGVvZiB0cmFja0NhdGFsb2ddOiBSZXR1cm5UeXBlPHR5cGVvZiBjb21wb3NlQ2F0YWxvZ1RyYWNrPiB9O1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllcyA9IHRyYWNrRmFtaWxpZXNGcm9tQ2F0YWxvZztcbmV4cG9ydCB7IHRyYWNrQ2F0YWxvZywgdHJhY2tGYW1pbHlDYXRhbG9nLCB0cmFja1RoZW1lQ2F0YWxvZyB9IGZyb20gXCIuL1RyYWNrQ2F0YWxvZ1wiO1xuZXhwb3J0IHR5cGUgeyBUcmFja0NhdGFsb2dJZCwgVHJhY2tGYW1pbHlDYXRhbG9nSWQsIFRyYWNrVGhlbWVJZCwgVHJhY2tUaWVyIH0gZnJvbSBcIi4vVHJhY2tDYXRhbG9nXCI7XG5leHBvcnQgeyBkZXNjcmliZUNvbXBvc2VkQ2F0YWxvZ1RyYWNrLCBkZXNjcmliZUNvbXBvc2VkVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5leHBvcnQgdHlwZSB7IENvbXBvc2VyRGVidWdTdW1tYXJ5LCBGYW1pbHlSZWNpcGUsIEpvdXJuZXlCZWF0S2luZCwgSm91cm5leUJlYXRSZWNpcGUsIFByZXNzdXJlTGV2ZWwsIFByZXNzdXJlU3R5bGUsIFNlZ21lbnREZWJ1Z1N1bW1hcnksIFRpZXJQcm9maWxlLCBUcmFja1JlY2lwZSB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcblxuZXhwb3J0IGNvbnN0IG5lb25OZWJ1bGFlVHJhY2sxID0gdHJhY2tzW1wibmVvbi1uZWJ1bGFlLTFcIl07XG5leHBvcnQgY29uc3QgbmVvbk5lYnVsYWVUcmFjazIgPSB0cmFja3NbXCJuZW9uLW5lYnVsYWUtMlwiXTtcbmV4cG9ydCBjb25zdCBuZW9uTmVidWxhZVRyYWNrMyA9IHRyYWNrc1tcIm5lb24tbmVidWxhZS0zXCJdO1xuZXhwb3J0IGNvbnN0IGF1cm9yYVRyYWNrMSA9IHRyYWNrc1tcImF1cm9yYS0xXCJdO1xuZXhwb3J0IGNvbnN0IGF1cm9yYVRyYWNrMiA9IHRyYWNrc1tcImF1cm9yYS0yXCJdO1xuZXhwb3J0IGNvbnN0IGF1cm9yYVRyYWNrMyA9IHRyYWNrc1tcImF1cm9yYS0zXCJdO1xuZXhwb3J0IGNvbnN0IGNyeXN0YWxGb3JnZVRyYWNrMSA9IHRyYWNrc1tcImNyeXN0YWwtZm9yZ2UtMVwiXTtcbmV4cG9ydCBjb25zdCBjcnlzdGFsRm9yZ2VUcmFjazIgPSB0cmFja3NbXCJjcnlzdGFsLWZvcmdlLTJcIl07XG5leHBvcnQgY29uc3QgY3J5c3RhbEZvcmdlVHJhY2szID0gdHJhY2tzW1wiY3J5c3RhbC1mb3JnZS0zXCJdO1xuZXhwb3J0IGNvbnN0IHZvaWRHYXJkZW5UcmFjazEgPSB0cmFja3NbXCJ2b2lkLWdhcmRlbi0xXCJdO1xuZXhwb3J0IGNvbnN0IHZvaWRHYXJkZW5UcmFjazIgPSB0cmFja3NbXCJ2b2lkLWdhcmRlbi0yXCJdO1xuZXhwb3J0IGNvbnN0IHZvaWRHYXJkZW5UcmFjazMgPSB0cmFja3NbXCJ2b2lkLWdhcmRlbi0zXCJdO1xuZXhwb3J0IGNvbnN0IHNvbGFyQXJyYXlUcmFjazEgPSB0cmFja3NbXCJzb2xhci1hcnJheS0xXCJdO1xuZXhwb3J0IGNvbnN0IHNvbGFyQXJyYXlUcmFjazIgPSB0cmFja3NbXCJzb2xhci1hcnJheS0yXCJdO1xuZXhwb3J0IGNvbnN0IHNvbGFyQXJyYXlUcmFjazMgPSB0cmFja3NbXCJzb2xhci1hcnJheS0zXCJdO1xuIiwgImltcG9ydCB7IGlzTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyLCBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24gfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrRmFtaWxpZXMsIHRyYWNrcyB9IGZyb20gXCIuL3RyYWNrc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInRyYWNrXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJUcmFja1wiO1xuICByZWFkb25seSBtZW1iZXJzID0gdHJhY2tzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja01lbWJlcj47XG4gIHJlYWRvbmx5IGZhbWlsaWVzID0gdHJhY2tGYW1pbGllcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlNZW1iZXI8a2V5b2YgdHlwZW9mIHRyYWNrcz4+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHRyYWNrXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjay5kZWZpbml0aW9uKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKHRyYWNrLmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2lkLCBmYW1pbHldIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmFtaWxpZXMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUoZmFtaWx5LnRyYWNrSWRzLmxlbmd0aCA+IDAsIGAke2lkfSBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIHRyYWNrLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQoZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQpLCBgJHtpZH0gaGFzIGFuIHVua25vd24gc2NlbmUgaWQuYCk7XG4gICAgICBmb3IgKGNvbnN0IHRyYWNrSWQgb2YgZmFtaWx5LnRyYWNrSWRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0cmFja0lkIGluIHRoaXMubWVtYmVycywgYCR7aWR9IHJlZmVyZW5jZXMgdW5rbm93biB0cmFjayBcIiR7dHJhY2tJZH1cIi5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRoaXMubWVtYmVyc1t0cmFja0lkXS5lbnZpcm9ubWVudC5zY2VuZUlkID09PSBmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCwgYCR7dHJhY2tJZH0gbXVzdCB1c2UgdGhlICR7aWR9IHNjZW5lLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbHkgPSBuZXcgVHJhY2tGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBUcmFja0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUlkID0ga2V5b2YgdHlwZW9mIHRyYWNrRmFtaWx5LmZhbWlsaWVzO1xuIiwgIi8qKlxuICogU2hpZWxkRXZhbHVhdG9yIFx1MjAxNCBwZXItZnJhbWUgc2hpZWxkIHN0YXRlIGFuZCB0aWNrIGxvZ2ljLlxuICpcbiAqIE9uZSBTaGllbGRTdGF0ZSB0cmFja3MgdGhlIGxpdmUgcnVudGltZSBzdGF0ZSBmb3Igd2hhdGV2ZXIgc2hpZWxkIGlzXG4gKiBjdXJyZW50bHkgZXF1aXBwZWQuIFRoZSB0aWNrU2hpZWxkKCkgZnVuY3Rpb24gZHJpdmVzIGFsbCBiZWhhdmlvcmFsIG1vZGVzXG4gKiAoY2hhcmdlLCBwdWxzZSwgY29udGFjdCwgYXVyYSkgYW5kIHJldHVybnMgYSByZXN1bHQgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKlxuICogRGVzaWduIHJ1bGU6IHRoaXMgbW9kdWxlIGRvZXMgbm90IG1vZGlmeSBlbmVteSBhcnJheXMgZGlyZWN0bHkuIEl0IHJldHVybnNcbiAqIGEgU2hpZWxkVGlja1Jlc3VsdCB0aGF0IG1haW4udHMgYXBwbGllcy4gVGhpcyBrZWVwcyB0aGUgc2hpZWxkIHN5c3RlbVxuICogdGVzdGFibGUgYW5kIGNvbXBvc2FibGUgd2l0aCBvdGhlciBuZWFyLXBsYXllciBlZmZlY3RzLlxuICovXG5cbmltcG9ydCB0eXBlIHsgU2hpZWxkSWQsIFNoaWVsZE1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHR5cGUgeyBOZWFyYnlUaHJlYXQgfSBmcm9tIFwiLi9uZWFyYnlUaHJlYXRRdWVyeVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGl2ZSBwdWxzZSBlZmZlY3QgKHZpc3VhbClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVB1bHNlRWZmZWN0IHtcbiAgLyoqIFByb2dyZXNzIDBcdTIxOTIxLiBEcml2ZW4gYnkgKG5vdyAtIHN0YXJ0ZWRBdCkgLyBwdWxzZUR1cmF0aW9uTXMuICovXG4gIHByb2dyZXNzOiBudW1iZXI7XG4gIC8qKiBUaW1lc3RhbXAgd2hlbiB0aGUgcHVsc2Ugd2FzIHRyaWdnZXJlZC4gKi9cbiAgc3RhcnRlZEF0OiBudW1iZXI7XG4gIC8qKiBEdXJhdGlvbiBpbiBtcy4gKi9cbiAgZHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogQ2VudGVyIHggKHNuYXBzaG90IG9mIHBsYXllciBwb3NpdGlvbiB3aGVuIHRyaWdnZXJlZCkuICovXG4gIHg6IG51bWJlcjtcbiAgLyoqIENlbnRlciB5LiAqL1xuICB5OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhZGl1cyBhdCBwZWFrIGV4cGFuc2lvbi4gKi9cbiAgbWF4UmFkaXVzOiBudW1iZXI7XG4gIC8qKiBDb2xvci4gKi9cbiAgY29sb3I6IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTaGllbGQgc3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkU3RhdGUge1xuICBzaGllbGRJZDogU2hpZWxkSWQ7XG4gIC8qKiBBY3RpdmUgc2hpZWxkIGxldmVsLiBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHNoaWVsZCBpbmNyZWFzZSB0aGlzIHVwIHRvIDUuICovXG4gIGxldmVsOiBudW1iZXI7XG4gIC8qKiBSZW1haW5pbmcgY2hhcmdlcyAoY2hhcmdlLWJhc2VkIHNoaWVsZHMpLiAqL1xuICBjaGFyZ2VzOiBudW1iZXI7XG4gIC8qKiBTZWNvbmRzIHVudGlsIGNvb2xkb3duIGNvbXBsZXRlcy4gKi9cbiAgY29vbGRvd25MZWZ0OiBudW1iZXI7XG4gIC8qKiBtcyB0aW1lc3RhbXAgYWZ0ZXIgd2hpY2ggdGhlIGhpdCBmbGFzaCBpcyBkb25lLiAqL1xuICBoaXRGbGFzaFVudGlsOiBudW1iZXI7XG4gIC8qKiBQcm9ncmVzcyAwXHUyMTkyMSBvZiBoaXQgZmxhc2ggYW5pbWF0aW9uICgxID0gZG9uZSkuICovXG4gIGhpdEZsYXNoUHJvZ3Jlc3M6IG51bWJlcjtcbiAgLyoqIEFjdGl2ZSBleHBhbmRpbmcgcHVsc2UgcmluZ3MgKFB1bHNlIENvcmUpLiAqL1xuICBwdWxzZUVmZmVjdHM6IEFjdGl2ZVB1bHNlRWZmZWN0W107XG4gIC8qKiBFbmVteSBpZHMgYWxyZWFkeSByZXNvbHZlZCBhZ2FpbnN0IHRoaXMgc2hpZWxkLCBwcmV2ZW50aW5nIHJlcGVhdCBkYW1hZ2UgcGVyIGZyYW1lLiAqL1xuICByZWFkb25seSBpbnRlcmNlcHRlZEVuZW15SWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3Ioc2hpZWxkSWQ6IFNoaWVsZElkLCBtYXhDaGFyZ2VzOiBudW1iZXIsIGxldmVsID0gMSkge1xuICAgIHRoaXMuc2hpZWxkSWQgPSBzaGllbGRJZDtcbiAgICB0aGlzLmxldmVsID0gTWF0aC5taW4oNSwgTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihsZXZlbCkpKTtcbiAgICB0aGlzLmNoYXJnZXMgPSBtYXhDaGFyZ2VzO1xuICAgIHRoaXMuY29vbGRvd25MZWZ0ID0gMDtcbiAgICB0aGlzLmhpdEZsYXNoVW50aWwgPSAwO1xuICAgIHRoaXMuaGl0Rmxhc2hQcm9ncmVzcyA9IDE7XG4gICAgdGhpcy5wdWxzZUVmZmVjdHMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaWVsZENvbnRhY3RUYXJnZXQge1xuICBpZDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBkeWluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRDb250YWN0UmVzdWx0IHtcbiAgY29udGFjdGVkOiBib29sZWFuO1xuICBhYnNvcmJlZDogYm9vbGVhbjtcbiAgZGFtYWdlQWJzb3JiZWQ6IG51bWJlcjtcbiAgZW5lbXlEZXN0cm95ZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBSZXNvbHZlIG9uZSBnZW9tZXRyaWMgZW5lbXkvc2hpZWxkIGNvbnRhY3QgZXhhY3RseSBvbmNlIGZvciB0aGF0IGVuZW15LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTaGllbGRDb250YWN0KFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0YXJnZXQ6IFNoaWVsZENvbnRhY3RUYXJnZXQsXG4gIHNoaWVsZFg6IG51bWJlcixcbiAgc2hpZWxkWTogbnVtYmVyLFxuICBub3c6IG51bWJlcixcbiAgc2NhbGUgPSAxLFxuKTogU2hpZWxkQ29udGFjdFJlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkQ29udGFjdFJlc3VsdCA9IHtcbiAgICBjb250YWN0ZWQ6IGZhbHNlLFxuICAgIGFic29yYmVkOiBmYWxzZSxcbiAgICBkYW1hZ2VBYnNvcmJlZDogMCxcbiAgICBlbmVteURlc3Ryb3llZDogZmFsc2UsXG4gIH07XG4gIGlmICh0YXJnZXQuZHlpbmcgfHwgc3RhdGUuaW50ZXJjZXB0ZWRFbmVteUlkcy5oYXModGFyZ2V0LmlkKSkgcmV0dXJuIHJlc3VsdDtcbiAgY29uc3QgcmFkaXVzID0gc2hpZWxkLnJhZGl1cyAqIHNjYWxlICsgdGFyZ2V0LnJhZGl1cztcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIHNoaWVsZFg7XG4gIGNvbnN0IGR5ID0gdGFyZ2V0LnkgLSBzaGllbGRZO1xuICBpZiAoZHggKiBkeCArIGR5ICogZHkgPiByYWRpdXMgKiByYWRpdXMpIHJldHVybiByZXN1bHQ7XG5cbiAgcmVzdWx0LmNvbnRhY3RlZCA9IHRydWU7XG4gIHN0YXRlLmludGVyY2VwdGVkRW5lbXlJZHMuYWRkKHRhcmdldC5pZCk7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiByZXN1bHQ7XG5cbiAgY29uc3QgYWJzb3JiZWQgPSBNYXRoLm1pbihzdGF0ZS5jaGFyZ2VzLCB0YXJnZXQuaGVhbHRoKTtcbiAgc3RhdGUuY2hhcmdlcyAtPSBhYnNvcmJlZDtcbiAgdGFyZ2V0LmhlYWx0aCAtPSBhYnNvcmJlZDtcbiAgc3RhdGUuaGl0Rmxhc2hVbnRpbCA9IG5vdyArIDI4MDtcbiAgc3RhdGUuaGl0Rmxhc2hQcm9ncmVzcyA9IDA7XG4gIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gIHJlc3VsdC5hYnNvcmJlZCA9IHRydWU7XG4gIHJlc3VsdC5kYW1hZ2VBYnNvcmJlZCA9IGFic29yYmVkO1xuICByZXN1bHQuZW5lbXlEZXN0cm95ZWQgPSB0YXJnZXQuaGVhbHRoIDw9IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayByZXN1bHQgXHUyMDE0IHdoYXQgbWFpbi50cyBzaG91bGQgYXBwbHkgdGhpcyBmcmFtZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpZWxkVGlja1Jlc3VsdCB7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBjb250YWN0RGFtYWdlIHRoaXMgZnJhbWUgKGNvbnRhY3Qgc2hpZWxkcykuICovXG4gIGNvbnRhY3REYW1hZ2VFbmVteUlkczogbnVtYmVyW107XG4gIC8qKiBBbW91bnQgb2YgY29udGFjdCBkYW1hZ2UgcGVyIGVuZW15LiAqL1xuICBjb250YWN0RGFtYWdlQW1vdW50OiBudW1iZXI7XG4gIC8qKiBFbmVteSBJRHMgdGhhdCBzaG91bGQgaGF2ZSB0aGVpciBzcGVlZCBtdWx0aXBsaWVkIGJ5IHNsb3dNdWx0aXBsaWVyIChhdXJhKS4gKi9cbiAgc2xvd0VuZW15SWRzOiBudW1iZXJbXTtcbiAgLyoqIEVmZmVjdGl2ZSBzbG93IG11bHRpcGxpZXIgdG8gYXBwbHkuICovXG4gIHNsb3dNdWx0aXBsaWVyOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgc2hpZWxkIGFic29yYmVkIGEgaGl0IHRoaXMgZnJhbWUgKGNoYXJnZSBjb25zdW1lZCkuXG4gICAqIG1haW4udHMgc2hvdWxkIE5PVCBraWxsL2RhbWFnZSB0aGUgcGxheWVyIGZvciB0aGF0IGNvbGxpc2lvbi5cbiAgICovXG4gIGFic29yYmVkSGl0OiBib29sZWFuO1xuICAvKipcbiAgICogRW5lbXkgSURzIHRvIHB1c2ggYXdheSBmcm9tIHRoZSBwbGF5ZXIgY2VudGVyIChwdWxzZSBzaGllbGQpLlxuICAgKiBtYWluLnRzIHNob3VsZCBhZGQgcHVzaERpc3RhbmNlIHRvIHRoZSBlbmVteSdzIG91dHdhcmQgdmVsb2NpdHkgb3IgcG9zaXRpb24uXG4gICAqL1xuICBwdXNoRW5lbXlJZHM6IG51bWJlcltdO1xuICAvKiogUHVzaCBkaXN0YW5jZSBpbiBweC4gKi9cbiAgcHVzaERpc3RhbmNlOiBudW1iZXI7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGljayBmdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFBVTFNFX0RVUkFUSU9OX01TID0gNjAwO1xuXG4vKipcbiAqIERyaXZlcyB0aGUgc2hpZWxkIGZvciBvbmUgZ2FtZSBmcmFtZS5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgICAgICAgTXV0YWJsZSBzaGllbGQgc3RhdGUgdG8gdXBkYXRlLlxuICogQHBhcmFtIHNoaWVsZCAgICAgIEltbXV0YWJsZSBzaGllbGQgZGVmaW5pdGlvbi5cbiAqIEBwYXJhbSB0aHJlYXRzICAgICBOZWFyYnkgdGhyZWF0cyBmcm9tIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpIChyYW5nZSA9IHNoaWVsZC5yYWRpdXMpLlxuICogQHBhcmFtIHBsYXllclggICAgIEN1cnJlbnQgcGxheWVyIGNlbnRlciB4IChmb3IgcHVsc2Ugb3JpZ2luKS5cbiAqIEBwYXJhbSBwbGF5ZXJZICAgICBDdXJyZW50IHBsYXllciBjZW50ZXIgeS5cbiAqIEBwYXJhbSBub3cgICAgICAgICBDdXJyZW50IHRpbWVzdGFtcCBpbiBtcy5cbiAqIEBwYXJhbSBkZWx0YSAgICAgICBGcmFtZSBkZWx0YSBpbiBzZWNvbmRzLlxuICogQHJldHVybnMgICAgICAgICAgIEFjdGlvbnMgZm9yIG1haW4udHMgdG8gYXBwbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU2hpZWxkKFxuICBzdGF0ZTogU2hpZWxkU3RhdGUsXG4gIHNoaWVsZDogU2hpZWxkTWVtYmVyLFxuICB0aHJlYXRzOiByZWFkb25seSBOZWFyYnlUaHJlYXRbXSxcbiAgcGxheWVyWDogbnVtYmVyLFxuICBwbGF5ZXJZOiBudW1iZXIsXG4gIG5vdzogbnVtYmVyLFxuICBkZWx0YTogbnVtYmVyLFxuKTogU2hpZWxkVGlja1Jlc3VsdCB7XG4gIGNvbnN0IHJlc3VsdDogU2hpZWxkVGlja1Jlc3VsdCA9IHtcbiAgICBjb250YWN0RGFtYWdlRW5lbXlJZHM6IFtdLFxuICAgIGNvbnRhY3REYW1hZ2VBbW91bnQ6IDAsXG4gICAgc2xvd0VuZW15SWRzOiBbXSxcbiAgICBzbG93TXVsdGlwbGllcjogMS4wLFxuICAgIGFic29yYmVkSGl0OiBmYWxzZSxcbiAgICBwdXNoRW5lbXlJZHM6IFtdLFxuICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgfTtcblxuICAvLyBBZHZhbmNlIGNvb2xkb3duXG4gIGlmIChzdGF0ZS5jb29sZG93bkxlZnQgPiAwKSBzdGF0ZS5jb29sZG93bkxlZnQgPSBNYXRoLm1heCgwLCBzdGF0ZS5jb29sZG93bkxlZnQgLSBkZWx0YSk7XG5cbiAgLy8gVXBkYXRlIHB1bHNlIHByb2dyZXNzXG4gIGZvciAoY29uc3QgcHVsc2Ugb2Ygc3RhdGUucHVsc2VFZmZlY3RzKSB7XG4gICAgcHVsc2UucHJvZ3Jlc3MgPSAobm93IC0gcHVsc2Uuc3RhcnRlZEF0KSAvIHB1bHNlLmR1cmF0aW9uTXM7XG4gIH1cbiAgc3RhdGUucHVsc2VFZmZlY3RzID0gc3RhdGUucHVsc2VFZmZlY3RzLmZpbHRlcihwID0+IHAucHJvZ3Jlc3MgPCAxKTtcblxuICAvLyBBZHZhbmNlIGhpdCBmbGFzaFxuICBpZiAoc3RhdGUuaGl0Rmxhc2hVbnRpbCA+IDApIHtcbiAgICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gTWF0aC5taW4oMSwgKG5vdyAtIChzdGF0ZS5oaXRGbGFzaFVudGlsIC0gMjgwKSkgLyAyODApO1xuICB9XG5cbiAgLy8gUmVmaWxsIGNoYXJnZXMgd2hlbiBjb29sZG93biBjb21wbGV0ZXMgKGNoYXJnZS1iYXNlZCBzaGllbGRzKVxuICBpZiAoc2hpZWxkLm1vZGUgPT09IFwiY2hhcmdlXCIgJiYgc3RhdGUuY29vbGRvd25MZWZ0ID09PSAwICYmIHN0YXRlLmNoYXJnZXMgPCBzaGllbGQubWF4Q2hhcmdlcykge1xuICAgIHN0YXRlLmNoYXJnZXMgPSBzaGllbGQubWF4Q2hhcmdlcztcbiAgfVxuXG4gIGlmICh0aHJlYXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogY29udGFjdCBcdTIwMTQgZGVhbCBkYW1hZ2UgdG8gZW5lbWllcyB0b3VjaGluZyB0aGUgc2hpZWxkIGVkZ2VcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlmIChmYWxzZSkge1xuICAgIHJlc3VsdC5jb250YWN0RGFtYWdlQW1vdW50ID0gc2hpZWxkLmNvbnRhY3REYW1hZ2U7XG4gICAgZm9yIChjb25zdCB7IHRhcmdldCB9IG9mIHRocmVhdHMpIHtcbiAgICAgIHJlc3VsdC5jb250YWN0RGFtYWdlRW5lbXlJZHMucHVzaCh0YXJnZXQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNb2RlOiBhdXJhIFx1MjAxNCBzbG93IGVuZW1pZXMgaW5zaWRlIHJhZGl1c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgcmVzdWx0LnNsb3dNdWx0aXBsaWVyID0gc2hpZWxkLnNsb3dNdWx0aXBsaWVyO1xuICAgIGZvciAoY29uc3QgeyB0YXJnZXQgfSBvZiB0aHJlYXRzKSB7XG4gICAgICByZXN1bHQuc2xvd0VuZW15SWRzLnB1c2godGFyZ2V0LmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTW9kZTogcHVsc2UgXHUyMDE0IGVtaXQgcHVzaCByaW5nIHdoZW4gYW55IGVuZW15IGVudGVycyByYW5nZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8gVHJpZ2dlciBwdWxzZVxuICAgIHN0YXRlLmNvb2xkb3duTGVmdCA9IHNoaWVsZC5jb29sZG93blNlY29uZHM7XG4gICAgY29uc3QgcHVsc2U6IEFjdGl2ZVB1bHNlRWZmZWN0ID0ge1xuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICBzdGFydGVkQXQ6IG5vdyxcbiAgICAgIGR1cmF0aW9uTXM6IFBVTFNFX0RVUkFUSU9OX01TLFxuICAgICAgeDogcGxheWVyWCxcbiAgICAgIHk6IHBsYXllclksXG4gICAgICBtYXhSYWRpdXM6IHNoaWVsZC5yYWRpdXMgKiAxLjgsXG4gICAgICBjb2xvcjogXCJcIiwgLy8gZmlsbGVkIGJ5IGRyYXcgY29kZSB3aXRoIG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl1cbiAgICB9O1xuICAgIHN0YXRlLnB1bHNlRWZmZWN0cy5wdXNoKHB1bHNlKTtcbiAgICByZXN1bHQucHVzaERpc3RhbmNlID0gc2hpZWxkLnB1c2hEaXN0YW5jZTtcbiAgICBmb3IgKGNvbnN0IHsgdGFyZ2V0IH0gb2YgdGhyZWF0cykge1xuICAgICAgcmVzdWx0LnB1c2hFbmVteUlkcy5wdXNoKHRhcmdldC5pZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIaXQgYWJzb3JwdGlvbiBcdTIwMTQgY2FsbGVkIGJ5IG1haW4udHMgd2hlbiBhbiBlbmVteSB3b3VsZCB0b3VjaCB0aGUgcGxheWVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGFic29yYiBhIGhpdCB1c2luZyBzaGllbGQgY2hhcmdlcy5cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaGl0IHdhcyBhYnNvcmJlZCAoY2hhcmdlIGNvbnN1bWVkKSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ5QWJzb3JiSGl0KHN0YXRlOiBTaGllbGRTdGF0ZSwgc2hpZWxkOiBTaGllbGRNZW1iZXIsIG5vdzogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChzdGF0ZS5jaGFyZ2VzIDw9IDApIHJldHVybiBmYWxzZTtcbiAgc3RhdGUuY2hhcmdlcyAtPSAxO1xuICBzdGF0ZS5oaXRGbGFzaFVudGlsID0gbm93ICsgMjgwO1xuICBzdGF0ZS5oaXRGbGFzaFByb2dyZXNzID0gMDtcbiAgLy8gUmVjaGFyZ2UgYmVnaW5zIGFmdGVyIHRoZSBtb3N0IHJlY2VudCBhYnNvcmJlZCBoaXQuIEtlZXBpbmcgdGhlIGNvb2xkb3duXG4gIC8vIGFjdGl2ZSBwcmV2ZW50cyB0aWNrU2hpZWxkKCkgZnJvbSBpbW1lZGlhdGVseSByZXN0b3JpbmcgYSBwYXJ0aWFsbHlcbiAgLy8gZGVwbGV0ZWQgc2hpZWxkIG9uIHRoZSBuZXh0IGZyYW1lLlxuICBzdGF0ZS5jb29sZG93bkxlZnQgPSBzaGllbGQuY29vbGRvd25TZWNvbmRzO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVUZXN0UGFnZSwgbmVvblBhbGV0dGUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IHNoaWVsZEZhbWlseSwgdHlwZSBTaGllbGRJZCwgdHlwZSBTaGllbGRNZW1iZXIgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgcmVzb2x2ZVNoaWVsZENvbnRhY3QsIFNoaWVsZFN0YXRlIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21iYXQvc2hpZWxkRXZhbHVhdG9yXCI7XG5cbmludGVyZmFjZSBTaGllbGRTbW9rZVJlc3VsdCB7XG4gIHNoaWVsZElkOiBTaGllbGRJZDtcbiAgcGFzc2VkOiBib29sZWFuO1xuICBmYWlsdXJlczogc3RyaW5nW107XG59XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI3Rlc3Qtc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT0xpc3RFbGVtZW50PihcIiNyZXN1bHRzXCIpITtcblxuZnVuY3Rpb24gdmFsaWRhdGVTaGllbGQoaWQ6IFNoaWVsZElkLCBzaGllbGQ6IFNoaWVsZE1lbWJlcik6IFNoaWVsZFNtb2tlUmVzdWx0IHtcbiAgY29uc3QgZmFpbHVyZXM6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKHNoaWVsZC5yYWRpdXMgPD0gMCkgZmFpbHVyZXMucHVzaChgcmFkaXVzICR7c2hpZWxkLnJhZGl1c30gbXVzdCBiZSBwb3NpdGl2ZWApO1xuICBpZiAoc2hpZWxkLm9yYml0ZXJDb3VudCA8IDApIGZhaWx1cmVzLnB1c2goYG9yYml0ZXJDb3VudCAke3NoaWVsZC5vcmJpdGVyQ291bnR9IGNhbm5vdCBiZSBuZWdhdGl2ZWApO1xuICBpZiAoc2hpZWxkLm9yYml0ZXJTcGVlZCA8IDApIGZhaWx1cmVzLnB1c2goYG9yYml0ZXJTcGVlZCAke3NoaWVsZC5vcmJpdGVyU3BlZWR9IGNhbm5vdCBiZSBuZWdhdGl2ZWApO1xuICBpZiAoIW5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0pIGZhaWx1cmVzLnB1c2goYGNvbG9yIFwiJHtzaGllbGQuY29sb3J9XCIgbm90IGluIG5lb25QYWxldHRlYCk7XG4gIGlmIChzaGllbGQubW9kZSAhPT0gXCJjaGFyZ2VcIikgZmFpbHVyZXMucHVzaChgbW9kZSBtdXN0IGJlIGNoYXJnZSwgZ290ICR7c2hpZWxkLm1vZGV9YCk7XG4gIGlmIChzaGllbGQubWF4Q2hhcmdlcyA8PSAwKSBmYWlsdXJlcy5wdXNoKGBzdHJlbmd0aCBtdXN0IGJlIHBvc2l0aXZlLCBnb3QgJHtzaGllbGQubWF4Q2hhcmdlc31gKTtcblxuICByZXR1cm4geyBzaGllbGRJZDogaWQsIHBhc3NlZDogZmFpbHVyZXMubGVuZ3RoID09PSAwLCBmYWlsdXJlcyB9O1xufVxuXG5jb25zdCBydW4gPSAoKTogU2hpZWxkU21va2VSZXN1bHRbXSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBPYmplY3QuZW50cmllcyhzaGllbGRGYW1pbHkubWVtYmVycykubWFwKChbaWQsIHNoaWVsZF0pID0+XG4gICAgdmFsaWRhdGVTaGllbGQoaWQgYXMgU2hpZWxkSWQsIHNoaWVsZCkpO1xuXG4gIHJlc3VsdHNFbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdHMubWFwKHIgPT4gYFxuICAgIDxsaSBkYXRhLXBhc3NlZD1cIiR7ci5wYXNzZWR9XCIgZGF0YS1zaGllbGQtaWQ9XCIke3Iuc2hpZWxkSWR9XCI+XG4gICAgICA8c3Ryb25nPiR7c2hpZWxkRmFtaWx5Lm1lbWJlcnNbci5zaGllbGRJZCBhcyBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnNdLmxhYmVsfTwvc3Ryb25nPlxuICAgICAgPHNwYW4+JHtyLnBhc3NlZCA/IFwiUEFTU1wiIDogXCJGQUlMXCJ9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWxcIj4ke3IucGFzc2VkID8gYG1vZGU6ICR7c2hpZWxkRmFtaWx5Lm1lbWJlcnNbci5zaGllbGRJZCBhcyBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnNdLm1vZGV9IFx1MDBCNyByYWRpdXM6ICR7c2hpZWxkRmFtaWx5Lm1lbWJlcnNbci5zaGllbGRJZCBhcyBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnNdLnJhZGl1c31weGAgOiByLmZhaWx1cmVzLmpvaW4oXCIgfCBcIil9PC9zcGFuPlxuICAgIDwvbGk+YCkuam9pbihcIlwiKTtcblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmNvbnN0IHRlc3QgPSBjcmVhdGVUZXN0UGFnZShcIm5lb24tc3dhcm0tc2hpZWxkLWZhbWlseS1zbW9rZVwiLCB7IHN1aXRlOiBcInNtb2tlXCIsIHJ1biB9LCBzdGF0dXMpO1xudGVzdC5yZWFkeSgpO1xuZm9yIChjb25zdCByZXN1bHQgb2YgcnVuKCkpIHtcbiAgdGVzdC5hc3NlcnQoXG4gICAgYCR7cmVzdWx0LnNoaWVsZElkfSBkZWZpbml0aW9uIGlzIHZhbGlkYCxcbiAgICByZXN1bHQucGFzc2VkLFxuICAgIHJlc3VsdC5mYWlsdXJlcy5qb2luKFwiOyBcIikgfHwgXCJhbGwgY2hlY2tzIHBhc3NlZFwiLFxuICApO1xufVxuXG5jb25zdCBsaWdodEd1YXJkID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnMubGlnaHRHdWFyZDtcbmNvbnN0IHN0YXRlID0gbmV3IFNoaWVsZFN0YXRlKFwibGlnaHRHdWFyZFwiLCBsaWdodEd1YXJkLm1heENoYXJnZXMpO1xuY29uc3QgaG9yaXpvbnRhbEVuZW15ID0geyBpZDogMSwgeDogMjI1ICsgbGlnaHRHdWFyZC5yYWRpdXMsIHk6IDY1MCwgcmFkaXVzOiA2LjI1LCBoZWFsdGg6IDEsIGR5aW5nOiBmYWxzZSB9O1xuY29uc3QgZmlyc3RDb250YWN0ID0gcmVzb2x2ZVNoaWVsZENvbnRhY3Qoc3RhdGUsIGxpZ2h0R3VhcmQsIGhvcml6b250YWxFbmVteSwgMjI1LCA2NTAsIDEwMDApO1xudGVzdC5hc3NlcnQoXG4gIFwic2hpZWxkIGludGVyY2VwdHMgaG9yaXpvbnRhbCBsYW5lLXNoaWZ0IGNvbnRhY3RcIixcbiAgZmlyc3RDb250YWN0LmFic29yYmVkICYmIGZpcnN0Q29udGFjdC5lbmVteURlc3Ryb3llZCAmJiBzdGF0ZS5jaGFyZ2VzID09PSBsaWdodEd1YXJkLm1heENoYXJnZXMgLSAxLFxuICBgYWJzb3JiZWQ9JHtmaXJzdENvbnRhY3QuYWJzb3JiZWR9IGRlc3Ryb3llZD0ke2ZpcnN0Q29udGFjdC5lbmVteURlc3Ryb3llZH0gY2hhcmdlcz0ke3N0YXRlLmNoYXJnZXN9YCxcbik7XG5jb25zdCByZXBlYXRlZENvbnRhY3QgPSByZXNvbHZlU2hpZWxkQ29udGFjdChzdGF0ZSwgbGlnaHRHdWFyZCwgaG9yaXpvbnRhbEVuZW15LCAyMjUsIDY1MCwgMTAxNik7XG50ZXN0LmFzc2VydChcbiAgXCJvbmUgZW5lbXkgY2Fubm90IGRyYWluIHNoaWVsZCByZXBlYXRlZGx5XCIsXG4gICFyZXBlYXRlZENvbnRhY3QuY29udGFjdGVkICYmIHN0YXRlLmNoYXJnZXMgPT09IGxpZ2h0R3VhcmQubWF4Q2hhcmdlcyAtIDEsXG4gIGBjb250YWN0ZWQ9JHtyZXBlYXRlZENvbnRhY3QuY29udGFjdGVkfSBjaGFyZ2VzPSR7c3RhdGUuY2hhcmdlc31gLFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUsV0FBVyxDQUFDLEtBQUssS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLE1BQ3BFLE1BQU0sS0FBSyxFQUFFLFFBQVEsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNO0FBQ3RDLFFBQU0sUUFBUSxXQUFXLElBQUksS0FBSyxLQUFLLElBQUk7QUFDM0MsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEQsQ0FBQztBQUVILElBQU0sT0FBTyxDQUFDLFFBQWdCLFFBQVEsTUFBSyxXQUFXLENBQUMsS0FBSyxLQUFLLE1BQy9ELE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFD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TUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzUCxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksR0FBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxHQUFFLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMzTCxLQUFLLFVBQVUsdUJBQXVCLHVCQUF1QixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFNLEtBQUksR0FBRyxDQUFDLE9BQUssS0FBSSxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxRQUFNLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUM5UCxLQUFLLFVBQVUsMEJBQTBCLDBCQUEwQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFJLElBQUcs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QVcsaUJBQWlCLFNBQVMsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsQ0FBQyxNQUFJLEtBQUksR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxDQUFDLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsSUFBRyxLQUFJLEdBQUUsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLEtBQUs7QUFBQSxFQUN0SyxLQUFLLFdBQVcsaUJBQWlCLFNBQVMsU0FBUyxTQUFTLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN4RyxLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2xGLEtBQUssV0FBVyxhQUFhLFVBQVUsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMxSixLQUFLLFdBQVcsZ0JBQWdCLFFBQVEsQ0FBQyxDQUFDLE9BQUssRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLElBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBRWxGLEtBQUssUUFBUSxZQUFZLGFBQWEsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUMvRSxLQUFLLFFBQVEsWUFBWSxhQUFhLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQUssS0FBSSxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLE9BQUssSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3ZKLEtBQUssUUFBUSxjQUFjLFNBQVMsUUFBUSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsTUFBSSxJQUFFLElBQUcsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUNqRyxLQUFLLFFBQVEsWUFBWSxXQUFXLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDN0UsS0FBSyxRQUFRLGFBQWEsWUFBWSxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2pGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3JGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDcE4sS0FBSyxRQUFRLGVBQWUsVUFBVSxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEtBQUksR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDckssS0FBSyxRQUFRLFlBQVksWUFBWSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBRWhGLEtBQUssYUFBYSxpQkFBaUIsaUJBQWlCLFNBQVMsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLEtBQUcsSUFBRSxHQUFFLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDakgsS0FBSyxhQUFhLGlCQUFpQixjQUFjLENBQUMsQ0FBQyxJQUFHLElBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsSUFBRyxHQUFFLEdBQUUsQ0FBQyxPQUFLLEdBQUUsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFFLENBQUMsT0FBSyxJQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsTUFBSSxHQUFFLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDMUksS0FBSyxhQUFhLGdCQUFnQixZQUFZLFFBQVEsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDM0csS0FBSyxhQUFhLGlCQUFpQixXQUFXLFNBQVMsS0FBSztBQUFBLEVBQzVELEtBQUssYUFBYSxhQUFhLGFBQWEsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUN2RixLQUFLLGFBQWEsbUJBQW1CLGFBQWEsQ0FBQyxDQUFDLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRyxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUN6RyxLQUFLLGFBQWEsY0FBYyxRQUFRLFFBQVEsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUcsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDM0YsS0FBSyxhQUFhLGdCQUFnQixVQUFVLEtBQUssR0FBRSxJQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRSxHQUFFLE1BQUksSUFBRyxDQUFDLENBQUM7QUFBQSxFQUN2RixLQUFLLGFBQWEsY0FBYyxjQUFjLFFBQVEsU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFFNUcsS0FBSyxTQUFTLGNBQWMsYUFBYSxLQUFLLEdBQUUsSUFBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUUsR0FBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDbEYsS0FBSyxTQUFTLGFBQWEsWUFBWSxLQUFLLElBQUcsSUFBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUcsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbkYsS0FBSyxTQUFTLGVBQWUsY0FBYyxLQUFLLEdBQUUsSUFBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsSUFBRSxNQUFJLElBQUUsSUFBRyxDQUFVLENBQUMsQ0FBQztBQUFBLEVBQy9HLEtBQUssU0FBUyxlQUFlLGVBQWUsU0FBUyxRQUFRLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUN6RyxLQUFLLFNBQVMsZUFBZSxhQUFhLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUcsR0FBRSxLQUFHLEdBQUUsR0FBRyxRQUFRLElBQUcsR0FBRSxLQUFHLEdBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDMUcsS0FBSyxTQUFTLGlCQUFpQixnQkFBZ0IsS0FBSyxHQUFFLElBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxDQUFDLElBQUUsS0FBRyxJQUFFLEdBQUUsQ0FBVSxDQUFDLENBQUM7QUFBQSxFQUM5RyxLQUFLLFNBQVMsa0JBQWtCLFlBQVksS0FBSyxJQUFHLElBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQzFGLEtBQUssU0FBUyxlQUFlLGVBQWUsQ0FBQyxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxPQUFLLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLEdBQUUsQ0FBQyxLQUFHLElBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRyxHQUFFLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUksR0FBRSxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQ3ZKLEtBQUssU0FBUyxpQkFBaUIsV0FBVyxLQUFLLEdBQUUsSUFBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUUsR0FBRSxNQUFJLElBQUcsQ0FBQyxDQUFDO0FBQ3ZGOzs7QUN6R08sSUFBTSxxQkFBcUIsQ0FBQyxZQUFZLFVBQVUsZ0JBQWdCLGNBQWMsWUFBWTtBQXNGNUYsU0FBUyxvQkFBb0IsT0FBMkM7QUFDN0UsU0FBUSxtQkFBeUMsU0FBUyxLQUFLO0FBQ2pFOzs7QUM5RU8sU0FBUyxlQUNkLElBQ0EsUUFDQSxlQUNBO0FBQ0EsUUFBTSxXQUE2QixFQUFFLElBQUksUUFBUSxXQUFXLFlBQVksQ0FBQyxFQUFFO0FBQzNFLFFBQU0sVUFBVSxNQUFNO0FBQ3BCLGtCQUFjLFFBQVEsU0FBUyxTQUFTO0FBQ3hDLGtCQUFjLGNBQWMsR0FBRyxTQUFTLE9BQU8sWUFBWSxDQUFDLFNBQU0sU0FBUyxXQUFXLE9BQU8sT0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksU0FBUyxXQUFXLE1BQU07QUFDaEosYUFBUyxnQkFBZ0IsUUFBUSxhQUFhLFNBQVM7QUFBQSxFQUN6RDtBQUNBLFFBQU0sTUFBTTtBQUFBLElBQ1YsR0FBRztBQUFBLElBQ0gsYUFBYSxNQUF3QixnQkFBZ0IsUUFBUTtBQUFBLElBQzdELFFBQWM7QUFDWixlQUFTLFNBQVM7QUFDbEIsY0FBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLE9BQU8sTUFBYyxRQUFpQixRQUF1QjtBQUMzRCxlQUFTLFdBQVcsS0FBSyxFQUFFLE1BQU0sUUFBUSxPQUFPLENBQUM7QUFDakQsZUFBUyxTQUFTLFNBQVMsV0FBVyxNQUFNLGVBQWEsVUFBVSxNQUFNLElBQUksV0FBVztBQUN4RixjQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDQSxFQUFDLE9BQXNELGtCQUFrQjtBQUN6RSxVQUFRO0FBQ1IsU0FBTztBQUNUOzs7QUNqQ08sSUFBTSxlQUFlO0FBQUEsRUFDMUIsdUJBQXVCO0FBQ3pCO0FBRUEsSUFBSSxDQUFDLE9BQU8sU0FBUyxhQUFhLHFCQUFxQixLQUFLLGFBQWEseUJBQXlCLEdBQUc7QUFDbkcsUUFBTSxJQUFJLE1BQU0sdUVBQXVFO0FBQ3pGOzs7QUNkTyxJQUFlLG1CQUFmLE1BQTBFO0FBQUEsRUFLckUsUUFBUSxXQUFvQixTQUFvQztBQUN4RSxRQUFJLENBQUMsVUFBVyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssUUFBUSxLQUFLLE9BQU8sRUFBRTtBQUFBLEVBQ2hFO0FBR0Y7OztBQytDQSxJQUFNLFFBQVEsQ0FDWixhQUNBLFlBRWM7QUFBQSxFQUNkLE9BQU87QUFBQSxFQUNQLGlCQUFpQjtBQUFBLEVBQ2pCLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFFBQVE7QUFBQSxFQUNSLG9CQUFvQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLEdBQUc7QUFDTDtBQUVPLElBQU0sc0JBQU4sY0FBa0MsaUJBQTRDO0FBQUEsRUFDMUUsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsaUJBQWlCO0FBQUEsSUFDeEIsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIscUJBQXFCLENBQUMsVUFBVSxlQUFlLFNBQVMsZUFBZSxjQUFjO0FBQUEsSUFDckYsNEJBQTRCLENBQUMsWUFBWSxrQkFBa0I7QUFBQSxFQUM3RDtBQUFBLEVBRVMsVUFBVTtBQUFBLElBQ2pCLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUFnQixRQUFRO0FBQUEsTUFBVyxhQUFhO0FBQUEsTUFBUyxhQUFhO0FBQUEsTUFBVSxvQkFBb0I7QUFBQSxNQUMzRyxnQkFBZ0IsRUFBRSxZQUFZLGNBQWMsZ0JBQWdCLG1CQUFtQixpQkFBaUIsUUFBUSxpQkFBaUIsUUFBUSxZQUFZLFlBQVksV0FBVyxRQUFRLGtCQUFrQixLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixLQUFLLGNBQWMsYUFBYSxjQUFjLFlBQVksa0JBQWtCLElBQUksa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUN0VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEdBQUUsaUJBQWdCLEtBQUksa0JBQWlCLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDdEksTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGFBQVksSUFBRyxrQkFBaUIsS0FBRyxlQUFjLElBQUUsQ0FBQztBQUFBLFFBQ3ZJLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSyxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxJQUFFLENBQUM7QUFBQSxRQUMzSSxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEtBQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDMUksTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixLQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEVBQUMsQ0FBQztBQUFBLE1BQzNJO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQWUsUUFBUTtBQUFBLE1BQVUsYUFBYTtBQUFBLE1BQWMsYUFBYTtBQUFBLE1BQWUsb0JBQW9CO0FBQUEsTUFDbkgsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLGdCQUFnQix5QkFBeUIsaUJBQWlCLFVBQVUsaUJBQWlCLFNBQVMsWUFBWSxRQUFRLFdBQVcsU0FBUyxrQkFBa0IsR0FBRyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxjQUFjLGdCQUFnQixjQUFjLGlCQUFpQixrQkFBa0IsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsRUFBRTtBQUFBLE1BQ25YLFFBQVE7QUFBQSxRQUNOLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxlQUFjLEdBQUUsYUFBWSxJQUFHLG9CQUFtQixHQUFFLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDN0ssTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLGVBQWMsS0FBSSxhQUFZLElBQUcsb0JBQW1CLEdBQUUsa0JBQWlCLEtBQUcsZUFBYyxJQUFFLENBQUM7QUFBQSxRQUM3SyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLE1BQUksaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssZUFBYyxHQUFFLGFBQVksSUFBRyxvQkFBbUIsR0FBRSxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQ2hMLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixPQUFNLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsS0FBSSxlQUFjLE1BQUssYUFBWSxJQUFHLG9CQUFtQixHQUFFLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDakwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE9BQU0sUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLGVBQWMsS0FBSSxhQUFZLElBQUcsb0JBQW1CLEdBQUUsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxNQUNyTDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUFpQixRQUFRO0FBQUEsTUFBVSxhQUFhO0FBQUEsTUFBYyxhQUFhO0FBQUEsTUFBUyxvQkFBb0I7QUFBQSxNQUMvRyxnQkFBZ0IsRUFBRSxZQUFZLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixRQUFRLGlCQUFpQixRQUFRLFlBQVksVUFBVSxXQUFXLFFBQVEsa0JBQWtCLEtBQUssaUJBQWlCLEtBQUssaUJBQWlCLE1BQU0sY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGtCQUFrQixJQUFJLGtCQUFrQixLQUFLLGtCQUFrQixFQUFFO0FBQUEsTUFDOVcsUUFBUTtBQUFBLFFBQ04sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUksUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLE1BQUksYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDNUwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFJLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLE1BQUksYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDM0wsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxLQUFHLGlCQUFnQixLQUFJLGtCQUFpQixHQUFFLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDdkwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxHQUFFLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsS0FBRyxDQUFDO0FBQUEsUUFDeEwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxNQUFLLGlCQUFnQixLQUFJLGtCQUFpQixLQUFJLFlBQVcsR0FBRSxpQkFBZ0IsSUFBRyxlQUFjLE1BQUssYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsSUFBRSxDQUFDO0FBQUEsTUFDL0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFBZ0IsUUFBUTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQVksYUFBYTtBQUFBLE1BQWUsb0JBQW9CO0FBQUEsTUFDcEgsZ0JBQWdCLEVBQUUsWUFBWSxjQUFjLGdCQUFnQixrQkFBa0IsaUJBQWlCLFFBQVEsaUJBQWlCLFVBQVUsWUFBWSxPQUFPLFdBQVcsUUFBUSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsS0FBSyxjQUFjLGdCQUFnQixjQUFjLGNBQWMsa0JBQWtCLEtBQUssa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUN6VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSSxRQUFPLEtBQUksaUJBQWdCLEtBQUksa0JBQWlCLEtBQUksUUFBTyxHQUFFLGFBQVksSUFBRyxjQUFhLElBQUcsV0FBVSxJQUFHLGtCQUFpQixLQUFJLGVBQWMsS0FBSSxDQUFDO0FBQUEsUUFDaEwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUksUUFBTyxHQUFFLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLFFBQU8sR0FBRSxhQUFZLElBQUcsY0FBYSxJQUFHLFdBQVUsSUFBRyxrQkFBaUIsS0FBSSxlQUFjLEtBQUksQ0FBQztBQUFBLFFBQy9LLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixLQUFHLFFBQU8sS0FBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsR0FBRSxRQUFPLEdBQUUsYUFBWSxJQUFHLGNBQWEsSUFBRyxXQUFVLElBQUcsa0JBQWlCLEtBQUksZUFBYyxJQUFHLENBQUM7QUFBQSxRQUM1SyxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSSxRQUFPLEtBQUksaUJBQWdCLEtBQUksa0JBQWlCLEtBQUksUUFBTyxHQUFFLGFBQVksSUFBRyxjQUFhLElBQUcsV0FBVSxJQUFHLGtCQUFpQixLQUFJLGVBQWMsS0FBSSxDQUFDO0FBQUEsUUFDaEwsTUFBTSxHQUFFLEVBQUMsbUJBQWtCLE1BQUssUUFBTyxLQUFJLGlCQUFnQixLQUFJLGtCQUFpQixLQUFJLFFBQU8sR0FBRSxhQUFZLElBQUcsY0FBYSxJQUFHLFdBQVUsSUFBRyxrQkFBaUIsS0FBSSxlQUFjLEtBQUksQ0FBQztBQUFBLE1BQ25MO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQWtCLFFBQVE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFZLGFBQWE7QUFBQSxNQUFnQixvQkFBb0I7QUFBQSxNQUN2SCxnQkFBZ0IsRUFBRSxZQUFZLGNBQWMsZ0JBQWdCLG1CQUFtQixpQkFBaUIsYUFBYSxpQkFBaUIsVUFBVSxZQUFZLFFBQVEsV0FBVyxVQUFVLGtCQUFrQixLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixHQUFHLGNBQWMsY0FBYyxjQUFjLGVBQWUsa0JBQWtCLElBQUksa0JBQWtCLEtBQUssa0JBQWtCLEVBQUU7QUFBQSxNQUM3VyxRQUFRO0FBQUEsUUFDTixNQUFNLEdBQUUsRUFBQyxtQkFBa0IsTUFBSyxRQUFPLEtBQUcsaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssc0JBQXFCLE1BQUssaUJBQWdCLEdBQUUsZUFBYyxLQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQ3hNLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sTUFBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsTUFBSyxzQkFBcUIsTUFBSyxpQkFBZ0IsR0FBRSxlQUFjLEdBQUUsYUFBWSxJQUFHLGtCQUFpQixLQUFHLGVBQWMsSUFBRSxDQUFDO0FBQUEsUUFDck0sTUFBTSxHQUFFLEVBQUMsbUJBQWtCLEtBQUksUUFBTyxHQUFFLGlCQUFnQixLQUFJLGtCQUFpQixNQUFLLHNCQUFxQixLQUFJLGlCQUFnQixHQUFFLGVBQWMsR0FBRSxhQUFZLElBQUcsa0JBQWlCLE1BQUksZUFBYyxLQUFHLENBQUM7QUFBQSxRQUNuTSxNQUFNLEdBQUUsRUFBQyxtQkFBa0IsS0FBSSxRQUFPLE1BQUssaUJBQWdCLEtBQUksa0JBQWlCLE1BQUssc0JBQXFCLEtBQUksaUJBQWdCLEdBQUUsZUFBYyxLQUFJLGFBQVksSUFBRyxrQkFBaUIsTUFBSSxlQUFjLEtBQUcsQ0FBQztBQUFBLFFBQ3hNLE1BQU0sR0FBRSxFQUFDLG1CQUFrQixNQUFLLFFBQU8sS0FBSSxpQkFBZ0IsS0FBSSxrQkFBaUIsS0FBSSxzQkFBcUIsTUFBSyxpQkFBZ0IsR0FBRSxlQUFjLE1BQUssYUFBWSxJQUFHLGtCQUFpQixNQUFJLGVBQWMsSUFBRSxDQUFDO0FBQUEsTUFDMU07QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3BELFdBQUssUUFBUSxLQUFLLGVBQWUsb0JBQW9CLFNBQVMsSUFBSSxXQUFXLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUN4SCxXQUFLLFFBQVEsS0FBSyxlQUFlLDJCQUEyQixTQUFTLElBQUksa0JBQWtCLEdBQUcsR0FBRyxFQUFFLDBDQUEwQztBQUM3SSxXQUFLLFFBQVEsWUFBWSxJQUFJLGVBQWUsZUFBZSxNQUFNLFFBQVcsR0FBRyxFQUFFLG1DQUFtQztBQUNwSCxXQUFLLFFBQVEsWUFBWSxJQUFJLGVBQWUsVUFBVSxNQUFNLFFBQVcsR0FBRyxFQUFFLDhCQUE4QjtBQUMxRyxXQUFLLFFBQVEsSUFBSSxlQUFlLG1CQUFtQixLQUFLLElBQUksZUFBZSxtQkFBbUIsR0FBRyxHQUFHLEVBQUUscUNBQXFDO0FBQzNJLFdBQUssUUFBUSxJQUFJLE9BQU8sU0FBUyxHQUFHLEdBQUcsRUFBRSxzQkFBc0I7QUFDL0QsV0FBSyxRQUFRLElBQUksT0FBTyxXQUFXLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUM5RSxpQkFBVyxVQUFVLElBQUksUUFBUTtBQUMvQixhQUFLLFFBQVEsT0FBTyxvQkFBb0IsR0FBRyxHQUFHLEVBQUUsVUFBVSxPQUFPLEtBQUssOEJBQThCO0FBQ3BHLGFBQUssUUFBUSxPQUFPLFNBQVMsS0FBSyxPQUFPLGtCQUFrQixLQUFLLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLGdDQUFnQztBQUN4SixhQUFLLFFBQVEsT0FBTyx5QkFBeUIsVUFBYSxPQUFPLHdCQUF3QixHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSyxrREFBa0Q7QUFDekssYUFBSyxRQUFRLE9BQU8sY0FBYyxLQUFLLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLHNCQUFzQjtBQUFBLE1BQ3ZIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sWUFBWSxJQUFJLG9CQUFvQjs7O0FDdEkxQyxJQUFNLHNCQUFOLGNBQWtDLGlCQUE0QztBQUFBLEVBQzFFLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxJQUNqQixVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixpQkFBaUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCO0FBQUEsTUFDaEIsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsb0JBQW9CO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsTUFDcEIsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLE1BQ3BCLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixvQkFBb0I7QUFBQSxNQUNwQixpQkFBaUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxNQUNwQixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNwRCxXQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUM3RCxXQUFLLFFBQVEsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFLDBCQUEwQjtBQUMzRCxXQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUM3RCxXQUFLLFFBQVEsT0FBTyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksY0FBYyxHQUFHLEdBQUcsRUFBRSx5Q0FBeUM7QUFDcEgsV0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLHlDQUF5QztBQUNuRyxXQUFLLFFBQVEsSUFBSSxrQkFBa0IsS0FBSyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxzQ0FBc0M7QUFBQSxJQUM5RztBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sWUFBWSxJQUFJLG9CQUFvQjs7O0FDOUdqRCxJQUFNQSxTQUFRLENBQUMsYUFBcUIsWUFBMkQ7QUFBQSxFQUM3RixPQUFPO0FBQUEsRUFDUCxHQUFHO0FBQ0w7QUFFQSxJQUFNLGVBQWU7QUFBQSxFQUNuQixPQUFPO0FBQUEsRUFDUCxnQkFBZ0I7QUFBQSxFQUNoQixZQUFZO0FBQUEsRUFDWixVQUFVO0FBQUEsRUFDVixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixxQkFBcUI7QUFBQSxFQUNyQixnQkFBZ0I7QUFBQSxFQUNoQixlQUFlO0FBQUEsRUFDZixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxxQkFBcUI7QUFBQSxFQUNyQixtQkFBbUI7QUFDckI7QUFFTyxJQUFNLDRCQUFOLGNBQXdDLGlCQUFrRDtBQUFBLEVBQ3RGLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUVSLFVBQVU7QUFBQSxJQUNqQixZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixzQkFBc0I7QUFBQSxNQUN0QixnQkFBZ0I7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTkEsT0FBTSxHQUFHLEVBQUUsaUJBQWlCLE1BQU0sUUFBUSxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUcsY0FBYyxHQUFHLFVBQVUsR0FBRyxhQUFhLEtBQUksQ0FBQztBQUFBLFFBQzlIQSxPQUFNLEdBQUcsRUFBRSxpQkFBaUIsS0FBSyxRQUFRLE1BQU0sWUFBWSxLQUFLLFVBQVUsR0FBRyxjQUFjLEdBQUcsVUFBVSxHQUFHLGFBQWEsS0FBSSxDQUFDO0FBQUEsUUFDN0hBLE9BQU0sR0FBRyxFQUFFLGlCQUFpQixLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVSxHQUFHLGNBQWMsR0FBRyxVQUFVLEdBQUcsYUFBYSxJQUFHLENBQUM7QUFBQSxRQUMzSEEsT0FBTSxHQUFHLEVBQUUsaUJBQWlCLE1BQU0sUUFBUSxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUcsY0FBYyxHQUFHLFVBQVUsR0FBRyxhQUFhLElBQUcsQ0FBQztBQUFBLFFBQzdIQSxPQUFNLEdBQUcsRUFBRSxpQkFBaUIsTUFBTSxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsR0FBRyxjQUFjLEdBQUcsVUFBVSxHQUFHLGFBQWEsS0FBSSxDQUFDO0FBQUEsTUFDL0g7QUFBQSxNQUNBLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsTUFDZixzQkFBc0I7QUFBQSxNQUN0QixnQkFBZ0I7QUFBQSxRQUNkLEdBQUc7QUFBQSxRQUNILE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLGNBQWM7QUFBQSxRQUNkLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ05BLE9BQU0sR0FBRyxFQUFFLGlCQUFpQixNQUFNLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVSxHQUFHLGNBQWMsR0FBRyxVQUFVLEdBQUcsYUFBYSxLQUFJLENBQUM7QUFBQSxRQUM3SEEsT0FBTSxHQUFHLEVBQUUsaUJBQWlCLE1BQU0sUUFBUSxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUcsY0FBYyxHQUFHLFVBQVUsR0FBRyxhQUFhLEtBQUksQ0FBQztBQUFBLFFBQzlIQSxPQUFNLEdBQUcsRUFBRSxpQkFBaUIsTUFBTSxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsR0FBRyxjQUFjLEdBQUcsVUFBVSxHQUFHLGFBQWEsS0FBSSxDQUFDO0FBQUEsUUFDN0hBLE9BQU0sR0FBRyxFQUFFLGlCQUFpQixNQUFNLFFBQVEsTUFBTSxZQUFZLEtBQUssVUFBVSxHQUFHLGNBQWMsR0FBRyxVQUFVLEdBQUcsYUFBYSxLQUFJLENBQUM7QUFBQSxRQUM5SEEsT0FBTSxHQUFHLEVBQUUsaUJBQWlCLE1BQU0sUUFBUSxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUcsY0FBYyxHQUFHLFVBQVUsR0FBRyxhQUFhLEtBQUksQ0FBQztBQUFBLE1BQ2hJO0FBQUEsTUFDQSxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGNBQWM7QUFDWixVQUFNO0FBQ04sU0FBSyxTQUFTO0FBQUEsRUFDaEI7QUFBQSxFQUVBLFdBQWlCO0FBQ2YsZUFBVyxDQUFDLElBQUksSUFBSSxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU8sR0FBRztBQUNyRCxXQUFLLFFBQVEsS0FBSyxXQUFXLGFBQWEsR0FBRyxFQUFFLCtCQUErQjtBQUM5RSxXQUFLLFFBQVEsWUFBWSxLQUFLLGVBQWUsS0FBSyxNQUFNLFFBQVcsR0FBRyxFQUFFLHFCQUFxQjtBQUM3RixXQUFLLFFBQVEsS0FBSyxPQUFPLFdBQVcsR0FBRyxHQUFHLEVBQUUsbUNBQW1DO0FBQy9FLGlCQUFXLFVBQVUsS0FBSyxRQUFRO0FBQ2hDLGFBQUssUUFBUSxPQUFPLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSyw2QkFBNkI7QUFDakcsYUFBSyxRQUFRLE9BQU8sU0FBUyxHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSywyQkFBMkI7QUFDdEYsYUFBSyxRQUFRLE9BQU8sYUFBYSxHQUFHLEdBQUcsRUFBRSxVQUFVLE9BQU8sS0FBSywrQkFBK0I7QUFDOUYsYUFBSyxRQUFRLE9BQU8sWUFBWSxLQUFLLE9BQU8sZ0JBQWdCLEtBQUssT0FBTyxZQUFZLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLGtDQUFrQztBQUNwSixhQUFLLFFBQVEsT0FBTyxjQUFjLEtBQUssT0FBTyxlQUFlLEdBQUcsR0FBRyxFQUFFLFVBQVUsT0FBTyxLQUFLLGlDQUFpQztBQUFBLE1BQzlIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sa0JBQWtCLElBQUksMEJBQTBCOzs7QUNoSXRELElBQU0sNkJBQU4sY0FBeUMsaUJBQW1EO0FBQUEsRUFDeEYsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLElBQ2pCLGNBQWM7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxJQUFJLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3JELFdBQUssUUFBUSxLQUFLLGFBQWEsR0FBRyxHQUFHLEVBQUUsMEJBQTBCO0FBQ2pFLFdBQUssUUFBUSxLQUFLLGdCQUFnQixLQUFLLGVBQWUsR0FBRyxFQUFFLHVDQUF1QztBQUNsRyxXQUFLLFFBQVEsS0FBSyxlQUFlLEtBQUssS0FBSyxVQUFVLEtBQUssZUFBZSxHQUFHLEdBQUcsRUFBRSw0QkFBNEI7QUFDN0csV0FBSyxRQUFRLFlBQVksS0FBSyxXQUFXLE1BQU0sUUFBVyxHQUFHLEVBQUUsK0JBQStCO0FBQUEsSUFDaEc7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLG1CQUFtQixJQUFJLDJCQUEyQjs7O0FDdkJ4RCxJQUFNLHlCQUFOLGNBQXFDLGlCQUErQztBQUFBLEVBQ2hGLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUVSLFVBQVU7QUFBQSxJQUNqQixZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixpQkFBaUI7QUFBQSxNQUNqQixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixpQkFBaUI7QUFBQSxNQUNqQixlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLE1BQU0sS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQUc7QUFDdkQsV0FBSyxRQUFRLE9BQU8sU0FBUyxVQUFVLEdBQUcsRUFBRSx1Q0FBdUM7QUFDbkYsV0FBSyxRQUFRLE9BQU8sU0FBUyxHQUFHLEdBQUcsRUFBRSwyQkFBMkI7QUFDaEUsV0FBSyxRQUFRLE9BQU8sYUFBYSxHQUFHLEdBQUcsRUFBRSw2QkFBNkI7QUFDdEUsV0FBSyxRQUFRLE9BQU8sZUFBZSxHQUFHLEdBQUcsRUFBRSxzQkFBc0I7QUFDakUsV0FBSyxRQUFRLE9BQU8sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUMvRSxXQUFLLFFBQVEsWUFBWSxPQUFPLEtBQUssTUFBTSxRQUFXLEdBQUcsRUFBRSx3QkFBd0I7QUFBQSxJQUNyRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sZUFBZSxJQUFJLHVCQUF1Qjs7O0FDL0J2RCxJQUFNLHFCQUFxQjtBQUFBLEVBQ3pCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLG1CQUFtQjtBQUFBLEVBQ25CLFdBQVc7QUFBQSxFQUNYLGlCQUFpQjtBQUFBLEVBQ2pCLFVBQVU7QUFBQSxJQUNSLEVBQUUsVUFBVSxHQUFHLGVBQWUsR0FBRyxRQUFRLFlBQVk7QUFBQSxJQUNyRCxFQUFFLFVBQVUsUUFBTyxlQUFlLEtBQUksUUFBUSxTQUFTO0FBQUEsSUFDdkQsRUFBRSxVQUFVLFFBQU8sZUFBZSxLQUFJLFFBQVEsU0FBUztBQUFBLElBQ3ZELEVBQUUsVUFBVSxHQUFHLGVBQWUsR0FBRyxRQUFRLFNBQVM7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sRUFBRSxVQUFVLEdBQUcsUUFBUSxJQUFJLGtCQUFrQixJQUFJLGdCQUFnQixJQUFJLE1BQU0sS0FBSSxTQUFTLEtBQUk7QUFBQSxJQUM1RixFQUFFLFVBQVUsUUFBTyxRQUFRLElBQUksa0JBQWtCLElBQUksZ0JBQWdCLElBQUksTUFBTSxNQUFLLFNBQVMsTUFBSyx5QkFBeUIsTUFBSywwQkFBMEIsT0FBTSxzQkFBc0IsTUFBSyxRQUFRLFNBQVM7QUFBQSxJQUM1TSxFQUFFLFVBQVUsUUFBTyxRQUFRLElBQUksa0JBQWtCLElBQUksZ0JBQWdCLEtBQUssTUFBTSxNQUFLLFNBQVMsTUFBSyx5QkFBeUIsTUFBSywwQkFBMEIsT0FBTSxzQkFBc0IsTUFBSyxRQUFRLFlBQVk7QUFBQSxFQUNsTjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLEVBQ1g7QUFDRjtBQUVBLFNBQVMsbUJBQW1CLFFBQStDO0FBQ3pFLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFlBQVksT0FBTztBQUFBLElBQ25CLGdCQUFnQixPQUFPO0FBQUEsSUFDdkIsZ0JBQWdCLE9BQU87QUFBQSxJQUN2QixVQUFVLFdBQVcsT0FBTyxVQUFVLE9BQU8sVUFBVTtBQUFBLElBQ3ZELFFBQVEsV0FBVyxPQUFPLFFBQVEsT0FBTyxVQUFVO0FBQUEsSUFDbkQsZ0JBQWdCO0FBQUEsTUFDZCxFQUFFLE1BQU0sZUFBZSxVQUFVLE9BQU8scUJBQXFCLE1BQU0sYUFBYSxPQUFPLHFCQUFxQixPQUFPLFVBQVUsRUFBRTtBQUFBLE1BQy9ILEVBQUUsTUFBTSxjQUFjLFVBQVUsT0FBTyxtQkFBbUIsTUFBTSxhQUFhLE9BQU8sbUJBQW1CLE9BQU8sVUFBVSxFQUFFO0FBQUEsSUFDNUg7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFNBQVMsYUFBYSxPQUFPLHFCQUFxQixPQUFPLFVBQVU7QUFBQSxNQUNuRSxPQUFPLE9BQU87QUFBQSxNQUNkLFdBQVcsT0FBTztBQUFBLE1BQ2xCLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxpQkFBaUIsT0FBTztBQUFBLElBQ3hCLGFBQWE7QUFBQSxJQUNiLFdBQVcsT0FBTztBQUFBLEVBQ3BCO0FBQ0Y7QUFFQSxTQUFTLFdBQTJDLFFBQXNCLFlBQWlEO0FBQ3pILFNBQU8sT0FBTyxJQUFJLFlBQVU7QUFBQSxJQUMxQixHQUFHO0FBQUEsSUFDSCxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVU7QUFBQSxFQUMvQyxFQUFFO0FBQ0o7QUFFQSxTQUFTLGFBQWEsVUFBa0IsWUFBNEI7QUFDbEUsU0FBTyxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksVUFBVTtBQUNuRTtBQUVPLElBQU0sOEJBQU4sY0FBMEMsaUJBQW9EO0FBQUEsRUFDMUYsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsaUJBQWlCO0FBQUEsSUFDeEIsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLElBQ2YsbUJBQW1CO0FBQUEsSUFDbkIsb0JBQW9CO0FBQUEsRUFDdEI7QUFBQSxFQUVTLFVBQVU7QUFBQSxJQUNqQixlQUFlLG1CQUFtQixrQkFBa0I7QUFBQSxFQUN0RDtBQUFBLEVBRUEsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxNQUFNLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3ZELFdBQUssUUFBUSxPQUFPLGFBQWEsR0FBRyxHQUFHLEVBQUUsK0JBQStCO0FBQ3hFLFdBQUssUUFBUSxPQUFPLGtCQUFrQixHQUFHLEdBQUcsRUFBRSxxQ0FBcUM7QUFDbkYsV0FBSyxRQUFRLE9BQU8saUJBQWlCLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUNoRixXQUFLLFFBQVEsT0FBTyxTQUFTLFVBQVUsR0FBRyxHQUFHLEVBQUUsNkNBQTZDO0FBQzVGLFdBQUssUUFBUSxPQUFPLE9BQU8sVUFBVSxHQUFHLEdBQUcsRUFBRSx5Q0FBeUM7QUFDdEYsV0FBSyxRQUFRLE9BQU8sZUFBZSxVQUFVLEdBQUcsR0FBRyxFQUFFLDRDQUE0QztBQUNqRyxXQUFLLFFBQVEsT0FBTyxPQUFPLFdBQVcsS0FBSyxPQUFPLE9BQU8sUUFBUSxPQUFPLE9BQU8sU0FBUyxHQUFHLEVBQUUsdUNBQXVDO0FBQ3BJLFdBQUssUUFBUSxPQUFPLE9BQU8sU0FBUyxPQUFPLFlBQVksR0FBRyxFQUFFLGlDQUFpQztBQUM3RixXQUFLLFFBQVEsT0FBTyxPQUFPLFlBQVksR0FBRyxHQUFHLEVBQUUscUNBQXFDO0FBQ3BGLFdBQUssUUFBUSxPQUFPLGtCQUFrQixLQUFLLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxFQUFFLDRDQUE0QztBQUN6SCxXQUFLLFFBQVEsWUFBWSxPQUFPLFdBQVcsTUFBTSxRQUFXLEdBQUcsRUFBRSwrQkFBK0I7QUFDaEcsV0FBSyxvQkFBb0IsSUFBSSxZQUFZLE9BQU8sVUFBVSxPQUFPLFVBQVU7QUFDM0UsV0FBSyxvQkFBb0IsSUFBSSxVQUFVLE9BQU8sUUFBUSxPQUFPLFVBQVU7QUFDdkUsV0FBSyxvQkFBb0IsSUFBSSxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxVQUFVO0FBQ3ZGLGlCQUFXLFNBQVMsT0FBTyxVQUFVO0FBQ25DLGFBQUssUUFBUSxNQUFNLGdCQUFnQixLQUFLLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFLDBDQUEwQztBQUFBLE1BQ25IO0FBQ0EsaUJBQVcsUUFBUSxPQUFPLFFBQVE7QUFDaEMsYUFBSyxRQUFRLEtBQUssVUFBVSxNQUFNLEdBQUcsRUFBRSxvREFBb0Q7QUFDM0YsYUFBSyxRQUFRLEtBQUssT0FBTyxHQUFHLEdBQUcsRUFBRSxnQ0FBZ0M7QUFDakUsYUFBSyxRQUFRLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxHQUFHLEdBQUcsRUFBRSwwQ0FBMEM7QUFBQSxNQUNwRztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFUSxvQkFBb0IsSUFBWSxPQUFlLFFBQXFDLFlBQTBCO0FBQ3BILFFBQUksV0FBVyxPQUFPO0FBQ3RCLGVBQVcsU0FBUyxRQUFRO0FBQzFCLFdBQUssUUFBUSxNQUFNLFFBQVEsS0FBSyxNQUFNLFFBQVEsWUFBWSxHQUFHLEVBQUUsSUFBSSxLQUFLLHNDQUFzQztBQUM5RyxXQUFLLFFBQVEsTUFBTSxRQUFRLFVBQVUsR0FBRyxFQUFFLElBQUksS0FBSyxpQ0FBaUM7QUFDcEYsaUJBQVcsTUFBTTtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxvQkFBb0IsSUFBSSw0QkFBNEI7OztBQ3RIMUQsSUFBTSx3QkFBTixjQUFvQyxpQkFBOEM7QUFBQSxFQUM5RSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZ0JSLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2pCLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1BLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLFVBQVUsRUFBRSxRQUFRLEdBQUcsUUFBUSxFQUFFO0FBQUEsTUFDakMsZUFBZTtBQUFBLE1BQ2YsaUJBQWlCO0FBQUEsTUFDakIsT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjO0FBQ1osVUFBTTtBQUNOLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxXQUFpQjtBQUNmLGVBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxPQUFPLEdBQW1DO0FBQ3RGLFdBQUssUUFBUSxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsMEJBQTBCO0FBQzdELFdBQUssUUFBUSxNQUFNLGFBQWEsS0FBSyxNQUFNLGNBQWMsS0FBSyxHQUFHLEVBQUUsa0NBQWtDO0FBQ3JHLFdBQUssUUFBUSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsMkJBQTJCO0FBQy9ELFVBQUksTUFBTSxtQkFBbUIsT0FBVyxNQUFLLFFBQVEsTUFBTSxrQkFBa0IsTUFBTSxRQUFRLEdBQUcsRUFBRSwwQ0FBMEM7QUFDMUksV0FBSyxRQUFRLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxFQUFFLG9DQUFvQztBQUNqRixXQUFLLFFBQVEsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFLGlDQUFpQztBQUMxRSxVQUFJLE1BQU0sVUFBVTtBQUNsQixhQUFLLFFBQVEsT0FBTyxVQUFVLE1BQU0sU0FBUyxNQUFNLEtBQUssTUFBTSxTQUFTLFVBQVUsR0FBRyxHQUFHLEVBQUUsOENBQThDO0FBQ3ZJLGFBQUssUUFBUSxPQUFPLFVBQVUsTUFBTSxTQUFTLE1BQU0sS0FBSyxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsUUFBUSxHQUFHLEVBQUUsMkNBQTJDO0FBQUEsTUFDMUo7QUFDQSxXQUFLLFFBQVEsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsb0NBQW9DO0FBQ2pGLFdBQUssUUFBUSxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFBRSxtQ0FBbUM7QUFDL0UsV0FBSyxRQUFRLFlBQVksTUFBTSxLQUFLLE1BQU0sUUFBVyxHQUFHLEVBQUUsd0JBQXdCO0FBQUEsSUFDcEY7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxJQUFNLGNBQWMsSUFBSSxzQkFBc0I7OztBQ2pIckQsSUFBTSxVQUFVLENBQUMsT0FBd0IsR0FBRyxXQUFXLFFBQVE7QUFDL0QsSUFBTSxxQkFBcUIsQ0FBQyxPQUE2QjtBQUN2RCxNQUFJLE9BQU8sY0FBZSxRQUFPO0FBQ2pDLE1BQUksQ0FBQyxHQUFHLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDckMsUUFBTSxZQUFZLEdBQUcsTUFBTSxTQUFTLE1BQU07QUFDMUMsU0FBTyxhQUFhLFVBQVUsVUFBVSxZQUFxQjtBQUMvRDtBQUVBLFNBQVMsZUFBZSxPQUFzRTtBQUM1RixRQUFNLE9BQU8sTUFBTSxPQUNoQixNQUFNLE9BQU8sRUFDYixJQUFJLENBQUMsTUFBTSxpQkFBaUIsRUFBRSxNQUFNLEtBQUssS0FBSyxHQUFHLGFBQWEsY0FBYyxFQUFFLEVBQUUsRUFDaEYsT0FBTyxTQUFPLElBQUksS0FBSyxTQUFTLENBQUM7QUFFcEMsTUFBSSxLQUFLLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFDcEYsU0FBTztBQUNUO0FBRU8sU0FBUyxxQkFBcUIsT0FBNkM7QUFDaEYsTUFBSSxNQUFNLFFBQVEsV0FBVyxFQUFHLE9BQU0sSUFBSSxNQUFNLGtEQUFrRDtBQUNsRyxNQUFJLE1BQU0sUUFBUSxjQUFjLEVBQUcsT0FBTSxJQUFJLE1BQU0scURBQXFEO0FBQ3hHLGFBQVcsQ0FBQyxRQUFRLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxNQUFNLEdBQUc7QUFDMUQsUUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLFdBQVcsS0FBSyxRQUFRLEtBQUssTUFBTSxHQUFHO0FBQ3BELFlBQU0sSUFBSSxNQUFNLHFCQUFxQixNQUFNLHdEQUF3RDtBQUFBLElBQ3JHO0FBQ0EsUUFBSSxDQUFDLE1BQU0sR0FBSSxPQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQkFBb0I7QUFDakYsUUFBSSxNQUFNLFVBQVUsVUFBYSxNQUFNLFNBQVMsR0FBRztBQUNqRCxZQUFNLElBQUksTUFBTSx3QkFBd0IsTUFBTSxvQ0FBb0M7QUFBQSxJQUNwRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE9BQU8sZUFBZSxLQUFLO0FBQ2pDLE1BQUk7QUFDSixNQUFJO0FBQ0osUUFBTSxXQUFnQyxDQUFDO0FBRXZDLE9BQUssUUFBUSxDQUFDLEtBQUssYUFBYTtBQUM5QixVQUFNLFlBQVksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLE9BQU8sZUFBYSxjQUFjLEdBQUcsRUFBRTtBQUN2RSxRQUFJLGNBQWMsR0FBRztBQUNuQixZQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLGtEQUFrRCxTQUFTLEdBQUc7QUFBQSxJQUNwSDtBQUVBLFVBQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsSUFBSSxVQUFRLEtBQUssUUFBUSxPQUFPLEVBQUUsQ0FBQztBQUM3RSxrQkFBYyxLQUFLO0FBQ25CLG1CQUFlLE1BQU07QUFFckIsUUFBSSxLQUFLLFdBQVcsV0FBVztBQUM3QixZQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLG1CQUFtQixLQUFLLE1BQU0sY0FBYyxTQUFTLEdBQUc7QUFBQSxJQUM5RztBQUNBLFFBQUksTUFBTSxXQUFXLFlBQVk7QUFDL0IsWUFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxvQkFBb0IsTUFBTSxNQUFNLGNBQWMsVUFBVSxHQUFHO0FBQUEsSUFDakg7QUFFQSxVQUFNLHFCQUFxQixLQUFLLFNBQVMsSUFBSTtBQUM3QyxlQUFXLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsR0FBWTtBQUN0RSxZQUFNLGFBQWEsb0JBQUksSUFBb0I7QUFDM0MsT0FBQyxHQUFHLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxjQUFjO0FBQ3ZDLGNBQU0sUUFBUSxNQUFNLE9BQU8sTUFBTTtBQUNqQyxZQUFJLENBQUMsT0FBTztBQUNWLGdCQUFNLElBQUksTUFBTSxxQkFBcUIsSUFBSSxXQUFXLGlCQUFpQixNQUFNLFFBQVEsSUFBSSxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsUUFDdko7QUFDQSxZQUFJLE1BQU0sT0FBTyxRQUFTO0FBQzFCLGNBQU0sVUFBVSxtQkFBbUIsTUFBTSxFQUFFO0FBQzNDLGNBQU0sYUFBYSxVQUFVLFVBQVUsUUFBUSxPQUFPLEVBQUUsYUFBYTtBQUNyRSxZQUFJLFlBQVksYUFBYSxLQUFLLFFBQVE7QUFDeEMsZ0JBQU0sSUFBSSxNQUFNLHFCQUFxQixJQUFJLFdBQVcsV0FBVyxNQUFNLEVBQUUsT0FBTyxJQUFJLGVBQWUsU0FBUyxrQkFBa0IsVUFBVSxxQkFBcUIsS0FBSyxTQUFTLFNBQVMsVUFBVTtBQUFBLFFBQzlMO0FBQ0EsaUJBQVMsU0FBUyxHQUFHLFNBQVMsWUFBWSxVQUFVO0FBQ2xELGdCQUFNLFdBQVcsV0FBVyxJQUFJLFlBQVksTUFBTTtBQUNsRCxjQUFJLFVBQVU7QUFDWixrQkFBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksV0FBVyxXQUFXLE1BQU0sRUFBRSxPQUFPLElBQUksZUFBZSxZQUFZLE1BQU0seUJBQXlCLFFBQVEsR0FBRztBQUFBLFVBQ3pKO0FBQUEsUUFDRjtBQUNBLGlCQUFTLFNBQVMsR0FBRyxTQUFTLFlBQVksU0FBVSxZQUFXLElBQUksWUFBWSxRQUFRLE1BQU0sRUFBRTtBQUUvRixpQkFBUyxLQUFLO0FBQUEsVUFDWixJQUFJLE1BQU07QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLGtCQUFrQixNQUFNLFNBQVMsTUFBTSxRQUFRLE1BQU0sRUFBRSxJQUFJLE1BQU0sUUFBUSxhQUFhO0FBQUEsUUFDeEYsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPLFNBQVMsS0FBSyxDQUFDLEdBQUcsTUFDdkIsRUFBRSxxQkFBcUIsRUFBRSxzQkFDekIsRUFBRSxXQUFXLEVBQUUsWUFDZixFQUFFLEtBQUssY0FBYyxFQUFFLElBQUksS0FDM0IsRUFBRSxZQUFZLEVBQUUsU0FBUztBQUM3Qjs7O0FDekZPLElBQU0sSUFBa0I7QUFBQSxFQUM3QixNQUFNLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxLQUFLLEdBQUcsV0FBVyxHQUFHLE9BQU8sRUFBRTtBQUFBLEVBQy9ELE9BQU8sRUFBRSxPQUFPLEdBQUcsV0FBVyxHQUFHLEtBQUssR0FBRyxXQUFXLEdBQUcsT0FBTyxFQUFFO0FBQ2xFO0FBaUpBLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sY0FBYztBQUNwQixJQUFNLGVBQWU7QUFDckIsSUFBTSxlQUFpRDtBQUFBLEVBQ3JELE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFDUjtBQUNBLElBQU0saUJBQW1EO0FBQUEsRUFDdkQsS0FBSztBQUFBLEVBQ0wsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUNiO0FBQ0EsSUFBTSxnQkFBa0Q7QUFBQSxFQUN0RCxxQkFBcUI7QUFBQSxFQUNyQiwrQkFBK0I7QUFBQSxFQUMvQiw2QkFBNkI7QUFBQSxFQUM3QixpQkFBaUI7QUFDbkI7QUFDQSxJQUFNLG1CQUFxRDtBQUFBLEVBQ3pELGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLHFCQUFxQjtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBLEVBQ2hCLGNBQWM7QUFBQSxFQUNkLGlDQUFpQztBQUFBLEVBQ2pDLGdDQUFnQztBQUFBLEVBQ2hDLGtDQUFrQztBQUFBLEVBQ2xDLGlDQUFpQztBQUFBLEVBQ2pDLG1DQUFtQztBQUFBLEVBQ25DLG1DQUFtQztBQUFBLEVBQ25DLHVDQUF1QztBQUFBLEVBQ3ZDLGlDQUFpQztBQUFBLEVBQ2pDLGdDQUFnQztBQUFBLEVBQ2hDLCtCQUErQjtBQUFBLEVBQy9CLHNDQUFzQztBQUFBLEVBQ3RDLHlDQUF5QztBQUFBLEVBQ3pDLDRCQUE0QjtBQUFBLEVBQzVCLG9DQUFvQztBQUN0QztBQUNBLElBQU0sa0JBQWtCLG1GQUFtRixNQUFNLEVBQUUsRUFDaEgsT0FBTyxZQUFVLFdBQVcsZUFBZSxXQUFXLFlBQVk7QUFFckUsU0FBUyxlQUFlLE9BQWUsT0FBcUI7QUFDMUQsTUFBSSxDQUFDLE9BQU8sVUFBVSxLQUFLLEVBQUcsT0FBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLHNCQUFzQjtBQUM5RTtBQUVBLFNBQVMsdUJBQXVCLE9BQWUsT0FBcUI7QUFDbEUsaUJBQWUsT0FBTyxLQUFLO0FBQzNCLE1BQUksU0FBUyxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyw2QkFBNkI7QUFDdkU7QUFFQSxTQUFTLGVBQWUsT0FBMkIsT0FBdUI7QUFDeEUsUUFBTSxRQUFRLFNBQVM7QUFDdkIsTUFBSSxDQUFDLE9BQU8sU0FBUyxLQUFLLEtBQUssU0FBUyxFQUFHLE9BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyxtQ0FBbUM7QUFDdEcsU0FBTztBQUNUO0FBRUEsU0FBUyxpQkFBaUIsSUFBMkI7QUFDbkQsTUFBSSxHQUFHLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDcEMsU0FBTyxhQUFhLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFDeEM7QUFFQSxTQUFTLGtCQUFrQixJQUE0QjtBQUNyRCxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsRUFBRyxRQUFPO0FBQzVDLFFBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRztBQUMvQixNQUFJLFlBQVksRUFBRyxPQUFNLElBQUksTUFBTSxjQUFjLEVBQUUsaUVBQWlFO0FBQ3BILFFBQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxRQUFRO0FBQ25DLFFBQU0sU0FBUyxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLFFBQU0sU0FBUyxlQUFlLE1BQU07QUFDcEMsTUFBSSxDQUFDLE9BQVEsT0FBTSxJQUFJLE1BQU0sY0FBYyxFQUFFLGdDQUFnQyxNQUFNLElBQUk7QUFDdkYsU0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNO0FBQzNCO0FBRUEsU0FBUyxrQkFBa0IsSUFBNEI7QUFDckQsTUFBSSxHQUFHLFdBQVcsU0FBUyxFQUFHLFFBQU87QUFDckMsU0FBTyxjQUFjLEVBQUUsS0FBSyxVQUFVLEVBQUU7QUFDMUM7QUFFQSxTQUFTLGNBQWMsYUFBb0M7QUFDekQsTUFBSSxnQkFBZ0IsY0FBZSxRQUFPO0FBQzFDLE1BQUksQ0FBQyxZQUFZLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDOUMsU0FBTyxZQUFZLE1BQU0sU0FBUyxNQUFNO0FBQzFDO0FBRUEsU0FBUyxvQkFBb0IsSUFBa0I7QUFDN0MsUUFBTSxVQUFVLGNBQWMsRUFBRTtBQUNoQyxNQUFJLFNBQVM7QUFDWCxRQUFJLEVBQUUsV0FBVyxVQUFVLFNBQVUsT0FBTSxJQUFJLE1BQU0scUJBQXFCLEVBQUUsSUFBSTtBQUNoRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLGFBQTZFO0FBQUEsSUFDakYsQ0FBQyxzQkFBc0IsVUFBVSxTQUFTLEtBQUs7QUFBQSxJQUMvQyxDQUFDLHlCQUF5QixhQUFhLFNBQVMsUUFBUTtBQUFBLElBQ3hELENBQUMsd0JBQXdCLFlBQVksU0FBUyxPQUFPO0FBQUEsSUFDckQsQ0FBQyw0QkFBNEIsZ0JBQWdCLFNBQVMsV0FBVztBQUFBLEVBQ25FO0FBQ0EsYUFBVyxDQUFDLFFBQVEsU0FBUyxLQUFLLEtBQUssWUFBWTtBQUNqRCxRQUFJLENBQUMsR0FBRyxXQUFXLE1BQU0sRUFBRztBQUM1QixVQUFNLFdBQVcsR0FBRyxNQUFNLE9BQU8sTUFBTTtBQUN2QyxRQUFJLEVBQUUsWUFBWSxTQUFVLE9BQU0sSUFBSSxNQUFNLFdBQVcsS0FBSyxRQUFRLEVBQUUsSUFBSTtBQUMxRTtBQUFBLEVBQ0Y7QUFDQSxNQUFJLE9BQU8sMkJBQTRCO0FBQ3ZDLE1BQUksR0FBRyxXQUFXLHdCQUF3QixHQUFHO0FBQzNDLFVBQU0sV0FBVyxHQUFHLE1BQU0seUJBQXlCLE1BQU07QUFDekQsUUFBSSxFQUFFLFlBQVksaUJBQWlCLFNBQVUsT0FBTSxJQUFJLE1BQU0sMEJBQTBCLEVBQUUsSUFBSTtBQUM3RjtBQUFBLEVBQ0Y7QUFDQSxNQUFJLEdBQUcsV0FBVyxxQkFBcUIsR0FBRztBQUN4QyxVQUFNLFdBQVcsR0FBRyxNQUFNLHNCQUFzQixNQUFNO0FBQ3RELFFBQUksRUFBRSxZQUFZLGtCQUFrQixTQUFVLE9BQU0sSUFBSSxNQUFNLDJCQUEyQixFQUFFLElBQUk7QUFDL0Y7QUFBQSxFQUNGO0FBQ0EsUUFBTSxJQUFJLE1BQU0sZ0NBQWdDLEVBQUUsSUFBSTtBQUN4RDtBQUVBLFNBQVMsUUFBUSxJQUFvQjtBQUNuQyxRQUFNLFVBQVUsY0FBYyxFQUFFO0FBQ2hDLFNBQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBeUMsRUFBRSxhQUFhO0FBQzdIO0FBRUEsSUFBTSxtQkFBTixNQUF1QjtBQUFBLEVBS3JCLFlBQTZCLFNBQThCO0FBQTlCO0FBQzNCLFNBQUssWUFBWSxRQUFRLGFBQWE7QUFDdEMsMkJBQXVCLEtBQUssV0FBVyxpQkFBaUI7QUFDeEQsUUFBSSxLQUFLLFlBQVksRUFBRyxPQUFNLElBQUksTUFBTSxxQ0FBcUM7QUFDN0UsUUFBSSxDQUFDLFFBQVEsTUFBTSxLQUFLLEVBQUcsT0FBTSxJQUFJLE1BQU0sMEJBQTBCO0FBQ3JFLFFBQUksQ0FBQyxRQUFRLFlBQVksS0FBSyxFQUFHLE9BQU0sSUFBSSxNQUFNLGdDQUFnQztBQUNqRixRQUFJLFFBQVEsUUFBUSxXQUFXLEVBQUcsT0FBTSxJQUFJLE1BQU0sa0RBQWtEO0FBQ3BHLFFBQUksUUFBUSxRQUFRLGNBQWMsRUFBRyxPQUFNLElBQUksTUFBTSxxREFBcUQ7QUFDMUcsU0FBSyxlQUFlLFFBQVEscUJBQXFCLEVBQUUsS0FBSyxLQUFLLHFCQUFxQixDQUFDO0FBQUEsRUFDckY7QUFBQSxFQWJpQjtBQUFBLEVBQ0EsYUFBMEIsQ0FBQztBQUFBLEVBQ3BDLFNBQVM7QUFBQSxFQWFqQixNQUFNLElBQW1CLFNBQXNDO0FBQzdELFNBQUssTUFBTSxpQkFBaUIsRUFBRSxHQUFHLFNBQVMsS0FBSyxRQUFRLE9BQU87QUFDOUQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE9BQU8sSUFBb0IsU0FBc0M7QUFDL0QsU0FBSyxNQUFNLGtCQUFrQixFQUFFLEdBQUcsU0FBUyxLQUFLLFFBQVEsUUFBUTtBQUNoRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxJQUFvQixTQUFzQztBQUMvRCxTQUFLLE1BQU0sa0JBQWtCLEVBQUUsR0FBRyxTQUFTLEtBQUssUUFBUSxRQUFRO0FBQ2hFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxZQUFZLE1BQW9CO0FBQzlCLDJCQUF1QixNQUFNLGtCQUFrQjtBQUMvQyxTQUFLLFVBQVU7QUFDZixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsUUFBUSxNQUFvQjtBQUMxQixXQUFPLEtBQUssWUFBWSxJQUFJO0FBQUEsRUFDOUI7QUFBQSxFQUVBLFFBQVEsTUFBYyxNQUFjLE9BQXFEO0FBQ3ZGLFFBQUksQ0FBQyxLQUFLLEtBQUssRUFBRyxPQUFNLElBQUksTUFBTSxpQ0FBaUM7QUFDbkUsMkJBQXVCLE1BQU0sa0JBQWtCLElBQUksUUFBUTtBQUMzRCxVQUFNLFVBQVUsSUFBSSx3QkFBd0IsTUFBTSxNQUFNLEtBQUssUUFBUSxJQUFJO0FBQ3pFLFVBQU0sT0FBTztBQUNiLFNBQUssVUFBVTtBQUNmLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxTQUFTLE1BQWMsT0FBcUQ7QUFDMUUsV0FBTyxLQUFLLFFBQVEsWUFBWSxNQUFNLEtBQUs7QUFBQSxFQUM3QztBQUFBLEVBRUEsUUFBUSxNQUFjLE9BQXFEO0FBQ3pFLFdBQU8sS0FBSyxRQUFRLFdBQVcsTUFBTSxLQUFLO0FBQUEsRUFDNUM7QUFBQSxFQUVBLEtBQUssU0FBd0IsU0FBaUM7QUFDNUQsU0FBSyxRQUFRLEtBQUssUUFBUSxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsTUFBTTtBQUNwRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsWUFBWSxTQUF3QixTQUF3QztBQUMxRSxTQUFLLGVBQWUsS0FBSyxRQUFRLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxhQUFhO0FBQ2xGLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxLQUFLLFNBQXdCLFNBQWlDO0FBQzVELFNBQUssUUFBUSxLQUFLLFFBQVEsaUJBQWlCLE9BQU8sR0FBRyxTQUFTLE1BQU07QUFDcEUsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLEtBQUssU0FBd0IsU0FBaUM7QUFDNUQsU0FBSyxRQUFRLEtBQUssUUFBUSxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsTUFBTTtBQUNwRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsZ0JBQWdCLFNBQWlCLGFBQXFCLFdBQW1CLElBQW1CLFNBQXNDO0FBQ2hJLFNBQUssTUFBTSxpQkFBaUIsRUFBRSxHQUFHLFNBQVMsVUFBVSxXQUFXLFlBQVksV0FBVyxTQUFTO0FBQUEsRUFDakc7QUFBQSxFQUVBLGlCQUFpQixTQUFpQixhQUFxQixXQUFtQixJQUFvQixTQUFzQztBQUNsSSxTQUFLLE1BQU0sa0JBQWtCLEVBQUUsR0FBRyxTQUFTLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVTtBQUFBLEVBQ25HO0FBQUEsRUFFQSxpQkFBaUIsU0FBaUIsYUFBcUIsV0FBbUIsSUFBb0IsU0FBc0M7QUFDbEksU0FBSyxNQUFNLGtCQUFrQixFQUFFLEdBQUcsU0FBUyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVU7QUFBQSxFQUNuRztBQUFBLEVBRUEsUUFBUSxTQUFpQixTQUFpQixTQUEyQixPQUFxQjtBQUN4RiwyQkFBdUIsUUFBUSxPQUFPLEdBQUcsS0FBSyxRQUFRO0FBQ3RELFVBQU0sTUFBTSxRQUFRLE9BQU87QUFDM0IsbUJBQWUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUNsQyxRQUFJLE1BQU0sRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssMEJBQTBCO0FBQy9ELGFBQVMsUUFBUSxHQUFHLFFBQVEsUUFBUSxPQUFPLFNBQVM7QUFDbEQsV0FBSyxNQUFNLFNBQVMsRUFBRSxRQUFRLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVUsU0FBUyxNQUFNLElBQUksS0FBSztBQUFBLElBQzFHO0FBQUEsRUFDRjtBQUFBLEVBRUEsZUFBZSxTQUFpQixTQUFpQixTQUFrQyxPQUFxQjtBQUN0RywyQkFBdUIsUUFBUSxPQUFPLEdBQUcsS0FBSyxRQUFRO0FBQ3RELFFBQUksUUFBUSxRQUFRLFdBQVcsRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssNENBQTRDO0FBQ3RHLFVBQU0sTUFBTSxRQUFRLE9BQU87QUFDM0IsbUJBQWUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUNsQyxRQUFJLE1BQU0sRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssMEJBQTBCO0FBQy9ELGFBQVMsUUFBUSxHQUFHLFFBQVEsUUFBUSxPQUFPLFNBQVM7QUFDbEQsWUFBTSxTQUFTLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxNQUFNO0FBQzdELFdBQUssTUFBTSxTQUFTLEVBQUUsUUFBUSxPQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVUsU0FBUyxNQUFNLElBQUksS0FBSztBQUFBLElBQzFGO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUSxTQUFpQixTQUFpQixTQUEyQixPQUFxQjtBQUN4RixRQUFJLFFBQVEsUUFBUSxXQUFXLEVBQUcsT0FBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLDRDQUE0QztBQUN0RyxlQUFXLFVBQVUsUUFBUSxTQUFTO0FBQ3BDLFdBQUssTUFBTSxTQUFTLEVBQUUsUUFBUSxPQUFPLFFBQVEsTUFBTSxHQUFHLFNBQVMsS0FBSztBQUFBLElBQ3RFO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUSxTQUFpQixTQUFpQixTQUEyQixPQUFxQjtBQUN4RiwyQkFBdUIsUUFBUSxNQUFNLEdBQUcsS0FBSyxPQUFPO0FBQ3BELDJCQUF1QixRQUFRLE9BQU8sR0FBRyxLQUFLLFFBQVE7QUFDdEQsYUFBUyxTQUFTLEdBQUcsU0FBUyxRQUFRLE1BQU0sVUFBVSxRQUFRLE9BQU87QUFDbkUsV0FBSyxNQUFNLFNBQVMsRUFBRSxRQUFRLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBTSxHQUFHLFVBQVUsUUFBUSxLQUFLO0FBQUEsSUFDL0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFxQjtBQUNuQixVQUFNLG9CQUFvQixLQUFLLFFBQVEscUJBQXFCLEVBQUUsS0FBSztBQUNuRSxVQUFNLGtCQUFrQixLQUFLLFdBQVcsT0FBTyxDQUFDLEtBQUssU0FBUyxLQUFLLElBQUksS0FBSyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3hGLFVBQU0sV0FBVyxLQUFLLElBQUksS0FBSyxRQUFRLGtCQUFrQixHQUFHLENBQUM7QUFDN0QsVUFBTSxPQUFPLE1BQU0sS0FBSyxFQUFFLFFBQVEsU0FBUyxHQUFHLE1BQU0sTUFBTSxLQUFLLEVBQUUsUUFBUSxLQUFLLFlBQVksRUFBRSxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBQ2pILFVBQU0sV0FBVyxNQUFNLEtBQUssRUFBRSxRQUFRLFNBQVMsR0FBRyxNQUFNLG9CQUFJLElBQW9CLENBQUM7QUFDakYsVUFBTSxTQUFTLG9CQUFJLElBQTJDO0FBQzlELFdBQU8sSUFBSSxhQUFhLEVBQUUsSUFBSSxTQUFTLE9BQU8sRUFBRSxDQUFDO0FBQ2pELFdBQU8sSUFBSSxjQUFjLEVBQUUsSUFBSSxnQkFBZ0IsT0FBTyxFQUFFLENBQUM7QUFDekQsVUFBTSxjQUFjLG9CQUFJLElBQUksQ0FBQyxhQUFhLFlBQVksQ0FBQztBQUN2RCxVQUFNLGlCQUFpQixvQkFBSSxJQUFvQjtBQUMvQyxVQUFNLGNBQWMsS0FBSyxTQUFTLG1CQUFtQixDQUFDO0FBQ3RELGVBQVcsUUFBUSxZQUFhLFVBQVMsQ0FBQyxFQUFFLElBQUksS0FBSyxjQUFjLGNBQWM7QUFDakYsU0FBSyxDQUFDLEVBQUUsaUJBQWlCLElBQUk7QUFFN0IsZUFBVyxhQUFhLEtBQUssWUFBWTtBQUN2QyxZQUFNLFNBQVMsS0FBSyxVQUFVLFdBQVcsYUFBYSxjQUFjO0FBQ3BFLGFBQU8sSUFBSSxRQUFRLEVBQUUsSUFBSSxVQUFVLElBQUksT0FBTyxVQUFVLE1BQU0sQ0FBQztBQUMvRCxpQkFBVyxRQUFRLEtBQUssU0FBUyxVQUFVLFFBQVEsVUFBVSxJQUFJLEdBQUc7QUFDbEUsY0FBTSxXQUFXLFNBQVMsVUFBVSxHQUFHLEVBQUUsSUFBSSxLQUFLLFlBQVk7QUFDOUQsWUFBSSxVQUFVO0FBQ1osZ0JBQU0sSUFBSSxNQUFNLGtDQUFrQyxVQUFVLEdBQUcsWUFBWSxLQUFLLFlBQVksa0JBQWtCLFFBQVEsY0FBYyxVQUFVLEVBQUUsSUFBSTtBQUFBLFFBQ3RKO0FBQ0EsaUJBQVMsVUFBVSxHQUFHLEVBQUUsSUFBSSxLQUFLLGNBQWMsVUFBVSxFQUFFO0FBQUEsTUFDN0Q7QUFDQSxXQUFLLFVBQVUsR0FBRyxFQUFFLFVBQVUsTUFBTSxJQUFJO0FBQUEsSUFDMUM7QUFFQSxVQUFNLGFBQWE7QUFBQSxNQUNqQixRQUFRO0FBQUEsRUFBSyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxTQUFPLEdBQUcsSUFBSSxNQUFNLEdBQUcsS0FBSyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDO0FBQUE7QUFBQSxNQUM3SSxRQUFRLE9BQU8sWUFBWSxDQUFDLEdBQUcsT0FBTyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssTUFBTTtBQUFBLFFBQ3hFO0FBQUEsUUFDQSxNQUFNLFVBQVUsSUFBSSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxJQUFJLE1BQU0sSUFBSSxPQUFPLE1BQU0sTUFBTTtBQUFBLE1BQzVFLENBQUMsQ0FBQztBQUFBLE1BQ0YsU0FBUyxLQUFLLFFBQVE7QUFBQSxJQUN4QjtBQUNBLHlCQUFxQixVQUFVO0FBQy9CLFdBQU87QUFBQSxNQUNMLE9BQU8sS0FBSyxRQUFRO0FBQUEsTUFDcEIsYUFBYSxLQUFLLFFBQVE7QUFBQSxNQUMxQixhQUFhLEtBQUssUUFBUTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHNCQUFzQixhQUFxQixXQUFtQixNQUFvQjtBQUNoRixtQkFBZSxXQUFXLGtCQUFrQixXQUFXLGNBQWM7QUFDckUsUUFBSSxZQUFZLEtBQUssYUFBYSxNQUFNO0FBQ3RDLFlBQU0sSUFBSSxNQUFNLGtCQUFrQixXQUFXLGdCQUFnQixTQUFTLHFCQUFxQixPQUFPLENBQUMsaUJBQWlCO0FBQUEsSUFDdEg7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBb0IsYUFBcUIsV0FBbUIsTUFBYyxhQUEyQjtBQUNuRywyQkFBdUIsYUFBYSxrQkFBa0IsV0FBVyxnQkFBZ0I7QUFDakYsU0FBSyxzQkFBc0IsYUFBYSxXQUFXLElBQUk7QUFDdkQsVUFBTSxhQUFhLFlBQVksY0FBYztBQUM3QyxRQUFJLGNBQWMsTUFBTTtBQUN0QixZQUFNLElBQUksTUFBTSxrQkFBa0IsV0FBVyxnQ0FBZ0MsVUFBVSxtQkFBbUIsT0FBTyxDQUFDLGlCQUFpQjtBQUFBLElBQ3JJO0FBQUEsRUFDRjtBQUFBLEVBRVEsTUFBTSxJQUFZLFNBQWdDLEtBQWEsT0FBcUI7QUFDMUYsbUJBQWUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUNsQyxRQUFJLE1BQU0sRUFBRyxPQUFNLElBQUksTUFBTSxHQUFHLEtBQUssMEJBQTBCO0FBQy9ELHdCQUFvQixFQUFFO0FBQ3RCLFVBQU0sT0FBTyxRQUFRLEVBQUU7QUFDdkIsU0FBSyxlQUFlLFFBQVEsUUFBUSxHQUFHLEtBQUssV0FBVyxJQUFJO0FBQzNELFNBQUssV0FBVyxLQUFLO0FBQUEsTUFDbkI7QUFBQSxNQUNBLFFBQVEsUUFBUTtBQUFBLE1BQ2hCO0FBQUEsTUFDQSxPQUFPLGVBQWUsUUFBUSxPQUFPLEtBQUs7QUFBQSxNQUMxQztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVRLGVBQWUsUUFBcUIsT0FBZSxNQUFvQjtBQUM3RSxtQkFBZSxRQUFRLEtBQUs7QUFDNUIsVUFBTSxhQUFhLEtBQUssWUFBWTtBQUNwQyxRQUFJLFNBQVMsS0FBSyxVQUFVLFdBQVksT0FBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksTUFBTSxxQkFBcUIsYUFBYSxDQUFDLGVBQWU7QUFDNUgsVUFBTSxhQUFhLFNBQVMsS0FBSztBQUNqQyxRQUFJLGFBQWEsT0FBTyxLQUFLLFdBQVc7QUFDdEMsWUFBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksTUFBTSxpQkFBaUIsSUFBSSwyQkFBMkIsS0FBSyxTQUFTLGVBQWU7QUFBQSxJQUNqSDtBQUFBLEVBQ0Y7QUFBQSxFQUVRLFNBQVMsUUFBZ0IsTUFBK0M7QUFDOUUsV0FBTyxNQUFNLEtBQUssRUFBRSxRQUFRLEtBQUssR0FBRyxDQUFDLEdBQUcsWUFBWSxFQUFFLGNBQWMsU0FBUyxPQUFPLEVBQUU7QUFBQSxFQUN4RjtBQUFBLEVBRVEsVUFBVSxXQUFzQixhQUEwQixnQkFBNkM7QUFDN0csVUFBTSxNQUFNLEdBQUcsVUFBVSxFQUFFLElBQUksVUFBVSxLQUFLO0FBQzlDLFVBQU0sV0FBVyxlQUFlLElBQUksR0FBRztBQUN2QyxRQUFJLFNBQVUsUUFBTztBQUNyQixVQUFNLFlBQVksaUJBQWlCLFVBQVUsRUFBRTtBQUMvQyxVQUFNLFNBQVMsYUFBYSxDQUFDLFlBQVksSUFBSSxTQUFTLElBQ2xELFlBQ0EsZ0JBQWdCLEtBQUssZUFBYSxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUM7QUFDakUsUUFBSSxDQUFDLE9BQVEsT0FBTSxJQUFJLE1BQU0sd0RBQXdEO0FBQ3JGLGdCQUFZLElBQUksTUFBTTtBQUN0QixtQkFBZSxJQUFJLEtBQUssTUFBTTtBQUM5QixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsSUFBTSwwQkFBTixNQUE2RDtBQUFBLEVBRzNELFlBQ21CLFFBQ0EsTUFDQSxTQUNBLE1BQ2pCO0FBSmlCO0FBQ0E7QUFDQTtBQUNBO0FBQUEsRUFDaEI7QUFBQSxFQVBLLFlBQVk7QUFBQSxFQVNwQixHQUFHLFdBQXdDO0FBQ3pDLFNBQUssT0FBTyxzQkFBc0IsS0FBSyxNQUFNLFdBQVcsS0FBSyxJQUFJO0FBQ2pFLFNBQUssWUFBWTtBQUNqQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsTUFBTSxJQUFtQixTQUFxRDtBQUM1RSxTQUFLLE9BQU8sZ0JBQWdCLEtBQUssU0FBUyxLQUFLLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTztBQUNoRixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxJQUFvQixTQUFxRDtBQUM5RSxTQUFLLE9BQU8saUJBQWlCLEtBQUssU0FBUyxLQUFLLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTztBQUNqRixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxJQUFvQixTQUFxRDtBQUM5RSxTQUFLLE9BQU8saUJBQWlCLEtBQUssU0FBUyxLQUFLLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTztBQUNqRixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsS0FBSyxTQUF3QixTQUFnRDtBQUMzRSxVQUFNLE1BQU0sUUFBUSxPQUFPO0FBQzNCLFNBQUssT0FBTyxvQkFBb0IsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE9BQU8sUUFBUSxRQUFRLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFDekcsU0FBSyxPQUFPLFFBQVEsS0FBSyxVQUFVLEtBQUssV0FBVyxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsWUFBWSxLQUFLLElBQUksUUFBUTtBQUNwSCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsWUFBWSxTQUF3QixTQUF1RDtBQUN6RixVQUFNLE1BQU0sUUFBUSxPQUFPO0FBQzNCLFNBQUssT0FBTyxvQkFBb0IsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE9BQU8sUUFBUSxRQUFRLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFDekcsU0FBSyxPQUFPLGVBQWUsS0FBSyxVQUFVLEtBQUssV0FBVyxpQkFBaUIsT0FBTyxHQUFHLFNBQVMsWUFBWSxLQUFLLElBQUksZUFBZTtBQUNsSSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsS0FBSyxTQUF3QixTQUFnRDtBQUMzRSxTQUFLLE9BQU8sUUFBUSxLQUFLLFVBQVUsS0FBSyxXQUFXLGlCQUFpQixPQUFPLEdBQUcsU0FBUyxZQUFZLEtBQUssSUFBSSxRQUFRO0FBQ3BILFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxLQUFLLFNBQXdCLFNBQWdEO0FBQzNFLFNBQUssT0FBTyxvQkFBb0IsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sUUFBUSxJQUFJO0FBQ2xGLFNBQUssT0FBTyxRQUFRLEtBQUssVUFBVSxLQUFLLFdBQVcsaUJBQWlCLE9BQU8sR0FBRyxTQUFTLFlBQVksS0FBSyxJQUFJLFFBQVE7QUFDcEgsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVPLElBQU0sZUFBb0M7QUFBQSxFQUMvQyxPQUFPLFNBQTRDO0FBQ2pELFdBQU8sSUFBSSxpQkFBaUIsT0FBTztBQUFBLEVBQ3JDO0FBQ0Y7OztBQ2pqQk8sSUFBTSxlQUFlO0FBQUEsRUFDMUIsa0JBQWtCO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2hCLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsbUJBQW1CO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLG1CQUFtQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxtQkFBbUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGO0FBSU8sSUFBTSxxQkFBcUI7QUFBQSxFQUNoQyxhQUFhO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsa0JBQWtCLGtCQUFrQixnQkFBZ0I7QUFBQSxFQUNqRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsVUFBVSxDQUFDLFlBQVksWUFBWSxVQUFVO0FBQUEsRUFDL0M7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQyxtQkFBbUIsbUJBQW1CLGlCQUFpQjtBQUFBLEVBQ3BFO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsaUJBQWlCLGlCQUFpQixlQUFlO0FBQUEsRUFDOUQ7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQyxpQkFBaUIsaUJBQWlCLGVBQWU7QUFBQSxFQUM5RDtBQUNGO0FBSU8sSUFBTSwyQkFBMkIsT0FBTztBQUFBLEVBQzdDLE9BQU8sUUFBUSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sTUFBTTtBQUFBLElBQ3ZEO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTyxPQUFPO0FBQUEsTUFDZCxhQUFhLE9BQU87QUFBQSxNQUNwQixhQUFhLEVBQUUsU0FBUyxPQUFPLFFBQVE7QUFBQSxNQUN2QyxVQUFVLE9BQU87QUFBQSxJQUNuQjtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUM3SEEsSUFBTSxlQUErQztBQUFBLEVBQ25ELEdBQUc7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGdCQUFnQixFQUFFLEtBQUssSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLElBQzFELGNBQWMsRUFBRSxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUN4RCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLEdBQUc7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGdCQUFnQixFQUFFLEtBQUssSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLElBQzFELGNBQWMsRUFBRSxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUN4RCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLEdBQUc7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGdCQUFnQixFQUFFLEtBQUssSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSTtBQUFBLElBQzNELGNBQWMsRUFBRSxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUN4RCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsRUFDaEI7QUFDRjtBQUVBLElBQU0sZ0JBQW9EO0FBQUEsRUFDeEQsV0FBVztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1Asa0JBQWtCLENBQUMsbUJBQW1CLG9CQUFvQixrQkFBa0IscUJBQXFCLG1CQUFtQixzQkFBc0I7QUFBQSxJQUMxSSxnQkFBZ0IsQ0FBQyxxQkFBcUIseUJBQXlCLHNCQUFzQjtBQUFBLElBQ3JGLG1CQUFtQixDQUFDLHdCQUF3QixnQkFBZ0I7QUFBQSxJQUM1RCxrQkFBa0IsQ0FBQyxTQUFTLGVBQWUsUUFBUTtBQUFBLElBQ25ELGFBQWEsQ0FBQyxNQUFNO0FBQUEsSUFDcEIsZ0JBQWdCLENBQUMscUJBQXFCLG9CQUFvQixZQUFZLFdBQVc7QUFBQSxJQUNqRixnQkFBZ0IsQ0FBQyxtQkFBbUIsbUJBQW1CO0FBQUEsSUFDdkQsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLGtCQUFrQixDQUFDLGtCQUFrQixpQkFBaUIscUJBQXFCLHlCQUF5QixzQkFBc0I7QUFBQSxJQUMxSCxnQkFBZ0IsQ0FBQyxxQkFBcUIseUJBQXlCLG1CQUFtQixzQkFBc0I7QUFBQSxJQUN4RyxtQkFBbUIsQ0FBQyxrQkFBa0IsaUJBQWlCLHNCQUFzQjtBQUFBLElBQzdFLGtCQUFrQixDQUFDLFNBQVMsZUFBZSxRQUFRO0FBQUEsSUFDbkQsYUFBYSxDQUFDLE1BQU07QUFBQSxJQUNwQixnQkFBZ0IsQ0FBQyxZQUFZLHFCQUFxQixhQUFhLGVBQWU7QUFBQSxJQUM5RSxnQkFBZ0IsQ0FBQyxrQkFBa0IsbUJBQW1CO0FBQUEsSUFDdEQsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLGtCQUFrQixDQUFDLG1CQUFtQixvQkFBb0IscUJBQXFCLG1CQUFtQiwyQkFBMkIsZUFBZTtBQUFBLElBQzVJLGdCQUFnQixDQUFDLHFCQUFxQix5QkFBeUIsbUJBQW1CLHNCQUFzQjtBQUFBLElBQ3hHLG1CQUFtQixDQUFDLGlCQUFpQixzQkFBc0I7QUFBQSxJQUMzRCxrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsUUFBUTtBQUFBLElBQ25ELGFBQWEsQ0FBQyxNQUFNO0FBQUEsSUFDcEIsZ0JBQWdCLENBQUMsaUJBQWlCLGFBQWEsb0JBQW9CLFdBQVc7QUFBQSxJQUM5RSxnQkFBZ0IsQ0FBQyxtQkFBbUIsbUJBQW1CO0FBQUEsSUFDdkQsZ0JBQWdCLENBQUMsbUJBQW1CO0FBQUEsSUFDcEMsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLGtCQUFrQixDQUFDLGtCQUFrQixrQkFBa0Isd0JBQXdCLG9CQUFvQix1QkFBdUI7QUFBQSxJQUMxSCxnQkFBZ0IsQ0FBQyxxQkFBcUIsaUJBQWlCLDJCQUEyQixpQkFBaUI7QUFBQSxJQUNuRyxtQkFBbUIsQ0FBQyxrQkFBa0Isd0JBQXdCLGVBQWU7QUFBQSxJQUM3RSxrQkFBa0IsQ0FBQyxTQUFTLFVBQVUsYUFBYTtBQUFBLElBQ25ELGFBQWEsQ0FBQyxNQUFNO0FBQUEsSUFDcEIsZ0JBQWdCLENBQUMscUJBQXFCLGFBQWEsb0JBQW9CLFVBQVU7QUFBQSxJQUNqRixnQkFBZ0IsQ0FBQyxtQkFBbUIsbUJBQW1CO0FBQUEsSUFDdkQsZ0JBQWdCLENBQUMsbUJBQW1CO0FBQUEsSUFDcEMsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLGtCQUFrQixDQUFDLG1CQUFtQixvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIseUJBQXlCO0FBQUEsSUFDbkosZ0JBQWdCLENBQUMscUJBQXFCLGlCQUFpQixtQkFBbUIsc0JBQXNCO0FBQUEsSUFDaEcsbUJBQW1CLENBQUMsd0JBQXdCLGVBQWU7QUFBQSxJQUMzRCxrQkFBa0IsQ0FBQyxTQUFTLGVBQWUsUUFBUTtBQUFBLElBQ25ELGFBQWEsQ0FBQyxNQUFNO0FBQUEsSUFDcEIsZ0JBQWdCLENBQUMsaUJBQWlCLG9CQUFvQixxQkFBcUIsV0FBVztBQUFBLElBQ3RGLGdCQUFnQixDQUFDLG1CQUFtQixtQkFBbUI7QUFBQSxJQUN2RCxnQkFBZ0I7QUFBQSxFQUNsQjtBQUNGO0FBRUEsSUFBTSxpQkFBa0U7QUFBQSxFQUN0RSxHQUFHO0FBQUEsSUFDRCxFQUFFLE1BQU0sU0FBUyxhQUFhLENBQUMsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUNyRCxFQUFFLE1BQU0sVUFBVSxVQUFVLE1BQU07QUFBQSxJQUNsQyxFQUFFLE1BQU0sV0FBVyxhQUFhLENBQUMsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUN2RCxFQUFFLE1BQU0sWUFBWSxVQUFVLFNBQVM7QUFBQSxJQUN2QyxFQUFFLE1BQU0sT0FBTztBQUFBLElBQ2YsRUFBRSxNQUFNLGFBQWEsVUFBVSxRQUFRLGFBQWEsQ0FBQyxTQUFTLEVBQUU7QUFBQSxJQUNoRSxFQUFFLE1BQU0sVUFBVSxVQUFVLE9BQU87QUFBQSxFQUNyQztBQUFBLEVBQ0EsR0FBRztBQUFBLElBQ0QsRUFBRSxNQUFNLFNBQVMsYUFBYSxDQUFDLFdBQVcsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUNoRSxFQUFFLE1BQU0sUUFBUSxVQUFVLE9BQU8sYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMscUJBQXFCLFVBQVUsRUFBRTtBQUFBLElBQ3JHLEVBQUUsTUFBTSxVQUFVLFVBQVUsVUFBVSxRQUFRLENBQUMscUJBQXFCLGtCQUFrQixFQUFFO0FBQUEsSUFDeEYsRUFBRSxNQUFNLFdBQVcsYUFBYSxDQUFDLFNBQVMsRUFBRTtBQUFBLElBQzVDLEVBQUUsTUFBTSxhQUFhLFVBQVUsVUFBVSxRQUFRLENBQUMsWUFBWSxxQkFBcUIsa0JBQWtCLEVBQUU7QUFBQSxJQUN2RyxFQUFFLE1BQU0sV0FBVyxhQUFhLENBQUMsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUN2RCxFQUFFLE1BQU0sWUFBWSxVQUFVLE9BQU87QUFBQSxJQUNyQyxFQUFFLE1BQU0sYUFBYSxVQUFVLE9BQU87QUFBQSxJQUN0QyxFQUFFLE1BQU0sVUFBVSxVQUFVLE9BQU87QUFBQSxFQUNyQztBQUFBLEVBQ0EsR0FBRztBQUFBLElBQ0QsRUFBRSxNQUFNLFNBQVMsYUFBYSxDQUFDLFdBQVcsV0FBVyxjQUFjLFNBQVMsRUFBRTtBQUFBLElBQzlFLEVBQUUsTUFBTSxRQUFRLFVBQVUsT0FBTyxhQUFhLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxxQkFBcUIsWUFBWSxrQkFBa0IsRUFBRTtBQUFBLElBQ3pILEVBQUUsTUFBTSxhQUFhLFVBQVUsVUFBVSxRQUFRLENBQUMscUJBQXFCLG9CQUFvQixVQUFVLEVBQUU7QUFBQSxJQUN2RyxFQUFFLE1BQU0sV0FBVyxhQUFhLENBQUMsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUN2RCxFQUFFLE1BQU0sWUFBWSxVQUFVLE9BQU87QUFBQSxJQUNyQyxFQUFFLE1BQU0sV0FBVyxhQUFhLENBQUMsV0FBVyxjQUFjLFNBQVMsRUFBRTtBQUFBLElBQ3JFLEVBQUUsTUFBTSxhQUFhLFVBQVUsT0FBTztBQUFBLElBQ3RDLEVBQUUsTUFBTSxXQUFXLGFBQWEsQ0FBQyxXQUFXLFNBQVMsRUFBRTtBQUFBLElBQ3ZELEVBQUUsTUFBTSxZQUFZLFVBQVUsUUFBUSxRQUFRLENBQUMsYUFBYSxpQkFBaUIsa0JBQWtCLEVBQUU7QUFBQSxJQUNqRyxFQUFFLE1BQU0sV0FBVyxhQUFhLENBQUMsV0FBVyxTQUFTLEVBQUU7QUFBQSxJQUN2RCxFQUFFLE1BQU0sVUFBVSxVQUFVLFFBQVEsUUFBUSxDQUFDLGFBQWEsaUJBQWlCLGFBQWEsa0JBQWtCLEVBQUU7QUFBQSxFQUM5RztBQUNGO0FBRUEsSUFBTSxlQUFlLE9BQU87QUFBQSxFQUMxQixPQUFPLFFBQVEsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxNQUFNO0FBQUEsSUFDckQ7QUFBQSxJQUNBO0FBQUEsTUFDRSxPQUFPLENBQUMsTUFBTSxXQUFXO0FBQUEsTUFDekIsTUFBTSxHQUFHLE9BQU8sSUFBSSxNQUFNLElBQUk7QUFBQSxNQUM5QixTQUFTLGVBQWUsTUFBTSxJQUFJO0FBQUEsSUFDcEM7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLElBQU0sYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUUsS0FBSyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUUsS0FBSyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUUsTUFBTSxPQUFPLEVBQUUsTUFBTSxXQUFXLEVBQUUsTUFBTSxLQUFLLEVBQUUsTUFBTSxXQUFXLEVBQUUsTUFBTSxLQUFLO0FBQy9LLElBQU0sZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxNQUFNLEdBQUc7QUFDOUMsSUFBTSxlQUFlLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxNQUFNLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRSxNQUFNLFNBQVM7QUFDdEYsSUFBTSxjQUFjLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxLQUFLLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRSxLQUFLLFdBQVcsRUFBRSxLQUFLLEtBQUs7QUFDL0YsSUFBTSxlQUFlLENBQUMsRUFBRSxNQUFNLE9BQU8sRUFBRSxNQUFNLFdBQVcsRUFBRSxNQUFNLEtBQUssRUFBRSxNQUFNLFdBQVcsRUFBRSxNQUFNLEtBQUs7QUFFckcsU0FBUyxVQUFVLE1BQW9EO0FBQ3JFLE1BQUksUUFBUTtBQUNaLFdBQVMsUUFBUSxHQUFHLFFBQVEsS0FBSyxRQUFRLFNBQVM7QUFDaEQsYUFBUyxLQUFLLFdBQVcsS0FBSztBQUM5QixZQUFRLEtBQUssS0FBSyxPQUFPLFFBQVE7QUFBQSxFQUNuQztBQUNBLGFBQVc7QUFDWCxTQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQ0wsY0FBUSxLQUFLLEtBQUssUUFBUSxZQUFZLENBQUM7QUFDdkMsVUFBSSxRQUFRO0FBQ1osY0FBUSxLQUFLLEtBQUssUUFBUSxVQUFVLElBQUksUUFBUSxDQUFDO0FBQ2pELGVBQVMsUUFBUSxLQUFLLEtBQUssUUFBUSxVQUFVLEdBQUcsUUFBUSxFQUFFO0FBQzFELGVBQVMsUUFBUSxVQUFVLFFBQVEsS0FBSztBQUFBLElBQzFDO0FBQUEsSUFDQSxLQUFRLE9BQXdCO0FBQzlCLFVBQUksTUFBTSxXQUFXLEVBQUcsT0FBTSxJQUFJLE1BQU0sdUNBQXVDO0FBQy9FLGFBQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFBQSxJQUNyRDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLFNBQVMsa0JBQWtCLElBQW9CO0FBQzdDLE1BQUksR0FBRyxXQUFXLGdCQUFnQixFQUFHLFFBQU87QUFDNUMsUUFBTSxDQUFDLFFBQVEsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHO0FBQ3JDLFNBQU8saUJBQWlCLE1BQU0sSUFBSSxNQUFNO0FBQzFDO0FBRUEsU0FBUyxxQkFBcUIsSUFBdUI7QUFDbkQsUUFBTSxZQUFZLGtCQUFrQixFQUFFO0FBQ3RDLE1BQUksVUFBVSxXQUFXLG9CQUFvQixHQUFHO0FBQzlDLFVBQU0sU0FBUyxVQUFVLFFBQVEsVUFBVSxNQUFNLHFCQUFxQixNQUFNLENBQW1DO0FBQy9HLFdBQU8sT0FBTyxXQUFXLFlBQVksSUFBSSxPQUFPLFdBQVcsV0FBVyxJQUFJO0FBQUEsRUFDNUU7QUFDQSxNQUFJLFVBQVUsV0FBVyxzQkFBc0IsR0FBRztBQUNoRCxVQUFNLFNBQVMsWUFBWSxRQUFRLFVBQVUsTUFBTSx1QkFBdUIsTUFBTSxDQUFxQztBQUNySCxXQUFPLE9BQU8sV0FBVyxZQUFZLElBQUksT0FBTyxXQUFXLFdBQVcsSUFBSTtBQUFBLEVBQzVFO0FBQ0EsTUFBSSxVQUFVLFdBQVcsdUJBQXVCLEdBQUc7QUFDakQsVUFBTSxTQUFTLGFBQWEsUUFBUSxVQUFVLE1BQU0sd0JBQXdCLE1BQU0sQ0FBc0M7QUFDeEgsV0FBTyxPQUFPLFdBQVcsWUFBWSxJQUFJLE9BQU8sV0FBVyxXQUFXLElBQUk7QUFBQSxFQUM1RTtBQUNBLE1BQUksVUFBVSxXQUFXLDBCQUEwQixHQUFHO0FBQ3BELFVBQU0sU0FBUyxnQkFBZ0IsUUFBUSxVQUFVLE1BQU0sMkJBQTJCLE1BQU0sQ0FBeUM7QUFDakksV0FBTyxPQUFPLFdBQVcsYUFBYSxJQUFJO0FBQUEsRUFDNUM7QUFDQSxTQUFPO0FBQ1Q7QUFFQSxTQUFTLG9CQUFvQixJQUE4QjtBQUN6RCxRQUFNLFlBQVksT0FBTyxXQUFXLE9BQU8sZ0JBQWdCLGFBQWEsR0FBRyxRQUFRLFlBQVksRUFBRTtBQUNqRyxNQUFJLGNBQWMsT0FBUSxRQUFPO0FBQ2pDLE1BQUksY0FBYyxTQUFVLFFBQU87QUFDbkMsU0FBTztBQUNUO0FBRUEsU0FBUyxZQUFZLElBQW9CO0FBQ3ZDLFFBQU0sWUFBWSxrQkFBa0IsRUFBRTtBQUN0QyxNQUFJLFVBQVUsV0FBVyxvQkFBb0IsR0FBRztBQUM5QyxVQUFNLFNBQVMsVUFBVSxRQUFRLFVBQVUsTUFBTSxxQkFBcUIsTUFBTSxDQUFtQztBQUMvRyxVQUFNQyxTQUFRLE9BQU8sT0FBTyxDQUFDO0FBQzdCLFdBQU9BLE9BQU0sb0JBQW9CQSxPQUFNLFNBQVNBLE9BQU0sa0JBQWtCQSxPQUFNLGNBQWMsSUFBSUEsT0FBTSxTQUFTO0FBQUEsRUFDakg7QUFDQSxNQUFJLFVBQVUsV0FBVyxzQkFBc0IsR0FBRztBQUNoRCxVQUFNLFNBQVMsWUFBWSxRQUFRLFVBQVUsTUFBTSx1QkFBdUIsTUFBTSxDQUFxQztBQUNySCxXQUFPLE9BQU8sU0FBUyxPQUFPLGFBQWEsT0FBTyxtQkFBbUIsT0FBTyxXQUFXLE9BQU87QUFBQSxFQUNoRztBQUNBLE1BQUksVUFBVSxXQUFXLHVCQUF1QixHQUFHO0FBQ2pELFVBQU0sU0FBUyxhQUFhLFFBQVEsVUFBVSxNQUFNLHdCQUF3QixNQUFNLENBQXNDO0FBQ3hILFdBQU8sT0FBTyxhQUFhLE1BQU0sT0FBTyxTQUFTO0FBQUEsRUFDbkQ7QUFDQSxNQUFJLFVBQVUsV0FBVywwQkFBMEIsR0FBRztBQUNwRCxVQUFNLFNBQVMsZ0JBQWdCLFFBQVEsVUFBVSxNQUFNLDJCQUEyQixNQUFNLENBQXlDO0FBQ2pJLFVBQU1BLFNBQVEsT0FBTyxPQUFPLENBQUM7QUFDN0IsV0FBT0EsT0FBTSxVQUFVQSxPQUFNLFdBQVdBLE9BQU0sZ0JBQWdCQSxPQUFNO0FBQUEsRUFDdEU7QUFDQSxTQUFPO0FBQ1Q7QUFFQSxTQUFTLFlBQVksSUFBb0I7QUFDdkMsUUFBTSxXQUFXLE9BQU8sV0FBVyxPQUFPLGdCQUFnQixhQUFhLEdBQUcsUUFBUSxZQUFZLEVBQUU7QUFDaEcsUUFBTSxRQUFRLFVBQVUsUUFBUSxRQUEwQztBQUMxRSxTQUFPLE1BQU0sU0FBUyxJQUFJLE1BQU0sUUFBUSxLQUFLLE1BQU0sYUFBYSxNQUFNLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTTtBQUMxRztBQUVBLFNBQVMsZ0JBQWdCLElBQW9CO0FBQzNDLFFBQU0sV0FBVyxPQUFPLFdBQVcsT0FBTyxnQkFBZ0IsYUFBYSxHQUFHLFFBQVEsWUFBWSxFQUFFO0FBQ2hHLFNBQU8sVUFBVSxRQUFRLFFBQTBDLEVBQUU7QUFDdkU7QUFFQSxTQUFTLFlBQVksSUFBb0I7QUFDdkMsTUFBSSxPQUFPLHVCQUF1QixPQUFPLDRCQUE0QjtBQUNuRSxXQUFPLGlCQUFpQixRQUFRLGFBQWEsYUFBYTtBQUFBLEVBQzVEO0FBQ0EsTUFBSSxPQUFPLCtCQUErQixPQUFPLG9DQUFvQztBQUNuRixXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU8sWUFBWSxFQUFFO0FBQ3ZCO0FBRUEsU0FBUyxjQUE4QjtBQUNyQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsSUFDUCxpQkFBaUIsb0JBQUksSUFBSTtBQUFBLElBQ3pCLGlCQUFpQixvQkFBSSxJQUFJO0FBQUEsSUFDekIsaUJBQWlCLG9CQUFJLElBQUk7QUFBQSxJQUN6QixVQUFVLENBQUM7QUFBQSxJQUNYLFVBQVUsQ0FBQztBQUFBLElBQ1gsY0FBYztBQUFBLElBQ2Qsa0JBQWtCLE9BQU87QUFBQSxFQUMzQjtBQUNGO0FBRUEsU0FBUyxZQUFZLE1BQXlCLFNBQThCO0FBQzFFLE1BQUksS0FBSyxLQUFNLFFBQU8sS0FBSztBQUMzQixNQUFJLEtBQUssU0FBUyxRQUFTLFFBQU8sUUFBUTtBQUMxQyxNQUFJLEtBQUssU0FBUyxVQUFXLFFBQU8sUUFBUTtBQUM1QyxNQUFJLEtBQUssU0FBUyxPQUFRLFFBQU8sUUFBUTtBQUN6QyxNQUFJLEtBQUssU0FBUyxPQUFRLFFBQU8sUUFBUSxhQUFhO0FBQ3RELFNBQU8sUUFBUSxhQUFhLEtBQUssWUFBWSxRQUFRO0FBQ3ZEO0FBRUEsU0FBUyxhQUFhLFFBQXNCLE1BQWtCLE1BQWlCQyxRQUF1QixLQUF5QjtBQUM3SCxNQUFJLFNBQVMsVUFBVyxRQUFPO0FBQy9CLFFBQU0sVUFBVSxTQUFTLFlBQ3JCLE9BQU8saUJBQ1AsU0FBUyxlQUNULE9BQU8sb0JBQ1AsT0FBTztBQUNYLFFBQU0sV0FBVyxTQUFTLGVBQ3RCLFVBQ0EsU0FBUyxZQUNULFFBQVEsT0FBTyxZQUFVLENBQUMsa0JBQWtCLE1BQU0sRUFBRSxXQUFXLHVCQUF1QixDQUFDLElBQ3ZGO0FBQ0osUUFBTSxPQUFPLFNBQVMsU0FBUyxJQUFJLFdBQVc7QUFDOUMsUUFBTSxXQUFXLEtBQUssT0FBTyxZQUFVLHFCQUFxQixNQUFNLEtBQUssSUFBSTtBQUMzRSxRQUFNLGdCQUFnQixTQUFTLFNBQVMsSUFBSSxXQUFXLEtBQUssT0FBTyxZQUFVLHFCQUFxQixNQUFNLE1BQU0sQ0FBQztBQUMvRyxNQUFJLGNBQWMsV0FBVyxHQUFHO0FBQzlCLElBQUFBLE9BQU0sU0FBUyxLQUFLLE1BQU0sSUFBSSxrQ0FBa0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxHQUFHO0FBQzFGLFdBQU87QUFBQSxFQUNUO0FBQ0EsUUFBTSxTQUFTLEtBQUssSUFBSSxjQUFjLFNBQVMsR0FBR0EsT0FBTSxLQUFLO0FBQzdELFFBQU0sYUFBYSxjQUFjLE1BQU0sTUFBTSxFQUFFLE9BQU8sY0FBYyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3BGLFNBQU8sSUFBSSxLQUFLLFVBQVU7QUFDNUI7QUFFQSxTQUFTLGFBQWEsU0FBOEIsUUFBc0IsTUFBeUIsTUFBaUIsTUFBY0EsUUFBdUIsS0FBb0Q7QUFDM00sUUFBTSxRQUFRLEtBQUssZUFBZSxDQUFDO0FBQ25DLFFBQU0sVUFBVSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUUsTUFBTSxLQUFLLEVBQUUsS0FBSyxXQUFXLEVBQUUsTUFBTSxXQUFXLEVBQUUsS0FBSyxXQUFXLEVBQUUsTUFBTSxTQUFTO0FBQ2xILFFBQU0sVUFBb0IsQ0FBQztBQUMzQixRQUFNLFVBQW9CLENBQUM7QUFDM0IsTUFBSSxNQUFNO0FBQ1YsYUFBVyxRQUFRLE9BQU87QUFDeEIsUUFBSSxTQUFTLFdBQVc7QUFDdEIsWUFBTSxrQkFBa0IsS0FBSyxhQUFhLFNBQVMsU0FBUyxLQUFLO0FBQ2pFLFVBQUksbUJBQW1CQSxPQUFNLFFBQVEsT0FBTyxtQkFBbUIsR0FBRztBQUNoRSxnQkFBUSxHQUFHLEdBQUcsRUFBRSxPQUFPLHFCQUFxQixFQUFFLFFBQVEsU0FBUyxNQUFNLEtBQUssUUFBUSxNQUFNLEVBQUUsQ0FBQztBQUMzRixRQUFBQSxPQUFNLGVBQWUsWUFBWSxtQkFBbUI7QUFDcEQsUUFBQUEsT0FBTSxnQkFBZ0IsSUFBSSwwQkFBMEI7QUFDcEQsZ0JBQVEsS0FBSywwQkFBMEI7QUFBQSxNQUN6QztBQUFBLElBQ0YsT0FBTztBQUNMLFlBQU0sU0FBUyxhQUFhLFFBQVEsTUFBTSxNQUFNQSxRQUFPLEdBQUc7QUFDMUQsVUFBSSxRQUFRO0FBQ1YsZ0JBQVEsR0FBRyxHQUFHLEVBQUUsT0FBTyxRQUFRLEVBQUUsUUFBUSxRQUFRLE1BQU0sUUFBUSxNQUFNLEVBQUUsQ0FBQztBQUN4RSxRQUFBQSxPQUFNLGVBQWUsWUFBWSxNQUFNO0FBQ3ZDLFFBQUFBLE9BQU0sZ0JBQWdCLElBQUksa0JBQWtCLE1BQU0sQ0FBQztBQUNuRCxnQkFBUSxLQUFLLGtCQUFrQixNQUFNLENBQUM7QUFBQSxNQUN4QztBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksUUFBUSxLQUFLLEtBQUssU0FBUyxXQUFXO0FBQ3hDLFVBQU0sU0FBUztBQUNmLFVBQU0sWUFBWSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzFELFlBQVEsR0FBRyxTQUFTLEVBQUUsT0FBTyxRQUFRLEVBQUUsUUFBUUEsT0FBTSxRQUFRLE1BQU0sSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JHLElBQUFBLE9BQU0sZUFBZSxZQUFZLE1BQU07QUFDdkMsSUFBQUEsT0FBTSxnQkFBZ0IsSUFBSSxNQUFNO0FBQ2hDLFlBQVEsS0FBSyxNQUFNO0FBQUEsRUFDckI7QUFDQSxTQUFPLEVBQUUsU0FBUyxRQUFRO0FBQzVCO0FBRUEsU0FBUyxlQUFlLFFBQXNCLE1BQWlCLFFBQStCO0FBQzVGLFFBQU0saUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sUUFBTSxvQkFBb0IsRUFBRSxLQUFLLElBQUk7QUFDM0YsUUFBTSxPQUFPLGVBQWUsU0FBUyxJQUFJLGlCQUFpQixPQUFPO0FBQ2pFLFFBQU0sYUFBYSxLQUFLLE9BQU8sUUFBTSxZQUFZLEVBQUUsS0FBSyxTQUFTLENBQUM7QUFDbEUsU0FBTyxXQUFXLFdBQVcsU0FBUyxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ3BEO0FBRUEsU0FBUyxpQkFBaUIsUUFBc0IsTUFBaUIsVUFBeUIsS0FBYSxRQUErQjtBQUNwSSxNQUFJLFNBQVMsTUFBTSxhQUFhLFNBQVMsYUFBYSxXQUFXO0FBQy9ELFVBQU0sV0FBVyxPQUFPLGlCQUFpQixTQUFTLGFBQWE7QUFDL0QsVUFBTSxZQUFZLE9BQU8saUJBQWlCLFNBQVMsUUFBUTtBQUMzRCxRQUFJLGFBQWEsTUFBTSxNQUFNLEVBQUcsUUFBTztBQUN2QyxRQUFJLFNBQVUsUUFBTztBQUFBLEVBQ3ZCO0FBQ0EsU0FBTyxlQUFlLFFBQVEsTUFBTSxNQUFNO0FBQzVDO0FBRUEsU0FBUyxnQkFBZ0IsUUFBc0IsTUFBaUJBLFFBQTZDO0FBQzNHLFFBQU0sa0JBQWtCLE9BQU8sWUFBWSxPQUFPLFFBQU0sb0JBQW9CLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFDM0YsTUFBSSxnQkFBZ0IsV0FBVyxHQUFHO0FBQ2hDLElBQUFBLE9BQU0sU0FBUyxLQUFLLGtDQUFrQyxPQUFPLEtBQUssWUFBWSxJQUFJLEdBQUc7QUFDckYsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPLGdCQUFnQkEsT0FBTSxlQUFlLGdCQUFnQixNQUFNO0FBQ3BFO0FBRUEsU0FBUyxhQUFhLE1BQWlCQSxRQUF1QixVQUEyQjtBQUN2RixRQUFNLFlBQVksU0FBUyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUk7QUFDbkQsUUFBTSxhQUFhLFNBQVMsSUFBSSxLQUFLO0FBQ3JDLFNBQU9BLE9BQU0sZUFBZSxhQUFhLFdBQVdBLE9BQU0sb0JBQW9CO0FBQ2hGO0FBRUEsU0FBUyxnQkFBZ0IsT0FBc0IsS0FBVSxjQUE4QztBQUNyRyxNQUFJLFVBQVUsb0JBQXFCLFFBQU87QUFDMUMsTUFBSSxVQUFVLG1CQUFvQixRQUFPO0FBQ3pDLE1BQUksVUFBVSxZQUFhLFFBQU8sSUFBSSxLQUFLLElBQUksTUFBTSxZQUFZLE1BQU0sR0FBRyxZQUFZLElBQUksYUFBYSxNQUFNLEdBQUcsWUFBWTtBQUM1SCxNQUFJLFVBQVUsZ0JBQWlCLFFBQU8sQ0FBQyxFQUFFLEtBQUssV0FBVyxFQUFFLE1BQU0sV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLE1BQU0sR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQztBQUNwSixNQUFJLFVBQVUsWUFBYSxRQUFPLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLENBQUMsRUFBRSxNQUFNLEtBQUs7QUFDeEYsU0FBTyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLEVBQUUsTUFBTSxTQUFTO0FBQ25FO0FBRUEsU0FBUyxlQUFlLE9BQXNCLFNBQXlEO0FBQ3JHLFFBQU0sT0FBTyxnQkFBZ0IsS0FBSztBQUNsQyxTQUFPLFFBQVEsT0FBTyxZQUFVLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDeEQ7QUFFQSxTQUFTLHNCQUFzQixPQUFzQixTQUF5RDtBQUM1RyxRQUFNLE9BQU8sZ0JBQWdCLEtBQUs7QUFDbEMsUUFBTSxXQUFXLG9CQUFJLElBQVk7QUFDakMsUUFBTSxXQUEwQixDQUFDO0FBQ2pDLGFBQVcsVUFBVSxTQUFTO0FBQzVCLFVBQU0sUUFBUSxNQUFNLEtBQUssRUFBRSxRQUFRLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxTQUFTLE1BQU07QUFDekUsUUFBSSxNQUFNLEtBQUssVUFBUSxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUc7QUFDNUMsYUFBUyxLQUFLLE1BQU07QUFDcEIsZUFBVyxRQUFRLE1BQU8sVUFBUyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLFNBQU87QUFDVDtBQUVBLFNBQVMsY0FBYyxTQUE4QixRQUFzQixNQUF5QixNQUFpQixTQUFzQkEsUUFBdUIsS0FBVSxXQUFXLEdBQTBDO0FBQy9OLFFBQU0sV0FBVyxLQUFLLFlBQVk7QUFDbEMsUUFBTSxlQUFlLFFBQVEsZUFBZSxRQUFRLElBQUlBLE9BQU0sZUFBZSxhQUFhLFNBQVMsT0FBTztBQUMxRyxRQUFNLGFBQWEsS0FBSyxVQUFVLE9BQU87QUFDekMsUUFBTSxTQUFTLFNBQVMsS0FBSyxhQUFhLFNBQ3RDLENBQUMsR0FBRyxZQUFZLGFBQWEsYUFBYSxlQUFlLElBQ3pELFFBQVEsS0FBSyxhQUFhLFNBQzFCLENBQUMsR0FBRyxZQUFZLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixlQUFlLElBQ3ZGO0FBQ0osTUFBSSxNQUFNO0FBQ1YsTUFBSSxnQkFBZ0I7QUFDcEIsUUFBTSxVQUFVLG9CQUFJLElBQVk7QUFDaEMsUUFBTSxXQUFXLFlBQVksTUFBTSxPQUFPO0FBQzFDLFNBQU8sTUFBTSxXQUFXLEdBQUc7QUFDekIsVUFBTSxRQUFRLElBQUksS0FBSyxNQUFNO0FBQzdCLFVBQU0sVUFBVSxnQkFBZ0IsT0FBTyxLQUFLLFFBQVEsWUFBWTtBQUNoRSxVQUFNLGtCQUFrQixLQUFLLElBQUksR0FBRyxlQUFlLGFBQWE7QUFDaEUsVUFBTSxXQUFXQSxPQUFNLFNBQVM7QUFDaEMsVUFBTSx3QkFBd0I7QUFBQSxNQUM1QixXQUFXLEtBQUssT0FBTyxXQUFXLFlBQVksR0FBRTtBQUFBLE1BQ2hELFdBQVcsS0FBSyxPQUFPLFdBQVcsWUFBWSxJQUFHO0FBQUEsSUFDbkQ7QUFDQSxVQUFNLG9CQUFvQixTQUFTLEtBQzlCLEtBQUssU0FBUyxZQUNkQSxPQUFNLGVBQWUsc0JBQXNCLFVBQzNDLE9BQU8sc0JBQXNCQSxPQUFNLFlBQVksS0FDL0MsYUFBYSxNQUFNQSxRQUFPLFFBQVE7QUFDdkMsVUFBTSxnQkFBZ0IsUUFBUSxLQUN6QixhQUFhLE1BQU1BLFFBQU8sUUFBUSxLQUNsQyxnQkFBZ0IsZUFBZSxTQUM5QixVQUFVLGVBQWdCLGFBQWEsVUFBVSxrQkFBa0IsTUFBTSxNQUFNO0FBQ3JGLFVBQU0saUJBQWlCLHFCQUFxQjtBQUM1QyxVQUFNLFlBQVksaUJBQWlCLGdCQUFnQixRQUFRLE1BQU1BLE1BQUssSUFBSTtBQUMxRSxVQUFNLFFBQVEsaUJBQ1YsYUFBYSxpQkFBaUIsUUFBUSxNQUFNLFVBQVUsS0FBSyxLQUFLLElBQUksR0FBRyxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsUUFBUSxNQUFNLENBQUMsQ0FBQyxJQUNySCxpQkFBaUIsUUFBUSxNQUFNLFVBQVUsS0FBSyxLQUFLLElBQUksR0FBRyxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsUUFBUSxNQUFNLENBQUMsQ0FBQztBQUM1RyxRQUFJLHFCQUFxQixXQUFXO0FBQ2xDLFlBQU0sU0FBU0EsT0FBTSxlQUFlLE1BQU0sSUFBSSxFQUFFLEtBQUssWUFBWSxFQUFFLE1BQU07QUFDekUsY0FBUSxHQUFHLEdBQUcsRUFBRSxNQUFNLFdBQVcsRUFBRSxPQUFPLENBQUM7QUFDM0MsdUJBQWlCLFlBQVksU0FBUztBQUN0QyxNQUFBQSxPQUFNO0FBQ04sTUFBQUEsT0FBTSxtQkFBbUI7QUFDekIsY0FBUSxJQUFJLGNBQWMsVUFBVSxnQkFBZ0IsU0FBUyxTQUFTLEVBQUU7QUFDeEUsYUFBTztBQUNQO0FBQUEsSUFDRjtBQUNBLFFBQUksaUJBQWlCLFdBQVc7QUFDOUIsWUFBTSxTQUFTQSxPQUFNLGVBQWUsTUFBTSxJQUFJLEVBQUUsS0FBSyxZQUFZLEVBQUUsTUFBTTtBQUN6RSxjQUFRLEdBQUcsR0FBRyxFQUFFLE1BQU0sV0FBVyxFQUFFLE9BQU8sQ0FBQztBQUMzQyx1QkFBaUIsWUFBWSxTQUFTO0FBQ3RDLE1BQUFBLE9BQU07QUFDTixNQUFBQSxPQUFNLG1CQUFtQjtBQUN6QixjQUFRLElBQUksY0FBYyxVQUFVLGdCQUFnQixTQUFTLFNBQVMsRUFBRTtBQUN4RSxhQUFPO0FBQ1A7QUFBQSxJQUNGO0FBQ0EsVUFBTSxpQkFBaUIsZUFBZSxPQUFPLE9BQU87QUFDcEQsVUFBTSxZQUFZLGVBQWUsU0FBUyxJQUFJLFFBQVE7QUFDdEQsVUFBTSxjQUFjLHNCQUFzQixXQUFXLGVBQWUsU0FBUyxJQUFJLGlCQUFpQixlQUFlLFNBQVMsT0FBTyxDQUFDO0FBQ2xJLFVBQU0sU0FBUyxZQUFZLFNBQVMsSUFBSSxZQUFZO0FBQ3BELFVBQU0sYUFBYSxTQUFTLEtBQUssYUFBYSxVQUFVLGFBQWEsU0FBUyxJQUFJO0FBQ2xGLFFBQUksVUFBVSxjQUFjLFlBQVksV0FBVyxHQUFHO0FBQ3BELFlBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELGNBQVEsR0FBRyxHQUFHLEVBQUUsS0FBSyxXQUFXLEVBQUUsUUFBUSxZQUFZLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDakUsYUFBTyxRQUFRO0FBQ2YsdUJBQWlCLFlBQVksU0FBUyxJQUFJO0FBQUEsSUFDNUMsV0FBVyxVQUFVLG1CQUFtQixVQUFVLGVBQWdCLFNBQVMsS0FBSyxhQUFhLFVBQVUsWUFBWSxTQUFTLEdBQUk7QUFDOUgsY0FBUSxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVcsRUFBRSxTQUFTLFlBQVksQ0FBQztBQUN4RCxhQUFPLGFBQWEsUUFBUSxJQUFJO0FBQ2hDLHVCQUFpQjtBQUFBLElBQ25CLE9BQU87QUFDTCxZQUFNLFFBQVEsS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsV0FBVyxNQUFNLENBQUMsQ0FBQztBQUMxRCxjQUFRLEdBQUcsR0FBRyxFQUFFLFlBQVksV0FBVyxFQUFFLFNBQVMsYUFBYSxNQUFNLENBQUM7QUFDdEUsYUFBTyxRQUFRO0FBQ2YsdUJBQWlCLFlBQVksU0FBUyxJQUFJO0FBQUEsSUFDNUM7QUFDQSxZQUFRLElBQUksY0FBYyxVQUFVLGdCQUFnQixTQUFTLFNBQVMsRUFBRTtBQUFBLEVBQzFFO0FBQ0EsYUFBVyxTQUFTLFFBQVMsQ0FBQUEsT0FBTSxnQkFBZ0IsSUFBSSxLQUFLO0FBQzVELFNBQU8sRUFBRSxRQUFRLGVBQWUsU0FBUyxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ3hEO0FBRUEsU0FBUyxZQUFZLFNBQXVCLFFBQXNCLE1BQXlCLE1BQWlCLFNBQXNCQSxRQUF1QixLQUFnQjtBQUN2SyxRQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU87QUFDdEMsUUFBTSxvQkFBb0JBLE9BQU07QUFDaEMsTUFBSSxnQkFBMEIsQ0FBQztBQUMvQixNQUFJLGdCQUEwQixDQUFDO0FBQy9CLE1BQUksZ0JBQWdCO0FBQ3BCLE1BQUksa0JBQTRCLENBQUM7QUFFakMsTUFBSSxLQUFLLFNBQVMsUUFBUTtBQUN4QixZQUFRLFFBQVEsSUFBSTtBQUFBLEVBQ3RCLE9BQU87QUFDTCxVQUFNLGNBQWMsS0FBSyxTQUFTLFdBQVcsS0FBSyxTQUFTLFlBQVksWUFBWTtBQUNuRixZQUFRLFFBQVEsYUFBYSxNQUFNLGFBQVc7QUFDNUMsWUFBTSxVQUFVLGFBQWEsU0FBUyxRQUFRLE1BQU0sTUFBTSxNQUFNQSxRQUFPLEdBQUc7QUFDMUUsc0JBQWdCLFFBQVE7QUFDeEIsc0JBQWdCLFFBQVE7QUFDeEIsVUFBSSxLQUFLLFNBQVMsV0FBVyxLQUFLLFNBQVMsV0FBVztBQUNwRCxjQUFNLG1CQUFtQixLQUFLLElBQUksSUFBSSxLQUFLLGFBQWEsVUFBVSxLQUFLLElBQUksQ0FBQztBQUM1RSxjQUFNLFdBQVcsY0FBYyxTQUFTLFFBQVEsTUFBTSxNQUFNLFNBQVNBLFFBQU8sS0FBSyxnQkFBZ0I7QUFDakcsd0JBQWdCLFNBQVM7QUFDekIsMEJBQWtCLFNBQVM7QUFBQSxNQUM3QixXQUFXLEtBQUssU0FBUyxhQUFhLE9BQU8sR0FBRztBQUM5QyxjQUFNLFFBQVEsT0FBTyxpQkFBaUIsQ0FBQztBQUN2QyxnQkFBUSxHQUFHLE9BQU8sQ0FBQyxFQUFFLE1BQU0sT0FBTyxFQUFFLFFBQVEsSUFBSSxLQUFLLFVBQVUsRUFBRSxDQUFDO0FBQ2xFLHdCQUFnQixZQUFZLEtBQUs7QUFDakMsMEJBQWtCLENBQUMsVUFBVSxVQUFVLGdCQUFnQixTQUFTLEtBQUssRUFBRTtBQUN2RSxRQUFBQSxPQUFNLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLENBQUM7QUFBQSxNQUM5QztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFFQSxFQUFBQSxPQUFNLFVBQVU7QUFDaEIsRUFBQUEsT0FBTTtBQUNOLEVBQUFBLE9BQU0sU0FBUyxLQUFLO0FBQUEsSUFDbEIsTUFBTSxLQUFLO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVSxLQUFLLFlBQVk7QUFBQSxJQUMzQixnQkFBZ0IsT0FBTyxjQUFjLFFBQVEsQ0FBQyxDQUFDO0FBQUEsSUFDL0MscUJBQXFCLE9BQU8sa0JBQWtCLFFBQVEsQ0FBQyxDQUFDO0FBQUEsSUFDeEQsaUJBQWlCO0FBQUEsSUFDakIsaUJBQWlCO0FBQUEsSUFDakI7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLFNBQVMsZ0JBQWdCLFNBQThDO0FBQ3JFLFFBQU0sVUFBVSxhQUFhLFFBQVEsSUFBSTtBQUN6QyxRQUFNLFNBQVMsY0FBYyxRQUFRLEtBQUs7QUFDMUMsUUFBTSxVQUFVLFFBQVEsV0FBVztBQUNuQyxRQUFNLGNBQWMsUUFBUSxVQUFVLGFBQWEsUUFBUSxPQUFPLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxXQUFXLEdBQUcsTUFBTSxRQUFRLFFBQVEsR0FBRyxRQUFRLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxTQUFTLGVBQWUsUUFBUSxJQUFJLEVBQUU7QUFDdE0sUUFBTSxPQUFPLFFBQVEsUUFBUSxZQUFZO0FBQ3pDLFFBQU0sTUFBTSxVQUFVLElBQUk7QUFDMUIsUUFBTUEsU0FBUSxZQUFZO0FBQzFCLFFBQU0sVUFBVSxhQUFhLE9BQU87QUFBQSxJQUNsQyxPQUFPLFFBQVE7QUFBQSxJQUNmLGFBQWEsUUFBUTtBQUFBLElBQ3JCLGFBQWEsRUFBRSxTQUFTLFFBQVEsUUFBUTtBQUFBLElBQ3hDLFNBQVMsRUFBRSxTQUFTLFFBQVEsU0FBUyxZQUFZLFFBQVEsV0FBVztBQUFBLEVBQ3RFLENBQUM7QUFFRCxjQUFZLFNBQVMsUUFBUTtBQUFBLElBQzNCLE1BQU07QUFBQSxJQUNOLE1BQU0sUUFBUTtBQUFBLElBQ2QsYUFBYSxDQUFDLFdBQVcsV0FBVyxHQUFJLFFBQVEsUUFBUSxJQUFJLENBQUMsWUFBcUIsSUFBSSxDQUFDLEdBQUksR0FBSSxPQUFPLGdCQUFnQixTQUFTLENBQUMsU0FBa0IsSUFBSSxDQUFDLENBQUU7QUFBQSxFQUMzSixHQUFHLFFBQVEsTUFBTSxTQUFTQSxRQUFPLEdBQUc7QUFDcEMsYUFBVyxRQUFRLFlBQVksUUFBUSxPQUFPLFVBQVEsS0FBSyxTQUFTLE9BQU8sR0FBRztBQUM1RSxRQUFJQSxPQUFNLFVBQVUsUUFBUSxhQUFhLFFBQVEsYUFBYSxLQUFNO0FBQ3BFLGdCQUFZLFNBQVMsUUFBUSxNQUFNLFFBQVEsTUFBTSxTQUFTQSxRQUFPLEdBQUc7QUFBQSxFQUN0RTtBQUNBLFNBQU9BLE9BQU0sU0FBUyxRQUFRLGFBQWEsUUFBUSxhQUFhLE1BQU07QUFDcEUsZ0JBQVksU0FBUyxRQUFRLEVBQUUsTUFBTUEsT0FBTSxRQUFRLE1BQU0sSUFBSSxZQUFZLFlBQVksVUFBVUEsT0FBTSxRQUFRLE1BQU0sSUFBSSxTQUFTLFVBQVUsYUFBYUEsT0FBTSxRQUFRLE1BQU0sSUFBSSxDQUFDLFdBQVcsU0FBUyxJQUFJLE9BQVUsR0FBRyxRQUFRLE1BQU0sU0FBU0EsUUFBTyxHQUFHO0FBQUEsRUFDeFA7QUFDQSxjQUFZLFNBQVMsUUFBUSxFQUFFLE1BQU0sVUFBVSxVQUFVLFFBQVEsU0FBUyxJQUFJLFNBQVMsT0FBTyxHQUFHLFFBQVEsTUFBTSxTQUFTQSxRQUFPLEdBQUc7QUFFbEksUUFBTSxRQUFRLFFBQVEsTUFBTTtBQUM1QixRQUFNLGdCQUFnQixNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sRUFBRSxPQUFPLFNBQU8sSUFBSSxLQUFLLENBQUMsRUFBRTtBQUN2RixRQUFNLHFCQUFxQixDQUFDLEdBQUdBLE9BQU0sZUFBZSxFQUFFLElBQUksUUFBTSxDQUFDLElBQUksT0FBTyxZQUFZLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVU7QUFDakgsUUFBTSxxQkFBcUIsQ0FBQyxHQUFHQSxPQUFNLGVBQWUsRUFBRSxJQUFJLFFBQU0sQ0FBQyxJQUFJLE9BQU8sWUFBWSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFVO0FBQ2pILFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0EsV0FBVyxJQUFJO0FBQUEsTUFDZixVQUFVLFFBQVE7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsTUFBTSxRQUFRO0FBQUEsTUFDZDtBQUFBLE1BQ0EsaUJBQWlCLENBQUMsR0FBR0EsT0FBTSxlQUFlO0FBQUEsTUFDMUMsaUJBQWlCLENBQUMsR0FBR0EsT0FBTSxlQUFlO0FBQUEsTUFDMUMsaUJBQWlCLENBQUMsR0FBR0EsT0FBTSxlQUFlO0FBQUEsTUFDMUMsYUFBYSxPQUFPLFlBQVksa0JBQWtCO0FBQUEsTUFDbEQsYUFBYSxPQUFPLFlBQVksa0JBQWtCO0FBQUEsTUFDbEQsVUFBVUEsT0FBTTtBQUFBLE1BQ2hCLFVBQVVBLE9BQU07QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFDRjtBQVVPLFNBQVMsb0JBQW9CLFNBQXNDO0FBQ3hFLFFBQU0sUUFBUSxhQUFhLE9BQU87QUFDbEMsU0FBTyxnQkFBZ0I7QUFBQSxJQUNyQjtBQUFBLElBQ0EsT0FBTyxNQUFNO0FBQUEsSUFDYixhQUFhLE1BQU07QUFBQSxJQUNuQixTQUFTLE1BQU07QUFBQSxJQUNmLE9BQU8sTUFBTTtBQUFBLElBQ2IsTUFBTSxNQUFNO0FBQUEsRUFDZCxDQUFDLEVBQUU7QUFDTDs7O0FDNXJCTyxJQUFNLFNBQVMsT0FBTztBQUFBLEVBQzNCLE9BQU8sS0FBSyxZQUFZLEVBQUUsSUFBSSxhQUFXLENBQUMsU0FBUyxvQkFBb0IsT0FBb0MsQ0FBQyxDQUFDO0FBQy9HO0FBRU8sSUFBTSxnQkFBZ0I7QUFNdEIsSUFBTSxvQkFBb0IsT0FBTyxnQkFBZ0I7QUFDakQsSUFBTSxvQkFBb0IsT0FBTyxnQkFBZ0I7QUFDakQsSUFBTSxvQkFBb0IsT0FBTyxnQkFBZ0I7QUFDakQsSUFBTSxlQUFlLE9BQU8sVUFBVTtBQUN0QyxJQUFNLGVBQWUsT0FBTyxVQUFVO0FBQ3RDLElBQU0sZUFBZSxPQUFPLFVBQVU7QUFDdEMsSUFBTSxxQkFBcUIsT0FBTyxpQkFBaUI7QUFDbkQsSUFBTSxxQkFBcUIsT0FBTyxpQkFBaUI7QUFDbkQsSUFBTSxxQkFBcUIsT0FBTyxpQkFBaUI7QUFDbkQsSUFBTSxtQkFBbUIsT0FBTyxlQUFlO0FBQy9DLElBQU0sbUJBQW1CLE9BQU8sZUFBZTtBQUMvQyxJQUFNLG1CQUFtQixPQUFPLGVBQWU7QUFDL0MsSUFBTSxtQkFBbUIsT0FBTyxlQUFlO0FBQy9DLElBQU0sbUJBQW1CLE9BQU8sZUFBZTtBQUMvQyxJQUFNLG1CQUFtQixPQUFPLGVBQWU7OztBQ3JCL0MsSUFBTSx3QkFBTixjQUFvQyxpQkFBOEM7QUFBQSxFQUM5RSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFFcEIsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsV0FBaUI7QUFDZixlQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTyxHQUFHO0FBQ3RELDJCQUFxQixNQUFNLFVBQVU7QUFDckMsV0FBSyxRQUFRLG9CQUFvQixNQUFNLFlBQVksT0FBTyxHQUFHLEdBQUcsRUFBRSwyQkFBMkI7QUFBQSxJQUMvRjtBQUNBLGVBQVcsQ0FBQyxJQUFJLE1BQU0sS0FBSyxPQUFPLFFBQVEsS0FBSyxRQUFRLEdBQUc7QUFDeEQsV0FBSyxRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsR0FBRyxFQUFFLG1DQUFtQztBQUNqRixXQUFLLFFBQVEsb0JBQW9CLE9BQU8sWUFBWSxPQUFPLEdBQUcsR0FBRyxFQUFFLDJCQUEyQjtBQUM5RixpQkFBVyxXQUFXLE9BQU8sVUFBVTtBQUNyQyxhQUFLLFFBQVEsV0FBVyxLQUFLLFNBQVMsR0FBRyxFQUFFLDhCQUE4QixPQUFPLElBQUk7QUFDcEYsYUFBSyxRQUFRLEtBQUssUUFBUSxPQUFPLEVBQUUsWUFBWSxZQUFZLE9BQU8sWUFBWSxTQUFTLEdBQUcsT0FBTyxpQkFBaUIsRUFBRSxTQUFTO0FBQUEsTUFDL0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxjQUFjLElBQUksc0JBQXNCOzs7QUNPOUMsSUFBTSxjQUFOLE1BQWtCO0FBQUEsRUFDdkI7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRUE7QUFBQTtBQUFBLEVBRVMsc0JBQXNCLG9CQUFJLElBQVk7QUFBQSxFQUUvQyxZQUFZLFVBQW9CLFlBQW9CQyxTQUFRLEdBQUc7QUFDN0QsU0FBSyxXQUFXO0FBQ2hCLFNBQUssUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU1BLE1BQUssQ0FBQyxDQUFDO0FBQ3ZELFNBQUssVUFBVTtBQUNmLFNBQUssZUFBZTtBQUNwQixTQUFLLGdCQUFnQjtBQUNyQixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLGVBQWUsQ0FBQztBQUFBLEVBQ3ZCO0FBQ0Y7QUFtQk8sU0FBUyxxQkFDZEMsUUFDQSxRQUNBLFFBQ0EsU0FDQSxTQUNBLEtBQ0EsUUFBUSxHQUNhO0FBQ3JCLFFBQU0sU0FBOEI7QUFBQSxJQUNsQyxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNoQixnQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLE1BQUksT0FBTyxTQUFTQSxPQUFNLG9CQUFvQixJQUFJLE9BQU8sRUFBRSxFQUFHLFFBQU87QUFDckUsUUFBTSxTQUFTLE9BQU8sU0FBUyxRQUFRLE9BQU87QUFDOUMsUUFBTSxLQUFLLE9BQU8sSUFBSTtBQUN0QixRQUFNLEtBQUssT0FBTyxJQUFJO0FBQ3RCLE1BQUksS0FBSyxLQUFLLEtBQUssS0FBSyxTQUFTLE9BQVEsUUFBTztBQUVoRCxTQUFPLFlBQVk7QUFDbkIsRUFBQUEsT0FBTSxvQkFBb0IsSUFBSSxPQUFPLEVBQUU7QUFDdkMsTUFBSUEsT0FBTSxXQUFXLEVBQUcsUUFBTztBQUUvQixRQUFNLFdBQVcsS0FBSyxJQUFJQSxPQUFNLFNBQVMsT0FBTyxNQUFNO0FBQ3RELEVBQUFBLE9BQU0sV0FBVztBQUNqQixTQUFPLFVBQVU7QUFDakIsRUFBQUEsT0FBTSxnQkFBZ0IsTUFBTTtBQUM1QixFQUFBQSxPQUFNLG1CQUFtQjtBQUN6QixFQUFBQSxPQUFNLGVBQWUsT0FBTztBQUM1QixTQUFPLFdBQVc7QUFDbEIsU0FBTyxpQkFBaUI7QUFDeEIsU0FBTyxpQkFBaUIsT0FBTyxVQUFVO0FBQ3pDLFNBQU87QUFDVDs7O0FDOUdBLElBQU0sU0FBUyxTQUFTLGNBQWlDLGNBQWM7QUFDdkUsSUFBTSxpQkFBaUIsU0FBUyxjQUFnQyxVQUFVO0FBRTFFLFNBQVMsZUFBZSxJQUFjLFFBQXlDO0FBQzdFLFFBQU0sV0FBcUIsQ0FBQztBQUU1QixNQUFJLE9BQU8sVUFBVSxFQUFHLFVBQVMsS0FBSyxVQUFVLE9BQU8sTUFBTSxtQkFBbUI7QUFDaEYsTUFBSSxPQUFPLGVBQWUsRUFBRyxVQUFTLEtBQUssZ0JBQWdCLE9BQU8sWUFBWSxxQkFBcUI7QUFDbkcsTUFBSSxPQUFPLGVBQWUsRUFBRyxVQUFTLEtBQUssZ0JBQWdCLE9BQU8sWUFBWSxxQkFBcUI7QUFDbkcsTUFBSSxDQUFDLFlBQVksT0FBTyxLQUFLLEVBQUcsVUFBUyxLQUFLLFVBQVUsT0FBTyxLQUFLLHNCQUFzQjtBQUMxRixNQUFJLE9BQU8sU0FBUyxTQUFVLFVBQVMsS0FBSyw0QkFBNEIsT0FBTyxJQUFJLEVBQUU7QUFDckYsTUFBSSxPQUFPLGNBQWMsRUFBRyxVQUFTLEtBQUssa0NBQWtDLE9BQU8sVUFBVSxFQUFFO0FBRS9GLFNBQU8sRUFBRSxVQUFVLElBQUksUUFBUSxTQUFTLFdBQVcsR0FBRyxTQUFTO0FBQ2pFO0FBRUEsSUFBTSxNQUFNLE1BQTJCO0FBQ3JDLFFBQU0sVUFBVSxPQUFPLFFBQVEsYUFBYSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLE1BQ25FLGVBQWUsSUFBZ0IsTUFBTSxDQUFDO0FBRXhDLGlCQUFlLFlBQVksUUFBUSxJQUFJLE9BQUs7QUFBQSx1QkFDdkIsRUFBRSxNQUFNLHFCQUFxQixFQUFFLFFBQVE7QUFBQSxnQkFDOUMsYUFBYSxRQUFRLEVBQUUsUUFBNkMsRUFBRSxLQUFLO0FBQUEsY0FDN0UsRUFBRSxTQUFTLFNBQVMsTUFBTTtBQUFBLDZCQUNYLEVBQUUsU0FBUyxTQUFTLGFBQWEsUUFBUSxFQUFFLFFBQTZDLEVBQUUsSUFBSSxpQkFBYyxhQUFhLFFBQVEsRUFBRSxRQUE2QyxFQUFFLE1BQU0sT0FBTyxFQUFFLFNBQVMsS0FBSyxLQUFLLENBQUM7QUFBQSxVQUN4TyxFQUFFLEtBQUssRUFBRTtBQUVqQixTQUFPO0FBQ1Q7QUFFQSxJQUFNLE9BQU8sZUFBZSxrQ0FBa0MsRUFBRSxPQUFPLFNBQVMsSUFBSSxHQUFHLE1BQU07QUFDN0YsS0FBSyxNQUFNO0FBQ1gsV0FBVyxVQUFVLElBQUksR0FBRztBQUMxQixPQUFLO0FBQUEsSUFDSCxHQUFHLE9BQU8sUUFBUTtBQUFBLElBQ2xCLE9BQU87QUFBQSxJQUNQLE9BQU8sU0FBUyxLQUFLLElBQUksS0FBSztBQUFBLEVBQ2hDO0FBQ0Y7QUFFQSxJQUFNLGFBQWEsYUFBYSxRQUFRO0FBQ3hDLElBQU0sUUFBUSxJQUFJLFlBQVksY0FBYyxXQUFXLFVBQVU7QUFDakUsSUFBTSxrQkFBa0IsRUFBRSxJQUFJLEdBQUcsR0FBRyxNQUFNLFdBQVcsUUFBUSxHQUFHLEtBQUssUUFBUSxNQUFNLFFBQVEsR0FBRyxPQUFPLE1BQU07QUFDM0csSUFBTSxlQUFlLHFCQUFxQixPQUFPLFlBQVksaUJBQWlCLEtBQUssS0FBSyxHQUFJO0FBQzVGLEtBQUs7QUFBQSxFQUNIO0FBQUEsRUFDQSxhQUFhLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsYUFBYTtBQUFBLEVBQ2xHLFlBQVksYUFBYSxRQUFRLGNBQWMsYUFBYSxjQUFjLFlBQVksTUFBTSxPQUFPO0FBQ3JHO0FBQ0EsSUFBTSxrQkFBa0IscUJBQXFCLE9BQU8sWUFBWSxpQkFBaUIsS0FBSyxLQUFLLElBQUk7QUFDL0YsS0FBSztBQUFBLEVBQ0g7QUFBQSxFQUNBLENBQUMsZ0JBQWdCLGFBQWEsTUFBTSxZQUFZLFdBQVcsYUFBYTtBQUFBLEVBQ3hFLGFBQWEsZ0JBQWdCLFNBQVMsWUFBWSxNQUFNLE9BQU87QUFDakU7IiwKICAibmFtZXMiOiBbImxldmVsIiwgImxldmVsIiwgInN0YXRlIiwgImxldmVsIiwgInN0YXRlIl0KfQo=

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
  durationMs: 1600,
  centerCameraMs: 50,
  returnCameraMs: 400,
  attackStartProgress: 0.125,
  attackEndProgress: 1,
  rowsAhead: 15,
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
function placePickups(section, recipe, beat, tier, rows, state, rng) {
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
  if (tier >= 2 && beat.kind === "rebuild") {
    const pickup = "pickup.showstopper.dragonsBreath";
    const pickupRow = Math.max(0, Math.min(rows - 1, rows - 3));
    section.at(pickupRow).pickup(pickup, { column: state.cycle % 2 === 0 ? c.left.inner : c.right.inner });
    state.playerPower += pickupPower(pickup);
    state.selectedPickups.add(pickup);
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
      const pickups = placePickups(section, recipe, beat, tier, rows, state, rng);
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

// projects/NeonSwarm/test-pages/showstopper-family/smoke.ts
var status = document.querySelector("#test-status");
var resultsElement = document.querySelector("#results");
function validateShowstopper(id, member) {
  const failures = [];
  if (member.bankBehavior !== "bankedManualTrigger") failures.push("must be manually banked and triggered");
  if (member.durationMs <= 0) failures.push("duration must be positive");
  if (member.centerCameraMs < 0) failures.push("center camera timing cannot be negative");
  if (member.returnCameraMs <= 0) failures.push("return camera timing must be positive");
  if (member.timeWarp[0]?.atMs !== 0) failures.push("time warp must start at 0ms");
  if (member.camera[0]?.atMs !== 0) failures.push("camera choreography must start at 0ms");
  if (member.timeWarp.at(-1)?.atMs !== member.durationMs) failures.push("time warp must end at durationMs");
  if ((member.camera.at(-1)?.atMs ?? 0) > member.durationMs) failures.push("camera choreography cannot exceed durationMs");
  if (!member.timelineEvents.some((event) => event.type === "startAttack")) failures.push("showstopper needs a start attack event");
  if (!member.timelineEvents.some((event) => event.type === "stopAttack")) failures.push("showstopper needs a stop attack event");
  if (member.attack.targeting !== "allLanesAhead") failures.push("first slice needs an all-lane attack");
  if (member.attack.rowsAhead <= 0) failures.push("attack rowsAhead must be positive");
  const minGameplayScale = Math.min(...member.timeWarp.map((point) => point.gameplayScale));
  if (minGameplayScale > 0.25) failures.push("cinematic time warp should slow gameplay meaningfully");
  const cameraMovesForward = member.camera.some((pose) => pose.followDistance < member.camera[0].followDistance - 60);
  if (!cameraMovesForward) failures.push("camera choreography should move forward from the player POV");
  return { showstopperId: id, passed: failures.length === 0, failures };
}
function run() {
  const results = Object.entries(showstopperFamily.members).map(([id, member]) => validateShowstopper(id, member));
  resultsElement.innerHTML = results.map((result) => {
    const member = showstopperFamily.members[result.showstopperId];
    const minGameplayScale = Math.min(...member.timeWarp.map((point) => point.gameplayScale));
    return `
      <li data-passed="${result.passed}" data-showstopper-id="${result.showstopperId}">
        <strong>${member.label}</strong>
        <span>${result.passed ? "PASS" : "FAIL"}</span>
        <span class="detail">${result.passed ? `${member.durationMs}ms - min speed ${(minGameplayScale * 100).toFixed(0)}% - ${member.attack.rowsAhead} attack rows` : result.failures.join(" | ")}</span>
      </li>`;
  }).join("");
  return results;
}
var test = createTestPage("neon-swarm-showstopper-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(`${result.showstopperId} definition is valid`, result.passed, result.failures.join("; ") || "all checks passed");
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9MaWdodG5pbmdGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU2hvd3N0b3BwZXJGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tEZWZpbml0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrQnVpbGRlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2tDYXRhbG9nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9zaG93c3RvcHBlci1mYW1pbHkvc21va2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWFyYy1rYXRhbmFcIiwgXCJTd29yZCBBcmMgS2F0YW5hXCIsIFtbLS4xNiwtMV0sIFsuMTYsLTFdLCBbLjIyLC4yOF0sIFsuNDgsLjYyXSwgWy4xOCwuNTJdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE4LC41Ml0sIFstLjQ4LC42Ml0sIFstLjIyLC4yOF1dLCBcInBpdGNoXCIsIFtbWy0uMDU1LC0uNzJdLCBbLjA1NSwtLjcyXSwgWy4wNTUsLjE4XSwgWy0uMDU1LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1jbGVhdmVyLXdpZGVcIiwgXCJTd29yZCBDbGVhdmVyIFdpZGVcIiwgW1stLjI4LC0xXSwgWy4yOCwtMV0sIFsuNDQsLS43Nl0sIFsuMzQsLjM0XSwgWy43MiwuNThdLCBbLjIyLC41NV0sIFsuMTYsMV0sIFstLjE2LDFdLCBbLS4yMiwuNTVdLCBbLS43MiwuNThdLCBbLS4zNCwuMzRdLCBbLS40NCwtLjc2XV0sIFwicm9sbFwiLCBbW1stLjEsLS42OF0sIFsuMSwtLjY4XSwgWy4wOCwuMThdLCBbLS4wOCwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIFwiU3dvcmQgTmVlZGxlIFNhYnJlXCIsIFtbMCwtMV0sIFsuMDgsLS44Ml0sIFsuMTEsLjVdLCBbLjMyLC43Ml0sIFsuMDgsLjY0XSwgWy4wNSwxXSwgWy0uMDUsMV0sIFstLjA4LC42NF0sIFstLjMyLC43Ml0sIFstLjExLC41XSwgWy0uMDgsLS44Ml1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtZ3VhcmRlZC1ibGFkZVwiLCBcIlN3b3JkIEd1YXJkZWQgQmxhZGVcIiwgW1stLjEyLC0xXSwgWy4xMiwtMV0sIFsuMTYsLjM2XSwgWy42MiwuMzZdLCBbLjYyLC41NF0sIFsuMTQsLjU2XSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xNCwuNTZdLCBbLS42MiwuNTRdLCBbLS42MiwuMzZdLCBbLS4xNiwuMzZdXSwgXCJ5YXdcIiwgW1tbLS4wNDUsLS43Ml0sIFsuMDQ1LC0uNzJdLCBbLjA0NSwuMjJdLCBbLS4wNDUsLjIyXV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLXByaXNtLWdyZWF0YmxhZGVcIiwgXCJTd29yZCBQcmlzbSBHcmVhdGJsYWRlXCIsIFtbMCwtMV0sIFsuMzQsLS43NF0sIFsuMywuMjhdLCBbLjU2LC41Ml0sIFsuMiwuNDhdLCBbLjEyLDFdLCBbLS4xMiwxXSwgWy0uMiwuNDhdLCBbLS41NiwuNTJdLCBbLS4zLC4yOF0sIFstLjM0LC0uNzRdXSwgXCJyb2xsXCIsIFtbWy0uMDgsLS40OF0sIFsuMDgsLS40OF0sIFsuMDgsLjE2XSwgWy0uMDgsLjE2XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgY29sbGlzaW9uUmFkaXVzU2NhbGU/OiBudW1iZXI7XG4gIHByb2plY3RpbGVDb3VudDogbnVtYmVyO1xuICBidXJzdENvdW50OiBudW1iZXI7XG4gIGJ1cnN0SW50ZXJ2YWxNczogbnVtYmVyO1xuICBzcHJlYWREZWdyZWVzOiBudW1iZXI7XG4gIHBpZXJjZTogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXJFdmVyeU50aFNob3Q6IG51bWJlcjtcbiAgaW1wYWN0UmFkaXVzPzogbnVtYmVyO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgbXV6emxlRmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVmlzdWFsSWRlbnRpdHkge1xuICBzaWxob3VldHRlOiBzdHJpbmc7XG4gIG1vdGlvbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByb2plY3RpbGVTaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBwcm9qZWN0aWxlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHRyYWlsQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHJvamVjdGlsZUFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIG11enpsZUVmZmVjdDogTXV6emxlRWZmZWN0O1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgbXV6emxlRHVyYXRpb25NczogbnVtYmVyO1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIGhvcml6b250YWxKaXR0ZXI6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICB1bmxvY2tQaGFzZTogXCJzdGFydFwiIHwgXCJmaXJzdEJ1aWxkXCIgfCBcInByZXNzdXJlXCI7XG4gIHNob3RQYXR0ZXJuOiBTaG90UGF0dGVybjtcbiAgcHJvamVjdGlsZUJlaGF2aW9yOiBQcm9qZWN0aWxlQmVoYXZpb3I7XG4gIHZpc3VhbElkZW50aXR5OiBHdW5WaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBHdW5MZXZlbFtdO1xufVxuXG5jb25zdCBsZXZlbCA9IChcbiAgbGV2ZWxOdW1iZXI6IG51bWJlcixcbiAgdmFsdWVzOiBPbWl0PEd1bkxldmVsLCBcImxldmVsXCIgfCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCI+ICZcbiAgICBQYXJ0aWFsPFBpY2s8R3VuTGV2ZWwsIFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIiB8IFwiaW1wYWN0UmFkaXVzXCI+Pixcbik6IEd1bkxldmVsID0+ICh7XG4gIGxldmVsOiBsZXZlbE51bWJlcixcbiAgcHJvamVjdGlsZUNvdW50OiAxLFxuICBidXJzdENvdW50OiAxLFxuICBidXJzdEludGVydmFsTXM6IDAsXG4gIHNwcmVhZERlZ3JlZXM6IDAsXG4gIHBpZXJjZTogMCxcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiAwLFxuICBrbm9ja2JhY2s6IDAsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5leHBvcnQgY2xhc3MgR3VuRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwiZ3VuXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJHdW5cIjtcbiAgcmVhZG9ubHkgaW1wbGVtZW50YXRpb24gPSB7XG4gICAgYXV0b0ZpcmVzOiB0cnVlLFxuICAgIHRhcmdldGluZzogXCJsYW5lRm9yd2FyZFwiLFxuICAgIHByb2plY3RpbGVNb2RlbDogXCJraW5lbWF0aWNcIixcbiAgICBjb2xsaXNpb25Nb2RlbDogXCJjaXJjbGVWc0VuZW15XCIsXG4gICAgYWxsb3dlZFNob3RQYXR0ZXJuczogW1wic2luZ2xlXCIsIFwicmFwaWRTaW5nbGVcIiwgXCJidXJzdFwiLCBcImhlYXZ5U2luZ2xlXCIsIFwicGFpcmVkU3ByZWFkXCJdIHNhdGlzZmllcyBTaG90UGF0dGVybltdLFxuICAgIGFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzOiBbXCJzdHJhaWdodFwiLCBcInBpZXJjaW5nU3RyYWlnaHRcIl0gc2F0aXNmaWVzIFByb2plY3RpbGVCZWhhdmlvcltdLFxuICB9IGFzIGNvbnN0O1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgcHVsc2VQaXN0b2w6IHtcbiAgICAgIGxhYmVsOiBcIlB1bHNlIFBpc3RvbFwiLCByYXJpdHk6IFwic3RhcnRlclwiLCB1bmxvY2tQaGFzZTogXCJzdGFydFwiLCBzaG90UGF0dGVybjogXCJzaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInRpbnlCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY2xlYW5TaW5nbGVTaG90XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJjeWFuXCIsIHRyYWlsQ29sb3I6IFwiZGVlcEJsdWVcIiwgY29yZUNvbG9yOiBcImN5YW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMi44LCB0cmFpbFdpZHRoU2NhbGU6IDAuNjUsIHZpc3VhbEludGVuc2l0eTogMC45LCBtdXp6bGVFZmZlY3Q6IFwiY3Jpc3BTdGFyXCIsIGltcGFjdEVmZmVjdDogXCJwaW5TcGFya1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA3MiwgaW1wYWN0RHVyYXRpb25NczogMTA1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NTQwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjc1LGRhbWFnZToxLjE1LHByb2plY3RpbGVTcGVlZDo1ODAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouOH0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoyLjE1LGRhbWFnZToxLjM1LHByb2plY3RpbGVTcGVlZDo2MjAscHJvamVjdGlsZVJhZGl1czozLjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi40NSxkYW1hZ2U6MS41LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czozLjM1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6LjgsaGl0Rmxhc2hTY2FsZTouOTV9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi43NSxkYW1hZ2U6MS42NSxwcm9qZWN0aWxlU3BlZWQ6NjgwLHByb2plY3RpbGVSYWRpdXM6My41LHRyYWlsTGVuZ3RoOjIwLG11enpsZUZsYXNoU2NhbGU6Ljg1LGhpdEZsYXNoU2NhbGU6MX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTAuNzUsZGFtYWdlOi41OSxwcm9qZWN0aWxlU3BlZWQ6ODE1LHByb2plY3RpbGVSYWRpdXM6Mi4yLHNwcmVhZERlZ3JlZXM6Mi4yNSx0cmFpbExlbmd0aDoxMyx0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi41LGhpdEZsYXNoU2NhbGU6LjZ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTIuMjUsZGFtYWdlOi42NCxwcm9qZWN0aWxlU3BlZWQ6ODUwLHByb2plY3RpbGVSYWRpdXM6Mi4yNSxzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCx0cmFjZXJFdmVyeU50aFNob3Q6MyxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoxLjI4LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo3NjAscHJvamVjdGlsZVJhZGl1czozLjA1LGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTQsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zOCxkYW1hZ2U6MS4wOCxwcm9qZWN0aWxlU3BlZWQ6Nzk1LHByb2plY3RpbGVSYWRpdXM6My4xLGJ1cnN0Q291bnQ6NSxidXJzdEludGVydmFsTXM6NTAsc3ByZWFkRGVncmVlczoxLjE1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDouOTgsZGFtYWdlOjQuMSxwcm9qZWN0aWxlU3BlZWQ6NjAwLHByb2plY3RpbGVSYWRpdXM6NS4yLHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI4LGltcGFjdFJhZGl1czoyMCxrbm9ja2JhY2s6MjYsbXV6emxlRmxhc2hTY2FsZToxLjQsaGl0Rmxhc2hTY2FsZToxLjYyfSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDUsZGFtYWdlOjQuNixwcm9qZWN0aWxlU3BlZWQ6NjMwLHByb2plY3RpbGVSYWRpdXM6NS40LHBpZXJjZTozLHRyYWlsTGVuZ3RoOjMwLGltcGFjdFJhZGl1czoyMixrbm9ja2JhY2s6MzAsbXV6emxlRmxhc2hTY2FsZToxLjUsaGl0Rmxhc2hTY2FsZToxLjc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZTouOTUscHJvamVjdGlsZVNwZWVkOjYyNSxwcm9qZWN0aWxlUmFkaXVzOjIuODUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NjYwLHByb2plY3RpbGVSYWRpdXM6Mi45NSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNyxkYW1hZ2U6MS4xMixwcm9qZWN0aWxlU3BlZWQ6NzAwLHByb2plY3RpbGVSYWRpdXM6My4wNSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LjUsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouODQsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS44NSxkYW1hZ2U6MS4yLHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czozLjEsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS45NSxwcm9qZWN0aWxlQ291bnQ6NCxzcHJlYWREZWdyZWVzOjYuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouOTIsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA9PT0gNSwgYCR7aWR9IG11c3QgZGVmaW5lIGV4YWN0bHkgZml2ZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPT09IHVuZGVmaW5lZCB8fCB0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjb2xsaXNpb24gcmFkaXVzIHNjYWxlIGNhbm5vdCBzaHJpbmsgY29sbGlzaW9uLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJ1cnN0Q291bnQgPj0gMSAmJiB0dW5pbmcucHJvamVjdGlsZUNvdW50ID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgY291bnRzLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ3VuRmFtaWx5ID0gbmV3IEd1bkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIEd1bklkID0ga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgRW5lbXlTcGF3bkVudHJhbmNlID0gXCJzY2F0dGVyXCIgfCBcImZhZGVcIjtcbmV4cG9ydCB0eXBlIEVuZW15RGVhdGhWaXN1YWwgPSBcImNsb3VkXCIgfCBcIm5vbmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcmJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogbnVtYmVyO1xuICBzY29yZTogbnVtYmVyO1xuICBiYXNlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHJpbUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFkb3dDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhcGVJZDogc3RyaW5nO1xuICBnbG93OiBudW1iZXI7XG4gIHN1cmZhY2VUZXh0dXJlOiBudW1iZXI7XG4gIHJpbUludGVuc2l0eTogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBoaXRGbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgZGVhdGhGbGFzaFNjYWxlOiBudW1iZXI7XG4gIHNoYXBlWm9vbTogbnVtYmVyO1xuICBpbXBhY3RSZXNpc3RhbmNlOiBudW1iZXI7XG4gIGV4cGxvc2lvbk1hZ25pdHVkZTogbnVtYmVyO1xuICBzcGF3bkVudHJhbmNlOiBFbmVteVNwYXduRW50cmFuY2U7XG4gIHNwYXduU291bmQ6IHN0cmluZyB8IG51bGw7XG4gIGRlYXRoU291bmQ6IHN0cmluZztcbiAgZGVhdGhWaXN1YWw6IEVuZW15RGVhdGhWaXN1YWw7XG59XG5cbmV4cG9ydCBjbGFzcyBPcmJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJvcmJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIk9yYiBFbmVteVwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGJhc2ljT3JiOiB7XG4gICAgICBsYWJlbDogXCJCYXNpYyBPcmJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDEwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImh1bnRlci1leWVcIixcbiAgICAgIGdsb3c6IDAuODIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogMC4yOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS4yNSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjcyLFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA5MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS44LFxuICAgICAgc2hhcGVab29tOiAzLjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIGdsYXNzU2hpZWxkOiB7XG4gICAgICBsYWJlbDogXCJHbGFzcyBTaGllbGRcIixcbiAgICAgIGhlYWx0aDogLjEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDUuNixcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAuMSxcbiAgICAgIHNjb3JlOiAzLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRyaWNrLWdhdGVcIixcbiAgICAgIGdsb3c6IC42MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTIsXG4gICAgICByaW1JbnRlbnNpdHk6IDAuOSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNDUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDcwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjEsXG4gICAgICBzaGFwZVpvb206IDMuMDUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAuNjUsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC4yNSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwiZmFkZVwiLFxuICAgICAgc3Bhd25Tb3VuZDogbnVsbCxcbiAgICAgIGRlYXRoU291bmQ6IFwiR2xhc3NTaGllbGRTaGF0dGVyXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJub25lXCIsXG4gICAgfSxcbiAgICB3aW5nZXI6IHtcbiAgICAgIGxhYmVsOiBcIldpbmdlclwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDc2LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTQsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiZWxpdGUtd2luZ3NcIixcbiAgICAgIGdsb3c6IC44NixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMjIsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMixcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNjYsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDg1LFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjc1LFxuICAgICAgc2hhcGVab29tOiAzLjI1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICB0YW5rOiB7XG4gICAgICBsYWJlbDogXCJUYW5rXCIsXG4gICAgICBoZWFsdGg6IDI0LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIExpZ2h0bmluZ1RhcmdldGluZ01vZGUgPSBcIm5lYXJlc3RGb3J3YXJkXCIgfCBcImRlbnNlc3RDbHVzdGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIGNoYWluUmFuZ2U6IG51bWJlcjtcbiAgbWF4SnVtcHM6IG51bWJlcjtcbiAgYnJhbmNoRmFub3V0OiBudW1iZXI7XG4gIG1heERlcHRoOiBudW1iZXI7XG4gIGJyYW5jaERlY2F5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHkge1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgamFnZ2VkbmVzczogbnVtYmVyO1xuICBzZWdtZW50czogbnVtYmVyO1xuICBtb3ZlbWVudDogbnVtYmVyO1xuICBib2x0V2lkdGg6IG51bWJlcjtcbiAgaGFsb1dpZHRoOiBudW1iZXI7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgYnJhbmNoU3BhcmtzOiBudW1iZXI7XG4gIHNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgc3BhcmtWZWxvY2l0eVNwcmVhZDogbnVtYmVyO1xuICBzcGFya0Vhc2VQb3dlcjogbnVtYmVyO1xuICBzcGFya0RpbVBvd2VyOiBudW1iZXI7XG4gIHNwYXJrTGVuZ3RoOiBudW1iZXI7XG4gIHNwYXJrV2lkdGg6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtzOiBudW1iZXI7XG4gIGltcGFjdFNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtSYWRpdXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWdodG5pbmdNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwibGlnaHRuaW5nXCI7XG4gIHJhcml0eTogXCJ1bmNvbW1vblwiIHwgXCJyYXJlXCI7XG4gIHRhcmdldGluZ01vZGU6IExpZ2h0bmluZ1RhcmdldGluZ01vZGU7XG4gIGluY2x1ZGVBZGphY2VudExhbmVzOiBib29sZWFuO1xuICB2aXN1YWxJZGVudGl0eTogTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgTGlnaHRuaW5nTGV2ZWxbXTtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuY29uc3QgbGV2ZWwgPSAobGV2ZWxOdW1iZXI6IG51bWJlciwgdmFsdWVzOiBPbWl0PExpZ2h0bmluZ0xldmVsLCBcImxldmVsXCI+KTogTGlnaHRuaW5nTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICAuLi52YWx1ZXMsXG59KTtcblxuY29uc3Qgc2hhcmVkVmlzdWFsID0ge1xuICBjb2xvcjogXCJjeWFuXCIsXG4gIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgamFnZ2VkbmVzczogOTYsXG4gIHNlZ21lbnRzOiA4LFxuICBtb3ZlbWVudDogLjU1LFxuICBib2x0V2lkdGg6IC4xLFxuICBoYWxvV2lkdGg6IDgsXG4gIGludGVuc2l0eTogMy4wNyxcbiAgZ2xvdzogNi4yLFxuICBkdXJhdGlvbk1zOiA1MjksXG4gIGJyYW5jaFNwYXJrczogLjExLFxuICBzcGFya1ZlbG9jaXR5OiAxNTAsXG4gIHNwYXJrVmVsb2NpdHlTcHJlYWQ6IC41NSxcbiAgc3BhcmtFYXNlUG93ZXI6IC40NCxcbiAgc3BhcmtEaW1Qb3dlcjogLjYsXG4gIHNwYXJrTGVuZ3RoOiA2LFxuICBzcGFya1dpZHRoOiAuNyxcbiAgaW1wYWN0U3BhcmtzOiAyNixcbiAgaW1wYWN0U3BhcmtWZWxvY2l0eTogMTU0LFxuICBpbXBhY3RTcGFya1JhZGl1czogMTAsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBMaWdodG5pbmdWaXN1YWxJZGVudGl0eTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0bmluZ0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImxpZ2h0bmluZ1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiTGlnaHRuaW5nXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBjaGFpblNwYXJrOiB7XG4gICAgICBsYWJlbDogXCJDaGFpbiBTcGFya1wiLFxuICAgICAgZmFtaWx5OiBcImxpZ2h0bmluZ1wiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RGb3J3YXJkXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiBzaGFyZWRWaXN1YWwsXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDEuOTUsIGRhbWFnZTogMS4yNSwgY2hhaW5SYW5nZTogMTUwLCBtYXhKdW1wczogMiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMiwgYnJhbmNoRGVjYXk6IC43MiB9KSxcbiAgICAgICAgbGV2ZWwoMiwgeyBjb29sZG93blNlY29uZHM6IDEuNywgZGFtYWdlOiAxLjM4LCBjaGFpblJhbmdlOiAxNzAsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjcyIH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMS41LCBkYW1hZ2U6IDEuNSwgY2hhaW5SYW5nZTogMTkwLCBtYXhKdW1wczogNCwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMywgYnJhbmNoRGVjYXk6IC43IH0pLFxuICAgICAgICBsZXZlbCg0LCB7IGNvb2xkb3duU2Vjb25kczogMS4zNCwgZGFtYWdlOiAxLjY0LCBjaGFpblJhbmdlOiAyMTIsIG1heEp1bXBzOiA1LCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAzLCBicmFuY2hEZWNheTogLjcgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjE4LCBkYW1hZ2U6IDEuOCwgY2hhaW5SYW5nZTogMjM2LCBtYXhKdW1wczogNiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogNCwgYnJhbmNoRGVjYXk6IC42OCB9KSxcbiAgICAgIF0sXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3Qgc2luZ2xlLWNoYWluIGNsZWFudXAuIEJlc3QgYWdhaW5zdCBzdGFnZ2VyZWQgZW5lbWllczsgd2Vha2VyIGFnYWluc3QgaXNvbGF0ZWQgZHVyYWJsZSB0YXJnZXRzIHRoYW4gZm9jdXNlZCBndW5zLlwiLFxuICAgIH0sXG4gICAgZm9ya0NhcGFjaXRvcjoge1xuICAgICAgbGFiZWw6IFwiRm9yayBDYXBhY2l0b3JcIixcbiAgICAgIGZhbWlseTogXCJsaWdodG5pbmdcIixcbiAgICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImRlbnNlc3RDbHVzdGVyXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7XG4gICAgICAgIC4uLnNoYXJlZFZpc3VhbCxcbiAgICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICAgIGJvbHRXaWR0aDogMi4xLFxuICAgICAgICBicmFuY2hTcGFya3M6IC4xOCxcbiAgICAgICAgaW1wYWN0U3BhcmtzOiAzNCxcbiAgICAgIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDIuNTUsIGRhbWFnZTogMS44LCBjaGFpblJhbmdlOiAxMzgsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgyLCB7IGNvb2xkb3duU2Vjb25kczogMi4zNSwgZGFtYWdlOiAxLjk1LCBjaGFpblJhbmdlOiAxNTIsIG1heEp1bXBzOiA0LCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMi4xOCwgZGFtYWdlOiAyLjEsIGNoYWluUmFuZ2U6IDE2OCwgbWF4SnVtcHM6IDUsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNTYgfSksXG4gICAgICAgIGxldmVsKDQsIHsgY29vbGRvd25TZWNvbmRzOiAyLjAyLCBkYW1hZ2U6IDIuMjgsIGNoYWluUmFuZ2U6IDE4NCwgbWF4SnVtcHM6IDcsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTQgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjg2LCBkYW1hZ2U6IDIuNDUsIGNoYWluUmFuZ2U6IDIwNCwgbWF4SnVtcHM6IDksIGJyYW5jaEZhbm91dDogNCwgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTIgfSksXG4gICAgICBdLFxuICAgICAgYWdlbnROb3RlczogXCJDbHVzdGVyIGRpc2NoYXJnZS4gVGhlIGFuY2hvciBoaXRzIGhhcmQsIHRoZW4gc2hhbGxvdyBzaWJsaW5nIGJyYW5jaGVzIHNwcmVhZCB0aHJvdWdoIHBhY2tlZCBmb3JtYXRpb25zLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uZmFtaWx5ID09PSBcImxpZ2h0bmluZ1wiLCBgJHtpZH0gbXVzdCBiZSBpbiBsaWdodG5pbmcgZmFtaWx5LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0udmlzdWFsSWRlbnRpdHkuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgdW5rbm93biBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLmxldmVscy5sZW5ndGggPT09IDUsIGAke2lkfSBtdXN0IGRlZmluZSBleGFjdGx5IGZpdmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgaXRlbS5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGNvb2xkb3duIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jaGFpblJhbmdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjaGFpblJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcubWF4SnVtcHMgPj0gMSAmJiB0dW5pbmcuYnJhbmNoRmFub3V0ID49IDEgJiYgdHVuaW5nLm1heERlcHRoID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gYnJhbmNoIGNvdW50cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJyYW5jaERlY2F5ID4gMCAmJiB0dW5pbmcuYnJhbmNoRGVjYXkgPD0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBicmFuY2hEZWNheSBtdXN0IGJlIGluICgwLCAxXS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpZ2h0bmluZ0ZhbWlseSA9IG5ldyBMaWdodG5pbmdGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBMaWdodG5pbmdJZCA9IGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3dzdG9wcGVyQmFua0JlaGF2aW9yID0gXCJiYW5rZWRNYW51YWxUcmlnZ2VyXCI7XG5leHBvcnQgdHlwZSBTaG93c3RvcHBlclRhcmdldGluZ01vZGUgPSBcImFsbExhbmVzQWhlYWRcIiB8IFwiY3VycmVudExhbmVBaGVhZFwiO1xuZXhwb3J0IHR5cGUgU2hvd3N0b3BwZXJFYXNpbmcgPSBcImxpbmVhclwiIHwgXCJlYXNlSW5cIiB8IFwiZWFzZU91dFwiIHwgXCJlYXNlSW5PdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaG93c3RvcHBlclRpbWVXYXJwUG9pbnQge1xuICBhdE1zOiBudW1iZXI7XG4gIHByb2dyZXNzPzogbnVtYmVyO1xuICBnYW1lcGxheVNjYWxlOiBudW1iZXI7XG4gIGVhc2luZz86IFNob3dzdG9wcGVyRWFzaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dzdG9wcGVyQ2FtZXJhUG9zZSB7XG4gIGF0TXM6IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xuICBiYWNrZ3JvdW5kRm9yd2FyZE9mZnNldD86IG51bWJlcjtcbiAgYmFja2dyb3VuZFZlcnRpY2FsT2Zmc2V0PzogbnVtYmVyO1xuICBiYWNrZ3JvdW5kWm9vbU9mZnNldD86IG51bWJlcjtcbiAgZWFzaW5nPzogU2hvd3N0b3BwZXJFYXNpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJBdHRhY2tEZWZpbml0aW9uIHtcbiAgc3RhcnRNczogbnVtYmVyO1xuICBlbmRNczogbnVtYmVyO1xuICByb3dzQWhlYWQ6IG51bWJlcjtcbiAgdGFyZ2V0aW5nOiBTaG93c3RvcHBlclRhcmdldGluZ01vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJUaW1lbGluZUV2ZW50IHtcbiAgdHlwZTogXCJzdGFydEF0dGFja1wiIHwgXCJzdG9wQXR0YWNrXCI7XG4gIGF0TXM6IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICByYXJpdHk6IFwicmFyZVwiIHwgXCJlcGljXCIgfCBcImxlZ2VuZGFyeVwiO1xuICBiYW5rQmVoYXZpb3I6IFNob3dzdG9wcGVyQmFua0JlaGF2aW9yO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIGNlbnRlckNhbWVyYU1zOiBudW1iZXI7XG4gIHJldHVybkNhbWVyYU1zOiBudW1iZXI7XG4gIHRpbWVXYXJwOiByZWFkb25seSBTaG93c3RvcHBlclRpbWVXYXJwUG9pbnRbXTtcbiAgY2FtZXJhOiByZWFkb25seSBTaG93c3RvcHBlckNhbWVyYVBvc2VbXTtcbiAgdGltZWxpbmVFdmVudHM6IHJlYWRvbmx5IFNob3dzdG9wcGVyVGltZWxpbmVFdmVudFtdO1xuICBhdHRhY2s6IFNob3dzdG9wcGVyQXR0YWNrRGVmaW5pdGlvbjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNvdW5kQ3VlczogUmVhZG9ubHk8UmVjb3JkPFwiZGVwbG95XCIgfCBcImF0dGFja1N0YXJ0XCIgfCBcInJlc29sdmVcIiwgc3RyaW5nPj47XG59XG5cbnR5cGUgVGltZWRCeVByb2dyZXNzPFQ+ID0gT21pdDxULCBcImF0TXNcIj4gJiB7IHByb2dyZXNzOiBudW1iZXIgfTtcblxuaW50ZXJmYWNlIERyYWdvbkJyZWF0aEludGVudCB7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgY2VudGVyQ2FtZXJhTXM6IG51bWJlcjtcbiAgcmV0dXJuQ2FtZXJhTXM6IG51bWJlcjtcbiAgYXR0YWNrU3RhcnRQcm9ncmVzczogbnVtYmVyO1xuICBhdHRhY2tFbmRQcm9ncmVzczogbnVtYmVyO1xuICByb3dzQWhlYWQ6IG51bWJlcjtcbiAgdGltZVdhcnA6IHJlYWRvbmx5IFRpbWVkQnlQcm9ncmVzczxTaG93c3RvcHBlclRpbWVXYXJwUG9pbnQ+W107XG4gIGNhbWVyYTogcmVhZG9ubHkgVGltZWRCeVByb2dyZXNzPFNob3dzdG9wcGVyQ2FtZXJhUG9zZT5bXTtcbiAgc291bmRDdWVzOiBTaG93c3RvcHBlck1lbWJlcltcInNvdW5kQ3Vlc1wiXTtcbn1cblxuY29uc3QgZHJhZ29uQnJlYXRoSW50ZW50ID0ge1xuICBkdXJhdGlvbk1zOiAxNjAwLFxuICBjZW50ZXJDYW1lcmFNczogNTAsXG4gIHJldHVybkNhbWVyYU1zOiA0MDAsXG4gIGF0dGFja1N0YXJ0UHJvZ3Jlc3M6IC4xMjUsXG4gIGF0dGFja0VuZFByb2dyZXNzOiAxLFxuICByb3dzQWhlYWQ6IDE1LFxuICB0aW1lV2FycDogW1xuICAgIHsgcHJvZ3Jlc3M6IDAsIGdhbWVwbGF5U2NhbGU6IDEsIGVhc2luZzogXCJlYXNlSW5PdXRcIiB9LFxuICAgIHsgcHJvZ3Jlc3M6IC4wMzMzLCBnYW1lcGxheVNjYWxlOiAuMSwgZWFzaW5nOiBcImVhc2VJblwiIH0sXG4gICAgeyBwcm9ncmVzczogLjI2NjcsIGdhbWVwbGF5U2NhbGU6IC40LCBlYXNpbmc6IFwiZWFzZUluXCIgfSxcbiAgICB7IHByb2dyZXNzOiAxLCBnYW1lcGxheVNjYWxlOiAxLCBlYXNpbmc6IFwiZWFzZUluXCIgfSxcbiAgXSxcbiAgY2FtZXJhOiBbXG4gICAgeyBwcm9ncmVzczogMCwgaGVpZ2h0OiA2NSwgbG9va0FuZ2xlRGVncmVlczogMjcsIGZvbGxvd0Rpc3RhbmNlOiAyMCwgem9vbTogLjIsIGhvcml6b246IC41MSB9LFxuICAgIHsgcHJvZ3Jlc3M6IC4xMTY3LCBoZWlnaHQ6IDQ1LCBsb29rQW5nbGVEZWdyZWVzOiAyNywgZm9sbG93RGlzdGFuY2U6IC01LCB6b29tOiAuMjgsIGhvcml6b246IC40NywgYmFja2dyb3VuZEZvcndhcmRPZmZzZXQ6IC4xMiwgYmFja2dyb3VuZFZlcnRpY2FsT2Zmc2V0OiAtLjI1LCBiYWNrZ3JvdW5kWm9vbU9mZnNldDogLjI0LCBlYXNpbmc6IFwiZWFzZUluXCIgfSxcbiAgICB7IHByb2dyZXNzOiAuMjU4MywgaGVpZ2h0OiAzNSwgbG9va0FuZ2xlRGVncmVlczogMjcsIGZvbGxvd0Rpc3RhbmNlOiAtMjUsIHpvb206IC4zMiwgaG9yaXpvbjogLjQ1LCBiYWNrZ3JvdW5kRm9yd2FyZE9mZnNldDogLjIyLCBiYWNrZ3JvdW5kVmVydGljYWxPZmZzZXQ6IC0uMzgsIGJhY2tncm91bmRab29tT2Zmc2V0OiAuMzIsIGVhc2luZzogXCJlYXNlSW5PdXRcIiB9LFxuICBdLFxuICBzb3VuZEN1ZXM6IHtcbiAgICBkZXBsb3k6IFwiV2F2ZVByZXNzdXJlXCIsXG4gICAgYXR0YWNrU3RhcnQ6IFwiRHJhZ29uQnJlYXRoXCIsXG4gICAgcmVzb2x2ZTogXCJQcm9qZWN0aWxlSGl0XCIsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBEcmFnb25CcmVhdGhJbnRlbnQ7XG5cbmZ1bmN0aW9uIGRyYWdvbkJyZWF0aE1lbWJlcihpbnRlbnQ6IERyYWdvbkJyZWF0aEludGVudCk6IFNob3dzdG9wcGVyTWVtYmVyIHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogXCJEcmFnb24ncyBCcmVhdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGJhbmtlZCBjaW5lbWF0aWMgY2xlYXIgd2hlcmUgYSBmcmllbmRseSBuZW9uIHNoYXBlIGRpdmVzIGFoZWFkIGFuZCBsYXlzIGEgdGhpY2sgd2F2ZSBvZiBmaXJlLlwiLFxuICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgYmFua0JlaGF2aW9yOiBcImJhbmtlZE1hbnVhbFRyaWdnZXJcIixcbiAgICBkdXJhdGlvbk1zOiBpbnRlbnQuZHVyYXRpb25NcyxcbiAgICBjZW50ZXJDYW1lcmFNczogaW50ZW50LmNlbnRlckNhbWVyYU1zLFxuICAgIHJldHVybkNhbWVyYU1zOiBpbnRlbnQucmV0dXJuQ2FtZXJhTXMsXG4gICAgdGltZVdhcnA6IHBvaW50c0F0TXMoaW50ZW50LnRpbWVXYXJwLCBpbnRlbnQuZHVyYXRpb25NcyksXG4gICAgY2FtZXJhOiBwb2ludHNBdE1zKGludGVudC5jYW1lcmEsIGludGVudC5kdXJhdGlvbk1zKSxcbiAgICB0aW1lbGluZUV2ZW50czogW1xuICAgICAgeyB0eXBlOiBcInN0YXJ0QXR0YWNrXCIsIHByb2dyZXNzOiBpbnRlbnQuYXR0YWNrU3RhcnRQcm9ncmVzcywgYXRNczogbXNBdFByb2dyZXNzKGludGVudC5hdHRhY2tTdGFydFByb2dyZXNzLCBpbnRlbnQuZHVyYXRpb25NcykgfSxcbiAgICAgIHsgdHlwZTogXCJzdG9wQXR0YWNrXCIsIHByb2dyZXNzOiBpbnRlbnQuYXR0YWNrRW5kUHJvZ3Jlc3MsIGF0TXM6IG1zQXRQcm9ncmVzcyhpbnRlbnQuYXR0YWNrRW5kUHJvZ3Jlc3MsIGludGVudC5kdXJhdGlvbk1zKSB9LFxuICAgIF0sXG4gICAgYXR0YWNrOiB7XG4gICAgICBzdGFydE1zOiBtc0F0UHJvZ3Jlc3MoaW50ZW50LmF0dGFja1N0YXJ0UHJvZ3Jlc3MsIGludGVudC5kdXJhdGlvbk1zKSxcbiAgICAgIGVuZE1zOiBpbnRlbnQuZHVyYXRpb25NcyxcbiAgICAgIHJvd3NBaGVhZDogaW50ZW50LnJvd3NBaGVhZCxcbiAgICAgIHRhcmdldGluZzogXCJhbGxMYW5lc0FoZWFkXCIsXG4gICAgfSxcbiAgICBwaWNrdXBDb2xvcjogXCJvcmFuZ2VcIixcbiAgICBzb3VuZEN1ZXM6IGludGVudC5zb3VuZEN1ZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBvaW50c0F0TXM8VCBleHRlbmRzIHsgcHJvZ3Jlc3M6IG51bWJlciB9Pihwb2ludHM6IHJlYWRvbmx5IFRbXSwgZHVyYXRpb25NczogbnVtYmVyKTogQXJyYXk8VCAmIHsgYXRNczogbnVtYmVyIH0+IHtcbiAgcmV0dXJuIHBvaW50cy5tYXAocG9pbnQgPT4gKHtcbiAgICAuLi5wb2ludCxcbiAgICBhdE1zOiBtc0F0UHJvZ3Jlc3MocG9pbnQucHJvZ3Jlc3MsIGR1cmF0aW9uTXMpLFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIG1zQXRQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyLCBkdXJhdGlvbk1zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwcm9ncmVzcykpICogZHVyYXRpb25Ncyk7XG59XG5cbmV4cG9ydCBjbGFzcyBTaG93c3RvcHBlckZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFNob3dzdG9wcGVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hvd3N0b3BwZXJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlNob3dzdG9wcGVyXCI7XG4gIHJlYWRvbmx5IGltcGxlbWVudGF0aW9uID0ge1xuICAgIGJhbmtlZDogdHJ1ZSxcbiAgICBtYW51YWxUcmlnZ2VyOiB0cnVlLFxuICAgIGNpbmVtYXRpY0RpcmVjdG9yOiB0cnVlLFxuICAgIGRldGVybWluaXN0aWNDbGVhcjogdHJ1ZSxcbiAgfSBhcyBjb25zdDtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGRyYWdvbnNCcmVhdGg6IGRyYWdvbkJyZWF0aE1lbWJlcihkcmFnb25CcmVhdGhJbnRlbnQpLFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBTaG93c3RvcHBlck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgbWVtYmVyXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpKSB7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLmR1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5jZW50ZXJDYW1lcmFNcyA+PSAwLCBgJHtpZH0gY2VudGVyQ2FtZXJhTXMgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5yZXR1cm5DYW1lcmFNcyA+IDAsIGAke2lkfSByZXR1cm5DYW1lcmFNcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci50aW1lV2FycC5sZW5ndGggPj0gMiwgYCR7aWR9IG11c3QgZGVmaW5lIGF0IGxlYXN0IHR3byB0aW1lLXdhcnAgcG9pbnRzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5jYW1lcmEubGVuZ3RoID49IDIsIGAke2lkfSBtdXN0IGRlZmluZSBhdCBsZWFzdCB0d28gY2FtZXJhIHBvc2VzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci50aW1lbGluZUV2ZW50cy5sZW5ndGggPj0gMiwgYCR7aWR9IG11c3QgZGVmaW5lIGF0IGxlYXN0IHR3byB0aW1lbGluZSBldmVudHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLmF0dGFjay5zdGFydE1zID49IDAgJiYgbWVtYmVyLmF0dGFjay5lbmRNcyA+IG1lbWJlci5hdHRhY2suc3RhcnRNcywgYCR7aWR9IGF0dGFjayBtdXN0IGhhdmUgYSB2YWxpZCB0aW1lIHJhbmdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5hdHRhY2suZW5kTXMgPD0gbWVtYmVyLmR1cmF0aW9uTXMsIGAke2lkfSBhdHRhY2sgY2Fubm90IGV4Y2VlZCBkdXJhdGlvbi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIuYXR0YWNrLnJvd3NBaGVhZCA+IDAsIGAke2lkfSBhdHRhY2sgcm93c0FoZWFkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbbWVtYmVyLnBpY2t1cENvbG9yXSAhPT0gdW5kZWZpbmVkLCBgJHtpZH0gaGFzIGFuIHVua25vd24gcGlja3VwIGNvbG9yLmApO1xuICAgICAgdGhpcy52YWxpZGF0ZVRpbWVkUG9pbnRzKGlkLCBcInRpbWVXYXJwXCIsIG1lbWJlci50aW1lV2FycCwgbWVtYmVyLmR1cmF0aW9uTXMpO1xuICAgICAgdGhpcy52YWxpZGF0ZVRpbWVkUG9pbnRzKGlkLCBcImNhbWVyYVwiLCBtZW1iZXIuY2FtZXJhLCBtZW1iZXIuZHVyYXRpb25Ncyk7XG4gICAgICB0aGlzLnZhbGlkYXRlVGltZWRQb2ludHMoaWQsIFwidGltZWxpbmVFdmVudHNcIiwgbWVtYmVyLnRpbWVsaW5lRXZlbnRzLCBtZW1iZXIuZHVyYXRpb25Ncyk7XG4gICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIG1lbWJlci50aW1lV2FycCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUocG9pbnQuZ2FtZXBsYXlTY2FsZSA+IDAgJiYgcG9pbnQuZ2FtZXBsYXlTY2FsZSA8PSAxLCBgJHtpZH0gZ2FtZXBsYXlTY2FsZSBtdXN0IGJlIGluIHRoZSAwLTEgcmFuZ2UuYCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHBvc2Ugb2YgbWVtYmVyLmNhbWVyYSkge1xuICAgICAgICB0aGlzLnJlcXVpcmUocG9zZS5oZWlnaHQgPj0gLTIwMCwgYCR7aWR9IGNhbWVyYSBoZWlnaHQgaXMgb3V0c2lkZSB0aGUgc3VwcG9ydGVkIGxhYiByYW5nZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHBvc2Uuem9vbSA+IDAsIGAke2lkfSBjYW1lcmEgem9vbSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUocG9zZS5ob3Jpem9uID4gMCAmJiBwb3NlLmhvcml6b24gPCAxLCBgJHtpZH0gY2FtZXJhIGhvcml6b24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZVRpbWVkUG9pbnRzKGlkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHBvaW50czogcmVhZG9ubHkgeyBhdE1zOiBudW1iZXIgfVtdLCBkdXJhdGlvbk1zOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcHJldmlvdXMgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICAgIHRoaXMucmVxdWlyZShwb2ludC5hdE1zID49IDAgJiYgcG9pbnQuYXRNcyA8PSBkdXJhdGlvbk1zLCBgJHtpZH0gJHtsYWJlbH0gcG9pbnQgYXRNcyBpcyBvdXRzaWRlIHRoZSBzZXF1ZW5jZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShwb2ludC5hdE1zID49IHByZXZpb3VzLCBgJHtpZH0gJHtsYWJlbH0gcG9pbnRzIG11c3QgYmUgc29ydGVkIGJ5IGF0TXMuYCk7XG4gICAgICBwcmV2aW91cyA9IHBvaW50LmF0TXM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaG93c3RvcHBlckZhbWlseSA9IG5ldyBTaG93c3RvcHBlckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNob3dzdG9wcGVySWQgPSBrZXlvZiB0eXBlb2Ygc2hvd3N0b3BwZXJGYW1pbHkubWVtYmVycztcbmV4cG9ydCBjb25zdCBzdGFydGluZ1Nob3dzdG9wcGVySWQ6IFNob3dzdG9wcGVySWQgPSBcImRyYWdvbnNCcmVhdGhcIjtcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBIb3cgdGhlIHN3b3JkIHNlbGVjdHMgdGFyZ2V0cyBmcm9tIHRoZSBuZWFyYnkgdGhyZWF0IHBvb2wuXG4gKiBBbGwgbW9kZXMgYXJlIGxhbmUtYXdhcmUgdmlhIHRoZSBOZWFyYnlUaHJlYXRRdWVyeSBtb2R1bGUuXG4gKi9cbmV4cG9ydCB0eXBlIFN3b3JkVGFyZ2V0aW5nTW9kZSA9XG4gIHwgXCJuZWFyZXN0SW5DdXJyZW50TGFuZVwiICAgLy8gY2xvc2VzdCBlbmVteSBpbiB0aGUgcGxheWVyJ3MgYWN0aXZlIGxhbmVcbiAgfCBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIiAgICAvLyBjbG9zZXN0IGVuZW15IHJlZ2FyZGxlc3Mgb2YgbGFuZVxuICB8IFwiZnJvbnRNb3N0VGhyZWF0XCIgICAgICAgIC8vIGZhcnRoZXN0LWFkdmFuY2VkIChoaWdoZXN0IHkpIGVuZW15IGluIHJhbmdlXG4gIHwgXCJjbHVzdGVyTmVhclBsYXllclwiOyAgICAgLy8gcGlja3MgdXAgdG8gbWF4VGFyZ2V0cyBlbmVtaWVzIHdpdGhpbiByZWFjaFxuXG5leHBvcnQgaW50ZXJmYWNlIFN3b3JkTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZmFtaWx5OiBcInN3b3JkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICAvKipcbiAgICogQXR0YWNrIHJhbmdlIGluIHBpeGVscyAoYXQgc2NhbGUgMSkuXG4gICAqIFN3b3JkIG9ubHkgc3dpbmdzIHdoZW4gYW4gZW5lbXkgZW50ZXJzIHRoaXMgcmFkaXVzLlxuICAgKi9cbiAgcmFuZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuZ3VsYXIgd2lkdGggb2YgdGhlIHNsYXNoIGFyYyBpbiBkZWdyZWVzLlxuICAgKiBXaWRlciA9IGhlYXZpZXIsIGhpdHMgbW9yZSBlbmVtaWVzIHBlciBzd2luZy5cbiAgICovXG4gIGFyY0RlZ3JlZXM6IG51bWJlcjtcbiAgLyoqIERhbWFnZSBwZXIgaGl0LiAqL1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGxldmVsIDUgZGFtYWdlIHBlciBoaXQuXG4gICAqXG4gICAqIExldmVsIDEgdXNlcyBkYW1hZ2UsIGxldmVsIDUgdXNlcyBkYW1hZ2VBdExldmVsNSwgYW5kIGludGVybWVkaWF0ZSBsZXZlbHNcbiAgICogaW50ZXJwb2xhdGUuIFVzZSB0aGlzIHdoZW4gZHVwbGljYXRlIHBpY2t1cHMgc2hvdWxkIGluY3JlYXNlIHRvdGFsIEhQXG4gICAqIGNsZWFyZWQgd2l0aG91dCBjaGFuZ2luZyBwcm94aW1pdHkgcnVsZXMuXG4gICAqL1xuICBkYW1hZ2VBdExldmVsNT86IG51bWJlcjtcbiAgLyoqIENvb2xkb3duIGJldHdlZW4gc3dpbmdzIGluIHNlY29uZHMuIFN3b3JkcyBkbyBub3QgZmlyZSBvbiBhIHRpbWVyOyBvbmx5IHdoZW4gYSB0YXJnZXQgZXhpc3RzLiAqL1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgLyoqIE1heGltdW0gdGFyZ2V0cyBoaXQgcGVyIHN3aW5nLiAqL1xuICBtYXhUYXJnZXRzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCB2ZXJ0aWNhbCByZWFjaCBpbiBhdXRob3JlZCB0cmFjayByb3dzLlxuICAgKlxuICAgKiBIZWF2eSBzd2VlcGluZyBzd29yZHMgY2FuIHVzZSB0aGlzIHdpdGggcmVwZWF0ZWQgcGlja3VwczogbGV2ZWwgMSB1c2VzXG4gICAqIGxldmVsMSByb3dzLCBsZXZlbCA1IHVzZXMgbGV2ZWw1IHJvd3MsIGFuZCBpbnRlcm1lZGlhdGUgbGV2ZWxzIGludGVycG9sYXRlLlxuICAgKiBUaGlzIGV4cGFuZHMgYWZmZWN0ZWQgcm93cyBhZnRlciBhIGNsb3NlIHRhcmdldCBpcyBmb3VuZDsgaXQgZG9lcyBub3RcbiAgICogbG9vc2VuIHRoZSBuZWFyLXBsYXllciBwcm94aW1pdHkgdGhyZXNob2xkLlxuICAgKi9cbiAgcm93UmVhY2g/OiB7XG4gICAgbGV2ZWwxOiBudW1iZXI7XG4gICAgbGV2ZWw1OiBudW1iZXI7XG4gIH07XG4gIC8qKiBMYW5lLWF3YXJlIHRhcmdldCBzZWxlY3Rpb24gbW9kZS4gKi9cbiAgdGFyZ2V0aW5nTW9kZTogU3dvcmRUYXJnZXRpbmdNb2RlO1xuICAvKiogVmlzdWFsIHNsYXNoIGFyYyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuICovXG4gIHNsYXNoRHVyYXRpb25NczogbnVtYmVyO1xuICAvKiogUHJpbWFyeSBzbGFzaCBjb2xvci4gKi9cbiAgY29sb3I6IE5lb25Db2xvck5hbWU7XG4gIC8qKiBWaXN1YWwgdGhpY2tuZXNzIG11bHRpcGxpZXIgZm9yIHRoZSBzaGFyZWQgc3dvcmQgdHJhaWwuIDEuMCA9IGRlZmF1bHQuICovXG4gIHNsYXNoVGhpY2tuZXNzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBkZXNpZ24gbm90ZXMuIE5vdCB1c2VkIGJ5IHJ1bnRpbWU7IGRvY3VtZW50cyBpbnRlbnQgZm9yIGZ1dHVyZSBhZ2VudHMuXG4gICAqL1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZhbWlseSBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIFN3b3JkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJzd29yZFwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3dvcmRcIjtcblxuICAvKipcbiAgICogRmFtaWx5LWxldmVsIGltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgKiAtIFN3b3JkcyBhcmUgbm90IHBlcmlvZC1iYXNlZCBsaWtlIGd1bnMuIFRoZXkgc3dpbmcgb25seSB3aGVuIGEgdmFsaWQgdGFyZ2V0XG4gICAqICAgaXMgd2l0aGluIHJhbmdlIGFuZCBjb29sZG93biBpcyByZWFkeS4gVGhleSBpZGxlIHNpbGVudGx5IG90aGVyd2lzZS5cbiAgICogLSBPbmUgYWN0aXZlIHN3b3JkIHBlciBwbGF5ZXIgKGZhbWlseS1zY29wZWQgZXhjbHVzaXZpdHkpLlxuICAgKiAtIFJlcGVhdGVkIHBpY2t1cHMgb2YgdGhlIHNhbWUgc3dvcmQgaW5jcmVhc2UgdGhhdCBzd29yZCdzIGFjdGl2ZSBsZXZlbC5cbiAgICogLSBDYW4gY29leGlzdCB3aXRoIGFuIGFjdGl2ZSBHdW4gYW5kIGFuIGFjdGl2ZSBTaGllbGQgc2ltdWx0YW5lb3VzbHkuXG4gICAqIC0gVGFyZ2V0aW5nIGlzIGxhbmUtYXdhcmUgdmlhIHF1ZXJ5TmVhcmJ5VGhyZWF0cygpLlxuICAgKiAtIFRoZSBzbGFzaCBhbmltYXRpb24gcnVucyBmb3Igc2xhc2hEdXJhdGlvbk1zIG1pbGxpc2Vjb25kcywgdGhlbiBmYWRlcy5cbiAgICogLSBEYW1hZ2UgaXMgYXBwbGllZCBpbW1lZGlhdGVseSB3aGVuIHRoZSBzd2luZyBzdGFydHMgKG5vdCBhdCBhbmltYXRpb24gZW5kKS5cbiAgICpcbiAgICogUHJlY2VkZW5jZTogc3dvcmQgYXR0YWNrcyBvY2N1ciBhZnRlciBzaGllbGRCbG9jay9zaGllbGRQdWxzZSBidXQgYmVmb3JlXG4gICAqIHNoaWVsZENvbnRhY3REYW1hZ2UgYW5kIHNoaWVsZEF1cmEuIFNlZSBtYWluLnRzIG5lYXJQbGF5ZXJFZmZlY3RPcmRlci5cbiAgICovXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgLyoqXG4gICAgICogQXJjIEJsYWRlIC0gQ29yZSBzd29yZC4gRmFzdCwgY3VydmVkLCB0YXJnZXRzIG5lYXJlc3QgZW5lbXkgaW4gbGFuZS5cbiAgICAgKiBTaG9ydCBjb29sZG93biBtYWtlcyBpdCB1c2VmdWwgYWdhaW5zdCBkZW5zZSBzaW5nbGUtbGFuZSB3YXZlcy5cbiAgICAgKi9cbiAgICBhcmNCbGFkZToge1xuICAgICAgbGFiZWw6IFwiQXJjIEJsYWRlXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJzdGFydGVyXCIsXG4gICAgICByYW5nZTogNTIsXG4gICAgICBhcmNEZWdyZWVzOiA3MCxcbiAgICAgIGRhbWFnZTogMS41LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAwLjU1LFxuICAgICAgbWF4VGFyZ2V0czogMixcbiAgICAgIHRhcmdldGluZ01vZGU6IFwibmVhcmVzdEluQ3VycmVudExhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMTUwLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgc2xhc2hUaGlja25lc3M6IDEuMCxcbiAgICAgIGFnZW50Tm90ZXM6IFwiRmFzdCBhbmQgc2hhcnAuIEN1cnZlZCBuZW9uIHNsYXNoLiAxMjAtMTgwbXMgZmVlbC4gRmFkaW5nIGFmdGVyaW1hZ2UuIExpa2UgYSB3aGlwLWxpa2Uga2F0YW5hIGFyYy5cIixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXZlciAtIEhlYXZ5IHN3b3JkLiBTbG93ZXIsIGJ1dCBzd2VlcHMgYWNyb3NzIGV2ZXJ5IGNvbHVtbi5cbiAgICAgKiBTdGFydHMgd2l0aCAyIHJvd3Mgb2YgdmVydGljYWwgcmVhY2ggYW5kIHNjYWxlcyB0byA0IHJvd3MgYXQgbGV2ZWwgNS5cbiAgICAgKi9cbiAgICBjbGVhdmVyOiB7XG4gICAgICBsYWJlbDogXCJDbGVhdmVyXCIsXG4gICAgICBmYW1pbHk6IFwic3dvcmRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIHJhbmdlOiA2OCxcbiAgICAgIGFyY0RlZ3JlZXM6IDM2MCxcbiAgICAgIGRhbWFnZTogMi40LFxuICAgICAgZGFtYWdlQXRMZXZlbDU6IDMuNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMS4zNSxcbiAgICAgIG1heFRhcmdldHM6IDEyLFxuICAgICAgcm93UmVhY2g6IHsgbGV2ZWwxOiAyLCBsZXZlbDU6IDQgfSxcbiAgICAgIHRhcmdldGluZ01vZGU6IFwibmVhcmVzdEluRWl0aGVyTGFuZVwiLFxuICAgICAgc2xhc2hEdXJhdGlvbk1zOiAyNjAsXG4gICAgICBjb2xvcjogXCJvcmFuZ2VcIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjksXG4gICAgICBhZ2VudE5vdGVzOiBcIkhlYXZ5IGFsbC1jb2x1bW4gc3dlZXAuIFJlcGVhdGVkIGNsZWF2ZXIgcGlja3VwcyBsZXZlbCBpdCB1cCBmcm9tIDIgcm93cyBvZiByZWFjaCB0byA0IHJvd3MgYXQgbGV2ZWwgNSwgd2l0aCBtb3JlIHRvdGFsIGRhbWFnZSBwZXIgc3dpbmcuXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU3dvcmRNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIHN3b3JkXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm1lbWJlcnMpIGFzIEFycmF5PFtzdHJpbmcsIFN3b3JkTWVtYmVyXT4pIHtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5yYW5nZSA+IDAsIGAke2lkfSByYW5nZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmFyY0RlZ3JlZXMgPiAwICYmIHN3b3JkLmFyY0RlZ3JlZXMgPD0gMzYwLCBgJHtpZH0gYXJjRGVncmVlcyBtdXN0IGJlIGluICgwLCAzNjBdLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZSA+IDAsIGAke2lkfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIGlmIChzd29yZC5kYW1hZ2VBdExldmVsNSAhPT0gdW5kZWZpbmVkKSB0aGlzLnJlcXVpcmUoc3dvcmQuZGFtYWdlQXRMZXZlbDUgPj0gc3dvcmQuZGFtYWdlLCBgJHtpZH0gZGFtYWdlQXRMZXZlbDUgbXVzdCBiZSBhdCBsZWFzdCBkYW1hZ2UuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuY29vbGRvd25TZWNvbmRzID4gMCwgYCR7aWR9IGNvb2xkb3duU2Vjb25kcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLm1heFRhcmdldHMgPj0gMSwgYCR7aWR9IG1heFRhcmdldHMgbXVzdCBiZSBhdCBsZWFzdCAxLmApO1xuICAgICAgaWYgKHN3b3JkLnJvd1JlYWNoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKHN3b3JkLnJvd1JlYWNoLmxldmVsMSkgJiYgc3dvcmQucm93UmVhY2gubGV2ZWwxID49IDEsIGAke2lkfSByb3dSZWFjaC5sZXZlbDEgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKHN3b3JkLnJvd1JlYWNoLmxldmVsNSkgJiYgc3dvcmQucm93UmVhY2gubGV2ZWw1ID49IHN3b3JkLnJvd1JlYWNoLmxldmVsMSwgYCR7aWR9IHJvd1JlYWNoLmxldmVsNSBtdXN0IGJlIGF0IGxlYXN0IGxldmVsMS5gKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5zbGFzaER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gc2xhc2hEdXJhdGlvbk1zIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hUaGlja25lc3MgPiAwLCBgJHtpZH0gc2xhc2hUaGlja25lc3MgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShuZW9uUGFsZXR0ZVtzd29yZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3dvcmRGYW1pbHkgPSBuZXcgU3dvcmRGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTd29yZElkID0ga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkIH0gZnJvbSBcIi4vT3JiRmFtaWx5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMZWdlbmRFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQmFsYW5jZSB7XG4gIGVuZW15SHA6IG51bWJlcjtcbiAgZW5lbXlTcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRGVmaW5pdGlvbiB7XG4gIGxheW91dDogc3RyaW5nO1xuICBsZWdlbmQ6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIFRyYWNrTGVnZW5kRW50cnk+PjtcbiAgYmFsYW5jZTogVHJhY2tCYWxhbmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTWVtYmVyIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgZGVmaW5pdGlvbjogVHJhY2tEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRmFtaWx5TWVtYmVyPFRyYWNrSWQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZW52aXJvbm1lbnQ6IHtcbiAgICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgfTtcbiAgdHJhY2tJZHM6IHJlYWRvbmx5IFRyYWNrSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFja0VudGl0eSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN5bWJvbDogc3RyaW5nO1xuICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgbGFuZUluZGV4OiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgZGlzdGFuY2VGcm9tUGxheWVyOiBudW1iZXI7XG4gIHNwZWVkTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5jb25zdCBpc0VuZW15ID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIik7XG5jb25zdCBlbmVteUlkRnJvbVRyYWNrSWQgPSAoaWQ6IHN0cmluZyk6IE9yYklkIHwgbnVsbCA9PiB7XG4gIGlmIChpZCA9PT0gXCJlbmVteS5iYXNpY1wiKSByZXR1cm4gXCJiYXNpY09yYlwiO1xuICBpZiAoIWlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBudWxsO1xuICBjb25zdCBjYW5kaWRhdGUgPSBpZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG4gIHJldHVybiBjYW5kaWRhdGUgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBjYW5kaWRhdGUgYXMgT3JiSWQgOiBudWxsO1xufTtcblxuZnVuY3Rpb24gcGFyc2VUcmFja1Jvd3ModHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBzb3VyY2VJbmRleDogbnVtYmVyIH0+IHtcbiAgY29uc3Qgcm93cyA9IHRyYWNrLmxheW91dFxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcCgodGV4dCwgc291cmNlSW5kZXgpID0+ICh7IHRleHQ6IHRleHQudHJpbSgpLCBzb3VyY2VJbmRleDogc291cmNlSW5kZXggKyAxIH0pKVxuICAgIC5maWx0ZXIocm93ID0+IHJvdy50ZXh0Lmxlbmd0aCA+IDApO1xuXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGF5b3V0IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcm93LlwiKTtcbiAgcmV0dXJuIHJvd3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYWNrRGVmaW5pdGlvbih0cmFjazogVHJhY2tEZWZpbml0aW9uKTogUGFyc2VkVHJhY2tFbnRpdHlbXSB7XG4gIGlmICh0cmFjay5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgZm9yIChjb25zdCBbc3ltYm9sLCBlbnRyeV0gb2YgT2JqZWN0LmVudHJpZXModHJhY2subGVnZW5kKSkge1xuICAgIGlmIChbLi4uc3ltYm9sXS5sZW5ndGggIT09IDEgfHwgL1xcc3xcXHwvLnRlc3Qoc3ltYm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQga2V5IFwiJHtzeW1ib2x9XCIgbXVzdCBiZSBvbmUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIG90aGVyIHRoYW4gXCJ8XCIuYCk7XG4gICAgfVxuICAgIGlmICghZW50cnkuaWQpIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIHN5bWJvbCBcIiR7c3ltYm9sfVwiIG11c3QgaGF2ZSBhbiBpZC5gKTtcbiAgICBpZiAoZW50cnkuc3BlZWQgIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5zcGVlZCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvd3MgPSBwYXJzZVRyYWNrUm93cyh0cmFjayk7XG4gIGxldCBsZWZ0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgbGV0IHJpZ2h0V2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50aXRpZXM6IFBhcnNlZFRyYWNrRW50aXR5W10gPSBbXTtcblxuICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCBwaXBlQ291bnQgPSBbLi4ucm93LnRleHRdLmZpbHRlcihjaGFyYWN0ZXIgPT4gY2hhcmFjdGVyID09PSBcInxcIikubGVuZ3RoO1xuICAgIGlmIChwaXBlQ291bnQgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBcInxcIiBzZXBhcmF0b3I7IGZvdW5kICR7cGlwZUNvdW50fS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gcm93LnRleHQuc3BsaXQoXCJ8XCIpLm1hcChzaWRlID0+IHNpZGUucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgICBsZWZ0V2lkdGggPz89IGxlZnQubGVuZ3RoO1xuICAgIHJpZ2h0V2lkdGggPz89IHJpZ2h0Lmxlbmd0aDtcblxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gbGVmdFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgbGVmdCB3aWR0aCAke2xlZnQubGVuZ3RofTsgZXhwZWN0ZWQgJHtsZWZ0V2lkdGh9LmApO1xuICAgIH1cbiAgICBpZiAocmlnaHQubGVuZ3RoICE9PSByaWdodFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBoYXMgcmlnaHQgd2lkdGggJHtyaWdodC5sZW5ndGh9OyBleHBlY3RlZCAke3JpZ2h0V2lkdGh9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RhbmNlRnJvbVBsYXllciA9IHJvd3MubGVuZ3RoIC0gMSAtIHJvd0luZGV4O1xuICAgIGZvciAoY29uc3QgW3NpZGUsIGxhbmVdIG9mIFtbXCJsZWZ0XCIsIGxlZnRdLCBbXCJyaWdodFwiLCByaWdodF1dIGFzIGNvbnN0KSB7XG4gICAgICBjb25zdCBvY2N1cGllZEJ5ID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICAgIFsuLi5sYW5lXS5mb3JFYWNoKChzeW1ib2wsIGxhbmVJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHRyYWNrLmxlZ2VuZFtzeW1ib2xdO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gdXNlcyBzeW1ib2wgXCIke3N5bWJvbH1cIiBhdCAke3NpZGV9IGxhbmUgaW5kZXggJHtsYW5lSW5kZXh9LCBidXQgaXQgaXMgbWlzc2luZyBmcm9tIHRoZSBsZWdlbmQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5LmlkID09PSBcImVtcHR5XCIpIHJldHVybjtcbiAgICAgICAgY29uc3QgZW5lbXlJZCA9IGVuZW15SWRGcm9tVHJhY2tJZChlbnRyeS5pZCk7XG4gICAgICAgIGNvbnN0IGNvbHVtblNwYW4gPSBlbmVteUlkID8gb3JiRmFtaWx5Lm1lbWJlcnNbZW5lbXlJZF0uY29sdW1uU3BhbiA6IDE7XG4gICAgICAgIGlmIChsYW5lSW5kZXggKyBjb2x1bW5TcGFuID4gbGFuZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IG5lZWRzICR7Y29sdW1uU3Bhbn0gY29sdW1ucyBhbmQgb25seSAke2xhbmUubGVuZ3RoIC0gbGFuZUluZGV4fSByZW1haW4uYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgICBjb25zdCBvY2N1cGllZCA9IG9jY3VwaWVkQnkuZ2V0KGxhbmVJbmRleCArIG9mZnNldCk7XG4gICAgICAgICAgaWYgKG9jY3VwaWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBwbGFjZXMgJHtlbnRyeS5pZH0gb24gJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4ICsgb2Zmc2V0fSwgYWxyZWFkeSBvY2N1cGllZCBieSAke29jY3VwaWVkfS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgY29sdW1uU3Bhbjsgb2Zmc2V0KyspIG9jY3VwaWVkQnkuc2V0KGxhbmVJbmRleCArIG9mZnNldCwgZW50cnkuaWQpO1xuXG4gICAgICAgIGVudGl0aWVzLnB1c2goe1xuICAgICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgc2lkZSxcbiAgICAgICAgICBsYW5lSW5kZXgsXG4gICAgICAgICAgY29sdW1uU3BhbixcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBkaXN0YW5jZUZyb21QbGF5ZXIsXG4gICAgICAgICAgc3BlZWRNdWx0aXBsaWVyOiAoZW50cnkuc3BlZWQgPz8gMSkgKiAoaXNFbmVteShlbnRyeS5pZCkgPyB0cmFjay5iYWxhbmNlLmVuZW15U3BlZWQgOiAxKSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGllcy5zb3J0KChhLCBiKSA9PlxuICAgIGEuZGlzdGFuY2VGcm9tUGxheWVyIC0gYi5kaXN0YW5jZUZyb21QbGF5ZXIgfHxcbiAgICBhLnJvd0luZGV4IC0gYi5yb3dJbmRleCB8fFxuICAgIGEuc2lkZS5sb2NhbGVDb21wYXJlKGIuc2lkZSkgfHxcbiAgICBhLmxhbmVJbmRleCAtIGIubGFuZUluZGV4KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBndW5GYW1pbHkgfSBmcm9tIFwiLi9HdW5GYW1pbHlcIjtcbmltcG9ydCB7IGxpZ2h0bmluZ0ZhbWlseSB9IGZyb20gXCIuL0xpZ2h0bmluZ0ZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuL011bHRpcGxpZXJGYW1pbHlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuaW1wb3J0IHsgc2hpZWxkRmFtaWx5IH0gZnJvbSBcIi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzaG93c3RvcHBlckZhbWlseSB9IGZyb20gXCIuL1Nob3dzdG9wcGVyRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSB9IGZyb20gXCIuL1N3b3JkRmFtaWx5XCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiwgdHlwZSBUcmFja01lbWJlciB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuXG4vKipcbiAqIEdsb2JhbCAwLWJhc2VkIGNvbHVtbiBpbmRleCBhY3Jvc3MgYm90aCBsYW5lcy5cbiAqXG4gKiBDdXJyZW50IGxheW91dCBzaGFwZTpcbiAqIC0gY29sdW1ucyAwLTQgYXJlIHRoZSBsZWZ0IGxhbmVcbiAqIC0gY29sdW1ucyA1LTkgYXJlIHRoZSByaWdodCBsYW5lXG4gKlxuICogRXhhbXBsZXM6XG4gKiAtIDIgPSBsZWZ0IGxhbmUgbWlkZGxlXG4gKiAtIDcgPSByaWdodCBsYW5lIG1pZGRsZVxuICovXG5leHBvcnQgdHlwZSBUcmFja0NvbHVtbiA9IG51bWJlcjtcblxuLyoqXG4gKiBGcmllbmRseSBjb2x1bW4gY29uc3RhbnRzIGZvciB0aGUgY3VycmVudCAyLWxhbmUgLyA1LWNvbHVtbiB0cmFjayBmb3JtYXQuXG4gKlxuICogVGhlc2UgYXJlIG9ubHkgc3VnYXIuIFRoZSBidWlsZGVyIHN0aWxsIGFjY2VwdHMgcmF3IG51bWJlcnMgZm9yIGZhc3QgYXV0aG9yaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQ29sdW1ucyB7XG4gIHJlYWRvbmx5IGxlZnQ6IHtcbiAgICByZWFkb25seSBvdXRlcjogMDtcbiAgICByZWFkb25seSBuZWFyT3V0ZXI6IDE7XG4gICAgcmVhZG9ubHkgbWlkOiAyO1xuICAgIHJlYWRvbmx5IG5lYXJJbm5lcjogMztcbiAgICByZWFkb25seSBpbm5lcjogNDtcbiAgfTtcbiAgcmVhZG9ubHkgcmlnaHQ6IHtcbiAgICByZWFkb25seSBpbm5lcjogNTtcbiAgICByZWFkb25seSBuZWFySW5uZXI6IDY7XG4gICAgcmVhZG9ubHkgbWlkOiA3O1xuICAgIHJlYWRvbmx5IG5lYXJPdXRlcjogODtcbiAgICByZWFkb25seSBvdXRlcjogOTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21tb24gZXhwb3J0ZWQgY29sdW1uIGNvbnN0YW50cy5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBidWlsZGVyLmVuZW15KFwiYmFzaWNcIiwgeyBjb2x1bW46IGMubGVmdC5taWQgfSlcbiAqIGJ1aWxkZXIud2VhcG9uKFwic3dvcmQuYXJjQmxhZGVcIiwgeyBjb2x1bW46IGMucmlnaHQubWlkIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBjOiBUcmFja0NvbHVtbnMgPSB7XG4gIGxlZnQ6IHsgb3V0ZXI6IDAsIG5lYXJPdXRlcjogMSwgbWlkOiAyLCBuZWFySW5uZXI6IDMsIGlubmVyOiA0IH0sXG4gIHJpZ2h0OiB7IGlubmVyOiA1LCBuZWFySW5uZXI6IDYsIG1pZDogNywgbmVhck91dGVyOiA4LCBvdXRlcjogOSB9LFxufTtcblxuZXhwb3J0IHR5cGUgVHJhY2tFbmVteVJlZiA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFRyYWNrV2VhcG9uUmVmID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVHJhY2tQaWNrdXBSZWYgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tQbGFjZW1lbnRPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBlci1zeW1ib2wgc3BlZWQgbXVsdGlwbGllciBlbWl0dGVkIGludG8gdGhlIHRyYWNrIGxlZ2VuZC5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBUaGUgZGVmYXVsdCBpcyAxLCBhbmQgZnV0dXJlIHRyYWNrIGVkaXRzXG4gICAqIHNob3VsZCBwcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHkgYXNrcyBmb3Igc3BlZWQgdHVuaW5nLlxuICAgKiBDaGFuZ2luZyB0aGlzIHZhbHVlIGlzIGEgc2lnbmlmaWNhbnQgYmFsYW5jZSBjaGFuZ2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xpbmVPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgY291bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEVtcHR5IHJvd3MgYmV0d2VlbiBlYWNoIGVuZW15LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAwLiBJbiBwcmVzc3VyZSBzZWN0aW9ucywgb21pdCB0aGlzIHVubGVzcyB0aGUgZ2FwIGlzXG4gICAqIGludGVudGlvbmFsOyBwcmVzc3VyZSBzaG91bGQgbm9ybWFsbHkgcGxhY2UgZW5lbWllcyBldmVyeSByb3cuXG4gICAqL1xuICBnYXA/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyByZXBlYXRlZCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMge1xuICBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdO1xuICBjb3VudDogbnVtYmVyO1xuICAvKipcbiAgICogRW1wdHkgcm93cyBiZXR3ZWVuIGVhY2ggZW5lbXkuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuIEluIHByZXNzdXJlIHNlY3Rpb25zLCBvbWl0IHRoaXMgdW5sZXNzIHRoZSBnYXAgaXNcbiAgICogaW50ZW50aW9uYWw7IHByZXNzdXJlIHNob3VsZCBub3JtYWxseSBwbGFjZSBlbmVtaWVzIGV2ZXJ5IHJvdy5cbiAgICovXG4gIGdhcD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHJlcGVhdGVkIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1dhbGxPcHRpb25zIHtcbiAgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXTtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIHdhbGwuXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RyaXBPcHRpb25zIHtcbiAgY29sdW1uOiBUcmFja0NvbHVtbjtcbiAgcm93czogbnVtYmVyO1xuICAvKipcbiAgICogUGxhY2Ugb25lIGVuZW15IGV2ZXJ5IE4gcm93cy5cbiAgICpcbiAgICogRHJpcCBpcyBpbnRlbnRpb25hbGx5IHNwYXJzZS4gUHJlZmVyIGxpbmUvYWx0ZXJuYXRpbmcgd2l0aG91dCBhIGdhcCBmb3JcbiAgICogbm9ybWFsIHByZXNzdXJlLCBhbmQgdXNlIGRyaXAgb25seSB3aGVuIHRoZSBzcGFyc2UgY2FkZW5jZSBpcyBkZWxpYmVyYXRlLlxuICAgKi9cbiAgZXZlcnk6IG51bWJlcjtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGVuZW15IHNwZWVkIG92ZXJyaWRlIGZvciB0aGlzIGRyaXAgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICBhdChyb3dPZmZzZXQ6IG51bWJlcik6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIHdhbGwoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tXYWxsT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGJhbGFuY2U6IHtcbiAgICBlbmVteUhwOiBudW1iZXI7XG4gICAgZW5lbXlTcGVlZDogbnVtYmVyO1xuICB9O1xuICBwbGF5ZXJTdGFydENvbHVtbj86IFRyYWNrQ29sdW1uO1xuICBsYW5lV2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyIHtcbiAgZW5lbXkoaWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IFRyYWNrQnVpbGRlcjtcbiAgcmVzcGl0ZShyb3dzOiBudW1iZXIpOiBUcmFja0J1aWxkZXI7XG4gIHNlY3Rpb24obmFtZTogc3RyaW5nLCByb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IFRyYWNrQnVpbGRlcjtcbiAgLyoqXG4gICAqIEFkZCBhIGRhbmdlci1mb2N1c2VkIHNlY3Rpb24gd2l0aCBhIGZpeGVkIGR1cmF0aW9uLlxuICAgKlxuICAgKiBQcmVzc3VyZSBzaG91bGQgdXN1YWxseSBjb250YWluIGVuZW15IHBsYWNlbWVudCBldmVyeSByb3cuIFVzZSBleHBsaWNpdFxuICAgKiBnYXBzIG9yIGRyaXAgcGF0dGVybnMgb25seSB3aGVuIHRoZSBxdWlldCBzcGFjZSBpcyBpbnRlbnRpb25hbC5cbiAgICovXG4gIHByZXNzdXJlKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogVHJhY2tCdWlsZGVyO1xuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgYnVpbGQoKTogVHJhY2tNZW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tCdWlsZGVyRmFjdG9yeSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xufVxuXG5pbnRlcmZhY2UgUGxhY2VtZW50IHtcbiAgcm93OiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xuICBzcGVlZDogbnVtYmVyO1xuICBzcGFuOiBudW1iZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRMYW5lV2lkdGggPSA1O1xuY29uc3QgZW1wdHlTeW1ib2wgPSBcIi5cIjtcbmNvbnN0IHBsYXllclN5bWJvbCA9IFwiTVwiO1xuY29uc3QgZW5lbXlBbGlhc2VzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYmFzaWM6IFwiZW5lbXkuYmFzaWNcIixcbiAgYmFzaWNPcmI6IFwiZW5lbXkuYmFzaWNPcmJcIixcbiAgZ2xhc3M6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgZ2xhc3NTaGllbGQ6IFwiZW5lbXkuZ2xhc3NTaGllbGRcIixcbiAgd2luZ2VyOiBcImVuZW15LndpbmdlclwiLFxuICB0YW5rOiBcImVuZW15LnRhbmtcIixcbn07XG5jb25zdCB3ZWFwb25QcmVmaXhlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGd1bjogXCJwaWNrdXAud2VhcG9uLmd1bi5cIixcbiAgc2hpZWxkOiBcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiLFxuICBzd29yZDogXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLFxuICBsaWdodG5pbmc6IFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIsXG59O1xuY29uc3QgcGlja3VwQWxpYXNlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwidW5pdE11bHRpcGxpZXIuMnhcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbiAgXCJ1bml0TXVsdGlwbGllci5zcXVhZFBsdXNPbmVcIjogXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIixcbiAgXCJzaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCI6IFwicGlja3VwLnNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIixcbiAgXCJkcmFnb25zQnJlYXRoXCI6IFwicGlja3VwLnNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIixcbn07XG5jb25zdCBwcmVmZXJyZWRTeW1ib2xzOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJlbmVteS5iYXNpY1wiOiBcIkVcIixcbiAgXCJlbmVteS5iYXNpY09yYlwiOiBcIkVcIixcbiAgXCJlbmVteS5nbGFzc1NoaWVsZFwiOiBcIkRcIixcbiAgXCJlbmVteS53aW5nZXJcIjogXCJXXCIsXG4gIFwiZW5lbXkudGFua1wiOiBcIlRcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5wdWxzZVBpc3RvbFwiOiBcIkdcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5uZWVkbGVyU21nXCI6IFwiTlwiLFxuICBcInBpY2t1cC53ZWFwb24uZ3VuLmJ1cnN0Q2FyYmluZVwiOiBcIkJcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5oZWF2eUNhbm5vblwiOiBcIkhcIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5zcGxpdHRlclJpZmxlXCI6IFwiUlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmxpZ2h0R3VhcmRcIjogXCJTXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuc2F0ZWxsaXRlR3VhcmRcIjogXCJWXCIsXG4gIFwicGlja3VwLndlYXBvbi5zaGllbGQuaGV4R3VhcmRcIjogXCJYXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5hcmNCbGFkZVwiOiBcImFcIixcbiAgXCJwaWNrdXAud2VhcG9uLnN3b3JkLmNsZWF2ZXJcIjogXCJjXCIsXG4gIFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuY2hhaW5TcGFya1wiOiBcIkxcIixcbiAgXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCI6IFwiRlwiLFxuICBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiOiBcIjJcIixcbiAgXCJwaWNrdXAuc2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiOiBcIlFcIixcbn07XG5jb25zdCBmYWxsYmFja1N5bWJvbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoyMzQ1Njc4OSEjJCUmKissLS86Ozw9Pj9AXl9+XCIuc3BsaXQoXCJcIilcbiAgLmZpbHRlcihzeW1ib2wgPT4gc3ltYm9sICE9PSBlbXB0eVN5bWJvbCAmJiBzeW1ib2wgIT09IHBsYXllclN5bWJvbCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVJbnRlZ2VyKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGFuIGludGVnZXIuYCk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIodmFsdWU6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICByZXF1aXJlSW50ZWdlcih2YWx1ZSwgbGFiZWwpO1xuICBpZiAodmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcGVlZChzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsYWJlbDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWUgPSBzcGVlZCA/PyAxO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBzcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLmApO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVuZW15SWQoaWQ6IFRyYWNrRW5lbXlSZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gZW5lbXlBbGlhc2VzW2lkXSA/PyBgZW5lbXkuJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVXZWFwb25JZChpZDogVHJhY2tXZWFwb25SZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IGRvdEluZGV4ID0gaWQuaW5kZXhPZihcIi5cIik7XG4gIGlmIChkb3RJbmRleCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgbXVzdCB1c2UgZmFtaWx5LmlkIHNob3J0aGFuZCBvciBhIGNhbm9uaWNhbCBwaWNrdXAud2VhcG9uIGlkLmApO1xuICBjb25zdCBmYW1pbHkgPSBpZC5zbGljZSgwLCBkb3RJbmRleCk7XG4gIGNvbnN0IG1lbWJlciA9IGlkLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gIGNvbnN0IHByZWZpeCA9IHdlYXBvblByZWZpeGVzW2ZhbWlseV07XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgRXJyb3IoYFdlYXBvbiBpZCBcIiR7aWR9XCIgaGFzIHVua25vd24gd2VhcG9uIGZhbWlseSBcIiR7ZmFtaWx5fVwiLmApO1xuICByZXR1cm4gYCR7cHJlZml4fSR7bWVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBpY2t1cElkKGlkOiBUcmFja1BpY2t1cFJlZik6IHN0cmluZyB7XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLlwiKSkgcmV0dXJuIGlkO1xuICByZXR1cm4gcGlja3VwQWxpYXNlc1tpZF0gPz8gYHBpY2t1cC4ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGVuZW15TWVtYmVySWQoY2Fub25pY2FsSWQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAoY2Fub25pY2FsSWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFjYW5vbmljYWxJZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNhbm9uaWNhbElkLnNsaWNlKFwiZW5lbXkuXCIubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDYW5vbmljYWxJZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgaWYgKGVuZW15SWQpIHtcbiAgICBpZiAoIShlbmVteUlkIGluIG9yYkZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVuZW15IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRhdG9yczogcmVhZG9ubHkgW3N0cmluZywgUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCBzdHJpbmddW10gPSBbXG4gICAgW1wicGlja3VwLndlYXBvbi5ndW4uXCIsIGd1bkZhbWlseS5tZW1iZXJzLCBcImd1blwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIiwgc2hpZWxkRmFtaWx5Lm1lbWJlcnMsIFwic2hpZWxkXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIsIHN3b3JkRmFtaWx5Lm1lbWJlcnMsIFwic3dvcmRcIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIsIGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzLCBcImxpZ2h0bmluZ1wiXSxcbiAgXTtcbiAgZm9yIChjb25zdCBbcHJlZml4LCBtZW1iZXJzLCBsYWJlbF0gb2YgdmFsaWRhdG9ycykge1xuICAgIGlmICghaWQuc3RhcnRzV2l0aChwcmVmaXgpKSBjb250aW51ZTtcbiAgICBjb25zdCBtZW1iZXJJZCA9IGlkLnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gJHtsYWJlbH0gaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHJldHVybjtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShcInBpY2t1cC51bml0TXVsdGlwbGllci5cIi5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtdWx0aXBsaWVyIGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAuc2hvd3N0b3BwZXIuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShcInBpY2t1cC5zaG93c3RvcHBlci5cIi5sZW5ndGgpO1xuICAgIGlmICghKG1lbWJlcklkIGluIHNob3dzdG9wcGVyRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gc2hvd3N0b3BwZXIgaWQgXCIke2lkfVwiLmApO1xuICAgIHJldHVybjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHRyYWNrIGVudGl0eSBpZCBcIiR7aWR9XCIuYCk7XG59XG5cbmZ1bmN0aW9uIHNwYW5Gb3IoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGVuZW15SWQgPSBlbmVteU1lbWJlcklkKGlkKTtcbiAgcmV0dXJuIGVuZW15SWQgJiYgZW5lbXlJZCBpbiBvcmJGYW1pbHkubWVtYmVycyA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzXS5jb2x1bW5TcGFuIDogMTtcbn1cblxuY2xhc3MgVHJhY2tCdWlsZGVyQ29yZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGFuZVdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2VtZW50czogUGxhY2VtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBjdXJzb3IgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucykge1xuICAgIHRoaXMubGFuZVdpZHRoID0gb3B0aW9ucy5sYW5lV2lkdGggPz8gZGVmYXVsdExhbmVXaWR0aDtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHRoaXMubGFuZVdpZHRoLCBcIlRyYWNrIGxhbmVXaWR0aFwiKTtcbiAgICBpZiAodGhpcy5sYW5lV2lkdGggPCAzKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYW5lV2lkdGggbXVzdCBiZSBhdCBsZWFzdCAzLlwiKTtcbiAgICBpZiAoIW9wdGlvbnMubGFiZWwudHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBsYWJlbCBpcyByZXF1aXJlZC5cIik7XG4gICAgaWYgKCFvcHRpb25zLmRlc2NyaXB0aW9uLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlIcCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15SHAgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgaWYgKG9wdGlvbnMuYmFsYW5jZS5lbmVteVNwZWVkIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlTcGVlZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMucGxheWVyU3RhcnRDb2x1bW4gPz8gYy5sZWZ0Lm1pZCwgXCJwbGF5ZXJTdGFydENvbHVtblwiLCAxKTtcbiAgfVxuXG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZUVuZW15SWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJlbmVteVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplV2VhcG9uSWQoaWQpLCBvcHRpb25zLCB0aGlzLmN1cnNvciwgXCJ3ZWFwb25cIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwaWNrdXAoaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwicGlja3VwXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWR2YW5jZVJvd3Mocm93czogbnVtYmVyKTogdGhpcyB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihyb3dzLCBcImFkdmFuY2VSb3dzIHJvd3NcIik7XG4gICAgdGhpcy5jdXJzb3IgKz0gcm93cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuYWR2YW5jZVJvd3Mocm93cyk7XG4gIH1cblxuICBzZWN0aW9uKG5hbWU6IHN0cmluZywgcm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICBpZiAoIW5hbWUudHJpbSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBzZWN0aW9uIG5hbWUgaXMgcmVxdWlyZWQuXCIpO1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgYFRyYWNrIHNlY3Rpb24gXCIke25hbWV9XCIgcm93c2ApO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBuZXcgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUodGhpcywgbmFtZSwgdGhpcy5jdXJzb3IsIHJvd3MpO1xuICAgIGJ1aWxkKHNlY3Rpb24pO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcmVzc3VyZShyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJwcmVzc3VyZVwiLCByb3dzLCBidWlsZCk7XG4gIH1cblxuICByZWJ1aWxkKHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuc2VjdGlvbihcInJlYnVpbGRcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRMaW5lKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImxpbmVcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkQWx0ZXJuYXRpbmcodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiYWx0ZXJuYXRpbmdcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZFdhbGwodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwid2FsbFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkRHJpcCh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJkcmlwXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkU2VjdGlvbkVuZW15KGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZUVuZW15SWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgZW5lbXlgKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25XZWFwb24oYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHdlYXBvbmApO1xuICB9XG5cbiAgYWRkU2VjdGlvblBpY2t1cChiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucGxhY2Uobm9ybWFsaXplUGlja3VwSWQoaWQpLCBvcHRpb25zLCBiYXNlUm93ICsgcm93T2Zmc2V0LCBgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcGlja3VwYCk7XG4gIH1cblxuICBhZGRMaW5lKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHJlcXVpcmVJbnRlZ2VyKGdhcCwgYCR7bGFiZWx9IGdhcGApO1xuICAgIGlmIChnYXAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGdhcCBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMuY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW46IG9wdGlvbnMuY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRBbHRlcm5hdGluZyhiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuY291bnQsIGAke2xhYmVsfSBjb3VudGApO1xuICAgIGlmIChvcHRpb25zLmNvbHVtbnMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IGNvbHVtbnMgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBjb2x1bW4uYCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBvcHRpb25zLmNvbHVtbnNbaW5kZXggJSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoXTtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3cgKyBpbmRleCAqIChnYXAgKyAxKSwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFdhbGwoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIG9wdGlvbnMuY29sdW1ucykge1xuICAgICAgdGhpcy5wbGFjZShlbmVteUlkLCB7IGNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdywgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGFkZERyaXAoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMucm93cywgYCR7bGFiZWx9IHJvd3NgKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMuZXZlcnksIGAke2xhYmVsfSBldmVyeWApO1xuICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IG9wdGlvbnMucm93czsgb2Zmc2V0ICs9IG9wdGlvbnMuZXZlcnkpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW46IG9wdGlvbnMuY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgb2Zmc2V0LCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGQoKTogVHJhY2tNZW1iZXIge1xuICAgIGNvbnN0IHBsYXllclN0YXJ0Q29sdW1uID0gdGhpcy5vcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQ7XG4gICAgY29uc3QgbWF4UGxhY2VtZW50Um93ID0gdGhpcy5wbGFjZW1lbnRzLnJlZHVjZSgobWF4LCBpdGVtKSA9PiBNYXRoLm1heChtYXgsIGl0ZW0ucm93KSwgMCk7XG4gICAgY29uc3Qgcm93Q291bnQgPSBNYXRoLm1heCh0aGlzLmN1cnNvciwgbWF4UGxhY2VtZW50Um93ICsgMSwgMSk7XG4gICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubGFuZVdpZHRoICogMiB9LCAoKSA9PiBlbXB0eVN5bWJvbCkpO1xuICAgIGNvbnN0IG9jY3VwaWVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93Q291bnQgfSwgKCkgPT4gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKSk7XG4gICAgY29uc3QgbGVnZW5kID0gbmV3IE1hcDxzdHJpbmcsIHsgaWQ6IHN0cmluZzsgc3BlZWQ6IG51bWJlciB9PigpO1xuICAgIGxlZ2VuZC5zZXQoZW1wdHlTeW1ib2wsIHsgaWQ6IFwiZW1wdHlcIiwgc3BlZWQ6IDEgfSk7XG4gICAgbGVnZW5kLnNldChwbGF5ZXJTeW1ib2wsIHsgaWQ6IFwicGxheWVyLnN0YXJ0XCIsIHNwZWVkOiAxIH0pO1xuICAgIGNvbnN0IHVzZWRTeW1ib2xzID0gbmV3IFNldChbZW1wdHlTeW1ib2wsIHBsYXllclN5bWJvbF0pO1xuICAgIGNvbnN0IHN5bWJvbEJ5RW50aXR5ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IHRoaXMuY2VsbHNGb3IocGxheWVyU3RhcnRDb2x1bW4sIDEpO1xuICAgIGZvciAoY29uc3QgY2VsbCBvZiBwbGF5ZXJDZWxscykgb2NjdXBpZWRbMF0uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBcInBsYXllci5zdGFydFwiKTtcbiAgICByb3dzWzBdW3BsYXllclN0YXJ0Q29sdW1uXSA9IHBsYXllclN5bWJvbDtcblxuICAgIGZvciAoY29uc3QgcGxhY2VtZW50IG9mIHRoaXMucGxhY2VtZW50cykge1xuICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5zeW1ib2xGb3IocGxhY2VtZW50LCB1c2VkU3ltYm9scywgc3ltYm9sQnlFbnRpdHkpO1xuICAgICAgbGVnZW5kLnNldChzeW1ib2wsIHsgaWQ6IHBsYWNlbWVudC5pZCwgc3BlZWQ6IHBsYWNlbWVudC5zcGVlZCB9KTtcbiAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0aGlzLmNlbGxzRm9yKHBsYWNlbWVudC5jb2x1bW4sIHBsYWNlbWVudC5zcGFuKSkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IG9jY3VwaWVkW3BsYWNlbWVudC5yb3ddLmdldChjZWxsLmdsb2JhbENvbHVtbik7XG4gICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgcGxhY2VtZW50IG92ZXJsYXAgYXQgcm93ICR7cGxhY2VtZW50LnJvd30sIGNvbHVtbiAke2NlbGwuZ2xvYmFsQ29sdW1ufS4gRXhpc3RpbmcgaWQgXCIke2V4aXN0aW5nfVwiLCBuZXcgaWQgXCIke3BsYWNlbWVudC5pZH1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5zZXQoY2VsbC5nbG9iYWxDb2x1bW4sIHBsYWNlbWVudC5pZCk7XG4gICAgICB9XG4gICAgICByb3dzW3BsYWNlbWVudC5yb3ddW3BsYWNlbWVudC5jb2x1bW5dID0gc3ltYm9sO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7XG4gICAgICBsYXlvdXQ6IGBcXG4ke3Jvd3Muc2xpY2UoKS5yZXZlcnNlKCkubWFwKHJvdyA9PiBgJHtyb3cuc2xpY2UoMCwgdGhpcy5sYW5lV2lkdGgpLmpvaW4oXCJcIil9IHwgJHtyb3cuc2xpY2UodGhpcy5sYW5lV2lkdGgpLmpvaW4oXCJcIil9YCkuam9pbihcIlxcblwiKX1cXG5gLFxuICAgICAgbGVnZW5kOiBPYmplY3QuZnJvbUVudHJpZXMoWy4uLmxlZ2VuZC5lbnRyaWVzKCldLm1hcCgoW3N5bWJvbCwgZW50cnldKSA9PiBbXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgZW50cnkuc3BlZWQgPT09IDEgPyB7IGlkOiBlbnRyeS5pZCB9IDogeyBpZDogZW50cnkuaWQsIHNwZWVkOiBlbnRyeS5zcGVlZCB9LFxuICAgICAgXSkpLFxuICAgICAgYmFsYW5jZTogdGhpcy5vcHRpb25zLmJhbGFuY2UsXG4gICAgfTtcbiAgICBwYXJzZVRyYWNrRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMub3B0aW9ucy5sYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBlbnZpcm9ubWVudDogdGhpcy5vcHRpb25zLmVudmlyb25tZW50LFxuICAgICAgZGVmaW5pdGlvbixcbiAgICB9O1xuICB9XG5cbiAgdmFsaWRhdGVTZWN0aW9uT2Zmc2V0KHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3dPZmZzZXQsIGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiByb3cgb2Zmc2V0YCk7XG4gICAgaWYgKHJvd09mZnNldCA8IDAgfHwgcm93T2Zmc2V0ID49IHJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldCAke3Jvd09mZnNldH0gaXMgb3V0c2lkZSB0aGUgMC0ke3Jvd3MgLSAxfSBzZWN0aW9uIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvblNwYW4oc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIHJvd3M6IG51bWJlciwgY292ZXJlZFJvd3M6IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIoY292ZXJlZFJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiBjb3ZlcmVkIHJvd3NgKTtcbiAgICB0aGlzLnZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZSwgcm93T2Zmc2V0LCByb3dzKTtcbiAgICBjb25zdCBsYXN0T2Zmc2V0ID0gcm93T2Zmc2V0ICsgY292ZXJlZFJvd3MgLSAxO1xuICAgIGlmIChsYXN0T2Zmc2V0ID49IHJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcGF0dGVybiByZWFjaGVzIHJvdyBvZmZzZXQgJHtsYXN0T2Zmc2V0fSwgb3V0c2lkZSB0aGUgMC0ke3Jvd3MgLSAxfSBzZWN0aW9uIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGxhY2UoaWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zLCByb3c6IG51bWJlciwgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKHJvdywgYCR7bGFiZWx9IHJvd2ApO1xuICAgIGlmIChyb3cgPCAwKSB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9IHJvdyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgdmFsaWRhdGVDYW5vbmljYWxJZChpZCk7XG4gICAgY29uc3Qgc3BhbiA9IHNwYW5Gb3IoaWQpO1xuICAgIHRoaXMudmFsaWRhdGVDb2x1bW4ob3B0aW9ucy5jb2x1bW4sIGAke2xhYmVsfSBjb2x1bW5gLCBzcGFuKTtcbiAgICB0aGlzLnBsYWNlbWVudHMucHVzaCh7XG4gICAgICByb3csXG4gICAgICBjb2x1bW46IG9wdGlvbnMuY29sdW1uLFxuICAgICAgaWQsXG4gICAgICBzcGVlZDogbm9ybWFsaXplU3BlZWQob3B0aW9ucy5zcGVlZCwgbGFiZWwpLFxuICAgICAgc3BhbixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVDb2x1bW4oY29sdW1uOiBUcmFja0NvbHVtbiwgbGFiZWw6IHN0cmluZywgc3BhbjogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIoY29sdW1uLCBsYWJlbCk7XG4gICAgY29uc3QgdG90YWxXaWR0aCA9IHRoaXMubGFuZVdpZHRoICogMjtcbiAgICBpZiAoY29sdW1uIDwgMCB8fCBjb2x1bW4gPj0gdG90YWxXaWR0aCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSAke2NvbHVtbn0gaXMgb3V0c2lkZSB0aGUgMC0ke3RvdGFsV2lkdGggLSAxfSB0cmFjayByYW5nZS5gKTtcbiAgICBjb25zdCBzaWRlQ29sdW1uID0gY29sdW1uICUgdGhpcy5sYW5lV2lkdGg7XG4gICAgaWYgKHNpZGVDb2x1bW4gKyBzcGFuID4gdGhpcy5sYW5lV2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGNhbm5vdCBmaXQgYSAke3NwYW59LWNvbHVtbiBlbnRpdHkgaW5zaWRlIGEgJHt0aGlzLmxhbmVXaWR0aH0tY29sdW1uIGxhbmUuYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjZWxsc0Zvcihjb2x1bW46IG51bWJlciwgc3BhbjogbnVtYmVyKTogQXJyYXk8eyBnbG9iYWxDb2x1bW46IG51bWJlciB9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHNwYW4gfSwgKF8sIG9mZnNldCkgPT4gKHsgZ2xvYmFsQ29sdW1uOiBjb2x1bW4gKyBvZmZzZXQgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW1ib2xGb3IocGxhY2VtZW50OiBQbGFjZW1lbnQsIHVzZWRTeW1ib2xzOiBTZXQ8c3RyaW5nPiwgc3ltYm9sQnlFbnRpdHk6IE1hcDxzdHJpbmcsIHN0cmluZz4pOiBzdHJpbmcge1xuICAgIGNvbnN0IGtleSA9IGAke3BsYWNlbWVudC5pZH1AJHtwbGFjZW1lbnQuc3BlZWR9YDtcbiAgICBjb25zdCBleGlzdGluZyA9IHN5bWJvbEJ5RW50aXR5LmdldChrZXkpO1xuICAgIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xuICAgIGNvbnN0IHByZWZlcnJlZCA9IHByZWZlcnJlZFN5bWJvbHNbcGxhY2VtZW50LmlkXTtcbiAgICBjb25zdCBzeW1ib2wgPSBwcmVmZXJyZWQgJiYgIXVzZWRTeW1ib2xzLmhhcyhwcmVmZXJyZWQpXG4gICAgICA/IHByZWZlcnJlZFxuICAgICAgOiBmYWxsYmFja1N5bWJvbHMuZmluZChjYW5kaWRhdGUgPT4gIXVzZWRTeW1ib2xzLmhhcyhjYW5kaWRhdGUpKTtcbiAgICBpZiAoIXN5bWJvbCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYnVpbGRlciByYW4gb3V0IG9mIG9uZS1jaGFyYWN0ZXIgbGVnZW5kIHN5bWJvbHMuXCIpO1xuICAgIHVzZWRTeW1ib2xzLmFkZChzeW1ib2wpO1xuICAgIHN5bWJvbEJ5RW50aXR5LnNldChrZXksIHN5bWJvbCk7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfVxufVxuXG5jbGFzcyBUcmFja1NlY3Rpb25CdWlsZGVyQ29yZSBpbXBsZW1lbnRzIFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICBwcml2YXRlIHJvd09mZnNldCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQ6IFRyYWNrQnVpbGRlckNvcmUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYXNlUm93OiBudW1iZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3dzOiBudW1iZXIsXG4gICkge31cblxuICBhdChyb3dPZmZzZXQ6IG51bWJlcik6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvbk9mZnNldCh0aGlzLm5hbWUsIHJvd09mZnNldCwgdGhpcy5yb3dzKTtcbiAgICB0aGlzLnJvd09mZnNldCA9IHJvd09mZnNldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uRW5lbXkodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRTZWN0aW9uV2VhcG9uKHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvblBpY2t1cCh0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRMaW5lKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGxpbmVgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFsdGVybmF0aW5nKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgKG9wdGlvbnMuY291bnQgLSAxKSAqIChnYXAgKyAxKSArIDEpO1xuICAgIHRoaXMucGFyZW50LmFkZEFsdGVybmF0aW5nKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGFsdGVybmF0aW5nYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC5hZGRXYWxsKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIHdhbGxgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyaXAoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tEcmlwT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCBvcHRpb25zLnJvd3MpO1xuICAgIHRoaXMucGFyZW50LmFkZERyaXAodGhpcy5iYXNlUm93ICsgdGhpcy5yb3dPZmZzZXQsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIGBzZWN0aW9uIFwiJHt0aGlzLm5hbWV9XCIgZHJpcGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0J1aWxkZXI6IFRyYWNrQnVpbGRlckZhY3RvcnkgPSB7XG4gIGNyZWF0ZShvcHRpb25zOiBUcmFja0J1aWxkZXJPcHRpb25zKTogVHJhY2tCdWlsZGVyIHtcbiAgICByZXR1cm4gbmV3IFRyYWNrQnVpbGRlckNvcmUob3B0aW9ucyk7XG4gIH0sXG59O1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIgfSBmcm9tIFwiLi4vVHJhY2tEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFRyYWNrVGhlbWVJZCA9IFwiZ3VuU2Nob29sXCIgfCBcImd1YXJkQmxhZGVzXCIgfCBcImNyeXN0YWxTaWVnZVwiIHwgXCJzd2FybUJsb29tXCIgfCBcIm1pcnJvckFycmF5XCI7XG5leHBvcnQgdHlwZSBUcmFja1RpZXIgPSAxIHwgMiB8IDM7XG5leHBvcnQgdHlwZSBUcmFja05vZGVTaGFwZUlkID0gXCJodW50ZXItZXllXCIgfCBcImJydWlzZXItcHJpc21cIiB8IFwiZWxpdGUtc3RhclwiIHwgXCJ0cmljay12b3J0ZXhcIiB8IFwidGFuay1yZWFjdG9yXCIgfCBcInNwaWtlLWxhbmNlXCIgfCBcImh1bnRlci1ib2x0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tDYXRhbG9nRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgdGhlbWU6IFRyYWNrVGhlbWVJZDtcbiAgdGllcjogVHJhY2tUaWVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrRmFtaWx5Q2F0YWxvZ0VudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIGFjY2VudDogc3RyaW5nO1xuICB0cmFja0lkczogcmVhZG9ubHkgVHJhY2tDYXRhbG9nSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1RoZW1lQ2F0YWxvZ0VudHJ5IHtcbiAgaWQ6IFRyYWNrVGhlbWVJZDtcbiAgbGFiZWw6IHN0cmluZztcbiAgbm9kZVNoYXBlSWRzOiByZWFkb25seSBUcmFja05vZGVTaGFwZUlkW107XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja1RoZW1lQ2F0YWxvZyA9IHtcbiAgZ3VuU2Nob29sOiB7XG4gICAgaWQ6IFwiZ3VuU2Nob29sXCIsXG4gICAgbGFiZWw6IFwiR3VuIFNjaG9vbFwiLFxuICAgIG5vZGVTaGFwZUlkczogW1wiaHVudGVyLWV5ZVwiLCBcImJydWlzZXItcHJpc21cIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgZ3VhcmRCbGFkZXM6IHtcbiAgICBpZDogXCJndWFyZEJsYWRlc1wiLFxuICAgIGxhYmVsOiBcIkd1YXJkIEJsYWRlc1wiLFxuICAgIG5vZGVTaGFwZUlkczogW1wiZWxpdGUtc3RhclwiLCBcInNwaWtlLWxhbmNlXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIGlkOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIGxhYmVsOiBcIkNyeXN0YWwgU2llZ2VcIixcbiAgICBub2RlU2hhcGVJZHM6IFtcInRhbmstcmVhY3RvclwiLCBcImJydWlzZXItcHJpc21cIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgc3dhcm1CbG9vbToge1xuICAgIGlkOiBcInN3YXJtQmxvb21cIixcbiAgICBsYWJlbDogXCJTd2FybSBCbG9vbVwiLFxuICAgIG5vZGVTaGFwZUlkczogW1widHJpY2stdm9ydGV4XCIsIFwiaHVudGVyLWV5ZVwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxuICBtaXJyb3JBcnJheToge1xuICAgIGlkOiBcIm1pcnJvckFycmF5XCIsXG4gICAgbGFiZWw6IFwiTWlycm9yIEFycmF5XCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJzcGlrZS1sYW5jZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxUcmFja1RoZW1lSWQsIFRyYWNrVGhlbWVDYXRhbG9nRW50cnk+O1xuXG5leHBvcnQgY29uc3QgdHJhY2tDYXRhbG9nID0ge1xuICBcIm5lb24tbmVidWxhZS0xXCI6IHtcbiAgICBpZDogXCJuZW9uLW5lYnVsYWUtMVwiLFxuICAgIGxhYmVsOiBcIkZpcnN0IEdsb3dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGd1bi1mb3J3YXJkIE5lb24gTmVidWxhZSBvcGVuZXIgd2l0aCBjbGVhciByZWJ1aWxkIHNoZWx2ZXMgYW5kIG9ubHkgYSBmZXcgc2hpZWxkIHNhZmV0eSBuZXRzLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcIm5lb24tbmVidWxhZS0yXCI6IHtcbiAgICBpZDogXCJuZW9uLW5lYnVsYWUtMlwiLFxuICAgIGxhYmVsOiBcIkRyaWZ0IExlc3NvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbG9uZ2VyIE5lb24gTmVidWxhZSBndW4gbGVzc29uIHRoYXQgYWRkcyB3aW5nIHByZXNzdXJlLCBzdHJvbmdlciBmaXJlYXJtIGNob2ljZXMsIGFuZCBzcGFyc2Ugc2hpZWxkIHJlbGllZi5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJuZW9uLW5lYnVsYWUtM1wiOiB7XG4gICAgaWQ6IFwibmVvbi1uZWJ1bGFlLTNcIixcbiAgICBsYWJlbDogXCJOZWJ1bGEgR2F0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBOZW9uIE5lYnVsYWUgZ3VuIGZpbmFsZSBsYXllcnMgaGVhdmllciBmaXJlYXJtcywgdGFua3MsIGFuZCBzdXN0YWluZWQgbGFuZSByZWFkaW5nIHdpdGhvdXQgbGVhbmluZyBvbiBzcGVlZCBjaGFuZ2VzLlwiLFxuICAgIHNjZW5lSWQ6IFwibmVvbkhhbGxcIixcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcImF1cm9yYS0xXCI6IHtcbiAgICBpZDogXCJhdXJvcmEtMVwiLFxuICAgIGxhYmVsOiBcIlNreWJyZWFrXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gQXVyb3JhIG9wZW5lciBmb2N1c2VkIG9uIHNoaWVsZHMsIHNob3J0IHN3b3JkIHJlYWRzLCBhbmQgcGF0aWVudCBjbG9zZS1yYW5nZSBjbGVhbnVwLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcImF1cm9yYS0yXCI6IHtcbiAgICBpZDogXCJhdXJvcmEtMlwiLFxuICAgIGxhYmVsOiBcIlJpYmJvbiBTdG9ybVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1cm9yYSBwcmVzc3VyZSBleHBhbmRzIGludG8gYWx0ZXJuYXRpbmcgc2hpZWxkIHJlYnVpbGRzLCB3aWRlciBzd29yZCBjaG9pY2VzLCBhbmQgY2x1c3RlcmVkIGNsb3NlLXJhbmdlIHRocmVhdHMuXCIsXG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwiYXVyb3JhLTNcIjoge1xuICAgIGlkOiBcImF1cm9yYS0zXCIsXG4gICAgbGFiZWw6IFwiTWFnbmV0aWMgRGF3blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBBdXJvcmEgZmluYWxlIGFza3MgZm9yIGRlbGliZXJhdGUgc2hpZWxkIHRpbWluZyBhbmQgc3dvcmQgc2VsZWN0aW9uIGFnYWluc3QgbG9uZywgcmVhZGFibGUgdGhyZWF0IHdhdmVzLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcImNyeXN0YWwtZm9yZ2UtMVwiOiB7XG4gICAgaWQ6IFwiY3J5c3RhbC1mb3JnZS0xXCIsXG4gICAgbGFiZWw6IFwiUHJpc20gSWduaXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIENyeXN0YWwgRm9yZ2Ugb3BlbmVyIGJ1aWx0IGFyb3VuZCBidXJzdCBmaXJlLCBnbGFzcyBkZWNveXMsIGFuZCBlYXJseSBoZWF2eS10aHJlYXQgcmVoZWFyc2FsLlwiLFxuICAgIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJjcnlzdGFsLWZvcmdlLTJcIjoge1xuICAgIGlkOiBcImNyeXN0YWwtZm9yZ2UtMlwiLFxuICAgIGxhYmVsOiBcIkZhY2V0IFJ1blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNyeXN0YWwgRm9yZ2UgZGVuc2l0eSBzaGFycGVucyB3aXRoIGhlYXZpZXIgZ3Vucywgc3R1cmRpZXIgc2hpZWxkcywgYW5kIHRhbmsgYnJlYWtzIGZyYW1lZCBieSBnbGFzcyBkZWNveXMuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcImNyeXN0YWwtZm9yZ2UtM1wiOiB7XG4gICAgaWQ6IFwiY3J5c3RhbC1mb3JnZS0zXCIsXG4gICAgbGFiZWw6IFwiR2xhc3MgSGFtbWVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIENyeXN0YWwgRm9yZ2UgZmluYWxlIGNvbW1pdHMgdG8gaGVhdnkgd2VhcG9uIHBheW9mZnMsIHJlcGVhdGVkIHRhbmsgbGFuZXMsIGFuZCBwcmlzbWF0aWMgZGVjb3kgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcInZvaWQtZ2FyZGVuLTFcIjoge1xuICAgIGlkOiBcInZvaWQtZ2FyZGVuLTFcIixcbiAgICBsYWJlbDogXCJCbG9vbSBTaWduYWxcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIFZvaWQgR2FyZGVuIG9wZW5lciBhYm91dCBncm93aW5nIHRoZSBzcXVhZCBlYXJseSBhbmQgc3VzdGFpbmluZyBjYWxtIGNyb3NzLWxhbmUgYmxvb20gcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwidm9pZC1nYXJkZW4tMlwiOiB7XG4gICAgaWQ6IFwidm9pZC1nYXJkZW4tMlwiLFxuICAgIGxhYmVsOiBcIlJvb3QgTGF0dGljZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZvaWQgR2FyZGVuIGFkZHMgZGVuc2VyIHNxdWFkIGdyb3d0aCB3aW5kb3dzLCBzcGxpdCB3ZWFwb24gc3VwcG9ydCwgYW5kIHNsb3ctYmxvb21pbmcgcGFpcmVkIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcInZvaWQtZ2FyZGVuLTNcIjoge1xuICAgIGlkOiBcInZvaWQtZ2FyZGVuLTNcIixcbiAgICBsYWJlbDogXCJOaWdodCBPcmNoYXJkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFZvaWQgR2FyZGVuIGZpbmFsZSBsZWFucyBpbnRvIHNxdWFkIHJlY292ZXJ5LCBsYXllcmVkIHN1cHBvcnQgcGlja3VwcywgYW5kIGJyb2FkIG9yZ2FuaWMgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG4gIFwic29sYXItYXJyYXktMVwiOiB7XG4gICAgaWQ6IFwic29sYXItYXJyYXktMVwiLFxuICAgIGxhYmVsOiBcIlBhbmVsIERhd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIFNvbGFyIEFycmF5IG9wZW5lciB3aXRoIG1pcnJvcmVkIHJlYWRzLCBzcGxpdC1sYW5lIHdlYXBvbiB0aW1pbmcsIGFuZCBicmlnaHQgYnV0IG1lYXN1cmVkIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICAgIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJzb2xhci1hcnJheS0yXCI6IHtcbiAgICBpZDogXCJzb2xhci1hcnJheS0yXCIsXG4gICAgbGFiZWw6IFwiSGVsaW9zdGF0IFJ1c2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb2xhciBBcnJheSBwcmVzc3VyZSBncm93cyB0aHJvdWdoIG1pcnJvcmVkIHdhbGxzLCBwcmVjaXNpb24gcmVidWlsZHMsIGFuZCBhbHRlcm5hdGluZyBvdXRlci1sYW5lIHN1cmdlcy5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwic29sYXItYXJyYXktM1wiOiB7XG4gICAgaWQ6IFwic29sYXItYXJyYXktM1wiLFxuICAgIGxhYmVsOiBcIk1pcnJvciBaZW5pdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgU29sYXIgQXJyYXkgZmluYWxlIG1peGVzIG1pcnJvcmVkIHRhbmsgYnJlYWtzLCBzcGxpdC1maXJlIHJlYnVpbGRzLCBhbmQgbG9uZy1mb3JtIHByZWNpc2lvbiBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHRpZXI6IDMsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0NhdGFsb2dFbnRyeT47XG5cbmV4cG9ydCB0eXBlIFRyYWNrQ2F0YWxvZ0lkID0ga2V5b2YgdHlwZW9mIHRyYWNrQ2F0YWxvZztcblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5Q2F0YWxvZyA9IHtcbiAgbmVvbk5lYnVsYWU6IHtcbiAgICBpZDogXCJuZW9uTmVidWxhZVwiLFxuICAgIGxhYmVsOiBcIk5lb24gTmVidWxhZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbGVhcm5pbmcgYXJjIGFib3V0IGxhbmVzLCBwaWNrdXBzLCBzaGllbGRzLCBhbmQgY29udHJvbGxlZCBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgYWNjZW50OiBcIiNmZjNiZDVcIixcbiAgICB0cmFja0lkczogW1wibmVvbi1uZWJ1bGFlLTFcIiwgXCJuZW9uLW5lYnVsYWUtMlwiLCBcIm5lb24tbmVidWxhZS0zXCJdLFxuICB9LFxuICBhdXJvcmE6IHtcbiAgICBpZDogXCJhdXJvcmFcIixcbiAgICBsYWJlbDogXCJBdXJvcmFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEZW5zZSBwbGFuZXRhcnkgYXNzYXVsdHMgd2l0aCBicmlnaHRlciByZWNvdmVyeSB3aW5kb3dzIGFuZCBzaGFycGVyIHRocmVhdCB3YXZlcy5cIixcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICAgIGFjY2VudDogXCIjMjBlYWZmXCIsXG4gICAgdHJhY2tJZHM6IFtcImF1cm9yYS0xXCIsIFwiYXVyb3JhLTJcIiwgXCJhdXJvcmEtM1wiXSxcbiAgfSxcbiAgY3J5c3RhbEZvcmdlOiB7XG4gICAgaWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgbGFiZWw6IFwiQ3J5c3RhbCBGb3JnZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByaXNtYXRpYyBmYWN0b3J5IGxhbmVzIHdpdGggc2hhcnAgcHJlc3N1cmUsIGdsYXNzIGRlY295cywgYW5kIGhlYXZ5IGNyeXN0YWxsaW5lIGJyZWFrcy5cIixcbiAgICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIGFjY2VudDogXCIjOWI0MmZmXCIsXG4gICAgdHJhY2tJZHM6IFtcImNyeXN0YWwtZm9yZ2UtMVwiLCBcImNyeXN0YWwtZm9yZ2UtMlwiLCBcImNyeXN0YWwtZm9yZ2UtM1wiXSxcbiAgfSxcbiAgdm9pZEdhcmRlbjoge1xuICAgIGlkOiBcInZvaWRHYXJkZW5cIixcbiAgICBsYWJlbDogXCJWb2lkIEdhcmRlblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJpb2x1bWluZXNjZW50IG5pZ2h0IGxhbmVzIHdpdGggc3BhcnNlIGJsb29tcywgZGVjb3lzLCBhbmQgY29udHJvbGxlZCByZWNvdmVyeSBwb2NrZXRzLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIGFjY2VudDogXCIjNGI4NmZmXCIsXG4gICAgdHJhY2tJZHM6IFtcInZvaWQtZ2FyZGVuLTFcIiwgXCJ2b2lkLWdhcmRlbi0yXCIsIFwidm9pZC1nYXJkZW4tM1wiXSxcbiAgfSxcbiAgc29sYXJBcnJheToge1xuICAgIGlkOiBcInNvbGFyQXJyYXlcIixcbiAgICBsYWJlbDogXCJTb2xhciBBcnJheVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJyaWdodCBvcmJpdGFsIGxhbmVzIHdpdGggbWlycm9yZWQgd2FsbHMsIGZhc3Qgb3V0ZXIgc3VyZ2VzLCBhbmQgZGVjaXNpdmUgaGVhdnkgdG9vbHMuXCIsXG4gICAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gICAgYWNjZW50OiBcIiNmZmIyM2FcIixcbiAgICB0cmFja0lkczogW1wic29sYXItYXJyYXktMVwiLCBcInNvbGFyLWFycmF5LTJcIiwgXCJzb2xhci1hcnJheS0zXCJdLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tGYW1pbHlDYXRhbG9nRW50cnk+O1xuXG5leHBvcnQgdHlwZSBUcmFja0ZhbWlseUNhdGFsb2dJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseUNhdGFsb2c7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzRnJvbUNhdGFsb2cgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIE9iamVjdC5lbnRyaWVzKHRyYWNrRmFtaWx5Q2F0YWxvZykubWFwKChbaWQsIGZhbWlseV0pID0+IFtcbiAgICBpZCxcbiAgICB7XG4gICAgICBsYWJlbDogZmFtaWx5LmxhYmVsLFxuICAgICAgZGVzY3JpcHRpb246IGZhbWlseS5kZXNjcmlwdGlvbixcbiAgICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IGZhbWlseS5zY2VuZUlkIH0sXG4gICAgICB0cmFja0lkczogZmFtaWx5LnRyYWNrSWRzLFxuICAgIH0sXG4gIF0pLFxuKSBhcyB1bmtub3duIGFzIHsgcmVhZG9ubHkgW0ZhbWlseUlkIGluIFRyYWNrRmFtaWx5Q2F0YWxvZ0lkXTogVHJhY2tGYW1pbHlNZW1iZXI8VHJhY2tDYXRhbG9nSWQ+IH07XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4uL0d1bkZhbWlseVwiO1xuaW1wb3J0IHsgbGlnaHRuaW5nRmFtaWx5IH0gZnJvbSBcIi4uL0xpZ2h0bmluZ0ZhbWlseVwiO1xuaW1wb3J0IHsgbXVsdGlwbGllckZhbWlseSB9IGZyb20gXCIuLi9NdWx0aXBsaWVyRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHksIHR5cGUgT3JiSWQgfSBmcm9tIFwiLi4vT3JiRmFtaWx5XCI7XG5pbXBvcnQgeyBzaGllbGRGYW1pbHkgfSBmcm9tIFwiLi4vU2hpZWxkRmFtaWx5XCI7XG5pbXBvcnQgeyBzd29yZEZhbWlseSwgdHlwZSBTd29yZE1lbWJlciB9IGZyb20gXCIuLi9Td29yZEZhbWlseVwiO1xuaW1wb3J0IHsgYywgdHJhY2tCdWlsZGVyLCB0eXBlIFRyYWNrQnVpbGRlciwgdHlwZSBUcmFja0NvbHVtbiwgdHlwZSBUcmFja0VuZW15UmVmLCB0eXBlIFRyYWNrU2VjdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi4vVHJhY2tCdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tDYXRhbG9nLCB0eXBlIFRyYWNrQ2F0YWxvZ0lkLCB0eXBlIFRyYWNrVGhlbWVJZCwgdHlwZSBUcmFja1RpZXIgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcblxuZXhwb3J0IHR5cGUgSm91cm5leUJlYXRLaW5kID0gXCJpbnRyb1wiIHwgXCJyYW1wXCIgfCBcImxlc3NvblwiIHwgXCJwcmVzc3VyZVwiIHwgXCJyZXN0XCIgfCBcInJlYnVpbGRcIiB8IFwiY2hhbGxlbmdlXCIgfCBcImZpbmFsZVwiO1xuZXhwb3J0IHR5cGUgUHJlc3N1cmVMZXZlbCA9IFwibG93XCIgfCBcIm1lZGl1bVwiIHwgXCJoaWdoXCIgfCBcInBlYWtcIjtcbmV4cG9ydCB0eXBlIFByZXNzdXJlU3R5bGUgPSBcImNlbnRlckFsdGVybmF0aW5nXCIgfCBcIm91dGVyQWx0ZXJuYXRpbmdcIiB8IFwibGFuZUxpbmVcIiB8IFwibWlycm9yZWRXYWxsc1wiIHwgXCJ3aWRlU3dlZXBcIiB8IFwidGFua0JyZWFrXCI7XG5leHBvcnQgdHlwZSBQaWNrdXBSb2xlID0gXCJwcmltYXJ5XCIgfCBcInN1cHBvcnRcIiB8IFwiY2xvc2VSYW5nZVwiIHwgXCJ1cGdyYWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm91cm5leUJlYXRSZWNpcGUge1xuICBraW5kOiBKb3VybmV5QmVhdEtpbmQ7XG4gIHByZXNzdXJlPzogUHJlc3N1cmVMZXZlbDtcbiAgcm93cz86IG51bWJlcjtcbiAgcGlja3VwUm9sZXM/OiByZWFkb25seSBQaWNrdXBSb2xlW107XG4gIHN0eWxlcz86IHJlYWRvbmx5IFByZXNzdXJlU3R5bGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1JlY2lwZSB7XG4gIGdvYWxzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VlZDogc3RyaW5nO1xuICBqb3VybmV5OiByZWFkb25seSBKb3VybmV5QmVhdFJlY2lwZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhbWlseVJlY2lwZSB7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHByZWZlcnJlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzdXBwb3J0V2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIGNsb3NlUmFuZ2VXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgcHJlZmVycmVkRW5lbWllczogcmVhZG9ubHkgVHJhY2tFbmVteVJlZltdO1xuICBib3NzRW5lbWllczogcmVhZG9ubHkgVHJhY2tFbmVteVJlZltdO1xuICBwcmVzc3VyZVN0eWxlczogcmVhZG9ubHkgUHJlc3N1cmVTdHlsZVtdO1xuICBvcGVuaW5nV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIG9wZW5pbmdQaWNrdXBzPzogcmVhZG9ubHkgc3RyaW5nW107XG4gIHVwZ3JhZGVTcGFjaW5nOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGllclByb2ZpbGUge1xuICB0YXJnZXRSb3dzOiBudW1iZXI7XG4gIGVuZW15SHA6IG51bWJlcjtcbiAgZW5lbXlTcGVlZDogbnVtYmVyO1xuICBwcmVzc3VyZVRocmVhdDogUmVjb3JkPFByZXNzdXJlTGV2ZWwsIG51bWJlcj47XG4gIHByZXNzdXJlUm93czogUmVjb3JkPFByZXNzdXJlTGV2ZWwsIG51bWJlcj47XG4gIHJlYnVpbGRSb3dzOiBudW1iZXI7XG4gIHJlc3RSb3dzOiBudW1iZXI7XG4gIG1heFdhbGxXaWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnREZWJ1Z1N1bW1hcnkge1xuICBraW5kOiBKb3VybmV5QmVhdEtpbmQ7XG4gIHJvd3M6IG51bWJlcjtcbiAgcHJlc3N1cmU6IFByZXNzdXJlTGV2ZWwgfCBcIm5vbmVcIjtcbiAgdGhyZWF0RXN0aW1hdGU6IG51bWJlcjtcbiAgcGxheWVyUG93ZXJFc3RpbWF0ZTogbnVtYmVyO1xuICBzZWxlY3RlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZFBpY2t1cHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZEVuZW1pZXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VyRGVidWdTdW1tYXJ5IHtcbiAgc2VlZDogc3RyaW5nO1xuICBzZWVkVmFsdWU6IG51bWJlcjtcbiAgZmFtaWx5SWQ6IFRyYWNrVGhlbWVJZDtcbiAgdHJhY2tJZDogVHJhY2tDYXRhbG9nSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbiAgZ2VuZXJhdGVkUm93czogbnVtYmVyO1xuICBzZWxlY3RlZFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZFBpY2t1cHM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBzZWxlY3RlZEVuZW1pZXM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB3ZWFwb25Qb3dlcjogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgbnVtYmVyPj47XG4gIGVuZW15VGhyZWF0OiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+PjtcbiAgc2VnbWVudHM6IHJlYWRvbmx5IFNlZ21lbnREZWJ1Z1N1bW1hcnlbXTtcbiAgd2FybmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvc2VkVHJhY2tPcHRpb25zIHtcbiAgdHJhY2tJZD86IFRyYWNrQ2F0YWxvZ0lkO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgdGhlbWU6IFRyYWNrVGhlbWVJZDtcbiAgdGllcjogVHJhY2tUaWVyO1xuICBzZWVkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ29tcG9zZVJlc3VsdCB7XG4gIHRyYWNrOiBUcmFja01lbWJlcjtcbiAgZGVidWc6IENvbXBvc2VyRGVidWdTdW1tYXJ5O1xufVxuXG5pbnRlcmZhY2UgR2VuZXJhdG9yU3RhdGUge1xuICBjdXJzb3I6IG51bWJlcjtcbiAgcGxheWVyUG93ZXI6IG51bWJlcjtcbiAgY3ljbGU6IG51bWJlcjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRXZWFwb25zOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRQaWNrdXBzOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRFbmVtaWVzOiBTZXQ8c3RyaW5nPjtcbiAgcmVhZG9ubHkgc2VnbWVudHM6IFNlZ21lbnREZWJ1Z1N1bW1hcnlbXTtcbiAgcmVhZG9ubHkgd2FybmluZ3M6IHN0cmluZ1tdO1xuICBib3NzZXNQbGFjZWQ6IG51bWJlcjtcbiAgbGFzdEJvc3NUcmFja1JvdzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUm5nIHtcbiAgbmV4dCgpOiBudW1iZXI7XG4gIHBpY2s8VD4oaXRlbXM6IHJlYWRvbmx5IFRbXSk6IFQ7XG59XG5cbmNvbnN0IHRpZXJQcm9maWxlczogUmVjb3JkPFRyYWNrVGllciwgVGllclByb2ZpbGU+ID0ge1xuICAxOiB7XG4gICAgdGFyZ2V0Um93czogMTEyLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDE4LCBtZWRpdW06IDMwLCBoaWdoOiA0NCwgcGVhazogNTYgfSxcbiAgICBwcmVzc3VyZVJvd3M6IHsgbG93OiAxOCwgbWVkaXVtOiAyNiwgaGlnaDogMzQsIHBlYWs6IDQwIH0sXG4gICAgcmVidWlsZFJvd3M6IDgsXG4gICAgcmVzdFJvd3M6IDIsXG4gICAgbWF4V2FsbFdpZHRoOiA0LFxuICB9LFxuICAyOiB7XG4gICAgdGFyZ2V0Um93czogMjcwLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDIwLCBtZWRpdW06IDM0LCBoaWdoOiA1MCwgcGVhazogNjYgfSxcbiAgICBwcmVzc3VyZVJvd3M6IHsgbG93OiAyNCwgbWVkaXVtOiAzNCwgaGlnaDogNDQsIHBlYWs6IDUyIH0sXG4gICAgcmVidWlsZFJvd3M6IDksXG4gICAgcmVzdFJvd3M6IDMsXG4gICAgbWF4V2FsbFdpZHRoOiA0LFxuICB9LFxuICAzOiB7XG4gICAgdGFyZ2V0Um93czogNDMwLFxuICAgIGVuZW15SHA6IDEsXG4gICAgZW5lbXlTcGVlZDogMSxcbiAgICBwcmVzc3VyZVRocmVhdDogeyBsb3c6IDM0LCBtZWRpdW06IDU2LCBoaWdoOiA5MiwgcGVhazogMTM2IH0sXG4gICAgcHJlc3N1cmVSb3dzOiB7IGxvdzogMzAsIG1lZGl1bTogNDIsIGhpZ2g6IDU0LCBwZWFrOiA3NCB9LFxuICAgIHJlYnVpbGRSb3dzOiA4LFxuICAgIHJlc3RSb3dzOiAyLFxuICAgIG1heFdhbGxXaWR0aDogNSxcbiAgfSxcbn07XG5cbmNvbnN0IGZhbWlseVJlY2lwZXM6IFJlY29yZDxUcmFja1RoZW1lSWQsIEZhbWlseVJlY2lwZT4gPSB7XG4gIGd1blNjaG9vbDoge1xuICAgIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4ubmVlZGxlclNtZ1wiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwiZ3VuLmhlYXZ5Q2Fubm9uXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwic3dvcmQuYXJjQmxhZGVcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJnbGFzc1NoaWVsZFwiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIiwgXCJ3aWRlU3dlZXBcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAyLFxuICB9LFxuICBndWFyZEJsYWRlczoge1xuICAgIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wic3dvcmQuYXJjQmxhZGVcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgcHJlZmVycmVkRW5lbWllczogW1wiYmFzaWNcIiwgXCJnbGFzc1NoaWVsZFwiLCBcIndpbmdlclwiXSxcbiAgICBib3NzRW5lbWllczogW1widGFua1wiXSxcbiAgICBwcmVzc3VyZVN0eWxlczogW1wibGFuZUxpbmVcIiwgXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDMsXG4gIH0sXG4gIGNyeXN0YWxTaWVnZToge1xuICAgIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCIsIFwic3dvcmQuY2xlYXZlclwiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wic3dvcmQuY2xlYXZlclwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImdsYXNzU2hpZWxkXCIsIFwiYmFzaWNcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcIm1pcnJvcmVkV2FsbHNcIiwgXCJ0YW5rQnJlYWtcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwid2lkZVN3ZWVwXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICBvcGVuaW5nUGlja3VwczogW1widW5pdE11bHRpcGxpZXIuMnhcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDIsXG4gIH0sXG4gIHN3YXJtQmxvb206IHtcbiAgICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wiZ3VuLm5lZWRsZXJTbWdcIiwgXCJzd29yZC5hcmNCbGFkZVwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwibGlnaHRuaW5nLmZvcmtDYXBhY2l0b3JcIiwgXCJzaGllbGQuaGV4R3VhcmRcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJzd29yZC5jbGVhdmVyXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwid2luZ2VyXCIsIFwiZ2xhc3NTaGllbGRcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwid2lkZVN3ZWVwXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICBvcGVuaW5nUGlja3VwczogW1widW5pdE11bHRpcGxpZXIuMnhcIl0sXG4gICAgdXBncmFkZVNwYWNpbmc6IDEsXG4gIH0sXG4gIG1pcnJvckFycmF5OiB7XG4gICAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJndW4uYnVyc3RDYXJiaW5lXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInN3b3JkLmNsZWF2ZXJcIiwgXCJzaGllbGQuaGV4R3VhcmRcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBjbG9zZVJhbmdlV2VhcG9uczogW1wibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJzd29yZC5jbGVhdmVyXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwiZ2xhc3NTaGllbGRcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcIm1pcnJvcmVkV2FsbHNcIiwgXCJvdXRlckFsdGVybmF0aW5nXCIsIFwiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJ0YW5rQnJlYWtcIl0sXG4gICAgb3BlbmluZ1dlYXBvbnM6IFtcImd1bi5wdWxzZVBpc3RvbFwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAyLFxuICB9LFxufTtcblxuY29uc3QgZGVmYXVsdEpvdXJuZXk6IFJlY29yZDxUcmFja1RpZXIsIHJlYWRvbmx5IEpvdXJuZXlCZWF0UmVjaXBlW10+ID0ge1xuICAxOiBbXG4gICAgeyBraW5kOiBcImludHJvXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiXSB9LFxuICAgIHsga2luZDogXCJsZXNzb25cIiwgcHJlc3N1cmU6IFwibG93XCIgfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IFwibWVkaXVtXCIgfSxcbiAgICB7IGtpbmQ6IFwicmVzdFwiIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIgfSxcbiAgXSxcbiAgMjogW1xuICAgIHsga2luZDogXCJpbnRyb1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInJhbXBcIiwgcHJlc3N1cmU6IFwibG93XCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCJdLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIl0gfSxcbiAgICB7IGtpbmQ6IFwibGVzc29uXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJtZWRpdW1cIiwgc3R5bGVzOiBbXCJsYW5lTGluZVwiLCBcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIgfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcInBlYWtcIiB9LFxuICAgIHsga2luZDogXCJmaW5hbGVcIiwgcHJlc3N1cmU6IFwicGVha1wiIH0sXG4gIF0sXG4gIDM6IFtcbiAgICB7IGtpbmQ6IFwiaW50cm9cIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCIsIFwiY2xvc2VSYW5nZVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmFtcFwiLCBwcmVzc3VyZTogXCJsb3dcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIl0sIHN0eWxlczogW1wiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCJdIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInN1cHBvcnRcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBcImhpZ2hcIiB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwiY2xvc2VSYW5nZVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwiY2hhbGxlbmdlXCIsIHByZXNzdXJlOiBcInBlYWtcIiB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIsIHN0eWxlczogW1wid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIl0gfSxcbiAgICB7IGtpbmQ6IFwiZmluYWxlXCIsIHByZXNzdXJlOiBcInBlYWtcIiwgc3R5bGVzOiBbXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCIsIFwid2lkZVN3ZWVwXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiXSB9LFxuICBdLFxufTtcblxuY29uc3QgdHJhY2tSZWNpcGVzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBPYmplY3QuZW50cmllcyh0cmFja0NhdGFsb2cpLm1hcCgoW3RyYWNrSWQsIGVudHJ5XSkgPT4gW1xuICAgIHRyYWNrSWQsXG4gICAge1xuICAgICAgZ29hbHM6IFtlbnRyeS5kZXNjcmlwdGlvbl0sXG4gICAgICBzZWVkOiBgJHt0cmFja0lkfToke2VudHJ5LnRpZXJ9YCxcbiAgICAgIGpvdXJuZXk6IGRlZmF1bHRKb3VybmV5W2VudHJ5LnRpZXJdLFxuICAgIH0sXG4gIF0pLFxuKSBhcyB1bmtub3duIGFzIFJlY29yZDxUcmFja0NhdGFsb2dJZCwgVHJhY2tSZWNpcGU+O1xuXG5jb25zdCBhbGxDb2x1bW5zID0gW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5sZWZ0Lm1pZCwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5sZWZ0LmlubmVyLCBjLnJpZ2h0LmlubmVyLCBjLnJpZ2h0Lm5lYXJJbm5lciwgYy5yaWdodC5taWQsIGMucmlnaHQubmVhck91dGVyLCBjLnJpZ2h0Lm91dGVyXSBhcyBjb25zdDtcbmNvbnN0IGNlbnRlckNvbHVtbnMgPSBbYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdIGFzIGNvbnN0O1xuY29uc3Qgb3V0ZXJDb2x1bW5zID0gW2MubGVmdC5vdXRlciwgYy5yaWdodC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXJdIGFzIGNvbnN0O1xuY29uc3QgbGVmdENvbHVtbnMgPSBbYy5sZWZ0Lm91dGVyLCBjLmxlZnQubmVhck91dGVyLCBjLmxlZnQubWlkLCBjLmxlZnQubmVhcklubmVyLCBjLmxlZnQuaW5uZXJdIGFzIGNvbnN0O1xuY29uc3QgcmlnaHRDb2x1bW5zID0gW2MucmlnaHQuaW5uZXIsIGMucmlnaHQubmVhcklubmVyLCBjLnJpZ2h0Lm1pZCwgYy5yaWdodC5uZWFyT3V0ZXIsIGMucmlnaHQub3V0ZXJdIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiBjcmVhdGVSbmcoc2VlZDogc3RyaW5nKTogUm5nICYgeyByZWFkb25seSBzZWVkVmFsdWU6IG51bWJlciB9IHtcbiAgbGV0IHZhbHVlID0gMjE2NjEzNjI2MTtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgdmFsdWUgXj0gc2VlZC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICB2YWx1ZSA9IE1hdGguaW11bCh2YWx1ZSwgMTY3Nzc2MTkpO1xuICB9XG4gIHZhbHVlID4+Pj0gMDtcbiAgcmV0dXJuIHtcbiAgICBzZWVkVmFsdWU6IHZhbHVlLFxuICAgIG5leHQoKSB7XG4gICAgICB2YWx1ZSA9IE1hdGguaW11bCh2YWx1ZSArIDB4NmQyYjc5ZjUsIDEpO1xuICAgICAgbGV0IG1peGVkID0gdmFsdWU7XG4gICAgICBtaXhlZCA9IE1hdGguaW11bChtaXhlZCBeIG1peGVkID4+PiAxNSwgbWl4ZWQgfCAxKTtcbiAgICAgIG1peGVkIF49IG1peGVkICsgTWF0aC5pbXVsKG1peGVkIF4gbWl4ZWQgPj4+IDcsIG1peGVkIHwgNjEpO1xuICAgICAgcmV0dXJuICgobWl4ZWQgXiBtaXhlZCA+Pj4gMTQpID4+PiAwKSAvIDQyOTQ5NjcyOTY7XG4gICAgfSxcbiAgICBwaWNrPFQ+KGl0ZW1zOiByZWFkb25seSBUW10pOiBUIHtcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwaWNrIGZyb20gYW4gZW1wdHkgY29sbGVjdGlvbi5cIik7XG4gICAgICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIGl0ZW1zLmxlbmd0aCldO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbFdlYXBvbklkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uXCIpKSByZXR1cm4gaWQ7XG4gIGNvbnN0IFtmYW1pbHksIG1lbWJlcl0gPSBpZC5zcGxpdChcIi5cIik7XG4gIHJldHVybiBgcGlja3VwLndlYXBvbi4ke2ZhbWlseX0uJHttZW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gbWluaW11bVRpZXJGb3JXZWFwb24oaWQ6IHN0cmluZyk6IFRyYWNrVGllciB7XG4gIGNvbnN0IGNhbm9uaWNhbCA9IGNhbm9uaWNhbFdlYXBvbklkKGlkKTtcbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gZ3VuRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnNdO1xuICAgIHJldHVybiBtZW1iZXIucmFyaXR5ID09PSBcInN0YXJ0ZXJcIiA/IDEgOiBtZW1iZXIucmFyaXR5ID09PSBcImNvbW1vblwiID8gMiA6IDM7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zd29yZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzd29yZEZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc3dvcmRGYW1pbHkubWVtYmVyc10gYXMgU3dvcmRNZW1iZXI7XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwic3RhcnRlclwiID8gMSA6IG1lbWJlci5yYXJpdHkgPT09IFwiY29tbW9uXCIgPyAyIDogMztcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwic3RhcnRlclwiID8gMSA6IG1lbWJlci5yYXJpdHkgPT09IFwiY29tbW9uXCIgPyAyIDogMztcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBsaWdodG5pbmdGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5yYXJpdHkgPT09IFwidW5jb21tb25cIiA/IDMgOiAzO1xuICB9XG4gIHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtVGllckZvckVuZW15KGlkOiBUcmFja0VuZW15UmVmKTogVHJhY2tUaWVyIHtcbiAgY29uc3QgY2Fub25pY2FsID0gaWQgPT09IFwiYmFzaWNcIiB8fCBpZCA9PT0gXCJlbmVteS5iYXNpY1wiID8gXCJiYXNpY09yYlwiIDogaWQucmVwbGFjZSgvXmVuZW15XFwuLywgXCJcIik7XG4gIGlmIChjYW5vbmljYWwgPT09IFwidGFua1wiKSByZXR1cm4gMztcbiAgaWYgKGNhbm9uaWNhbCA9PT0gXCJ3aW5nZXJcIikgcmV0dXJuIDI7XG4gIHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiB3ZWFwb25Qb3dlcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgY2Fub25pY2FsID0gY2Fub25pY2FsV2VhcG9uSWQoaWQpO1xuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmd1bi5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBndW5GYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmd1bi5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBndW5GYW1pbHkubWVtYmVyc107XG4gICAgY29uc3QgbGV2ZWwgPSBtZW1iZXIubGV2ZWxzWzBdO1xuICAgIHJldHVybiBsZXZlbC5maXJlUmF0ZVBlclNlY29uZCAqIGxldmVsLmRhbWFnZSAqIGxldmVsLnByb2plY3RpbGVDb3VudCAqIGxldmVsLmJ1cnN0Q291bnQgKiAoMSArIGxldmVsLnBpZXJjZSAqIDAuMzUpO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gc3dvcmRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnNdIGFzIFN3b3JkTWVtYmVyO1xuICAgIHJldHVybiBtZW1iZXIuZGFtYWdlICogbWVtYmVyLm1heFRhcmdldHMgLyBtZW1iZXIuY29vbGRvd25TZWNvbmRzICogKG1lbWJlci5yb3dSZWFjaCA/IDEuMzUgOiAxKTtcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBzaGllbGRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzaGllbGRGYW1pbHkubWVtYmVyc107XG4gICAgcmV0dXJuIG1lbWJlci5tYXhDaGFyZ2VzICogMC44ICsgbWVtYmVyLnJhZGl1cyAvIDMwO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGxpZ2h0bmluZ0ZhbWlseS5tZW1iZXJzXTtcbiAgICBjb25zdCBsZXZlbCA9IG1lbWJlci5sZXZlbHNbMF07XG4gICAgcmV0dXJuIGxldmVsLmRhbWFnZSAqIChsZXZlbC5tYXhKdW1wcyArIGxldmVsLmJyYW5jaEZhbm91dCkgLyBsZXZlbC5jb29sZG93blNlY29uZHM7XG4gIH1cbiAgcmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIGVuZW15VGhyZWF0KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtZW1iZXJJZCA9IGlkID09PSBcImJhc2ljXCIgfHwgaWQgPT09IFwiZW5lbXkuYmFzaWNcIiA/IFwiYmFzaWNPcmJcIiA6IGlkLnJlcGxhY2UoL15lbmVteVxcLi8sIFwiXCIpIGFzIE9yYklkO1xuICBjb25zdCBlbmVteSA9IG9yYkZhbWlseS5tZW1iZXJzW21lbWJlcklkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc107XG4gIHJldHVybiBlbmVteS5oZWFsdGggKiAyICsgZW5lbXkuc3BlZWQgLyA1OCArIGVuZW15LmNvbHVtblNwYW4gKiAxLjQgKyBlbmVteS5jb250YWN0RGFtYWdlICogMS42ICsgZW5lbXkuaW1wYWN0UmVzaXN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZW5lbXlDb2x1bW5TcGFuKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtZW1iZXJJZCA9IGlkID09PSBcImJhc2ljXCIgfHwgaWQgPT09IFwiZW5lbXkuYmFzaWNcIiA/IFwiYmFzaWNPcmJcIiA6IGlkLnJlcGxhY2UoL15lbmVteVxcLi8sIFwiXCIpIGFzIE9yYklkO1xuICByZXR1cm4gb3JiRmFtaWx5Lm1lbWJlcnNbbWVtYmVySWQgYXMga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzXS5jb2x1bW5TcGFuO1xufVxuXG5mdW5jdGlvbiBwaWNrdXBQb3dlcihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgaWYgKGlkID09PSBcInVuaXRNdWx0aXBsaWVyLjJ4XCIgfHwgaWQgPT09IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpIHtcbiAgICByZXR1cm4gbXVsdGlwbGllckZhbWlseS5tZW1iZXJzLnNxdWFkUGx1c09uZS5zcXVhZEFkZGVkICogNDtcbiAgfVxuICBpZiAoaWQgPT09IFwic2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiIHx8IGlkID09PSBcInBpY2t1cC5zaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCIpIHtcbiAgICByZXR1cm4gMTQ7XG4gIH1cbiAgcmV0dXJuIHdlYXBvblBvd2VyKGlkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdGUoKTogR2VuZXJhdG9yU3RhdGUge1xuICByZXR1cm4ge1xuICAgIGN1cnNvcjogMSxcbiAgICBwbGF5ZXJQb3dlcjogMSxcbiAgICBjeWNsZTogMCxcbiAgICBzZWxlY3RlZFdlYXBvbnM6IG5ldyBTZXQoKSxcbiAgICBzZWxlY3RlZFBpY2t1cHM6IG5ldyBTZXQoKSxcbiAgICBzZWxlY3RlZEVuZW1pZXM6IG5ldyBTZXQoKSxcbiAgICBzZWdtZW50czogW10sXG4gICAgd2FybmluZ3M6IFtdLFxuICAgIGJvc3Nlc1BsYWNlZDogMCxcbiAgICBsYXN0Qm9zc1RyYWNrUm93OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJvd3NGb3JCZWF0KGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCBwcm9maWxlOiBUaWVyUHJvZmlsZSk6IG51bWJlciB7XG4gIGlmIChiZWF0LnJvd3MpIHJldHVybiBiZWF0LnJvd3M7XG4gIGlmIChiZWF0LmtpbmQgPT09IFwiaW50cm9cIikgcmV0dXJuIHByb2ZpbGUucmVidWlsZFJvd3M7XG4gIGlmIChiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiKSByZXR1cm4gcHJvZmlsZS5yZWJ1aWxkUm93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyZXN0XCIpIHJldHVybiBwcm9maWxlLnJlc3RSb3dzO1xuICBpZiAoYmVhdC5raW5kID09PSBcInJhbXBcIikgcmV0dXJuIHByb2ZpbGUucHJlc3N1cmVSb3dzLm1lZGl1bTtcbiAgcmV0dXJuIHByb2ZpbGUucHJlc3N1cmVSb3dzW2JlYXQucHJlc3N1cmUgPz8gXCJtZWRpdW1cIl07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFdlYXBvbihyZWNpcGU6IEZhbWlseVJlY2lwZSwgcm9sZTogUGlja3VwUm9sZSwgdGllcjogVHJhY2tUaWVyLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHJuZzogUm5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChyb2xlID09PSBcInVwZ3JhZGVcIikgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJhd1Bvb2wgPSByb2xlID09PSBcInN1cHBvcnRcIlxuICAgID8gcmVjaXBlLnN1cHBvcnRXZWFwb25zXG4gICAgOiByb2xlID09PSBcImNsb3NlUmFuZ2VcIlxuICAgID8gcmVjaXBlLmNsb3NlUmFuZ2VXZWFwb25zXG4gICAgOiByZWNpcGUucHJlZmVycmVkV2VhcG9ucztcbiAgY29uc3Qgcm9sZVBvb2wgPSByb2xlID09PSBcImNsb3NlUmFuZ2VcIlxuICAgID8gcmF3UG9vbFxuICAgIDogcm9sZSA9PT0gXCJwcmltYXJ5XCJcbiAgICA/IHJhd1Bvb2wuZmlsdGVyKHdlYXBvbiA9PiAhY2Fub25pY2FsV2VhcG9uSWQod2VhcG9uKS5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKVxuICAgIDogcmF3UG9vbDtcbiAgY29uc3QgcG9vbCA9IHJvbGVQb29sLmxlbmd0aCA+IDAgPyByb2xlUG9vbCA6IHJhd1Bvb2w7XG4gIGNvbnN0IHRpZXJQb29sID0gcG9vbC5maWx0ZXIod2VhcG9uID0+IG1pbmltdW1UaWVyRm9yV2VhcG9uKHdlYXBvbikgPD0gdGllcik7XG4gIGNvbnN0IGF2YWlsYWJsZVBvb2wgPSB0aWVyUG9vbC5sZW5ndGggPiAwID8gdGllclBvb2wgOiBwb29sLmZpbHRlcih3ZWFwb24gPT4gbWluaW11bVRpZXJGb3JXZWFwb24od2VhcG9uKSA9PT0gMSk7XG4gIGlmIChhdmFpbGFibGVQb29sLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLndhcm5pbmdzLnB1c2goYE5vICR7cm9sZX0gd2VhcG9uIHdhcyBhdmFpbGFibGUgZm9yIHRpZXIgJHt0aWVyfSBpbiAke3JlY2lwZS50aGVtZX0uYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5taW4oYXZhaWxhYmxlUG9vbC5sZW5ndGggLSAxLCBzdGF0ZS5jeWNsZSk7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBhdmFpbGFibGVQb29sLnNsaWNlKG9mZnNldCkuY29uY2F0KGF2YWlsYWJsZVBvb2wuc2xpY2UoMCwgb2Zmc2V0KSk7XG4gIHJldHVybiBybmcucGljayhjYW5kaWRhdGVzKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VQaWNrdXBzKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIsIHJlY2lwZTogRmFtaWx5UmVjaXBlLCBiZWF0OiBKb3VybmV5QmVhdFJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCByb3dzOiBudW1iZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcpOiB7IHdlYXBvbnM6IHN0cmluZ1tdOyBwaWNrdXBzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3Qgcm9sZXMgPSBiZWF0LnBpY2t1cFJvbGVzID8/IFtdO1xuICBjb25zdCBjb2x1bW5zID0gW2MubGVmdC5taWQsIGMucmlnaHQubWlkLCBjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5yaWdodC5uZWFySW5uZXJdIGFzIGNvbnN0O1xuICBjb25zdCB3ZWFwb25zOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBwaWNrdXBzOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgcm93ID0gMDtcbiAgZm9yIChjb25zdCByb2xlIG9mIHJvbGVzKSB7XG4gICAgaWYgKHJvbGUgPT09IFwidXBncmFkZVwiKSB7XG4gICAgICBjb25zdCBhdXRob3JlZFVwZ3JhZGUgPSBiZWF0LnBpY2t1cFJvbGVzPy5pbmNsdWRlcyhcInVwZ3JhZGVcIikgPz8gZmFsc2U7XG4gICAgICBpZiAoYXV0aG9yZWRVcGdyYWRlIHx8IHN0YXRlLmN5Y2xlICUgcmVjaXBlLnVwZ3JhZGVTcGFjaW5nID09PSAwKSB7XG4gICAgICAgIHNlY3Rpb24uYXQocm93KS5waWNrdXAoXCJ1bml0TXVsdGlwbGllci4yeFwiLCB7IGNvbHVtbjogY29sdW1uc1socm93ICsgMSkgJSBjb2x1bW5zLmxlbmd0aF0gfSk7XG4gICAgICAgIHN0YXRlLnBsYXllclBvd2VyICs9IHBpY2t1cFBvd2VyKFwidW5pdE11bHRpcGxpZXIuMnhcIik7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkUGlja3Vwcy5hZGQoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIik7XG4gICAgICAgIHBpY2t1cHMucHVzaChcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2VhcG9uID0gc2VsZWN0V2VhcG9uKHJlY2lwZSwgcm9sZSwgdGllciwgc3RhdGUsIHJuZyk7XG4gICAgICBpZiAod2VhcG9uKSB7XG4gICAgICAgIHNlY3Rpb24uYXQocm93KS53ZWFwb24od2VhcG9uLCB7IGNvbHVtbjogY29sdW1uc1tyb3cgJSBjb2x1bW5zLmxlbmd0aF0gfSk7XG4gICAgICAgIHN0YXRlLnBsYXllclBvd2VyICs9IHdlYXBvblBvd2VyKHdlYXBvbik7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkV2VhcG9ucy5hZGQoY2Fub25pY2FsV2VhcG9uSWQod2VhcG9uKSk7XG4gICAgICAgIHdlYXBvbnMucHVzaChjYW5vbmljYWxXZWFwb25JZCh3ZWFwb24pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm93ICs9IDI7XG4gIH1cbiAgaWYgKHRpZXIgPj0gMiAmJiBiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiKSB7XG4gICAgY29uc3QgcGlja3VwID0gXCJwaWNrdXAuc2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiO1xuICAgIGNvbnN0IHBpY2t1cFJvdyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHJvd3MgLSAxLCByb3dzIC0gMykpO1xuICAgIHNlY3Rpb24uYXQocGlja3VwUm93KS5waWNrdXAocGlja3VwLCB7IGNvbHVtbjogc3RhdGUuY3ljbGUgJSAyID09PSAwID8gYy5sZWZ0LmlubmVyIDogYy5yaWdodC5pbm5lciB9KTtcbiAgICBzdGF0ZS5wbGF5ZXJQb3dlciArPSBwaWNrdXBQb3dlcihwaWNrdXApO1xuICAgIHN0YXRlLnNlbGVjdGVkUGlja3Vwcy5hZGQocGlja3VwKTtcbiAgICBwaWNrdXBzLnB1c2gocGlja3VwKTtcbiAgfVxuICByZXR1cm4geyB3ZWFwb25zLCBwaWNrdXBzIH07XG59XG5cbmZ1bmN0aW9uIGVuZW15Rm9yVGhyZWF0KHJlY2lwZTogRmFtaWx5UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHRhcmdldDogbnVtYmVyKTogVHJhY2tFbmVteVJlZiB7XG4gIGNvbnN0IGFsbG93ZWRFbmVtaWVzID0gcmVjaXBlLnByZWZlcnJlZEVuZW1pZXMuZmlsdGVyKGlkID0+IG1pbmltdW1UaWVyRm9yRW5lbXkoaWQpIDw9IHRpZXIpO1xuICBjb25zdCBwb29sID0gYWxsb3dlZEVuZW1pZXMubGVuZ3RoID4gMCA/IGFsbG93ZWRFbmVtaWVzIDogcmVjaXBlLnByZWZlcnJlZEVuZW1pZXM7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBwb29sLmZpbHRlcihpZCA9PiBlbmVteVRocmVhdChpZCkgPD0gdGFyZ2V0ICsgNCk7XG4gIHJldHVybiBjYW5kaWRhdGVzW2NhbmRpZGF0ZXMubGVuZ3RoIC0gMV0gPz8gcG9vbFswXTtcbn1cblxuZnVuY3Rpb24gZW5lbXlGb3JQcmVzc3VyZShyZWNpcGU6IEZhbWlseVJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBwcmVzc3VyZTogUHJlc3N1cmVMZXZlbCwgcm93OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKTogVHJhY2tFbmVteVJlZiB7XG4gIGlmICh0aWVyID09PSAyICYmIChwcmVzc3VyZSA9PT0gXCJsb3dcIiB8fCBwcmVzc3VyZSA9PT0gXCJtZWRpdW1cIikpIHtcbiAgICBjb25zdCBoYXNHbGFzcyA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzLmluY2x1ZGVzKFwiZ2xhc3NTaGllbGRcIik7XG4gICAgY29uc3QgaGFzV2luZ2VyID0gcmVjaXBlLnByZWZlcnJlZEVuZW1pZXMuaW5jbHVkZXMoXCJ3aW5nZXJcIik7XG4gICAgaWYgKGhhc1dpbmdlciAmJiByb3cgJSA3ID09PSAwKSByZXR1cm4gXCJ3aW5nZXJcIjtcbiAgICBpZiAoaGFzR2xhc3MpIHJldHVybiBcImdsYXNzU2hpZWxkXCI7XG4gIH1cbiAgcmV0dXJuIGVuZW15Rm9yVGhyZWF0KHJlY2lwZSwgdGllciwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gYm9zc0ZvclByZXNzdXJlKHJlY2lwZTogRmFtaWx5UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSk6IFRyYWNrRW5lbXlSZWYgfCBudWxsIHtcbiAgY29uc3QgYXZhaWxhYmxlQm9zc2VzID0gcmVjaXBlLmJvc3NFbmVtaWVzLmZpbHRlcihpZCA9PiBtaW5pbXVtVGllckZvckVuZW15KGlkKSA8PSB0aWVyICsgMSk7XG4gIGlmIChhdmFpbGFibGVCb3NzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUud2FybmluZ3MucHVzaChgTm8gYm9zcyBlbmVteSBpcyBhdmFpbGFibGUgZm9yICR7cmVjaXBlLnRoZW1lfSBhdCB0aWVyICR7dGllcn0uYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGF2YWlsYWJsZUJvc3Nlc1tzdGF0ZS5ib3NzZXNQbGFjZWQgJSBhdmFpbGFibGVCb3NzZXMubGVuZ3RoXTtcbn1cblxuZnVuY3Rpb24gY2FuUGxhY2VCb3NzKHRpZXI6IFRyYWNrVGllciwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCB0cmFja1JvdzogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1heEJvc3NlcyA9IHRpZXIgPT09IDIgPyAyIDogdGllciA+PSAzID8gNCA6IDA7XG4gIGNvbnN0IG1pblNwYWNpbmcgPSB0aWVyID09PSAyID8gMzQgOiA1ODtcbiAgcmV0dXJuIHN0YXRlLmJvc3Nlc1BsYWNlZCA8IG1heEJvc3NlcyAmJiB0cmFja1JvdyAtIHN0YXRlLmxhc3RCb3NzVHJhY2tSb3cgPj0gbWluU3BhY2luZztcbn1cblxuZnVuY3Rpb24gY29sdW1uc0ZvclN0eWxlKHN0eWxlOiBQcmVzc3VyZVN0eWxlLCBybmc6IFJuZywgbWF4V2FsbFdpZHRoOiBudW1iZXIpOiByZWFkb25seSBUcmFja0NvbHVtbltdIHtcbiAgaWYgKHN0eWxlID09PSBcImNlbnRlckFsdGVybmF0aW5nXCIpIHJldHVybiBjZW50ZXJDb2x1bW5zO1xuICBpZiAoc3R5bGUgPT09IFwib3V0ZXJBbHRlcm5hdGluZ1wiKSByZXR1cm4gb3V0ZXJDb2x1bW5zO1xuICBpZiAoc3R5bGUgPT09IFwid2lkZVN3ZWVwXCIpIHJldHVybiBybmcubmV4dCgpID4gMC41ID8gbGVmdENvbHVtbnMuc2xpY2UoMCwgbWF4V2FsbFdpZHRoKSA6IHJpZ2h0Q29sdW1ucy5zbGljZSgwLCBtYXhXYWxsV2lkdGgpO1xuICBpZiAoc3R5bGUgPT09IFwibWlycm9yZWRXYWxsc1wiKSByZXR1cm4gW2MubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyLCBjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZF0uc2xpY2UoMCwgTWF0aC5tYXgoMiwgTWF0aC5taW4oNCwgbWF4V2FsbFdpZHRoKSkpO1xuICBpZiAoc3R5bGUgPT09IFwidGFua0JyZWFrXCIpIHJldHVybiBybmcubmV4dCgpID4gMC41ID8gW2MubGVmdC5uZWFyT3V0ZXJdIDogW2MucmlnaHQuaW5uZXJdO1xuICByZXR1cm4gcm5nLm5leHQoKSA+IDAuNSA/IFtjLmxlZnQubmVhck91dGVyXSA6IFtjLnJpZ2h0Lm5lYXJPdXRlcl07XG59XG5cbmZ1bmN0aW9uIGNvbHVtbnNUaGF0Rml0KGVuZW15OiBUcmFja0VuZW15UmVmLCBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdKTogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSB7XG4gIGNvbnN0IHNwYW4gPSBlbmVteUNvbHVtblNwYW4oZW5lbXkpO1xuICByZXR1cm4gY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbiAlIDUgKyBzcGFuIDw9IDUpO1xufVxuXG5mdW5jdGlvbiBub25PdmVybGFwcGluZ0NvbHVtbnMoZW5lbXk6IFRyYWNrRW5lbXlSZWYsIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10pOiByZWFkb25seSBUcmFja0NvbHVtbltdIHtcbiAgY29uc3Qgc3BhbiA9IGVuZW15Q29sdW1uU3BhbihlbmVteSk7XG4gIGNvbnN0IG9jY3VwaWVkID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIGNvbnN0IHNlbGVjdGVkOiBUcmFja0NvbHVtbltdID0gW107XG4gIGZvciAoY29uc3QgY29sdW1uIG9mIGNvbHVtbnMpIHtcbiAgICBjb25zdCBjZWxscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNwYW4gfSwgKF8sIG9mZnNldCkgPT4gY29sdW1uICsgb2Zmc2V0KTtcbiAgICBpZiAoY2VsbHMuc29tZShjZWxsID0+IG9jY3VwaWVkLmhhcyhjZWxsKSkpIGNvbnRpbnVlO1xuICAgIHNlbGVjdGVkLnB1c2goY29sdW1uKTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIG9jY3VwaWVkLmFkZChjZWxsKTtcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlUHJlc3N1cmUoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlciwgcmVjaXBlOiBGYW1pbHlSZWNpcGUsIGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHByb2ZpbGU6IFRpZXJQcm9maWxlLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHJuZzogUm5nLCBzdGFydFJvdyA9IDApOiB7IHRocmVhdDogbnVtYmVyOyBlbmVtaWVzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgcHJlc3N1cmUgPSBiZWF0LnByZXNzdXJlID8/IFwibWVkaXVtXCI7XG4gIGNvbnN0IHRhcmdldFRocmVhdCA9IHByb2ZpbGUucHJlc3N1cmVUaHJlYXRbcHJlc3N1cmVdICsgc3RhdGUucGxheWVyUG93ZXIgKiAocHJlc3N1cmUgPT09IFwicGVha1wiID8gMC40NSA6IDAuMjUpO1xuICBjb25zdCBiYXNlU3R5bGVzID0gYmVhdC5zdHlsZXMgPz8gcmVjaXBlLnByZXNzdXJlU3R5bGVzO1xuICBjb25zdCBzdHlsZXMgPSB0aWVyID09PSAxICYmIHByZXNzdXJlID09PSBcImhpZ2hcIlxuICAgID8gWy4uLmJhc2VTdHlsZXMsIFwid2lkZVN3ZWVwXCIsIFwid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiXSBhcyBjb25zdFxuICAgIDogdGllciA+PSAzICYmIHByZXNzdXJlID09PSBcInBlYWtcIlxuICAgID8gWy4uLmJhc2VTdHlsZXMsIFwid2lkZVN3ZWVwXCIsIFwid2lkZVN3ZWVwXCIsIFwid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiLCBcIm1pcnJvcmVkV2FsbHNcIl0gYXMgY29uc3RcbiAgICA6IGJhc2VTdHlsZXM7XG4gIGxldCByb3cgPSBzdGFydFJvdztcbiAgbGV0IGVtaXR0ZWRUaHJlYXQgPSAwO1xuICBjb25zdCBlbmVtaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IGJlYXRSb3dzID0gcm93c0ZvckJlYXQoYmVhdCwgcHJvZmlsZSk7XG4gIHdoaWxlIChyb3cgPCBiZWF0Um93cyAtIDEpIHtcbiAgICBjb25zdCBzdHlsZSA9IHJuZy5waWNrKHN0eWxlcyk7XG4gICAgY29uc3QgY29sdW1ucyA9IGNvbHVtbnNGb3JTdHlsZShzdHlsZSwgcm5nLCBwcm9maWxlLm1heFdhbGxXaWR0aCk7XG4gICAgY29uc3QgcmVtYWluaW5nVGhyZWF0ID0gTWF0aC5tYXgoMCwgdGFyZ2V0VGhyZWF0IC0gZW1pdHRlZFRocmVhdCk7XG4gICAgY29uc3QgdHJhY2tSb3cgPSBzdGF0ZS5jdXJzb3IgKyByb3c7XG4gICAgY29uc3QgdGllclR3b0ZpbmFsZUJvc3NSb3dzID0gW1xuICAgICAgc3RhcnRSb3cgKyBNYXRoLmZsb29yKChiZWF0Um93cyAtIHN0YXJ0Um93KSAqIC4zKSxcbiAgICAgIHN0YXJ0Um93ICsgTWF0aC5mbG9vcigoYmVhdFJvd3MgLSBzdGFydFJvdykgKiAuNzIpLFxuICAgIF07XG4gICAgY29uc3QgdGllclR3b0ZpbmFsZUJvc3MgPSB0aWVyID09PSAyXG4gICAgICAmJiBiZWF0LmtpbmQgPT09IFwiZmluYWxlXCJcbiAgICAgICYmIHN0YXRlLmJvc3Nlc1BsYWNlZCA8IHRpZXJUd29GaW5hbGVCb3NzUm93cy5sZW5ndGhcbiAgICAgICYmIHJvdyA+PSB0aWVyVHdvRmluYWxlQm9zc1Jvd3Nbc3RhdGUuYm9zc2VzUGxhY2VkXVxuICAgICAgJiYgY2FuUGxhY2VCb3NzKHRpZXIsIHN0YXRlLCB0cmFja1Jvdyk7XG4gICAgY29uc3QgdGllclRocmVlQm9zcyA9IHRpZXIgPj0gM1xuICAgICAgJiYgY2FuUGxhY2VCb3NzKHRpZXIsIHN0YXRlLCB0cmFja1JvdylcbiAgICAgICYmIGVtaXR0ZWRUaHJlYXQgPCB0YXJnZXRUaHJlYXQgKiAxLjE1XG4gICAgICAmJiAoc3R5bGUgPT09IFwidGFua0JyZWFrXCIgfHwgKHByZXNzdXJlID09PSBcInBlYWtcIiAmJiByZW1haW5pbmdUaHJlYXQgPiAxOCAmJiByb3cgPiAxMikpO1xuICAgIGNvbnN0IHNob3VsZFVzZUhlYXZ5ID0gdGllclR3b0ZpbmFsZUJvc3MgfHwgdGllclRocmVlQm9zcztcbiAgICBjb25zdCBib3NzRW5lbXkgPSBzaG91bGRVc2VIZWF2eSA/IGJvc3NGb3JQcmVzc3VyZShyZWNpcGUsIHRpZXIsIHN0YXRlKSA6IG51bGw7XG4gICAgY29uc3QgZW5lbXkgPSBzaG91bGRVc2VIZWF2eVxuICAgICAgPyBib3NzRW5lbXkgPz8gZW5lbXlGb3JQcmVzc3VyZShyZWNpcGUsIHRpZXIsIHByZXNzdXJlLCByb3csIE1hdGgubWF4KDQsIHJlbWFpbmluZ1RocmVhdCAvIE1hdGgubWF4KDEsIGNvbHVtbnMubGVuZ3RoKSkpXG4gICAgICA6IGVuZW15Rm9yUHJlc3N1cmUocmVjaXBlLCB0aWVyLCBwcmVzc3VyZSwgcm93LCBNYXRoLm1heCg0LCByZW1haW5pbmdUaHJlYXQgLyBNYXRoLm1heCgxLCBjb2x1bW5zLmxlbmd0aCkpKTtcbiAgICBpZiAodGllclR3b0ZpbmFsZUJvc3MgJiYgYm9zc0VuZW15KSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBzdGF0ZS5ib3NzZXNQbGFjZWQgJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXI7XG4gICAgICBzZWN0aW9uLmF0KHJvdykuZW5lbXkoYm9zc0VuZW15LCB7IGNvbHVtbiB9KTtcbiAgICAgIGVtaXR0ZWRUaHJlYXQgKz0gZW5lbXlUaHJlYXQoYm9zc0VuZW15KTtcbiAgICAgIHN0YXRlLmJvc3Nlc1BsYWNlZCsrO1xuICAgICAgc3RhdGUubGFzdEJvc3NUcmFja1JvdyA9IHRyYWNrUm93O1xuICAgICAgZW5lbWllcy5hZGQoYm9zc0VuZW15ID09PSBcImJhc2ljXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtib3NzRW5lbXl9YCk7XG4gICAgICByb3cgKz0gMTI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHRpZXJUaHJlZUJvc3MgJiYgYm9zc0VuZW15KSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSBzdGF0ZS5ib3NzZXNQbGFjZWQgJSAyID09PSAwID8gYy5sZWZ0Lm5lYXJPdXRlciA6IGMucmlnaHQuaW5uZXI7XG4gICAgICBzZWN0aW9uLmF0KHJvdykuZW5lbXkoYm9zc0VuZW15LCB7IGNvbHVtbiB9KTtcbiAgICAgIGVtaXR0ZWRUaHJlYXQgKz0gZW5lbXlUaHJlYXQoYm9zc0VuZW15KTtcbiAgICAgIHN0YXRlLmJvc3Nlc1BsYWNlZCsrO1xuICAgICAgc3RhdGUubGFzdEJvc3NUcmFja1JvdyA9IHRyYWNrUm93O1xuICAgICAgZW5lbWllcy5hZGQoYm9zc0VuZW15ID09PSBcImJhc2ljXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtib3NzRW5lbXl9YCk7XG4gICAgICByb3cgKz0gMTQ7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgZml0dGluZ0NvbHVtbnMgPSBjb2x1bW5zVGhhdEZpdChlbmVteSwgY29sdW1ucyk7XG4gICAgY29uc3Qgc2FmZUVuZW15ID0gZml0dGluZ0NvbHVtbnMubGVuZ3RoID4gMCA/IGVuZW15IDogXCJiYXNpY1wiO1xuICAgIGNvbnN0IHNhZmVDb2x1bW5zID0gbm9uT3ZlcmxhcHBpbmdDb2x1bW5zKHNhZmVFbmVteSwgZml0dGluZ0NvbHVtbnMubGVuZ3RoID4gMCA/IGZpdHRpbmdDb2x1bW5zIDogY29sdW1uc1RoYXRGaXQoXCJiYXNpY1wiLCBjb2x1bW5zKSk7XG4gICAgY29uc3QgdGhyZWF0ID0gZW5lbXlUaHJlYXQoc2FmZUVuZW15KSAqIHNhZmVDb2x1bW5zLmxlbmd0aDtcbiAgICBjb25zdCBicmVhdGhSb3dzID0gdGllciA9PT0gMSAmJiBwcmVzc3VyZSAhPT0gXCJoaWdoXCIgJiYgcHJlc3N1cmUgIT09IFwicGVha1wiID8gMSA6IDA7XG4gICAgaWYgKHN0eWxlID09PSBcImxhbmVMaW5lXCIgJiYgc2FmZUNvbHVtbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb3VudCA9IE1hdGgubWluKDgsIE1hdGgubWF4KDEsIGJlYXRSb3dzIC0gcm93IC0gMSkpO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmxpbmUoc2FmZUVuZW15LCB7IGNvbHVtbjogc2FmZUNvbHVtbnNbMF0sIGNvdW50IH0pO1xuICAgICAgcm93ICs9IGNvdW50ICsgYnJlYXRoUm93cztcbiAgICAgIGVtaXR0ZWRUaHJlYXQgKz0gZW5lbXlUaHJlYXQoc2FmZUVuZW15KSAqIGNvdW50O1xuICAgIH0gZWxzZSBpZiAoc3R5bGUgPT09IFwibWlycm9yZWRXYWxsc1wiIHx8IHN0eWxlID09PSBcIndpZGVTd2VlcFwiIHx8ICh0aWVyID09PSAxICYmIHByZXNzdXJlID09PSBcImhpZ2hcIiAmJiBzYWZlQ29sdW1ucy5sZW5ndGggPiAxKSkge1xuICAgICAgc2VjdGlvbi5hdChyb3cpLndhbGwoc2FmZUVuZW15LCB7IGNvbHVtbnM6IHNhZmVDb2x1bW5zIH0pO1xuICAgICAgcm93ICs9IHByZXNzdXJlID09PSBcImxvd1wiID8gMyA6IDI7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IHRocmVhdDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1pbigxNCwgTWF0aC5tYXgoMSwgYmVhdFJvd3MgLSByb3cgLSAxKSk7XG4gICAgICBzZWN0aW9uLmF0KHJvdykuYWx0ZXJuYXRpbmcoc2FmZUVuZW15LCB7IGNvbHVtbnM6IHNhZmVDb2x1bW5zLCBjb3VudCB9KTtcbiAgICAgIHJvdyArPSBjb3VudCArIGJyZWF0aFJvd3M7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KHNhZmVFbmVteSkgKiBjb3VudDtcbiAgICB9XG4gICAgZW5lbWllcy5hZGQoc2FmZUVuZW15ID09PSBcImJhc2ljXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtzYWZlRW5lbXl9YCk7XG4gIH1cbiAgZm9yIChjb25zdCBlbmVteSBvZiBlbmVtaWVzKSBzdGF0ZS5zZWxlY3RlZEVuZW1pZXMuYWRkKGVuZW15KTtcbiAgcmV0dXJuIHsgdGhyZWF0OiBlbWl0dGVkVGhyZWF0LCBlbmVtaWVzOiBbLi4uZW5lbWllc10gfTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZUJlYXQoYnVpbGRlcjogVHJhY2tCdWlsZGVyLCByZWNpcGU6IEZhbWlseVJlY2lwZSwgYmVhdDogSm91cm5leUJlYXRSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgcHJvZmlsZTogVGllclByb2ZpbGUsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgcm5nOiBSbmcpOiB2b2lkIHtcbiAgY29uc3Qgcm93cyA9IHJvd3NGb3JCZWF0KGJlYXQsIHByb2ZpbGUpO1xuICBjb25zdCBzZWdtZW50U3RhcnRQb3dlciA9IHN0YXRlLnBsYXllclBvd2VyO1xuICBsZXQgcGxhY2VkV2VhcG9uczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHBsYWNlZFBpY2t1cHM6IHN0cmluZ1tdID0gW107XG4gIGxldCBlbWl0dGVkVGhyZWF0ID0gMDtcbiAgbGV0IHNlbGVjdGVkRW5lbWllczogc3RyaW5nW10gPSBbXTtcblxuICBpZiAoYmVhdC5raW5kID09PSBcInJlc3RcIikge1xuICAgIGJ1aWxkZXIucmVzcGl0ZShyb3dzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZWN0aW9uS2luZCA9IGJlYXQua2luZCA9PT0gXCJpbnRyb1wiIHx8IGJlYXQua2luZCA9PT0gXCJyZWJ1aWxkXCIgPyBcInJlYnVpbGRcIiA6IFwicHJlc3N1cmVcIjtcbiAgICBidWlsZGVyLnNlY3Rpb24oc2VjdGlvbktpbmQsIHJvd3MsIHNlY3Rpb24gPT4ge1xuICAgICAgY29uc3QgcGlja3VwcyA9IHBsYWNlUGlja3VwcyhzZWN0aW9uLCByZWNpcGUsIGJlYXQsIHRpZXIsIHJvd3MsIHN0YXRlLCBybmcpO1xuICAgICAgcGxhY2VkV2VhcG9ucyA9IHBpY2t1cHMud2VhcG9ucztcbiAgICAgIHBsYWNlZFBpY2t1cHMgPSBwaWNrdXBzLnBpY2t1cHM7XG4gICAgICBpZiAoYmVhdC5raW5kICE9PSBcImludHJvXCIgJiYgYmVhdC5raW5kICE9PSBcInJlYnVpbGRcIikge1xuICAgICAgICBjb25zdCBwcmVzc3VyZVN0YXJ0Um93ID0gTWF0aC5tYXgoMCwgKGJlYXQucGlja3VwUm9sZXM/Lmxlbmd0aCA/PyAwKSAqIDIgLSAxKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBwbGFjZVByZXNzdXJlKHNlY3Rpb24sIHJlY2lwZSwgYmVhdCwgdGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZywgcHJlc3N1cmVTdGFydFJvdyk7XG4gICAgICAgIGVtaXR0ZWRUaHJlYXQgPSBwcmVzc3VyZS50aHJlYXQ7XG4gICAgICAgIHNlbGVjdGVkRW5lbWllcyA9IHByZXNzdXJlLmVuZW1pZXM7XG4gICAgICB9IGVsc2UgaWYgKGJlYXQua2luZCA9PT0gXCJyZWJ1aWxkXCIgJiYgcm93cyA+IDQpIHtcbiAgICAgICAgY29uc3QgZW5lbXkgPSByZWNpcGUucHJlZmVycmVkRW5lbWllc1swXTtcbiAgICAgICAgc2VjdGlvbi5hdChyb3dzIC0gMikuZW5lbXkoZW5lbXksIHsgY29sdW1uOiBybmcucGljayhhbGxDb2x1bW5zKSB9KTtcbiAgICAgICAgZW1pdHRlZFRocmVhdCA9IGVuZW15VGhyZWF0KGVuZW15KTtcbiAgICAgICAgc2VsZWN0ZWRFbmVtaWVzID0gW2VuZW15ID09PSBcImJhc2ljXCIgPyBcImVuZW15LmJhc2ljXCIgOiBgZW5lbXkuJHtlbmVteX1gXTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRFbmVtaWVzLmFkZChzZWxlY3RlZEVuZW1pZXNbMF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUuY3Vyc29yICs9IHJvd3M7XG4gIHN0YXRlLmN5Y2xlKys7XG4gIHN0YXRlLnNlZ21lbnRzLnB1c2goe1xuICAgIGtpbmQ6IGJlYXQua2luZCxcbiAgICByb3dzLFxuICAgIHByZXNzdXJlOiBiZWF0LnByZXNzdXJlID8/IFwibm9uZVwiLFxuICAgIHRocmVhdEVzdGltYXRlOiBOdW1iZXIoZW1pdHRlZFRocmVhdC50b0ZpeGVkKDIpKSxcbiAgICBwbGF5ZXJQb3dlckVzdGltYXRlOiBOdW1iZXIoc2VnbWVudFN0YXJ0UG93ZXIudG9GaXhlZCgyKSksXG4gICAgc2VsZWN0ZWRXZWFwb25zOiBwbGFjZWRXZWFwb25zLFxuICAgIHNlbGVjdGVkUGlja3VwczogcGxhY2VkUGlja3VwcyxcbiAgICBzZWxlY3RlZEVuZW1pZXMsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlSW50ZXJuYWwob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBDb21wb3NlUmVzdWx0IHtcbiAgY29uc3QgcHJvZmlsZSA9IHRpZXJQcm9maWxlc1tvcHRpb25zLnRpZXJdO1xuICBjb25zdCByZWNpcGUgPSBmYW1pbHlSZWNpcGVzW29wdGlvbnMudGhlbWVdO1xuICBjb25zdCB0cmFja0lkID0gb3B0aW9ucy50cmFja0lkID8/IFwibmVvbi1uZWJ1bGFlLTFcIjtcbiAgY29uc3QgdHJhY2tSZWNpcGUgPSBvcHRpb25zLnRyYWNrSWQgPyB0cmFja1JlY2lwZXNbb3B0aW9ucy50cmFja0lkXSA6IHsgZ29hbHM6IFtvcHRpb25zLmRlc2NyaXB0aW9uXSwgc2VlZDogb3B0aW9ucy5zZWVkID8/IGAke29wdGlvbnMudGhlbWV9OiR7b3B0aW9ucy50aWVyfWAsIGpvdXJuZXk6IGRlZmF1bHRKb3VybmV5W29wdGlvbnMudGllcl0gfTtcbiAgY29uc3Qgc2VlZCA9IG9wdGlvbnMuc2VlZCA/PyB0cmFja1JlY2lwZS5zZWVkO1xuICBjb25zdCBybmcgPSBjcmVhdGVSbmcoc2VlZCk7XG4gIGNvbnN0IHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgY29uc3QgYnVpbGRlciA9IHRyYWNrQnVpbGRlci5jcmVhdGUoe1xuICAgIGxhYmVsOiBvcHRpb25zLmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgIGVudmlyb25tZW50OiB7IHNjZW5lSWQ6IG9wdGlvbnMuc2NlbmVJZCB9LFxuICAgIGJhbGFuY2U6IHsgZW5lbXlIcDogcHJvZmlsZS5lbmVteUhwLCBlbmVteVNwZWVkOiBwcm9maWxlLmVuZW15U3BlZWQgfSxcbiAgfSk7XG5cbiAgY29tcGlsZUJlYXQoYnVpbGRlciwgcmVjaXBlLCB7XG4gICAga2luZDogXCJpbnRyb1wiLFxuICAgIHJvd3M6IHByb2ZpbGUucmVidWlsZFJvd3MsXG4gICAgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCIsIC4uLihvcHRpb25zLnRpZXIgPj0gMyA/IFtcImNsb3NlUmFuZ2VcIiBhcyBjb25zdF0gOiBbXSksIC4uLihyZWNpcGUub3BlbmluZ1BpY2t1cHM/Lmxlbmd0aCA/IFtcInVwZ3JhZGVcIiBhcyBjb25zdF0gOiBbXSldLFxuICB9LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuICBmb3IgKGNvbnN0IGJlYXQgb2YgdHJhY2tSZWNpcGUuam91cm5leS5maWx0ZXIoaXRlbSA9PiBpdGVtLmtpbmQgIT09IFwiaW50cm9cIikpIHtcbiAgICBpZiAoc3RhdGUuY3Vyc29yID49IHByb2ZpbGUudGFyZ2V0Um93cyAtIHByb2ZpbGUucHJlc3N1cmVSb3dzLmhpZ2gpIGJyZWFrO1xuICAgIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwgYmVhdCwgb3B0aW9ucy50aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nKTtcbiAgfVxuICB3aGlsZSAoc3RhdGUuY3Vyc29yIDwgcHJvZmlsZS50YXJnZXRSb3dzIC0gcHJvZmlsZS5wcmVzc3VyZVJvd3MuaGlnaCkge1xuICAgIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwgeyBraW5kOiBzdGF0ZS5jeWNsZSAlIDMgPT09IDAgPyBcInJlYnVpbGRcIiA6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IHN0YXRlLmN5Y2xlICUgMiA9PT0gMCA/IFwiaGlnaFwiIDogXCJtZWRpdW1cIiwgcGlja3VwUm9sZXM6IHN0YXRlLmN5Y2xlICUgMyA9PT0gMCA/IFtcInByaW1hcnlcIiwgXCJ1cGdyYWRlXCJdIDogdW5kZWZpbmVkIH0sIG9wdGlvbnMudGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZyk7XG4gIH1cbiAgY29tcGlsZUJlYXQoYnVpbGRlciwgcmVjaXBlLCB7IGtpbmQ6IFwiZmluYWxlXCIsIHByZXNzdXJlOiBvcHRpb25zLnRpZXIgPT09IDEgPyBcImhpZ2hcIiA6IFwicGVha1wiIH0sIG9wdGlvbnMudGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZyk7XG5cbiAgY29uc3QgdHJhY2sgPSBidWlsZGVyLmJ1aWxkKCk7XG4gIGNvbnN0IGdlbmVyYXRlZFJvd3MgPSB0cmFjay5kZWZpbml0aW9uLmxheW91dC5zcGxpdCgvXFxyP1xcbi8pLmZpbHRlcihyb3cgPT4gcm93LnRyaW0oKSkubGVuZ3RoO1xuICBjb25zdCB3ZWFwb25Qb3dlckVudHJpZXMgPSBbLi4uc3RhdGUuc2VsZWN0ZWRXZWFwb25zXS5tYXAoaWQgPT4gW2lkLCBOdW1iZXIod2VhcG9uUG93ZXIoaWQpLnRvRml4ZWQoMikpXSBhcyBjb25zdCk7XG4gIGNvbnN0IGVuZW15VGhyZWF0RW50cmllcyA9IFsuLi5zdGF0ZS5zZWxlY3RlZEVuZW1pZXNdLm1hcChpZCA9PiBbaWQsIE51bWJlcihlbmVteVRocmVhdChpZCkudG9GaXhlZCgyKSldIGFzIGNvbnN0KTtcbiAgcmV0dXJuIHtcbiAgICB0cmFjayxcbiAgICBkZWJ1Zzoge1xuICAgICAgc2VlZCxcbiAgICAgIHNlZWRWYWx1ZTogcm5nLnNlZWRWYWx1ZSxcbiAgICAgIGZhbWlseUlkOiBvcHRpb25zLnRoZW1lLFxuICAgICAgdHJhY2tJZCxcbiAgICAgIHRpZXI6IG9wdGlvbnMudGllcixcbiAgICAgIGdlbmVyYXRlZFJvd3MsXG4gICAgICBzZWxlY3RlZFdlYXBvbnM6IFsuLi5zdGF0ZS5zZWxlY3RlZFdlYXBvbnNdLFxuICAgICAgc2VsZWN0ZWRQaWNrdXBzOiBbLi4uc3RhdGUuc2VsZWN0ZWRQaWNrdXBzXSxcbiAgICAgIHNlbGVjdGVkRW5lbWllczogWy4uLnN0YXRlLnNlbGVjdGVkRW5lbWllc10sXG4gICAgICB3ZWFwb25Qb3dlcjogT2JqZWN0LmZyb21FbnRyaWVzKHdlYXBvblBvd2VyRW50cmllcyksXG4gICAgICBlbmVteVRocmVhdDogT2JqZWN0LmZyb21FbnRyaWVzKGVuZW15VGhyZWF0RW50cmllcyksXG4gICAgICBzZWdtZW50czogc3RhdGUuc2VnbWVudHMsXG4gICAgICB3YXJuaW5nczogc3RhdGUud2FybmluZ3MsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFjayhvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IFRyYWNrTWVtYmVyIHtcbiAgcmV0dXJuIGNvbXBvc2VJbnRlcm5hbChvcHRpb25zKS50cmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9zZWRUcmFjayhvcHRpb25zOiBDb21wb3NlZFRyYWNrT3B0aW9ucyk6IENvbXBvc2VyRGVidWdTdW1tYXJ5IHtcbiAgcmV0dXJuIGNvbXBvc2VJbnRlcm5hbChvcHRpb25zKS5kZWJ1Zztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VDYXRhbG9nVHJhY2sodHJhY2tJZDogVHJhY2tDYXRhbG9nSWQpOiBUcmFja01lbWJlciB7XG4gIGNvbnN0IGVudHJ5ID0gdHJhY2tDYXRhbG9nW3RyYWNrSWRdO1xuICByZXR1cm4gY29tcG9zZUludGVybmFsKHtcbiAgICB0cmFja0lkLFxuICAgIGxhYmVsOiBlbnRyeS5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogZW50cnkuZGVzY3JpcHRpb24sXG4gICAgc2NlbmVJZDogZW50cnkuc2NlbmVJZCxcbiAgICB0aGVtZTogZW50cnkudGhlbWUsXG4gICAgdGllcjogZW50cnkudGllcixcbiAgfSkudHJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZUNvbXBvc2VkQ2F0YWxvZ1RyYWNrKHRyYWNrSWQ6IFRyYWNrQ2F0YWxvZ0lkKTogQ29tcG9zZXJEZWJ1Z1N1bW1hcnkge1xuICBjb25zdCBlbnRyeSA9IHRyYWNrQ2F0YWxvZ1t0cmFja0lkXTtcbiAgcmV0dXJuIGNvbXBvc2VJbnRlcm5hbCh7XG4gICAgdHJhY2tJZCxcbiAgICBsYWJlbDogZW50cnkubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IGVudHJ5LmRlc2NyaXB0aW9uLFxuICAgIHNjZW5lSWQ6IGVudHJ5LnNjZW5lSWQsXG4gICAgdGhlbWU6IGVudHJ5LnRoZW1lLFxuICAgIHRpZXI6IGVudHJ5LnRpZXIsXG4gIH0pLmRlYnVnO1xufVxuIiwgImltcG9ydCB7IGNvbXBvc2VDYXRhbG9nVHJhY2sgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5pbXBvcnQgeyB0cmFja0NhdGFsb2csIHRyYWNrRmFtaWxpZXNGcm9tQ2F0YWxvZyB9IGZyb20gXCIuL1RyYWNrQ2F0YWxvZ1wiO1xuXG5leHBvcnQgY29uc3QgdHJhY2tzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBPYmplY3Qua2V5cyh0cmFja0NhdGFsb2cpLm1hcCh0cmFja0lkID0+IFt0cmFja0lkLCBjb21wb3NlQ2F0YWxvZ1RyYWNrKHRyYWNrSWQgYXMga2V5b2YgdHlwZW9mIHRyYWNrQ2F0YWxvZyldKSxcbikgYXMgeyByZWFkb25seSBbVHJhY2tJZCBpbiBrZXlvZiB0eXBlb2YgdHJhY2tDYXRhbG9nXTogUmV0dXJuVHlwZTx0eXBlb2YgY29tcG9zZUNhdGFsb2dUcmFjaz4gfTtcblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzRnJvbUNhdGFsb2c7XG5leHBvcnQgeyB0cmFja0NhdGFsb2csIHRyYWNrRmFtaWx5Q2F0YWxvZywgdHJhY2tUaGVtZUNhdGFsb2cgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcbmV4cG9ydCB0eXBlIHsgVHJhY2tDYXRhbG9nSWQsIFRyYWNrRmFtaWx5Q2F0YWxvZ0lkLCBUcmFja1RoZW1lSWQsIFRyYWNrVGllciB9IGZyb20gXCIuL1RyYWNrQ2F0YWxvZ1wiO1xuZXhwb3J0IHsgZGVzY3JpYmVDb21wb3NlZENhdGFsb2dUcmFjaywgZGVzY3JpYmVDb21wb3NlZFRyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuZXhwb3J0IHR5cGUgeyBDb21wb3NlckRlYnVnU3VtbWFyeSwgRmFtaWx5UmVjaXBlLCBKb3VybmV5QmVhdEtpbmQsIEpvdXJuZXlCZWF0UmVjaXBlLCBQcmVzc3VyZUxldmVsLCBQcmVzc3VyZVN0eWxlLCBTZWdtZW50RGVidWdTdW1tYXJ5LCBUaWVyUHJvZmlsZSwgVHJhY2tSZWNpcGUgfSBmcm9tIFwiLi9UcmFja0NvbXBvc2VyXCI7XG5cbmV4cG9ydCBjb25zdCBuZW9uTmVidWxhZVRyYWNrMSA9IHRyYWNrc1tcIm5lb24tbmVidWxhZS0xXCJdO1xuZXhwb3J0IGNvbnN0IG5lb25OZWJ1bGFlVHJhY2syID0gdHJhY2tzW1wibmVvbi1uZWJ1bGFlLTJcIl07XG5leHBvcnQgY29uc3QgbmVvbk5lYnVsYWVUcmFjazMgPSB0cmFja3NbXCJuZW9uLW5lYnVsYWUtM1wiXTtcbmV4cG9ydCBjb25zdCBhdXJvcmFUcmFjazEgPSB0cmFja3NbXCJhdXJvcmEtMVwiXTtcbmV4cG9ydCBjb25zdCBhdXJvcmFUcmFjazIgPSB0cmFja3NbXCJhdXJvcmEtMlwiXTtcbmV4cG9ydCBjb25zdCBhdXJvcmFUcmFjazMgPSB0cmFja3NbXCJhdXJvcmEtM1wiXTtcbmV4cG9ydCBjb25zdCBjcnlzdGFsRm9yZ2VUcmFjazEgPSB0cmFja3NbXCJjcnlzdGFsLWZvcmdlLTFcIl07XG5leHBvcnQgY29uc3QgY3J5c3RhbEZvcmdlVHJhY2syID0gdHJhY2tzW1wiY3J5c3RhbC1mb3JnZS0yXCJdO1xuZXhwb3J0IGNvbnN0IGNyeXN0YWxGb3JnZVRyYWNrMyA9IHRyYWNrc1tcImNyeXN0YWwtZm9yZ2UtM1wiXTtcbmV4cG9ydCBjb25zdCB2b2lkR2FyZGVuVHJhY2sxID0gdHJhY2tzW1widm9pZC1nYXJkZW4tMVwiXTtcbmV4cG9ydCBjb25zdCB2b2lkR2FyZGVuVHJhY2syID0gdHJhY2tzW1widm9pZC1nYXJkZW4tMlwiXTtcbmV4cG9ydCBjb25zdCB2b2lkR2FyZGVuVHJhY2szID0gdHJhY2tzW1widm9pZC1nYXJkZW4tM1wiXTtcbmV4cG9ydCBjb25zdCBzb2xhckFycmF5VHJhY2sxID0gdHJhY2tzW1wic29sYXItYXJyYXktMVwiXTtcbmV4cG9ydCBjb25zdCBzb2xhckFycmF5VHJhY2syID0gdHJhY2tzW1wic29sYXItYXJyYXktMlwiXTtcbmV4cG9ydCBjb25zdCBzb2xhckFycmF5VHJhY2szID0gdHJhY2tzW1wic29sYXItYXJyYXktM1wiXTtcbiIsICJpbXBvcnQgeyBpc0xhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja0ZhbWlseU1lbWJlciwgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHBhcnNlVHJhY2tEZWZpbml0aW9uIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyB0cmFja0ZhbWlsaWVzLCB0cmFja3MgfSBmcm9tIFwiLi90cmFja3NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJ0cmFja1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiVHJhY2tcIjtcbiAgcmVhZG9ubHkgbWVtYmVycyA9IHRyYWNrcyBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tNZW1iZXI+O1xuICByZWFkb25seSBmYW1pbGllcyA9IHRyYWNrRmFtaWxpZXMgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5TWVtYmVyPGtleW9mIHR5cGVvZiB0cmFja3M+PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCB0cmFja10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2suZGVmaW5pdGlvbik7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZCh0cmFjay5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtpZCwgZmFtaWx5XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmZhbWlsaWVzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGZhbWlseS50cmFja0lkcy5sZW5ndGggPiAwLCBgJHtpZH0gbXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSB0cmFjay5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpc0xhbmVSdW5uZXJTY2VuZUlkKGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkKSwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHNjZW5lIGlkLmApO1xuICAgICAgZm9yIChjb25zdCB0cmFja0lkIG9mIGZhbWlseS50cmFja0lkcykge1xuICAgICAgICB0aGlzLnJlcXVpcmUodHJhY2tJZCBpbiB0aGlzLm1lbWJlcnMsIGAke2lkfSByZWZlcmVuY2VzIHVua25vd24gdHJhY2sgXCIke3RyYWNrSWR9XCIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0aGlzLm1lbWJlcnNbdHJhY2tJZF0uZW52aXJvbm1lbnQuc2NlbmVJZCA9PT0gZmFtaWx5LmVudmlyb25tZW50LnNjZW5lSWQsIGAke3RyYWNrSWR9IG11c3QgdXNlIHRoZSAke2lkfSBzY2VuZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrRmFtaWx5ID0gbmV3IFRyYWNrRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgVHJhY2tJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5tZW1iZXJzO1xuZXhwb3J0IHR5cGUgVHJhY2tGYW1pbHlJZCA9IGtleW9mIHR5cGVvZiB0cmFja0ZhbWlseS5mYW1pbGllcztcbiIsICJpbXBvcnQgeyBjcmVhdGVUZXN0UGFnZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgc2hvd3N0b3BwZXJGYW1pbHksIHR5cGUgU2hvd3N0b3BwZXJJZCwgdHlwZSBTaG93c3RvcHBlck1lbWJlciB9IGZyb20gXCIuLi8uLi9Db21iYXREZWZpbml0aW9uXCI7XG5cbmludGVyZmFjZSBTaG93c3RvcHBlclNtb2tlUmVzdWx0IHtcbiAgc2hvd3N0b3BwZXJJZDogU2hvd3N0b3BwZXJJZDtcbiAgcGFzc2VkOiBib29sZWFuO1xuICBmYWlsdXJlczogc3RyaW5nW107XG59XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE91dHB1dEVsZW1lbnQ+KFwiI3Rlc3Qtc3RhdHVzXCIpITtcbmNvbnN0IHJlc3VsdHNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MT0xpc3RFbGVtZW50PihcIiNyZXN1bHRzXCIpITtcblxuZnVuY3Rpb24gdmFsaWRhdGVTaG93c3RvcHBlcihpZDogU2hvd3N0b3BwZXJJZCwgbWVtYmVyOiBTaG93c3RvcHBlck1lbWJlcik6IFNob3dzdG9wcGVyU21va2VSZXN1bHQge1xuICBjb25zdCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKG1lbWJlci5iYW5rQmVoYXZpb3IgIT09IFwiYmFua2VkTWFudWFsVHJpZ2dlclwiKSBmYWlsdXJlcy5wdXNoKFwibXVzdCBiZSBtYW51YWxseSBiYW5rZWQgYW5kIHRyaWdnZXJlZFwiKTtcbiAgaWYgKG1lbWJlci5kdXJhdGlvbk1zIDw9IDApIGZhaWx1cmVzLnB1c2goXCJkdXJhdGlvbiBtdXN0IGJlIHBvc2l0aXZlXCIpO1xuICBpZiAobWVtYmVyLmNlbnRlckNhbWVyYU1zIDwgMCkgZmFpbHVyZXMucHVzaChcImNlbnRlciBjYW1lcmEgdGltaW5nIGNhbm5vdCBiZSBuZWdhdGl2ZVwiKTtcbiAgaWYgKG1lbWJlci5yZXR1cm5DYW1lcmFNcyA8PSAwKSBmYWlsdXJlcy5wdXNoKFwicmV0dXJuIGNhbWVyYSB0aW1pbmcgbXVzdCBiZSBwb3NpdGl2ZVwiKTtcbiAgaWYgKG1lbWJlci50aW1lV2FycFswXT8uYXRNcyAhPT0gMCkgZmFpbHVyZXMucHVzaChcInRpbWUgd2FycCBtdXN0IHN0YXJ0IGF0IDBtc1wiKTtcbiAgaWYgKG1lbWJlci5jYW1lcmFbMF0/LmF0TXMgIT09IDApIGZhaWx1cmVzLnB1c2goXCJjYW1lcmEgY2hvcmVvZ3JhcGh5IG11c3Qgc3RhcnQgYXQgMG1zXCIpO1xuICBpZiAobWVtYmVyLnRpbWVXYXJwLmF0KC0xKT8uYXRNcyAhPT0gbWVtYmVyLmR1cmF0aW9uTXMpIGZhaWx1cmVzLnB1c2goXCJ0aW1lIHdhcnAgbXVzdCBlbmQgYXQgZHVyYXRpb25Nc1wiKTtcbiAgaWYgKChtZW1iZXIuY2FtZXJhLmF0KC0xKT8uYXRNcyA/PyAwKSA+IG1lbWJlci5kdXJhdGlvbk1zKSBmYWlsdXJlcy5wdXNoKFwiY2FtZXJhIGNob3Jlb2dyYXBoeSBjYW5ub3QgZXhjZWVkIGR1cmF0aW9uTXNcIik7XG4gIGlmICghbWVtYmVyLnRpbWVsaW5lRXZlbnRzLnNvbWUoZXZlbnQgPT4gZXZlbnQudHlwZSA9PT0gXCJzdGFydEF0dGFja1wiKSkgZmFpbHVyZXMucHVzaChcInNob3dzdG9wcGVyIG5lZWRzIGEgc3RhcnQgYXR0YWNrIGV2ZW50XCIpO1xuICBpZiAoIW1lbWJlci50aW1lbGluZUV2ZW50cy5zb21lKGV2ZW50ID0+IGV2ZW50LnR5cGUgPT09IFwic3RvcEF0dGFja1wiKSkgZmFpbHVyZXMucHVzaChcInNob3dzdG9wcGVyIG5lZWRzIGEgc3RvcCBhdHRhY2sgZXZlbnRcIik7XG4gIGlmIChtZW1iZXIuYXR0YWNrLnRhcmdldGluZyAhPT0gXCJhbGxMYW5lc0FoZWFkXCIpIGZhaWx1cmVzLnB1c2goXCJmaXJzdCBzbGljZSBuZWVkcyBhbiBhbGwtbGFuZSBhdHRhY2tcIik7XG4gIGlmIChtZW1iZXIuYXR0YWNrLnJvd3NBaGVhZCA8PSAwKSBmYWlsdXJlcy5wdXNoKFwiYXR0YWNrIHJvd3NBaGVhZCBtdXN0IGJlIHBvc2l0aXZlXCIpO1xuICBjb25zdCBtaW5HYW1lcGxheVNjYWxlID0gTWF0aC5taW4oLi4ubWVtYmVyLnRpbWVXYXJwLm1hcChwb2ludCA9PiBwb2ludC5nYW1lcGxheVNjYWxlKSk7XG4gIGlmIChtaW5HYW1lcGxheVNjYWxlID4gLjI1KSBmYWlsdXJlcy5wdXNoKFwiY2luZW1hdGljIHRpbWUgd2FycCBzaG91bGQgc2xvdyBnYW1lcGxheSBtZWFuaW5nZnVsbHlcIik7XG4gIGNvbnN0IGNhbWVyYU1vdmVzRm9yd2FyZCA9IG1lbWJlci5jYW1lcmEuc29tZShwb3NlID0+IHBvc2UuZm9sbG93RGlzdGFuY2UgPCBtZW1iZXIuY2FtZXJhWzBdLmZvbGxvd0Rpc3RhbmNlIC0gNjApO1xuICBpZiAoIWNhbWVyYU1vdmVzRm9yd2FyZCkgZmFpbHVyZXMucHVzaChcImNhbWVyYSBjaG9yZW9ncmFwaHkgc2hvdWxkIG1vdmUgZm9yd2FyZCBmcm9tIHRoZSBwbGF5ZXIgUE9WXCIpO1xuXG4gIHJldHVybiB7IHNob3dzdG9wcGVySWQ6IGlkLCBwYXNzZWQ6IGZhaWx1cmVzLmxlbmd0aCA9PT0gMCwgZmFpbHVyZXMgfTtcbn1cblxuZnVuY3Rpb24gcnVuKCk6IFNob3dzdG9wcGVyU21va2VSZXN1bHRbXSB7XG4gIGNvbnN0IHJlc3VsdHMgPSBPYmplY3QuZW50cmllcyhzaG93c3RvcHBlckZhbWlseS5tZW1iZXJzKS5tYXAoKFtpZCwgbWVtYmVyXSkgPT5cbiAgICB2YWxpZGF0ZVNob3dzdG9wcGVyKGlkIGFzIFNob3dzdG9wcGVySWQsIG1lbWJlcikpO1xuICByZXN1bHRzRWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHRzLm1hcChyZXN1bHQgPT4ge1xuICAgIGNvbnN0IG1lbWJlciA9IHNob3dzdG9wcGVyRmFtaWx5Lm1lbWJlcnNbcmVzdWx0LnNob3dzdG9wcGVySWRdO1xuICAgIGNvbnN0IG1pbkdhbWVwbGF5U2NhbGUgPSBNYXRoLm1pbiguLi5tZW1iZXIudGltZVdhcnAubWFwKHBvaW50ID0+IHBvaW50LmdhbWVwbGF5U2NhbGUpKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGxpIGRhdGEtcGFzc2VkPVwiJHtyZXN1bHQucGFzc2VkfVwiIGRhdGEtc2hvd3N0b3BwZXItaWQ9XCIke3Jlc3VsdC5zaG93c3RvcHBlcklkfVwiPlxuICAgICAgICA8c3Ryb25nPiR7bWVtYmVyLmxhYmVsfTwvc3Ryb25nPlxuICAgICAgICA8c3Bhbj4ke3Jlc3VsdC5wYXNzZWQgPyBcIlBBU1NcIiA6IFwiRkFJTFwifTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWxcIj4ke3Jlc3VsdC5wYXNzZWRcbiAgICAgICAgICA/IGAke21lbWJlci5kdXJhdGlvbk1zfW1zIC0gbWluIHNwZWVkICR7KG1pbkdhbWVwbGF5U2NhbGUgKiAxMDApLnRvRml4ZWQoMCl9JSAtICR7bWVtYmVyLmF0dGFjay5yb3dzQWhlYWR9IGF0dGFjayByb3dzYFxuICAgICAgICAgIDogcmVzdWx0LmZhaWx1cmVzLmpvaW4oXCIgfCBcIil9PC9zcGFuPlxuICAgICAgPC9saT5gO1xuICB9KS5qb2luKFwiXCIpO1xuICByZXR1cm4gcmVzdWx0cztcbn1cblxuY29uc3QgdGVzdCA9IGNyZWF0ZVRlc3RQYWdlKFwibmVvbi1zd2FybS1zaG93c3RvcHBlci1mYW1pbHktc21va2VcIiwgeyBzdWl0ZTogXCJzbW9rZVwiLCBydW4gfSwgc3RhdHVzKTtcbnRlc3QucmVhZHkoKTtcbmZvciAoY29uc3QgcmVzdWx0IG9mIHJ1bigpKSB7XG4gIHRlc3QuYXNzZXJ0KGAke3Jlc3VsdC5zaG93c3RvcHBlcklkfSBkZWZpbml0aW9uIGlzIHZhbGlkYCwgcmVzdWx0LnBhc3NlZCwgcmVzdWx0LmZhaWx1cmVzLmpvaW4oXCI7IFwiKSB8fCBcImFsbCBjaGVja3MgcGFzc2VkXCIpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sY0FBYztBQUFBLEVBQ3pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFDWjs7O0FDT0EsSUFBTSxVQUFVLENBQUMsT0FBZSxXQUFXLENBQUMsS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssTUFDcEUsTUFBTSxLQUFLLEVBQUUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU07QUFDdEMsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSTtBQUMzQyxTQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRTtBQUNwRCxDQUFDO0FBRUgsSUFBTSxPQUFPLENBQUMsUUFBZ0IsUUFBUSxNQUFLLFdBQVcsQ0FBQyxLQUFLLEtBQUssTUFDL0QsTUFBTSxLQUFLLEVBQUUsUUFBUSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUMzQyxRQUFNLFNBQVMsSUFBSSxJQUFJLFFBQVE7QUFDL0IsUUFBTSxRQUFRLFdBQVcsSUFBSSxLQUFLLEtBQUs7QUFDdkMsU0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU07QUFDNUQsQ0FBQztBQUVILElBQU0sVUFBdUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlELElBQU0sUUFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBSyxJQUFHLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLEdBQUcsQ0FBQyxPQUFNLElBQUcsQ0FBQztBQUMvRixJQUFNLFVBQXVCLENBQUMsQ0FBQyxJQUFJLEtBQUksR0FBRyxDQUFDLEdBQUcsS0FBSSxHQUFHLENBQUMsR0FBRyxLQUFJLEdBQUcsQ0FBQyxNQUFLLElBQUcsR0FBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLENBQUMsT0FBTSxJQUFHLENBQUM7QUFDakcsSUFBTSxTQUFzQixRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDbEQs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VSxzQkFBc0Isc0JBQXNCLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsTUFBSSxLQUFJLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxLQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsS0FBRyxLQUFJLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzNQLEtBQUssVUFBVSxzQkFBc0Isc0JBQXNCLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxHQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLEdBQUUsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQzNMLEtBQUssVUFBVSx1QkFBdUIsdUJBQXVCLENBQUMsQ0FBQyxPQUFLLEVBQUUsR0FBRyxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQU0sS0FBSSxHQUFHLENBQUMsT0FBSyxLQUFJLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLFFBQU0sSUFBRyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzlQLEtBQUssVUFBVSwwQkFBMEIsMEJBQTBCLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsS0FBRyxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLEtBQUcsSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFLLEtBQUksR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNwUCxLQUFLLFVBQVUsZUFBZSxlQUFlLFFBQVEsRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQUksR0FBRyxNQUFLLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDN0YsS0FBSyxVQUFVLGVBQWUsZUFBZSxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFJLEdBQUcsTUFBSyxJQUFHLENBQUMsQ0FBQztBQUFBLEVBRTdGLEtBQUssVUFBVSxlQUFlLFFBQVEsQ0FBQyxDQUFDLElBQUcsSUFBRyxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLEdBQUUsR0FBRSxDQUFDLE9BQUssQ0FBQyxDQUFDLEdBQUcsT0FBTztBQUFBLEVBQ2hGLEtBQUssVUFBVSxlQUFlLFFBQVEsQ0FBQyxDQUFDLElBQUcsS0FBSSxHQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFHLElBQUcs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QzlILE1BQUksQ0FBQyxPQUFPLGVBQWUsS0FBSyxXQUFTLE1BQU0sU0FBUyxZQUFZLEVBQUcsVUFBUyxLQUFLLHVDQUF1QztBQUM1SCxNQUFJLE9BQU8sT0FBTyxjQUFjLGdCQUFpQixVQUFTLEtBQUssc0NBQXNDO0FBQ3JHLE1BQUksT0FBTyxPQUFPLGFBQWEsRUFBRyxVQUFTLEtBQUssbUNBQW1DO0FBQ25GLFFBQU0sbUJBQW1CLEtBQUssSUFBSSxHQUFHLE9BQU8sU0FBUyxJQUFJLFdBQVMsTUFBTSxhQUFhLENBQUM7QUFDdEYsTUFBSSxtQkFBbUIsS0FBSyxVQUFTLEtBQUssdURBQXVEO0FBQ2pHLFFBQU0scUJBQXFCLE9BQU8sT0FBTyxLQUFLLFVBQVEsS0FBSyxpQkFBaUIsT0FBTyxPQUFPLENBQUMsRUFBRSxpQkFBaUIsRUFBRTtBQUNoSCxNQUFJLENBQUMsbUJBQW9CLFVBQVMsS0FBSyw2REFBNkQ7QUFFcEcsU0FBTyxFQUFFLGVBQWUsSUFBSSxRQUFRLFNBQVMsV0FBVyxHQUFHLFNBQVM7QUFDdEU7QUFFQSxTQUFTLE1BQWdDO0FBQ3ZDLFFBQU0sVUFBVSxPQUFPLFFBQVEsa0JBQWtCLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sTUFDeEUsb0JBQW9CLElBQXFCLE1BQU0sQ0FBQztBQUNsRCxpQkFBZSxZQUFZLFFBQVEsSUFBSSxZQUFVO0FBQy9DLFVBQU0sU0FBUyxrQkFBa0IsUUFBUSxPQUFPLGFBQWE7QUFDN0QsVUFBTSxtQkFBbUIsS0FBSyxJQUFJLEdBQUcsT0FBTyxTQUFTLElBQUksV0FBUyxNQUFNLGFBQWEsQ0FBQztBQUN0RixXQUFPO0FBQUEseUJBQ2MsT0FBTyxNQUFNLDBCQUEwQixPQUFPLGFBQWE7QUFBQSxrQkFDbEUsT0FBTyxLQUFLO0FBQUEsZ0JBQ2QsT0FBTyxTQUFTLFNBQVMsTUFBTTtBQUFBLCtCQUNoQixPQUFPLFNBQzFCLEdBQUcsT0FBTyxVQUFVLG1CQUFtQixtQkFBbUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLE9BQU8sT0FBTyxTQUFTLGlCQUN2RyxPQUFPLFNBQVMsS0FBSyxLQUFLLENBQUM7QUFBQTtBQUFBLEVBRXJDLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDVixTQUFPO0FBQ1Q7QUFFQSxJQUFNLE9BQU8sZUFBZSx1Q0FBdUMsRUFBRSxPQUFPLFNBQVMsSUFBSSxHQUFHLE1BQU07QUFDbEcsS0FBSyxNQUFNO0FBQ1gsV0FBVyxVQUFVLElBQUksR0FBRztBQUMxQixPQUFLLE9BQU8sR0FBRyxPQUFPLGFBQWEsd0JBQXdCLE9BQU8sUUFBUSxPQUFPLFNBQVMsS0FBSyxJQUFJLEtBQUssbUJBQW1CO0FBQzdIOyIsCiAgIm5hbWVzIjogWyJsZXZlbCIsICJsZXZlbCJdCn0K

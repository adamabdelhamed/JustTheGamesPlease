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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvbkZhY3Rvcnkvc3JjL3Rva2Vucy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvZ2VvbWV0cmljLXNoYXBlcy50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uRmFjdG9yeS9zcmMvbGFuZS1ydW5uZXItc2NlbmVzLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25GYWN0b3J5L3NyYy90ZXN0LWhhcm5lc3MudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vQ29tYmF0VHVuaW5nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL0ZhbWlseURlZmluaXRpb24udHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vR3VuRmFtaWx5LnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL09yYkZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9MaWdodG5pbmdGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vTXVsdGlwbGllckZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9TaGllbGRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU2hvd3N0b3BwZXJGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vU3dvcmRGYW1pbHkudHMiLCAiLi4vLi4vLi4vLi4vcHJvamVjdHMvTmVvblN3YXJtL0NvbWJhdERlZmluaXRpb24vVHJhY2tEZWZpbml0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL1RyYWNrQnVpbGRlci50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi90cmFja3MvVHJhY2tDYXRhbG9nLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9UcmFja0NvbXBvc2VyLnRzIiwgIi4uLy4uLy4uLy4uL3Byb2plY3RzL05lb25Td2FybS9Db21iYXREZWZpbml0aW9uL3RyYWNrcy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vQ29tYmF0RGVmaW5pdGlvbi9UcmFja0ZhbWlseS50cyIsICIuLi8uLi8uLi8uLi9wcm9qZWN0cy9OZW9uU3dhcm0vdGVzdC1wYWdlcy9zaG93c3RvcHBlci1mYW1pbHkvc21va2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBuZW9uUGFsZXR0ZSA9IHtcbiAgY3lhbjogXCIjNTVlN2ZmXCIsXG4gIHBpbms6IFwiI2ZmNGY5YVwiLFxuICBncmVlbjogXCIjN2ZmZmMyXCIsXG4gIGdvbGQ6IFwiI2ZmZDQ1Y1wiLFxuICB2aW9sZXQ6IFwiI2E5ODdmZlwiLFxuICBvcmFuZ2U6IFwiI2ZmOGE0NVwiLFxuICByZWQ6IFwiI2ZmNTU3N1wiLFxuICBkZWVwQmx1ZTogXCIjMjg3ZGZmXCIsXG4gIHdoaXRlSG90OiBcIiNmNGZiZmZcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE5lb25Db2xvck5hbWUgPSBrZXlvZiB0eXBlb2YgbmVvblBhbGV0dGU7XG5cbmV4cG9ydCBjb25zdCBnbG93UHJlc2V0cyA9IHtcbiAgc29mdDogMC4zOCxcbiAgc3RhbmRhcmQ6IDAuNjUsXG4gIGludGVuc2U6IDEsXG59IGFzIGNvbnN0O1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5cbmV4cG9ydCB0eXBlIE5lb25TaGFwZUZhbWlseSA9IFwicGxheWVyXCIgfCBcImh1bnRlclwiIHwgXCJicnVpc2VyXCIgfCBcInRhbmtcIiB8IFwidHJpY2tzdGVyXCIgfCBcImVsaXRlXCI7XG5leHBvcnQgdHlwZSBOZW9uUm9ja1N0eWxlID0gXCJwaXRjaFwiIHwgXCJyb2xsXCIgfCBcInlhd1wiIHwgXCJwdWxzZVwiIHwgXCJvcmJpdFwiO1xuZXhwb3J0IHR5cGUgTmVvblBvaW50ID0gcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBOZW9uR2VvbWV0cmljU2hhcGVEZWZpbml0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseTtcbiAgY29sb3I6IHN0cmluZztcbiAgcG9pbnRzOiByZWFkb25seSBOZW9uUG9pbnRbXTtcbiAgaG9sZXM/OiByZWFkb25seSAocmVhZG9ubHkgTmVvblBvaW50W10pW107XG4gIHJvY2s6IE5lb25Sb2NrU3R5bGU7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCByZWd1bGFyID0gKHNpZGVzOiBudW1iZXIsIHJvdGF0aW9uID0gLU1hdGguUEkgLyAyLCBzeCA9IDEsIHN5ID0gMSk6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpZGVzIH0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgYW5nbGUgPSByb3RhdGlvbiArIGkgKiBNYXRoLlBJICogMiAvIHNpZGVzO1xuICAgIHJldHVybiBbTWF0aC5jb3MoYW5nbGUpICogc3gsIE1hdGguc2luKGFuZ2xlKSAqIHN5XSBhcyBjb25zdDtcbiAgfSk7XG5cbmNvbnN0IHN0YXIgPSAocG9pbnRzOiBudW1iZXIsIGlubmVyID0gLjQyLCByb3RhdGlvbiA9IC1NYXRoLlBJIC8gMik6IE5lb25Qb2ludFtdID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvaW50cyAqIDIgfSwgKF8sIGkpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSBpICUgMiA/IGlubmVyIDogMTtcbiAgICBjb25zdCBhbmdsZSA9IHJvdGF0aW9uICsgaSAqIE1hdGguUEkgLyBwb2ludHM7XG4gICAgcmV0dXJuIFtNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c10gYXMgY29uc3Q7XG4gIH0pO1xuXG5jb25zdCBkaWFtb25kOiBOZW9uUG9pbnRbXSA9IFtbMCwgLTFdLCBbMSwgMF0sIFswLCAxXSwgWy0xLCAwXV07XG5jb25zdCBhcnJvdzogTmVvblBvaW50W10gPSBbWzAsIC0xXSwgWy44MiwgLjY4XSwgWy4yNywgLjQ1XSwgWzAsIC45Ml0sIFstLjI3LCAuNDVdLCBbLS44MiwgLjY4XV07XG5jb25zdCBjaGV2cm9uOiBOZW9uUG9pbnRbXSA9IFtbLTEsIC0uNjJdLCBbMCwgLS4wNV0sIFsxLCAtLjYyXSwgWy4yOCwgLjgyXSwgWzAsIC4zNF0sIFstLjI4LCAuODJdXTtcbmNvbnN0IHNxdWFyZTogTmVvblBvaW50W10gPSByZWd1bGFyKDQsIE1hdGguUEkgLyA0KTtcbmNvbnN0IGNvbG9yczogUmVjb3JkPE5lb25TaGFwZUZhbWlseSwgc3RyaW5nPiA9IHtcbiAgcGxheWVyOiBuZW9uUGFsZXR0ZS5jeWFuLCBodW50ZXI6IG5lb25QYWxldHRlLnJlZCwgYnJ1aXNlcjogbmVvblBhbGV0dGUudmlvbGV0LFxuICB0YW5rOiBuZW9uUGFsZXR0ZS5nb2xkLCB0cmlja3N0ZXI6IFwiIzljZmY1MlwiLCBlbGl0ZTogXCIjNzBkZmZmXCIsXG59O1xuXG5jb25zdCBtYWtlID0gKFxuICBmYW1pbHk6IE5lb25TaGFwZUZhbWlseSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IE5lb25Qb2ludFtdLFxuICByb2NrOiBOZW9uUm9ja1N0eWxlLCBob2xlcz86IHJlYWRvbmx5IChyZWFkb25seSBOZW9uUG9pbnRbXSlbXSxcbik6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gPT4gKHsgaWQsIG5hbWUsIGZhbWlseSwgcG9pbnRzLCBob2xlcywgcm9jaywgY29sb3I6IGNvbG9yc1tmYW1pbHldLCBkZXB0aDogZmFtaWx5ID09PSBcInRhbmtcIiA/IC4yMiA6IC4xNCB9KTtcblxuZXhwb3J0IGNvbnN0IG5lb25TaGFwZUNhdGFsb2c6IHJlYWRvbmx5IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb25bXSA9IFtcbiAgbWFrZShcInBsYXllclwiLCBcImFycm93LWNsYXNzaWNcIiwgXCJBcnJvdyBDbGFzc2ljXCIsIGFycm93LCBcInBpdGNoXCIsIFthcnJvdy5tYXAoKFt4LCB5XSkgPT4gW3ggKiAuNDIsIHkgKiAuNDJdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwiZGVsdGEtc2xlZWtcIiwgXCJEZWx0YSBTbGVla1wiLCBbWzAsLTFdLFsuOSwuODJdLFswLC40OF0sWy0uOSwuODJdXSwgXCJwaXRjaFwiLCBbW1swLC0uNDVdLFsuMzUsLjQ1XSxbMCwuMjhdLFstLjM1LC40NV1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzdGFyLWNvcmVcIiwgXCJTdGFyIENvcmVcIiwgc3Rhcig0LCAuMzIpLCBcInJvbGxcIiwgW2RpYW1vbmQubWFwKChbeCx5XSkgPT4gW3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJoZXgtZmlnaHRlclwiLCBcIkhleCBGaWdodGVyXCIsIHJlZ3VsYXIoNiksIFwieWF3XCIsIFtyZWd1bGFyKDYsIC1NYXRoLlBJLzIsIC40OCwgLjQ4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwid2luZy1zcGxpdFwiLCBcIldpbmcgU3BsaXRcIiwgW1stMSwtLjg1XSxbLS4yNSwuMV0sWzAsLS4yNV0sWy4yNSwuMV0sWzEsLS44NV0sWy42NiwuNzJdLFswLC4zNV0sWy0uNjYsLjcyXV0sIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKSA9PiBbeCouMTgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwidHJpYWQtcG9kXCIsIFwiVHJpYWQgUG9kXCIsIHJlZ3VsYXIoMyksIFwieWF3XCIsIFtyZWd1bGFyKDMsIC1NYXRoLlBJLzIsIC4zOCwgLjM4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3Bpa2UtbGFuY2VcIiwgXCJTcGlrZSBMYW5jZVwiLCBbWzAsLTFdLFsuNDgsLjY1XSxbLjE4LC40Ml0sWzAsMV0sWy0uMTgsLjQyXSxbLS40OCwuNjVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLWFyYy1rYXRhbmFcIiwgXCJTd29yZCBBcmMgS2F0YW5hXCIsIFtbLS4xNiwtMV0sIFsuMTYsLTFdLCBbLjIyLC4yOF0sIFsuNDgsLjYyXSwgWy4xOCwuNTJdLCBbLjEsMV0sIFstLjEsMV0sIFstLjE4LC41Ml0sIFstLjQ4LC42Ml0sIFstLjIyLC4yOF1dLCBcInBpdGNoXCIsIFtbWy0uMDU1LC0uNzJdLCBbLjA1NSwtLjcyXSwgWy4wNTUsLjE4XSwgWy0uMDU1LC4xOF1dXSksXG4gIG1ha2UoXCJwbGF5ZXJcIiwgXCJzd29yZC1jbGVhdmVyLXdpZGVcIiwgXCJTd29yZCBDbGVhdmVyIFdpZGVcIiwgW1stLjI4LC0xXSwgWy4yOCwtMV0sIFsuNDQsLS43Nl0sIFsuMzQsLjM0XSwgWy43MiwuNThdLCBbLjIyLC41NV0sIFsuMTYsMV0sIFstLjE2LDFdLCBbLS4yMiwuNTVdLCBbLS43MiwuNThdLCBbLS4zNCwuMzRdLCBbLS40NCwtLjc2XV0sIFwicm9sbFwiLCBbW1stLjEsLS42OF0sIFsuMSwtLjY4XSwgWy4wOCwuMThdLCBbLS4wOCwuMThdXV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtbmVlZGxlLXNhYnJlXCIsIFwiU3dvcmQgTmVlZGxlIFNhYnJlXCIsIFtbMCwtMV0sIFsuMDgsLS44Ml0sIFsuMTEsLjVdLCBbLjMyLC43Ml0sIFsuMDgsLjY0XSwgWy4wNSwxXSwgWy0uMDUsMV0sIFstLjA4LC42NF0sIFstLjMyLC43Ml0sIFstLjExLC41XSwgWy0uMDgsLS44Ml1dLCBcInBpdGNoXCIpLFxuICBtYWtlKFwicGxheWVyXCIsIFwic3dvcmQtZ3VhcmRlZC1ibGFkZVwiLCBcIlN3b3JkIEd1YXJkZWQgQmxhZGVcIiwgW1stLjEyLC0xXSwgWy4xMiwtMV0sIFsuMTYsLjM2XSwgWy42MiwuMzZdLCBbLjYyLC41NF0sIFsuMTQsLjU2XSwgWy4xLDFdLCBbLS4xLDFdLCBbLS4xNCwuNTZdLCBbLS42MiwuNTRdLCBbLS42MiwuMzZdLCBbLS4xNiwuMzZdXSwgXCJ5YXdcIiwgW1tbLS4wNDUsLS43Ml0sIFsuMDQ1LC0uNzJdLCBbLjA0NSwuMjJdLCBbLS4wNDUsLjIyXV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcInN3b3JkLXByaXNtLWdyZWF0YmxhZGVcIiwgXCJTd29yZCBQcmlzbSBHcmVhdGJsYWRlXCIsIFtbMCwtMV0sIFsuMzQsLS43NF0sIFsuMywuMjhdLCBbLjU2LC41Ml0sIFsuMiwuNDhdLCBbLjEyLDFdLCBbLS4xMiwxXSwgWy0uMiwuNDhdLCBbLS41NiwuNTJdLCBbLS4zLC4yOF0sIFstLjM0LC0uNzRdXSwgXCJyb2xsXCIsIFtbWy0uMDgsLS40OF0sIFsuMDgsLS40OF0sIFsuMDgsLjE2XSwgWy0uMDgsLjE2XV1dKSxcbiAgbWFrZShcInBsYXllclwiLCBcIm9yYml0LWRyb25lXCIsIFwiT3JiaXQgRHJvbmVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsIDAsIC41OCwgLjU4KV0pLFxuICBtYWtlKFwicGxheWVyXCIsIFwic2hpZWxkLXJpbmdcIiwgXCJTaGllbGQgUmluZ1wiLCByZWd1bGFyKDMyKSwgXCJvcmJpdFwiLCBbcmVndWxhcigzMiwgMCwgLjkxLCAuOTEpXSksXG5cbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1kYXJ0XCIsIFwiRGFydFwiLCBbWy0xLC0uN10sWzEsMF0sWy0xLC43XSxbLS40NSwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXIta2l0ZVwiLCBcIktpdGVcIiwgW1stMSwtLjc1XSxbMSwwXSxbLTEsLjc1XSxbLS41NSwwXV0sIFwicm9sbFwiLCBbcmVndWxhcigzLDAsLjM1LC4zNSldKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1uZWVkbGVcIiwgXCJOZWVkbGVcIiwgW1stMSwtLjQyXSxbMSwwXSxbLTEsLjQyXSxbLS41NSwwXV0sIFwieWF3XCIpLFxuICBtYWtlKFwiaHVudGVyXCIsIFwiaHVudGVyLXRhbG9uXCIsIFwiVGFsb25cIiwgc3RhcigzLC4yOCksIFwicm9sbFwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1zaGFyZFwiLCBcIlNoYXJkXCIsIGRpYW1vbmQsIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItdmVlXCIsIFwiVmVlXCIsIGNoZXZyb24sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItZXllXCIsIFwiV2F0Y2hlclwiLCByZWd1bGFyKDMsIE1hdGguUEkvMiksIFwieWF3XCIsIFtyZWd1bGFyKDMsTWF0aC5QSS8yLC40MiwuNDIpXSksXG4gIG1ha2UoXCJodW50ZXJcIiwgXCJodW50ZXItYnVyc3RcIiwgXCJCdXJzdFwiLCBzdGFyKDgsLjM1KSwgXCJwdWxzZVwiKSxcbiAgbWFrZShcImh1bnRlclwiLCBcImh1bnRlci1ib2x0XCIsIFwiQm9sdFwiLCBbWy0uNywtMV0sWy4xNSwtLjM1XSxbLS4yNSwtLjJdLFsuNywxXSxbLS4xLC4zMl0sWy4zLC4xNV1dLCBcInJvbGxcIiksXG5cbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWZyYW1lXCIsIFwiRnJhbWVcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQ4LHkqLjQ4XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWdlbVwiLCBcIkdlbVwiLCBkaWFtb25kLCBcInBpdGNoXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouMjgseSouMjhdIGFzIGNvbnN0KV0pLFxuICBtYWtlKFwiYnJ1aXNlclwiLCBcImJydWlzZXItaGV4XCIsIFwiSGV4IENvcmVcIiwgcmVndWxhcig2KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoNiwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1jcm93blwiLCBcIkNyb3duXCIsIFtbLTEsLS43NV0sWy0uNSwtLjU1XSxbMCwtLjg1XSxbLjUsLS41NV0sWzEsLS43NV0sWy44LC44XSxbLS44LC44XV0sIFwicm9sbFwiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLWNyb3NzXCIsIFwiQ3Jvc3NcIiwgW1stLjM1LC0xXSxbLjM1LC0xXSxbLjM1LC0uMzVdLFsxLC0uMzVdLFsxLC4zNV0sWy4zNSwuMzVdLFsuMzUsMV0sWy0uMzUsMV0sWy0uMzUsLjM1XSxbLTEsLjM1XSxbLTEsLS4zNV0sWy0uMzUsLS4zNV1dLCBcInlhd1wiKSxcbiAgbWFrZShcImJydWlzZXJcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiUHJpc21cIiwgZGlhbW9uZCwgXCJwdWxzZVwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1nZWFyXCIsIFwiR2VhclwiLCBzdGFyKDgsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC4yOCwuMjgpXSksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci14XCIsIFwiWCBDb3JlXCIsIFtbLTEsLS42NV0sWy0uNjUsLTFdLFswLC0uMzVdLFsuNjUsLTFdLFsxLC0uNjVdLFsuMzUsMF0sWzEsLjY1XSxbLjY1LDFdLFswLC4zNV0sWy0uNjUsMV0sWy0xLC42NV0sWy0uMzUsMF1dLCBcInJvbGxcIiksXG4gIG1ha2UoXCJicnVpc2VyXCIsIFwiYnJ1aXNlci1zbGFiXCIsIFwiU2xhYlwiLCBbWy0uNjUsLTFdLFsxLC0xXSxbLjY1LDFdLFstMSwxXV0sIFwicGl0Y2hcIiksXG5cbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWhleFwiLCBcIkhlYXZ5IEhleFwiLCByZWd1bGFyKDYpLCBcInlhd1wiLCBbcmVndWxhcig2LDAsLjM4LC4zOCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJhclwiLCBcIkFybW9yIEJhclwiLCBbWy0uNzUsLTFdLFsuNzUsLTFdLFsxLC0uNDVdLFsuNzUsMV0sWy0uNzUsMV0sWy0xLC40NV1dLCBcInBpdGNoXCIsIFtbWy0uNDgsLS4xOF0sWy40OCwtLjE4XSxbLjQ4LC4xOF0sWy0uNDgsLjE4XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWJsb2NrXCIsIFwiQmxvY2tcIiwgc3F1YXJlLCBcInJvbGxcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQyLHkqLjQyXSBhcyBjb25zdCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLW9jdFwiLCBcIk9jdGFnb25cIiwgcmVndWxhcig4KSwgXCJ5YXdcIiwgW3JlZ3VsYXIoOCwwLC41OCwuNTgpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1mb3J0XCIsIFwiRm9ydHJlc3NcIiwgcmVndWxhcig2KSwgXCJwaXRjaFwiLCBbcmVndWxhcig2LDAsLjU4LC41OCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXJlYWN0b3JcIiwgXCJSZWFjdG9yXCIsIHJlZ3VsYXIoMTApLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjU0LC41NCldKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLWNpdGFkZWxcIiwgXCJDaXRhZGVsXCIsIFtbLS42NSwtMV0sWy42NSwtMV0sWy42NSwtLjcyXSxbMSwtLjcyXSxbMSwuNzJdLFsuNjUsLjcyXSxbLjY1LDFdLFstLjY1LDFdLFstLjY1LC43Ml0sWy0xLC43Ml0sWy0xLC0uNzJdLFstLjY1LC0uNzJdXSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4yOCx5Ki4yOF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0YW5rXCIsIFwidGFuay1idW5rZXJcIiwgXCJCdW5rZXJcIiwgW1stLjcyLC0xXSxbLjcyLC0xXSxbMSwtLjU4XSxbMSwuNThdLFsuNzIsMV0sWy0uNzIsMV0sWy0xLC41OF0sWy0xLC0uNThdXSwgXCJwaXRjaFwiLCBbW1stLjUsLS4xNF0sWy41LC0uMTRdLFsuNSwuMTRdLFstLjUsLjE0XV1dKSxcbiAgbWFrZShcInRhbmtcIiwgXCJ0YW5rLXN1blwiLCBcIlN1biBUYW5rXCIsIHJlZ3VsYXIoMTIpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC4yOCwuMjgpXSksXG5cbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWRpYW1vbmRcIiwgXCJQaGFzZSBEaWFtb25kXCIsIGRpYW1vbmQsIFwicm9sbFwiLCBbZGlhbW9uZC5tYXAoKFt4LHldKT0+W3gqLjIseSouMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jaGV2cm9uXCIsIFwiU2xpcHN0cmVhbVwiLCBbWy0xLC0uOF0sWy0uMiwwXSxbLTEsLjhdLFstLjM1LC44XSxbLjQ1LDBdLFstLjM1LC0uOF0sWy4yNSwtLjhdLFsxLDBdLFsuMjUsLjhdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLXNxdWFyZVwiLCBcIlRpbHQgQm94XCIsIHNxdWFyZSwgXCJyb2xsXCIsIFtzcXVhcmUubWFwKChbeCx5XSk9Plt4Ki4zNCx5Ki4zNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1jb21wYXNzXCIsIFwiQ29tcGFzc1wiLCBkaWFtb25kLCBcInlhd1wiKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWV5ZVwiLCBcIlBoYXNlIEV5ZVwiLCByZWd1bGFyKDMpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDgsMCwuMTgsLjE4KV0pLFxuICBtYWtlKFwidHJpY2tzdGVyXCIsIFwidHJpY2staG91cmdsYXNzXCIsIFwiSG91cmdsYXNzXCIsIFtbLTEsLTFdLFsxLC0xXSxbLjI4LDBdLFsxLDFdLFstMSwxXSxbLS4yOCwwXV0sIFwicGl0Y2hcIiksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay1saW5rXCIsIFwiTGlua1wiLCByZWd1bGFyKDEyLDAsMSwuNTUpLCBcInlhd1wiLCBbcmVndWxhcigxMiwwLC42MiwuMjIpXSksXG4gIG1ha2UoXCJ0cmlja3N0ZXJcIiwgXCJ0cmljay12b3J0ZXhcIiwgXCJWb3J0ZXhcIiwgc3Rhcig3LC41NiksIFwicm9sbFwiLCBbcmVndWxhcig3LDAsLjI1LC4yNSldKSxcbiAgbWFrZShcInRyaWNrc3RlclwiLCBcInRyaWNrLWdhdGVcIiwgXCJHaG9zdCBHYXRlXCIsIHNxdWFyZSwgXCJwdWxzZVwiLCBbc3F1YXJlLm1hcCgoW3gseV0pPT5beCouNzgseSouNzhdIGFzIGNvbnN0KV0pLFxuXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXN0YXJcIiwgXCJOb3ZhIFN0YXJcIiwgc3Rhcig4LC41NSksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjMsLjMpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNhd1wiLCBcIkhhbG8gU2F3XCIsIHN0YXIoMTIsLjcyKSwgXCJ5YXdcIiwgW3JlZ3VsYXIoMTIsMCwuNDIsLjQyKV0pLFxuICBtYWtlKFwiZWxpdGVcIiwgXCJlbGl0ZS1jcm93blwiLCBcIlZvaWQgQ3Jvd25cIiwgc3Rhcig3LC40OCksIFwicGl0Y2hcIiwgW2RpYW1vbmQubWFwKChbeCx5XSk9Plt4Ki4yMix5Ki4yMl0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXByaXNtXCIsIFwiUm95YWwgUHJpc21cIiwgZGlhbW9uZCwgXCJyb2xsXCIsIFtkaWFtb25kLm1hcCgoW3gseV0pPT5beCouNSx5Ki41XSBhcyBjb25zdCldKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtb3JiaXRcIiwgXCJPcmJpdCBFeWVcIiwgcmVndWxhcigxMiksIFwib3JiaXRcIiwgW3JlZ3VsYXIoMTIsMCwuNiwuNiksIHJlZ3VsYXIoMTIsMCwuMiwuMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtY2lyY3VpdFwiLCBcIkNpcmN1aXQgTG9yZFwiLCBzdGFyKDgsLjc1KSwgXCJ5YXdcIiwgW3NxdWFyZS5tYXAoKFt4LHldKT0+W3gqLjQseSouNF0gYXMgY29uc3QpXSksXG4gIG1ha2UoXCJlbGl0ZVwiLCBcImVsaXRlLXNlbnRpbmVsXCIsIFwiU2VudGluZWxcIiwgc3RhcigxMCwuNjIpLCBcInB1bHNlXCIsIFtyZWd1bGFyKDEwLDAsLjIyLC4yMildKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtd2luZ3NcIiwgXCJOaWdodCBXaW5nc1wiLCBbWy0xLC0uOF0sWy0uNywuMzVdLFstLjI1LC4wNV0sWzAsLjg1XSxbLjI1LC4wNV0sWy43LC4zNV0sWzEsLS44XSxbLjM1LC0uMzVdLFswLC0uMDVdLFstLjM1LC0uMzVdXSwgXCJwaXRjaFwiKSxcbiAgbWFrZShcImVsaXRlXCIsIFwiZWxpdGUtZW1wZXJvclwiLCBcIkVtcGVyb3JcIiwgc3Rhcig4LC40OCksIFwicm9sbFwiLCBbcmVndWxhcig4LDAsLjI0LC4yNCldKSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXROZW9uU2hhcGUgPSAoaWQ6IHN0cmluZyk6IE5lb25HZW9tZXRyaWNTaGFwZURlZmluaXRpb24gfCB1bmRlZmluZWQgPT5cbiAgbmVvblNoYXBlQ2F0YWxvZy5maW5kKHNoYXBlID0+IHNoYXBlLmlkID09PSBpZCk7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB0eXBlIHsgTmVvblByaW1pdGl2ZSB9IGZyb20gXCIuL3ByaW1pdGl2ZS1yZW5kZXJlclwiO1xuaW1wb3J0IHR5cGUgeyBOZW9uVG9wRG93blNjZW5lIH0gZnJvbSBcIi4vdG9wLWRvd24tc2NlbmVcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmVSdW5uZXJTY2VuZUlkcyA9IFtcIm5lb25IYWxsXCIsIFwiYXVyb3JhXCIsIFwiY3J5c3RhbEZvcmdlXCIsIFwidm9pZEdhcmRlblwiLCBcInNvbGFyQXJyYXlcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIExhbmVSdW5uZXJTY2VuZUlkID0gdHlwZW9mIGxhbmVSdW5uZXJTY2VuZUlkc1tudW1iZXJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmVSdW5uZXJTY2VuZU9wdGlvbnMge1xuICBzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHRpbWVNczogbnVtYmVyO1xufVxuXG5jb25zdCBzY2VuZU5hbWVzOiBSZWNvcmQ8TGFuZVJ1bm5lclNjZW5lSWQsIHN0cmluZz4gPSB7XG4gIG5lb25IYWxsOiBcIk5lb24gSGFsbFwiLFxuICBhdXJvcmE6IFwiQXVyb3JhXCIsXG4gIGNyeXN0YWxGb3JnZTogXCJDcnlzdGFsIEZvcmdlXCIsXG4gIHZvaWRHYXJkZW46IFwiVm9pZCBHYXJkZW5cIixcbiAgc29sYXJBcnJheTogXCJTb2xhciBBcnJheVwiLFxufTtcblxuY29uc3QgaGFsbEJvdHRvbVdpZHRoID0gMC45MjtcbmNvbnN0IGhhbGxGbG9vckNvbG9yID0gXCIjMDUxMDFmXCI7XG5jb25zdCBoYWxsRGVlcEJsdWUgPSBcIiMxMjM1NmFcIjtcbmNvbnN0IGhhbGxNdXRlZEJsdWUgPSBcIiMxYjRjOGRcIjtcbmNvbnN0IGhhbGxNdXRlZEN5YW4gPSBcIiMyYWM0ZGNcIjtcbmNvbnN0IGhhbGxNdXRlZFZpb2xldCA9IFwiIzQ1MzA3OVwiO1xuY29uc3QgaGFsbEFjY2VudFBpbmsgPSBcIiNhNzM1N2VcIjtcbmNvbnN0IGhhbGxFbmVyZ3lTcGVlZCA9IDAuMDAxNztcblxuZXhwb3J0IGludGVyZmFjZSBMYW5lUnVubmVyU2NlbmVQYWxldHRlIHtcbiAgZmxvb3I6IHN0cmluZztcbiAgYm91bmRhcnk6IHN0cmluZztcbiAgbGFuZTogc3RyaW5nO1xuICBjZW50ZXJMYW5lOiBzdHJpbmc7XG4gIGFjY2VudDogc3RyaW5nO1xuICBsYW5lSGlnaGxpZ2h0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBoYWxsRmxvb3JDb2xvcixcbiAgYm91bmRhcnk6IGhhbGxEZWVwQmx1ZSxcbiAgbGFuZTogaGFsbE11dGVkQmx1ZSxcbiAgY2VudGVyTGFuZTogaGFsbE11dGVkVmlvbGV0LFxuICBhY2NlbnQ6IGhhbGxBY2NlbnRQaW5rLFxuICBsYW5lSGlnaGxpZ2h0OiBoYWxsTXV0ZWRDeWFuLFxufTtcblxuY29uc3QgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwMzExMGZcIixcbiAgYm91bmRhcnk6IFwiIzE3OGM5MlwiLFxuICBsYW5lOiBcIiMxN2Q3YjNcIixcbiAgY2VudGVyTGFuZTogXCIjOGY1NmZmXCIsXG4gIGFjY2VudDogXCIjZmY0ZmM3XCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2I5ZmY2YVwiLFxufTtcblxuY29uc3QgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUgPSB7XG4gIGZsb29yOiBcIiMwNzEwMThcIixcbiAgYm91bmRhcnk6IFwiIzI2ZDdmZlwiLFxuICBsYW5lOiBcIiM2M2YxZmZcIixcbiAgY2VudGVyTGFuZTogXCIjZmY1ZmQ4XCIsXG4gIGFjY2VudDogXCIjZmZiODRkXCIsXG4gIGxhbmVIaWdobGlnaHQ6IFwiI2Y0ZmJmZlwiLFxufTtcblxuY29uc3Qgdm9pZEdhcmRlbkxhbmVSdW5uZXJQYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlID0ge1xuICBmbG9vcjogXCIjMDgwODE4XCIsXG4gIGJvdW5kYXJ5OiBcIiM2ZjUzZmZcIixcbiAgbGFuZTogXCIjMzVlOGI2XCIsXG4gIGNlbnRlckxhbmU6IFwiI2ZmNGZjN1wiLFxuICBhY2NlbnQ6IFwiI2I5ZmY2YVwiLFxuICBsYW5lSGlnaGxpZ2h0OiBcIiM5YmQ3ZmZcIixcbn07XG5cbmNvbnN0IHNvbGFyQXJyYXlMYW5lUnVubmVyUGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSA9IHtcbiAgZmxvb3I6IFwiIzExMGMwN1wiLFxuICBib3VuZGFyeTogXCIjZmY5ZTM4XCIsXG4gIGxhbmU6IFwiI2ZmZDQ1YVwiLFxuICBjZW50ZXJMYW5lOiBcIiMyNmQ3ZmZcIixcbiAgYWNjZW50OiBcIiNmZjRmNjZcIixcbiAgbGFuZUhpZ2hsaWdodDogXCIjZmZmNmI4XCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZVJ1bm5lclNjZW5lTmFtZShzY2VuZUlkOiBMYW5lUnVubmVyU2NlbmVJZCk6IHN0cmluZyB7XG4gIHJldHVybiBzY2VuZU5hbWVzW3NjZW5lSWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMYW5lUnVubmVyU2NlbmVJZCh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgTGFuZVJ1bm5lclNjZW5lSWQge1xuICByZXR1cm4gKGxhbmVSdW5uZXJTY2VuZUlkcyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZVJ1bm5lclNjZW5lKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgcmV0dXJuIHNjZW5lQ3JlYXRvcnNbb3B0aW9ucy5zY2VuZUlkXShvcHRpb25zKTtcbn1cblxuY29uc3Qgc2NlbmVDcmVhdG9yczogUmVjb3JkPExhbmVSdW5uZXJTY2VuZUlkLCAob3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucykgPT4gTmVvblRvcERvd25TY2VuZT4gPSB7XG4gIG5lb25IYWxsOiBjcmVhdGVOZW9uSGFsbCxcbiAgYXVyb3JhOiBjcmVhdGVBdXJvcmEsXG4gIGNyeXN0YWxGb3JnZTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgY3J5c3RhbEZvcmdlTGFuZVJ1bm5lclBhbGV0dGUsIGFkZENyeXN0YWxGb3JnZURldGFpbHMpLFxuICB2b2lkR2FyZGVuOiBvcHRpb25zID0+IGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShvcHRpb25zLCB2b2lkR2FyZGVuTGFuZVJ1bm5lclBhbGV0dGUsIGFkZFZvaWRHYXJkZW5EZXRhaWxzKSxcbiAgc29sYXJBcnJheTogb3B0aW9ucyA9PiBjcmVhdGVUaGVtZWRMYW5lUnVubmVyU2NlbmUob3B0aW9ucywgc29sYXJBcnJheUxhbmVSdW5uZXJQYWxldHRlLCBhZGRTb2xhckFycmF5RGV0YWlscyksXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZW9uSGFsbChvcHRpb25zOiBMYW5lUnVubmVyU2NlbmVPcHRpb25zKTogTmVvblRvcERvd25TY2VuZSB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdGltZU1zIH0gPSBvcHRpb25zO1xuICBjb25zdCBwcmltaXRpdmVzOiBOZW9uUHJpbWl0aXZlW10gPSBbXTtcbiAgY29uc3QgZ2VvbWV0cnkgPSBsYW5lUnVubmVyUGVyc3BlY3RpdmUod2lkdGgsIGhlaWdodCk7XG5cbiAgYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUocHJpbWl0aXZlcywgZ2VvbWV0cnksIHN0YW5kYXJkTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEhhbGxMYW5lU2lnbmFscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcbiAgYWRkSGFsbEZsb29yR2x5cGhzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsSG9yaXpvbkRldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEhhbGxTaWRlUGFuZWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRIYWxsRW5lcmd5VHJhY2VzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuXG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXVyb3JhKG9wdGlvbnM6IExhbmVSdW5uZXJTY2VuZU9wdGlvbnMpOiBOZW9uVG9wRG93blNjZW5lIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0aW1lTXMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHByaW1pdGl2ZXM6IE5lb25QcmltaXRpdmVbXSA9IFtdO1xuICBjb25zdCBnZW9tZXRyeSA9IGxhbmVSdW5uZXJQZXJzcGVjdGl2ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgYXVyb3JhTGFuZVJ1bm5lclBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUxhbmVTaWduYWxzKHByaW1pdGl2ZXMsIGdlb21ldHJ5LCB0aW1lTXMpO1xuICBhZGRBdXJvcmFHcm91bmRGbGFyZXMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIGFkZEF1cm9yYUhvcml6b25WZWlscyhwcmltaXRpdmVzLCBnZW9tZXRyeSwgdGltZU1zKTtcblxuICByZXR1cm4geyBwcmltaXRpdmVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lZExhbmVSdW5uZXJTY2VuZShcbiAgb3B0aW9uczogTGFuZVJ1bm5lclNjZW5lT3B0aW9ucyxcbiAgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSxcbiAgYWRkRGV0YWlsczogKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcikgPT4gdm9pZCxcbik6IE5lb25Ub3BEb3duU2NlbmUge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRpbWVNcyB9ID0gb3B0aW9ucztcbiAgY29uc3QgcHJpbWl0aXZlczogTmVvblByaW1pdGl2ZVtdID0gW107XG4gIGNvbnN0IGdlb21ldHJ5ID0gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoLCBoZWlnaHQpO1xuICBhZGRTdGFuZGFyZExhbmVSdW5uZXJQZXJzcGVjdGl2ZShwcmltaXRpdmVzLCBnZW9tZXRyeSwgcGFsZXR0ZSwgdGltZU1zKTtcbiAgYWRkVGhlbWVkTGFuZVNpZ25hbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZERldGFpbHMocHJpbWl0aXZlcywgZ2VvbWV0cnksIHRpbWVNcyk7XG4gIHJldHVybiB7IHByaW1pdGl2ZXMgfTtcbn1cblxuZnVuY3Rpb24gbGFuZVJ1bm5lclBlcnNwZWN0aXZlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gIGNvbnN0IHZwID0geyB4OiB3aWR0aCAqIC41LCB5OiAtaGVpZ2h0IH07XG4gIGNvbnN0IGJvdHRvbVkgPSBoZWlnaHQgKiAuOTg1O1xuICBjb25zdCBib3R0b21IYWxmID0gd2lkdGggKiBoYWxsQm90dG9tV2lkdGggKiAuNTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgdnAsXG4gICAgbGVmdEJvdHRvbTogeyB4OiB3aWR0aCAqIC41IC0gYm90dG9tSGFsZiwgeTogYm90dG9tWSB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7IHg6IHdpZHRoICogLjUgKyBib3R0b21IYWxmLCB5OiBib3R0b21ZIH0sXG4gICAgbGVmdEhvcml6b246IHsgeDogd2lkdGggKiAuNSAtIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgICByaWdodEhvcml6b246IHsgeDogd2lkdGggKiAuNSArIGJvdHRvbUhhbGYsIHk6IHZwLnkgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhbmRhcmRMYW5lUnVubmVyUGVyc3BlY3RpdmUoXG4gIGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sXG4gIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LFxuICBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLFxuICB0aW1lTXM6IG51bWJlcixcbik6IHZvaWQge1xuICBhZGRMYW5lUnVubmVyRmxvb3IoaXRlbXMsIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQsIHBhbGV0dGUsIHRpbWVNcyk7XG4gIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUpO1xuICBhZGRMYW5lUnVubmVyRGVwdGhMaW5lcyhpdGVtcywgZ2VvbWV0cnksIHBhbGV0dGUsIHRpbWVNcyk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJGbG9vcihpdGVtczogTmVvblByaW1pdGl2ZVtdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgcHVsc2UgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgKiBoYWxsRW5lcmd5U3BlZWQpICogLjI7XG4gIGl0ZW1zLnB1c2goeyB4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAqIC40Miwgd2lkdGg6IHdpZHRoICogaGFsbEJvdHRvbVdpZHRoLCBoZWlnaHQ6IGhlaWdodCAqIDEuMDgsIGNvbG9yOiBwYWxldHRlLmZsb29yLCBzZWNvbmRhcnlDb2xvcjogXCIjMDIwNTBkXCIsIGdsb3c6IC4wNSwgaW50ZW5zaXR5OiAuMjMsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC45LCB3aWR0aDogd2lkdGggKiAuMzQsIGhlaWdodDogMS40LCBjb2xvcjogcGFsZXR0ZS5ib3VuZGFyeSwgc2Vjb25kYXJ5Q29sb3I6IHBhbGV0dGUubGFuZUhpZ2hsaWdodCwgZ2xvdzogLjMsIGludGVuc2l0eTogLjE4ICsgcHVsc2UgKiAuMDcsIHNoYXBlOiBcImJvbHRcIiB9KTtcbiAgaXRlbXMucHVzaCh7IHg6IHdpZHRoIC8gMiwgeTogLWhlaWdodCAqIC43OCwgd2lkdGg6IHdpZHRoICogLjE4LCBoZWlnaHQ6IDEuMiwgY29sb3I6IHBhbGV0dGUuYWNjZW50LCBzZWNvbmRhcnlDb2xvcjogcGFsZXR0ZS5jZW50ZXJMYW5lLCBnbG93OiAuMjQsIGludGVuc2l0eTogLjA4LCBzaGFwZTogXCJib2x0XCIgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZExhbmVSdW5uZXJSYWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgcGFsZXR0ZTogTGFuZVJ1bm5lclNjZW5lUGFsZXR0ZSk6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBbYm90dG9tLCBob3Jpem9uXSBvZiBbW2xlZnRCb3R0b20sIGxlZnRIb3Jpem9uXSwgW3JpZ2h0Qm90dG9tLCByaWdodEhvcml6b25dXSBhcyBjb25zdCkge1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBib3R0b20sIGhvcml6b24sIHBhbGV0dGUuYm91bmRhcnksIC40OCwgNi41KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgYm90dG9tLCBob3Jpem9uLCBwYWxldHRlLmxhbmVIaWdobGlnaHQsIC41NiwgMS4zKTtcbiAgfVxuXG4gIGZvciAobGV0IGxhbmUgPSAxOyBsYW5lIDw9IDM7IGxhbmUrKykge1xuICAgIGNvbnN0IHUgPSBsYW5lIC8gNDtcbiAgICBjb25zdCBzdGFydCA9IGxlcnBQb2ludChsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgdSk7XG4gICAgY29uc3QgZW5kID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHUpO1xuICAgIGNvbnN0IGNvbG9yID0gbGFuZSA9PT0gMiA/IHBhbGV0dGUuY2VudGVyTGFuZSA6IHBhbGV0dGUubGFuZTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgY29sb3IsIGxhbmUgPT09IDIgPyAuMjggOiAuMiwgMy40KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgc3RhcnQsIGVuZCwgcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0LCBsYW5lID09PSAyID8gLjI2IDogLjE4LCAuOSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFuZVJ1bm5lckRlcHRoTGluZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHBhbGV0dGU6IExhbmVSdW5uZXJTY2VuZVBhbGV0dGUsIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxNTsgcm93KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJvd1B1bHNlID0gLjU4ICsgTWF0aC5zaW4odGltZU1zIC8gNDgwICsgcm93ICogLjc4KSAqIC40MjtcbiAgICBjb25zdCBzdXJnZSA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWVNcyAvIDgyMCAtIHJvdyAqIC43MikpO1xuICAgIGNvbnN0IGNvbG9yID0gcm93ICUgNCA9PT0gMCA/IHBhbGV0dGUubGFuZUhpZ2hsaWdodCA6IHJvdyAlIDQgPT09IDEgPyBwYWxldHRlLmxhbmUgOiByb3cgJSA0ID09PSAyID8gcGFsZXR0ZS5jZW50ZXJMYW5lIDogcGFsZXR0ZS5hY2NlbnQ7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBjb2xvciwgKC4xNSArIHQgKiAuMjMpICogKC41NSArIHJvd1B1bHNlICogLjQ1KSArIHN1cmdlICogLjA1NSwgMy4xICsgdCAqIDIpO1xuICAgIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCBsZWZ0LCByaWdodCwgY29sb3IsICguMiArIHQgKiAuMjcpICogKC41MiArIHJvd1B1bHNlICogLjQ4KSArIHN1cmdlICogLjA3LCAuNzUgKyB0ICogLjYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgNzsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE5MDAgKyBwdWxzZUluZGV4IC8gNykgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNTUpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzQgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBoYWxsTXV0ZWRDeWFuLCBvcGFjaXR5LCAxLjEgKyB0ICogMS40KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYWxsRmxvb3JHbHlwaHMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24gfSA9IGdlb21ldHJ5O1xuICBjb25zdCByb3dzID0gWzIsIDQsIDYsIDgsIDEwLCAxMl07XG4gIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3cocm93IC8gMTQsIDEuODIpO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIC41KTtcbiAgICBjb25zdCBzY2FsZSA9IC40NSArIHQgKiAxLjE7XG4gICAgY29uc3QgcHVsc2UgPSAuNDggKyBNYXRoLnNpbih0aW1lTXMgLyA3MjAgKyByb3cgKiAxLjMpICogLjI0O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiA3ICogc2NhbGUsXG4gICAgICBoZWlnaHQ6IDcgKiBzY2FsZSxcbiAgICAgIGNvbG9yOiByb3cgJSA0ID09PSAwID8gaGFsbE11dGVkVmlvbGV0IDogaGFsbERlZXBCbHVlLFxuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHJvdyAlIDMgPT09IDAgPyBoYWxsQWNjZW50UGluayA6IGhhbGxNdXRlZEN5YW4sXG4gICAgICBnbG93OiAuMzQsXG4gICAgICBpbnRlbnNpdHk6IC4yNCArIHB1bHNlICogLjE2LFxuICAgICAgc2hhcGU6IFwiZGlhbW9uZFwiLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxIb3Jpem9uRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGNvbnN0IGdsb3dQdWxzZSA9IC43NSArIE1hdGguc2luKHRpbWVNcyAvIDY4MCkgKiAuMjU7XG4gIGFkZEdsb3dpbmdMaW5lKGl0ZW1zLCB7IHg6IHZwLnggLSB3aWR0aCAqIC4xMiwgeTogdnAueSArIGhlaWdodCAqIC4wMTIgfSwgeyB4OiB2cC54ICsgd2lkdGggKiAuMTIsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDEyIH0sIGhhbGxBY2NlbnRQaW5rLCAuMiArIGdsb3dQdWxzZSAqIC4wOCwgMS4xKTtcbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCB7IHg6IHZwLnggLSB3aWR0aCAqIC4wNiwgeTogdnAueSArIGhlaWdodCAqIC4wMjggfSwgaGFsbE11dGVkQ3lhbiwgLjE2LCAuODUpO1xuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54ICsgd2lkdGggKiAuMDYsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDI4IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE2LCB5OiB2cC55ICsgaGVpZ2h0ICogLjAyOCB9LCBoYWxsTXV0ZWRWaW9sZXQsIC4xNiwgLjg1KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHUgPSAoaW5kZXggKyAuNSkgLyA4O1xuICAgIGNvbnN0IGJhc2UgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgdSk7XG4gICAgY29uc3Qgc2lkZUJpYXMgPSBNYXRoLmFicyh1IC0gLjUpICogMjtcbiAgICBpdGVtcy5wdXNoKHtcbiAgICAgIHg6IGJhc2UueCxcbiAgICAgIHk6IGJhc2UueSAtIGhlaWdodCAqICguMDE4ICsgc2lkZUJpYXMgKiAuMDE4KSxcbiAgICAgIHdpZHRoOiAxICsgc2lkZUJpYXMgKiAuNyxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMzUgKyBzaWRlQmlhcyAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gaGFsbE11dGVkQmx1ZSA6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbEFjY2VudFBpbmssXG4gICAgICBnbG93OiAuMjQsXG4gICAgICBpbnRlbnNpdHk6IC4wNyArIGdsb3dQdWxzZSAqIC4wMzUsXG4gICAgICBzaGFwZTogXCJsaW5lXCIsXG4gICAgICByb3RhdGlvbjogTWF0aC5zaW4oaW5kZXggKiAxLjcpICogLjEyLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhhbGxTaWRlUGFuZWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0IH0gPSBnZW9tZXRyeTtcbiAgZm9yIChjb25zdCBzaWRlIG9mIFswLCAxXSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxMCwgMS42OCk7XG4gICAgICBjb25zdCByYWlsID0gc2lkZSA9PT0gMFxuICAgICAgICA/IGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdClcbiAgICAgICAgOiBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCk7XG4gICAgICBjb25zdCBvdXR3YXJkID0gc2lkZSA9PT0gMCA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGZsaWNrZXIgPSAuNTggKyBNYXRoLnNpbih0aW1lTXMgLyA2MDAgKyBpbmRleCAqIDEuNSArIHNpZGUpICogLjI4O1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIHg6IHJhaWwueCArIG91dHdhcmQgKiB3aWR0aCAqICguMDM1ICsgdCAqIC4wNiksXG4gICAgICAgIHk6IHJhaWwueSAtIGhlaWdodCAqICguMDE4ICsgdCAqIC4wMTIpLFxuICAgICAgICB3aWR0aDogMS4yICsgdCAqIDEuMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAzNSArIHQgKiAuMDgpLFxuICAgICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDEgPyBoYWxsTXV0ZWRCbHVlIDogaGFsbE11dGVkQ3lhbixcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IGhhbGxNdXRlZFZpb2xldCxcbiAgICAgICAgZ2xvdzogLjMsXG4gICAgICAgIGludGVuc2l0eTogKC4wNzUgKyB0ICogLjA2NSkgKiBmbGlja2VyLFxuICAgICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSGFsbEVuZXJneVRyYWNlcyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRlcHRoID0gLjEyICsgKChpbmRleCAqIDM3KSAlIDEwMCkgLyAxMTY7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgucG93KGRlcHRoLCAxLjcpKTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSA0ID09PSAwID8gLjE4IDogaW5kZXggJSA0ID09PSAxID8gLjM0IDogaW5kZXggJSA0ID09PSAyID8gLjY2IDogLjgyO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBzaWRlICsgTWF0aC5zaW4oaW5kZXggKiAxLjcgKyB0aW1lTXMgLyAxNzAwKSAqIC4wMzUpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNjIgKyBNYXRoLnNpbih0aW1lTXMgLyAzOTAgKyBpbmRleCAqIDEuMSkgKiAuMzg7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiAuOCArIGluZGV4ICUgMyAqIC41LFxuICAgICAgaGVpZ2h0OiAxMCArIGluZGV4ICUgNSAqIDcsXG4gICAgICBjb2xvcjogaW5kZXggJSA1ID09PSAwID8gaGFsbEFjY2VudFBpbmsgOiBpbmRleCAlIDMgPT09IDAgPyBoYWxsTXV0ZWRDeWFuIDogaGFsbE11dGVkQmx1ZSxcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBoYWxsTXV0ZWRWaW9sZXQsXG4gICAgICBnbG93OiAuMzIsXG4gICAgICBpbnRlbnNpdHk6ICguMDcgKyAoaW5kZXggJSA0KSAqIC4wMTgpICogc2hpbW1lcixcbiAgICAgIHNoYXBlOiBcImJvbHRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFMYW5lU2lnbmFscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IHB1bHNlSW5kZXggPSAwOyBwdWxzZUluZGV4IDwgOTsgcHVsc2VJbmRleCsrKSB7XG4gICAgY29uc3QgdHJhdmVsID0gKHRpbWVNcyAvIDE1NTAgKyBwdWxzZUluZGV4IC8gOSkgJSAxO1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdyh0cmF2ZWwsIDEuNDgpO1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAuMzIgKiAoMSAtIHRyYXZlbCk7XG4gICAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIGxlZnQsIHJpZ2h0LCBwdWxzZUluZGV4ICUgMiA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMTdkN2IzXCIsIG9wYWNpdHksIDEgKyB0ICogMS43KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRBdXJvcmFHcm91bmRGbGFyZXMoaXRlbXM6IE5lb25QcmltaXRpdmVbXSwgZ2VvbWV0cnk6IFJldHVyblR5cGU8dHlwZW9mIGxhbmVSdW5uZXJQZXJzcGVjdGl2ZT4sIHRpbWVNczogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgbGVmdEJvdHRvbSwgcmlnaHRCb3R0b20sIGxlZnRIb3Jpem9uLCByaWdodEhvcml6b24sIHdpZHRoLCBoZWlnaHQgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkZXB0aCA9IC4wOCArICgoaW5kZXggKiAyOSkgJSAxMDApIC8gMTEyO1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLnBvdyhkZXB0aCwgMS42MikpO1xuICAgIGNvbnN0IGxhbmVTaWRlID0gaW5kZXggJSAyID09PSAwID8gLjIyIDogLjc4O1xuICAgIGNvbnN0IGxlZnQgPSBsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVycFBvaW50KHJpZ2h0SG9yaXpvbiwgcmlnaHRCb3R0b20sIHQpO1xuICAgIGNvbnN0IHBvaW50ID0gbGVycFBvaW50KGxlZnQsIHJpZ2h0LCBsYW5lU2lkZSArIE1hdGguc2luKGluZGV4ICogMS4xICsgdGltZU1zIC8gMTgwMCkgKiAuMDQpO1xuICAgIGNvbnN0IHNoaW1tZXIgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA0MzAgKyBpbmRleCAqIDEuMykgKiAuMzU7XG4gICAgaXRlbXMucHVzaCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA5ICsgdCAqIC4wMTIpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IGluZGV4ICUgMyA9PT0gMSA/IFwiIzE3ZDdiM1wiIDogXCIjOGY1NmZmXCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogXCIjZmY0ZmM3XCIsXG4gICAgICBnbG93OiAuMzgsXG4gICAgICBpbnRlbnNpdHk6ICguMDggKyB0ICogLjA2KSAqIHNoaW1tZXIsXG4gICAgICBzaGFwZTogaW5kZXggJSA0ID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjE4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEF1cm9yYUhvcml6b25WZWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyB2cCwgd2lkdGgsIGhlaWdodCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XG4gICAgY29uc3QgdSA9IChpbmRleCAtIDMpIC8gNjtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5zaW4odGltZU1zIC8gMTEwMCArIGluZGV4ICogLjkpO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogdnAueCArIHUgKiB3aWR0aCAqIC4zNixcbiAgICAgIHk6IHZwLnkgKyBoZWlnaHQgKiAoLjA3NSArIGluZGV4ICogLjAwNiksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAzNSArIGluZGV4ICogLjAwNCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMTIgKyBNYXRoLmFicyh3YXZlKSAqIC4wMyksXG4gICAgICBjb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjMTdkN2IzXCIgOiBcIiM4ZjU2ZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDMgPT09IDAgPyBcIiNiOWZmNmFcIiA6IFwiI2ZmNGZjN1wiLFxuICAgICAgZ2xvdzogLjM0LFxuICAgICAgaW50ZW5zaXR5OiAuMDQ1ICsgTWF0aC5hYnMod2F2ZSkgKiAuMDI1LFxuICAgICAgc2hhcGU6IFwibGluZVwiLFxuICAgICAgcm90YXRpb246IHUgKiAuMjggKyB3YXZlICogLjA4LFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRoZW1lZExhbmVTaWduYWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCBwYWxldHRlOiBMYW5lUnVubmVyU2NlbmVQYWxldHRlLCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uIH0gPSBnZW9tZXRyeTtcbiAgZm9yIChsZXQgcHVsc2VJbmRleCA9IDA7IHB1bHNlSW5kZXggPCA4OyBwdWxzZUluZGV4KyspIHtcbiAgICBjb25zdCB0cmF2ZWwgPSAodGltZU1zIC8gMTcwMCArIHB1bHNlSW5kZXggLyA4KSAlIDE7XG4gICAgY29uc3QgdCA9IE1hdGgucG93KHRyYXZlbCwgMS41KTtcbiAgICBjb25zdCBsZWZ0ID0gbGVycFBvaW50KGxlZnRIb3Jpem9uLCBsZWZ0Qm90dG9tLCB0KTtcbiAgICBjb25zdCByaWdodCA9IGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KTtcbiAgICBhZGRHbG93aW5nTGluZShpdGVtcywgbGVmdCwgcmlnaHQsIHB1bHNlSW5kZXggJSAyID09PSAwID8gcGFsZXR0ZS5sYW5lSGlnaGxpZ2h0IDogcGFsZXR0ZS5hY2NlbnQsIC4yOCAqICgxIC0gdHJhdmVsKSwgMS4xICsgdCAqIDEuNik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ3J5c3RhbEZvcmdlRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTY7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coKGluZGV4ICsgMSkgLyAxNywgMS41NSk7XG4gICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IC4xNCA6IC44NjtcbiAgICBjb25zdCBlZGdlID0gbGVycFBvaW50KGxlcnBQb2ludChsZWZ0SG9yaXpvbiwgbGVmdEJvdHRvbSwgdCksIGxlcnBQb2ludChyaWdodEhvcml6b24sIHJpZ2h0Qm90dG9tLCB0KSwgc2lkZSk7XG4gICAgY29uc3QgZ2xpbnQgPSAuNTUgKyBNYXRoLnNpbih0aW1lTXMgLyA1MjAgKyBpbmRleCAqIDEuMTcpICogLjM1O1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogZWRnZS54LFxuICAgICAgeTogZWRnZS55LFxuICAgICAgd2lkdGg6IHdpZHRoICogKC4wMTIgKyB0ICogLjAxMiksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAqICguMDI1ICsgdCAqIC4wNiksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZiODRkXCIgOiBcIiM2M2YxZmZcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiNmZjVmZDhcIiA6IFwiI2Y0ZmJmZlwiLFxuICAgICAgZ2xvdzogLjM4LFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogZ2xpbnQsXG4gICAgICBzaGFwZTogXCJkaWFtb25kXCIsXG4gICAgICByb3RhdGlvbjogKHNpZGUgPCAuNSA/IC0uMjIgOiAuMjIpICsgTWF0aC5zaW4odGltZU1zIC8gMTQwMCArIGluZGV4KSAqIC4wOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTMsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDQ1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjEzLCB5OiB2cC55ICsgaGVpZ2h0ICogLjA0NSB9LCBcIiNmZmI4NGRcIiwgLjIyLCAxLjMpO1xufVxuXG5mdW5jdGlvbiBhZGRWb2lkR2FyZGVuRGV0YWlscyhpdGVtczogTmVvblByaW1pdGl2ZVtdLCBnZW9tZXRyeTogUmV0dXJuVHlwZTx0eXBlb2YgbGFuZVJ1bm5lclBlcnNwZWN0aXZlPiwgdGltZU1zOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBsZWZ0Qm90dG9tLCByaWdodEJvdHRvbSwgbGVmdEhvcml6b24sIHJpZ2h0SG9yaXpvbiwgd2lkdGgsIGhlaWdodCwgdnAgfSA9IGdlb21ldHJ5O1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5wb3coLjA4ICsgKChpbmRleCAqIDIzKSAlIDEwMCkgLyAxMTIsIDEuNjUpO1xuICAgIGNvbnN0IHNpZGUgPSBpbmRleCAlIDQgPCAyID8gLjE4IDogLjgyO1xuICAgIGNvbnN0IGNlbnRlciA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUgKyBNYXRoLnNpbih0aW1lTXMgLyAxOTAwICsgaW5kZXgpICogLjAzNSk7XG4gICAgY29uc3QgYmxvb20gPSAuNSArIE1hdGguc2luKHRpbWVNcyAvIDc2MCArIGluZGV4ICogLjgpICogLjMyO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogY2VudGVyLngsXG4gICAgICB5OiBjZW50ZXIueSxcbiAgICAgIHdpZHRoOiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgaGVpZ2h0OiB3aWR0aCAqICguMDA2ICsgdCAqIC4wMTQpLFxuICAgICAgY29sb3I6IGluZGV4ICUgMyA9PT0gMCA/IFwiI2I5ZmY2YVwiIDogXCIjMzVlOGI2XCIsXG4gICAgICBzZWNvbmRhcnlDb2xvcjogaW5kZXggJSAyID09PSAwID8gXCIjNmY1M2ZmXCIgOiBcIiNmZjRmYzdcIixcbiAgICAgIGdsb3c6IC40MixcbiAgICAgIGludGVuc2l0eTogKC4wNyArIHQgKiAuMDUpICogYmxvb20sXG4gICAgICBzaGFwZTogaW5kZXggJSAyID09PSAwID8gXCJkaWFtb25kXCIgOiBcImJvbHRcIixcbiAgICAgIHJvdGF0aW9uOiBNYXRoLnNpbih0aW1lTXMgLyAxMjAwICsgaW5kZXgpICogLjQsXG4gICAgfSk7XG4gIH1cbiAgYWRkR2xvd2luZ0xpbmUoaXRlbXMsIHsgeDogdnAueCAtIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIHsgeDogdnAueCArIHdpZHRoICogLjE4LCB5OiB2cC55ICsgaGVpZ2h0ICogLjA3IH0sIFwiIzM1ZThiNlwiLCAuMTgsIDEuMSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNvbGFyQXJyYXlEZXRhaWxzKGl0ZW1zOiBOZW9uUHJpbWl0aXZlW10sIGdlb21ldHJ5OiBSZXR1cm5UeXBlPHR5cGVvZiBsYW5lUnVubmVyUGVyc3BlY3RpdmU+LCB0aW1lTXM6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB7IGxlZnRCb3R0b20sIHJpZ2h0Qm90dG9tLCBsZWZ0SG9yaXpvbiwgcmlnaHRIb3Jpem9uLCB3aWR0aCwgaGVpZ2h0LCB2cCB9ID0gZ2VvbWV0cnk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxODsgaW5kZXgrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLnBvdygoaW5kZXggKyAxKSAvIDE5LCAxLjQ4KTtcbiAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gLjEgOiAuOTtcbiAgICBjb25zdCBtb3VudCA9IGxlcnBQb2ludChsZXJwUG9pbnQobGVmdEhvcml6b24sIGxlZnRCb3R0b20sIHQpLCBsZXJwUG9pbnQocmlnaHRIb3Jpem9uLCByaWdodEJvdHRvbSwgdCksIHNpZGUpO1xuICAgIGNvbnN0IHB1bHNlID0gLjYyICsgTWF0aC5zaW4odGltZU1zIC8gNjEwICsgaW5kZXggKiAxLjA1KSAqIC4zO1xuICAgIGl0ZW1zLnB1c2goe1xuICAgICAgeDogbW91bnQueCxcbiAgICAgIHk6IG1vdW50LnksXG4gICAgICB3aWR0aDogd2lkdGggKiAoLjAxOCArIHQgKiAuMDM1KSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICogKC4wMTIgKyB0ICogLjAyNCksXG4gICAgICBjb2xvcjogaW5kZXggJSAzID09PSAwID8gXCIjZmZkNDVhXCIgOiBcIiNmZjllMzhcIixcbiAgICAgIHNlY29uZGFyeUNvbG9yOiBpbmRleCAlIDQgPT09IDAgPyBcIiMyNmQ3ZmZcIiA6IFwiI2ZmNGY2NlwiLFxuICAgICAgZ2xvdzogLjMyLFxuICAgICAgaW50ZW5zaXR5OiAoLjA4ICsgdCAqIC4wNTUpICogcHVsc2UsXG4gICAgICBzaGFwZTogXCJib2x0XCIsXG4gICAgICByb3RhdGlvbjogc2lkZSA8IC41ID8gLS4zOCA6IC4zOCxcbiAgICB9KTtcbiAgfVxuICBhZGRHbG93aW5nTGluZShpdGVtcywgeyB4OiB2cC54IC0gd2lkdGggKiAuMTEsIHk6IHZwLnkgKyBoZWlnaHQgKiAuMDM1IH0sIHsgeDogdnAueCArIHdpZHRoICogLjExLCB5OiB2cC55ICsgaGVpZ2h0ICogLjAzNSB9LCBcIiNmZmY2YjhcIiwgLjI0LCAxLjQpO1xufVxuXG5mdW5jdGlvbiBhZGRHbG93aW5nTGluZShpdGVtczogTmVvblByaW1pdGl2ZVtdLCBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgYWxwaGE6IG51bWJlciwgdGhpY2tuZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZHggPSBiLnggLSBhLng7XG4gIGNvbnN0IGR5ID0gYi55IC0gYS55O1xuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGl0ZW1zLnB1c2goe1xuICAgIHg6IChhLnggKyBiLngpIC8gMixcbiAgICB5OiAoYS55ICsgYi55KSAvIDIsXG4gICAgd2lkdGg6IHRoaWNrbmVzcyxcbiAgICBoZWlnaHQ6IGxlbmd0aCAvIDIsXG4gICAgY29sb3IsXG4gICAgc2Vjb25kYXJ5Q29sb3I6IG5lb25QYWxldHRlLndoaXRlSG90LFxuICAgIGdsb3c6IC4zMixcbiAgICBpbnRlbnNpdHk6IGFscGhhLFxuICAgIHNoYXBlOiBcImxpbmVcIixcbiAgICByb3RhdGlvbjogTWF0aC5hdGFuMigtZHgsIGR5KSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxlcnBQb2ludChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgdDogbnVtYmVyKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgeDogYS54ICsgKGIueCAtIGEueCkgKiB0LCB5OiBhLnkgKyAoYi55IC0gYS55KSAqIHQgfTtcbn1cbiIsICJleHBvcnQgdHlwZSBUZXN0U3RhdHVzID0gXCJib290aW5nXCIgfCBcInJlYWR5XCIgfCBcInBhc3NlZFwiIHwgXCJmYWlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZXN0QXNzZXJ0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzZWQ6IGJvb2xlYW47XG4gIGRldGFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0UGFnZVNuYXBzaG90IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBUZXN0U3RhdHVzO1xuICBhc3NlcnRpb25zOiBUZXN0QXNzZXJ0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZTxURHJpdmVyIGV4dGVuZHMgb2JqZWN0PihcbiAgaWQ6IHN0cmluZyxcbiAgZHJpdmVyOiBURHJpdmVyLFxuICBzdGF0dXNFbGVtZW50OiBIVE1MRWxlbWVudCxcbikge1xuICBjb25zdCBzbmFwc2hvdDogVGVzdFBhZ2VTbmFwc2hvdCA9IHsgaWQsIHN0YXR1czogXCJib290aW5nXCIsIGFzc2VydGlvbnM6IFtdIH07XG4gIGNvbnN0IHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgc3RhdHVzRWxlbWVudC5kYXRhc2V0LnN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c25hcHNob3Quc3RhdHVzLnRvVXBwZXJDYXNlKCl9IFx1MDBCNyAke3NuYXBzaG90LmFzc2VydGlvbnMuZmlsdGVyKGEgPT4gYS5wYXNzZWQpLmxlbmd0aH0vJHtzbmFwc2hvdC5hc3NlcnRpb25zLmxlbmd0aH0gYXNzZXJ0aW9uc2A7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGVzdFN0YXR1cyA9IHNuYXBzaG90LnN0YXR1cztcbiAgfTtcbiAgY29uc3QgYXBpID0ge1xuICAgIC4uLmRyaXZlcixcbiAgICBnZXRTbmFwc2hvdDogKCk6IFRlc3RQYWdlU25hcHNob3QgPT4gc3RydWN0dXJlZENsb25lKHNuYXBzaG90KSxcbiAgICByZWFkeSgpOiB2b2lkIHtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IFwicmVhZHlcIjtcbiAgICAgIHB1Ymxpc2goKTtcbiAgICB9LFxuICAgIGFzc2VydChuYW1lOiBzdHJpbmcsIHBhc3NlZDogYm9vbGVhbiwgZGV0YWlsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBzbmFwc2hvdC5hc3NlcnRpb25zLnB1c2goeyBuYW1lLCBwYXNzZWQsIGRldGFpbCB9KTtcbiAgICAgIHNuYXBzaG90LnN0YXR1cyA9IHNuYXBzaG90LmFzc2VydGlvbnMuZXZlcnkoYXNzZXJ0aW9uID0+IGFzc2VydGlvbi5wYXNzZWQpID8gXCJwYXNzZWRcIiA6IFwiZmFpbGVkXCI7XG4gICAgICBwdWJsaXNoKCk7XG4gICAgfSxcbiAgfTtcbiAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbmVvbkZhY3RvcnlUZXN0OiB0eXBlb2YgYXBpIH0pLm5lb25GYWN0b3J5VGVzdCA9IGFwaTtcbiAgcHVibGlzaCgpO1xuICByZXR1cm4gYXBpO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0VHVuaW5nIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpZXMgdGhlIHdob2xlIGNvbWJhdCBzaW11bGF0aW9uIHBhY2Ugd2hpbGUgcHJlc2VydmluZyByZWxhdGl2ZVxuICAgKiB0aW1pbmcgYmV0d2VlbiBtb3ZlbWVudCwgY29vbGRvd25zLCBwcm9qZWN0aWxlcywgYW5kIGF1dGhvcmVkIHRyYWNrIGJlYXRzLlxuICAgKi9cbiAgZ2xvYmFsU3BlZWRNdWx0aXBsaWVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBjb21iYXRUdW5pbmcgPSB7XG4gIGdsb2JhbFNwZWVkTXVsdGlwbGllcjogMS41LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgQ29tYmF0VHVuaW5nO1xuXG5pZiAoIU51bWJlci5pc0Zpbml0ZShjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyKSB8fCBjb21iYXRUdW5pbmcuZ2xvYmFsU3BlZWRNdWx0aXBsaWVyIDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY29tYmF0VHVuaW5nOiBnbG9iYWxTcGVlZE11bHRpcGxpZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXCIpO1xufVxuIiwgImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW1pbHlEZWZpbml0aW9uPFRNZW1iZXJzIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZmFtaWx5SWQ6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgYWJzdHJhY3QgcmVhZG9ubHkgbWVtYmVyczogVE1lbWJlcnM7XG5cbiAgcHJvdGVjdGVkIHJlcXVpcmUoY29uZGl0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmZhbWlseUlkfTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgYWJzdHJhY3QgdmFsaWRhdGUoKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBTaG90UGF0dGVybiA9IFwic2luZ2xlXCIgfCBcInJhcGlkU2luZ2xlXCIgfCBcImJ1cnN0XCIgfCBcImhlYXZ5U2luZ2xlXCIgfCBcInBhaXJlZFNwcmVhZFwiO1xuZXhwb3J0IHR5cGUgUHJvamVjdGlsZUJlaGF2aW9yID0gXCJzdHJhaWdodFwiIHwgXCJwaWVyY2luZ1N0cmFpZ2h0XCI7XG5leHBvcnQgdHlwZSBQcm9qZWN0aWxlU2hhcGUgPSBcIm5lZWRsZVwiIHwgXCJkYXJ0XCIgfCBcInNsdWdcIiB8IFwic3BsaXRCb2x0XCI7XG5leHBvcnQgdHlwZSBNdXp6bGVFZmZlY3QgPSBcImNyaXNwU3RhclwiIHwgXCJyYXBpZEZsaWNrZXJcIiB8IFwiZ3JvdXBlZFB1bHNlXCIgfCBcInNob2NrRGlhbW9uZFwiIHwgXCJ0d2luUHJvbmdzXCI7XG5leHBvcnQgdHlwZSBJbXBhY3RFZmZlY3QgPSBcInBpblNwYXJrXCIgfCBcIm5lZWRsZVNjYXR0ZXJcIiB8IFwiYnVyc3RDcm9zc1wiIHwgXCJpbXBhY3RSaW5nXCIgfCBcInNwbGl0UmlwcGxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBmaXJlUmF0ZVBlclNlY29uZDogbnVtYmVyO1xuICBkYW1hZ2U6IG51bWJlcjtcbiAgcHJvamVjdGlsZVNwZWVkOiBudW1iZXI7XG4gIHByb2plY3RpbGVSYWRpdXM6IG51bWJlcjtcbiAgY29sbGlzaW9uUmFkaXVzU2NhbGU/OiBudW1iZXI7XG4gIHByb2plY3RpbGVDb3VudDogbnVtYmVyO1xuICBidXJzdENvdW50OiBudW1iZXI7XG4gIGJ1cnN0SW50ZXJ2YWxNczogbnVtYmVyO1xuICBzcHJlYWREZWdyZWVzOiBudW1iZXI7XG4gIHBpZXJjZTogbnVtYmVyO1xuICB0cmFpbExlbmd0aDogbnVtYmVyO1xuICB0cmFjZXJFdmVyeU50aFNob3Q6IG51bWJlcjtcbiAgaW1wYWN0UmFkaXVzPzogbnVtYmVyO1xuICBrbm9ja2JhY2s6IG51bWJlcjtcbiAgbXV6emxlRmxhc2hTY2FsZTogbnVtYmVyO1xuICBoaXRGbGFzaFNjYWxlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VuVmlzdWFsSWRlbnRpdHkge1xuICBzaWxob3VldHRlOiBzdHJpbmc7XG4gIG1vdGlvbkxhbmd1YWdlOiBzdHJpbmc7XG4gIHByb2plY3RpbGVTaGFwZTogUHJvamVjdGlsZVNoYXBlO1xuICBwcm9qZWN0aWxlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHRyYWlsQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIGNvcmVDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgcHJvamVjdGlsZUFzcGVjdDogbnVtYmVyO1xuICB0cmFpbFdpZHRoU2NhbGU6IG51bWJlcjtcbiAgdmlzdWFsSW50ZW5zaXR5OiBudW1iZXI7XG4gIG11enpsZUVmZmVjdDogTXV6emxlRWZmZWN0O1xuICBpbXBhY3RFZmZlY3Q6IEltcGFjdEVmZmVjdDtcbiAgbXV6emxlRHVyYXRpb25NczogbnVtYmVyO1xuICBpbXBhY3REdXJhdGlvbk1zOiBudW1iZXI7XG4gIGhvcml6b250YWxKaXR0ZXI6IG51bWJlcjtcbiAgcGlja3VwU2hhcGVab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1bk1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICB1bmxvY2tQaGFzZTogXCJzdGFydFwiIHwgXCJmaXJzdEJ1aWxkXCIgfCBcInByZXNzdXJlXCI7XG4gIHNob3RQYXR0ZXJuOiBTaG90UGF0dGVybjtcbiAgcHJvamVjdGlsZUJlaGF2aW9yOiBQcm9qZWN0aWxlQmVoYXZpb3I7XG4gIHZpc3VhbElkZW50aXR5OiBHdW5WaXN1YWxJZGVudGl0eTtcbiAgbGV2ZWxzOiByZWFkb25seSBHdW5MZXZlbFtdO1xufVxuXG5jb25zdCBsZXZlbCA9IChcbiAgbGV2ZWxOdW1iZXI6IG51bWJlcixcbiAgdmFsdWVzOiBPbWl0PEd1bkxldmVsLCBcImxldmVsXCIgfCBcInByb2plY3RpbGVDb3VudFwiIHwgXCJidXJzdENvdW50XCIgfCBcImJ1cnN0SW50ZXJ2YWxNc1wiIHwgXCJzcHJlYWREZWdyZWVzXCIgfCBcInBpZXJjZVwiIHwgXCJ0cmFjZXJFdmVyeU50aFNob3RcIiB8IFwia25vY2tiYWNrXCI+ICZcbiAgICBQYXJ0aWFsPFBpY2s8R3VuTGV2ZWwsIFwicHJvamVjdGlsZUNvdW50XCIgfCBcImJ1cnN0Q291bnRcIiB8IFwiYnVyc3RJbnRlcnZhbE1zXCIgfCBcInNwcmVhZERlZ3JlZXNcIiB8IFwicGllcmNlXCIgfCBcInRyYWNlckV2ZXJ5TnRoU2hvdFwiIHwgXCJrbm9ja2JhY2tcIiB8IFwiaW1wYWN0UmFkaXVzXCI+Pixcbik6IEd1bkxldmVsID0+ICh7XG4gIGxldmVsOiBsZXZlbE51bWJlcixcbiAgcHJvamVjdGlsZUNvdW50OiAxLFxuICBidXJzdENvdW50OiAxLFxuICBidXJzdEludGVydmFsTXM6IDAsXG4gIHNwcmVhZERlZ3JlZXM6IDAsXG4gIHBpZXJjZTogMCxcbiAgdHJhY2VyRXZlcnlOdGhTaG90OiAwLFxuICBrbm9ja2JhY2s6IDAsXG4gIC4uLnZhbHVlcyxcbn0pO1xuXG5leHBvcnQgY2xhc3MgR3VuRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgR3VuTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwiZ3VuXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJHdW5cIjtcbiAgcmVhZG9ubHkgaW1wbGVtZW50YXRpb24gPSB7XG4gICAgYXV0b0ZpcmVzOiB0cnVlLFxuICAgIHRhcmdldGluZzogXCJsYW5lRm9yd2FyZFwiLFxuICAgIHByb2plY3RpbGVNb2RlbDogXCJraW5lbWF0aWNcIixcbiAgICBjb2xsaXNpb25Nb2RlbDogXCJjaXJjbGVWc0VuZW15XCIsXG4gICAgYWxsb3dlZFNob3RQYXR0ZXJuczogW1wic2luZ2xlXCIsIFwicmFwaWRTaW5nbGVcIiwgXCJidXJzdFwiLCBcImhlYXZ5U2luZ2xlXCIsIFwicGFpcmVkU3ByZWFkXCJdIHNhdGlzZmllcyBTaG90UGF0dGVybltdLFxuICAgIGFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzOiBbXCJzdHJhaWdodFwiLCBcInBpZXJjaW5nU3RyYWlnaHRcIl0gc2F0aXNmaWVzIFByb2plY3RpbGVCZWhhdmlvcltdLFxuICB9IGFzIGNvbnN0O1xuXG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB7XG4gICAgcHVsc2VQaXN0b2w6IHtcbiAgICAgIGxhYmVsOiBcIlB1bHNlIFBpc3RvbFwiLCByYXJpdHk6IFwic3RhcnRlclwiLCB1bmxvY2tQaGFzZTogXCJzdGFydFwiLCBzaG90UGF0dGVybjogXCJzaW5nbGVcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInRpbnlCdWxsZXRcIiwgbW90aW9uTGFuZ3VhZ2U6IFwiY2xlYW5TaW5nbGVTaG90XCIsIHByb2plY3RpbGVTaGFwZTogXCJkYXJ0XCIsIHByb2plY3RpbGVDb2xvcjogXCJjeWFuXCIsIHRyYWlsQ29sb3I6IFwiZGVlcEJsdWVcIiwgY29yZUNvbG9yOiBcImN5YW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMi44LCB0cmFpbFdpZHRoU2NhbGU6IDAuNjUsIHZpc3VhbEludGVuc2l0eTogMC45LCBtdXp6bGVFZmZlY3Q6IFwiY3Jpc3BTdGFyXCIsIGltcGFjdEVmZmVjdDogXCJwaW5TcGFya1wiLCBtdXp6bGVEdXJhdGlvbk1zOiA3MiwgaW1wYWN0RHVyYXRpb25NczogMTA1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NTQwLHByb2plY3RpbGVSYWRpdXM6Myx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjc1LGRhbWFnZToxLjE1LHByb2plY3RpbGVTcGVlZDo1ODAscHJvamVjdGlsZVJhZGl1czozLHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouOH0pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoyLjE1LGRhbWFnZToxLjM1LHByb2plY3RpbGVTcGVlZDo2MjAscHJvamVjdGlsZVJhZGl1czozLjI1LHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6Ljc1LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi40NSxkYW1hZ2U6MS41LHByb2plY3RpbGVTcGVlZDo2NTAscHJvamVjdGlsZVJhZGl1czozLjM1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6LjgsaGl0Rmxhc2hTY2FsZTouOTV9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6Mi43NSxkYW1hZ2U6MS42NSxwcm9qZWN0aWxlU3BlZWQ6NjgwLHByb2plY3RpbGVSYWRpdXM6My41LHRyYWlsTGVuZ3RoOjIwLG11enpsZUZsYXNoU2NhbGU6Ljg1LGhpdEZsYXNoU2NhbGU6MX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5lZWRsZXJTbWc6IHtcbiAgICAgIGxhYmVsOiBcIk5lZWRsZXIgU01HXCIsIHJhcml0eTogXCJjb21tb25cIiwgdW5sb2NrUGhhc2U6IFwiZmlyc3RCdWlsZFwiLCBzaG90UGF0dGVybjogXCJyYXBpZFNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwic3ByYXlTcGhlcmVcIiwgbW90aW9uTGFuZ3VhZ2U6IFwic3RvY2hhc3RpY05lZWRsZVNwcmF5XCIsIHByb2plY3RpbGVTaGFwZTogXCJuZWVkbGVcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdyZWVuXCIsIHRyYWlsQ29sb3I6IFwiY3lhblwiLCBjb3JlQ29sb3I6IFwiZ3JlZW5cIiwgcHJvamVjdGlsZUFzcGVjdDogMSwgdHJhaWxXaWR0aFNjYWxlOiAwLjI4LCB2aXN1YWxJbnRlbnNpdHk6IDAuNzgsIG11enpsZUVmZmVjdDogXCJyYXBpZEZsaWNrZXJcIiwgaW1wYWN0RWZmZWN0OiBcIm5lZWRsZVNjYXR0ZXJcIiwgbXV6emxlRHVyYXRpb25NczogNDYsIGltcGFjdER1cmF0aW9uTXM6IDg1LCBob3Jpem9udGFsSml0dGVyOiA3IH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6NS4yNSxkYW1hZ2U6LjQyLHByb2plY3RpbGVTcGVlZDo2OTAscHJvamVjdGlsZVJhZGl1czoyLHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxMCx0cmFjZXJFdmVyeU50aFNob3Q6NSxtdXp6bGVGbGFzaFNjYWxlOi4zNSxoaXRGbGFzaFNjYWxlOi40NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDo3LjI1LGRhbWFnZTouNDgscHJvamVjdGlsZVNwZWVkOjczNSxwcm9qZWN0aWxlUmFkaXVzOjIsc3ByZWFkRGVncmVlczoxLjUsdHJhaWxMZW5ndGg6MTEsdHJhY2VyRXZlcnlOdGhTaG90OjUsbXV6emxlRmxhc2hTY2FsZTouNCxoaXRGbGFzaFNjYWxlOi41fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjkuMjUsZGFtYWdlOi41NCxwcm9qZWN0aWxlU3BlZWQ6NzgwLHByb2plY3RpbGVSYWRpdXM6Mi4xNSxzcHJlYWREZWdyZWVzOjIsdHJhaWxMZW5ndGg6MTIsdHJhY2VyRXZlcnlOdGhTaG90OjQsbXV6emxlRmxhc2hTY2FsZTouNDUsaGl0Rmxhc2hTY2FsZTouNTV9KSxcbiAgICAgICAgbGV2ZWwoNCx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTAuNzUsZGFtYWdlOi41OSxwcm9qZWN0aWxlU3BlZWQ6ODE1LHByb2plY3RpbGVSYWRpdXM6Mi4yLHNwcmVhZERlZ3JlZXM6Mi4yNSx0cmFpbExlbmd0aDoxMyx0cmFjZXJFdmVyeU50aFNob3Q6NCxtdXp6bGVGbGFzaFNjYWxlOi41LGhpdEZsYXNoU2NhbGU6LjZ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MTIuMjUsZGFtYWdlOi42NCxwcm9qZWN0aWxlU3BlZWQ6ODUwLHByb2plY3RpbGVSYWRpdXM6Mi4yNSxzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCx0cmFjZXJFdmVyeU50aFNob3Q6MyxtdXp6bGVGbGFzaFNjYWxlOi41NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJ1cnN0Q2FyYmluZToge1xuICAgICAgbGFiZWw6IFwiQnVyc3QgQ2FyYmluZVwiLCByYXJpdHk6IFwiY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcImZpcnN0QnVpbGRcIiwgc2hvdFBhdHRlcm46IFwiYnVyc3RcIiwgcHJvamVjdGlsZUJlaGF2aW9yOiBcInN0cmFpZ2h0XCIsXG4gICAgICB2aXN1YWxJZGVudGl0eTogeyBzaWxob3VldHRlOiBcInNob3J0VHJhY2VyQnVsbGV0XCIsIG1vdGlvbkxhbmd1YWdlOiBcImdyb3VwZWRWb2xsZXlcIiwgcHJvamVjdGlsZVNoYXBlOiBcImRhcnRcIiwgcHJvamVjdGlsZUNvbG9yOiBcImdvbGRcIiwgdHJhaWxDb2xvcjogXCJvcmFuZ2VcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMi4yLCB0cmFpbFdpZHRoU2NhbGU6IDAuOCwgdmlzdWFsSW50ZW5zaXR5OiAxLjA1LCBtdXp6bGVFZmZlY3Q6IFwiZ3JvdXBlZFB1bHNlXCIsIGltcGFjdEVmZmVjdDogXCJidXJzdENyb3NzXCIsIG11enpsZUR1cmF0aW9uTXM6IDg2LCBpbXBhY3REdXJhdGlvbk1zOiAxMjAsIGhvcml6b250YWxKaXR0ZXI6IDAgfSxcbiAgICAgIGxldmVsczogW1xuICAgICAgICBsZXZlbCgxLHtmaXJlUmF0ZVBlclNlY29uZDouOTUsZGFtYWdlOi43NSxwcm9qZWN0aWxlU3BlZWQ6NjUwLHByb2plY3RpbGVSYWRpdXM6Mi43NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjcyLHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE1LG11enpsZUZsYXNoU2NhbGU6LjU1LGhpdEZsYXNoU2NhbGU6LjY1fSksXG4gICAgICAgIGxldmVsKDIse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDgsZGFtYWdlOi44NSxwcm9qZWN0aWxlU3BlZWQ6NjkwLHByb2plY3RpbGVSYWRpdXM6Mi44NSxidXJzdENvdW50OjMsYnVyc3RJbnRlcnZhbE1zOjY0LHNwcmVhZERlZ3JlZXM6Ljc1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6LjYsaGl0Rmxhc2hTY2FsZTouN30pLFxuICAgICAgICBsZXZlbCgzLHtmaXJlUmF0ZVBlclNlY29uZDoxLjE1LGRhbWFnZTouOSxwcm9qZWN0aWxlU3BlZWQ6NzI1LHByb2plY3RpbGVSYWRpdXM6MyxidXJzdENvdW50OjQsYnVyc3RJbnRlcnZhbE1zOjU4LHNwcmVhZERlZ3JlZXM6MSx0cmFpbExlbmd0aDoxNyxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi43NX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDoxLjI4LGRhbWFnZToxLHByb2plY3RpbGVTcGVlZDo3NjAscHJvamVjdGlsZVJhZGl1czozLjA1LGJ1cnN0Q291bnQ6NCxidXJzdEludGVydmFsTXM6NTQsc3ByZWFkRGVncmVlczoxLHRyYWlsTGVuZ3RoOjE4LG11enpsZUZsYXNoU2NhbGU6LjcsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4zOCxkYW1hZ2U6MS4wOCxwcm9qZWN0aWxlU3BlZWQ6Nzk1LHByb2plY3RpbGVSYWRpdXM6My4xLGJ1cnN0Q291bnQ6NSxidXJzdEludGVydmFsTXM6NTAsc3ByZWFkRGVncmVlczoxLjE1LHRyYWlsTGVuZ3RoOjE5LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljl9KSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBoZWF2eUNhbm5vbjoge1xuICAgICAgbGFiZWw6IFwiSGVhdnkgQ2Fubm9uXCIsIHJhcml0eTogXCJ1bmNvbW1vblwiLCB1bmxvY2tQaGFzZTogXCJwcmVzc3VyZVwiLCBzaG90UGF0dGVybjogXCJoZWF2eVNpbmdsZVwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwicGllcmNpbmdTdHJhaWdodFwiLFxuICAgICAgdmlzdWFsSWRlbnRpdHk6IHsgc2lsaG91ZXR0ZTogXCJjaHVua3lCb2x0XCIsIG1vdGlvbkxhbmd1YWdlOiBcInNsb3dIZWF2eVB1bmNoXCIsIHByb2plY3RpbGVTaGFwZTogXCJzbHVnXCIsIHByb2plY3RpbGVDb2xvcjogXCJvcmFuZ2VcIiwgdHJhaWxDb2xvcjogXCJyZWRcIiwgY29yZUNvbG9yOiBcImdvbGRcIiwgcHJvamVjdGlsZUFzcGVjdDogMS4zNSwgdHJhaWxXaWR0aFNjYWxlOiAxLjM1LCB2aXN1YWxJbnRlbnNpdHk6IDEuMiwgbXV6emxlRWZmZWN0OiBcInNob2NrRGlhbW9uZFwiLCBpbXBhY3RFZmZlY3Q6IFwiaW1wYWN0UmluZ1wiLCBtdXp6bGVEdXJhdGlvbk1zOiAxMzUsIGltcGFjdER1cmF0aW9uTXM6IDE5MCwgaG9yaXpvbnRhbEppdHRlcjogMCB9LFxuICAgICAgbGV2ZWxzOiBbXG4gICAgICAgIGxldmVsKDEse2ZpcmVSYXRlUGVyU2Vjb25kOi43MixkYW1hZ2U6Mi40LHByb2plY3RpbGVTcGVlZDo1MDAscHJvamVjdGlsZVJhZGl1czo0LjUscGllcmNlOjEsdHJhaWxMZW5ndGg6MjIsaW1wYWN0UmFkaXVzOjE0LGtub2NrYmFjazoxNCxtdXp6bGVGbGFzaFNjYWxlOjEuMSxoaXRGbGFzaFNjYWxlOjEuMjV9KSxcbiAgICAgICAgbGV2ZWwoMix7ZmlyZVJhdGVQZXJTZWNvbmQ6LjgyLGRhbWFnZTozLHByb2plY3RpbGVTcGVlZDo1MzUscHJvamVjdGlsZVJhZGl1czo0Ljc1LHBpZXJjZToxLHRyYWlsTGVuZ3RoOjI0LGltcGFjdFJhZGl1czoxNixrbm9ja2JhY2s6MTgsbXV6emxlRmxhc2hTY2FsZToxLjIsaGl0Rmxhc2hTY2FsZToxLjM1fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOi45LGRhbWFnZTozLjYscHJvamVjdGlsZVNwZWVkOjU3MCxwcm9qZWN0aWxlUmFkaXVzOjUscGllcmNlOjIsdHJhaWxMZW5ndGg6MjYsaW1wYWN0UmFkaXVzOjE4LGtub2NrYmFjazoyMixtdXp6bGVGbGFzaFNjYWxlOjEuMyxoaXRGbGFzaFNjYWxlOjEuNX0pLFxuICAgICAgICBsZXZlbCg0LHtmaXJlUmF0ZVBlclNlY29uZDouOTgsZGFtYWdlOjQuMSxwcm9qZWN0aWxlU3BlZWQ6NjAwLHByb2plY3RpbGVSYWRpdXM6NS4yLHBpZXJjZToyLHRyYWlsTGVuZ3RoOjI4LGltcGFjdFJhZGl1czoyMCxrbm9ja2JhY2s6MjYsbXV6emxlRmxhc2hTY2FsZToxLjQsaGl0Rmxhc2hTY2FsZToxLjYyfSksXG4gICAgICAgIGxldmVsKDUse2ZpcmVSYXRlUGVyU2Vjb25kOjEuMDUsZGFtYWdlOjQuNixwcm9qZWN0aWxlU3BlZWQ6NjMwLHByb2plY3RpbGVSYWRpdXM6NS40LHBpZXJjZTozLHRyYWlsTGVuZ3RoOjMwLGltcGFjdFJhZGl1czoyMixrbm9ja2JhY2s6MzAsbXV6emxlRmxhc2hTY2FsZToxLjUsaGl0Rmxhc2hTY2FsZToxLjc1fSksXG4gICAgICBdLFxuICAgIH0sXG4gICAgc3BsaXR0ZXJSaWZsZToge1xuICAgICAgbGFiZWw6IFwiU3BsaXR0ZXIgUmlmbGVcIiwgcmFyaXR5OiBcInVuY29tbW9uXCIsIHVubG9ja1BoYXNlOiBcInByZXNzdXJlXCIsIHNob3RQYXR0ZXJuOiBcInBhaXJlZFNwcmVhZFwiLCBwcm9qZWN0aWxlQmVoYXZpb3I6IFwic3RyYWlnaHRcIixcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7IHNpbGhvdWV0dGU6IFwicGFpcmVkQm9sdFwiLCBtb3Rpb25MYW5ndWFnZTogXCJjdXJyZW50TGFuZUZvcmtcIiwgcHJvamVjdGlsZVNoYXBlOiBcInNwbGl0Qm9sdFwiLCBwcm9qZWN0aWxlQ29sb3I6IFwidmlvbGV0XCIsIHRyYWlsQ29sb3I6IFwicGlua1wiLCBjb3JlQ29sb3I6IFwidmlvbGV0XCIsIHByb2plY3RpbGVBc3BlY3Q6IDMuNCwgdHJhaWxXaWR0aFNjYWxlOiAwLjU1LCB2aXN1YWxJbnRlbnNpdHk6IDEsIG11enpsZUVmZmVjdDogXCJ0d2luUHJvbmdzXCIsIGltcGFjdEVmZmVjdDogXCJzcGxpdFJpcHBsZVwiLCBtdXp6bGVEdXJhdGlvbk1zOiA5NSwgaW1wYWN0RHVyYXRpb25NczogMTQ1LCBob3Jpem9udGFsSml0dGVyOiAwIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS4xNSxkYW1hZ2U6LjgscHJvamVjdGlsZVNwZWVkOjU4NSxwcm9qZWN0aWxlUmFkaXVzOjIuNzUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjIuNSx0cmFpbExlbmd0aDoxNCxtdXp6bGVGbGFzaFNjYWxlOi42NSxoaXRGbGFzaFNjYWxlOi42NX0pLFxuICAgICAgICBsZXZlbCgyLHtmaXJlUmF0ZVBlclNlY29uZDoxLjM1LGRhbWFnZTouOTUscHJvamVjdGlsZVNwZWVkOjYyNSxwcm9qZWN0aWxlUmFkaXVzOjIuODUsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS44NSxwcm9qZWN0aWxlQ291bnQ6MixzcHJlYWREZWdyZWVzOjMsdHJhaWxMZW5ndGg6MTUsbXV6emxlRmxhc2hTY2FsZTouNyxoaXRGbGFzaFNjYWxlOi43fSksXG4gICAgICAgIGxldmVsKDMse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNSxkYW1hZ2U6MSxwcm9qZWN0aWxlU3BlZWQ6NjYwLHByb2plY3RpbGVSYWRpdXM6Mi45NSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LHRyYWlsTGVuZ3RoOjE2LG11enpsZUZsYXNoU2NhbGU6Ljc4LGhpdEZsYXNoU2NhbGU6Ljc1fSksXG4gICAgICAgIGxldmVsKDQse2ZpcmVSYXRlUGVyU2Vjb25kOjEuNyxkYW1hZ2U6MS4xMixwcm9qZWN0aWxlU3BlZWQ6NzAwLHByb2plY3RpbGVSYWRpdXM6My4wNSxjb2xsaXNpb25SYWRpdXNTY2FsZToxLjkscHJvamVjdGlsZUNvdW50OjMsc3ByZWFkRGVncmVlczo1LjUsdHJhaWxMZW5ndGg6MTcsbXV6emxlRmxhc2hTY2FsZTouODQsaGl0Rmxhc2hTY2FsZTouODJ9KSxcbiAgICAgICAgbGV2ZWwoNSx7ZmlyZVJhdGVQZXJTZWNvbmQ6MS44NSxkYW1hZ2U6MS4yLHByb2plY3RpbGVTcGVlZDo3MzUscHJvamVjdGlsZVJhZGl1czozLjEsY29sbGlzaW9uUmFkaXVzU2NhbGU6MS45NSxwcm9qZWN0aWxlQ291bnQ6NCxzcHJlYWREZWdyZWVzOjYuMjUsdHJhaWxMZW5ndGg6MTgsbXV6emxlRmxhc2hTY2FsZTouOTIsaGl0Rmxhc2hTY2FsZTouOX0pLFxuICAgICAgXSxcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBHdW5NZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIGd1bl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKHRoaXMuaW1wbGVtZW50YXRpb24uYWxsb3dlZFNob3RQYXR0ZXJucy5pbmNsdWRlcyhndW4uc2hvdFBhdHRlcm4pLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHNob3QgcGF0dGVybi5gKTtcbiAgICAgIHRoaXMucmVxdWlyZSh0aGlzLmltcGxlbWVudGF0aW9uLmFsbG93ZWRQcm9qZWN0aWxlQmVoYXZpb3JzLmluY2x1ZGVzKGd1bi5wcm9qZWN0aWxlQmVoYXZpb3IpLCBgJHtpZH0gaGFzIGFuIHVuc3VwcG9ydGVkIHByb2plY3RpbGUgYmVoYXZpb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnByb2plY3RpbGVDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHByb2plY3RpbGUgY29sb3IuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbZ3VuLnZpc3VhbElkZW50aXR5LnRyYWlsQ29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biB0cmFpbCBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4udmlzdWFsSWRlbnRpdHkubXV6emxlRHVyYXRpb25NcyA+IDAgJiYgZ3VuLnZpc3VhbElkZW50aXR5LmltcGFjdER1cmF0aW9uTXMgPiAwLCBgJHtpZH0gZWZmZWN0IGR1cmF0aW9ucyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGd1bi5sZXZlbHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgZGVmaW5lIGxldmVscy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShndW4ubGV2ZWxzLmxlbmd0aCA9PT0gNSwgYCR7aWR9IG11c3QgZGVmaW5lIGV4YWN0bHkgZml2ZSBsZXZlbHMuYCk7XG4gICAgICBmb3IgKGNvbnN0IHR1bmluZyBvZiBndW4ubGV2ZWxzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZmlyZVJhdGVQZXJTZWNvbmQgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGZpcmUgcmF0ZSBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmRhbWFnZSA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVTcGVlZCA+IDAgJiYgdHVuaW5nLnByb2plY3RpbGVSYWRpdXMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGhhcyBpbnZhbGlkIHByb2plY3RpbGUgcG93ZXIuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPT09IHVuZGVmaW5lZCB8fCB0dW5pbmcuY29sbGlzaW9uUmFkaXVzU2NhbGUgPj0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjb2xsaXNpb24gcmFkaXVzIHNjYWxlIGNhbm5vdCBzaHJpbmsgY29sbGlzaW9uLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJ1cnN0Q291bnQgPj0gMSAmJiB0dW5pbmcucHJvamVjdGlsZUNvdW50ID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gaGFzIGludmFsaWQgY291bnRzLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ3VuRmFtaWx5ID0gbmV3IEd1bkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIEd1bklkID0ga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgRW5lbXlTcGF3bkVudHJhbmNlID0gXCJzY2F0dGVyXCIgfCBcImZhZGVcIjtcbmV4cG9ydCB0eXBlIEVuZW15RGVhdGhWaXN1YWwgPSBcImNsb3VkXCIgfCBcIm5vbmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcmJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbHVtblNwYW46IG51bWJlcjtcbiAgY29udGFjdERhbWFnZTogbnVtYmVyO1xuICBzY29yZTogbnVtYmVyO1xuICBiYXNlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHJpbUNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBzaGFkb3dDb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2hhcGVJZDogc3RyaW5nO1xuICBnbG93OiBudW1iZXI7XG4gIHN1cmZhY2VUZXh0dXJlOiBudW1iZXI7XG4gIHJpbUludGVuc2l0eTogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBoaXRGbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgZGVhdGhGbGFzaFNjYWxlOiBudW1iZXI7XG4gIHNoYXBlWm9vbTogbnVtYmVyO1xuICBpbXBhY3RSZXNpc3RhbmNlOiBudW1iZXI7XG4gIGV4cGxvc2lvbk1hZ25pdHVkZTogbnVtYmVyO1xuICBzcGF3bkVudHJhbmNlOiBFbmVteVNwYXduRW50cmFuY2U7XG4gIHNwYXduU291bmQ6IHN0cmluZyB8IG51bGw7XG4gIGRlYXRoU291bmQ6IHN0cmluZztcbiAgZGVhdGhWaXN1YWw6IEVuZW15RGVhdGhWaXN1YWw7XG59XG5cbmV4cG9ydCBjbGFzcyBPcmJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+PiB7XG4gIHJlYWRvbmx5IGZhbWlseUlkID0gXCJvcmJcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIk9yYiBFbmVteVwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGJhc2ljT3JiOiB7XG4gICAgICBsYWJlbDogXCJCYXNpYyBPcmJcIixcbiAgICAgIGhlYWx0aDogMSxcbiAgICAgIHNwZWVkOiA1OCxcbiAgICAgIHJhZGl1czogNi4yNSxcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAxLFxuICAgICAgc2NvcmU6IDEwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcImh1bnRlci1leWVcIixcbiAgICAgIGdsb3c6IDAuODIsXG4gICAgICBzdXJmYWNlVGV4dHVyZTogMC4yOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS4yNSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAwLjcyLFxuICAgICAgaGl0Rmxhc2hEdXJhdGlvbk1zOiA5MCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMS44LFxuICAgICAgc2hhcGVab29tOiAzLjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAxLFxuICAgICAgZXhwbG9zaW9uTWFnbml0dWRlOiAuNDgsXG4gICAgICBzcGF3bkVudHJhbmNlOiBcInNjYXR0ZXJcIixcbiAgICAgIHNwYXduU291bmQ6IFwiRW5lbXlTcGF3blwiLFxuICAgICAgZGVhdGhTb3VuZDogXCJFbmVteURlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICAgIGdsYXNzU2hpZWxkOiB7XG4gICAgICBsYWJlbDogXCJHbGFzcyBTaGllbGRcIixcbiAgICAgIGhlYWx0aDogLjEsXG4gICAgICBzcGVlZDogNTgsXG4gICAgICByYWRpdXM6IDUuNixcbiAgICAgIGNvbHVtblNwYW46IDEsXG4gICAgICBjb250YWN0RGFtYWdlOiAuMSxcbiAgICAgIHNjb3JlOiAzLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRyaWNrLWdhdGVcIixcbiAgICAgIGdsb3c6IC42MixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMTIsXG4gICAgICByaW1JbnRlbnNpdHk6IDAuOSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNDUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDcwLFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjEsXG4gICAgICBzaGFwZVpvb206IDMuMDUsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAuNjUsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC4yNSxcbiAgICAgIHNwYXduRW50cmFuY2U6IFwiZmFkZVwiLFxuICAgICAgc3Bhd25Tb3VuZDogbnVsbCxcbiAgICAgIGRlYXRoU291bmQ6IFwiR2xhc3NTaGllbGRTaGF0dGVyXCIsXG4gICAgICBkZWF0aFZpc3VhbDogXCJub25lXCIsXG4gICAgfSxcbiAgICB3aW5nZXI6IHtcbiAgICAgIGxhYmVsOiBcIldpbmdlclwiLFxuICAgICAgaGVhbHRoOiAxLFxuICAgICAgc3BlZWQ6IDc2LFxuICAgICAgcmFkaXVzOiA2LjI1LFxuICAgICAgY29sdW1uU3BhbjogMSxcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDEsXG4gICAgICBzY29yZTogMTQsXG4gICAgICBiYXNlQ29sb3I6IFwicGlua1wiLFxuICAgICAgcmltQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzaGFkb3dDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIHNoYXBlSWQ6IFwiZWxpdGUtd2luZ3NcIixcbiAgICAgIGdsb3c6IC44NixcbiAgICAgIHN1cmZhY2VUZXh0dXJlOiAuMjIsXG4gICAgICByaW1JbnRlbnNpdHk6IDEuMixcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuNjYsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDg1LFxuICAgICAgZGVhdGhGbGFzaFNjYWxlOiAxLjc1LFxuICAgICAgc2hhcGVab29tOiAzLjI1LFxuICAgICAgaW1wYWN0UmVzaXN0YW5jZTogMSxcbiAgICAgIGV4cGxvc2lvbk1hZ25pdHVkZTogLjQ4LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkVuZW15U3Bhd25cIixcbiAgICAgIGRlYXRoU291bmQ6IFwiRW5lbXlEZXN0cm95ZWRcIixcbiAgICAgIGRlYXRoVmlzdWFsOiBcImNsb3VkXCIsXG4gICAgfSxcbiAgICB0YW5rOiB7XG4gICAgICBsYWJlbDogXCJUYW5rXCIsXG4gICAgICBoZWFsdGg6IDI0LFxuICAgICAgc3BlZWQ6IDQ0LFxuICAgICAgcmFkaXVzOiAxNixcbiAgICAgIGNvbHVtblNwYW46IDMsXG4gICAgICBjb250YWN0RGFtYWdlOiAyLFxuICAgICAgc2NvcmU6IDgwLFxuICAgICAgYmFzZUNvbG9yOiBcInBpbmtcIixcbiAgICAgIHJpbUNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgc2hhZG93Q29sb3I6IFwidmlvbGV0XCIsXG4gICAgICBzaGFwZUlkOiBcInRhbmstYnVua2VyXCIsXG4gICAgICBnbG93OiAxLjA1LFxuICAgICAgc3VyZmFjZVRleHR1cmU6IC4xOCxcbiAgICAgIHJpbUludGVuc2l0eTogMS40NSxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiAuODUsXG4gICAgICBoaXRGbGFzaER1cmF0aW9uTXM6IDEzMCxcbiAgICAgIGRlYXRoRmxhc2hTY2FsZTogMi43LFxuICAgICAgc2hhcGVab29tOiA0LjQsXG4gICAgICBpbXBhY3RSZXNpc3RhbmNlOiAyLjEsXG4gICAgICBleHBsb3Npb25NYWduaXR1ZGU6IC45LFxuICAgICAgc3Bhd25FbnRyYW5jZTogXCJzY2F0dGVyXCIsXG4gICAgICBzcGF3blNvdW5kOiBcIkJvc3NcIixcbiAgICAgIGRlYXRoU291bmQ6IFwiQm9zc0Rlc3Ryb3llZFwiLFxuICAgICAgZGVhdGhWaXN1YWw6IFwiY2xvdWRcIixcbiAgICB9LFxuICB9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBPcmJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG9yYl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG9yYi5oZWFsdGggPiAwLCBgJHtpZH0gaGVhbHRoIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnNwZWVkID4gMCwgYCR7aWR9IHNwZWVkIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnJhZGl1cyA+IDAsIGAke2lkfSByYWRpdXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShOdW1iZXIuaXNJbnRlZ2VyKG9yYi5jb2x1bW5TcGFuKSAmJiBvcmIuY29sdW1uU3BhbiA+PSAxLCBgJHtpZH0gY29sdW1uU3BhbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShvcmIuZ2xvdyA+PSAwICYmIG9yYi5yaW1JbnRlbnNpdHkgPj0gMCwgYCR7aWR9IHZpc3VhbCBpbnRlbnNpdGllcyBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUob3JiLnN1cmZhY2VUZXh0dXJlID49IDAgJiYgb3JiLnN1cmZhY2VUZXh0dXJlIDw9IDEsIGAke2lkfSBzdXJmYWNlVGV4dHVyZSBtdXN0IGJlIGZyb20gMCB0byAxLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb3JiRmFtaWx5ID0gbmV3IE9yYkZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE9yYklkID0ga2V5b2YgdHlwZW9mIG9yYkZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIExpZ2h0bmluZ1RhcmdldGluZ01vZGUgPSBcIm5lYXJlc3RGb3J3YXJkXCIgfCBcImRlbnNlc3RDbHVzdGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nTGV2ZWwge1xuICBsZXZlbDogbnVtYmVyO1xuICBjb29sZG93blNlY29uZHM6IG51bWJlcjtcbiAgZGFtYWdlOiBudW1iZXI7XG4gIGNoYWluUmFuZ2U6IG51bWJlcjtcbiAgbWF4SnVtcHM6IG51bWJlcjtcbiAgYnJhbmNoRmFub3V0OiBudW1iZXI7XG4gIG1heERlcHRoOiBudW1iZXI7XG4gIGJyYW5jaERlY2F5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHkge1xuICBjb2xvcjogTmVvbkNvbG9yTmFtZTtcbiAgc2Vjb25kYXJ5Q29sb3I6IHN0cmluZztcbiAgamFnZ2VkbmVzczogbnVtYmVyO1xuICBzZWdtZW50czogbnVtYmVyO1xuICBtb3ZlbWVudDogbnVtYmVyO1xuICBib2x0V2lkdGg6IG51bWJlcjtcbiAgaGFsb1dpZHRoOiBudW1iZXI7XG4gIGludGVuc2l0eTogbnVtYmVyO1xuICBnbG93OiBudW1iZXI7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgYnJhbmNoU3BhcmtzOiBudW1iZXI7XG4gIHNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgc3BhcmtWZWxvY2l0eVNwcmVhZDogbnVtYmVyO1xuICBzcGFya0Vhc2VQb3dlcjogbnVtYmVyO1xuICBzcGFya0RpbVBvd2VyOiBudW1iZXI7XG4gIHNwYXJrTGVuZ3RoOiBudW1iZXI7XG4gIHNwYXJrV2lkdGg6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtzOiBudW1iZXI7XG4gIGltcGFjdFNwYXJrVmVsb2NpdHk6IG51bWJlcjtcbiAgaW1wYWN0U3BhcmtSYWRpdXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWdodG5pbmdNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwibGlnaHRuaW5nXCI7XG4gIHJhcml0eTogXCJ1bmNvbW1vblwiIHwgXCJyYXJlXCI7XG4gIHRhcmdldGluZ01vZGU6IExpZ2h0bmluZ1RhcmdldGluZ01vZGU7XG4gIGluY2x1ZGVBZGphY2VudExhbmVzOiBib29sZWFuO1xuICB2aXN1YWxJZGVudGl0eTogTGlnaHRuaW5nVmlzdWFsSWRlbnRpdHk7XG4gIGxldmVsczogcmVhZG9ubHkgTGlnaHRuaW5nTGV2ZWxbXTtcbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuY29uc3QgbGV2ZWwgPSAobGV2ZWxOdW1iZXI6IG51bWJlciwgdmFsdWVzOiBPbWl0PExpZ2h0bmluZ0xldmVsLCBcImxldmVsXCI+KTogTGlnaHRuaW5nTGV2ZWwgPT4gKHtcbiAgbGV2ZWw6IGxldmVsTnVtYmVyLFxuICAuLi52YWx1ZXMsXG59KTtcblxuY29uc3Qgc2hhcmVkVmlzdWFsID0ge1xuICBjb2xvcjogXCJjeWFuXCIsXG4gIHNlY29uZGFyeUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgamFnZ2VkbmVzczogOTYsXG4gIHNlZ21lbnRzOiA4LFxuICBtb3ZlbWVudDogLjU1LFxuICBib2x0V2lkdGg6IC4xLFxuICBoYWxvV2lkdGg6IDgsXG4gIGludGVuc2l0eTogMy4wNyxcbiAgZ2xvdzogNi4yLFxuICBkdXJhdGlvbk1zOiA1MjksXG4gIGJyYW5jaFNwYXJrczogLjExLFxuICBzcGFya1ZlbG9jaXR5OiAxNTAsXG4gIHNwYXJrVmVsb2NpdHlTcHJlYWQ6IC41NSxcbiAgc3BhcmtFYXNlUG93ZXI6IC40NCxcbiAgc3BhcmtEaW1Qb3dlcjogLjYsXG4gIHNwYXJrTGVuZ3RoOiA2LFxuICBzcGFya1dpZHRoOiAuNyxcbiAgaW1wYWN0U3BhcmtzOiAyNixcbiAgaW1wYWN0U3BhcmtWZWxvY2l0eTogMTU0LFxuICBpbXBhY3RTcGFya1JhZGl1czogMTAsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBMaWdodG5pbmdWaXN1YWxJZGVudGl0eTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0bmluZ0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcImxpZ2h0bmluZ1wiO1xuICByZWFkb25seSBsYWJlbCA9IFwiTGlnaHRuaW5nXCI7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBjaGFpblNwYXJrOiB7XG4gICAgICBsYWJlbDogXCJDaGFpbiBTcGFya1wiLFxuICAgICAgZmFtaWx5OiBcImxpZ2h0bmluZ1wiLFxuICAgICAgcmFyaXR5OiBcInVuY29tbW9uXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RGb3J3YXJkXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiBzaGFyZWRWaXN1YWwsXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDEuOTUsIGRhbWFnZTogMS4yNSwgY2hhaW5SYW5nZTogMTUwLCBtYXhKdW1wczogMiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMiwgYnJhbmNoRGVjYXk6IC43MiB9KSxcbiAgICAgICAgbGV2ZWwoMiwgeyBjb29sZG93blNlY29uZHM6IDEuNywgZGFtYWdlOiAxLjM4LCBjaGFpblJhbmdlOiAxNzAsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjcyIH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMS41LCBkYW1hZ2U6IDEuNSwgY2hhaW5SYW5nZTogMTkwLCBtYXhKdW1wczogNCwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogMywgYnJhbmNoRGVjYXk6IC43IH0pLFxuICAgICAgICBsZXZlbCg0LCB7IGNvb2xkb3duU2Vjb25kczogMS4zNCwgZGFtYWdlOiAxLjY0LCBjaGFpblJhbmdlOiAyMTIsIG1heEp1bXBzOiA1LCBicmFuY2hGYW5vdXQ6IDEsIG1heERlcHRoOiAzLCBicmFuY2hEZWNheTogLjcgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjE4LCBkYW1hZ2U6IDEuOCwgY2hhaW5SYW5nZTogMjM2LCBtYXhKdW1wczogNiwgYnJhbmNoRmFub3V0OiAxLCBtYXhEZXB0aDogNCwgYnJhbmNoRGVjYXk6IC42OCB9KSxcbiAgICAgIF0sXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3Qgc2luZ2xlLWNoYWluIGNsZWFudXAuIEJlc3QgYWdhaW5zdCBzdGFnZ2VyZWQgZW5lbWllczsgd2Vha2VyIGFnYWluc3QgaXNvbGF0ZWQgZHVyYWJsZSB0YXJnZXRzIHRoYW4gZm9jdXNlZCBndW5zLlwiLFxuICAgIH0sXG4gICAgZm9ya0NhcGFjaXRvcjoge1xuICAgICAgbGFiZWw6IFwiRm9yayBDYXBhY2l0b3JcIixcbiAgICAgIGZhbWlseTogXCJsaWdodG5pbmdcIixcbiAgICAgIHJhcml0eTogXCJyYXJlXCIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcImRlbnNlc3RDbHVzdGVyXCIsXG4gICAgICBpbmNsdWRlQWRqYWNlbnRMYW5lczogdHJ1ZSxcbiAgICAgIHZpc3VhbElkZW50aXR5OiB7XG4gICAgICAgIC4uLnNoYXJlZFZpc3VhbCxcbiAgICAgICAgY29sb3I6IFwidmlvbGV0XCIsXG4gICAgICAgIGJvbHRXaWR0aDogMi4xLFxuICAgICAgICBicmFuY2hTcGFya3M6IC4xOCxcbiAgICAgICAgaW1wYWN0U3BhcmtzOiAzNCxcbiAgICAgIH0sXG4gICAgICBsZXZlbHM6IFtcbiAgICAgICAgbGV2ZWwoMSwgeyBjb29sZG93blNlY29uZHM6IDIuNTUsIGRhbWFnZTogMS44LCBjaGFpblJhbmdlOiAxMzgsIG1heEp1bXBzOiAzLCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgyLCB7IGNvb2xkb3duU2Vjb25kczogMi4zNSwgZGFtYWdlOiAxLjk1LCBjaGFpblJhbmdlOiAxNTIsIG1heEp1bXBzOiA0LCBicmFuY2hGYW5vdXQ6IDIsIG1heERlcHRoOiAyLCBicmFuY2hEZWNheTogLjU4IH0pLFxuICAgICAgICBsZXZlbCgzLCB7IGNvb2xkb3duU2Vjb25kczogMi4xOCwgZGFtYWdlOiAyLjEsIGNoYWluUmFuZ2U6IDE2OCwgbWF4SnVtcHM6IDUsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDIsIGJyYW5jaERlY2F5OiAuNTYgfSksXG4gICAgICAgIGxldmVsKDQsIHsgY29vbGRvd25TZWNvbmRzOiAyLjAyLCBkYW1hZ2U6IDIuMjgsIGNoYWluUmFuZ2U6IDE4NCwgbWF4SnVtcHM6IDcsIGJyYW5jaEZhbm91dDogMywgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTQgfSksXG4gICAgICAgIGxldmVsKDUsIHsgY29vbGRvd25TZWNvbmRzOiAxLjg2LCBkYW1hZ2U6IDIuNDUsIGNoYWluUmFuZ2U6IDIwNCwgbWF4SnVtcHM6IDksIGJyYW5jaEZhbm91dDogNCwgbWF4RGVwdGg6IDMsIGJyYW5jaERlY2F5OiAuNTIgfSksXG4gICAgICBdLFxuICAgICAgYWdlbnROb3RlczogXCJDbHVzdGVyIGRpc2NoYXJnZS4gVGhlIGFuY2hvciBoaXRzIGhhcmQsIHRoZW4gc2hhbGxvdyBzaWJsaW5nIGJyYW5jaGVzIHNwcmVhZCB0aHJvdWdoIHBhY2tlZCBmb3JtYXRpb25zLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIExpZ2h0bmluZ01lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uZmFtaWx5ID09PSBcImxpZ2h0bmluZ1wiLCBgJHtpZH0gbXVzdCBiZSBpbiBsaWdodG5pbmcgZmFtaWx5LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW2l0ZW0udmlzdWFsSWRlbnRpdHkuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgdW5rbm93biBjb2xvci5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShpdGVtLmxldmVscy5sZW5ndGggPT09IDUsIGAke2lkfSBtdXN0IGRlZmluZSBleGFjdGx5IGZpdmUgbGV2ZWxzLmApO1xuICAgICAgZm9yIChjb25zdCB0dW5pbmcgb2YgaXRlbS5sZXZlbHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jb29sZG93blNlY29uZHMgPiAwLCBgJHtpZH0gbGV2ZWwgJHt0dW5pbmcubGV2ZWx9IGNvb2xkb3duIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcuZGFtYWdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBkYW1hZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHR1bmluZy5jaGFpblJhbmdlID4gMCwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBjaGFpblJhbmdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZSh0dW5pbmcubWF4SnVtcHMgPj0gMSAmJiB0dW5pbmcuYnJhbmNoRmFub3V0ID49IDEgJiYgdHVuaW5nLm1heERlcHRoID49IDEsIGAke2lkfSBsZXZlbCAke3R1bmluZy5sZXZlbH0gYnJhbmNoIGNvdW50cyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodHVuaW5nLmJyYW5jaERlY2F5ID4gMCAmJiB0dW5pbmcuYnJhbmNoRGVjYXkgPD0gMSwgYCR7aWR9IGxldmVsICR7dHVuaW5nLmxldmVsfSBicmFuY2hEZWNheSBtdXN0IGJlIGluICgwLCAxXS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpZ2h0bmluZ0ZhbWlseSA9IG5ldyBMaWdodG5pbmdGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBMaWdodG5pbmdJZCA9IGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVycztcbiIsICJpbXBvcnQgeyBuZW9uUGFsZXR0ZSwgdHlwZSBOZW9uQ29sb3JOYW1lIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgeyBGYW1pbHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vRmFtaWx5RGVmaW5pdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpcGxpZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBzcXVhZEFkZGVkOiBudW1iZXI7XG4gIG1heFNxdWFkU2l6ZTogbnVtYmVyO1xuICBtZW1iZXJzUGVyUm93OiBudW1iZXI7XG4gIG1lbWJlclJhZGl1czogbnVtYmVyO1xuICBzcGFjaW5nOiBudW1iZXI7XG4gIHBpY2t1cENvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBjb3JlQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHB1bHNlUmF0ZTogbnVtYmVyO1xuICBwaWNrdXBTaGFwZVpvb206IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxpZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBNdWx0aXBsaWVyTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwibXVsdGlwbGllclwiO1xuICByZWFkb25seSBsYWJlbCA9IFwiU3F1YWQgTXVsdGlwbGllclwiO1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIHNxdWFkUGx1c09uZToge1xuICAgICAgbGFiZWw6IFwiKzEgV2luZ21hdGVcIixcbiAgICAgIHNxdWFkQWRkZWQ6IDEsXG4gICAgICBtYXhTcXVhZFNpemU6IDEwLFxuICAgICAgbWVtYmVyc1BlclJvdzogNSxcbiAgICAgIG1lbWJlclJhZGl1czogNS4yNSxcbiAgICAgIHNwYWNpbmc6IDI5LFxuICAgICAgcGlja3VwQ29sb3I6IFwiZ29sZFwiLFxuICAgICAgY29yZUNvbG9yOiBcImN5YW5cIixcbiAgICAgIHB1bHNlUmF0ZTogMi4yLFxuICAgICAgcGlja3VwU2hhcGVab29tOiAzLjEsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgTXVsdGlwbGllck1lbWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0uc3F1YWRBZGRlZCA+IDAsIGAke2lkfSBtdXN0IGFkZCBzcXVhZCBtZW1iZXJzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWF4U3F1YWRTaXplID49IGl0ZW0ubWVtYmVyc1BlclJvdywgYCR7aWR9IG1heCBzcXVhZCBtdXN0IGZpdCBhdCBsZWFzdCBvbmUgcm93LmApO1xuICAgICAgdGhpcy5yZXF1aXJlKGl0ZW0ubWVtYmVyUmFkaXVzID4gMCAmJiBpdGVtLnNwYWNpbmcgPiBpdGVtLm1lbWJlclJhZGl1cyAqIDIsIGAke2lkfSBtZW1iZXIgZ2VvbWV0cnkgb3ZlcmxhcHMuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbaXRlbS5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpZXJGYW1pbHkgPSBuZXcgTXVsdGlwbGllckZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIE11bHRpcGxpZXJJZCA9IGtleW9mIHR5cGVvZiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnM7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgU2hpZWxkT3JiaXRlclNoYXBlID0gXCJkb3RcIiB8IFwiaGV4XCI7XG5leHBvcnQgdHlwZSBTaGllbGRNb2RlID0gXCJjaGFyZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaGllbGRNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBmYW1pbHk6IFwic2hpZWxkXCI7XG4gIHJhcml0eTogXCJzdGFydGVyXCIgfCBcImNvbW1vblwiIHwgXCJ1bmNvbW1vblwiO1xuICBtb2RlOiBTaGllbGRNb2RlO1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqIEJhc2ljIHNoaWVsZCBzdHJlbmd0aC4gRW5lbXkgSFAgaXMgc3VidHJhY3RlZCBmcm9tIHRoaXMgdmFsdWUuICovXG4gIG1heENoYXJnZXM6IG51bWJlcjtcbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIGNvbnRhY3REYW1hZ2U6IDA7XG4gIHB1c2hEaXN0YW5jZTogMDtcbiAgc2xvd011bHRpcGxpZXI6IDE7XG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICBvcmJpdGVyU2hhcGU6IFNoaWVsZE9yYml0ZXJTaGFwZTtcbiAgb3JiaXRlckNvdW50OiBudW1iZXI7XG4gIG9yYml0ZXJTcGVlZDogbnVtYmVyO1xuICBvcmJpdGVyU2l6ZTogbnVtYmVyO1xuICBhZ2VudE5vdGVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpZWxkRmFtaWx5RGVmaW5pdGlvbiBleHRlbmRzIEZhbWlseURlZmluaXRpb248UmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic2hpZWxkXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaGllbGRcIjtcblxuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIGxpZ2h0R3VhcmQ6IHtcbiAgICAgIGxhYmVsOiBcIkxpZ2h0IEd1YXJkXCIsXG4gICAgICBmYW1pbHk6IFwic2hpZWxkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMjgsXG4gICAgICBtYXhDaGFyZ2VzOiAyLFxuICAgICAgY29vbGRvd25TZWNvbmRzOiA4LFxuICAgICAgY29udGFjdERhbWFnZTogMCxcbiAgICAgIHB1c2hEaXN0YW5jZTogMCxcbiAgICAgIHNsb3dNdWx0aXBsaWVyOiAxLFxuICAgICAgY29sb3I6IFwiY3lhblwiLFxuICAgICAgb3JiaXRlclNoYXBlOiBcImRvdFwiLFxuICAgICAgb3JiaXRlckNvdW50OiA0LFxuICAgICAgb3JiaXRlclNwZWVkOiAxLFxuICAgICAgb3JiaXRlclNpemU6IDQuNSxcbiAgICAgIGFnZW50Tm90ZXM6IFwiTGlnaHR3ZWlnaHQgc2hpZWxkIHdpdGggdHdvIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIHNhdGVsbGl0ZUd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJTYXRlbGxpdGUgR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJjb21tb25cIixcbiAgICAgIG1vZGU6IFwiY2hhcmdlXCIsXG4gICAgICByYWRpdXM6IDI4LFxuICAgICAgbWF4Q2hhcmdlczogNCxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMTAsXG4gICAgICBjb250YWN0RGFtYWdlOiAwLFxuICAgICAgcHVzaERpc3RhbmNlOiAwLFxuICAgICAgc2xvd011bHRpcGxpZXI6IDEsXG4gICAgICBjb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJkb3RcIixcbiAgICAgIG9yYml0ZXJDb3VudDogNixcbiAgICAgIG9yYml0ZXJTcGVlZDogMC43NSxcbiAgICAgIG9yYml0ZXJTaXplOiA0Ljc1LFxuICAgICAgYWdlbnROb3RlczogXCJCYWxhbmNlZCBzaGllbGQgd2l0aCBmb3VyIHBvaW50cyBvZiBzdHJlbmd0aC5cIixcbiAgICB9LFxuICAgIGhleEd1YXJkOiB7XG4gICAgICBsYWJlbDogXCJIZXggR3VhcmRcIixcbiAgICAgIGZhbWlseTogXCJzaGllbGRcIixcbiAgICAgIHJhcml0eTogXCJ1bmNvbW1vblwiLFxuICAgICAgbW9kZTogXCJjaGFyZ2VcIixcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBtYXhDaGFyZ2VzOiA3LFxuICAgICAgY29vbGRvd25TZWNvbmRzOiAxMixcbiAgICAgIGNvbnRhY3REYW1hZ2U6IDAsXG4gICAgICBwdXNoRGlzdGFuY2U6IDAsXG4gICAgICBzbG93TXVsdGlwbGllcjogMSxcbiAgICAgIGNvbG9yOiBcImdvbGRcIixcbiAgICAgIG9yYml0ZXJTaGFwZTogXCJoZXhcIixcbiAgICAgIG9yYml0ZXJDb3VudDogOCxcbiAgICAgIG9yYml0ZXJTcGVlZDogMC40NSxcbiAgICAgIG9yYml0ZXJTaXplOiA1LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBzaGllbGQgd2l0aCBzZXZlbiBwb2ludHMgb2Ygc3RyZW5ndGguXCIsXG4gICAgfSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hpZWxkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzaGllbGRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQubW9kZSA9PT0gXCJjaGFyZ2VcIiwgYCR7aWR9IG11c3QgdXNlIHRoZSBzaGFyZWQgY2hhcmdlIGJlaGF2aW9yLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHNoaWVsZC5yYWRpdXMgPiAwLCBgJHtpZH0gcmFkaXVzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoc2hpZWxkLm1heENoYXJnZXMgPiAwLCBgJHtpZH0gc3RyZW5ndGggbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlckNvdW50ID4gMCwgYCR7aWR9IG11c3QgaGF2ZSBvcmJpdGVycy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzaGllbGQub3JiaXRlclNwZWVkID49IDAsIGAke2lkfSBvcmJpdGVyU3BlZWQgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW3NoaWVsZC5jb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIGNvbG9yLmApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hpZWxkRmFtaWx5ID0gbmV3IFNoaWVsZEZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFNoaWVsZElkID0ga2V5b2YgdHlwZW9mIHNoaWVsZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB7IG5lb25QYWxldHRlLCB0eXBlIE5lb25Db2xvck5hbWUgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IEZhbWlseURlZmluaXRpb24gfSBmcm9tIFwiLi9GYW1pbHlEZWZpbml0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFNob3dzdG9wcGVyQmFua0JlaGF2aW9yID0gXCJiYW5rZWRNYW51YWxUcmlnZ2VyXCI7XG5leHBvcnQgdHlwZSBTaG93c3RvcHBlclRhcmdldGluZ01vZGUgPSBcImFsbExhbmVzQWhlYWRcIiB8IFwiY3VycmVudExhbmVBaGVhZFwiO1xuZXhwb3J0IHR5cGUgU2hvd3N0b3BwZXJFYXNpbmcgPSBcImxpbmVhclwiIHwgXCJlYXNlSW5cIiB8IFwiZWFzZU91dFwiIHwgXCJlYXNlSW5PdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaG93c3RvcHBlclRpbWVXYXJwUG9pbnQge1xuICBhdE1zOiBudW1iZXI7XG4gIHByb2dyZXNzPzogbnVtYmVyO1xuICBnYW1lcGxheVNjYWxlOiBudW1iZXI7XG4gIGVhc2luZz86IFNob3dzdG9wcGVyRWFzaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dzdG9wcGVyQ2FtZXJhUG9zZSB7XG4gIGF0TXM6IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsb29rQW5nbGVEZWdyZWVzOiBudW1iZXI7XG4gIGZvbGxvd0Rpc3RhbmNlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAgaG9yaXpvbjogbnVtYmVyO1xuICBiYWNrZ3JvdW5kRm9yd2FyZE9mZnNldD86IG51bWJlcjtcbiAgYmFja2dyb3VuZFZlcnRpY2FsT2Zmc2V0PzogbnVtYmVyO1xuICBiYWNrZ3JvdW5kWm9vbU9mZnNldD86IG51bWJlcjtcbiAgZWFzaW5nPzogU2hvd3N0b3BwZXJFYXNpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJBdHRhY2tEZWZpbml0aW9uIHtcbiAgc3RhcnRNczogbnVtYmVyO1xuICBlbmRNczogbnVtYmVyO1xuICByb3dzQWhlYWQ6IG51bWJlcjtcbiAgdGFyZ2V0aW5nOiBTaG93c3RvcHBlclRhcmdldGluZ01vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJUaW1lbGluZUV2ZW50IHtcbiAgdHlwZTogXCJzdGFydEF0dGFja1wiIHwgXCJzdG9wQXR0YWNrXCI7XG4gIGF0TXM6IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd3N0b3BwZXJNZW1iZXIge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICByYXJpdHk6IFwicmFyZVwiIHwgXCJlcGljXCIgfCBcImxlZ2VuZGFyeVwiO1xuICBiYW5rQmVoYXZpb3I6IFNob3dzdG9wcGVyQmFua0JlaGF2aW9yO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gIGNlbnRlckNhbWVyYU1zOiBudW1iZXI7XG4gIHJldHVybkNhbWVyYU1zOiBudW1iZXI7XG4gIHRpbWVXYXJwOiByZWFkb25seSBTaG93c3RvcHBlclRpbWVXYXJwUG9pbnRbXTtcbiAgY2FtZXJhOiByZWFkb25seSBTaG93c3RvcHBlckNhbWVyYVBvc2VbXTtcbiAgdGltZWxpbmVFdmVudHM6IHJlYWRvbmx5IFNob3dzdG9wcGVyVGltZWxpbmVFdmVudFtdO1xuICBhdHRhY2s6IFNob3dzdG9wcGVyQXR0YWNrRGVmaW5pdGlvbjtcbiAgcGlja3VwQ29sb3I6IE5lb25Db2xvck5hbWU7XG4gIHNvdW5kQ3VlczogUmVhZG9ubHk8UmVjb3JkPFwiZGVwbG95XCIgfCBcImF0dGFja1N0YXJ0XCIgfCBcInJlc29sdmVcIiwgc3RyaW5nPj47XG59XG5cbnR5cGUgVGltZWRCeVByb2dyZXNzPFQ+ID0gT21pdDxULCBcImF0TXNcIj4gJiB7IHByb2dyZXNzOiBudW1iZXIgfTtcblxuaW50ZXJmYWNlIERyYWdvbkJyZWF0aEludGVudCB7XG4gIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgY2VudGVyQ2FtZXJhTXM6IG51bWJlcjtcbiAgcmV0dXJuQ2FtZXJhTXM6IG51bWJlcjtcbiAgYXR0YWNrU3RhcnRQcm9ncmVzczogbnVtYmVyO1xuICBhdHRhY2tFbmRQcm9ncmVzczogbnVtYmVyO1xuICByb3dzQWhlYWQ6IG51bWJlcjtcbiAgdGltZVdhcnA6IHJlYWRvbmx5IFRpbWVkQnlQcm9ncmVzczxTaG93c3RvcHBlclRpbWVXYXJwUG9pbnQ+W107XG4gIGNhbWVyYTogcmVhZG9ubHkgVGltZWRCeVByb2dyZXNzPFNob3dzdG9wcGVyQ2FtZXJhUG9zZT5bXTtcbiAgc291bmRDdWVzOiBTaG93c3RvcHBlck1lbWJlcltcInNvdW5kQ3Vlc1wiXTtcbn1cblxuY29uc3QgZHJhZ29uQnJlYXRoSW50ZW50ID0ge1xuICBkdXJhdGlvbk1zOiAxMDAwLFxuICBjZW50ZXJDYW1lcmFNczogNTAsXG4gIHJldHVybkNhbWVyYU1zOiAyNTAsXG4gIGF0dGFja1N0YXJ0UHJvZ3Jlc3M6IC4xLFxuICBhdHRhY2tFbmRQcm9ncmVzczogMSxcbiAgcm93c0FoZWFkOiAxNSxcbiAgdGltZVdhcnA6IFtcbiAgICB7IHByb2dyZXNzOiAwLCBnYW1lcGxheVNjYWxlOiAxLCBlYXNpbmc6IFwiZWFzZUluT3V0XCIgfSxcbiAgICB7IHByb2dyZXNzOiAuMDMzMywgZ2FtZXBsYXlTY2FsZTogLjEsIGVhc2luZzogXCJlYXNlSW5cIiB9LFxuICAgIHsgcHJvZ3Jlc3M6IC4yNjY3LCBnYW1lcGxheVNjYWxlOiAuNCwgZWFzaW5nOiBcImVhc2VJblwiIH0sXG4gICAgeyBwcm9ncmVzczogMSwgZ2FtZXBsYXlTY2FsZTogMSwgZWFzaW5nOiBcImVhc2VJblwiIH0sXG4gIF0sXG4gIGNhbWVyYTogW1xuICAgIHsgcHJvZ3Jlc3M6IDAsIGhlaWdodDogNjUsIGxvb2tBbmdsZURlZ3JlZXM6IDI3LCBmb2xsb3dEaXN0YW5jZTogMjAsIHpvb206IC4yLCBob3Jpem9uOiAuNTEgfSxcbiAgICB7IHByb2dyZXNzOiAuMTE2NywgaGVpZ2h0OiA0NSwgbG9va0FuZ2xlRGVncmVlczogMjcsIGZvbGxvd0Rpc3RhbmNlOiAtNSwgem9vbTogLjI4LCBob3Jpem9uOiAuNDcsIGJhY2tncm91bmRGb3J3YXJkT2Zmc2V0OiAuMTIsIGJhY2tncm91bmRWZXJ0aWNhbE9mZnNldDogLS4yNSwgYmFja2dyb3VuZFpvb21PZmZzZXQ6IC4yNCwgZWFzaW5nOiBcImVhc2VJblwiIH0sXG4gICAgeyBwcm9ncmVzczogLjI1ODMsIGhlaWdodDogMzUsIGxvb2tBbmdsZURlZ3JlZXM6IDI3LCBmb2xsb3dEaXN0YW5jZTogLTI1LCB6b29tOiAuMzIsIGhvcml6b246IC40NSwgYmFja2dyb3VuZEZvcndhcmRPZmZzZXQ6IC4yMiwgYmFja2dyb3VuZFZlcnRpY2FsT2Zmc2V0OiAtLjM4LCBiYWNrZ3JvdW5kWm9vbU9mZnNldDogLjMyLCBlYXNpbmc6IFwiZWFzZUluT3V0XCIgfSxcbiAgXSxcbiAgc291bmRDdWVzOiB7XG4gICAgZGVwbG95OiBcIldhdmVQcmVzc3VyZVwiLFxuICAgIGF0dGFja1N0YXJ0OiBcIkRyYWdvbkJyZWF0aFwiLFxuICAgIHJlc29sdmU6IFwiUHJvamVjdGlsZUhpdFwiLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgRHJhZ29uQnJlYXRoSW50ZW50O1xuXG5mdW5jdGlvbiBkcmFnb25CcmVhdGhNZW1iZXIoaW50ZW50OiBEcmFnb25CcmVhdGhJbnRlbnQpOiBTaG93c3RvcHBlck1lbWJlciB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IFwiRHJhZ29uJ3MgQnJlYXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBiYW5rZWQgY2luZW1hdGljIGNsZWFyIHdoZXJlIGEgZnJpZW5kbHkgbmVvbiBzaGFwZSBkaXZlcyBhaGVhZCBhbmQgbGF5cyBhIHRoaWNrIHdhdmUgb2YgZmlyZS5cIixcbiAgICByYXJpdHk6IFwicmFyZVwiLFxuICAgIGJhbmtCZWhhdmlvcjogXCJiYW5rZWRNYW51YWxUcmlnZ2VyXCIsXG4gICAgZHVyYXRpb25NczogaW50ZW50LmR1cmF0aW9uTXMsXG4gICAgY2VudGVyQ2FtZXJhTXM6IGludGVudC5jZW50ZXJDYW1lcmFNcyxcbiAgICByZXR1cm5DYW1lcmFNczogaW50ZW50LnJldHVybkNhbWVyYU1zLFxuICAgIHRpbWVXYXJwOiBwb2ludHNBdE1zKGludGVudC50aW1lV2FycCwgaW50ZW50LmR1cmF0aW9uTXMpLFxuICAgIGNhbWVyYTogcG9pbnRzQXRNcyhpbnRlbnQuY2FtZXJhLCBpbnRlbnQuZHVyYXRpb25NcyksXG4gICAgdGltZWxpbmVFdmVudHM6IFtcbiAgICAgIHsgdHlwZTogXCJzdGFydEF0dGFja1wiLCBwcm9ncmVzczogaW50ZW50LmF0dGFja1N0YXJ0UHJvZ3Jlc3MsIGF0TXM6IG1zQXRQcm9ncmVzcyhpbnRlbnQuYXR0YWNrU3RhcnRQcm9ncmVzcywgaW50ZW50LmR1cmF0aW9uTXMpIH0sXG4gICAgICB7IHR5cGU6IFwic3RvcEF0dGFja1wiLCBwcm9ncmVzczogaW50ZW50LmF0dGFja0VuZFByb2dyZXNzLCBhdE1zOiBtc0F0UHJvZ3Jlc3MoaW50ZW50LmF0dGFja0VuZFByb2dyZXNzLCBpbnRlbnQuZHVyYXRpb25NcykgfSxcbiAgICBdLFxuICAgIGF0dGFjazoge1xuICAgICAgc3RhcnRNczogbXNBdFByb2dyZXNzKGludGVudC5hdHRhY2tTdGFydFByb2dyZXNzLCBpbnRlbnQuZHVyYXRpb25NcyksXG4gICAgICBlbmRNczogaW50ZW50LmR1cmF0aW9uTXMsXG4gICAgICByb3dzQWhlYWQ6IGludGVudC5yb3dzQWhlYWQsXG4gICAgICB0YXJnZXRpbmc6IFwiYWxsTGFuZXNBaGVhZFwiLFxuICAgIH0sXG4gICAgcGlja3VwQ29sb3I6IFwib3JhbmdlXCIsXG4gICAgc291bmRDdWVzOiBpbnRlbnQuc291bmRDdWVzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwb2ludHNBdE1zPFQgZXh0ZW5kcyB7IHByb2dyZXNzOiBudW1iZXIgfT4ocG9pbnRzOiByZWFkb25seSBUW10sIGR1cmF0aW9uTXM6IG51bWJlcik6IEFycmF5PFQgJiB7IGF0TXM6IG51bWJlciB9PiB7XG4gIHJldHVybiBwb2ludHMubWFwKHBvaW50ID0+ICh7XG4gICAgLi4ucG9pbnQsXG4gICAgYXRNczogbXNBdFByb2dyZXNzKHBvaW50LnByb2dyZXNzLCBkdXJhdGlvbk1zKSxcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBtc0F0UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlciwgZHVyYXRpb25NczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcHJvZ3Jlc3MpKSAqIGR1cmF0aW9uTXMpO1xufVxuXG5leHBvcnQgY2xhc3MgU2hvd3N0b3BwZXJGYW1pbHlEZWZpbml0aW9uIGV4dGVuZHMgRmFtaWx5RGVmaW5pdGlvbjxSZWNvcmQ8c3RyaW5nLCBTaG93c3RvcHBlck1lbWJlcj4+IHtcbiAgcmVhZG9ubHkgZmFtaWx5SWQgPSBcInNob3dzdG9wcGVyXCI7XG4gIHJlYWRvbmx5IGxhYmVsID0gXCJTaG93c3RvcHBlclwiO1xuICByZWFkb25seSBpbXBsZW1lbnRhdGlvbiA9IHtcbiAgICBiYW5rZWQ6IHRydWUsXG4gICAgbWFudWFsVHJpZ2dlcjogdHJ1ZSxcbiAgICBjaW5lbWF0aWNEaXJlY3RvcjogdHJ1ZSxcbiAgICBkZXRlcm1pbmlzdGljQ2xlYXI6IHRydWUsXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmVhZG9ubHkgbWVtYmVycyA9IHtcbiAgICBkcmFnb25zQnJlYXRoOiBkcmFnb25CcmVhdGhNZW1iZXIoZHJhZ29uQnJlYXRoSW50ZW50KSxcbiAgfSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgU2hvd3N0b3BwZXJNZW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1lbWJlcl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5kdXJhdGlvbk1zID4gMCwgYCR7aWR9IGR1cmF0aW9uTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIuY2VudGVyQ2FtZXJhTXMgPj0gMCwgYCR7aWR9IGNlbnRlckNhbWVyYU1zIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIucmV0dXJuQ2FtZXJhTXMgPiAwLCBgJHtpZH0gcmV0dXJuQ2FtZXJhTXMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIudGltZVdhcnAubGVuZ3RoID49IDIsIGAke2lkfSBtdXN0IGRlZmluZSBhdCBsZWFzdCB0d28gdGltZS13YXJwIHBvaW50cy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIuY2FtZXJhLmxlbmd0aCA+PSAyLCBgJHtpZH0gbXVzdCBkZWZpbmUgYXQgbGVhc3QgdHdvIGNhbWVyYSBwb3Nlcy5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIudGltZWxpbmVFdmVudHMubGVuZ3RoID49IDIsIGAke2lkfSBtdXN0IGRlZmluZSBhdCBsZWFzdCB0d28gdGltZWxpbmUgZXZlbnRzLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG1lbWJlci5hdHRhY2suc3RhcnRNcyA+PSAwICYmIG1lbWJlci5hdHRhY2suZW5kTXMgPiBtZW1iZXIuYXR0YWNrLnN0YXJ0TXMsIGAke2lkfSBhdHRhY2sgbXVzdCBoYXZlIGEgdmFsaWQgdGltZSByYW5nZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShtZW1iZXIuYXR0YWNrLmVuZE1zIDw9IG1lbWJlci5kdXJhdGlvbk1zLCBgJHtpZH0gYXR0YWNrIGNhbm5vdCBleGNlZWQgZHVyYXRpb24uYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobWVtYmVyLmF0dGFjay5yb3dzQWhlYWQgPiAwLCBgJHtpZH0gYXR0YWNrIHJvd3NBaGVhZCBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKG5lb25QYWxldHRlW21lbWJlci5waWNrdXBDb2xvcl0gIT09IHVuZGVmaW5lZCwgYCR7aWR9IGhhcyBhbiB1bmtub3duIHBpY2t1cCBjb2xvci5gKTtcbiAgICAgIHRoaXMudmFsaWRhdGVUaW1lZFBvaW50cyhpZCwgXCJ0aW1lV2FycFwiLCBtZW1iZXIudGltZVdhcnAsIG1lbWJlci5kdXJhdGlvbk1zKTtcbiAgICAgIHRoaXMudmFsaWRhdGVUaW1lZFBvaW50cyhpZCwgXCJjYW1lcmFcIiwgbWVtYmVyLmNhbWVyYSwgbWVtYmVyLmR1cmF0aW9uTXMpO1xuICAgICAgdGhpcy52YWxpZGF0ZVRpbWVkUG9pbnRzKGlkLCBcInRpbWVsaW5lRXZlbnRzXCIsIG1lbWJlci50aW1lbGluZUV2ZW50cywgbWVtYmVyLmR1cmF0aW9uTXMpO1xuICAgICAgZm9yIChjb25zdCBwb2ludCBvZiBtZW1iZXIudGltZVdhcnApIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHBvaW50LmdhbWVwbGF5U2NhbGUgPiAwICYmIHBvaW50LmdhbWVwbGF5U2NhbGUgPD0gMSwgYCR7aWR9IGdhbWVwbGF5U2NhbGUgbXVzdCBiZSBpbiB0aGUgMC0xIHJhbmdlLmApO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBwb3NlIG9mIG1lbWJlci5jYW1lcmEpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHBvc2UuaGVpZ2h0ID49IC0yMDAsIGAke2lkfSBjYW1lcmEgaGVpZ2h0IGlzIG91dHNpZGUgdGhlIHN1cHBvcnRlZCBsYWIgcmFuZ2UuYCk7XG4gICAgICAgIHRoaXMucmVxdWlyZShwb3NlLnpvb20gPiAwLCBgJHtpZH0gY2FtZXJhIHpvb20gbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHBvc2UuaG9yaXpvbiA+IDAgJiYgcG9zZS5ob3Jpem9uIDwgMSwgYCR7aWR9IGNhbWVyYSBob3Jpem9uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVUaW1lZFBvaW50cyhpZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBwb2ludHM6IHJlYWRvbmx5IHsgYXRNczogbnVtYmVyIH1bXSwgZHVyYXRpb25NczogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IHByZXZpb3VzID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcG9pbnRzKSB7XG4gICAgICB0aGlzLnJlcXVpcmUocG9pbnQuYXRNcyA+PSAwICYmIHBvaW50LmF0TXMgPD0gZHVyYXRpb25NcywgYCR7aWR9ICR7bGFiZWx9IHBvaW50IGF0TXMgaXMgb3V0c2lkZSB0aGUgc2VxdWVuY2UuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUocG9pbnQuYXRNcyA+PSBwcmV2aW91cywgYCR7aWR9ICR7bGFiZWx9IHBvaW50cyBtdXN0IGJlIHNvcnRlZCBieSBhdE1zLmApO1xuICAgICAgcHJldmlvdXMgPSBwb2ludC5hdE1zO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd3N0b3BwZXJGYW1pbHkgPSBuZXcgU2hvd3N0b3BwZXJGYW1pbHlEZWZpbml0aW9uKCk7XG5leHBvcnQgdHlwZSBTaG93c3RvcHBlcklkID0ga2V5b2YgdHlwZW9mIHNob3dzdG9wcGVyRmFtaWx5Lm1lbWJlcnM7XG5leHBvcnQgY29uc3Qgc3RhcnRpbmdTaG93c3RvcHBlcklkOiBTaG93c3RvcHBlcklkID0gXCJkcmFnb25zQnJlYXRoXCI7XG4iLCAiaW1wb3J0IHsgbmVvblBhbGV0dGUsIHR5cGUgTmVvbkNvbG9yTmFtZSB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUeXBlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogSG93IHRoZSBzd29yZCBzZWxlY3RzIHRhcmdldHMgZnJvbSB0aGUgbmVhcmJ5IHRocmVhdCBwb29sLlxuICogQWxsIG1vZGVzIGFyZSBsYW5lLWF3YXJlIHZpYSB0aGUgTmVhcmJ5VGhyZWF0UXVlcnkgbW9kdWxlLlxuICovXG5leHBvcnQgdHlwZSBTd29yZFRhcmdldGluZ01vZGUgPVxuICB8IFwibmVhcmVzdEluQ3VycmVudExhbmVcIiAgIC8vIGNsb3Nlc3QgZW5lbXkgaW4gdGhlIHBsYXllcidzIGFjdGl2ZSBsYW5lXG4gIHwgXCJuZWFyZXN0SW5FaXRoZXJMYW5lXCIgICAgLy8gY2xvc2VzdCBlbmVteSByZWdhcmRsZXNzIG9mIGxhbmVcbiAgfCBcImZyb250TW9zdFRocmVhdFwiICAgICAgICAvLyBmYXJ0aGVzdC1hZHZhbmNlZCAoaGlnaGVzdCB5KSBlbmVteSBpbiByYW5nZVxuICB8IFwiY2x1c3Rlck5lYXJQbGF5ZXJcIjsgICAgIC8vIHBpY2tzIHVwIHRvIG1heFRhcmdldHMgZW5lbWllcyB3aXRoaW4gcmVhY2hcblxuZXhwb3J0IGludGVyZmFjZSBTd29yZE1lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhbWlseTogXCJzd29yZFwiO1xuICByYXJpdHk6IFwic3RhcnRlclwiIHwgXCJjb21tb25cIiB8IFwidW5jb21tb25cIjtcbiAgLyoqXG4gICAqIEF0dGFjayByYW5nZSBpbiBwaXhlbHMgKGF0IHNjYWxlIDEpLlxuICAgKiBTd29yZCBvbmx5IHN3aW5ncyB3aGVuIGFuIGVuZW15IGVudGVycyB0aGlzIHJhZGl1cy5cbiAgICovXG4gIHJhbmdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBbmd1bGFyIHdpZHRoIG9mIHRoZSBzbGFzaCBhcmMgaW4gZGVncmVlcy5cbiAgICogV2lkZXIgPSBoZWF2aWVyLCBoaXRzIG1vcmUgZW5lbWllcyBwZXIgc3dpbmcuXG4gICAqL1xuICBhcmNEZWdyZWVzOiBudW1iZXI7XG4gIC8qKiBEYW1hZ2UgcGVyIGhpdC4gKi9cbiAgZGFtYWdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBsZXZlbCA1IGRhbWFnZSBwZXIgaGl0LlxuICAgKlxuICAgKiBMZXZlbCAxIHVzZXMgZGFtYWdlLCBsZXZlbCA1IHVzZXMgZGFtYWdlQXRMZXZlbDUsIGFuZCBpbnRlcm1lZGlhdGUgbGV2ZWxzXG4gICAqIGludGVycG9sYXRlLiBVc2UgdGhpcyB3aGVuIGR1cGxpY2F0ZSBwaWNrdXBzIHNob3VsZCBpbmNyZWFzZSB0b3RhbCBIUFxuICAgKiBjbGVhcmVkIHdpdGhvdXQgY2hhbmdpbmcgcHJveGltaXR5IHJ1bGVzLlxuICAgKi9cbiAgZGFtYWdlQXRMZXZlbDU/OiBudW1iZXI7XG4gIC8qKiBDb29sZG93biBiZXR3ZWVuIHN3aW5ncyBpbiBzZWNvbmRzLiBTd29yZHMgZG8gbm90IGZpcmUgb24gYSB0aW1lcjsgb25seSB3aGVuIGEgdGFyZ2V0IGV4aXN0cy4gKi9cbiAgY29vbGRvd25TZWNvbmRzOiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHRhcmdldHMgaGl0IHBlciBzd2luZy4gKi9cbiAgbWF4VGFyZ2V0czogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgdmVydGljYWwgcmVhY2ggaW4gYXV0aG9yZWQgdHJhY2sgcm93cy5cbiAgICpcbiAgICogSGVhdnkgc3dlZXBpbmcgc3dvcmRzIGNhbiB1c2UgdGhpcyB3aXRoIHJlcGVhdGVkIHBpY2t1cHM6IGxldmVsIDEgdXNlc1xuICAgKiBsZXZlbDEgcm93cywgbGV2ZWwgNSB1c2VzIGxldmVsNSByb3dzLCBhbmQgaW50ZXJtZWRpYXRlIGxldmVscyBpbnRlcnBvbGF0ZS5cbiAgICogVGhpcyBleHBhbmRzIGFmZmVjdGVkIHJvd3MgYWZ0ZXIgYSBjbG9zZSB0YXJnZXQgaXMgZm91bmQ7IGl0IGRvZXMgbm90XG4gICAqIGxvb3NlbiB0aGUgbmVhci1wbGF5ZXIgcHJveGltaXR5IHRocmVzaG9sZC5cbiAgICovXG4gIHJvd1JlYWNoPzoge1xuICAgIGxldmVsMTogbnVtYmVyO1xuICAgIGxldmVsNTogbnVtYmVyO1xuICB9O1xuICAvKiogTGFuZS1hd2FyZSB0YXJnZXQgc2VsZWN0aW9uIG1vZGUuICovXG4gIHRhcmdldGluZ01vZGU6IFN3b3JkVGFyZ2V0aW5nTW9kZTtcbiAgLyoqIFZpc3VhbCBzbGFzaCBhcmMgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLiAqL1xuICBzbGFzaER1cmF0aW9uTXM6IG51bWJlcjtcbiAgLyoqIFByaW1hcnkgc2xhc2ggY29sb3IuICovXG4gIGNvbG9yOiBOZW9uQ29sb3JOYW1lO1xuICAvKiogVmlzdWFsIHRoaWNrbmVzcyBtdWx0aXBsaWVyIGZvciB0aGUgc2hhcmVkIHN3b3JkIHRyYWlsLiAxLjAgPSBkZWZhdWx0LiAqL1xuICBzbGFzaFRoaWNrbmVzczogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZGVzaWduIG5vdGVzLiBOb3QgdXNlZCBieSBydW50aW1lOyBkb2N1bWVudHMgaW50ZW50IGZvciBmdXR1cmUgYWdlbnRzLlxuICAgKi9cbiAgYWdlbnROb3Rlcz86IHN0cmluZztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGYW1pbHkgZGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBTd29yZEZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwic3dvcmRcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlN3b3JkXCI7XG5cbiAgLyoqXG4gICAqIEZhbWlseS1sZXZlbCBpbXBsZW1lbnRhdGlvbiBub3RlczpcbiAgICogLSBTd29yZHMgYXJlIG5vdCBwZXJpb2QtYmFzZWQgbGlrZSBndW5zLiBUaGV5IHN3aW5nIG9ubHkgd2hlbiBhIHZhbGlkIHRhcmdldFxuICAgKiAgIGlzIHdpdGhpbiByYW5nZSBhbmQgY29vbGRvd24gaXMgcmVhZHkuIFRoZXkgaWRsZSBzaWxlbnRseSBvdGhlcndpc2UuXG4gICAqIC0gT25lIGFjdGl2ZSBzd29yZCBwZXIgcGxheWVyIChmYW1pbHktc2NvcGVkIGV4Y2x1c2l2aXR5KS5cbiAgICogLSBSZXBlYXRlZCBwaWNrdXBzIG9mIHRoZSBzYW1lIHN3b3JkIGluY3JlYXNlIHRoYXQgc3dvcmQncyBhY3RpdmUgbGV2ZWwuXG4gICAqIC0gQ2FuIGNvZXhpc3Qgd2l0aCBhbiBhY3RpdmUgR3VuIGFuZCBhbiBhY3RpdmUgU2hpZWxkIHNpbXVsdGFuZW91c2x5LlxuICAgKiAtIFRhcmdldGluZyBpcyBsYW5lLWF3YXJlIHZpYSBxdWVyeU5lYXJieVRocmVhdHMoKS5cbiAgICogLSBUaGUgc2xhc2ggYW5pbWF0aW9uIHJ1bnMgZm9yIHNsYXNoRHVyYXRpb25NcyBtaWxsaXNlY29uZHMsIHRoZW4gZmFkZXMuXG4gICAqIC0gRGFtYWdlIGlzIGFwcGxpZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgc3dpbmcgc3RhcnRzIChub3QgYXQgYW5pbWF0aW9uIGVuZCkuXG4gICAqXG4gICAqIFByZWNlZGVuY2U6IHN3b3JkIGF0dGFja3Mgb2NjdXIgYWZ0ZXIgc2hpZWxkQmxvY2svc2hpZWxkUHVsc2UgYnV0IGJlZm9yZVxuICAgKiBzaGllbGRDb250YWN0RGFtYWdlIGFuZCBzaGllbGRBdXJhLiBTZWUgbWFpbi50cyBuZWFyUGxheWVyRWZmZWN0T3JkZXIuXG4gICAqL1xuICByZWFkb25seSBtZW1iZXJzID0ge1xuICAgIC8qKlxuICAgICAqIEFyYyBCbGFkZSAtIENvcmUgc3dvcmQuIEZhc3QsIGN1cnZlZCwgdGFyZ2V0cyBuZWFyZXN0IGVuZW15IGluIGxhbmUuXG4gICAgICogU2hvcnQgY29vbGRvd24gbWFrZXMgaXQgdXNlZnVsIGFnYWluc3QgZGVuc2Ugc2luZ2xlLWxhbmUgd2F2ZXMuXG4gICAgICovXG4gICAgYXJjQmxhZGU6IHtcbiAgICAgIGxhYmVsOiBcIkFyYyBCbGFkZVwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwic3RhcnRlclwiLFxuICAgICAgcmFuZ2U6IDUyLFxuICAgICAgYXJjRGVncmVlczogNzAsXG4gICAgICBkYW1hZ2U6IDEuNSxcbiAgICAgIGNvb2xkb3duU2Vjb25kczogMC41NSxcbiAgICAgIG1heFRhcmdldHM6IDIsXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkN1cnJlbnRMYW5lXCIsXG4gICAgICBzbGFzaER1cmF0aW9uTXM6IDE1MCxcbiAgICAgIGNvbG9yOiBcImN5YW5cIixcbiAgICAgIHNsYXNoVGhpY2tuZXNzOiAxLjAsXG4gICAgICBhZ2VudE5vdGVzOiBcIkZhc3QgYW5kIHNoYXJwLiBDdXJ2ZWQgbmVvbiBzbGFzaC4gMTIwLTE4MG1zIGZlZWwuIEZhZGluZyBhZnRlcmltYWdlLiBMaWtlIGEgd2hpcC1saWtlIGthdGFuYSBhcmMuXCIsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWF2ZXIgLSBIZWF2eSBzd29yZC4gU2xvd2VyLCBidXQgc3dlZXBzIGFjcm9zcyBldmVyeSBjb2x1bW4uXG4gICAgICogU3RhcnRzIHdpdGggMiByb3dzIG9mIHZlcnRpY2FsIHJlYWNoIGFuZCBzY2FsZXMgdG8gNCByb3dzIGF0IGxldmVsIDUuXG4gICAgICovXG4gICAgY2xlYXZlcjoge1xuICAgICAgbGFiZWw6IFwiQ2xlYXZlclwiLFxuICAgICAgZmFtaWx5OiBcInN3b3JkXCIsXG4gICAgICByYXJpdHk6IFwiY29tbW9uXCIsXG4gICAgICByYW5nZTogNjgsXG4gICAgICBhcmNEZWdyZWVzOiAzNjAsXG4gICAgICBkYW1hZ2U6IDIuNCxcbiAgICAgIGRhbWFnZUF0TGV2ZWw1OiAzLjQsXG4gICAgICBjb29sZG93blNlY29uZHM6IDEuMzUsXG4gICAgICBtYXhUYXJnZXRzOiAxMixcbiAgICAgIHJvd1JlYWNoOiB7IGxldmVsMTogMiwgbGV2ZWw1OiA0IH0sXG4gICAgICB0YXJnZXRpbmdNb2RlOiBcIm5lYXJlc3RJbkVpdGhlckxhbmVcIixcbiAgICAgIHNsYXNoRHVyYXRpb25NczogMjYwLFxuICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICBzbGFzaFRoaWNrbmVzczogMS45LFxuICAgICAgYWdlbnROb3RlczogXCJIZWF2eSBhbGwtY29sdW1uIHN3ZWVwLiBSZXBlYXRlZCBjbGVhdmVyIHBpY2t1cHMgbGV2ZWwgaXQgdXAgZnJvbSAyIHJvd3Mgb2YgcmVhY2ggdG8gNCByb3dzIGF0IGxldmVsIDUsIHdpdGggbW9yZSB0b3RhbCBkYW1hZ2UgcGVyIHN3aW5nLlwiLFxuICAgIH0sXG4gIH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFN3b3JkTWVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2lkLCBzd29yZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5tZW1iZXJzKSBhcyBBcnJheTxbc3RyaW5nLCBTd29yZE1lbWJlcl0+KSB7XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQucmFuZ2UgPiAwLCBgJHtpZH0gcmFuZ2UgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5hcmNEZWdyZWVzID4gMCAmJiBzd29yZC5hcmNEZWdyZWVzIDw9IDM2MCwgYCR7aWR9IGFyY0RlZ3JlZXMgbXVzdCBiZSBpbiAoMCwgMzYwXS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5kYW1hZ2UgPiAwLCBgJHtpZH0gZGFtYWdlIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICBpZiAoc3dvcmQuZGFtYWdlQXRMZXZlbDUgIT09IHVuZGVmaW5lZCkgdGhpcy5yZXF1aXJlKHN3b3JkLmRhbWFnZUF0TGV2ZWw1ID49IHN3b3JkLmRhbWFnZSwgYCR7aWR9IGRhbWFnZUF0TGV2ZWw1IG11c3QgYmUgYXQgbGVhc3QgZGFtYWdlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLmNvb2xkb3duU2Vjb25kcyA+IDAsIGAke2lkfSBjb29sZG93blNlY29uZHMgbXVzdCBiZSBwb3NpdGl2ZS5gKTtcbiAgICAgIHRoaXMucmVxdWlyZShzd29yZC5tYXhUYXJnZXRzID49IDEsIGAke2lkfSBtYXhUYXJnZXRzIG11c3QgYmUgYXQgbGVhc3QgMS5gKTtcbiAgICAgIGlmIChzd29yZC5yb3dSZWFjaCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDEpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsMSA+PSAxLCBgJHtpZH0gcm93UmVhY2gubGV2ZWwxIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUoTnVtYmVyLmlzSW50ZWdlcihzd29yZC5yb3dSZWFjaC5sZXZlbDUpICYmIHN3b3JkLnJvd1JlYWNoLmxldmVsNSA+PSBzd29yZC5yb3dSZWFjaC5sZXZlbDEsIGAke2lkfSByb3dSZWFjaC5sZXZlbDUgbXVzdCBiZSBhdCBsZWFzdCBsZXZlbDEuYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlcXVpcmUoc3dvcmQuc2xhc2hEdXJhdGlvbk1zID4gMCwgYCR7aWR9IHNsYXNoRHVyYXRpb25NcyBtdXN0IGJlIHBvc2l0aXZlLmApO1xuICAgICAgdGhpcy5yZXF1aXJlKHN3b3JkLnNsYXNoVGhpY2tuZXNzID4gMCwgYCR7aWR9IHNsYXNoVGhpY2tuZXNzIG11c3QgYmUgcG9zaXRpdmUuYCk7XG4gICAgICB0aGlzLnJlcXVpcmUobmVvblBhbGV0dGVbc3dvcmQuY29sb3JdICE9PSB1bmRlZmluZWQsIGAke2lkfSBoYXMgYW4gdW5rbm93biBjb2xvci5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN3b3JkRmFtaWx5ID0gbmV3IFN3b3JkRmFtaWx5RGVmaW5pdGlvbigpO1xuZXhwb3J0IHR5cGUgU3dvcmRJZCA9IGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzO1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IG9yYkZhbWlseSwgdHlwZSBPcmJJZCB9IGZyb20gXCIuL09yYkZhbWlseVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrTGVnZW5kRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0JhbGFuY2Uge1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0RlZmluaXRpb24ge1xuICBsYXlvdXQ6IHN0cmluZztcbiAgbGVnZW5kOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBUcmFja0xlZ2VuZEVudHJ5Pj47XG4gIGJhbGFuY2U6IFRyYWNrQmFsYW5jZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja01lbWJlciB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIGRlZmluaXRpb246IFRyYWNrRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0ZhbWlseU1lbWJlcjxUcmFja0lkIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVudmlyb25tZW50OiB7XG4gICAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIH07XG4gIHRyYWNrSWRzOiByZWFkb25seSBUcmFja0lkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhY2tFbnRpdHkge1xuICBpZDogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIGxhbmVJbmRleDogbnVtYmVyO1xuICBjb2x1bW5TcGFuOiBudW1iZXI7XG4gIHJvd0luZGV4OiBudW1iZXI7XG4gIGRpc3RhbmNlRnJvbVBsYXllcjogbnVtYmVyO1xuICBzcGVlZE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuY29uc3QgaXNFbmVteSA9IChpZDogc3RyaW5nKTogYm9vbGVhbiA9PiBpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpO1xuY29uc3QgZW5lbXlJZEZyb21UcmFja0lkID0gKGlkOiBzdHJpbmcpOiBPcmJJZCB8IG51bGwgPT4ge1xuICBpZiAoaWQgPT09IFwiZW5lbXkuYmFzaWNcIikgcmV0dXJuIFwiYmFzaWNPcmJcIjtcbiAgaWYgKCFpZC5zdGFydHNXaXRoKFwiZW5lbXkuXCIpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY2FuZGlkYXRlID0gaWQuc2xpY2UoXCJlbmVteS5cIi5sZW5ndGgpO1xuICByZXR1cm4gY2FuZGlkYXRlIGluIG9yYkZhbWlseS5tZW1iZXJzID8gY2FuZGlkYXRlIGFzIE9yYklkIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHBhcnNlVHJhY2tSb3dzKHRyYWNrOiBUcmFja0RlZmluaXRpb24pOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgc291cmNlSW5kZXg6IG51bWJlciB9PiB7XG4gIGNvbnN0IHJvd3MgPSB0cmFjay5sYXlvdXRcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKHRleHQsIHNvdXJjZUluZGV4KSA9PiAoeyB0ZXh0OiB0ZXh0LnRyaW0oKSwgc291cmNlSW5kZXg6IHNvdXJjZUluZGV4ICsgMSB9KSlcbiAgICAuZmlsdGVyKHJvdyA9PiByb3cudGV4dC5sZW5ndGggPiAwKTtcblxuICBpZiAocm93cy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGxheW91dCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJvdy5cIik7XG4gIHJldHVybiByb3dzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFja0RlZmluaXRpb24odHJhY2s6IFRyYWNrRGVmaW5pdGlvbik6IFBhcnNlZFRyYWNrRW50aXR5W10ge1xuICBpZiAodHJhY2suYmFsYW5jZS5lbmVteUhwIDw9IDApIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJhbGFuY2UgZW5lbXlIcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTtcbiAgaWYgKHRyYWNrLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gIGZvciAoY29uc3QgW3N5bWJvbCwgZW50cnldIG9mIE9iamVjdC5lbnRyaWVzKHRyYWNrLmxlZ2VuZCkpIHtcbiAgICBpZiAoWy4uLnN5bWJvbF0ubGVuZ3RoICE9PSAxIHx8IC9cXHN8XFx8Ly50ZXN0KHN5bWJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGVnZW5kIGtleSBcIiR7c3ltYm9sfVwiIG11c3QgYmUgb25lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlciBvdGhlciB0aGFuIFwifFwiLmApO1xuICAgIH1cbiAgICBpZiAoIWVudHJ5LmlkKSB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxlZ2VuZCBzeW1ib2wgXCIke3N5bWJvbH1cIiBtdXN0IGhhdmUgYW4gaWQuYCk7XG4gICAgaWYgKGVudHJ5LnNwZWVkICE9PSB1bmRlZmluZWQgJiYgZW50cnkuc3BlZWQgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsZWdlbmQgc3ltYm9sIFwiJHtzeW1ib2x9XCIgc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb3dzID0gcGFyc2VUcmFja1Jvd3ModHJhY2spO1xuICBsZXQgbGVmdFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGxldCByaWdodFdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudGl0aWVzOiBQYXJzZWRUcmFja0VudGl0eVtdID0gW107XG5cbiAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3QgcGlwZUNvdW50ID0gWy4uLnJvdy50ZXh0XS5maWx0ZXIoY2hhcmFjdGVyID0+IGNoYXJhY3RlciA9PT0gXCJ8XCIpLmxlbmd0aDtcbiAgICBpZiAocGlwZUNvdW50ICE9PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIGxheW91dCBsaW5lICR7cm93LnNvdXJjZUluZGV4fSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgXCJ8XCIgc2VwYXJhdG9yOyBmb3VuZCAke3BpcGVDb3VudH0uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHJvdy50ZXh0LnNwbGl0KFwifFwiKS5tYXAoc2lkZSA9PiBzaWRlLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gICAgbGVmdFdpZHRoID8/PSBsZWZ0Lmxlbmd0aDtcbiAgICByaWdodFdpZHRoID8/PSByaWdodC5sZW5ndGg7XG5cbiAgICBpZiAobGVmdC5sZW5ndGggIT09IGxlZnRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIGxlZnQgd2lkdGggJHtsZWZ0Lmxlbmd0aH07IGV4cGVjdGVkICR7bGVmdFdpZHRofS5gKTtcbiAgICB9XG4gICAgaWYgKHJpZ2h0Lmxlbmd0aCAhPT0gcmlnaHRXaWR0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gaGFzIHJpZ2h0IHdpZHRoICR7cmlnaHQubGVuZ3RofTsgZXhwZWN0ZWQgJHtyaWdodFdpZHRofS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXN0YW5jZUZyb21QbGF5ZXIgPSByb3dzLmxlbmd0aCAtIDEgLSByb3dJbmRleDtcbiAgICBmb3IgKGNvbnN0IFtzaWRlLCBsYW5lXSBvZiBbW1wibGVmdFwiLCBsZWZ0XSwgW1wicmlnaHRcIiwgcmlnaHRdXSBhcyBjb25zdCkge1xuICAgICAgY29uc3Qgb2NjdXBpZWRCeSA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gICAgICBbLi4ubGFuZV0uZm9yRWFjaCgoc3ltYm9sLCBsYW5lSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB0cmFjay5sZWdlbmRbc3ltYm9sXTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVHJhY2sgbGF5b3V0IGxpbmUgJHtyb3cuc291cmNlSW5kZXh9IHVzZXMgc3ltYm9sIFwiJHtzeW1ib2x9XCIgYXQgJHtzaWRlfSBsYW5lIGluZGV4ICR7bGFuZUluZGV4fSwgYnV0IGl0IGlzIG1pc3NpbmcgZnJvbSB0aGUgbGVnZW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5pZCA9PT0gXCJlbXB0eVwiKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZW15SWQgPSBlbmVteUlkRnJvbVRyYWNrSWQoZW50cnkuaWQpO1xuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gZW5lbXlJZCA/IG9yYkZhbWlseS5tZW1iZXJzW2VuZW15SWRdLmNvbHVtblNwYW4gOiAxO1xuICAgICAgICBpZiAobGFuZUluZGV4ICsgY29sdW1uU3BhbiA+IGxhbmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IGF0ICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleH0sIGJ1dCBpdCBuZWVkcyAke2NvbHVtblNwYW59IGNvbHVtbnMgYW5kIG9ubHkgJHtsYW5lLmxlbmd0aCAtIGxhbmVJbmRleH0gcmVtYWluLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSB7XG4gICAgICAgICAgY29uc3Qgb2NjdXBpZWQgPSBvY2N1cGllZEJ5LmdldChsYW5lSW5kZXggKyBvZmZzZXQpO1xuICAgICAgICAgIGlmIChvY2N1cGllZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcmFjayBsYXlvdXQgbGluZSAke3Jvdy5zb3VyY2VJbmRleH0gcGxhY2VzICR7ZW50cnkuaWR9IG9uICR7c2lkZX0gbGFuZSBpbmRleCAke2xhbmVJbmRleCArIG9mZnNldH0sIGFscmVhZHkgb2NjdXBpZWQgYnkgJHtvY2N1cGllZH0uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGNvbHVtblNwYW47IG9mZnNldCsrKSBvY2N1cGllZEJ5LnNldChsYW5lSW5kZXggKyBvZmZzZXQsIGVudHJ5LmlkKTtcblxuICAgICAgICBlbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICBpZDogZW50cnkuaWQsXG4gICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgbGFuZUluZGV4LFxuICAgICAgICAgIGNvbHVtblNwYW4sXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgZGlzdGFuY2VGcm9tUGxheWVyLFxuICAgICAgICAgIHNwZWVkTXVsdGlwbGllcjogKGVudHJ5LnNwZWVkID8/IDEpICogKGlzRW5lbXkoZW50cnkuaWQpID8gdHJhY2suYmFsYW5jZS5lbmVteVNwZWVkIDogMSksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRpZXMuc29ydCgoYSwgYikgPT5cbiAgICBhLmRpc3RhbmNlRnJvbVBsYXllciAtIGIuZGlzdGFuY2VGcm9tUGxheWVyIHx8XG4gICAgYS5yb3dJbmRleCAtIGIucm93SW5kZXggfHxcbiAgICBhLnNpZGUubG9jYWxlQ29tcGFyZShiLnNpZGUpIHx8XG4gICAgYS5sYW5lSW5kZXggLSBiLmxhbmVJbmRleCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgZ3VuRmFtaWx5IH0gZnJvbSBcIi4vR3VuRmFtaWx5XCI7XG5pbXBvcnQgeyBsaWdodG5pbmdGYW1pbHkgfSBmcm9tIFwiLi9MaWdodG5pbmdGYW1pbHlcIjtcbmltcG9ydCB7IG11bHRpcGxpZXJGYW1pbHkgfSBmcm9tIFwiLi9NdWx0aXBsaWVyRmFtaWx5XCI7XG5pbXBvcnQgeyBvcmJGYW1pbHkgfSBmcm9tIFwiLi9PcmJGYW1pbHlcIjtcbmltcG9ydCB7IHNoaWVsZEZhbWlseSB9IGZyb20gXCIuL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHsgc2hvd3N0b3BwZXJGYW1pbHkgfSBmcm9tIFwiLi9TaG93c3RvcHBlckZhbWlseVwiO1xuaW1wb3J0IHsgc3dvcmRGYW1pbHkgfSBmcm9tIFwiLi9Td29yZEZhbWlseVwiO1xuaW1wb3J0IHsgcGFyc2VUcmFja0RlZmluaXRpb24sIHR5cGUgVHJhY2tNZW1iZXIgfSBmcm9tIFwiLi9UcmFja0RlZmluaXRpb25cIjtcblxuLyoqXG4gKiBHbG9iYWwgMC1iYXNlZCBjb2x1bW4gaW5kZXggYWNyb3NzIGJvdGggbGFuZXMuXG4gKlxuICogQ3VycmVudCBsYXlvdXQgc2hhcGU6XG4gKiAtIGNvbHVtbnMgMC00IGFyZSB0aGUgbGVmdCBsYW5lXG4gKiAtIGNvbHVtbnMgNS05IGFyZSB0aGUgcmlnaHQgbGFuZVxuICpcbiAqIEV4YW1wbGVzOlxuICogLSAyID0gbGVmdCBsYW5lIG1pZGRsZVxuICogLSA3ID0gcmlnaHQgbGFuZSBtaWRkbGVcbiAqL1xuZXhwb3J0IHR5cGUgVHJhY2tDb2x1bW4gPSBudW1iZXI7XG5cbi8qKlxuICogRnJpZW5kbHkgY29sdW1uIGNvbnN0YW50cyBmb3IgdGhlIGN1cnJlbnQgMi1sYW5lIC8gNS1jb2x1bW4gdHJhY2sgZm9ybWF0LlxuICpcbiAqIFRoZXNlIGFyZSBvbmx5IHN1Z2FyLiBUaGUgYnVpbGRlciBzdGlsbCBhY2NlcHRzIHJhdyBudW1iZXJzIGZvciBmYXN0IGF1dGhvcmluZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFja0NvbHVtbnMge1xuICByZWFkb25seSBsZWZ0OiB7XG4gICAgcmVhZG9ubHkgb3V0ZXI6IDA7XG4gICAgcmVhZG9ubHkgbmVhck91dGVyOiAxO1xuICAgIHJlYWRvbmx5IG1pZDogMjtcbiAgICByZWFkb25seSBuZWFySW5uZXI6IDM7XG4gICAgcmVhZG9ubHkgaW5uZXI6IDQ7XG4gIH07XG4gIHJlYWRvbmx5IHJpZ2h0OiB7XG4gICAgcmVhZG9ubHkgaW5uZXI6IDU7XG4gICAgcmVhZG9ubHkgbmVhcklubmVyOiA2O1xuICAgIHJlYWRvbmx5IG1pZDogNztcbiAgICByZWFkb25seSBuZWFyT3V0ZXI6IDg7XG4gICAgcmVhZG9ubHkgb3V0ZXI6IDk7XG4gIH07XG59XG5cbi8qKlxuICogQ29tbW9uIGV4cG9ydGVkIGNvbHVtbiBjb25zdGFudHMuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogYnVpbGRlci5lbmVteShcImJhc2ljXCIsIHsgY29sdW1uOiBjLmxlZnQubWlkIH0pXG4gKiBidWlsZGVyLndlYXBvbihcInN3b3JkLmFyY0JsYWRlXCIsIHsgY29sdW1uOiBjLnJpZ2h0Lm1pZCB9KVxuICovXG5leHBvcnQgY29uc3QgYzogVHJhY2tDb2x1bW5zID0ge1xuICBsZWZ0OiB7IG91dGVyOiAwLCBuZWFyT3V0ZXI6IDEsIG1pZDogMiwgbmVhcklubmVyOiAzLCBpbm5lcjogNCB9LFxuICByaWdodDogeyBpbm5lcjogNSwgbmVhcklubmVyOiA2LCBtaWQ6IDcsIG5lYXJPdXRlcjogOCwgb3V0ZXI6IDkgfSxcbn07XG5cbmV4cG9ydCB0eXBlIFRyYWNrRW5lbXlSZWYgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBUcmFja1dlYXBvblJlZiA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFRyYWNrUGlja3VwUmVmID0gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrUGxhY2VtZW50T3B0aW9ucyB7XG4gIGNvbHVtbjogVHJhY2tDb2x1bW47XG4gIC8qKlxuICAgKiBPcHRpb25hbCBwZXItc3ltYm9sIHNwZWVkIG11bHRpcGxpZXIgZW1pdHRlZCBpbnRvIHRoZSB0cmFjayBsZWdlbmQuXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gVGhlIGRlZmF1bHQgaXMgMSwgYW5kIGZ1dHVyZSB0cmFjayBlZGl0c1xuICAgKiBzaG91bGQgcHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5IGFza3MgZm9yIHNwZWVkIHR1bmluZy5cbiAgICogQ2hhbmdpbmcgdGhpcyB2YWx1ZSBpcyBhIHNpZ25pZmljYW50IGJhbGFuY2UgY2hhbmdlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMaW5lT3B0aW9ucyB7XG4gIGNvbHVtbjogVHJhY2tDb2x1bW47XG4gIGNvdW50OiBudW1iZXI7XG4gIC8qKlxuICAgKiBFbXB0eSByb3dzIGJldHdlZW4gZWFjaCBlbmVteS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMC4gSW4gcHJlc3N1cmUgc2VjdGlvbnMsIG9taXQgdGhpcyB1bmxlc3MgdGhlIGdhcCBpc1xuICAgKiBpbnRlbnRpb25hbDsgcHJlc3N1cmUgc2hvdWxkIG5vcm1hbGx5IHBsYWNlIGVuZW1pZXMgZXZlcnkgcm93LlxuICAgKi9cbiAgZ2FwPzogbnVtYmVyO1xuICAvKipcbiAgICogT3B0aW9uYWwgZW5lbXkgc3BlZWQgb3ZlcnJpZGUgZm9yIHRoaXMgcmVwZWF0ZWQgcGF0dGVybi5cbiAgICpcbiAgICogT21pdCB0aGlzIGZvciBub3JtYWwgYXV0aG9yaW5nLiBQcmVmZXIgc3BlZWQgMSB1bmxlc3MgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICogYXNrcyBmb3Igc3BlZWQgdHVuaW5nLCBiZWNhdXNlIHNwZWVkIGNoYW5nZXMgbWF0ZXJpYWxseSBhZmZlY3QgYmFsYW5jZS5cbiAgICovXG4gIHNwZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zIHtcbiAgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXTtcbiAgY291bnQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIEVtcHR5IHJvd3MgYmV0d2VlbiBlYWNoIGVuZW15LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAwLiBJbiBwcmVzc3VyZSBzZWN0aW9ucywgb21pdCB0aGlzIHVubGVzcyB0aGUgZ2FwIGlzXG4gICAqIGludGVudGlvbmFsOyBwcmVzc3VyZSBzaG91bGQgbm9ybWFsbHkgcGxhY2UgZW5lbWllcyBldmVyeSByb3cuXG4gICAqL1xuICBnYXA/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyByZXBlYXRlZCBwYXR0ZXJuLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tXYWxsT3B0aW9ucyB7XG4gIGNvbHVtbnM6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW107XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyB3YWxsLlxuICAgKlxuICAgKiBPbWl0IHRoaXMgZm9yIG5vcm1hbCBhdXRob3JpbmcuIFByZWZlciBzcGVlZCAxIHVubGVzcyB0aGUgdXNlciBkaXJlY3RseVxuICAgKiBhc2tzIGZvciBzcGVlZCB0dW5pbmcsIGJlY2F1c2Ugc3BlZWQgY2hhbmdlcyBtYXRlcmlhbGx5IGFmZmVjdCBiYWxhbmNlLlxuICAgKi9cbiAgc3BlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tEcmlwT3B0aW9ucyB7XG4gIGNvbHVtbjogVHJhY2tDb2x1bW47XG4gIHJvd3M6IG51bWJlcjtcbiAgLyoqXG4gICAqIFBsYWNlIG9uZSBlbmVteSBldmVyeSBOIHJvd3MuXG4gICAqXG4gICAqIERyaXAgaXMgaW50ZW50aW9uYWxseSBzcGFyc2UuIFByZWZlciBsaW5lL2FsdGVybmF0aW5nIHdpdGhvdXQgYSBnYXAgZm9yXG4gICAqIG5vcm1hbCBwcmVzc3VyZSwgYW5kIHVzZSBkcmlwIG9ubHkgd2hlbiB0aGUgc3BhcnNlIGNhZGVuY2UgaXMgZGVsaWJlcmF0ZS5cbiAgICovXG4gIGV2ZXJ5OiBudW1iZXI7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBlbmVteSBzcGVlZCBvdmVycmlkZSBmb3IgdGhpcyBkcmlwIHBhdHRlcm4uXG4gICAqXG4gICAqIE9taXQgdGhpcyBmb3Igbm9ybWFsIGF1dGhvcmluZy4gUHJlZmVyIHNwZWVkIDEgdW5sZXNzIHRoZSB1c2VyIGRpcmVjdGx5XG4gICAqIGFza3MgZm9yIHNwZWVkIHR1bmluZywgYmVjYXVzZSBzcGVlZCBjaGFuZ2VzIG1hdGVyaWFsbHkgYWZmZWN0IGJhbGFuY2UuXG4gICAqL1xuICBzcGVlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlcjtcbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICB3YWxsKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrV2FsbE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQnVpbGRlck9wdGlvbnMge1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlbnZpcm9ubWVudDoge1xuICAgIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICB9O1xuICBiYWxhbmNlOiB7XG4gICAgZW5lbXlIcDogbnVtYmVyO1xuICAgIGVuZW15U3BlZWQ6IG51bWJlcjtcbiAgfTtcbiAgcGxheWVyU3RhcnRDb2x1bW4/OiBUcmFja0NvbHVtbjtcbiAgbGFuZVdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQnVpbGRlciB7XG4gIGVuZW15KGlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIHdlYXBvbihpZDogVHJhY2tXZWFwb25SZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBhZHZhbmNlUm93cyhyb3dzOiBudW1iZXIpOiBUcmFja0J1aWxkZXI7XG4gIHJlc3BpdGUocm93czogbnVtYmVyKTogVHJhY2tCdWlsZGVyO1xuICBzZWN0aW9uKG5hbWU6IHN0cmluZywgcm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiBUcmFja0J1aWxkZXI7XG4gIC8qKlxuICAgKiBBZGQgYSBkYW5nZXItZm9jdXNlZCBzZWN0aW9uIHdpdGggYSBmaXhlZCBkdXJhdGlvbi5cbiAgICpcbiAgICogUHJlc3N1cmUgc2hvdWxkIHVzdWFsbHkgY29udGFpbiBlbmVteSBwbGFjZW1lbnQgZXZlcnkgcm93LiBVc2UgZXhwbGljaXRcbiAgICogZ2FwcyBvciBkcmlwIHBhdHRlcm5zIG9ubHkgd2hlbiB0aGUgcXVpZXQgc3BhY2UgaXMgaW50ZW50aW9uYWwuXG4gICAqL1xuICBwcmVzc3VyZShyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IFRyYWNrQnVpbGRlcjtcbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IFRyYWNrQnVpbGRlcjtcbiAgbGluZShlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0xpbmVPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tCdWlsZGVyO1xuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja0J1aWxkZXI7XG4gIGJ1aWxkKCk6IFRyYWNrTWVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQnVpbGRlckZhY3Rvcnkge1xuICBjcmVhdGUob3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucyk6IFRyYWNrQnVpbGRlcjtcbn1cblxuaW50ZXJmYWNlIFBsYWNlbWVudCB7XG4gIHJvdzogbnVtYmVyO1xuICBjb2x1bW46IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbiAgc3BlZWQ6IG51bWJlcjtcbiAgc3BhbjogbnVtYmVyO1xufVxuXG5jb25zdCBkZWZhdWx0TGFuZVdpZHRoID0gNTtcbmNvbnN0IGVtcHR5U3ltYm9sID0gXCIuXCI7XG5jb25zdCBwbGF5ZXJTeW1ib2wgPSBcIk1cIjtcbmNvbnN0IGVuZW15QWxpYXNlczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGJhc2ljOiBcImVuZW15LmJhc2ljXCIsXG4gIGJhc2ljT3JiOiBcImVuZW15LmJhc2ljT3JiXCIsXG4gIGdsYXNzOiBcImVuZW15LmdsYXNzU2hpZWxkXCIsXG4gIGdsYXNzU2hpZWxkOiBcImVuZW15LmdsYXNzU2hpZWxkXCIsXG4gIHdpbmdlcjogXCJlbmVteS53aW5nZXJcIixcbiAgdGFuazogXCJlbmVteS50YW5rXCIsXG59O1xuY29uc3Qgd2VhcG9uUHJlZml4ZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBndW46IFwicGlja3VwLndlYXBvbi5ndW4uXCIsXG4gIHNoaWVsZDogXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5cIixcbiAgc3dvcmQ6IFwicGlja3VwLndlYXBvbi5zd29yZC5cIixcbiAgbGlnaHRuaW5nOiBcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiLFxufTtcbmNvbnN0IHBpY2t1cEFsaWFzZXM6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcInVuaXRNdWx0aXBsaWVyLjJ4XCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG4gIFwidW5pdE11bHRpcGxpZXIuc3F1YWRQbHVzT25lXCI6IFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIsXG4gIFwic2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiOiBcInBpY2t1cC5zaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCIsXG4gIFwiZHJhZ29uc0JyZWF0aFwiOiBcInBpY2t1cC5zaG93c3RvcHBlci5kcmFnb25zQnJlYXRoXCIsXG59O1xuY29uc3QgcHJlZmVycmVkU3ltYm9sczogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiZW5lbXkuYmFzaWNcIjogXCJFXCIsXG4gIFwiZW5lbXkuYmFzaWNPcmJcIjogXCJFXCIsXG4gIFwiZW5lbXkuZ2xhc3NTaGllbGRcIjogXCJEXCIsXG4gIFwiZW5lbXkud2luZ2VyXCI6IFwiV1wiLFxuICBcImVuZW15LnRhbmtcIjogXCJUXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ucHVsc2VQaXN0b2xcIjogXCJHXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4ubmVlZGxlclNtZ1wiOiBcIk5cIixcbiAgXCJwaWNrdXAud2VhcG9uLmd1bi5idXJzdENhcmJpbmVcIjogXCJCXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uaGVhdnlDYW5ub25cIjogXCJIXCIsXG4gIFwicGlja3VwLndlYXBvbi5ndW4uc3BsaXR0ZXJSaWZsZVwiOiBcIlJcIixcbiAgXCJwaWNrdXAud2VhcG9uLnNoaWVsZC5saWdodEd1YXJkXCI6IFwiU1wiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCI6IFwiVlwiLFxuICBcInBpY2t1cC53ZWFwb24uc2hpZWxkLmhleEd1YXJkXCI6IFwiWFwiLFxuICBcInBpY2t1cC53ZWFwb24uc3dvcmQuYXJjQmxhZGVcIjogXCJhXCIsXG4gIFwicGlja3VwLndlYXBvbi5zd29yZC5jbGVhdmVyXCI6IFwiY1wiLFxuICBcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLmNoYWluU3BhcmtcIjogXCJMXCIsXG4gIFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuZm9ya0NhcGFjaXRvclwiOiBcIkZcIixcbiAgXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIjogXCIyXCIsXG4gIFwicGlja3VwLnNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIjogXCJRXCIsXG59O1xuY29uc3QgZmFsbGJhY2tTeW1ib2xzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MjM0NTY3ODkhIyQlJiorLC0vOjs8PT4/QF5fflwiLnNwbGl0KFwiXCIpXG4gIC5maWx0ZXIoc3ltYm9sID0+IHN5bWJvbCAhPT0gZW1wdHlTeW1ib2wgJiYgc3ltYm9sICE9PSBwbGF5ZXJTeW1ib2wpO1xuXG5mdW5jdGlvbiByZXF1aXJlSW50ZWdlcih2YWx1ZTogbnVtYmVyLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gbXVzdCBiZSBhbiBpbnRlZ2VyLmApO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHZhbHVlOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgcmVxdWlyZUludGVnZXIodmFsdWUsIGxhYmVsKTtcbiAgaWYgKHZhbHVlIDw9IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU3BlZWQoc3BlZWQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbGFiZWw6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlID0gc3BlZWQgPz8gMTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDw9IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gc3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5gKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVFbmVteUlkKGlkOiBUcmFja0VuZW15UmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJlbmVteS5cIikpIHJldHVybiBpZDtcbiAgcmV0dXJuIGVuZW15QWxpYXNlc1tpZF0gPz8gYGVuZW15LiR7aWR9YDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplV2VhcG9uSWQoaWQ6IFRyYWNrV2VhcG9uUmVmKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLlwiKSkgcmV0dXJuIGlkO1xuICBjb25zdCBkb3RJbmRleCA9IGlkLmluZGV4T2YoXCIuXCIpO1xuICBpZiAoZG90SW5kZXggPD0gMCkgdGhyb3cgbmV3IEVycm9yKGBXZWFwb24gaWQgXCIke2lkfVwiIG11c3QgdXNlIGZhbWlseS5pZCBzaG9ydGhhbmQgb3IgYSBjYW5vbmljYWwgcGlja3VwLndlYXBvbiBpZC5gKTtcbiAgY29uc3QgZmFtaWx5ID0gaWQuc2xpY2UoMCwgZG90SW5kZXgpO1xuICBjb25zdCBtZW1iZXIgPSBpZC5zbGljZShkb3RJbmRleCArIDEpO1xuICBjb25zdCBwcmVmaXggPSB3ZWFwb25QcmVmaXhlc1tmYW1pbHldO1xuICBpZiAoIXByZWZpeCkgdGhyb3cgbmV3IEVycm9yKGBXZWFwb24gaWQgXCIke2lkfVwiIGhhcyB1bmtub3duIHdlYXBvbiBmYW1pbHkgXCIke2ZhbWlseX1cIi5gKTtcbiAgcmV0dXJuIGAke3ByZWZpeH0ke21lbWJlcn1gO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQaWNrdXBJZChpZDogVHJhY2tQaWNrdXBSZWYpOiBzdHJpbmcge1xuICBpZiAoaWQuc3RhcnRzV2l0aChcInBpY2t1cC5cIikpIHJldHVybiBpZDtcbiAgcmV0dXJuIHBpY2t1cEFsaWFzZXNbaWRdID8/IGBwaWNrdXAuJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBlbmVteU1lbWJlcklkKGNhbm9uaWNhbElkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKGNhbm9uaWNhbElkID09PSBcImVuZW15LmJhc2ljXCIpIHJldHVybiBcImJhc2ljT3JiXCI7XG4gIGlmICghY2Fub25pY2FsSWQuc3RhcnRzV2l0aChcImVuZW15LlwiKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjYW5vbmljYWxJZC5zbGljZShcImVuZW15LlwiLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2Fub25pY2FsSWQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlNZW1iZXJJZChpZCk7XG4gIGlmIChlbmVteUlkKSB7XG4gICAgaWYgKCEoZW5lbXlJZCBpbiBvcmJGYW1pbHkubWVtYmVycykpIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBlbmVteSBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbGlkYXRvcnM6IHJlYWRvbmx5IFtzdHJpbmcsIFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIHVua25vd24+Piwgc3RyaW5nXVtdID0gW1xuICAgIFtcInBpY2t1cC53ZWFwb24uZ3VuLlwiLCBndW5GYW1pbHkubWVtYmVycywgXCJndW5cIl0sXG4gICAgW1wicGlja3VwLndlYXBvbi5zaGllbGQuXCIsIHNoaWVsZEZhbWlseS5tZW1iZXJzLCBcInNoaWVsZFwiXSxcbiAgICBbXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLCBzd29yZEZhbWlseS5tZW1iZXJzLCBcInN3b3JkXCJdLFxuICAgIFtcInBpY2t1cC53ZWFwb24ubGlnaHRuaW5nLlwiLCBsaWdodG5pbmdGYW1pbHkubWVtYmVycywgXCJsaWdodG5pbmdcIl0sXG4gIF07XG4gIGZvciAoY29uc3QgW3ByZWZpeCwgbWVtYmVycywgbGFiZWxdIG9mIHZhbGlkYXRvcnMpIHtcbiAgICBpZiAoIWlkLnN0YXJ0c1dpdGgocHJlZml4KSkgY29udGludWU7XG4gICAgY29uc3QgbWVtYmVySWQgPSBpZC5zbGljZShwcmVmaXgubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duICR7bGFiZWx9IGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSByZXR1cm47XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UoXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuXCIubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBtdWx0aXBsaWVyRmFtaWx5Lm1lbWJlcnMpKSB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbXVsdGlwbGllciBpZCBcIiR7aWR9XCIuYCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpZC5zdGFydHNXaXRoKFwicGlja3VwLnNob3dzdG9wcGVyLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlcklkID0gaWQuc2xpY2UoXCJwaWNrdXAuc2hvd3N0b3BwZXIuXCIubGVuZ3RoKTtcbiAgICBpZiAoIShtZW1iZXJJZCBpbiBzaG93c3RvcHBlckZhbWlseS5tZW1iZXJzKSkgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHNob3dzdG9wcGVyIGlkIFwiJHtpZH1cIi5gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0cmFjayBlbnRpdHkgaWQgXCIke2lkfVwiLmApO1xufVxuXG5mdW5jdGlvbiBzcGFuRm9yKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBlbmVteUlkID0gZW5lbXlNZW1iZXJJZChpZCk7XG4gIHJldHVybiBlbmVteUlkICYmIGVuZW15SWQgaW4gb3JiRmFtaWx5Lm1lbWJlcnMgPyBvcmJGYW1pbHkubWVtYmVyc1tlbmVteUlkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc10uY29sdW1uU3BhbiA6IDE7XG59XG5cbmNsYXNzIFRyYWNrQnVpbGRlckNvcmUge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhbmVXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHBsYWNlbWVudHM6IFBsYWNlbWVudFtdID0gW107XG4gIHByaXZhdGUgY3Vyc29yID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFRyYWNrQnVpbGRlck9wdGlvbnMpIHtcbiAgICB0aGlzLmxhbmVXaWR0aCA9IG9wdGlvbnMubGFuZVdpZHRoID8/IGRlZmF1bHRMYW5lV2lkdGg7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcih0aGlzLmxhbmVXaWR0aCwgXCJUcmFjayBsYW5lV2lkdGhcIik7XG4gICAgaWYgKHRoaXMubGFuZVdpZHRoIDwgMykgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFuZVdpZHRoIG11c3QgYmUgYXQgbGVhc3QgMy5cIik7XG4gICAgaWYgKCFvcHRpb25zLmxhYmVsLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgbGFiZWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgIGlmICghb3B0aW9ucy5kZXNjcmlwdGlvbi50cmltKCkpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkLlwiKTtcbiAgICBpZiAob3B0aW9ucy5iYWxhbmNlLmVuZW15SHAgPD0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgYmFsYW5jZSBlbmVteUhwIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm8uXCIpO1xuICAgIGlmIChvcHRpb25zLmJhbGFuY2UuZW5lbXlTcGVlZCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUcmFjayBiYWxhbmNlIGVuZW15U3BlZWQgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby5cIik7XG4gICAgdGhpcy52YWxpZGF0ZUNvbHVtbihvcHRpb25zLnBsYXllclN0YXJ0Q29sdW1uID8/IGMubGVmdC5taWQsIFwicGxheWVyU3RhcnRDb2x1bW5cIiwgMSk7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwiZW5lbXlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3ZWFwb24oaWQ6IFRyYWNrV2VhcG9uUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVdlYXBvbklkKGlkKSwgb3B0aW9ucywgdGhpcy5jdXJzb3IsIFwid2VhcG9uXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcGlja3VwKGlkOiBUcmFja1BpY2t1cFJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVQaWNrdXBJZChpZCksIG9wdGlvbnMsIHRoaXMuY3Vyc29yLCBcInBpY2t1cFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkdmFuY2VSb3dzKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIocm93cywgXCJhZHZhbmNlUm93cyByb3dzXCIpO1xuICAgIHRoaXMuY3Vyc29yICs9IHJvd3M7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXNwaXRlKHJvd3M6IG51bWJlcik6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmFkdmFuY2VSb3dzKHJvd3MpO1xuICB9XG5cbiAgc2VjdGlvbihuYW1lOiBzdHJpbmcsIHJvd3M6IG51bWJlciwgYnVpbGQ6IChzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyKSA9PiB2b2lkKTogdGhpcyB7XG4gICAgaWYgKCFuYW1lLnRyaW0oKSkgdGhyb3cgbmV3IEVycm9yKFwiVHJhY2sgc2VjdGlvbiBuYW1lIGlzIHJlcXVpcmVkLlwiKTtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKHJvd3MsIGBUcmFjayBzZWN0aW9uIFwiJHtuYW1lfVwiIHJvd3NgKTtcbiAgICBjb25zdCBzZWN0aW9uID0gbmV3IFRyYWNrU2VjdGlvbkJ1aWxkZXJDb3JlKHRoaXMsIG5hbWUsIHRoaXMuY3Vyc29yLCByb3dzKTtcbiAgICBidWlsZChzZWN0aW9uKTtcbiAgICB0aGlzLmN1cnNvciArPSByb3dzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJlc3N1cmUocm93czogbnVtYmVyLCBidWlsZDogKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIpID0+IHZvaWQpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uKFwicHJlc3N1cmVcIiwgcm93cywgYnVpbGQpO1xuICB9XG5cbiAgcmVidWlsZChyb3dzOiBudW1iZXIsIGJ1aWxkOiAoc2VjdGlvbjogVHJhY2tTZWN0aW9uQnVpbGRlcikgPT4gdm9pZCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLnNlY3Rpb24oXCJyZWJ1aWxkXCIsIHJvd3MsIGJ1aWxkKTtcbiAgfVxuXG4gIGxpbmUoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuYWRkTGluZSh0aGlzLmN1cnNvciwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgXCJsaW5lXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWx0ZXJuYXRpbmcoZW5lbXlJZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tBbHRlcm5hdGluZ09wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZEFsdGVybmF0aW5nKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcImFsdGVybmF0aW5nXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5hZGRXYWxsKHRoaXMuY3Vyc29yLCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBcIndhbGxcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmFkZERyaXAodGhpcy5jdXJzb3IsIG5vcm1hbGl6ZUVuZW15SWQoZW5lbXlJZCksIG9wdGlvbnMsIFwiZHJpcFwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNlY3Rpb25FbmVteShiYXNlUm93OiBudW1iZXIsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCBpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVFbmVteUlkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIGVuZW15YCk7XG4gIH1cblxuICBhZGRTZWN0aW9uV2VhcG9uKGJhc2VSb3c6IG51bWJlciwgc2VjdGlvbk5hbWU6IHN0cmluZywgcm93T2Zmc2V0OiBudW1iZXIsIGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZShub3JtYWxpemVXZWFwb25JZChpZCksIG9wdGlvbnMsIGJhc2VSb3cgKyByb3dPZmZzZXQsIGBzZWN0aW9uIFwiJHtzZWN0aW9uTmFtZX1cIiB3ZWFwb25gKTtcbiAgfVxuXG4gIGFkZFNlY3Rpb25QaWNrdXAoYmFzZVJvdzogbnVtYmVyLCBzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgaWQ6IFRyYWNrUGlja3VwUmVmLCBvcHRpb25zOiBUcmFja1BsYWNlbWVudE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlKG5vcm1hbGl6ZVBpY2t1cElkKGlkKSwgb3B0aW9ucywgYmFzZVJvdyArIHJvd09mZnNldCwgYHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBpY2t1cGApO1xuICB9XG5cbiAgYWRkTGluZShiYXNlUm93OiBudW1iZXIsIGVuZW15SWQ6IHN0cmluZywgb3B0aW9uczogVHJhY2tMaW5lT3B0aW9ucywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHJlcXVpcmVQb3NpdGl2ZUludGVnZXIob3B0aW9ucy5jb3VudCwgYCR7bGFiZWx9IGNvdW50YCk7XG4gICAgY29uc3QgZ2FwID0gb3B0aW9ucy5nYXAgPz8gMDtcbiAgICByZXF1aXJlSW50ZWdlcihnYXAsIGAke2xhYmVsfSBnYXBgKTtcbiAgICBpZiAoZ2FwIDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBnYXAgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmNvdW50OyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIGluZGV4ICogKGdhcCArIDEpLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkQWx0ZXJuYXRpbmcoYmFzZVJvdzogbnVtYmVyLCBlbmVteUlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrQWx0ZXJuYXRpbmdPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmNvdW50LCBgJHtsYWJlbH0gY291bnRgKTtcbiAgICBpZiAob3B0aW9ucy5jb2x1bW5zLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSBjb2x1bW5zIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgY29sdW1uLmApO1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgcmVxdWlyZUludGVnZXIoZ2FwLCBgJHtsYWJlbH0gZ2FwYCk7XG4gICAgaWYgKGdhcCA8IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gZ2FwIGNhbm5vdCBiZSBuZWdhdGl2ZS5gKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5jb3VudDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gb3B0aW9ucy5jb2x1bW5zW2luZGV4ICUgb3B0aW9ucy5jb2x1bW5zLmxlbmd0aF07XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uLCBzcGVlZDogb3B0aW9ucy5zcGVlZCB9LCBiYXNlUm93ICsgaW5kZXggKiAoZ2FwICsgMSksIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRXYWxsKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG9wdGlvbnMuY29sdW1ucy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gY29sdW1ucyBtdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGNvbHVtbi5gKTtcbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBvcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucGxhY2UoZW5lbXlJZCwgeyBjb2x1bW4sIHNwZWVkOiBvcHRpb25zLnNwZWVkIH0sIGJhc2VSb3csIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGREcmlwKGJhc2VSb3c6IG51bWJlciwgZW5lbXlJZDogc3RyaW5nLCBvcHRpb25zOiBUcmFja0RyaXBPcHRpb25zLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLnJvd3MsIGAke2xhYmVsfSByb3dzYCk7XG4gICAgcmVxdWlyZVBvc2l0aXZlSW50ZWdlcihvcHRpb25zLmV2ZXJ5LCBgJHtsYWJlbH0gZXZlcnlgKTtcbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBvcHRpb25zLnJvd3M7IG9mZnNldCArPSBvcHRpb25zLmV2ZXJ5KSB7XG4gICAgICB0aGlzLnBsYWNlKGVuZW15SWQsIHsgY29sdW1uOiBvcHRpb25zLmNvbHVtbiwgc3BlZWQ6IG9wdGlvbnMuc3BlZWQgfSwgYmFzZVJvdyArIG9mZnNldCwgbGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCk6IFRyYWNrTWVtYmVyIHtcbiAgICBjb25zdCBwbGF5ZXJTdGFydENvbHVtbiA9IHRoaXMub3B0aW9ucy5wbGF5ZXJTdGFydENvbHVtbiA/PyBjLmxlZnQubWlkO1xuICAgIGNvbnN0IG1heFBsYWNlbWVudFJvdyA9IHRoaXMucGxhY2VtZW50cy5yZWR1Y2UoKG1heCwgaXRlbSkgPT4gTWF0aC5tYXgobWF4LCBpdGVtLnJvdyksIDApO1xuICAgIGNvbnN0IHJvd0NvdW50ID0gTWF0aC5tYXgodGhpcy5jdXJzb3IsIG1heFBsYWNlbWVudFJvdyArIDEsIDEpO1xuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dDb3VudCB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmxhbmVXaWR0aCAqIDIgfSwgKCkgPT4gZW1wdHlTeW1ib2wpKTtcbiAgICBjb25zdCBvY2N1cGllZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd0NvdW50IH0sICgpID0+IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCkpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBNYXA8c3RyaW5nLCB7IGlkOiBzdHJpbmc7IHNwZWVkOiBudW1iZXIgfT4oKTtcbiAgICBsZWdlbmQuc2V0KGVtcHR5U3ltYm9sLCB7IGlkOiBcImVtcHR5XCIsIHNwZWVkOiAxIH0pO1xuICAgIGxlZ2VuZC5zZXQocGxheWVyU3ltYm9sLCB7IGlkOiBcInBsYXllci5zdGFydFwiLCBzcGVlZDogMSB9KTtcbiAgICBjb25zdCB1c2VkU3ltYm9scyA9IG5ldyBTZXQoW2VtcHR5U3ltYm9sLCBwbGF5ZXJTeW1ib2xdKTtcbiAgICBjb25zdCBzeW1ib2xCeUVudGl0eSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSB0aGlzLmNlbGxzRm9yKHBsYXllclN0YXJ0Q29sdW1uLCAxKTtcbiAgICBmb3IgKGNvbnN0IGNlbGwgb2YgcGxheWVyQ2VsbHMpIG9jY3VwaWVkWzBdLnNldChjZWxsLmdsb2JhbENvbHVtbiwgXCJwbGF5ZXIuc3RhcnRcIik7XG4gICAgcm93c1swXVtwbGF5ZXJTdGFydENvbHVtbl0gPSBwbGF5ZXJTeW1ib2w7XG5cbiAgICBmb3IgKGNvbnN0IHBsYWNlbWVudCBvZiB0aGlzLnBsYWNlbWVudHMpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuc3ltYm9sRm9yKHBsYWNlbWVudCwgdXNlZFN5bWJvbHMsIHN5bWJvbEJ5RW50aXR5KTtcbiAgICAgIGxlZ2VuZC5zZXQoc3ltYm9sLCB7IGlkOiBwbGFjZW1lbnQuaWQsIHNwZWVkOiBwbGFjZW1lbnQuc3BlZWQgfSk7XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGhpcy5jZWxsc0ZvcihwbGFjZW1lbnQuY29sdW1uLCBwbGFjZW1lbnQuc3BhbikpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvY2N1cGllZFtwbGFjZW1lbnQucm93XS5nZXQoY2VsbC5nbG9iYWxDb2x1bW4pO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHBsYWNlbWVudCBvdmVybGFwIGF0IHJvdyAke3BsYWNlbWVudC5yb3d9LCBjb2x1bW4gJHtjZWxsLmdsb2JhbENvbHVtbn0uIEV4aXN0aW5nIGlkIFwiJHtleGlzdGluZ31cIiwgbmV3IGlkIFwiJHtwbGFjZW1lbnQuaWR9XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgb2NjdXBpZWRbcGxhY2VtZW50LnJvd10uc2V0KGNlbGwuZ2xvYmFsQ29sdW1uLCBwbGFjZW1lbnQuaWQpO1xuICAgICAgfVxuICAgICAgcm93c1twbGFjZW1lbnQucm93XVtwbGFjZW1lbnQuY29sdW1uXSA9IHN5bWJvbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0ge1xuICAgICAgbGF5b3V0OiBgXFxuJHtyb3dzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcChyb3cgPT4gYCR7cm93LnNsaWNlKDAsIHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfSB8ICR7cm93LnNsaWNlKHRoaXMubGFuZVdpZHRoKS5qb2luKFwiXCIpfWApLmpvaW4oXCJcXG5cIil9XFxuYCxcbiAgICAgIGxlZ2VuZDogT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5sZWdlbmQuZW50cmllcygpXS5tYXAoKFtzeW1ib2wsIGVudHJ5XSkgPT4gW1xuICAgICAgICBzeW1ib2wsXG4gICAgICAgIGVudHJ5LnNwZWVkID09PSAxID8geyBpZDogZW50cnkuaWQgfSA6IHsgaWQ6IGVudHJ5LmlkLCBzcGVlZDogZW50cnkuc3BlZWQgfSxcbiAgICAgIF0pKSxcbiAgICAgIGJhbGFuY2U6IHRoaXMub3B0aW9ucy5iYWxhbmNlLFxuICAgIH07XG4gICAgcGFyc2VUcmFja0RlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnMubGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5vcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgZW52aXJvbm1lbnQ6IHRoaXMub3B0aW9ucy5lbnZpcm9ubWVudCxcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIHZhbGlkYXRlU2VjdGlvbk9mZnNldChzZWN0aW9uTmFtZTogc3RyaW5nLCByb3dPZmZzZXQ6IG51bWJlciwgcm93czogbnVtYmVyKTogdm9pZCB7XG4gICAgcmVxdWlyZUludGVnZXIocm93T2Zmc2V0LCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgcm93IG9mZnNldGApO1xuICAgIGlmIChyb3dPZmZzZXQgPCAwIHx8IHJvd09mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHJvdyBvZmZzZXQgJHtyb3dPZmZzZXR9IGlzIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVNlY3Rpb25TcGFuKHNlY3Rpb25OYW1lOiBzdHJpbmcsIHJvd09mZnNldDogbnVtYmVyLCByb3dzOiBudW1iZXIsIGNvdmVyZWRSb3dzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXF1aXJlUG9zaXRpdmVJbnRlZ2VyKGNvdmVyZWRSb3dzLCBgVHJhY2sgc2VjdGlvbiBcIiR7c2VjdGlvbk5hbWV9XCIgY292ZXJlZCByb3dzYCk7XG4gICAgdGhpcy52YWxpZGF0ZVNlY3Rpb25PZmZzZXQoc2VjdGlvbk5hbWUsIHJvd09mZnNldCwgcm93cyk7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9IHJvd09mZnNldCArIGNvdmVyZWRSb3dzIC0gMTtcbiAgICBpZiAobGFzdE9mZnNldCA+PSByb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyYWNrIHNlY3Rpb24gXCIke3NlY3Rpb25OYW1lfVwiIHBhdHRlcm4gcmVhY2hlcyByb3cgb2Zmc2V0ICR7bGFzdE9mZnNldH0sIG91dHNpZGUgdGhlIDAtJHtyb3dzIC0gMX0gc2VjdGlvbiByYW5nZS5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBsYWNlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucywgcm93OiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXF1aXJlSW50ZWdlcihyb3csIGAke2xhYmVsfSByb3dgKTtcbiAgICBpZiAocm93IDwgMCkgdGhyb3cgbmV3IEVycm9yKGAke2xhYmVsfSByb3cgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICAgIHZhbGlkYXRlQ2Fub25pY2FsSWQoaWQpO1xuICAgIGNvbnN0IHNwYW4gPSBzcGFuRm9yKGlkKTtcbiAgICB0aGlzLnZhbGlkYXRlQ29sdW1uKG9wdGlvbnMuY29sdW1uLCBgJHtsYWJlbH0gY29sdW1uYCwgc3Bhbik7XG4gICAgdGhpcy5wbGFjZW1lbnRzLnB1c2goe1xuICAgICAgcm93LFxuICAgICAgY29sdW1uOiBvcHRpb25zLmNvbHVtbixcbiAgICAgIGlkLFxuICAgICAgc3BlZWQ6IG5vcm1hbGl6ZVNwZWVkKG9wdGlvbnMuc3BlZWQsIGxhYmVsKSxcbiAgICAgIHNwYW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29sdW1uKGNvbHVtbjogVHJhY2tDb2x1bW4sIGxhYmVsOiBzdHJpbmcsIHNwYW46IG51bWJlcik6IHZvaWQge1xuICAgIHJlcXVpcmVJbnRlZ2VyKGNvbHVtbiwgbGFiZWwpO1xuICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmxhbmVXaWR0aCAqIDI7XG4gICAgaWYgKGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHRvdGFsV2lkdGgpIHRocm93IG5ldyBFcnJvcihgJHtsYWJlbH0gJHtjb2x1bW59IGlzIG91dHNpZGUgdGhlIDAtJHt0b3RhbFdpZHRoIC0gMX0gdHJhY2sgcmFuZ2UuYCk7XG4gICAgY29uc3Qgc2lkZUNvbHVtbiA9IGNvbHVtbiAlIHRoaXMubGFuZVdpZHRoO1xuICAgIGlmIChzaWRlQ29sdW1uICsgc3BhbiA+IHRoaXMubGFuZVdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bGFiZWx9ICR7Y29sdW1ufSBjYW5ub3QgZml0IGEgJHtzcGFufS1jb2x1bW4gZW50aXR5IGluc2lkZSBhICR7dGhpcy5sYW5lV2lkdGh9LWNvbHVtbiBsYW5lLmApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2VsbHNGb3IoY29sdW1uOiBudW1iZXIsIHNwYW46IG51bWJlcik6IEFycmF5PHsgZ2xvYmFsQ29sdW1uOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+ICh7IGdsb2JhbENvbHVtbjogY29sdW1uICsgb2Zmc2V0IH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgc3ltYm9sRm9yKHBsYWNlbWVudDogUGxhY2VtZW50LCB1c2VkU3ltYm9sczogU2V0PHN0cmluZz4sIHN5bWJvbEJ5RW50aXR5OiBNYXA8c3RyaW5nLCBzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXkgPSBgJHtwbGFjZW1lbnQuaWR9QCR7cGxhY2VtZW50LnNwZWVkfWA7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBzeW1ib2xCeUVudGl0eS5nZXQoa2V5KTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICBjb25zdCBwcmVmZXJyZWQgPSBwcmVmZXJyZWRTeW1ib2xzW3BsYWNlbWVudC5pZF07XG4gICAgY29uc3Qgc3ltYm9sID0gcHJlZmVycmVkICYmICF1c2VkU3ltYm9scy5oYXMocHJlZmVycmVkKVxuICAgICAgPyBwcmVmZXJyZWRcbiAgICAgIDogZmFsbGJhY2tTeW1ib2xzLmZpbmQoY2FuZGlkYXRlID0+ICF1c2VkU3ltYm9scy5oYXMoY2FuZGlkYXRlKSk7XG4gICAgaWYgKCFzeW1ib2wpIHRocm93IG5ldyBFcnJvcihcIlRyYWNrIGJ1aWxkZXIgcmFuIG91dCBvZiBvbmUtY2hhcmFjdGVyIGxlZ2VuZCBzeW1ib2xzLlwiKTtcbiAgICB1c2VkU3ltYm9scy5hZGQoc3ltYm9sKTtcbiAgICBzeW1ib2xCeUVudGl0eS5zZXQoa2V5LCBzeW1ib2wpO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbn1cblxuY2xhc3MgVHJhY2tTZWN0aW9uQnVpbGRlckNvcmUgaW1wbGVtZW50cyBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgcHJpdmF0ZSByb3dPZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBUcmFja0J1aWxkZXJDb3JlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVJvdzogbnVtYmVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm93czogbnVtYmVyLFxuICApIHt9XG5cbiAgYXQocm93T2Zmc2V0OiBudW1iZXIpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25PZmZzZXQodGhpcy5uYW1lLCByb3dPZmZzZXQsIHRoaXMucm93cyk7XG4gICAgdGhpcy5yb3dPZmZzZXQgPSByb3dPZmZzZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmVteShpZDogVHJhY2tFbmVteVJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbkVuZW15KHRoaXMuYmFzZVJvdywgdGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgaWQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2VhcG9uKGlkOiBUcmFja1dlYXBvblJlZiwgb3B0aW9uczogVHJhY2tQbGFjZW1lbnRPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkU2VjdGlvbldlYXBvbih0aGlzLmJhc2VSb3csIHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIGlkLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBpY2t1cChpZDogVHJhY2tQaWNrdXBSZWYsIG9wdGlvbnM6IFRyYWNrUGxhY2VtZW50T3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIHRoaXMucGFyZW50LmFkZFNlY3Rpb25QaWNrdXAodGhpcy5iYXNlUm93LCB0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCBpZCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaW5lKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrTGluZU9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICBjb25zdCBnYXAgPSBvcHRpb25zLmdhcCA/PyAwO1xuICAgIHRoaXMucGFyZW50LnZhbGlkYXRlU2VjdGlvblNwYW4odGhpcy5uYW1lLCB0aGlzLnJvd09mZnNldCwgdGhpcy5yb3dzLCAob3B0aW9ucy5jb3VudCAtIDEpICogKGdhcCArIDEpICsgMSk7XG4gICAgdGhpcy5wYXJlbnQuYWRkTGluZSh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBsaW5lYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhbHRlcm5hdGluZyhlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja0FsdGVybmF0aW5nT3B0aW9ucyk6IFRyYWNrU2VjdGlvbkJ1aWxkZXIge1xuICAgIGNvbnN0IGdhcCA9IG9wdGlvbnMuZ2FwID8/IDA7XG4gICAgdGhpcy5wYXJlbnQudmFsaWRhdGVTZWN0aW9uU3Bhbih0aGlzLm5hbWUsIHRoaXMucm93T2Zmc2V0LCB0aGlzLnJvd3MsIChvcHRpb25zLmNvdW50IC0gMSkgKiAoZ2FwICsgMSkgKyAxKTtcbiAgICB0aGlzLnBhcmVudC5hZGRBbHRlcm5hdGluZyh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiBhbHRlcm5hdGluZ2ApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FsbChlbmVteUlkOiBUcmFja0VuZW15UmVmLCBvcHRpb25zOiBUcmFja1dhbGxPcHRpb25zKTogVHJhY2tTZWN0aW9uQnVpbGRlciB7XG4gICAgdGhpcy5wYXJlbnQuYWRkV2FsbCh0aGlzLmJhc2VSb3cgKyB0aGlzLnJvd09mZnNldCwgbm9ybWFsaXplRW5lbXlJZChlbmVteUlkKSwgb3B0aW9ucywgYHNlY3Rpb24gXCIke3RoaXMubmFtZX1cIiB3YWxsYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmlwKGVuZW15SWQ6IFRyYWNrRW5lbXlSZWYsIG9wdGlvbnM6IFRyYWNrRHJpcE9wdGlvbnMpOiBUcmFja1NlY3Rpb25CdWlsZGVyIHtcbiAgICB0aGlzLnBhcmVudC52YWxpZGF0ZVNlY3Rpb25TcGFuKHRoaXMubmFtZSwgdGhpcy5yb3dPZmZzZXQsIHRoaXMucm93cywgb3B0aW9ucy5yb3dzKTtcbiAgICB0aGlzLnBhcmVudC5hZGREcmlwKHRoaXMuYmFzZVJvdyArIHRoaXMucm93T2Zmc2V0LCBub3JtYWxpemVFbmVteUlkKGVuZW15SWQpLCBvcHRpb25zLCBgc2VjdGlvbiBcIiR7dGhpcy5uYW1lfVwiIGRyaXBgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tCdWlsZGVyOiBUcmFja0J1aWxkZXJGYWN0b3J5ID0ge1xuICBjcmVhdGUob3B0aW9uczogVHJhY2tCdWlsZGVyT3B0aW9ucyk6IFRyYWNrQnVpbGRlciB7XG4gICAgcmV0dXJuIG5ldyBUcmFja0J1aWxkZXJDb3JlKG9wdGlvbnMpO1xuICB9LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IExhbmVSdW5uZXJTY2VuZUlkIH0gZnJvbSBcIkBqdXN0LXRoZS1nYW1lcy1wbGVhc2UvbmVvbi1mYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IFRyYWNrRmFtaWx5TWVtYmVyIH0gZnJvbSBcIi4uL1RyYWNrRGVmaW5pdGlvblwiO1xuXG5leHBvcnQgdHlwZSBUcmFja1RoZW1lSWQgPSBcImd1blNjaG9vbFwiIHwgXCJndWFyZEJsYWRlc1wiIHwgXCJjcnlzdGFsU2llZ2VcIiB8IFwic3dhcm1CbG9vbVwiIHwgXCJtaXJyb3JBcnJheVwiO1xuZXhwb3J0IHR5cGUgVHJhY2tUaWVyID0gMSB8IDIgfCAzO1xuZXhwb3J0IHR5cGUgVHJhY2tOb2RlU2hhcGVJZCA9IFwiaHVudGVyLWV5ZVwiIHwgXCJicnVpc2VyLXByaXNtXCIgfCBcImVsaXRlLXN0YXJcIiB8IFwidHJpY2stdm9ydGV4XCIgfCBcInRhbmstcmVhY3RvclwiIHwgXCJzcGlrZS1sYW5jZVwiIHwgXCJodW50ZXItYm9sdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQ2F0YWxvZ0VudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0ZhbWlseUNhdGFsb2dFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNjZW5lSWQ6IExhbmVSdW5uZXJTY2VuZUlkO1xuICBhY2NlbnQ6IHN0cmluZztcbiAgdHJhY2tJZHM6IHJlYWRvbmx5IFRyYWNrQ2F0YWxvZ0lkW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tUaGVtZUNhdGFsb2dFbnRyeSB7XG4gIGlkOiBUcmFja1RoZW1lSWQ7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5vZGVTaGFwZUlkczogcmVhZG9ubHkgVHJhY2tOb2RlU2hhcGVJZFtdO1xufVxuXG5leHBvcnQgY29uc3QgdHJhY2tUaGVtZUNhdGFsb2cgPSB7XG4gIGd1blNjaG9vbDoge1xuICAgIGlkOiBcImd1blNjaG9vbFwiLFxuICAgIGxhYmVsOiBcIkd1biBTY2hvb2xcIixcbiAgICBub2RlU2hhcGVJZHM6IFtcImh1bnRlci1leWVcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG4gIGd1YXJkQmxhZGVzOiB7XG4gICAgaWQ6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICBsYWJlbDogXCJHdWFyZCBCbGFkZXNcIixcbiAgICBub2RlU2hhcGVJZHM6IFtcImVsaXRlLXN0YXJcIiwgXCJzcGlrZS1sYW5jZVwiLCBcImh1bnRlci1ib2x0XCJdLFxuICB9LFxuICBjcnlzdGFsU2llZ2U6IHtcbiAgICBpZDogXCJjcnlzdGFsU2llZ2VcIixcbiAgICBsYWJlbDogXCJDcnlzdGFsIFNpZWdlXCIsXG4gICAgbm9kZVNoYXBlSWRzOiBbXCJ0YW5rLXJlYWN0b3JcIiwgXCJicnVpc2VyLXByaXNtXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG4gIHN3YXJtQmxvb206IHtcbiAgICBpZDogXCJzd2FybUJsb29tXCIsXG4gICAgbGFiZWw6IFwiU3dhcm0gQmxvb21cIixcbiAgICBub2RlU2hhcGVJZHM6IFtcInRyaWNrLXZvcnRleFwiLCBcImh1bnRlci1leWVcIiwgXCJodW50ZXItYm9sdFwiXSxcbiAgfSxcbiAgbWlycm9yQXJyYXk6IHtcbiAgICBpZDogXCJtaXJyb3JBcnJheVwiLFxuICAgIGxhYmVsOiBcIk1pcnJvciBBcnJheVwiLFxuICAgIG5vZGVTaGFwZUlkczogW1wic3Bpa2UtbGFuY2VcIiwgXCJlbGl0ZS1zdGFyXCIsIFwiaHVudGVyLWJvbHRcIl0sXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8VHJhY2tUaGVtZUlkLCBUcmFja1RoZW1lQ2F0YWxvZ0VudHJ5PjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQ2F0YWxvZyA9IHtcbiAgXCJuZW9uLW5lYnVsYWUtMVwiOiB7XG4gICAgaWQ6IFwibmVvbi1uZWJ1bGFlLTFcIixcbiAgICBsYWJlbDogXCJGaXJzdCBHbG93XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBndW4tZm9yd2FyZCBOZW9uIE5lYnVsYWUgb3BlbmVyIHdpdGggY2xlYXIgcmVidWlsZCBzaGVsdmVzIGFuZCBvbmx5IGEgZmV3IHNoaWVsZCBzYWZldHkgbmV0cy5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJuZW9uLW5lYnVsYWUtMlwiOiB7XG4gICAgaWQ6IFwibmVvbi1uZWJ1bGFlLTJcIixcbiAgICBsYWJlbDogXCJEcmlmdCBMZXNzb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxvbmdlciBOZW9uIE5lYnVsYWUgZ3VuIGxlc3NvbiB0aGF0IGFkZHMgd2luZyBwcmVzc3VyZSwgc3Ryb25nZXIgZmlyZWFybSBjaG9pY2VzLCBhbmQgc3BhcnNlIHNoaWVsZCByZWxpZWYuXCIsXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICAgIHRoZW1lOiBcImd1blNjaG9vbFwiLFxuICAgIHRpZXI6IDIsXG4gIH0sXG4gIFwibmVvbi1uZWJ1bGFlLTNcIjoge1xuICAgIGlkOiBcIm5lb24tbmVidWxhZS0zXCIsXG4gICAgbGFiZWw6IFwiTmVidWxhIEdhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgTmVvbiBOZWJ1bGFlIGd1biBmaW5hbGUgbGF5ZXJzIGhlYXZpZXIgZmlyZWFybXMsIHRhbmtzLCBhbmQgc3VzdGFpbmVkIGxhbmUgcmVhZGluZyB3aXRob3V0IGxlYW5pbmcgb24gc3BlZWQgY2hhbmdlcy5cIixcbiAgICBzY2VuZUlkOiBcIm5lb25IYWxsXCIsXG4gICAgdGhlbWU6IFwiZ3VuU2Nob29sXCIsXG4gICAgdGllcjogMyxcbiAgfSxcbiAgXCJhdXJvcmEtMVwiOiB7XG4gICAgaWQ6IFwiYXVyb3JhLTFcIixcbiAgICBsYWJlbDogXCJTa3licmVha1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIEF1cm9yYSBvcGVuZXIgZm9jdXNlZCBvbiBzaGllbGRzLCBzaG9ydCBzd29yZCByZWFkcywgYW5kIHBhdGllbnQgY2xvc2UtcmFuZ2UgY2xlYW51cC5cIixcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICAgIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgdGllcjogMSxcbiAgfSxcbiAgXCJhdXJvcmEtMlwiOiB7XG4gICAgaWQ6IFwiYXVyb3JhLTJcIixcbiAgICBsYWJlbDogXCJSaWJib24gU3Rvcm1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdXJvcmEgcHJlc3N1cmUgZXhwYW5kcyBpbnRvIGFsdGVybmF0aW5nIHNoaWVsZCByZWJ1aWxkcywgd2lkZXIgc3dvcmQgY2hvaWNlcywgYW5kIGNsdXN0ZXJlZCBjbG9zZS1yYW5nZSB0aHJlYXRzLlwiLFxuICAgIHNjZW5lSWQ6IFwiYXVyb3JhXCIsXG4gICAgdGhlbWU6IFwiZ3VhcmRCbGFkZXNcIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcImF1cm9yYS0zXCI6IHtcbiAgICBpZDogXCJhdXJvcmEtM1wiLFxuICAgIGxhYmVsOiBcIk1hZ25ldGljIERhd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgQXVyb3JhIGZpbmFsZSBhc2tzIGZvciBkZWxpYmVyYXRlIHNoaWVsZCB0aW1pbmcgYW5kIHN3b3JkIHNlbGVjdGlvbiBhZ2FpbnN0IGxvbmcsIHJlYWRhYmxlIHRocmVhdCB3YXZlcy5cIixcbiAgICBzY2VuZUlkOiBcImF1cm9yYVwiLFxuICAgIHRoZW1lOiBcImd1YXJkQmxhZGVzXCIsXG4gICAgdGllcjogMyxcbiAgfSxcbiAgXCJjcnlzdGFsLWZvcmdlLTFcIjoge1xuICAgIGlkOiBcImNyeXN0YWwtZm9yZ2UtMVwiLFxuICAgIGxhYmVsOiBcIlByaXNtIElnbml0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBDcnlzdGFsIEZvcmdlIG9wZW5lciBidWlsdCBhcm91bmQgYnVyc3QgZmlyZSwgZ2xhc3MgZGVjb3lzLCBhbmQgZWFybHkgaGVhdnktdGhyZWF0IHJlaGVhcnNhbC5cIixcbiAgICBzY2VuZUlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIHRoZW1lOiBcImNyeXN0YWxTaWVnZVwiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwiY3J5c3RhbC1mb3JnZS0yXCI6IHtcbiAgICBpZDogXCJjcnlzdGFsLWZvcmdlLTJcIixcbiAgICBsYWJlbDogXCJGYWNldCBSdW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDcnlzdGFsIEZvcmdlIGRlbnNpdHkgc2hhcnBlbnMgd2l0aCBoZWF2aWVyIGd1bnMsIHN0dXJkaWVyIHNoaWVsZHMsIGFuZCB0YW5rIGJyZWFrcyBmcmFtZWQgYnkgZ2xhc3MgZGVjb3lzLlwiLFxuICAgIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJjcnlzdGFsLWZvcmdlLTNcIjoge1xuICAgIGlkOiBcImNyeXN0YWwtZm9yZ2UtM1wiLFxuICAgIGxhYmVsOiBcIkdsYXNzIEhhbW1lclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBDcnlzdGFsIEZvcmdlIGZpbmFsZSBjb21taXRzIHRvIGhlYXZ5IHdlYXBvbiBwYXlvZmZzLCByZXBlYXRlZCB0YW5rIGxhbmVzLCBhbmQgcHJpc21hdGljIGRlY295IHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwiY3J5c3RhbEZvcmdlXCIsXG4gICAgdGhlbWU6IFwiY3J5c3RhbFNpZWdlXCIsXG4gICAgdGllcjogMyxcbiAgfSxcbiAgXCJ2b2lkLWdhcmRlbi0xXCI6IHtcbiAgICBpZDogXCJ2b2lkLWdhcmRlbi0xXCIsXG4gICAgbGFiZWw6IFwiQmxvb20gU2lnbmFsXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBWb2lkIEdhcmRlbiBvcGVuZXIgYWJvdXQgZ3Jvd2luZyB0aGUgc3F1YWQgZWFybHkgYW5kIHN1c3RhaW5pbmcgY2FsbSBjcm9zcy1sYW5lIGJsb29tIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgICB0aWVyOiAxLFxuICB9LFxuICBcInZvaWQtZ2FyZGVuLTJcIjoge1xuICAgIGlkOiBcInZvaWQtZ2FyZGVuLTJcIixcbiAgICBsYWJlbDogXCJSb290IExhdHRpY2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJWb2lkIEdhcmRlbiBhZGRzIGRlbnNlciBzcXVhZCBncm93dGggd2luZG93cywgc3BsaXQgd2VhcG9uIHN1cHBvcnQsIGFuZCBzbG93LWJsb29taW5nIHBhaXJlZCBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgICB0aGVtZTogXCJzd2FybUJsb29tXCIsXG4gICAgdGllcjogMixcbiAgfSxcbiAgXCJ2b2lkLWdhcmRlbi0zXCI6IHtcbiAgICBpZDogXCJ2b2lkLWdhcmRlbi0zXCIsXG4gICAgbGFiZWw6IFwiTmlnaHQgT3JjaGFyZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBWb2lkIEdhcmRlbiBmaW5hbGUgbGVhbnMgaW50byBzcXVhZCByZWNvdmVyeSwgbGF5ZXJlZCBzdXBwb3J0IHBpY2t1cHMsIGFuZCBicm9hZCBvcmdhbmljIHByZXNzdXJlLlwiLFxuICAgIHNjZW5lSWQ6IFwidm9pZEdhcmRlblwiLFxuICAgIHRoZW1lOiBcInN3YXJtQmxvb21cIixcbiAgICB0aWVyOiAzLFxuICB9LFxuICBcInNvbGFyLWFycmF5LTFcIjoge1xuICAgIGlkOiBcInNvbGFyLWFycmF5LTFcIixcbiAgICBsYWJlbDogXCJQYW5lbCBEYXduXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBTb2xhciBBcnJheSBvcGVuZXIgd2l0aCBtaXJyb3JlZCByZWFkcywgc3BsaXQtbGFuZSB3ZWFwb24gdGltaW5nLCBhbmQgYnJpZ2h0IGJ1dCBtZWFzdXJlZCBwcmVzc3VyZS5cIixcbiAgICBzY2VuZUlkOiBcInNvbGFyQXJyYXlcIixcbiAgICB0aGVtZTogXCJtaXJyb3JBcnJheVwiLFxuICAgIHRpZXI6IDEsXG4gIH0sXG4gIFwic29sYXItYXJyYXktMlwiOiB7XG4gICAgaWQ6IFwic29sYXItYXJyYXktMlwiLFxuICAgIGxhYmVsOiBcIkhlbGlvc3RhdCBSdXNoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29sYXIgQXJyYXkgcHJlc3N1cmUgZ3Jvd3MgdGhyb3VnaCBtaXJyb3JlZCB3YWxscywgcHJlY2lzaW9uIHJlYnVpbGRzLCBhbmQgYWx0ZXJuYXRpbmcgb3V0ZXItbGFuZSBzdXJnZXMuXCIsXG4gICAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gICAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgICB0aWVyOiAyLFxuICB9LFxuICBcInNvbGFyLWFycmF5LTNcIjoge1xuICAgIGlkOiBcInNvbGFyLWFycmF5LTNcIixcbiAgICBsYWJlbDogXCJNaXJyb3IgWmVuaXRoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFNvbGFyIEFycmF5IGZpbmFsZSBtaXhlcyBtaXJyb3JlZCB0YW5rIGJyZWFrcywgc3BsaXQtZmlyZSByZWJ1aWxkcywgYW5kIGxvbmctZm9ybSBwcmVjaXNpb24gcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJzb2xhckFycmF5XCIsXG4gICAgdGhlbWU6IFwibWlycm9yQXJyYXlcIixcbiAgICB0aWVyOiAzLFxuICB9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgVHJhY2tDYXRhbG9nRW50cnk+O1xuXG5leHBvcnQgdHlwZSBUcmFja0NhdGFsb2dJZCA9IGtleW9mIHR5cGVvZiB0cmFja0NhdGFsb2c7XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseUNhdGFsb2cgPSB7XG4gIG5lb25OZWJ1bGFlOiB7XG4gICAgaWQ6IFwibmVvbk5lYnVsYWVcIixcbiAgICBsYWJlbDogXCJOZW9uIE5lYnVsYWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGxlYXJuaW5nIGFyYyBhYm91dCBsYW5lcywgcGlja3Vwcywgc2hpZWxkcywgYW5kIGNvbnRyb2xsZWQgcHJlc3N1cmUuXCIsXG4gICAgc2NlbmVJZDogXCJuZW9uSGFsbFwiLFxuICAgIGFjY2VudDogXCIjZmYzYmQ1XCIsXG4gICAgdHJhY2tJZHM6IFtcIm5lb24tbmVidWxhZS0xXCIsIFwibmVvbi1uZWJ1bGFlLTJcIiwgXCJuZW9uLW5lYnVsYWUtM1wiXSxcbiAgfSxcbiAgYXVyb3JhOiB7XG4gICAgaWQ6IFwiYXVyb3JhXCIsXG4gICAgbGFiZWw6IFwiQXVyb3JhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVuc2UgcGxhbmV0YXJ5IGFzc2F1bHRzIHdpdGggYnJpZ2h0ZXIgcmVjb3Zlcnkgd2luZG93cyBhbmQgc2hhcnBlciB0aHJlYXQgd2F2ZXMuXCIsXG4gICAgc2NlbmVJZDogXCJhdXJvcmFcIixcbiAgICBhY2NlbnQ6IFwiIzIwZWFmZlwiLFxuICAgIHRyYWNrSWRzOiBbXCJhdXJvcmEtMVwiLCBcImF1cm9yYS0yXCIsIFwiYXVyb3JhLTNcIl0sXG4gIH0sXG4gIGNyeXN0YWxGb3JnZToge1xuICAgIGlkOiBcImNyeXN0YWxGb3JnZVwiLFxuICAgIGxhYmVsOiBcIkNyeXN0YWwgRm9yZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmlzbWF0aWMgZmFjdG9yeSBsYW5lcyB3aXRoIHNoYXJwIHByZXNzdXJlLCBnbGFzcyBkZWNveXMsIGFuZCBoZWF2eSBjcnlzdGFsbGluZSBicmVha3MuXCIsXG4gICAgc2NlbmVJZDogXCJjcnlzdGFsRm9yZ2VcIixcbiAgICBhY2NlbnQ6IFwiIzliNDJmZlwiLFxuICAgIHRyYWNrSWRzOiBbXCJjcnlzdGFsLWZvcmdlLTFcIiwgXCJjcnlzdGFsLWZvcmdlLTJcIiwgXCJjcnlzdGFsLWZvcmdlLTNcIl0sXG4gIH0sXG4gIHZvaWRHYXJkZW46IHtcbiAgICBpZDogXCJ2b2lkR2FyZGVuXCIsXG4gICAgbGFiZWw6IFwiVm9pZCBHYXJkZW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJCaW9sdW1pbmVzY2VudCBuaWdodCBsYW5lcyB3aXRoIHNwYXJzZSBibG9vbXMsIGRlY295cywgYW5kIGNvbnRyb2xsZWQgcmVjb3ZlcnkgcG9ja2V0cy5cIixcbiAgICBzY2VuZUlkOiBcInZvaWRHYXJkZW5cIixcbiAgICBhY2NlbnQ6IFwiIzRiODZmZlwiLFxuICAgIHRyYWNrSWRzOiBbXCJ2b2lkLWdhcmRlbi0xXCIsIFwidm9pZC1nYXJkZW4tMlwiLCBcInZvaWQtZ2FyZGVuLTNcIl0sXG4gIH0sXG4gIHNvbGFyQXJyYXk6IHtcbiAgICBpZDogXCJzb2xhckFycmF5XCIsXG4gICAgbGFiZWw6IFwiU29sYXIgQXJyYXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCcmlnaHQgb3JiaXRhbCBsYW5lcyB3aXRoIG1pcnJvcmVkIHdhbGxzLCBmYXN0IG91dGVyIHN1cmdlcywgYW5kIGRlY2lzaXZlIGhlYXZ5IHRvb2xzLlwiLFxuICAgIHNjZW5lSWQ6IFwic29sYXJBcnJheVwiLFxuICAgIGFjY2VudDogXCIjZmZiMjNhXCIsXG4gICAgdHJhY2tJZHM6IFtcInNvbGFyLWFycmF5LTFcIiwgXCJzb2xhci1hcnJheS0yXCIsIFwic29sYXItYXJyYXktM1wiXSxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrRmFtaWx5Q2F0YWxvZ0VudHJ5PjtcblxuZXhwb3J0IHR5cGUgVHJhY2tGYW1pbHlDYXRhbG9nSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHlDYXRhbG9nO1xuXG5leHBvcnQgY29uc3QgdHJhY2tGYW1pbGllc0Zyb21DYXRhbG9nID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBPYmplY3QuZW50cmllcyh0cmFja0ZhbWlseUNhdGFsb2cpLm1hcCgoW2lkLCBmYW1pbHldKSA9PiBbXG4gICAgaWQsXG4gICAge1xuICAgICAgbGFiZWw6IGZhbWlseS5sYWJlbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBmYW1pbHkuZGVzY3JpcHRpb24sXG4gICAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBmYW1pbHkuc2NlbmVJZCB9LFxuICAgICAgdHJhY2tJZHM6IGZhbWlseS50cmFja0lkcyxcbiAgICB9LFxuICBdKSxcbikgYXMgdW5rbm93biBhcyB7IHJlYWRvbmx5IFtGYW1pbHlJZCBpbiBUcmFja0ZhbWlseUNhdGFsb2dJZF06IFRyYWNrRmFtaWx5TWVtYmVyPFRyYWNrQ2F0YWxvZ0lkPiB9O1xuIiwgImltcG9ydCB0eXBlIHsgTGFuZVJ1bm5lclNjZW5lSWQgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IGd1bkZhbWlseSB9IGZyb20gXCIuLi9HdW5GYW1pbHlcIjtcbmltcG9ydCB7IGxpZ2h0bmluZ0ZhbWlseSB9IGZyb20gXCIuLi9MaWdodG5pbmdGYW1pbHlcIjtcbmltcG9ydCB7IG11bHRpcGxpZXJGYW1pbHkgfSBmcm9tIFwiLi4vTXVsdGlwbGllckZhbWlseVwiO1xuaW1wb3J0IHsgb3JiRmFtaWx5LCB0eXBlIE9yYklkIH0gZnJvbSBcIi4uL09yYkZhbWlseVwiO1xuaW1wb3J0IHsgc2hpZWxkRmFtaWx5IH0gZnJvbSBcIi4uL1NoaWVsZEZhbWlseVwiO1xuaW1wb3J0IHsgc3dvcmRGYW1pbHksIHR5cGUgU3dvcmRNZW1iZXIgfSBmcm9tIFwiLi4vU3dvcmRGYW1pbHlcIjtcbmltcG9ydCB7IGMsIHRyYWNrQnVpbGRlciwgdHlwZSBUcmFja0J1aWxkZXIsIHR5cGUgVHJhY2tDb2x1bW4sIHR5cGUgVHJhY2tFbmVteVJlZiwgdHlwZSBUcmFja1NlY3Rpb25CdWlsZGVyIH0gZnJvbSBcIi4uL1RyYWNrQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBUcmFja01lbWJlciB9IGZyb20gXCIuLi9UcmFja0RlZmluaXRpb25cIjtcbmltcG9ydCB7IHRyYWNrQ2F0YWxvZywgdHlwZSBUcmFja0NhdGFsb2dJZCwgdHlwZSBUcmFja1RoZW1lSWQsIHR5cGUgVHJhY2tUaWVyIH0gZnJvbSBcIi4vVHJhY2tDYXRhbG9nXCI7XG5cbmV4cG9ydCB0eXBlIEpvdXJuZXlCZWF0S2luZCA9IFwiaW50cm9cIiB8IFwicmFtcFwiIHwgXCJsZXNzb25cIiB8IFwicHJlc3N1cmVcIiB8IFwicmVzdFwiIHwgXCJyZWJ1aWxkXCIgfCBcImNoYWxsZW5nZVwiIHwgXCJmaW5hbGVcIjtcbmV4cG9ydCB0eXBlIFByZXNzdXJlTGV2ZWwgPSBcImxvd1wiIHwgXCJtZWRpdW1cIiB8IFwiaGlnaFwiIHwgXCJwZWFrXCI7XG5leHBvcnQgdHlwZSBQcmVzc3VyZVN0eWxlID0gXCJjZW50ZXJBbHRlcm5hdGluZ1wiIHwgXCJvdXRlckFsdGVybmF0aW5nXCIgfCBcImxhbmVMaW5lXCIgfCBcIm1pcnJvcmVkV2FsbHNcIiB8IFwid2lkZVN3ZWVwXCIgfCBcInRhbmtCcmVha1wiO1xuZXhwb3J0IHR5cGUgUGlja3VwUm9sZSA9IFwicHJpbWFyeVwiIHwgXCJzdXBwb3J0XCIgfCBcImNsb3NlUmFuZ2VcIiB8IFwidXBncmFkZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpvdXJuZXlCZWF0UmVjaXBlIHtcbiAga2luZDogSm91cm5leUJlYXRLaW5kO1xuICBwcmVzc3VyZT86IFByZXNzdXJlTGV2ZWw7XG4gIHJvd3M/OiBudW1iZXI7XG4gIHBpY2t1cFJvbGVzPzogcmVhZG9ubHkgUGlja3VwUm9sZVtdO1xuICBzdHlsZXM/OiByZWFkb25seSBQcmVzc3VyZVN0eWxlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tSZWNpcGUge1xuICBnb2FsczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHNlZWQ6IHN0cmluZztcbiAgam91cm5leTogcmVhZG9ubHkgSm91cm5leUJlYXRSZWNpcGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYW1pbHlSZWNpcGUge1xuICB0aGVtZTogVHJhY2tUaGVtZUlkO1xuICBwcmVmZXJyZWRXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc3VwcG9ydFdlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBjbG9zZVJhbmdlV2VhcG9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gIHByZWZlcnJlZEVuZW1pZXM6IHJlYWRvbmx5IFRyYWNrRW5lbXlSZWZbXTtcbiAgYm9zc0VuZW1pZXM6IHJlYWRvbmx5IFRyYWNrRW5lbXlSZWZbXTtcbiAgcHJlc3N1cmVTdHlsZXM6IHJlYWRvbmx5IFByZXNzdXJlU3R5bGVbXTtcbiAgb3BlbmluZ1dlYXBvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBvcGVuaW5nUGlja3Vwcz86IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB1cGdyYWRlU3BhY2luZzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpZXJQcm9maWxlIHtcbiAgdGFyZ2V0Um93czogbnVtYmVyO1xuICBlbmVteUhwOiBudW1iZXI7XG4gIGVuZW15U3BlZWQ6IG51bWJlcjtcbiAgcHJlc3N1cmVUaHJlYXQ6IFJlY29yZDxQcmVzc3VyZUxldmVsLCBudW1iZXI+O1xuICBwcmVzc3VyZVJvd3M6IFJlY29yZDxQcmVzc3VyZUxldmVsLCBudW1iZXI+O1xuICByZWJ1aWxkUm93czogbnVtYmVyO1xuICByZXN0Um93czogbnVtYmVyO1xuICBtYXhXYWxsV2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50RGVidWdTdW1tYXJ5IHtcbiAga2luZDogSm91cm5leUJlYXRLaW5kO1xuICByb3dzOiBudW1iZXI7XG4gIHByZXNzdXJlOiBQcmVzc3VyZUxldmVsIHwgXCJub25lXCI7XG4gIHRocmVhdEVzdGltYXRlOiBudW1iZXI7XG4gIHBsYXllclBvd2VyRXN0aW1hdGU6IG51bWJlcjtcbiAgc2VsZWN0ZWRXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRQaWNrdXBzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRFbmVtaWVzOiByZWFkb25seSBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NlckRlYnVnU3VtbWFyeSB7XG4gIHNlZWQ6IHN0cmluZztcbiAgc2VlZFZhbHVlOiBudW1iZXI7XG4gIGZhbWlseUlkOiBUcmFja1RoZW1lSWQ7XG4gIHRyYWNrSWQ6IFRyYWNrQ2F0YWxvZ0lkO1xuICB0aWVyOiBUcmFja1RpZXI7XG4gIGdlbmVyYXRlZFJvd3M6IG51bWJlcjtcbiAgc2VsZWN0ZWRXZWFwb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRQaWNrdXBzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRFbmVtaWVzOiByZWFkb25seSBzdHJpbmdbXTtcbiAgd2VhcG9uUG93ZXI6IFJlYWRvbmx5PFJlY29yZDxzdHJpbmcsIG51bWJlcj4+O1xuICBlbmVteVRocmVhdDogUmVhZG9ubHk8UmVjb3JkPHN0cmluZywgbnVtYmVyPj47XG4gIHNlZ21lbnRzOiByZWFkb25seSBTZWdtZW50RGVidWdTdW1tYXJ5W107XG4gIHdhcm5pbmdzOiByZWFkb25seSBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb3NlZFRyYWNrT3B0aW9ucyB7XG4gIHRyYWNrSWQ/OiBUcmFja0NhdGFsb2dJZDtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgc2NlbmVJZDogTGFuZVJ1bm5lclNjZW5lSWQ7XG4gIHRoZW1lOiBUcmFja1RoZW1lSWQ7XG4gIHRpZXI6IFRyYWNrVGllcjtcbiAgc2VlZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENvbXBvc2VSZXN1bHQge1xuICB0cmFjazogVHJhY2tNZW1iZXI7XG4gIGRlYnVnOiBDb21wb3NlckRlYnVnU3VtbWFyeTtcbn1cblxuaW50ZXJmYWNlIEdlbmVyYXRvclN0YXRlIHtcbiAgY3Vyc29yOiBudW1iZXI7XG4gIHBsYXllclBvd2VyOiBudW1iZXI7XG4gIGN5Y2xlOiBudW1iZXI7XG4gIHJlYWRvbmx5IHNlbGVjdGVkV2VhcG9uczogU2V0PHN0cmluZz47XG4gIHJlYWRvbmx5IHNlbGVjdGVkUGlja3VwczogU2V0PHN0cmluZz47XG4gIHJlYWRvbmx5IHNlbGVjdGVkRW5lbWllczogU2V0PHN0cmluZz47XG4gIHJlYWRvbmx5IHNlZ21lbnRzOiBTZWdtZW50RGVidWdTdW1tYXJ5W107XG4gIHJlYWRvbmx5IHdhcm5pbmdzOiBzdHJpbmdbXTtcbiAgYm9zc2VzUGxhY2VkOiBudW1iZXI7XG4gIGxhc3RCb3NzVHJhY2tSb3c6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFJuZyB7XG4gIG5leHQoKTogbnVtYmVyO1xuICBwaWNrPFQ+KGl0ZW1zOiByZWFkb25seSBUW10pOiBUO1xufVxuXG5jb25zdCB0aWVyUHJvZmlsZXM6IFJlY29yZDxUcmFja1RpZXIsIFRpZXJQcm9maWxlPiA9IHtcbiAgMToge1xuICAgIHRhcmdldFJvd3M6IDExMixcbiAgICBlbmVteUhwOiAxLFxuICAgIGVuZW15U3BlZWQ6IDEsXG4gICAgcHJlc3N1cmVUaHJlYXQ6IHsgbG93OiAxOCwgbWVkaXVtOiAzMCwgaGlnaDogNDQsIHBlYWs6IDU2IH0sXG4gICAgcHJlc3N1cmVSb3dzOiB7IGxvdzogMTgsIG1lZGl1bTogMjYsIGhpZ2g6IDM0LCBwZWFrOiA0MCB9LFxuICAgIHJlYnVpbGRSb3dzOiA4LFxuICAgIHJlc3RSb3dzOiAyLFxuICAgIG1heFdhbGxXaWR0aDogNCxcbiAgfSxcbiAgMjoge1xuICAgIHRhcmdldFJvd3M6IDI3MCxcbiAgICBlbmVteUhwOiAxLFxuICAgIGVuZW15U3BlZWQ6IDEsXG4gICAgcHJlc3N1cmVUaHJlYXQ6IHsgbG93OiAyMCwgbWVkaXVtOiAzNCwgaGlnaDogNTAsIHBlYWs6IDY2IH0sXG4gICAgcHJlc3N1cmVSb3dzOiB7IGxvdzogMjQsIG1lZGl1bTogMzQsIGhpZ2g6IDQ0LCBwZWFrOiA1MiB9LFxuICAgIHJlYnVpbGRSb3dzOiA5LFxuICAgIHJlc3RSb3dzOiAzLFxuICAgIG1heFdhbGxXaWR0aDogNCxcbiAgfSxcbiAgMzoge1xuICAgIHRhcmdldFJvd3M6IDQzMCxcbiAgICBlbmVteUhwOiAxLFxuICAgIGVuZW15U3BlZWQ6IDEsXG4gICAgcHJlc3N1cmVUaHJlYXQ6IHsgbG93OiAzNCwgbWVkaXVtOiA1NiwgaGlnaDogOTIsIHBlYWs6IDEzNiB9LFxuICAgIHByZXNzdXJlUm93czogeyBsb3c6IDMwLCBtZWRpdW06IDQyLCBoaWdoOiA1NCwgcGVhazogNzQgfSxcbiAgICByZWJ1aWxkUm93czogOCxcbiAgICByZXN0Um93czogMixcbiAgICBtYXhXYWxsV2lkdGg6IDUsXG4gIH0sXG59O1xuXG5jb25zdCBmYW1pbHlSZWNpcGVzOiBSZWNvcmQ8VHJhY2tUaGVtZUlkLCBGYW1pbHlSZWNpcGU+ID0ge1xuICBndW5TY2hvb2w6IHtcbiAgICB0aGVtZTogXCJndW5TY2hvb2xcIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJndW4uYnVyc3RDYXJiaW5lXCIsIFwiZ3VuLm5lZWRsZXJTbWdcIiwgXCJndW4uc3BsaXR0ZXJSaWZsZVwiLCBcImd1bi5oZWF2eUNhbm5vblwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIHN1cHBvcnRXZWFwb25zOiBbXCJzaGllbGQubGlnaHRHdWFyZFwiLCBcInNoaWVsZC5zYXRlbGxpdGVHdWFyZFwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIGNsb3NlUmFuZ2VXZWFwb25zOiBbXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcInN3b3JkLmFyY0JsYWRlXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwiZ2xhc3NTaGllbGRcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCIsIFwid2lkZVN3ZWVwXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICB1cGdyYWRlU3BhY2luZzogMixcbiAgfSxcbiAgZ3VhcmRCbGFkZXM6IHtcbiAgICB0aGVtZTogXCJndWFyZEJsYWRlc1wiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwic2hpZWxkLmhleEd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcInN3b3JkLmFyY0JsYWRlXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCJdLFxuICAgIHByZWZlcnJlZEVuZW1pZXM6IFtcImJhc2ljXCIsIFwiZ2xhc3NTaGllbGRcIiwgXCJ3aW5nZXJcIl0sXG4gICAgYm9zc0VuZW1pZXM6IFtcInRhbmtcIl0sXG4gICAgcHJlc3N1cmVTdHlsZXM6IFtcImxhbmVMaW5lXCIsIFwiY2VudGVyQWx0ZXJuYXRpbmdcIiwgXCJ3aWRlU3dlZXBcIiwgXCJtaXJyb3JlZFdhbGxzXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJzd29yZC5hcmNCbGFkZVwiLCBcInNoaWVsZC5saWdodEd1YXJkXCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAzLFxuICB9LFxuICBjcnlzdGFsU2llZ2U6IHtcbiAgICB0aGVtZTogXCJjcnlzdGFsU2llZ2VcIixcbiAgICBwcmVmZXJyZWRXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJndW4uYnVyc3RDYXJiaW5lXCIsIFwiZ3VuLnNwbGl0dGVyUmlmbGVcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJsaWdodG5pbmcuZm9ya0NhcGFjaXRvclwiLCBcInN3b3JkLmNsZWF2ZXJcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic2hpZWxkLnNhdGVsbGl0ZUd1YXJkXCIsIFwic2hpZWxkLmhleEd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcInN3b3JkLmNsZWF2ZXJcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiXSxcbiAgICBwcmVmZXJyZWRFbmVtaWVzOiBbXCJnbGFzc1NoaWVsZFwiLCBcImJhc2ljXCIsIFwid2luZ2VyXCJdLFxuICAgIGJvc3NFbmVtaWVzOiBbXCJ0YW5rXCJdLFxuICAgIHByZXNzdXJlU3R5bGVzOiBbXCJtaXJyb3JlZFdhbGxzXCIsIFwidGFua0JyZWFrXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcIndpZGVTd2VlcFwiXSxcbiAgICBvcGVuaW5nV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgb3BlbmluZ1BpY2t1cHM6IFtcInVuaXRNdWx0aXBsaWVyLjJ4XCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAyLFxuICB9LFxuICBzd2FybUJsb29tOiB7XG4gICAgdGhlbWU6IFwic3dhcm1CbG9vbVwiLFxuICAgIHByZWZlcnJlZFdlYXBvbnM6IFtcImd1bi5uZWVkbGVyU21nXCIsIFwic3dvcmQuYXJjQmxhZGVcIiwgXCJsaWdodG5pbmcuY2hhaW5TcGFya1wiLCBcImd1bi5idXJzdENhcmJpbmVcIiwgXCJzaGllbGQuc2F0ZWxsaXRlR3VhcmRcIl0sXG4gICAgc3VwcG9ydFdlYXBvbnM6IFtcInNoaWVsZC5saWdodEd1YXJkXCIsIFwic3dvcmQuY2xlYXZlclwiLCBcImxpZ2h0bmluZy5mb3JrQ2FwYWNpdG9yXCIsIFwic2hpZWxkLmhleEd1YXJkXCJdLFxuICAgIGNsb3NlUmFuZ2VXZWFwb25zOiBbXCJzd29yZC5hcmNCbGFkZVwiLCBcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwic3dvcmQuY2xlYXZlclwiXSxcbiAgICBwcmVmZXJyZWRFbmVtaWVzOiBbXCJiYXNpY1wiLCBcIndpbmdlclwiLCBcImdsYXNzU2hpZWxkXCJdLFxuICAgIGJvc3NFbmVtaWVzOiBbXCJ0YW5rXCJdLFxuICAgIHByZXNzdXJlU3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIndpZGVTd2VlcFwiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiXSxcbiAgICBvcGVuaW5nV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwic2hpZWxkLmxpZ2h0R3VhcmRcIl0sXG4gICAgb3BlbmluZ1BpY2t1cHM6IFtcInVuaXRNdWx0aXBsaWVyLjJ4XCJdLFxuICAgIHVwZ3JhZGVTcGFjaW5nOiAxLFxuICB9LFxuICBtaXJyb3JBcnJheToge1xuICAgIHRoZW1lOiBcIm1pcnJvckFycmF5XCIsXG4gICAgcHJlZmVycmVkV2VhcG9uczogW1wiZ3VuLnB1bHNlUGlzdG9sXCIsIFwiZ3VuLmJ1cnN0Q2FyYmluZVwiLCBcImd1bi5zcGxpdHRlclJpZmxlXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIiwgXCJndW4uaGVhdnlDYW5ub25cIiwgXCJsaWdodG5pbmcuZm9ya0NhcGFjaXRvclwiXSxcbiAgICBzdXBwb3J0V2VhcG9uczogW1wic2hpZWxkLmxpZ2h0R3VhcmRcIiwgXCJzd29yZC5jbGVhdmVyXCIsIFwic2hpZWxkLmhleEd1YXJkXCIsIFwibGlnaHRuaW5nLmNoYWluU3BhcmtcIl0sXG4gICAgY2xvc2VSYW5nZVdlYXBvbnM6IFtcImxpZ2h0bmluZy5jaGFpblNwYXJrXCIsIFwic3dvcmQuY2xlYXZlclwiXSxcbiAgICBwcmVmZXJyZWRFbmVtaWVzOiBbXCJiYXNpY1wiLCBcImdsYXNzU2hpZWxkXCIsIFwid2luZ2VyXCJdLFxuICAgIGJvc3NFbmVtaWVzOiBbXCJ0YW5rXCJdLFxuICAgIHByZXNzdXJlU3R5bGVzOiBbXCJtaXJyb3JlZFdhbGxzXCIsIFwib3V0ZXJBbHRlcm5hdGluZ1wiLCBcImNlbnRlckFsdGVybmF0aW5nXCIsIFwidGFua0JyZWFrXCJdLFxuICAgIG9wZW5pbmdXZWFwb25zOiBbXCJndW4ucHVsc2VQaXN0b2xcIiwgXCJzaGllbGQubGlnaHRHdWFyZFwiXSxcbiAgICB1cGdyYWRlU3BhY2luZzogMixcbiAgfSxcbn07XG5cbmNvbnN0IGRlZmF1bHRKb3VybmV5OiBSZWNvcmQ8VHJhY2tUaWVyLCByZWFkb25seSBKb3VybmV5QmVhdFJlY2lwZVtdPiA9IHtcbiAgMTogW1xuICAgIHsga2luZDogXCJpbnRyb1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInN1cHBvcnRcIl0gfSxcbiAgICB7IGtpbmQ6IFwibGVzc29uXCIsIHByZXNzdXJlOiBcImxvd1wiIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBcIm1lZGl1bVwiIH0sXG4gICAgeyBraW5kOiBcInJlc3RcIiB9LFxuICAgIHsga2luZDogXCJjaGFsbGVuZ2VcIiwgcHJlc3N1cmU6IFwiaGlnaFwiLCBwaWNrdXBSb2xlczogW1wic3VwcG9ydFwiXSB9LFxuICAgIHsga2luZDogXCJmaW5hbGVcIiwgcHJlc3N1cmU6IFwiaGlnaFwiIH0sXG4gIF0sXG4gIDI6IFtcbiAgICB7IGtpbmQ6IFwiaW50cm9cIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJyYW1wXCIsIHByZXNzdXJlOiBcImxvd1wiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiXSwgc3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcImxhbmVMaW5lXCJdIH0sXG4gICAgeyBraW5kOiBcImxlc3NvblwiLCBwcmVzc3VyZTogXCJtZWRpdW1cIiwgc3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wic3VwcG9ydFwiXSB9LFxuICAgIHsga2luZDogXCJjaGFsbGVuZ2VcIiwgcHJlc3N1cmU6IFwibWVkaXVtXCIsIHN0eWxlczogW1wibGFuZUxpbmVcIiwgXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IFwiaGlnaFwiIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIgfSxcbiAgICB7IGtpbmQ6IFwiZmluYWxlXCIsIHByZXNzdXJlOiBcInBlYWtcIiB9LFxuICBdLFxuICAzOiBbXG4gICAgeyBraW5kOiBcImludHJvXCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiLCBcImNsb3NlUmFuZ2VcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcInJhbXBcIiwgcHJlc3N1cmU6IFwibG93XCIsIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCJdLCBzdHlsZXM6IFtcImNlbnRlckFsdGVybmF0aW5nXCIsIFwibGFuZUxpbmVcIiwgXCJvdXRlckFsdGVybmF0aW5nXCJdIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJtZWRpdW1cIiwgc3R5bGVzOiBbXCJjZW50ZXJBbHRlcm5hdGluZ1wiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIiwgXCJsYW5lTGluZVwiXSB9LFxuICAgIHsga2luZDogXCJyZWJ1aWxkXCIsIHBpY2t1cFJvbGVzOiBbXCJzdXBwb3J0XCIsIFwidXBncmFkZVwiXSB9LFxuICAgIHsga2luZDogXCJwcmVzc3VyZVwiLCBwcmVzc3VyZTogXCJoaWdoXCIgfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wicHJpbWFyeVwiLCBcImNsb3NlUmFuZ2VcIiwgXCJ1cGdyYWRlXCJdIH0sXG4gICAgeyBraW5kOiBcImNoYWxsZW5nZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIgfSxcbiAgICB7IGtpbmQ6IFwicmVidWlsZFwiLCBwaWNrdXBSb2xlczogW1wic3VwcG9ydFwiLCBcInVwZ3JhZGVcIl0gfSxcbiAgICB7IGtpbmQ6IFwicHJlc3N1cmVcIiwgcHJlc3N1cmU6IFwicGVha1wiLCBzdHlsZXM6IFtcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIiwgXCJvdXRlckFsdGVybmF0aW5nXCJdIH0sXG4gICAgeyBraW5kOiBcInJlYnVpbGRcIiwgcGlja3VwUm9sZXM6IFtcInByaW1hcnlcIiwgXCJzdXBwb3J0XCJdIH0sXG4gICAgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogXCJwZWFrXCIsIHN0eWxlczogW1wid2lkZVN3ZWVwXCIsIFwibWlycm9yZWRXYWxsc1wiLCBcIndpZGVTd2VlcFwiLCBcIm91dGVyQWx0ZXJuYXRpbmdcIl0gfSxcbiAgXSxcbn07XG5cbmNvbnN0IHRyYWNrUmVjaXBlcyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgT2JqZWN0LmVudHJpZXModHJhY2tDYXRhbG9nKS5tYXAoKFt0cmFja0lkLCBlbnRyeV0pID0+IFtcbiAgICB0cmFja0lkLFxuICAgIHtcbiAgICAgIGdvYWxzOiBbZW50cnkuZGVzY3JpcHRpb25dLFxuICAgICAgc2VlZDogYCR7dHJhY2tJZH06JHtlbnRyeS50aWVyfWAsXG4gICAgICBqb3VybmV5OiBkZWZhdWx0Sm91cm5leVtlbnRyeS50aWVyXSxcbiAgICB9LFxuICBdKSxcbikgYXMgdW5rbm93biBhcyBSZWNvcmQ8VHJhY2tDYXRhbG9nSWQsIFRyYWNrUmVjaXBlPjtcblxuY29uc3QgYWxsQ29sdW1ucyA9IFtjLmxlZnQub3V0ZXIsIGMubGVmdC5uZWFyT3V0ZXIsIGMubGVmdC5taWQsIGMubGVmdC5uZWFySW5uZXIsIGMubGVmdC5pbm5lciwgYy5yaWdodC5pbm5lciwgYy5yaWdodC5uZWFySW5uZXIsIGMucmlnaHQubWlkLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5yaWdodC5vdXRlcl0gYXMgY29uc3Q7XG5jb25zdCBjZW50ZXJDb2x1bW5zID0gW2MubGVmdC5taWQsIGMucmlnaHQubWlkXSBhcyBjb25zdDtcbmNvbnN0IG91dGVyQ29sdW1ucyA9IFtjLmxlZnQub3V0ZXIsIGMucmlnaHQub3V0ZXIsIGMubGVmdC5uZWFyT3V0ZXIsIGMucmlnaHQubmVhck91dGVyXSBhcyBjb25zdDtcbmNvbnN0IGxlZnRDb2x1bW5zID0gW2MubGVmdC5vdXRlciwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5sZWZ0Lm1pZCwgYy5sZWZ0Lm5lYXJJbm5lciwgYy5sZWZ0LmlubmVyXSBhcyBjb25zdDtcbmNvbnN0IHJpZ2h0Q29sdW1ucyA9IFtjLnJpZ2h0LmlubmVyLCBjLnJpZ2h0Lm5lYXJJbm5lciwgYy5yaWdodC5taWQsIGMucmlnaHQubmVhck91dGVyLCBjLnJpZ2h0Lm91dGVyXSBhcyBjb25zdDtcblxuZnVuY3Rpb24gY3JlYXRlUm5nKHNlZWQ6IHN0cmluZyk6IFJuZyAmIHsgcmVhZG9ubHkgc2VlZFZhbHVlOiBudW1iZXIgfSB7XG4gIGxldCB2YWx1ZSA9IDIxNjYxMzYyNjE7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhbHVlIF49IHNlZWQuY2hhckNvZGVBdChpbmRleCk7XG4gICAgdmFsdWUgPSBNYXRoLmltdWwodmFsdWUsIDE2Nzc3NjE5KTtcbiAgfVxuICB2YWx1ZSA+Pj49IDA7XG4gIHJldHVybiB7XG4gICAgc2VlZFZhbHVlOiB2YWx1ZSxcbiAgICBuZXh0KCkge1xuICAgICAgdmFsdWUgPSBNYXRoLmltdWwodmFsdWUgKyAweDZkMmI3OWY1LCAxKTtcbiAgICAgIGxldCBtaXhlZCA9IHZhbHVlO1xuICAgICAgbWl4ZWQgPSBNYXRoLmltdWwobWl4ZWQgXiBtaXhlZCA+Pj4gMTUsIG1peGVkIHwgMSk7XG4gICAgICBtaXhlZCBePSBtaXhlZCArIE1hdGguaW11bChtaXhlZCBeIG1peGVkID4+PiA3LCBtaXhlZCB8IDYxKTtcbiAgICAgIHJldHVybiAoKG1peGVkIF4gbWl4ZWQgPj4+IDE0KSA+Pj4gMCkgLyA0Mjk0OTY3Mjk2O1xuICAgIH0sXG4gICAgcGljazxUPihpdGVtczogcmVhZG9ubHkgVFtdKTogVCB7XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGljayBmcm9tIGFuIGVtcHR5IGNvbGxlY3Rpb24uXCIpO1xuICAgICAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IodGhpcy5uZXh0KCkgKiBpdGVtcy5sZW5ndGgpXTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxXZWFwb25JZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlkLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLlwiKSkgcmV0dXJuIGlkO1xuICBjb25zdCBbZmFtaWx5LCBtZW1iZXJdID0gaWQuc3BsaXQoXCIuXCIpO1xuICByZXR1cm4gYHBpY2t1cC53ZWFwb24uJHtmYW1pbHl9LiR7bWVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIG1pbmltdW1UaWVyRm9yV2VhcG9uKGlkOiBzdHJpbmcpOiBUcmFja1RpZXIge1xuICBjb25zdCBjYW5vbmljYWwgPSBjYW5vbmljYWxXZWFwb25JZChpZCk7XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uZ3VuLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IGd1bkZhbWlseS5tZW1iZXJzW2Nhbm9uaWNhbC5zbGljZShcInBpY2t1cC53ZWFwb24uZ3VuLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIGd1bkZhbWlseS5tZW1iZXJzXTtcbiAgICByZXR1cm4gbWVtYmVyLnJhcml0eSA9PT0gXCJzdGFydGVyXCIgPyAxIDogbWVtYmVyLnJhcml0eSA9PT0gXCJjb21tb25cIiA/IDIgOiAzO1xuICB9XG4gIGlmIChjYW5vbmljYWwuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc3dvcmQuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gc3dvcmRGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiLmxlbmd0aCkgYXMga2V5b2YgdHlwZW9mIHN3b3JkRmFtaWx5Lm1lbWJlcnNdIGFzIFN3b3JkTWVtYmVyO1xuICAgIHJldHVybiBtZW1iZXIucmFyaXR5ID09PSBcInN0YXJ0ZXJcIiA/IDEgOiBtZW1iZXIucmFyaXR5ID09PSBcImNvbW1vblwiID8gMiA6IDM7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnNdO1xuICAgIHJldHVybiBtZW1iZXIucmFyaXR5ID09PSBcInN0YXJ0ZXJcIiA/IDEgOiBtZW1iZXIucmFyaXR5ID09PSBcImNvbW1vblwiID8gMiA6IDM7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5saWdodG5pbmcuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgbGlnaHRuaW5nRmFtaWx5Lm1lbWJlcnNdO1xuICAgIHJldHVybiBtZW1iZXIucmFyaXR5ID09PSBcInVuY29tbW9uXCIgPyAzIDogMztcbiAgfVxuICByZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gbWluaW11bVRpZXJGb3JFbmVteShpZDogVHJhY2tFbmVteVJlZik6IFRyYWNrVGllciB7XG4gIGNvbnN0IGNhbm9uaWNhbCA9IGlkID09PSBcImJhc2ljXCIgfHwgaWQgPT09IFwiZW5lbXkuYmFzaWNcIiA/IFwiYmFzaWNPcmJcIiA6IGlkLnJlcGxhY2UoL15lbmVteVxcLi8sIFwiXCIpO1xuICBpZiAoY2Fub25pY2FsID09PSBcInRhbmtcIikgcmV0dXJuIDM7XG4gIGlmIChjYW5vbmljYWwgPT09IFwid2luZ2VyXCIpIHJldHVybiAyO1xuICByZXR1cm4gMTtcbn1cblxuZnVuY3Rpb24gd2VhcG9uUG93ZXIoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGNhbm9uaWNhbCA9IGNhbm9uaWNhbFdlYXBvbklkKGlkKTtcbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5ndW4uXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gZ3VuRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5ndW4uXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2YgZ3VuRmFtaWx5Lm1lbWJlcnNdO1xuICAgIGNvbnN0IGxldmVsID0gbWVtYmVyLmxldmVsc1swXTtcbiAgICByZXR1cm4gbGV2ZWwuZmlyZVJhdGVQZXJTZWNvbmQgKiBsZXZlbC5kYW1hZ2UgKiBsZXZlbC5wcm9qZWN0aWxlQ291bnQgKiBsZXZlbC5idXJzdENvdW50ICogKDEgKyBsZXZlbC5waWVyY2UgKiAwLjM1KTtcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLnN3b3JkLlwiKSkge1xuICAgIGNvbnN0IG1lbWJlciA9IHN3b3JkRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5zd29yZC5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBzd29yZEZhbWlseS5tZW1iZXJzXSBhcyBTd29yZE1lbWJlcjtcbiAgICByZXR1cm4gbWVtYmVyLmRhbWFnZSAqIG1lbWJlci5tYXhUYXJnZXRzIC8gbWVtYmVyLmNvb2xkb3duU2Vjb25kcyAqIChtZW1iZXIucm93UmVhY2ggPyAxLjM1IDogMSk7XG4gIH1cbiAgaWYgKGNhbm9uaWNhbC5zdGFydHNXaXRoKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIpKSB7XG4gICAgY29uc3QgbWVtYmVyID0gc2hpZWxkRmFtaWx5Lm1lbWJlcnNbY2Fub25pY2FsLnNsaWNlKFwicGlja3VwLndlYXBvbi5zaGllbGQuXCIubGVuZ3RoKSBhcyBrZXlvZiB0eXBlb2Ygc2hpZWxkRmFtaWx5Lm1lbWJlcnNdO1xuICAgIHJldHVybiBtZW1iZXIubWF4Q2hhcmdlcyAqIDAuOCArIG1lbWJlci5yYWRpdXMgLyAzMDtcbiAgfVxuICBpZiAoY2Fub25pY2FsLnN0YXJ0c1dpdGgoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIikpIHtcbiAgICBjb25zdCBtZW1iZXIgPSBsaWdodG5pbmdGYW1pbHkubWVtYmVyc1tjYW5vbmljYWwuc2xpY2UoXCJwaWNrdXAud2VhcG9uLmxpZ2h0bmluZy5cIi5sZW5ndGgpIGFzIGtleW9mIHR5cGVvZiBsaWdodG5pbmdGYW1pbHkubWVtYmVyc107XG4gICAgY29uc3QgbGV2ZWwgPSBtZW1iZXIubGV2ZWxzWzBdO1xuICAgIHJldHVybiBsZXZlbC5kYW1hZ2UgKiAobGV2ZWwubWF4SnVtcHMgKyBsZXZlbC5icmFuY2hGYW5vdXQpIC8gbGV2ZWwuY29vbGRvd25TZWNvbmRzO1xuICB9XG4gIHJldHVybiAxO1xufVxuXG5mdW5jdGlvbiBlbmVteVRocmVhdChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgbWVtYmVySWQgPSBpZCA9PT0gXCJiYXNpY1wiIHx8IGlkID09PSBcImVuZW15LmJhc2ljXCIgPyBcImJhc2ljT3JiXCIgOiBpZC5yZXBsYWNlKC9eZW5lbXlcXC4vLCBcIlwiKSBhcyBPcmJJZDtcbiAgY29uc3QgZW5lbXkgPSBvcmJGYW1pbHkubWVtYmVyc1ttZW1iZXJJZCBhcyBrZXlvZiB0eXBlb2Ygb3JiRmFtaWx5Lm1lbWJlcnNdO1xuICByZXR1cm4gZW5lbXkuaGVhbHRoICogMiArIGVuZW15LnNwZWVkIC8gNTggKyBlbmVteS5jb2x1bW5TcGFuICogMS40ICsgZW5lbXkuY29udGFjdERhbWFnZSAqIDEuNiArIGVuZW15LmltcGFjdFJlc2lzdGFuY2U7XG59XG5cbmZ1bmN0aW9uIGVuZW15Q29sdW1uU3BhbihpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgbWVtYmVySWQgPSBpZCA9PT0gXCJiYXNpY1wiIHx8IGlkID09PSBcImVuZW15LmJhc2ljXCIgPyBcImJhc2ljT3JiXCIgOiBpZC5yZXBsYWNlKC9eZW5lbXlcXC4vLCBcIlwiKSBhcyBPcmJJZDtcbiAgcmV0dXJuIG9yYkZhbWlseS5tZW1iZXJzW21lbWJlcklkIGFzIGtleW9mIHR5cGVvZiBvcmJGYW1pbHkubWVtYmVyc10uY29sdW1uU3Bhbjtcbn1cblxuZnVuY3Rpb24gcGlja3VwUG93ZXIoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGlmIChpZCA9PT0gXCJ1bml0TXVsdGlwbGllci4yeFwiIHx8IGlkID09PSBcInBpY2t1cC51bml0TXVsdGlwbGllci4yeFwiKSB7XG4gICAgcmV0dXJuIG11bHRpcGxpZXJGYW1pbHkubWVtYmVycy5zcXVhZFBsdXNPbmUuc3F1YWRBZGRlZCAqIDQ7XG4gIH1cbiAgaWYgKGlkID09PSBcInNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIiB8fCBpZCA9PT0gXCJwaWNrdXAuc2hvd3N0b3BwZXIuZHJhZ29uc0JyZWF0aFwiKSB7XG4gICAgcmV0dXJuIDE0O1xuICB9XG4gIHJldHVybiB3ZWFwb25Qb3dlcihpZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlKCk6IEdlbmVyYXRvclN0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJzb3I6IDEsXG4gICAgcGxheWVyUG93ZXI6IDEsXG4gICAgY3ljbGU6IDAsXG4gICAgc2VsZWN0ZWRXZWFwb25zOiBuZXcgU2V0KCksXG4gICAgc2VsZWN0ZWRQaWNrdXBzOiBuZXcgU2V0KCksXG4gICAgc2VsZWN0ZWRFbmVtaWVzOiBuZXcgU2V0KCksXG4gICAgc2VnbWVudHM6IFtdLFxuICAgIHdhcm5pbmdzOiBbXSxcbiAgICBib3NzZXNQbGFjZWQ6IDAsXG4gICAgbGFzdEJvc3NUcmFja1JvdzogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICB9O1xufVxuXG5mdW5jdGlvbiByb3dzRm9yQmVhdChiZWF0OiBKb3VybmV5QmVhdFJlY2lwZSwgcHJvZmlsZTogVGllclByb2ZpbGUpOiBudW1iZXIge1xuICBpZiAoYmVhdC5yb3dzKSByZXR1cm4gYmVhdC5yb3dzO1xuICBpZiAoYmVhdC5raW5kID09PSBcImludHJvXCIpIHJldHVybiBwcm9maWxlLnJlYnVpbGRSb3dzO1xuICBpZiAoYmVhdC5raW5kID09PSBcInJlYnVpbGRcIikgcmV0dXJuIHByb2ZpbGUucmVidWlsZFJvd3M7XG4gIGlmIChiZWF0LmtpbmQgPT09IFwicmVzdFwiKSByZXR1cm4gcHJvZmlsZS5yZXN0Um93cztcbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyYW1wXCIpIHJldHVybiBwcm9maWxlLnByZXNzdXJlUm93cy5tZWRpdW07XG4gIHJldHVybiBwcm9maWxlLnByZXNzdXJlUm93c1tiZWF0LnByZXNzdXJlID8/IFwibWVkaXVtXCJdO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RXZWFwb24ocmVjaXBlOiBGYW1pbHlSZWNpcGUsIHJvbGU6IFBpY2t1cFJvbGUsIHRpZXI6IFRyYWNrVGllciwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCBybmc6IFJuZyk6IHN0cmluZyB8IG51bGwge1xuICBpZiAocm9sZSA9PT0gXCJ1cGdyYWRlXCIpIHJldHVybiBudWxsO1xuICBjb25zdCByYXdQb29sID0gcm9sZSA9PT0gXCJzdXBwb3J0XCJcbiAgICA/IHJlY2lwZS5zdXBwb3J0V2VhcG9uc1xuICAgIDogcm9sZSA9PT0gXCJjbG9zZVJhbmdlXCJcbiAgICA/IHJlY2lwZS5jbG9zZVJhbmdlV2VhcG9uc1xuICAgIDogcmVjaXBlLnByZWZlcnJlZFdlYXBvbnM7XG4gIGNvbnN0IHJvbGVQb29sID0gcm9sZSA9PT0gXCJjbG9zZVJhbmdlXCJcbiAgICA/IHJhd1Bvb2xcbiAgICA6IHJvbGUgPT09IFwicHJpbWFyeVwiXG4gICAgPyByYXdQb29sLmZpbHRlcih3ZWFwb24gPT4gIWNhbm9uaWNhbFdlYXBvbklkKHdlYXBvbikuc3RhcnRzV2l0aChcInBpY2t1cC53ZWFwb24uc2hpZWxkLlwiKSlcbiAgICA6IHJhd1Bvb2w7XG4gIGNvbnN0IHBvb2wgPSByb2xlUG9vbC5sZW5ndGggPiAwID8gcm9sZVBvb2wgOiByYXdQb29sO1xuICBjb25zdCB0aWVyUG9vbCA9IHBvb2wuZmlsdGVyKHdlYXBvbiA9PiBtaW5pbXVtVGllckZvcldlYXBvbih3ZWFwb24pIDw9IHRpZXIpO1xuICBjb25zdCBhdmFpbGFibGVQb29sID0gdGllclBvb2wubGVuZ3RoID4gMCA/IHRpZXJQb29sIDogcG9vbC5maWx0ZXIod2VhcG9uID0+IG1pbmltdW1UaWVyRm9yV2VhcG9uKHdlYXBvbikgPT09IDEpO1xuICBpZiAoYXZhaWxhYmxlUG9vbC5sZW5ndGggPT09IDApIHtcbiAgICBzdGF0ZS53YXJuaW5ncy5wdXNoKGBObyAke3JvbGV9IHdlYXBvbiB3YXMgYXZhaWxhYmxlIGZvciB0aWVyICR7dGllcn0gaW4gJHtyZWNpcGUudGhlbWV9LmApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG9mZnNldCA9IE1hdGgubWluKGF2YWlsYWJsZVBvb2wubGVuZ3RoIC0gMSwgc3RhdGUuY3ljbGUpO1xuICBjb25zdCBjYW5kaWRhdGVzID0gYXZhaWxhYmxlUG9vbC5zbGljZShvZmZzZXQpLmNvbmNhdChhdmFpbGFibGVQb29sLnNsaWNlKDAsIG9mZnNldCkpO1xuICByZXR1cm4gcm5nLnBpY2soY2FuZGlkYXRlcyk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlUGlja3VwcyhzZWN0aW9uOiBUcmFja1NlY3Rpb25CdWlsZGVyLCByZWNpcGU6IEZhbWlseVJlY2lwZSwgYmVhdDogSm91cm5leUJlYXRSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgcm93czogbnVtYmVyLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHJuZzogUm5nKTogeyB3ZWFwb25zOiBzdHJpbmdbXTsgcGlja3Vwczogc3RyaW5nW10gfSB7XG4gIGNvbnN0IHJvbGVzID0gYmVhdC5waWNrdXBSb2xlcyA/PyBbXTtcbiAgY29uc3QgY29sdW1ucyA9IFtjLmxlZnQubWlkLCBjLnJpZ2h0Lm1pZCwgYy5sZWZ0Lm5lYXJPdXRlciwgYy5yaWdodC5uZWFyT3V0ZXIsIGMubGVmdC5uZWFySW5uZXIsIGMucmlnaHQubmVhcklubmVyXSBhcyBjb25zdDtcbiAgY29uc3Qgd2VhcG9uczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgcGlja3Vwczogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHJvdyA9IDA7XG4gIGZvciAoY29uc3Qgcm9sZSBvZiByb2xlcykge1xuICAgIGlmIChyb2xlID09PSBcInVwZ3JhZGVcIikge1xuICAgICAgY29uc3QgYXV0aG9yZWRVcGdyYWRlID0gYmVhdC5waWNrdXBSb2xlcz8uaW5jbHVkZXMoXCJ1cGdyYWRlXCIpID8/IGZhbHNlO1xuICAgICAgaWYgKGF1dGhvcmVkVXBncmFkZSB8fCBzdGF0ZS5jeWNsZSAlIHJlY2lwZS51cGdyYWRlU3BhY2luZyA9PT0gMCkge1xuICAgICAgICBzZWN0aW9uLmF0KHJvdykucGlja3VwKFwidW5pdE11bHRpcGxpZXIuMnhcIiwgeyBjb2x1bW46IGNvbHVtbnNbKHJvdyArIDEpICUgY29sdW1ucy5sZW5ndGhdIH0pO1xuICAgICAgICBzdGF0ZS5wbGF5ZXJQb3dlciArPSBwaWNrdXBQb3dlcihcInVuaXRNdWx0aXBsaWVyLjJ4XCIpO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFBpY2t1cHMuYWRkKFwicGlja3VwLnVuaXRNdWx0aXBsaWVyLjJ4XCIpO1xuICAgICAgICBwaWNrdXBzLnB1c2goXCJwaWNrdXAudW5pdE11bHRpcGxpZXIuMnhcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdlYXBvbiA9IHNlbGVjdFdlYXBvbihyZWNpcGUsIHJvbGUsIHRpZXIsIHN0YXRlLCBybmcpO1xuICAgICAgaWYgKHdlYXBvbikge1xuICAgICAgICBzZWN0aW9uLmF0KHJvdykud2VhcG9uKHdlYXBvbiwgeyBjb2x1bW46IGNvbHVtbnNbcm93ICUgY29sdW1ucy5sZW5ndGhdIH0pO1xuICAgICAgICBzdGF0ZS5wbGF5ZXJQb3dlciArPSB3ZWFwb25Qb3dlcih3ZWFwb24pO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFdlYXBvbnMuYWRkKGNhbm9uaWNhbFdlYXBvbklkKHdlYXBvbikpO1xuICAgICAgICB3ZWFwb25zLnB1c2goY2Fub25pY2FsV2VhcG9uSWQod2VhcG9uKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJvdyArPSAyO1xuICB9XG4gIGlmICh0aWVyID49IDIgJiYgYmVhdC5raW5kID09PSBcInJlYnVpbGRcIikge1xuICAgIGNvbnN0IHBpY2t1cCA9IFwicGlja3VwLnNob3dzdG9wcGVyLmRyYWdvbnNCcmVhdGhcIjtcbiAgICBjb25zdCBwaWNrdXBSb3cgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dzIC0gMSwgcm93cyAtIDMpKTtcbiAgICBzZWN0aW9uLmF0KHBpY2t1cFJvdykucGlja3VwKHBpY2t1cCwgeyBjb2x1bW46IHN0YXRlLmN5Y2xlICUgMiA9PT0gMCA/IGMubGVmdC5pbm5lciA6IGMucmlnaHQuaW5uZXIgfSk7XG4gICAgc3RhdGUucGxheWVyUG93ZXIgKz0gcGlja3VwUG93ZXIocGlja3VwKTtcbiAgICBzdGF0ZS5zZWxlY3RlZFBpY2t1cHMuYWRkKHBpY2t1cCk7XG4gICAgcGlja3Vwcy5wdXNoKHBpY2t1cCk7XG4gIH1cbiAgcmV0dXJuIHsgd2VhcG9ucywgcGlja3VwcyB9O1xufVxuXG5mdW5jdGlvbiBlbmVteUZvclRocmVhdChyZWNpcGU6IEZhbWlseVJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCB0YXJnZXQ6IG51bWJlcik6IFRyYWNrRW5lbXlSZWYge1xuICBjb25zdCBhbGxvd2VkRW5lbWllcyA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzLmZpbHRlcihpZCA9PiBtaW5pbXVtVGllckZvckVuZW15KGlkKSA8PSB0aWVyKTtcbiAgY29uc3QgcG9vbCA9IGFsbG93ZWRFbmVtaWVzLmxlbmd0aCA+IDAgPyBhbGxvd2VkRW5lbWllcyA6IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzO1xuICBjb25zdCBjYW5kaWRhdGVzID0gcG9vbC5maWx0ZXIoaWQgPT4gZW5lbXlUaHJlYXQoaWQpIDw9IHRhcmdldCArIDQpO1xuICByZXR1cm4gY2FuZGlkYXRlc1tjYW5kaWRhdGVzLmxlbmd0aCAtIDFdID8/IHBvb2xbMF07XG59XG5cbmZ1bmN0aW9uIGVuZW15Rm9yUHJlc3N1cmUocmVjaXBlOiBGYW1pbHlSZWNpcGUsIHRpZXI6IFRyYWNrVGllciwgcHJlc3N1cmU6IFByZXNzdXJlTGV2ZWwsIHJvdzogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcik6IFRyYWNrRW5lbXlSZWYge1xuICBpZiAodGllciA9PT0gMiAmJiAocHJlc3N1cmUgPT09IFwibG93XCIgfHwgcHJlc3N1cmUgPT09IFwibWVkaXVtXCIpKSB7XG4gICAgY29uc3QgaGFzR2xhc3MgPSByZWNpcGUucHJlZmVycmVkRW5lbWllcy5pbmNsdWRlcyhcImdsYXNzU2hpZWxkXCIpO1xuICAgIGNvbnN0IGhhc1dpbmdlciA9IHJlY2lwZS5wcmVmZXJyZWRFbmVtaWVzLmluY2x1ZGVzKFwid2luZ2VyXCIpO1xuICAgIGlmIChoYXNXaW5nZXIgJiYgcm93ICUgNyA9PT0gMCkgcmV0dXJuIFwid2luZ2VyXCI7XG4gICAgaWYgKGhhc0dsYXNzKSByZXR1cm4gXCJnbGFzc1NoaWVsZFwiO1xuICB9XG4gIHJldHVybiBlbmVteUZvclRocmVhdChyZWNpcGUsIHRpZXIsIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGJvc3NGb3JQcmVzc3VyZShyZWNpcGU6IEZhbWlseVJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUpOiBUcmFja0VuZW15UmVmIHwgbnVsbCB7XG4gIGNvbnN0IGF2YWlsYWJsZUJvc3NlcyA9IHJlY2lwZS5ib3NzRW5lbWllcy5maWx0ZXIoaWQgPT4gbWluaW11bVRpZXJGb3JFbmVteShpZCkgPD0gdGllciArIDEpO1xuICBpZiAoYXZhaWxhYmxlQm9zc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLndhcm5pbmdzLnB1c2goYE5vIGJvc3MgZW5lbXkgaXMgYXZhaWxhYmxlIGZvciAke3JlY2lwZS50aGVtZX0gYXQgdGllciAke3RpZXJ9LmApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBhdmFpbGFibGVCb3NzZXNbc3RhdGUuYm9zc2VzUGxhY2VkICUgYXZhaWxhYmxlQm9zc2VzLmxlbmd0aF07XG59XG5cbmZ1bmN0aW9uIGNhblBsYWNlQm9zcyh0aWVyOiBUcmFja1RpZXIsIHN0YXRlOiBHZW5lcmF0b3JTdGF0ZSwgdHJhY2tSb3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBjb25zdCBtYXhCb3NzZXMgPSB0aWVyID09PSAyID8gMiA6IHRpZXIgPj0gMyA/IDQgOiAwO1xuICBjb25zdCBtaW5TcGFjaW5nID0gdGllciA9PT0gMiA/IDM0IDogNTg7XG4gIHJldHVybiBzdGF0ZS5ib3NzZXNQbGFjZWQgPCBtYXhCb3NzZXMgJiYgdHJhY2tSb3cgLSBzdGF0ZS5sYXN0Qm9zc1RyYWNrUm93ID49IG1pblNwYWNpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbHVtbnNGb3JTdHlsZShzdHlsZTogUHJlc3N1cmVTdHlsZSwgcm5nOiBSbmcsIG1heFdhbGxXaWR0aDogbnVtYmVyKTogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSB7XG4gIGlmIChzdHlsZSA9PT0gXCJjZW50ZXJBbHRlcm5hdGluZ1wiKSByZXR1cm4gY2VudGVyQ29sdW1ucztcbiAgaWYgKHN0eWxlID09PSBcIm91dGVyQWx0ZXJuYXRpbmdcIikgcmV0dXJuIG91dGVyQ29sdW1ucztcbiAgaWYgKHN0eWxlID09PSBcIndpZGVTd2VlcFwiKSByZXR1cm4gcm5nLm5leHQoKSA+IDAuNSA/IGxlZnRDb2x1bW5zLnNsaWNlKDAsIG1heFdhbGxXaWR0aCkgOiByaWdodENvbHVtbnMuc2xpY2UoMCwgbWF4V2FsbFdpZHRoKTtcbiAgaWYgKHN0eWxlID09PSBcIm1pcnJvcmVkV2FsbHNcIikgcmV0dXJuIFtjLmxlZnQubmVhck91dGVyLCBjLnJpZ2h0Lm5lYXJPdXRlciwgYy5sZWZ0Lm1pZCwgYy5yaWdodC5taWRdLnNsaWNlKDAsIE1hdGgubWF4KDIsIE1hdGgubWluKDQsIG1heFdhbGxXaWR0aCkpKTtcbiAgaWYgKHN0eWxlID09PSBcInRhbmtCcmVha1wiKSByZXR1cm4gcm5nLm5leHQoKSA+IDAuNSA/IFtjLmxlZnQubmVhck91dGVyXSA6IFtjLnJpZ2h0LmlubmVyXTtcbiAgcmV0dXJuIHJuZy5uZXh0KCkgPiAwLjUgPyBbYy5sZWZ0Lm5lYXJPdXRlcl0gOiBbYy5yaWdodC5uZWFyT3V0ZXJdO1xufVxuXG5mdW5jdGlvbiBjb2x1bW5zVGhhdEZpdChlbmVteTogVHJhY2tFbmVteVJlZiwgY29sdW1uczogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSk6IHJlYWRvbmx5IFRyYWNrQ29sdW1uW10ge1xuICBjb25zdCBzcGFuID0gZW5lbXlDb2x1bW5TcGFuKGVuZW15KTtcbiAgcmV0dXJuIGNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4gJSA1ICsgc3BhbiA8PSA1KTtcbn1cblxuZnVuY3Rpb24gbm9uT3ZlcmxhcHBpbmdDb2x1bW5zKGVuZW15OiBUcmFja0VuZW15UmVmLCBjb2x1bW5zOiByZWFkb25seSBUcmFja0NvbHVtbltdKTogcmVhZG9ubHkgVHJhY2tDb2x1bW5bXSB7XG4gIGNvbnN0IHNwYW4gPSBlbmVteUNvbHVtblNwYW4oZW5lbXkpO1xuICBjb25zdCBvY2N1cGllZCA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuICBjb25zdCBzZWxlY3RlZDogVHJhY2tDb2x1bW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgY29uc3QgY2VsbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzcGFuIH0sIChfLCBvZmZzZXQpID0+IGNvbHVtbiArIG9mZnNldCk7XG4gICAgaWYgKGNlbGxzLnNvbWUoY2VsbCA9PiBvY2N1cGllZC5oYXMoY2VsbCkpKSBjb250aW51ZTtcbiAgICBzZWxlY3RlZC5wdXNoKGNvbHVtbik7XG4gICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSBvY2N1cGllZC5hZGQoY2VsbCk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGVkO1xufVxuXG5mdW5jdGlvbiBwbGFjZVByZXNzdXJlKHNlY3Rpb246IFRyYWNrU2VjdGlvbkJ1aWxkZXIsIHJlY2lwZTogRmFtaWx5UmVjaXBlLCBiZWF0OiBKb3VybmV5QmVhdFJlY2lwZSwgdGllcjogVHJhY2tUaWVyLCBwcm9maWxlOiBUaWVyUHJvZmlsZSwgc3RhdGU6IEdlbmVyYXRvclN0YXRlLCBybmc6IFJuZywgc3RhcnRSb3cgPSAwKTogeyB0aHJlYXQ6IG51bWJlcjsgZW5lbWllczogc3RyaW5nW10gfSB7XG4gIGNvbnN0IHByZXNzdXJlID0gYmVhdC5wcmVzc3VyZSA/PyBcIm1lZGl1bVwiO1xuICBjb25zdCB0YXJnZXRUaHJlYXQgPSBwcm9maWxlLnByZXNzdXJlVGhyZWF0W3ByZXNzdXJlXSArIHN0YXRlLnBsYXllclBvd2VyICogKHByZXNzdXJlID09PSBcInBlYWtcIiA/IDAuNDUgOiAwLjI1KTtcbiAgY29uc3QgYmFzZVN0eWxlcyA9IGJlYXQuc3R5bGVzID8/IHJlY2lwZS5wcmVzc3VyZVN0eWxlcztcbiAgY29uc3Qgc3R5bGVzID0gdGllciA9PT0gMSAmJiBwcmVzc3VyZSA9PT0gXCJoaWdoXCJcbiAgICA/IFsuLi5iYXNlU3R5bGVzLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIl0gYXMgY29uc3RcbiAgICA6IHRpZXIgPj0gMyAmJiBwcmVzc3VyZSA9PT0gXCJwZWFrXCJcbiAgICA/IFsuLi5iYXNlU3R5bGVzLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIndpZGVTd2VlcFwiLCBcIm1pcnJvcmVkV2FsbHNcIiwgXCJtaXJyb3JlZFdhbGxzXCJdIGFzIGNvbnN0XG4gICAgOiBiYXNlU3R5bGVzO1xuICBsZXQgcm93ID0gc3RhcnRSb3c7XG4gIGxldCBlbWl0dGVkVGhyZWF0ID0gMDtcbiAgY29uc3QgZW5lbWllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBiZWF0Um93cyA9IHJvd3NGb3JCZWF0KGJlYXQsIHByb2ZpbGUpO1xuICB3aGlsZSAocm93IDwgYmVhdFJvd3MgLSAxKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBybmcucGljayhzdHlsZXMpO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5zRm9yU3R5bGUoc3R5bGUsIHJuZywgcHJvZmlsZS5tYXhXYWxsV2lkdGgpO1xuICAgIGNvbnN0IHJlbWFpbmluZ1RocmVhdCA9IE1hdGgubWF4KDAsIHRhcmdldFRocmVhdCAtIGVtaXR0ZWRUaHJlYXQpO1xuICAgIGNvbnN0IHRyYWNrUm93ID0gc3RhdGUuY3Vyc29yICsgcm93O1xuICAgIGNvbnN0IHRpZXJUd29GaW5hbGVCb3NzUm93cyA9IFtcbiAgICAgIHN0YXJ0Um93ICsgTWF0aC5mbG9vcigoYmVhdFJvd3MgLSBzdGFydFJvdykgKiAuMyksXG4gICAgICBzdGFydFJvdyArIE1hdGguZmxvb3IoKGJlYXRSb3dzIC0gc3RhcnRSb3cpICogLjcyKSxcbiAgICBdO1xuICAgIGNvbnN0IHRpZXJUd29GaW5hbGVCb3NzID0gdGllciA9PT0gMlxuICAgICAgJiYgYmVhdC5raW5kID09PSBcImZpbmFsZVwiXG4gICAgICAmJiBzdGF0ZS5ib3NzZXNQbGFjZWQgPCB0aWVyVHdvRmluYWxlQm9zc1Jvd3MubGVuZ3RoXG4gICAgICAmJiByb3cgPj0gdGllclR3b0ZpbmFsZUJvc3NSb3dzW3N0YXRlLmJvc3Nlc1BsYWNlZF1cbiAgICAgICYmIGNhblBsYWNlQm9zcyh0aWVyLCBzdGF0ZSwgdHJhY2tSb3cpO1xuICAgIGNvbnN0IHRpZXJUaHJlZUJvc3MgPSB0aWVyID49IDNcbiAgICAgICYmIGNhblBsYWNlQm9zcyh0aWVyLCBzdGF0ZSwgdHJhY2tSb3cpXG4gICAgICAmJiBlbWl0dGVkVGhyZWF0IDwgdGFyZ2V0VGhyZWF0ICogMS4xNVxuICAgICAgJiYgKHN0eWxlID09PSBcInRhbmtCcmVha1wiIHx8IChwcmVzc3VyZSA9PT0gXCJwZWFrXCIgJiYgcmVtYWluaW5nVGhyZWF0ID4gMTggJiYgcm93ID4gMTIpKTtcbiAgICBjb25zdCBzaG91bGRVc2VIZWF2eSA9IHRpZXJUd29GaW5hbGVCb3NzIHx8IHRpZXJUaHJlZUJvc3M7XG4gICAgY29uc3QgYm9zc0VuZW15ID0gc2hvdWxkVXNlSGVhdnkgPyBib3NzRm9yUHJlc3N1cmUocmVjaXBlLCB0aWVyLCBzdGF0ZSkgOiBudWxsO1xuICAgIGNvbnN0IGVuZW15ID0gc2hvdWxkVXNlSGVhdnlcbiAgICAgID8gYm9zc0VuZW15ID8/IGVuZW15Rm9yUHJlc3N1cmUocmVjaXBlLCB0aWVyLCBwcmVzc3VyZSwgcm93LCBNYXRoLm1heCg0LCByZW1haW5pbmdUaHJlYXQgLyBNYXRoLm1heCgxLCBjb2x1bW5zLmxlbmd0aCkpKVxuICAgICAgOiBlbmVteUZvclByZXNzdXJlKHJlY2lwZSwgdGllciwgcHJlc3N1cmUsIHJvdywgTWF0aC5tYXgoNCwgcmVtYWluaW5nVGhyZWF0IC8gTWF0aC5tYXgoMSwgY29sdW1ucy5sZW5ndGgpKSk7XG4gICAgaWYgKHRpZXJUd29GaW5hbGVCb3NzICYmIGJvc3NFbmVteSkge1xuICAgICAgY29uc3QgY29sdW1uID0gc3RhdGUuYm9zc2VzUGxhY2VkICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmVuZW15KGJvc3NFbmVteSwgeyBjb2x1bW4gfSk7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KGJvc3NFbmVteSk7XG4gICAgICBzdGF0ZS5ib3NzZXNQbGFjZWQrKztcbiAgICAgIHN0YXRlLmxhc3RCb3NzVHJhY2tSb3cgPSB0cmFja1JvdztcbiAgICAgIGVuZW1pZXMuYWRkKGJvc3NFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7Ym9zc0VuZW15fWApO1xuICAgICAgcm93ICs9IDEyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICh0aWVyVGhyZWVCb3NzICYmIGJvc3NFbmVteSkge1xuICAgICAgY29uc3QgY29sdW1uID0gc3RhdGUuYm9zc2VzUGxhY2VkICUgMiA9PT0gMCA/IGMubGVmdC5uZWFyT3V0ZXIgOiBjLnJpZ2h0LmlubmVyO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmVuZW15KGJvc3NFbmVteSwgeyBjb2x1bW4gfSk7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KGJvc3NFbmVteSk7XG4gICAgICBzdGF0ZS5ib3NzZXNQbGFjZWQrKztcbiAgICAgIHN0YXRlLmxhc3RCb3NzVHJhY2tSb3cgPSB0cmFja1JvdztcbiAgICAgIGVuZW1pZXMuYWRkKGJvc3NFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7Ym9zc0VuZW15fWApO1xuICAgICAgcm93ICs9IDE0O1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGZpdHRpbmdDb2x1bW5zID0gY29sdW1uc1RoYXRGaXQoZW5lbXksIGNvbHVtbnMpO1xuICAgIGNvbnN0IHNhZmVFbmVteSA9IGZpdHRpbmdDb2x1bW5zLmxlbmd0aCA+IDAgPyBlbmVteSA6IFwiYmFzaWNcIjtcbiAgICBjb25zdCBzYWZlQ29sdW1ucyA9IG5vbk92ZXJsYXBwaW5nQ29sdW1ucyhzYWZlRW5lbXksIGZpdHRpbmdDb2x1bW5zLmxlbmd0aCA+IDAgPyBmaXR0aW5nQ29sdW1ucyA6IGNvbHVtbnNUaGF0Rml0KFwiYmFzaWNcIiwgY29sdW1ucykpO1xuICAgIGNvbnN0IHRocmVhdCA9IGVuZW15VGhyZWF0KHNhZmVFbmVteSkgKiBzYWZlQ29sdW1ucy5sZW5ndGg7XG4gICAgY29uc3QgYnJlYXRoUm93cyA9IHRpZXIgPT09IDEgJiYgcHJlc3N1cmUgIT09IFwiaGlnaFwiICYmIHByZXNzdXJlICE9PSBcInBlYWtcIiA/IDEgOiAwO1xuICAgIGlmIChzdHlsZSA9PT0gXCJsYW5lTGluZVwiICYmIHNhZmVDb2x1bW5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1pbig4LCBNYXRoLm1heCgxLCBiZWF0Um93cyAtIHJvdyAtIDEpKTtcbiAgICAgIHNlY3Rpb24uYXQocm93KS5saW5lKHNhZmVFbmVteSwgeyBjb2x1bW46IHNhZmVDb2x1bW5zWzBdLCBjb3VudCB9KTtcbiAgICAgIHJvdyArPSBjb3VudCArIGJyZWF0aFJvd3M7XG4gICAgICBlbWl0dGVkVGhyZWF0ICs9IGVuZW15VGhyZWF0KHNhZmVFbmVteSkgKiBjb3VudDtcbiAgICB9IGVsc2UgaWYgKHN0eWxlID09PSBcIm1pcnJvcmVkV2FsbHNcIiB8fCBzdHlsZSA9PT0gXCJ3aWRlU3dlZXBcIiB8fCAodGllciA9PT0gMSAmJiBwcmVzc3VyZSA9PT0gXCJoaWdoXCIgJiYgc2FmZUNvbHVtbnMubGVuZ3RoID4gMSkpIHtcbiAgICAgIHNlY3Rpb24uYXQocm93KS53YWxsKHNhZmVFbmVteSwgeyBjb2x1bW5zOiBzYWZlQ29sdW1ucyB9KTtcbiAgICAgIHJvdyArPSBwcmVzc3VyZSA9PT0gXCJsb3dcIiA/IDMgOiAyO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSB0aHJlYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4oMTQsIE1hdGgubWF4KDEsIGJlYXRSb3dzIC0gcm93IC0gMSkpO1xuICAgICAgc2VjdGlvbi5hdChyb3cpLmFsdGVybmF0aW5nKHNhZmVFbmVteSwgeyBjb2x1bW5zOiBzYWZlQ29sdW1ucywgY291bnQgfSk7XG4gICAgICByb3cgKz0gY291bnQgKyBicmVhdGhSb3dzO1xuICAgICAgZW1pdHRlZFRocmVhdCArPSBlbmVteVRocmVhdChzYWZlRW5lbXkpICogY291bnQ7XG4gICAgfVxuICAgIGVuZW1pZXMuYWRkKHNhZmVFbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7c2FmZUVuZW15fWApO1xuICB9XG4gIGZvciAoY29uc3QgZW5lbXkgb2YgZW5lbWllcykgc3RhdGUuc2VsZWN0ZWRFbmVtaWVzLmFkZChlbmVteSk7XG4gIHJldHVybiB7IHRocmVhdDogZW1pdHRlZFRocmVhdCwgZW5lbWllczogWy4uLmVuZW1pZXNdIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVCZWF0KGJ1aWxkZXI6IFRyYWNrQnVpbGRlciwgcmVjaXBlOiBGYW1pbHlSZWNpcGUsIGJlYXQ6IEpvdXJuZXlCZWF0UmVjaXBlLCB0aWVyOiBUcmFja1RpZXIsIHByb2ZpbGU6IFRpZXJQcm9maWxlLCBzdGF0ZTogR2VuZXJhdG9yU3RhdGUsIHJuZzogUm5nKTogdm9pZCB7XG4gIGNvbnN0IHJvd3MgPSByb3dzRm9yQmVhdChiZWF0LCBwcm9maWxlKTtcbiAgY29uc3Qgc2VnbWVudFN0YXJ0UG93ZXIgPSBzdGF0ZS5wbGF5ZXJQb3dlcjtcbiAgbGV0IHBsYWNlZFdlYXBvbnM6IHN0cmluZ1tdID0gW107XG4gIGxldCBwbGFjZWRQaWNrdXBzOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgZW1pdHRlZFRocmVhdCA9IDA7XG4gIGxldCBzZWxlY3RlZEVuZW1pZXM6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKGJlYXQua2luZCA9PT0gXCJyZXN0XCIpIHtcbiAgICBidWlsZGVyLnJlc3BpdGUocm93cyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VjdGlvbktpbmQgPSBiZWF0LmtpbmQgPT09IFwiaW50cm9cIiB8fCBiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiID8gXCJyZWJ1aWxkXCIgOiBcInByZXNzdXJlXCI7XG4gICAgYnVpbGRlci5zZWN0aW9uKHNlY3Rpb25LaW5kLCByb3dzLCBzZWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IHBpY2t1cHMgPSBwbGFjZVBpY2t1cHMoc2VjdGlvbiwgcmVjaXBlLCBiZWF0LCB0aWVyLCByb3dzLCBzdGF0ZSwgcm5nKTtcbiAgICAgIHBsYWNlZFdlYXBvbnMgPSBwaWNrdXBzLndlYXBvbnM7XG4gICAgICBwbGFjZWRQaWNrdXBzID0gcGlja3Vwcy5waWNrdXBzO1xuICAgICAgaWYgKGJlYXQua2luZCAhPT0gXCJpbnRyb1wiICYmIGJlYXQua2luZCAhPT0gXCJyZWJ1aWxkXCIpIHtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVTdGFydFJvdyA9IE1hdGgubWF4KDAsIChiZWF0LnBpY2t1cFJvbGVzPy5sZW5ndGggPz8gMCkgKiAyIC0gMSk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlID0gcGxhY2VQcmVzc3VyZShzZWN0aW9uLCByZWNpcGUsIGJlYXQsIHRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcsIHByZXNzdXJlU3RhcnRSb3cpO1xuICAgICAgICBlbWl0dGVkVGhyZWF0ID0gcHJlc3N1cmUudGhyZWF0O1xuICAgICAgICBzZWxlY3RlZEVuZW1pZXMgPSBwcmVzc3VyZS5lbmVtaWVzO1xuICAgICAgfSBlbHNlIGlmIChiZWF0LmtpbmQgPT09IFwicmVidWlsZFwiICYmIHJvd3MgPiA0KSB7XG4gICAgICAgIGNvbnN0IGVuZW15ID0gcmVjaXBlLnByZWZlcnJlZEVuZW1pZXNbMF07XG4gICAgICAgIHNlY3Rpb24uYXQocm93cyAtIDIpLmVuZW15KGVuZW15LCB7IGNvbHVtbjogcm5nLnBpY2soYWxsQ29sdW1ucykgfSk7XG4gICAgICAgIGVtaXR0ZWRUaHJlYXQgPSBlbmVteVRocmVhdChlbmVteSk7XG4gICAgICAgIHNlbGVjdGVkRW5lbWllcyA9IFtlbmVteSA9PT0gXCJiYXNpY1wiID8gXCJlbmVteS5iYXNpY1wiIDogYGVuZW15LiR7ZW5lbXl9YF07XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkRW5lbWllcy5hZGQoc2VsZWN0ZWRFbmVtaWVzWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLmN1cnNvciArPSByb3dzO1xuICBzdGF0ZS5jeWNsZSsrO1xuICBzdGF0ZS5zZWdtZW50cy5wdXNoKHtcbiAgICBraW5kOiBiZWF0LmtpbmQsXG4gICAgcm93cyxcbiAgICBwcmVzc3VyZTogYmVhdC5wcmVzc3VyZSA/PyBcIm5vbmVcIixcbiAgICB0aHJlYXRFc3RpbWF0ZTogTnVtYmVyKGVtaXR0ZWRUaHJlYXQudG9GaXhlZCgyKSksXG4gICAgcGxheWVyUG93ZXJFc3RpbWF0ZTogTnVtYmVyKHNlZ21lbnRTdGFydFBvd2VyLnRvRml4ZWQoMikpLFxuICAgIHNlbGVjdGVkV2VhcG9uczogcGxhY2VkV2VhcG9ucyxcbiAgICBzZWxlY3RlZFBpY2t1cHM6IHBsYWNlZFBpY2t1cHMsXG4gICAgc2VsZWN0ZWRFbmVtaWVzLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZUludGVybmFsKG9wdGlvbnM6IENvbXBvc2VkVHJhY2tPcHRpb25zKTogQ29tcG9zZVJlc3VsdCB7XG4gIGNvbnN0IHByb2ZpbGUgPSB0aWVyUHJvZmlsZXNbb3B0aW9ucy50aWVyXTtcbiAgY29uc3QgcmVjaXBlID0gZmFtaWx5UmVjaXBlc1tvcHRpb25zLnRoZW1lXTtcbiAgY29uc3QgdHJhY2tJZCA9IG9wdGlvbnMudHJhY2tJZCA/PyBcIm5lb24tbmVidWxhZS0xXCI7XG4gIGNvbnN0IHRyYWNrUmVjaXBlID0gb3B0aW9ucy50cmFja0lkID8gdHJhY2tSZWNpcGVzW29wdGlvbnMudHJhY2tJZF0gOiB7IGdvYWxzOiBbb3B0aW9ucy5kZXNjcmlwdGlvbl0sIHNlZWQ6IG9wdGlvbnMuc2VlZCA/PyBgJHtvcHRpb25zLnRoZW1lfToke29wdGlvbnMudGllcn1gLCBqb3VybmV5OiBkZWZhdWx0Sm91cm5leVtvcHRpb25zLnRpZXJdIH07XG4gIGNvbnN0IHNlZWQgPSBvcHRpb25zLnNlZWQgPz8gdHJhY2tSZWNpcGUuc2VlZDtcbiAgY29uc3Qgcm5nID0gY3JlYXRlUm5nKHNlZWQpO1xuICBjb25zdCBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gIGNvbnN0IGJ1aWxkZXIgPSB0cmFja0J1aWxkZXIuY3JlYXRlKHtcbiAgICBsYWJlbDogb3B0aW9ucy5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICBlbnZpcm9ubWVudDogeyBzY2VuZUlkOiBvcHRpb25zLnNjZW5lSWQgfSxcbiAgICBiYWxhbmNlOiB7IGVuZW15SHA6IHByb2ZpbGUuZW5lbXlIcCwgZW5lbXlTcGVlZDogcHJvZmlsZS5lbmVteVNwZWVkIH0sXG4gIH0pO1xuXG4gIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwge1xuICAgIGtpbmQ6IFwiaW50cm9cIixcbiAgICByb3dzOiBwcm9maWxlLnJlYnVpbGRSb3dzLFxuICAgIHBpY2t1cFJvbGVzOiBbXCJwcmltYXJ5XCIsIFwic3VwcG9ydFwiLCAuLi4ob3B0aW9ucy50aWVyID49IDMgPyBbXCJjbG9zZVJhbmdlXCIgYXMgY29uc3RdIDogW10pLCAuLi4ocmVjaXBlLm9wZW5pbmdQaWNrdXBzPy5sZW5ndGggPyBbXCJ1cGdyYWRlXCIgYXMgY29uc3RdIDogW10pXSxcbiAgfSwgb3B0aW9ucy50aWVyLCBwcm9maWxlLCBzdGF0ZSwgcm5nKTtcbiAgZm9yIChjb25zdCBiZWF0IG9mIHRyYWNrUmVjaXBlLmpvdXJuZXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5raW5kICE9PSBcImludHJvXCIpKSB7XG4gICAgaWYgKHN0YXRlLmN1cnNvciA+PSBwcm9maWxlLnRhcmdldFJvd3MgLSBwcm9maWxlLnByZXNzdXJlUm93cy5oaWdoKSBicmVhaztcbiAgICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIGJlYXQsIG9wdGlvbnMudGllciwgcHJvZmlsZSwgc3RhdGUsIHJuZyk7XG4gIH1cbiAgd2hpbGUgKHN0YXRlLmN1cnNvciA8IHByb2ZpbGUudGFyZ2V0Um93cyAtIHByb2ZpbGUucHJlc3N1cmVSb3dzLmhpZ2gpIHtcbiAgICBjb21waWxlQmVhdChidWlsZGVyLCByZWNpcGUsIHsga2luZDogc3RhdGUuY3ljbGUgJSAzID09PSAwID8gXCJyZWJ1aWxkXCIgOiBcInByZXNzdXJlXCIsIHByZXNzdXJlOiBzdGF0ZS5jeWNsZSAlIDIgPT09IDAgPyBcImhpZ2hcIiA6IFwibWVkaXVtXCIsIHBpY2t1cFJvbGVzOiBzdGF0ZS5jeWNsZSAlIDMgPT09IDAgPyBbXCJwcmltYXJ5XCIsIFwidXBncmFkZVwiXSA6IHVuZGVmaW5lZCB9LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuICB9XG4gIGNvbXBpbGVCZWF0KGJ1aWxkZXIsIHJlY2lwZSwgeyBraW5kOiBcImZpbmFsZVwiLCBwcmVzc3VyZTogb3B0aW9ucy50aWVyID09PSAxID8gXCJoaWdoXCIgOiBcInBlYWtcIiB9LCBvcHRpb25zLnRpZXIsIHByb2ZpbGUsIHN0YXRlLCBybmcpO1xuXG4gIGNvbnN0IHRyYWNrID0gYnVpbGRlci5idWlsZCgpO1xuICBjb25zdCBnZW5lcmF0ZWRSb3dzID0gdHJhY2suZGVmaW5pdGlvbi5sYXlvdXQuc3BsaXQoL1xccj9cXG4vKS5maWx0ZXIocm93ID0+IHJvdy50cmltKCkpLmxlbmd0aDtcbiAgY29uc3Qgd2VhcG9uUG93ZXJFbnRyaWVzID0gWy4uLnN0YXRlLnNlbGVjdGVkV2VhcG9uc10ubWFwKGlkID0+IFtpZCwgTnVtYmVyKHdlYXBvblBvd2VyKGlkKS50b0ZpeGVkKDIpKV0gYXMgY29uc3QpO1xuICBjb25zdCBlbmVteVRocmVhdEVudHJpZXMgPSBbLi4uc3RhdGUuc2VsZWN0ZWRFbmVtaWVzXS5tYXAoaWQgPT4gW2lkLCBOdW1iZXIoZW5lbXlUaHJlYXQoaWQpLnRvRml4ZWQoMikpXSBhcyBjb25zdCk7XG4gIHJldHVybiB7XG4gICAgdHJhY2ssXG4gICAgZGVidWc6IHtcbiAgICAgIHNlZWQsXG4gICAgICBzZWVkVmFsdWU6IHJuZy5zZWVkVmFsdWUsXG4gICAgICBmYW1pbHlJZDogb3B0aW9ucy50aGVtZSxcbiAgICAgIHRyYWNrSWQsXG4gICAgICB0aWVyOiBvcHRpb25zLnRpZXIsXG4gICAgICBnZW5lcmF0ZWRSb3dzLFxuICAgICAgc2VsZWN0ZWRXZWFwb25zOiBbLi4uc3RhdGUuc2VsZWN0ZWRXZWFwb25zXSxcbiAgICAgIHNlbGVjdGVkUGlja3VwczogWy4uLnN0YXRlLnNlbGVjdGVkUGlja3Vwc10sXG4gICAgICBzZWxlY3RlZEVuZW1pZXM6IFsuLi5zdGF0ZS5zZWxlY3RlZEVuZW1pZXNdLFxuICAgICAgd2VhcG9uUG93ZXI6IE9iamVjdC5mcm9tRW50cmllcyh3ZWFwb25Qb3dlckVudHJpZXMpLFxuICAgICAgZW5lbXlUaHJlYXQ6IE9iamVjdC5mcm9tRW50cmllcyhlbmVteVRocmVhdEVudHJpZXMpLFxuICAgICAgc2VnbWVudHM6IHN0YXRlLnNlZ21lbnRzLFxuICAgICAgd2FybmluZ3M6IHN0YXRlLndhcm5pbmdzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBUcmFja01lbWJlciB7XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwob3B0aW9ucykudHJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZUNvbXBvc2VkVHJhY2sob3B0aW9uczogQ29tcG9zZWRUcmFja09wdGlvbnMpOiBDb21wb3NlckRlYnVnU3VtbWFyeSB7XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwob3B0aW9ucykuZGVidWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlQ2F0YWxvZ1RyYWNrKHRyYWNrSWQ6IFRyYWNrQ2F0YWxvZ0lkKTogVHJhY2tNZW1iZXIge1xuICBjb25zdCBlbnRyeSA9IHRyYWNrQ2F0YWxvZ1t0cmFja0lkXTtcbiAgcmV0dXJuIGNvbXBvc2VJbnRlcm5hbCh7XG4gICAgdHJhY2tJZCxcbiAgICBsYWJlbDogZW50cnkubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IGVudHJ5LmRlc2NyaXB0aW9uLFxuICAgIHNjZW5lSWQ6IGVudHJ5LnNjZW5lSWQsXG4gICAgdGhlbWU6IGVudHJ5LnRoZW1lLFxuICAgIHRpZXI6IGVudHJ5LnRpZXIsXG4gIH0pLnRyYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVDb21wb3NlZENhdGFsb2dUcmFjayh0cmFja0lkOiBUcmFja0NhdGFsb2dJZCk6IENvbXBvc2VyRGVidWdTdW1tYXJ5IHtcbiAgY29uc3QgZW50cnkgPSB0cmFja0NhdGFsb2dbdHJhY2tJZF07XG4gIHJldHVybiBjb21wb3NlSW50ZXJuYWwoe1xuICAgIHRyYWNrSWQsXG4gICAgbGFiZWw6IGVudHJ5LmxhYmVsLFxuICAgIGRlc2NyaXB0aW9uOiBlbnRyeS5kZXNjcmlwdGlvbixcbiAgICBzY2VuZUlkOiBlbnRyeS5zY2VuZUlkLFxuICAgIHRoZW1lOiBlbnRyeS50aGVtZSxcbiAgICB0aWVyOiBlbnRyeS50aWVyLFxuICB9KS5kZWJ1Zztcbn1cbiIsICJpbXBvcnQgeyBjb21wb3NlQ2F0YWxvZ1RyYWNrIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuaW1wb3J0IHsgdHJhY2tDYXRhbG9nLCB0cmFja0ZhbWlsaWVzRnJvbUNhdGFsb2cgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcblxuZXhwb3J0IGNvbnN0IHRyYWNrcyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgT2JqZWN0LmtleXModHJhY2tDYXRhbG9nKS5tYXAodHJhY2tJZCA9PiBbdHJhY2tJZCwgY29tcG9zZUNhdGFsb2dUcmFjayh0cmFja0lkIGFzIGtleW9mIHR5cGVvZiB0cmFja0NhdGFsb2cpXSksXG4pIGFzIHsgcmVhZG9ubHkgW1RyYWNrSWQgaW4ga2V5b2YgdHlwZW9mIHRyYWNrQ2F0YWxvZ106IFJldHVyblR5cGU8dHlwZW9mIGNvbXBvc2VDYXRhbG9nVHJhY2s+IH07XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlsaWVzID0gdHJhY2tGYW1pbGllc0Zyb21DYXRhbG9nO1xuZXhwb3J0IHsgdHJhY2tDYXRhbG9nLCB0cmFja0ZhbWlseUNhdGFsb2csIHRyYWNrVGhlbWVDYXRhbG9nIH0gZnJvbSBcIi4vVHJhY2tDYXRhbG9nXCI7XG5leHBvcnQgdHlwZSB7IFRyYWNrQ2F0YWxvZ0lkLCBUcmFja0ZhbWlseUNhdGFsb2dJZCwgVHJhY2tUaGVtZUlkLCBUcmFja1RpZXIgfSBmcm9tIFwiLi9UcmFja0NhdGFsb2dcIjtcbmV4cG9ydCB7IGRlc2NyaWJlQ29tcG9zZWRDYXRhbG9nVHJhY2ssIGRlc2NyaWJlQ29tcG9zZWRUcmFjayB9IGZyb20gXCIuL1RyYWNrQ29tcG9zZXJcIjtcbmV4cG9ydCB0eXBlIHsgQ29tcG9zZXJEZWJ1Z1N1bW1hcnksIEZhbWlseVJlY2lwZSwgSm91cm5leUJlYXRLaW5kLCBKb3VybmV5QmVhdFJlY2lwZSwgUHJlc3N1cmVMZXZlbCwgUHJlc3N1cmVTdHlsZSwgU2VnbWVudERlYnVnU3VtbWFyeSwgVGllclByb2ZpbGUsIFRyYWNrUmVjaXBlIH0gZnJvbSBcIi4vVHJhY2tDb21wb3NlclwiO1xuXG5leHBvcnQgY29uc3QgbmVvbk5lYnVsYWVUcmFjazEgPSB0cmFja3NbXCJuZW9uLW5lYnVsYWUtMVwiXTtcbmV4cG9ydCBjb25zdCBuZW9uTmVidWxhZVRyYWNrMiA9IHRyYWNrc1tcIm5lb24tbmVidWxhZS0yXCJdO1xuZXhwb3J0IGNvbnN0IG5lb25OZWJ1bGFlVHJhY2szID0gdHJhY2tzW1wibmVvbi1uZWJ1bGFlLTNcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2sxID0gdHJhY2tzW1wiYXVyb3JhLTFcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2syID0gdHJhY2tzW1wiYXVyb3JhLTJcIl07XG5leHBvcnQgY29uc3QgYXVyb3JhVHJhY2szID0gdHJhY2tzW1wiYXVyb3JhLTNcIl07XG5leHBvcnQgY29uc3QgY3J5c3RhbEZvcmdlVHJhY2sxID0gdHJhY2tzW1wiY3J5c3RhbC1mb3JnZS0xXCJdO1xuZXhwb3J0IGNvbnN0IGNyeXN0YWxGb3JnZVRyYWNrMiA9IHRyYWNrc1tcImNyeXN0YWwtZm9yZ2UtMlwiXTtcbmV4cG9ydCBjb25zdCBjcnlzdGFsRm9yZ2VUcmFjazMgPSB0cmFja3NbXCJjcnlzdGFsLWZvcmdlLTNcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMSA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTFcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMiA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTJcIl07XG5leHBvcnQgY29uc3Qgdm9pZEdhcmRlblRyYWNrMyA9IHRyYWNrc1tcInZvaWQtZ2FyZGVuLTNcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMSA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTFcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMiA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTJcIl07XG5leHBvcnQgY29uc3Qgc29sYXJBcnJheVRyYWNrMyA9IHRyYWNrc1tcInNvbGFyLWFycmF5LTNcIl07XG4iLCAiaW1wb3J0IHsgaXNMYW5lUnVubmVyU2NlbmVJZCB9IGZyb20gXCJAanVzdC10aGUtZ2FtZXMtcGxlYXNlL25lb24tZmFjdG9yeVwiO1xuaW1wb3J0IHsgRmFtaWx5RGVmaW5pdGlvbiB9IGZyb20gXCIuL0ZhbWlseURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgVHJhY2tGYW1pbHlNZW1iZXIsIFRyYWNrTWVtYmVyIH0gZnJvbSBcIi4vVHJhY2tEZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBwYXJzZVRyYWNrRGVmaW5pdGlvbiB9IGZyb20gXCIuL1RyYWNrRGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgdHJhY2tGYW1pbGllcywgdHJhY2tzIH0gZnJvbSBcIi4vdHJhY2tzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFja0ZhbWlseURlZmluaXRpb24gZXh0ZW5kcyBGYW1pbHlEZWZpbml0aW9uPFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPj4ge1xuICByZWFkb25seSBmYW1pbHlJZCA9IFwidHJhY2tcIjtcbiAgcmVhZG9ubHkgbGFiZWwgPSBcIlRyYWNrXCI7XG4gIHJlYWRvbmx5IG1lbWJlcnMgPSB0cmFja3Mgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIFRyYWNrTWVtYmVyPjtcbiAgcmVhZG9ubHkgZmFtaWxpZXMgPSB0cmFja0ZhbWlsaWVzIHNhdGlzZmllcyBSZWNvcmQ8c3RyaW5nLCBUcmFja0ZhbWlseU1lbWJlcjxrZXlvZiB0eXBlb2YgdHJhY2tzPj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgdHJhY2tdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubWVtYmVycykpIHtcbiAgICAgIHBhcnNlVHJhY2tEZWZpbml0aW9uKHRyYWNrLmRlZmluaXRpb24pO1xuICAgICAgdGhpcy5yZXF1aXJlKGlzTGFuZVJ1bm5lclNjZW5lSWQodHJhY2suZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaWQsIGZhbWlseV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5mYW1pbGllcykpIHtcbiAgICAgIHRoaXMucmVxdWlyZShmYW1pbHkudHJhY2tJZHMubGVuZ3RoID4gMCwgYCR7aWR9IG11c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgdHJhY2suYCk7XG4gICAgICB0aGlzLnJlcXVpcmUoaXNMYW5lUnVubmVyU2NlbmVJZChmYW1pbHkuZW52aXJvbm1lbnQuc2NlbmVJZCksIGAke2lkfSBoYXMgYW4gdW5rbm93biBzY2VuZSBpZC5gKTtcbiAgICAgIGZvciAoY29uc3QgdHJhY2tJZCBvZiBmYW1pbHkudHJhY2tJZHMpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlKHRyYWNrSWQgaW4gdGhpcy5tZW1iZXJzLCBgJHtpZH0gcmVmZXJlbmNlcyB1bmtub3duIHRyYWNrIFwiJHt0cmFja0lkfVwiLmApO1xuICAgICAgICB0aGlzLnJlcXVpcmUodGhpcy5tZW1iZXJzW3RyYWNrSWRdLmVudmlyb25tZW50LnNjZW5lSWQgPT09IGZhbWlseS5lbnZpcm9ubWVudC5zY2VuZUlkLCBgJHt0cmFja0lkfSBtdXN0IHVzZSB0aGUgJHtpZH0gc2NlbmUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0cmFja0ZhbWlseSA9IG5ldyBUcmFja0ZhbWlseURlZmluaXRpb24oKTtcbmV4cG9ydCB0eXBlIFRyYWNrSWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkubWVtYmVycztcbmV4cG9ydCB0eXBlIFRyYWNrRmFtaWx5SWQgPSBrZXlvZiB0eXBlb2YgdHJhY2tGYW1pbHkuZmFtaWxpZXM7XG4iLCAiaW1wb3J0IHsgY3JlYXRlVGVzdFBhZ2UgfSBmcm9tIFwiQGp1c3QtdGhlLWdhbWVzLXBsZWFzZS9uZW9uLWZhY3RvcnlcIjtcbmltcG9ydCB7IHNob3dzdG9wcGVyRmFtaWx5LCB0eXBlIFNob3dzdG9wcGVySWQsIHR5cGUgU2hvd3N0b3BwZXJNZW1iZXIgfSBmcm9tIFwiLi4vLi4vQ29tYmF0RGVmaW5pdGlvblwiO1xuXG5pbnRlcmZhY2UgU2hvd3N0b3BwZXJTbW9rZVJlc3VsdCB7XG4gIHNob3dzdG9wcGVySWQ6IFNob3dzdG9wcGVySWQ7XG4gIHBhc3NlZDogYm9vbGVhbjtcbiAgZmFpbHVyZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxPdXRwdXRFbGVtZW50PihcIiN0ZXN0LXN0YXR1c1wiKSE7XG5jb25zdCByZXN1bHRzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTE9MaXN0RWxlbWVudD4oXCIjcmVzdWx0c1wiKSE7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2hvd3N0b3BwZXIoaWQ6IFNob3dzdG9wcGVySWQsIG1lbWJlcjogU2hvd3N0b3BwZXJNZW1iZXIpOiBTaG93c3RvcHBlclNtb2tlUmVzdWx0IHtcbiAgY29uc3QgZmFpbHVyZXM6IHN0cmluZ1tdID0gW107XG4gIGlmIChtZW1iZXIuYmFua0JlaGF2aW9yICE9PSBcImJhbmtlZE1hbnVhbFRyaWdnZXJcIikgZmFpbHVyZXMucHVzaChcIm11c3QgYmUgbWFudWFsbHkgYmFua2VkIGFuZCB0cmlnZ2VyZWRcIik7XG4gIGlmIChtZW1iZXIuZHVyYXRpb25NcyA8PSAwKSBmYWlsdXJlcy5wdXNoKFwiZHVyYXRpb24gbXVzdCBiZSBwb3NpdGl2ZVwiKTtcbiAgaWYgKG1lbWJlci5jZW50ZXJDYW1lcmFNcyA8IDApIGZhaWx1cmVzLnB1c2goXCJjZW50ZXIgY2FtZXJhIHRpbWluZyBjYW5ub3QgYmUgbmVnYXRpdmVcIik7XG4gIGlmIChtZW1iZXIucmV0dXJuQ2FtZXJhTXMgPD0gMCkgZmFpbHVyZXMucHVzaChcInJldHVybiBjYW1lcmEgdGltaW5nIG11c3QgYmUgcG9zaXRpdmVcIik7XG4gIGlmIChtZW1iZXIudGltZVdhcnBbMF0/LmF0TXMgIT09IDApIGZhaWx1cmVzLnB1c2goXCJ0aW1lIHdhcnAgbXVzdCBzdGFydCBhdCAwbXNcIik7XG4gIGlmIChtZW1iZXIuY2FtZXJhWzBdPy5hdE1zICE9PSAwKSBmYWlsdXJlcy5wdXNoKFwiY2FtZXJhIGNob3Jlb2dyYXBoeSBtdXN0IHN0YXJ0IGF0IDBtc1wiKTtcbiAgaWYgKG1lbWJlci50aW1lV2FycC5hdCgtMSk/LmF0TXMgIT09IG1lbWJlci5kdXJhdGlvbk1zKSBmYWlsdXJlcy5wdXNoKFwidGltZSB3YXJwIG11c3QgZW5kIGF0IGR1cmF0aW9uTXNcIik7XG4gIGlmICgobWVtYmVyLmNhbWVyYS5hdCgtMSk/LmF0TXMgPz8gMCkgPiBtZW1iZXIuZHVyYXRpb25NcykgZmFpbHVyZXMucHVzaChcImNhbWVyYSBjaG9yZW9ncmFwaHkgY2Fubm90IGV4Y2VlZCBkdXJhdGlvbk1zXCIpO1xuICBpZiAoIW1lbWJlci50aW1lbGluZUV2ZW50cy5zb21lKGV2ZW50ID0+IGV2ZW50LnR5cGUgPT09IFwic3RhcnRBdHRhY2tcIikpIGZhaWx1cmVzLnB1c2goXCJzaG93c3RvcHBlciBuZWVkcyBhIHN0YXJ0IGF0dGFjayBldmVudFwiKTtcbiAgaWYgKCFtZW1iZXIudGltZWxpbmVFdmVudHMuc29tZShldmVudCA9PiBldmVudC50eXBlID09PSBcInN0b3BBdHRhY2tcIikpIGZhaWx1cmVzLnB1c2goXCJzaG93c3RvcHBlciBuZWVkcyBhIHN0b3AgYXR0YWNrIGV2ZW50XCIpO1xuICBpZiAobWVtYmVyLmF0dGFjay50YXJnZXRpbmcgIT09IFwiYWxsTGFuZXNBaGVhZFwiKSBmYWlsdXJlcy5wdXNoKFwiZmlyc3Qgc2xpY2UgbmVlZHMgYW4gYWxsLWxhbmUgYXR0YWNrXCIpO1xuICBpZiAobWVtYmVyLmF0dGFjay5yb3dzQWhlYWQgPD0gMCkgZmFpbHVyZXMucHVzaChcImF0dGFjayByb3dzQWhlYWQgbXVzdCBiZSBwb3NpdGl2ZVwiKTtcbiAgY29uc3QgbWluR2FtZXBsYXlTY2FsZSA9IE1hdGgubWluKC4uLm1lbWJlci50aW1lV2FycC5tYXAocG9pbnQgPT4gcG9pbnQuZ2FtZXBsYXlTY2FsZSkpO1xuICBpZiAobWluR2FtZXBsYXlTY2FsZSA+IC4yNSkgZmFpbHVyZXMucHVzaChcImNpbmVtYXRpYyB0aW1lIHdhcnAgc2hvdWxkIHNsb3cgZ2FtZXBsYXkgbWVhbmluZ2Z1bGx5XCIpO1xuICBjb25zdCBjYW1lcmFNb3Zlc0ZvcndhcmQgPSBtZW1iZXIuY2FtZXJhLnNvbWUocG9zZSA9PiBwb3NlLmZvbGxvd0Rpc3RhbmNlIDwgbWVtYmVyLmNhbWVyYVswXS5mb2xsb3dEaXN0YW5jZSAtIDYwKTtcbiAgaWYgKCFjYW1lcmFNb3Zlc0ZvcndhcmQpIGZhaWx1cmVzLnB1c2goXCJjYW1lcmEgY2hvcmVvZ3JhcGh5IHNob3VsZCBtb3ZlIGZvcndhcmQgZnJvbSB0aGUgcGxheWVyIFBPVlwiKTtcblxuICByZXR1cm4geyBzaG93c3RvcHBlcklkOiBpZCwgcGFzc2VkOiBmYWlsdXJlcy5sZW5ndGggPT09IDAsIGZhaWx1cmVzIH07XG59XG5cbmZ1bmN0aW9uIHJ1bigpOiBTaG93c3RvcHBlclNtb2tlUmVzdWx0W10ge1xuICBjb25zdCByZXN1bHRzID0gT2JqZWN0LmVudHJpZXMoc2hvd3N0b3BwZXJGYW1pbHkubWVtYmVycykubWFwKChbaWQsIG1lbWJlcl0pID0+XG4gICAgdmFsaWRhdGVTaG93c3RvcHBlcihpZCBhcyBTaG93c3RvcHBlcklkLCBtZW1iZXIpKTtcbiAgcmVzdWx0c0VsZW1lbnQuaW5uZXJIVE1MID0gcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICBjb25zdCBtZW1iZXIgPSBzaG93c3RvcHBlckZhbWlseS5tZW1iZXJzW3Jlc3VsdC5zaG93c3RvcHBlcklkXTtcbiAgICBjb25zdCBtaW5HYW1lcGxheVNjYWxlID0gTWF0aC5taW4oLi4ubWVtYmVyLnRpbWVXYXJwLm1hcChwb2ludCA9PiBwb2ludC5nYW1lcGxheVNjYWxlKSk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxsaSBkYXRhLXBhc3NlZD1cIiR7cmVzdWx0LnBhc3NlZH1cIiBkYXRhLXNob3dzdG9wcGVyLWlkPVwiJHtyZXN1bHQuc2hvd3N0b3BwZXJJZH1cIj5cbiAgICAgICAgPHN0cm9uZz4ke21lbWJlci5sYWJlbH08L3N0cm9uZz5cbiAgICAgICAgPHNwYW4+JHtyZXN1bHQucGFzc2VkID8gXCJQQVNTXCIgOiBcIkZBSUxcIn08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsXCI+JHtyZXN1bHQucGFzc2VkXG4gICAgICAgICAgPyBgJHttZW1iZXIuZHVyYXRpb25Nc31tcyAtIG1pbiBzcGVlZCAkeyhtaW5HYW1lcGxheVNjYWxlICogMTAwKS50b0ZpeGVkKDApfSUgLSAke21lbWJlci5hdHRhY2sucm93c0FoZWFkfSBhdHRhY2sgcm93c2BcbiAgICAgICAgICA6IHJlc3VsdC5mYWlsdXJlcy5qb2luKFwiIHwgXCIpfTwvc3Bhbj5cbiAgICAgIDwvbGk+YDtcbiAgfSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmNvbnN0IHRlc3QgPSBjcmVhdGVUZXN0UGFnZShcIm5lb24tc3dhcm0tc2hvd3N0b3BwZXItZmFtaWx5LXNtb2tlXCIsIHsgc3VpdGU6IFwic21va2VcIiwgcnVuIH0sIHN0YXR1cyk7XG50ZXN0LnJlYWR5KCk7XG5mb3IgKGNvbnN0IHJlc3VsdCBvZiBydW4oKSkge1xuICB0ZXN0LmFzc2VydChgJHtyZXN1bHQuc2hvd3N0b3BwZXJJZH0gZGVmaW5pdGlvbiBpcyB2YWxpZGAsIHJlc3VsdC5wYXNzZWQsIHJlc3VsdC5mYWlsdXJlcy5qb2luKFwiOyBcIikgfHwgXCJhbGwgY2hlY2tzIHBhc3NlZFwiKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxJQUFNLGNBQWM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7OztBQ09BLElBQU0sVUFBVSxDQUFDLE9BQWUs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c0JBQXNCLHNCQUFzQixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLEtBQUcsS0FBSSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUMzUCxLQUFLLFVBQVUsc0JBQXNCLHNCQUFzQixDQUFDLENBQUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxNQUFJLEtBQUksR0FBRyxDQUFDLE1BQUksR0FBRSxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxHQUFFLEdBQUcsQ0FBQyxPQUFLLEtBQUksQ0FBQyxHQUFHLE9BQU87QUFBQSxFQUMzTCxLQUFLLFVBQVUsdUJBQXVCLHVCQUF1QixDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFJLEVBQUUsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsTUFBSSxJQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUcsR0FBRyxDQUFDLE1BQUksSUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLE9BQUssSUFBRyxHQUFHLENBQUMsT0FBSyxJQUFHLEdBQUcsQ0FBQyxPQUFLLElBQUcsR0FBRyxD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QUEsRUFDN0UsS0FBSyxRQUFRLGFBQWEsWUFBWSxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFFLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ2pGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxRQUFRLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxJQUFHLEdBQUUsTUFBSSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3JGLEtBQUssUUFBUSxnQkFBZ0IsV0FBVyxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLE1BQUksS0FBSSxHQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxHQUFFLElBQUcsR0FBRSxDQUFDLE1BQUksSUFBRyxHQUFFLENBQUMsTUFBSSxDQUFDLEdBQUUsQ0FBQyxPQUFLLENBQUMsR0FBRSxDQUFDLE9BQUssSUFBRyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksR0FBRSxDQUFDLE9BQUssS0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksQ0FBQyxJQUFFLE1BQUksSUFBRSxJQUFHLENBQVUsQ0FBQyxDQUFDO0FBQUEsRUFDcE4sS0FBSyxRQUFRLGVBQWUsVUFBVSxDQUFDLENBQUMsT0FBSyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSSxHQUFFLENBQUMsR0FBRSxJQUFHLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLE9BQUssQ0FBQyxHQUFFLENBQUMsSUFBRyxJQUFHLEdBQUUsQ0FBQyxJQUFHLEtBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFJLEdBQUUsQ0FBQyxLQUFHLEtBQUksR0FBRSxDQUFDLEtBQUcsSUFBRyxHQUFFLENBQUMsTUFBSSxJQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDckssS0FBSyxRQUFRLFlBQVksWUFBWSxRQUFRLEVBQUUsR0FB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SCxNQUFJLENBQUMsT0FBTyxlQUFlLEtBQUssV0FBUyxNQUFNLFNBQVMsWUFBWSxFQUFHLFVBQVMsS0FBSyx1Q0FBdUM7QUFDNUgsTUFBSSxPQUFPLE9BQU8sY0FBYyxnQkFBaUIsVUFBUyxLQUFLLHNDQUFzQztBQUNyRyxNQUFJLE9BQU8sT0FBTyxhQUFhLEVBQUcsVUFBUyxLQUFLLG1DQUFtQztBQUNuRixRQUFNLG1CQUFtQixLQUFLLElBQUksR0FBRyxPQUFPLFNBQVMsSUFBSSxXQUFTLE1BQU0sYUFBYSxDQUFDO0FBQ3RGLE1BQUksbUJBQW1CLEtBQUssVUFBUyxLQUFLLHVEQUF1RDtBQUNqRyxRQUFNLHFCQUFxQixPQUFPLE9BQU8sS0FBSyxVQUFRLEtBQUssaUJBQWlCLE9BQU8sT0FBTyxDQUFDLEVBQUUsaUJBQWlCLEVBQUU7QUFDaEgsTUFBSSxDQUFDLG1CQUFvQixVQUFTLEtBQUssNkRBQTZEO0FBRXBHLFNBQU8sRUFBRSxlQUFlLElBQUksUUFBUSxTQUFTLFdBQVcsR0FBRyxTQUFTO0FBQ3RFO0FBRUEsU0FBUyxNQUFnQztBQUN2QyxRQUFNLFVBQVUsT0FBTyxRQUFRLGtCQUFrQixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLE1BQ3hFLG9CQUFvQixJQUFxQixNQUFNLENBQUM7QUFDbEQsaUJBQWUsWUFBWSxRQUFRLElBQUksWUFBVTtBQUMvQyxVQUFNLFNBQVMsa0JBQWtCLFFBQVEsT0FBTyxhQUFhO0FBQzdELFVBQU0sbUJBQW1CLEtBQUssSUFBSSxHQUFHLE9BQU8sU0FBUyxJQUFJLFdBQVMsTUFBTSxhQUFhLENBQUM7QUFDdEYsV0FBTztBQUFBLHlCQUNjLE9BQU8sTUFBTSwwQkFBMEIsT0FBTyxhQUFhO0FBQUEsa0JBQ2xFLE9BQU8sS0FBSztBQUFBLGdCQUNkLE9BQU8sU0FBUyxTQUFTLE1BQU07QUFBQSwrQkFDaEIsT0FBTyxTQUMxQixHQUFHLE9BQU8sVUFBVSxtQkFBbUIsbUJBQW1CLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxPQUFPLE9BQU8sU0FBUyxpQkFDdkcsT0FBTyxTQUFTLEtBQUssS0FBSyxDQUFDO0FBQUE7QUFBQSxFQUVyQyxDQUFDLEVBQUUsS0FBSyxFQUFFO0FBQ1YsU0FBTztBQUNUO0FBRUEsSUFBTSxPQUFPLGVBQWUsdUNBQXVDLEVBQUUsT0FBTyxTQUFTLElBQUksR0FBRyxNQUFNO0FBQ2xHLEtBQUssTUFBTTtBQUNYLFdBQVcsVUFBVSxJQUFJLEdBQUc7QUFDMUIsT0FBSyxPQUFPLEdBQUcsT0FBTyxhQUFhLHdCQUF3QixPQUFPLFFBQVEsT0FBTyxTQUFTLEtBQUssSUFBSSxLQUFLLG1CQUFtQjtBQUM3SDsiLAogICJuYW1lcyI6IFsibGV2ZWwiLCAibGV2ZWwiXQp9Cg==

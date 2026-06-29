import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export type ShotPattern = "single" | "rapidSingle" | "burst" | "heavySingle" | "pairedSpread";
export type ProjectileBehavior = "straight" | "piercingStraight";
export type ProjectileShape = "needle" | "dart" | "slug" | "splitBolt";
export type MuzzleEffect = "crispStar" | "rapidFlicker" | "groupedPulse" | "shockDiamond" | "twinProngs";
export type ImpactEffect = "pinSpark" | "needleScatter" | "burstCross" | "impactRing" | "splitRipple";

export interface GunLevel {
  level: number;
  fireRatePerSecond: number;
  damage: number;
  projectileSpeed: number;
  projectileRadius: number;
  collisionRadiusScale?: number;
  projectileCount: number;
  burstCount: number;
  burstIntervalMs: number;
  spreadDegrees: number;
  pierce: number;
  trailLength: number;
  tracerEveryNthShot: number;
  impactRadius?: number;
  knockback: number;
  muzzleFlashScale: number;
  hitFlashScale: number;
}

export interface GunVisualIdentity {
  silhouette: string;
  motionLanguage: string;
  projectileShape: ProjectileShape;
  projectileColor: NeonColorName;
  trailColor: NeonColorName;
  coreColor: NeonColorName;
  projectileAspect: number;
  trailWidthScale: number;
  visualIntensity: number;
  muzzleEffect: MuzzleEffect;
  impactEffect: ImpactEffect;
  muzzleDurationMs: number;
  impactDurationMs: number;
  horizontalJitter: number;
  pickupShapeZoom?: number;
}

export interface GunMember {
  label: string;
  rarity: "starter" | "common" | "uncommon";
  unlockPhase: "start" | "firstBuild" | "pressure";
  shotPattern: ShotPattern;
  projectileBehavior: ProjectileBehavior;
  visualIdentity: GunVisualIdentity;
  levels: readonly GunLevel[];
}

const level = (
  levelNumber: number,
  values: Omit<GunLevel, "level" | "projectileCount" | "burstCount" | "burstIntervalMs" | "spreadDegrees" | "pierce" | "tracerEveryNthShot" | "knockback"> &
    Partial<Pick<GunLevel, "projectileCount" | "burstCount" | "burstIntervalMs" | "spreadDegrees" | "pierce" | "tracerEveryNthShot" | "knockback" | "impactRadius">>,
): GunLevel => ({
  level: levelNumber,
  projectileCount: 1,
  burstCount: 1,
  burstIntervalMs: 0,
  spreadDegrees: 0,
  pierce: 0,
  tracerEveryNthShot: 0,
  knockback: 0,
  ...values,
});

export class GunFamilyDefinition extends FamilyDefinition<Record<string, GunMember>> {
  readonly familyId = "gun";
  readonly label = "Gun";
  readonly implementation = {
    autoFires: true,
    targeting: "laneForward",
    projectileModel: "kinematic",
    collisionModel: "circleVsEnemy",
    allowedShotPatterns: ["single", "rapidSingle", "burst", "heavySingle", "pairedSpread"] satisfies ShotPattern[],
    allowedProjectileBehaviors: ["straight", "piercingStraight"] satisfies ProjectileBehavior[],
  } as const;

  readonly members = {
    pulsePistol: {
      label: "Pulse Pistol", rarity: "starter", unlockPhase: "start", shotPattern: "single", projectileBehavior: "straight",
      visualIdentity: { silhouette: "tinyBullet", motionLanguage: "cleanSingleShot", projectileShape: "dart", projectileColor: "cyan", trailColor: "deepBlue", coreColor: "cyan", projectileAspect: 2.8, trailWidthScale: 0.65, visualIntensity: 0.9, muzzleEffect: "crispStar", impactEffect: "pinSpark", muzzleDurationMs: 72, impactDurationMs: 105, horizontalJitter: 0 },
      levels: [
        level(1,{fireRatePerSecond:1.35,damage:1,projectileSpeed:540,projectileRadius:3,trailLength:14,muzzleFlashScale:.65,hitFlashScale:.75}),
        level(2,{fireRatePerSecond:1.75,damage:1.15,projectileSpeed:580,projectileRadius:3,trailLength:16,muzzleFlashScale:.7,hitFlashScale:.8}),
        level(3,{fireRatePerSecond:2.15,damage:1.35,projectileSpeed:620,projectileRadius:3.25,trailLength:18,muzzleFlashScale:.75,hitFlashScale:.9}),
        level(4,{fireRatePerSecond:2.45,damage:1.5,projectileSpeed:650,projectileRadius:3.35,trailLength:19,muzzleFlashScale:.8,hitFlashScale:.95}),
        level(5,{fireRatePerSecond:2.75,damage:1.65,projectileSpeed:680,projectileRadius:3.5,trailLength:20,muzzleFlashScale:.85,hitFlashScale:1}),
      ],
    },
    needlerSmg: {
      label: "Needler SMG", rarity: "common", unlockPhase: "firstBuild", shotPattern: "rapidSingle", projectileBehavior: "straight",
      visualIdentity: { silhouette: "spraySphere", motionLanguage: "stochasticNeedleSpray", projectileShape: "needle", projectileColor: "green", trailColor: "cyan", coreColor: "green", projectileAspect: 1, trailWidthScale: 0.28, visualIntensity: 0.78, muzzleEffect: "rapidFlicker", impactEffect: "needleScatter", muzzleDurationMs: 46, impactDurationMs: 85, horizontalJitter: 7 },
      levels: [
        level(1,{fireRatePerSecond:5.25,damage:.42,projectileSpeed:690,projectileRadius:2,spreadDegrees:1,trailLength:10,tracerEveryNthShot:5,muzzleFlashScale:.35,hitFlashScale:.45}),
        level(2,{fireRatePerSecond:7.25,damage:.48,projectileSpeed:735,projectileRadius:2,spreadDegrees:1.5,trailLength:11,tracerEveryNthShot:5,muzzleFlashScale:.4,hitFlashScale:.5}),
        level(3,{fireRatePerSecond:9.25,damage:.54,projectileSpeed:780,projectileRadius:2.15,spreadDegrees:2,trailLength:12,tracerEveryNthShot:4,muzzleFlashScale:.45,hitFlashScale:.55}),
        level(4,{fireRatePerSecond:10.75,damage:.59,projectileSpeed:815,projectileRadius:2.2,spreadDegrees:2.25,trailLength:13,tracerEveryNthShot:4,muzzleFlashScale:.5,hitFlashScale:.6}),
        level(5,{fireRatePerSecond:12.25,damage:.64,projectileSpeed:850,projectileRadius:2.25,spreadDegrees:2.5,trailLength:14,tracerEveryNthShot:3,muzzleFlashScale:.55,hitFlashScale:.65}),
      ],
    },
    burstCarbine: {
      label: "Burst Carbine", rarity: "common", unlockPhase: "firstBuild", shotPattern: "burst", projectileBehavior: "straight",
      visualIdentity: { silhouette: "shortTracerBullet", motionLanguage: "groupedVolley", projectileShape: "dart", projectileColor: "gold", trailColor: "orange", coreColor: "gold", projectileAspect: 2.2, trailWidthScale: 0.8, visualIntensity: 1.05, muzzleEffect: "groupedPulse", impactEffect: "burstCross", muzzleDurationMs: 86, impactDurationMs: 120, horizontalJitter: 0 },
      levels: [
        level(1,{fireRatePerSecond:.95,damage:.75,projectileSpeed:650,projectileRadius:2.75,burstCount:3,burstIntervalMs:72,spreadDegrees:.75,trailLength:15,muzzleFlashScale:.55,hitFlashScale:.65}),
        level(2,{fireRatePerSecond:1.08,damage:.85,projectileSpeed:690,projectileRadius:2.85,burstCount:3,burstIntervalMs:64,spreadDegrees:.75,trailLength:16,muzzleFlashScale:.6,hitFlashScale:.7}),
        level(3,{fireRatePerSecond:1.15,damage:.9,projectileSpeed:725,projectileRadius:3,burstCount:4,burstIntervalMs:58,spreadDegrees:1,trailLength:17,muzzleFlashScale:.65,hitFlashScale:.75}),
        level(4,{fireRatePerSecond:1.28,damage:1,projectileSpeed:760,projectileRadius:3.05,burstCount:4,burstIntervalMs:54,spreadDegrees:1,trailLength:18,muzzleFlashScale:.7,hitFlashScale:.82}),
        level(5,{fireRatePerSecond:1.38,damage:1.08,projectileSpeed:795,projectileRadius:3.1,burstCount:5,burstIntervalMs:50,spreadDegrees:1.15,trailLength:19,muzzleFlashScale:.78,hitFlashScale:.9}),
      ],
    },
    heavyCannon: {
      label: "Heavy Cannon", rarity: "uncommon", unlockPhase: "pressure", shotPattern: "heavySingle", projectileBehavior: "piercingStraight",
      visualIdentity: { silhouette: "chunkyBolt", motionLanguage: "slowHeavyPunch", projectileShape: "slug", projectileColor: "orange", trailColor: "red", coreColor: "gold", projectileAspect: 1.35, trailWidthScale: 1.35, visualIntensity: 1.2, muzzleEffect: "shockDiamond", impactEffect: "impactRing", muzzleDurationMs: 135, impactDurationMs: 190, horizontalJitter: 0 },
      levels: [
        level(1,{fireRatePerSecond:.72,damage:2.4,projectileSpeed:500,projectileRadius:4.5,pierce:1,trailLength:22,impactRadius:14,knockback:14,muzzleFlashScale:1.1,hitFlashScale:1.25}),
        level(2,{fireRatePerSecond:.82,damage:3,projectileSpeed:535,projectileRadius:4.75,pierce:1,trailLength:24,impactRadius:16,knockback:18,muzzleFlashScale:1.2,hitFlashScale:1.35}),
        level(3,{fireRatePerSecond:.9,damage:3.6,projectileSpeed:570,projectileRadius:5,pierce:2,trailLength:26,impactRadius:18,knockback:22,muzzleFlashScale:1.3,hitFlashScale:1.5}),
        level(4,{fireRatePerSecond:.98,damage:4.1,projectileSpeed:600,projectileRadius:5.2,pierce:2,trailLength:28,impactRadius:20,knockback:26,muzzleFlashScale:1.4,hitFlashScale:1.62}),
        level(5,{fireRatePerSecond:1.05,damage:4.6,projectileSpeed:630,projectileRadius:5.4,pierce:3,trailLength:30,impactRadius:22,knockback:30,muzzleFlashScale:1.5,hitFlashScale:1.75}),
      ],
    },
    splitterRifle: {
      label: "Splitter Rifle", rarity: "uncommon", unlockPhase: "pressure", shotPattern: "pairedSpread", projectileBehavior: "straight",
      visualIdentity: { silhouette: "pairedBolt", motionLanguage: "currentLaneFork", projectileShape: "splitBolt", projectileColor: "violet", trailColor: "pink", coreColor: "violet", projectileAspect: 3.4, trailWidthScale: 0.55, visualIntensity: 1, muzzleEffect: "twinProngs", impactEffect: "splitRipple", muzzleDurationMs: 95, impactDurationMs: 145, horizontalJitter: 0 },
      levels: [
        level(1,{fireRatePerSecond:1.15,damage:.8,projectileSpeed:585,projectileRadius:2.75,collisionRadiusScale:1.85,projectileCount:2,spreadDegrees:2.5,trailLength:14,muzzleFlashScale:.65,hitFlashScale:.65}),
        level(2,{fireRatePerSecond:1.35,damage:.95,projectileSpeed:625,projectileRadius:2.85,collisionRadiusScale:1.85,projectileCount:2,spreadDegrees:3,trailLength:15,muzzleFlashScale:.7,hitFlashScale:.7}),
        level(3,{fireRatePerSecond:1.5,damage:1,projectileSpeed:660,projectileRadius:2.95,collisionRadiusScale:1.9,projectileCount:3,spreadDegrees:5,trailLength:16,muzzleFlashScale:.78,hitFlashScale:.75}),
        level(4,{fireRatePerSecond:1.7,damage:1.12,projectileSpeed:700,projectileRadius:3.05,collisionRadiusScale:1.9,projectileCount:3,spreadDegrees:5.5,trailLength:17,muzzleFlashScale:.84,hitFlashScale:.82}),
        level(5,{fireRatePerSecond:1.85,damage:1.2,projectileSpeed:735,projectileRadius:3.1,collisionRadiusScale:1.95,projectileCount:4,spreadDegrees:6.25,trailLength:18,muzzleFlashScale:.92,hitFlashScale:.9}),
      ],
    },
  } as const satisfies Record<string, GunMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, gun] of Object.entries(this.members)) {
      this.require(this.implementation.allowedShotPatterns.includes(gun.shotPattern), `${id} has an unsupported shot pattern.`);
      this.require(this.implementation.allowedProjectileBehaviors.includes(gun.projectileBehavior), `${id} has an unsupported projectile behavior.`);
      this.require(neonPalette[gun.visualIdentity.projectileColor] !== undefined, `${id} has an unknown projectile color.`);
      this.require(neonPalette[gun.visualIdentity.trailColor] !== undefined, `${id} has an unknown trail color.`);
      this.require(gun.visualIdentity.muzzleDurationMs > 0 && gun.visualIdentity.impactDurationMs > 0, `${id} effect durations must be positive.`);
      this.require(gun.levels.length > 0, `${id} must define levels.`);
      this.require(gun.levels.length === 5, `${id} must define exactly five levels.`);
      for (const tuning of gun.levels) {
        this.require(tuning.fireRatePerSecond > 0, `${id} level ${tuning.level} fire rate must be positive.`);
        this.require(tuning.damage > 0 && tuning.projectileSpeed > 0 && tuning.projectileRadius > 0, `${id} level ${tuning.level} has invalid projectile power.`);
        this.require(tuning.collisionRadiusScale === undefined || tuning.collisionRadiusScale >= 1, `${id} level ${tuning.level} collision radius scale cannot shrink collision.`);
        this.require(tuning.burstCount >= 1 && tuning.projectileCount >= 1, `${id} level ${tuning.level} has invalid counts.`);
      }
    }
  }
}

export const gunFamily = new GunFamilyDefinition();
export type GunId = keyof typeof gunFamily.members;

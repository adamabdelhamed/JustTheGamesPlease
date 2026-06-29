import { type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export type EnemySpawnEntrance = "scatter" | "fade";
export type EnemyDeathVisual = "cloud" | "none";

export interface OrbMember {
  label: string;
  health: number;
  speed: number;
  radius: number;
  columnSpan: number;
  contactDamage: number;
  score: number;
  baseColor: NeonColorName;
  rimColor: NeonColorName;
  shadowColor: NeonColorName;
  shapeId: string;
  glow: number;
  surfaceTexture: number;
  rimIntensity: number;
  shadowStrength: number;
  hitFlashDurationMs: number;
  deathFlashScale: number;
  shapeZoom: number;
  impactResistance: number;
  explosionMagnitude: number;
  spawnEntrance: EnemySpawnEntrance;
  spawnSound: string | null;
  deathSound: string;
  deathVisual: EnemyDeathVisual;
}

export class OrbFamilyDefinition extends FamilyDefinition<Record<string, OrbMember>> {
  readonly familyId = "orb";
  readonly label = "Orb Enemy";
  readonly members = {
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
      explosionMagnitude: .48,
      spawnEntrance: "scatter",
      spawnSound: "EnemySpawn",
      deathSound: "EnemyDestroyed",
      deathVisual: "cloud",
    },
    glassShield: {
      label: "Glass Shield",
      health: .1,
      speed: 58,
      radius: 5.6,
      columnSpan: 1,
      contactDamage: .1,
      score: 3,
      baseColor: "pink",
      rimColor: "orange",
      shadowColor: "violet",
      shapeId: "trick-gate",
      glow: .62,
      surfaceTexture: .12,
      rimIntensity: 0.9,
      shadowStrength: .45,
      hitFlashDurationMs: 70,
      deathFlashScale: 1.1,
      shapeZoom: 3.05,
      impactResistance: .65,
      explosionMagnitude: .25,
      spawnEntrance: "fade",
      spawnSound: null,
      deathSound: "GlassShieldShatter",
      deathVisual: "none",
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
      glow: .86,
      surfaceTexture: .22,
      rimIntensity: 1.2,
      shadowStrength: .66,
      hitFlashDurationMs: 85,
      deathFlashScale: 1.75,
      shapeZoom: 3.25,
      impactResistance: 1,
      explosionMagnitude: .48,
      spawnEntrance: "scatter",
      spawnSound: "EnemySpawn",
      deathSound: "EnemyDestroyed",
      deathVisual: "cloud",
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
      surfaceTexture: .18,
      rimIntensity: 1.45,
      shadowStrength: .85,
      hitFlashDurationMs: 130,
      deathFlashScale: 2.7,
      shapeZoom: 4.4,
      impactResistance: 2.1,
      explosionMagnitude: .9,
      spawnEntrance: "scatter",
      spawnSound: "Boss",
      deathSound: "BossDestroyed",
      deathVisual: "cloud",
    },
  } as const satisfies Record<string, OrbMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, orb] of Object.entries(this.members)) {
      this.require(orb.health > 0, `${id} health must be positive.`);
      this.require(orb.speed > 0, `${id} speed must be positive.`);
      this.require(orb.radius > 0, `${id} radius must be positive.`);
      this.require(Number.isInteger(orb.columnSpan) && orb.columnSpan >= 1, `${id} columnSpan must be a positive integer.`);
      this.require(orb.glow >= 0 && orb.rimIntensity >= 0, `${id} visual intensities cannot be negative.`);
      this.require(orb.surfaceTexture >= 0 && orb.surfaceTexture <= 1, `${id} surfaceTexture must be from 0 to 1.`);
    }
  }
}

export const orbFamily = new OrbFamilyDefinition();
export type OrbId = keyof typeof orbFamily.members;

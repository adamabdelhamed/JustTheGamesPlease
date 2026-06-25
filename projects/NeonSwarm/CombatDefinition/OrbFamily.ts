import { type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export interface OrbMember {
  label: string;
  health: number;
  speed: number;
  radius: number;
  contactDamage: number;
  score: number;
  baseColor: NeonColorName;
  rimColor: NeonColorName;
  shadowColor: NeonColorName;
  glow: number;
  surfaceTexture: number;
  rimIntensity: number;
  shadowStrength: number;
  hitFlashDurationMs: number;
  deathFlashScale: number;
  shapeZoom: number;
  impactResistance: number;
  explosionMagnitude: number;
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
      deathFlashScale: 1.8,
      shapeZoom: 3.4,
      impactResistance: 1,
      explosionMagnitude: .48,
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
      this.require(orb.glow >= 0 && orb.rimIntensity >= 0, `${id} visual intensities cannot be negative.`);
      this.require(orb.surfaceTexture >= 0 && orb.surfaceTexture <= 1, `${id} surfaceTexture must be from 0 to 1.`);
    }
  }
}

export const orbFamily = new OrbFamilyDefinition();
export type OrbId = keyof typeof orbFamily.members;

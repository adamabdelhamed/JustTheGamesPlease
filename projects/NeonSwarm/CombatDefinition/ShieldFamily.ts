import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export type ShieldOrbiterShape = "dot" | "hex";
export type ShieldMode = "charge";

export interface ShieldMember {
  label: string;
  family: "shield";
  rarity: "starter" | "common" | "uncommon";
  mode: ShieldMode;
  radius: number;
  /** Basic shield strength. Enemy HP is subtracted from this value. */
  maxCharges: number;
  cooldownSeconds: number;
  contactDamage: 0;
  pushDistance: 0;
  slowMultiplier: 1;
  color: NeonColorName;
  orbiterShape: ShieldOrbiterShape;
  orbiterCount: number;
  orbiterSpeed: number;
  orbiterSize: number;
  agentNotes?: string;
}

export class ShieldFamilyDefinition extends FamilyDefinition<Record<string, ShieldMember>> {
  readonly familyId = "shield";
  readonly label = "Shield";

  readonly members = {
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
      agentNotes: "Lightweight shield with two points of strength.",
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
      agentNotes: "Balanced shield with four points of strength.",
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
      agentNotes: "Heavy shield with seven points of strength.",
    },
  } as const satisfies Record<string, ShieldMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, shield] of Object.entries(this.members)) {
      this.require(shield.mode === "charge", `${id} must use the shared charge behavior.`);
      this.require(shield.radius > 0, `${id} radius must be positive.`);
      this.require(shield.maxCharges > 0, `${id} strength must be positive.`);
      this.require(shield.orbiterCount > 0, `${id} must have orbiters.`);
      this.require(shield.orbiterSpeed >= 0, `${id} orbiterSpeed cannot be negative.`);
      this.require(neonPalette[shield.color] !== undefined, `${id} has an unknown color.`);
    }
  }
}

export const shieldFamily = new ShieldFamilyDefinition();
export type ShieldId = keyof typeof shieldFamily.members;

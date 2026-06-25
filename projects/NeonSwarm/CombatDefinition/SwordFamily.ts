import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * How the sword selects targets from the nearby threat pool.
 * All modes are lane-aware via the NearbyThreatQuery module.
 */
export type SwordTargetingMode =
  | "nearestInCurrentLane"   // closest enemy in the player's active lane
  | "nearestInEitherLane"    // closest enemy regardless of lane
  | "frontMostThreat"        // farthest-advanced (highest y) enemy in range
  | "clusterNearPlayer";     // picks up to maxTargets enemies within reach

export interface SwordMember {
  label: string;
  family: "sword";
  rarity: "starter" | "common" | "uncommon";
  /**
   * Attack range in pixels (at scale 1).
   * Sword only swings when an enemy enters this radius.
   */
  range: number;
  /**
   * Angular width of the slash arc in degrees.
   * Wider = heavier, hits more enemies per swing.
   */
  arcDegrees: number;
  /** Damage per hit. */
  damage: number;
  /** Cooldown between swings in seconds. Swords do NOT fire on a timer — only when a target exists. */
  cooldownSeconds: number;
  /** Maximum targets hit per swing. */
  maxTargets: number;
  /** Lane-aware target selection mode. */
  targetingMode: SwordTargetingMode;
  /** Visual slash arc duration in milliseconds. */
  slashDurationMs: number;
  /** Primary slash color. */
  color: NeonColorName;
  /** Visual thickness multiplier for slashArcPrimitives(). 1.0 = default. */
  slashThickness: number;
  /**
   * Optional design notes. Not used by runtime — documents intent for future agents.
   */
  agentNotes?: string;
}

// ---------------------------------------------------------------------------
// Family definition
// ---------------------------------------------------------------------------

export class SwordFamilyDefinition extends FamilyDefinition<Record<string, SwordMember>> {
  readonly familyId = "sword";
  readonly label = "Sword";

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
  readonly members = {
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
      slashThickness: 1.0,
      agentNotes: "Fast and sharp. Curved neon slash. 120–180ms feel. Fading afterimage. Like a whip-like katana arc.",
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
      agentNotes: "Heavy and wide. Thicker arc. Stronger impact flash. Geometric and procedural — not a bullet.",
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
      agentNotes: "Elegant and precise. Thin stabbing line. Not a gun shot — it must feel melee. Single target priority.",
    },
  } as const satisfies Record<string, SwordMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, sword] of Object.entries(this.members)) {
      this.require(sword.range > 0, `${id} range must be positive.`);
      this.require(sword.arcDegrees > 0 && sword.arcDegrees <= 360, `${id} arcDegrees must be in (0, 360].`);
      this.require(sword.damage > 0, `${id} damage must be positive.`);
      this.require(sword.cooldownSeconds > 0, `${id} cooldownSeconds must be positive.`);
      this.require(sword.maxTargets >= 1, `${id} maxTargets must be at least 1.`);
      this.require(sword.slashDurationMs > 0, `${id} slashDurationMs must be positive.`);
      this.require(sword.slashThickness > 0, `${id} slashThickness must be positive.`);
      this.require(neonPalette[sword.color] !== undefined, `${id} has an unknown color.`);
    }
  }
}

export const swordFamily = new SwordFamilyDefinition();
export type SwordId = keyof typeof swordFamily.members;

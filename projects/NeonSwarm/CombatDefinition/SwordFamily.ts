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
  /**
   * Optional level 5 damage per hit.
   *
   * Level 1 uses damage, level 5 uses damageAtLevel5, and intermediate levels
   * interpolate. Use this when duplicate pickups should increase total HP
   * cleared without changing proximity rules.
   */
  damageAtLevel5?: number;
  /** Cooldown between swings in seconds. Swords do not fire on a timer; only when a target exists. */
  cooldownSeconds: number;
  /** Maximum targets hit per swing. */
  maxTargets: number;
  /**
   * Optional vertical reach in authored track rows.
   *
   * Heavy sweeping swords can use this with repeated pickups: level 1 uses
   * level1 rows, level 5 uses level5 rows, and intermediate levels interpolate.
   * This expands affected rows after a close target is found; it does not
   * loosen the near-player proximity threshold.
   */
  rowReach?: {
    level1: number;
    level5: number;
  };
  /** Lane-aware target selection mode. */
  targetingMode: SwordTargetingMode;
  /** Visual slash arc duration in milliseconds. */
  slashDurationMs: number;
  /** Primary slash color. */
  color: NeonColorName;
  /** Visual thickness multiplier for the shared sword trail. 1.0 = default. */
  slashThickness: number;
  /**
   * Optional design notes. Not used by runtime; documents intent for future agents.
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
  readonly members = {
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
      slashThickness: 1.0,
      agentNotes: "Fast and sharp. Curved neon slash. 120-180ms feel. Fading afterimage. Like a whip-like katana arc.",
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
      agentNotes: "Heavy all-column sweep. Repeated cleaver pickups level it up from 2 rows of reach to 4 rows at level 5, with more total damage per swing.",
    },
  } as const satisfies Record<string, SwordMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, sword] of Object.entries(this.members) as Array<[string, SwordMember]>) {
      this.require(sword.range > 0, `${id} range must be positive.`);
      this.require(sword.arcDegrees > 0 && sword.arcDegrees <= 360, `${id} arcDegrees must be in (0, 360].`);
      this.require(sword.damage > 0, `${id} damage must be positive.`);
      if (sword.damageAtLevel5 !== undefined) this.require(sword.damageAtLevel5 >= sword.damage, `${id} damageAtLevel5 must be at least damage.`);
      this.require(sword.cooldownSeconds > 0, `${id} cooldownSeconds must be positive.`);
      this.require(sword.maxTargets >= 1, `${id} maxTargets must be at least 1.`);
      if (sword.rowReach) {
        this.require(Number.isInteger(sword.rowReach.level1) && sword.rowReach.level1 >= 1, `${id} rowReach.level1 must be a positive integer.`);
        this.require(Number.isInteger(sword.rowReach.level5) && sword.rowReach.level5 >= sword.rowReach.level1, `${id} rowReach.level5 must be at least level1.`);
      }
      this.require(sword.slashDurationMs > 0, `${id} slashDurationMs must be positive.`);
      this.require(sword.slashThickness > 0, `${id} slashThickness must be positive.`);
      this.require(neonPalette[sword.color] !== undefined, `${id} has an unknown color.`);
    }
  }
}

export const swordFamily = new SwordFamilyDefinition();
export type SwordId = keyof typeof swordFamily.members;

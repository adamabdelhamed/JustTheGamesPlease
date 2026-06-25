/**
 * SwordEvaluator — per-frame sword state and tick logic.
 *
 * Swords are NOT period-based like guns. The tick function only triggers a swing
 * when a valid target exists in range and the cooldown is ready. It idles silently
 * when no target is present.
 *
 * Design rule: same as shieldEvaluator — no direct enemy mutation. Returns a
 * SwordTickResult for main.ts to apply.
 */

import type { SwordId, SwordMember, SwordTargetingMode } from "../../CombatDefinition/SwordFamily";
import type { NearbyThreat } from "./nearbyThreatQuery";

// ---------------------------------------------------------------------------
// Active slash animation
// ---------------------------------------------------------------------------

export interface ActiveSlashAnimation {
  /** Progress 0→1. Driven by (now - startedAt) / durationMs. */
  progress: number;
  startedAt: number;
  durationMs: number;
  /** Center x (snapshot of player position when swing occurred). */
  x: number;
  y: number;
  /** Reach of the arc in pixels. */
  reach: number;
  /** Arc width in degrees. */
  arcDegrees: number;
  /** Color. */
  color: string;
  /** Thickness multiplier. */
  thickness: number;
}

// ---------------------------------------------------------------------------
// Sword state
// ---------------------------------------------------------------------------

export class SwordState {
  swordId: SwordId;
  /** Seconds remaining until the sword can swing again. */
  cooldownLeft: number;
  /** Active slash animation, if any. */
  activeSlash: ActiveSlashAnimation | null;

  constructor(swordId: SwordId) {
    this.swordId = swordId;
    this.cooldownLeft = 0;
    this.activeSlash = null;
  }
}

// ---------------------------------------------------------------------------
// Tick result
// ---------------------------------------------------------------------------

export interface SwordTickResult {
  /** Enemy IDs hit by the swing this frame. Empty if no swing occurred. */
  hitEnemyIds: number[];
  /** Damage to apply to each hit enemy. */
  damage: number;
  /** Whether a new slash was triggered this frame (for audio, etc.). */
  swingTriggered: boolean;
}

// ---------------------------------------------------------------------------
// Targeting helpers
// ---------------------------------------------------------------------------

function selectTargets(
  threats: readonly NearbyThreat[],
  mode: SwordTargetingMode,
  maxTargets: number,
): NearbyThreat[] {
  if (threats.length === 0) return [];

  switch (mode) {
    case "nearestInCurrentLane":
    case "nearestInEitherLane":
      // queryNearbyThreats() already returns sorted by distance
      return threats.slice(0, maxTargets);

    case "frontMostThreat":
      // Highest y = most advanced toward player
      return [...threats].sort((a, b) => b.target.y - a.target.y).slice(0, maxTargets);

    case "clusterNearPlayer":
      // Already sorted by distance — take nearest cluster
      return threats.slice(0, maxTargets);

    default:
      return threats.slice(0, maxTargets);
  }
}

// ---------------------------------------------------------------------------
// Tick function
// ---------------------------------------------------------------------------

/**
 * Drives the sword for one game frame.
 *
 * @param state     Mutable sword state.
 * @param sword     Immutable sword definition.
 * @param threats   Nearby threats in range from queryNearbyThreats().
 * @param playerX   Current player center x.
 * @param playerY   Current player center y.
 * @param now       Timestamp in ms.
 * @param delta     Frame delta in seconds.
 * @param color     Resolved hex color (from neonPalette[sword.color]).
 */
export function tickSword(
  state: SwordState,
  sword: SwordMember,
  threats: readonly NearbyThreat[],
  playerX: number,
  playerY: number,
  now: number,
  delta: number,
  color: string,
): SwordTickResult {
  const result: SwordTickResult = {
    hitEnemyIds: [],
    damage: 0,
    swingTriggered: false,
  };

  // Advance cooldown
  if (state.cooldownLeft > 0) state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);

  // Advance active slash animation
  if (state.activeSlash) {
    state.activeSlash.progress = (now - state.activeSlash.startedAt) / state.activeSlash.durationMs;
    if (state.activeSlash.progress >= 1) state.activeSlash = null;
  }

  // Swords only swing when a target exists in range AND cooldown is ready.
  // This is the key difference from guns, which fire on a period regardless.
  if (state.cooldownLeft > 0 || threats.length === 0) return result;

  // Select targets
  const selected = selectTargets(threats, sword.targetingMode, sword.maxTargets);
  if (selected.length === 0) return result;

  // Trigger swing
  state.cooldownLeft = sword.cooldownSeconds;
  result.swingTriggered = true;
  result.damage = sword.damage;
  for (const { target } of selected) result.hitEnemyIds.push(target.id);

  // Start slash animation
  state.activeSlash = {
    progress: 0,
    startedAt: now,
    durationMs: sword.slashDurationMs,
    x: playerX,
    y: playerY,
    reach: sword.range * 0.75, // Arc reach is a fraction of detection range
    arcDegrees: sword.arcDegrees,
    color,
    thickness: sword.slashThickness,
  };

  return result;
}

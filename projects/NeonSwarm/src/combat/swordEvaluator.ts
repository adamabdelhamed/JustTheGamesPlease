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
import { advanceCooldownSlots, removeClaimedTargets, syncSlotArray, updateActiveSlots } from "./independentWeaponSlots";
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
  targetPoints: readonly { x: number; y: number }[];
  side: -1 | 1;
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
  /** Active sword level. Repeated pickups of the same sword increase this up to 5. */
  level: number;
  /** Seconds remaining until the sword can swing again. */
  cooldownLeft: number;
  /** Active slash animation, if any. */
  activeSlash: ActiveSlashAnimation | null;
  previousSlashSide: -1 | 1;
  cooldownLefts: number[];
  activeSlashes: Array<ActiveSlashAnimation | null>;
  previousSlashSides: Array<-1 | 1>;
  nextSlotLaunchAllowedAt: number;

  constructor(swordId: SwordId, level = 1) {
    this.swordId = swordId;
    this.level = Math.min(5, Math.max(1, Math.floor(level)));
    this.cooldownLeft = 0;
    this.activeSlash = null;
    this.previousSlashSide = 1;
    this.cooldownLefts = [0];
    this.activeSlashes = [null];
    this.previousSlashSides = [1];
    this.nextSlotLaunchAllowedAt = 0;
  }

  syncSlots(count: number): void {
    syncSlotArray(this.cooldownLefts, count, () => 0);
    syncSlotArray(this.activeSlashes, count, () => null);
    syncSlotArray(this.previousSlashSides, count, () => 1);
    this.cooldownLeft = Math.min(...this.cooldownLefts);
    this.activeSlash = this.activeSlashes.find(Boolean) ?? null;
    this.previousSlashSide = this.previousSlashSides[0] ?? 1;
  }
}

// ---------------------------------------------------------------------------
// Tick result
// ---------------------------------------------------------------------------

export interface SwordTickResult {
  /** Enemy IDs hit by the swing this frame. Empty if no swing occurred. */
  hitEnemyIds: number[];
  /** Hit targets with their positions for delayed visual/contact timing. */
  hitTargets: Array<{ id: number; x: number; y: number }>;
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
  rowReach: number,
): NearbyThreat[] {
  if (threats.length === 0) return [];
  if (rowReach > 1 && threats[0].target.rowId !== undefined) {
    const centerRow = threats[0].target.rowId;
    const rows = [...new Set(threats
      .map(threat => threat.target.rowId)
      .filter(rowId => rowId !== undefined))]
      .sort((a, b) => Math.abs(a - centerRow) - Math.abs(b - centerRow))
      .slice(0, rowReach);
    return threats
      .filter(threat => threat.target.rowId !== undefined && rows.includes(threat.target.rowId))
      .slice(0, maxTargets);
  }

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

function swordRowReach(sword: SwordMember, level: number): number {
  if (!sword.rowReach) return 1;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level)));
  const progress = (clampedLevel - 1) / 4;
  return Math.round(sword.rowReach.level1 + (sword.rowReach.level5 - sword.rowReach.level1) * progress);
}

function swordDamage(sword: SwordMember, level: number): number {
  if (sword.damageAtLevel5 === undefined) return sword.damage;
  const clampedLevel = Math.min(5, Math.max(1, Math.floor(level)));
  const progress = (clampedLevel - 1) / 4;
  return sword.damage + (sword.damageAtLevel5 - sword.damage) * progress;
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
  visualDurationMs = sword.slashDurationMs,
  swordCount = 1,
  slotLaunchStaggerMs = 180,
): SwordTickResult {
  const result: SwordTickResult = {
    hitEnemyIds: [],
    hitTargets: [],
    damage: 0,
    swingTriggered: false,
  };

  state.syncSlots(swordCount);

  advanceCooldownSlots(state.cooldownLefts, delta);
  updateActiveSlots(state.activeSlashes, slash => {
    slash.progress = (now - slash.startedAt) / slash.durationMs;
    return slash.progress >= 1 ? null : slash;
  });
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;

  // Swords only swing when a target exists in range AND cooldown is ready.
  // This is the key difference from guns, which fire on a period regardless.
  if (threats.length === 0) return result;

  let remaining = [...threats];
  const damage = swordDamage(sword, state.level);
  for (let slot = 0; slot < state.cooldownLefts.length && remaining.length > 0; slot++) {
    if (state.cooldownLefts.length > 1 && now < state.nextSlotLaunchAllowedAt) break;
    if (state.cooldownLefts[slot] > 0) continue;
    const selected = selectTargets(remaining, sword.targetingMode, sword.maxTargets, swordRowReach(sword, state.level));
    if (selected.length === 0) continue;
    const side: -1 | 1 = state.previousSlashSides[slot] === -1 ? 1 : -1;
    state.previousSlashSides[slot] = side;
    state.previousSlashSide = side;
    state.cooldownLefts[slot] = sword.cooldownSeconds;
    if (state.cooldownLefts.length > 1) state.nextSlotLaunchAllowedAt = now + slotLaunchStaggerMs;
    result.swingTriggered = true;
    result.damage = damage;
    for (const { target } of selected) {
      result.hitEnemyIds.push(target.id);
      result.hitTargets.push({ id: target.id, x: target.x, y: target.y });
    }
    state.activeSlashes[slot] = {
      progress: 0,
      startedAt: now,
      durationMs: visualDurationMs,
      x: playerX,
      y: playerY,
      targetPoints: selected.map(({ target }) => ({ x: target.x, y: target.y })),
      side,
      reach: sword.range * 0.75,
      arcDegrees: sword.arcDegrees,
      color,
      thickness: sword.slashThickness,
    };
    remaining = removeClaimedTargets(remaining, selected, ({ target }) => target.id);
  }
  state.cooldownLeft = Math.min(...state.cooldownLefts);
  state.activeSlash = state.activeSlashes.find(Boolean) ?? null;

  return result;
}

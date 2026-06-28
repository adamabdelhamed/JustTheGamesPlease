/**
 * NearbyThreatQuery — shared lane-aware enemy query for shield and sword families.
 *
 * Both shields and swords operate near the player, so they share this module
 * to avoid independent, potentially conflicting scans.
 *
 * This module is intentionally minimal. It provides enough structure to be
 * future-friendly (originShape index, column-band awareness) without
 * over-building. Extend when needed — do not refactor prematurely.
 *
 * Near-player effect precedence (applied by main.ts):
 *   1. shieldBlock        — charge-based hit absorption
 *   2. shieldPulse        — emergency push
 *   3. swordAttack        — sword family
 *   4. shieldContactDamage — contact damage on shield edge
 *   5. shieldAura         — slow/debuff aura
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Minimal enemy interface expected by the threat query system. */
export interface ThreatTarget {
  id: number;
  lane: 0 | 1;
  x: number;
  y: number;
  rowId?: number;
  dying: boolean;
}

export interface ThreatQueryOptions {
  /** Player/shield/sword origin in screen coordinates. */
  origin: { x: number; y: number };
  /** Player's current lane. */
  lane: 0 | 1;
  /** Max circular distance to include. */
  range: number;
  /** Whether to also include enemies in the adjacent lane. Defaults to false. */
  includeAdjacentLanes?: boolean;
  /** Limit the number of returned threats. Defaults to unlimited. */
  maxTargets?: number;
  /**
   * Enemy IDs that have already been claimed by a higher-priority effect
   * this frame and should not be double-counted.
   * Future use — currently enemies can be affected by multiple systems per
   * frame, but this set provides the hook to change that.
   */
  excludeIds?: ReadonlySet<number>;
  /**
   * Purpose annotation. Logged in dev builds. Not used for filtering yet.
   * Future: could drive per-family targeting preferences.
   */
  purpose: "shield" | "sword" | "aura";
}

export interface NearbyThreat {
  target: ThreatTarget;
  /** Euclidean distance from origin to enemy center. */
  distance: number;
}

// ---------------------------------------------------------------------------
// Query function
// ---------------------------------------------------------------------------

/**
 * Returns live enemies sorted by distance (nearest first) that fall within
 * the given range and lane policy.
 *
 * Enemies that are dying are always excluded.
 */
export function queryNearbyThreats(
  enemies: readonly ThreatTarget[],
  opts: ThreatQueryOptions,
): NearbyThreat[] {
  const { origin, lane, range, includeAdjacentLanes = false, maxTargets, excludeIds } = opts;
  const rangeSq = range * range;
  const results: NearbyThreat[] = [];

  for (const target of enemies) {
    if (target.dying) continue;
    if (!includeAdjacentLanes && target.lane !== lane) continue;
    if (excludeIds?.has(target.id)) continue;
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    const distSq = dx * dx + dy * dy;
    if (distSq > rangeSq) continue;
    results.push({ target, distance: Math.sqrt(distSq) });
  }

  results.sort((a, b) => a.distance - b.distance);

  return maxTargets !== undefined ? results.slice(0, maxTargets) : results;
}

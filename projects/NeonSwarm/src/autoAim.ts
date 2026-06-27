export interface AutoAimTarget {
  x: number;
  y: number;
  rowId?: number;
}

/**
 * Returns the squad-center aim offset (relative to laneCenter) that best aligns
 * one of the squad's front-row columns to the nearest enemy.
 *
 * @param targets         All live (non-dying) enemies in the current lane.
 * @param laneCenter      Pixel X of the lane's center.
 * @param columnOffsets   X offsets of each front-row column relative to squad center.
 * @param currentOffset   Current squad aim offset (squad center = laneCenter + currentOffset).
 */
export function selectAutoAimOffset(
  targets: readonly AutoAimTarget[],
  laneCenter: number,
  columnOffsets: readonly number[],
  currentOffset = 0,
): number {
  if (!targets.length) return 0;

  // Identify the front row: group targets by rowId (or treat ungrouped targets as a single row).
  const explicitRows = new Map<number, AutoAimTarget[]>();
  for (const target of targets) {
    if (target.rowId === undefined) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const frontRow = explicitRows.size
    ? [...explicitRows.values()].sort((left, right) =>
        Math.max(...right.map(t => t.y)) - Math.max(...left.map(t => t.y)))[0]
    : targets.filter(t => Math.abs(t.y - Math.max(...targets.map(c => c.y))) < 3);

  // For each enemy in the front row × each squad column, compute the squad-center
  // offset that would place that column exactly on that enemy's X.
  // Pick the (enemy, column) pair whose required offset is closest to the current
  // offset — minimising the aim movement needed while guaranteeing a hit.
  const cols = columnOffsets.length > 0 ? columnOffsets : [0];
  let bestOffset = currentOffset;
  let bestDist = Infinity;

  for (const enemy of frontRow) {
    for (const colOffset of cols) {
      // squadCenter = laneCenter + aimOffset → column lands at laneCenter + aimOffset + colOffset
      // We want that to equal enemy.x → aimOffset = enemy.x - laneCenter - colOffset
      const candidateOffset = enemy.x - laneCenter - colOffset;
      const dist = Math.abs(candidateOffset - currentOffset);
      if (dist < bestDist) {
        bestDist = dist;
        bestOffset = candidateOffset;
      }
    }
  }

  return bestOffset;
}

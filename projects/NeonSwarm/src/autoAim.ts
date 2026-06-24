export interface AutoAimTarget {
  x: number;
  y: number;
  rowId?: number;
}

export class AutoAimControlState {
  manual = false;

  laneSelected(): void {
    // Lane changes are navigation, not persistent manual aiming.
  }

  aimChanged(): void {
    this.manual = true;
  }

  aimReleased(): void {
    this.manual = false;
  }
}

export function selectAutoAimOffset(
  targets: readonly AutoAimTarget[],
  laneCenter: number,
  currentOffset = 0,
): number {
  if (!targets.length) return 0;
  const explicitRows = new Map<number, AutoAimTarget[]>();
  for (const target of targets) {
    if (target.rowId === undefined) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const closestRow = explicitRows.size
    ? [...explicitRows.values()].sort((left, right) =>
        Math.max(...right.map(target => target.y)) - Math.max(...left.map(target => target.y)))[0]
    : targets.filter(target => Math.abs(target.y - Math.max(...targets.map(candidate => candidate.y))) < 3);
  const currentAimX = laneCenter + currentOffset;
  const selected = [...closestRow].sort((left, right) => {
    const distanceDifference = Math.abs(left.x - currentAimX) - Math.abs(right.x - currentAimX);
    return distanceDifference || left.x - right.x;
  })[0];
  return selected.x - laneCenter;
}

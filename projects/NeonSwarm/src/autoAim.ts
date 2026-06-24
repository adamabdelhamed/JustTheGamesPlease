export interface AutoAimTarget {
  x: number;
  y: number;
}

export function selectAutoAimOffset(
  targets: readonly AutoAimTarget[],
  laneCenter: number,
  currentOffset = 0,
): number {
  if (!targets.length) return 0;
  const closestY = Math.max(...targets.map(target => target.y));
  const closestRow = targets.filter(target => Math.abs(target.y - closestY) < 3);
  const currentAimX = laneCenter + currentOffset;
  const selected = [...closestRow].sort((left, right) => {
    const distanceDifference = Math.abs(left.x - currentAimX) - Math.abs(right.x - currentAimX);
    return distanceDifference || left.x - right.x;
  })[0];
  return selected.x - laneCenter;
}

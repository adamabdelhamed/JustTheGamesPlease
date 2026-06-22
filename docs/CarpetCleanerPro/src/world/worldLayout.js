export const WORLD = deepFreeze({
  units: 'meters',
  floor: { width: 22, depth: 14, slope: 0.018 },
  rug: { centerX: -1.5, centerZ: 0, width: 10, depth: 6.4, thickness: 0.16 },
  drain: { centerX: 6.25, centerZ: 0, width: 1.15, depth: 9.8, intakeDepth: 0.72 },
  room: { wallHeight: 5.5 }
});

export function floorHeightAt(x) {
  return -WORLD.floor.slope * x;
}

export function classifySurface(x, z) {
  if (insideRect(x, z, WORLD.drain)) return 'drain';
  if (insideRect(x, z, WORLD.rug)) return 'carpet';
  const insideFloor = Math.abs(x) <= WORLD.floor.width / 2 && Math.abs(z) <= WORLD.floor.depth / 2;
  return insideFloor ? 'floor' : 'outside';
}

export function isReachableWorkSurface(x, z) {
  const surface = classifySurface(x, z);
  return surface === 'carpet' || surface === 'floor' || surface === 'drain';
}

function insideRect(x, z, rect) {
  return Math.abs(x - rect.centerX) <= rect.width / 2 && Math.abs(z - rect.centerZ) <= rect.depth / 2;
}

function deepFreeze(value) {
  Object.values(value).filter(item => item && typeof item === 'object').forEach(deepFreeze);
  return Object.freeze(value);
}

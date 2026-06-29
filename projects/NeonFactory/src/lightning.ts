import type { NeonPrimitive } from "./primitive-renderer";

export interface NeonLightningPoint {
  id?: number | string;
  x: number;
  y: number;
  radius?: number;
}

export interface NeonLightningTuning {
  chainRange: number;
  maxJumps: number;
  branchFanout: number;
  maxDepth: number;
  branchDecay: number;
  jaggedness: number;
  segments: number;
  movement: number;
  boltWidth: number;
  haloWidth: number;
  intensity: number;
  glow: number;
  durationMs: number;
  branchSparks: number;
  sparkVelocity: number;
  sparkVelocitySpread: number;
  sparkEasePower: number;
  sparkDimPower: number;
  sparkLength: number;
  sparkWidth: number;
  impactSparks: number;
  impactSparkVelocity: number;
  impactSparkRadius: number;
  color: string;
  secondaryColor: string;
}

export interface NeonLightningSegment {
  from: NeonLightningPoint;
  to: NeonLightningPoint;
  depth: number;
  order: number;
}

const defaults: NeonLightningTuning = {
  chainRange: 520,
  maxJumps: 24,
  branchFanout: 1,
  maxDepth: 2,
  branchDecay: .68,
  jaggedness: 45,
  segments: 10,
  movement: .55,
  boltWidth: .1,
  haloWidth: 8,
  intensity: 3.07,
  glow: 6.2,
  durationMs: 529,
  branchSparks: .11,
  sparkVelocity: 150,
  sparkVelocitySpread: .55,
  sparkEasePower: .44,
  sparkDimPower: .6,
  sparkLength: 6,
  sparkWidth: .7,
  impactSparks: 26,
  impactSparkVelocity: 154,
  impactSparkRadius: 10,
  color: "#55e7ff",
  secondaryColor: "#ffffff",
};

const random = (seed: number): number => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const pointKey = (point: NeonLightningPoint, index: number): string => String(point.id ?? index);

export function resolveNeonLightningChain(
  origin: NeonLightningPoint,
  targets: readonly NeonLightningPoint[],
  tuning: Partial<NeonLightningTuning> = {},
): NeonLightningSegment[] {
  const resolved = { ...defaults, ...tuning };
  const available = targets.map((target, index) => ({ target, key: pointKey(target, index) }));
  const used = new Set<string>();
  const segments: NeonLightningSegment[] = [];
  let frontier: Array<{ point: NeonLightningPoint; depth: number }> = [{ point: origin, depth: 0 }];
  let order = 0;

  while (frontier.length && order < resolved.maxJumps) {
    const nextFrontier: Array<{ point: NeonLightningPoint; depth: number }> = [];
    for (const branch of frontier) {
      if (order >= resolved.maxJumps || branch.depth >= resolved.maxDepth) break;
      const fanout = branch.depth === 0 ? Math.max(1, resolved.branchFanout) : 1;
      const candidates = available
        .filter(candidate => !used.has(candidate.key))
        .map(candidate => ({
          ...candidate,
          distance: Math.hypot(candidate.target.x - branch.point.x, candidate.target.y - branch.point.y),
        }))
        .filter(candidate => candidate.distance <= resolved.chainRange)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, fanout);
      for (const candidate of candidates) {
        if (order >= resolved.maxJumps) break;
        used.add(candidate.key);
        segments.push({ from: branch.point, to: candidate.target, depth: branch.depth, order });
        nextFrontier.push({ point: candidate.target, depth: branch.depth + 1 });
        order++;
      }
    }
    frontier = nextFrontier;
  }

  return segments;
}

export function neonLightningPrimitives(
  segments: readonly NeonLightningSegment[],
  ageMs: number,
  tuning: Partial<NeonLightningTuning> = {},
): NeonPrimitive[] {
  const resolved = { ...defaults, ...tuning };
  const life = 1 - Math.min(1, Math.max(0, ageMs / Math.max(1, resolved.durationMs)));
  if (life <= 0) return [];
  const primitives: NeonPrimitive[] = [];

  for (const segment of segments) {
    const dx = segment.to.x - segment.from.x;
    const dy = segment.to.y - segment.from.y;
    const length = Math.hypot(dx, dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;
    const depthPower = resolved.branchDecay ** segment.depth;
    const segmentCount = Math.max(2, Math.round(resolved.segments));
    const points: NeonLightningPoint[] = [segment.from];
    for (let index = 1; index < segmentCount; index++) {
      const t = index / segmentCount;
      const taper = Math.sin(t * Math.PI);
      const seed = segment.order * 97 + segment.depth * 29 + index * 11 + Math.floor(ageMs * resolved.movement * .04);
      const offset = (random(seed) - .5) * resolved.jaggedness * taper * depthPower;
      points.push({
        x: segment.from.x + dx * t + nx * offset,
        y: segment.from.y + dy * t + ny * offset,
      });
    }
    points.push(segment.to);

    for (let index = 0; index < points.length - 1; index++) {
      const a = points[index];
      const b = points[index + 1];
      const sx = b.x - a.x;
      const sy = b.y - a.y;
      const alpha = life * depthPower * (1 - index / points.length * .2);
      const rotation = Math.atan2(-sx, sy);
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: resolved.haloWidth * depthPower,
        height: Math.hypot(sx, sy) / 2,
        color: resolved.color,
        secondaryColor: resolved.secondaryColor,
        glow: resolved.glow * alpha,
        intensity: resolved.intensity * .42 * alpha,
        shape: "line",
        rotation,
      });
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(1, resolved.boltWidth * depthPower),
        height: Math.hypot(sx, sy) / 2,
        color: resolved.secondaryColor,
        secondaryColor: resolved.color,
        glow: resolved.glow * 1.2 * alpha,
        intensity: resolved.intensity * 1.15 * alpha,
        shape: "line",
        rotation,
      });
      if (resolved.branchSparks > 0) {
        const sparkCount = Math.floor(resolved.branchSparks * 5);
        const fractionalSpark = resolved.branchSparks * 5 - sparkCount;
        const totalSparks = sparkCount + (random(segment.order * 131 + index * 17) < fractionalSpark ? 1 : 0);
        for (let spark = 0; spark < totalSparks; spark++) {
          const seed = segment.order * 311 + index * 47 + spark * 19;
          const side = random(seed) > .5 ? 1 : -1;
          const spread = (random(seed + 1) - .5) * resolved.sparkVelocitySpread;
          const angle = Math.atan2(sy, sx) + side * (Math.PI / 2 + spread);
          const travel = Math.pow(1 - life, resolved.sparkEasePower) * resolved.sparkVelocity * (0.45 + random(seed + 2) * .75);
          const fade = alpha * Math.pow(life, resolved.sparkDimPower);
          primitives.push({
            x: (a.x + b.x) / 2 + Math.cos(angle) * travel,
            y: (a.y + b.y) / 2 + Math.sin(angle) * travel,
            width: Math.max(.7, resolved.sparkWidth * depthPower),
            height: resolved.sparkLength * depthPower * (.75 + random(seed + 3) * .8),
            color: resolved.secondaryColor,
            secondaryColor: resolved.color,
            glow: resolved.glow * fade,
            intensity: resolved.intensity * fade,
            shape: "line",
            rotation: Math.atan2(-Math.cos(angle), Math.sin(angle)),
          });
        }
      }
    }

    const impactCount = Math.floor(resolved.impactSparks);
    for (let spark = 0; spark < impactCount; spark++) {
      const seed = segment.order * 401 + spark * 23;
      const angle = Math.PI * 2 * (spark / Math.max(1, impactCount)) + (random(seed) - .5) * .55;
      const travel = resolved.impactSparkRadius + Math.pow(1 - life, resolved.sparkEasePower) * resolved.impactSparkVelocity * (.55 + random(seed + 1) * .7);
      const fade = life * depthPower * Math.pow(life, resolved.sparkDimPower * .65);
      primitives.push({
        x: segment.to.x + Math.cos(angle) * travel,
        y: segment.to.y + Math.sin(angle) * travel,
        width: Math.max(1, resolved.sparkWidth * 1.2 * depthPower),
        height: resolved.sparkLength * 1.55 * depthPower,
        color: resolved.secondaryColor,
        secondaryColor: resolved.color,
        glow: resolved.glow * 1.35 * fade,
        intensity: resolved.intensity * 1.35 * fade,
        shape: "line",
        rotation: Math.atan2(-Math.cos(angle), Math.sin(angle)),
      });
    }
  }

  return primitives;
}

export const defaultNeonLightningTuning = defaults;

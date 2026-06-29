import { neonPalette, resolveNeonLightningChain, type NeonLightningSegment } from "@just-the-games-please/neon-factory";
import type { LightningId, LightningLevel, LightningMember } from "../../CombatDefinition";

export interface LightningTarget {
  id: number;
  lane: 0 | 1;
  x: number;
  y: number;
  rowId?: number;
  health: number;
  dying: boolean;
}

export interface ActiveLightningChain {
  startedAt: number;
  durationMs: number;
  segments: NeonLightningSegment[];
  color: string;
  secondaryColor: string;
  jaggedness: number;
  visualSegments: number;
  movement: number;
  boltWidth: number;
  haloWidth: number;
  intensity: number;
  glow: number;
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
}

export class LightningState {
  lightningId: LightningId;
  level: number;
  cooldownLeft = 0;
  activeChains: ActiveLightningChain[] = [];

  constructor(lightningId: LightningId, level = 1) {
    this.lightningId = lightningId;
    this.level = Math.min(5, Math.max(1, Math.floor(level)));
  }
}

export interface LightningTickResult {
  triggered: boolean;
  hits: Array<{ enemyId: number; damage: number }>;
}

const targetKey = (target: LightningTarget): string => String(target.id);

function selectAnchor(member: LightningMember, level: LightningLevel, origin: { x: number; y: number }, targets: readonly LightningTarget[]): LightningTarget | null {
  const candidates = targets.filter(target => !target.dying && target.y < origin.y);
  if (candidates.length === 0) return null;
  if (member.targetingMode === "nearestForward") {
    return [...candidates].sort((a, b) => Math.hypot(a.x - origin.x, a.y - origin.y) - Math.hypot(b.x - origin.x, b.y - origin.y))[0] ?? null;
  }
  return [...candidates].sort((a, b) => {
    const score = (target: LightningTarget): number => candidates.filter(other =>
      other.id !== target.id &&
      Math.hypot(other.x - target.x, other.y - target.y) <= level.chainRange,
    ).length * -1000 + Math.abs(target.x - origin.x) + Math.max(0, origin.y - target.y) * .1;
    return score(a) - score(b);
  })[0] ?? null;
}

export function tickLightning(
  state: LightningState,
  member: LightningMember,
  level: LightningLevel,
  targets: readonly LightningTarget[],
  origin: { x: number; y: number; lane: 0 | 1 },
  now: number,
  delta: number,
): LightningTickResult {
  state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);
  state.activeChains = state.activeChains.filter(chain => now - chain.startedAt < chain.durationMs);
  if (state.cooldownLeft > 0) return { triggered: false, hits: [] };

  const eligible = targets.filter(target =>
    !target.dying &&
    target.y < origin.y &&
    (member.includeAdjacentLanes || target.lane === origin.lane)
  );
  const anchor = selectAnchor(member, level, origin, eligible);
  if (!anchor) return { triggered: false, hits: [] };

  const orderedTargets = [anchor, ...eligible.filter(target => target.id !== anchor.id)];
  const segments = resolveNeonLightningChain(origin, orderedTargets, {
    chainRange: level.chainRange,
    maxJumps: level.maxJumps,
    branchFanout: level.branchFanout,
    maxDepth: level.maxDepth,
    branchDecay: level.branchDecay,
  });
  if (segments.length === 0) return { triggered: false, hits: [] };

  const hits = new Map<string, { enemyId: number; damage: number }>();
  for (const segment of segments) {
    const target = segment.to as LightningTarget;
    const depthDamage = level.damage * (level.branchDecay ** segment.depth);
    const key = targetKey(target);
    const existing = hits.get(key);
    if (!existing || existing.damage < depthDamage) hits.set(key, { enemyId: target.id, damage: depthDamage });
  }

  const visual = member.visualIdentity;
  state.activeChains.push({
    startedAt: now,
    durationMs: visual.durationMs,
    segments,
    color: neonPalette[visual.color],
    secondaryColor: visual.secondaryColor,
    jaggedness: visual.jaggedness,
    visualSegments: visual.segments,
    movement: visual.movement,
    boltWidth: visual.boltWidth,
    haloWidth: visual.haloWidth,
    intensity: visual.intensity,
    glow: visual.glow,
    branchSparks: visual.branchSparks,
    sparkVelocity: visual.sparkVelocity,
    sparkVelocitySpread: visual.sparkVelocitySpread,
    sparkEasePower: visual.sparkEasePower,
    sparkDimPower: visual.sparkDimPower,
    sparkLength: visual.sparkLength,
    sparkWidth: visual.sparkWidth,
    impactSparks: visual.impactSparks,
    impactSparkVelocity: visual.impactSparkVelocity,
    impactSparkRadius: visual.impactSparkRadius,
  });
  state.cooldownLeft = level.cooldownSeconds;
  return { triggered: true, hits: [...hits.values()] };
}

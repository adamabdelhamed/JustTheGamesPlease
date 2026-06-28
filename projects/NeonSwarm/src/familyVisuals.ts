import {
  getNeonShape,
  neonPalette,
  type NeonPrimitive,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import type { ShieldMember, SwordMember } from "../CombatDefinition";
import type { ActiveSlashAnimation } from "./combat/swordEvaluator";

export interface FamilyVisualScene {
  primitives: NeonPrimitive[];
  shapes: NeonTopDownShape[];
}

const emptyScene = (): FamilyVisualScene => ({ primitives: [], shapes: [] });
const requiredShape = (id: string) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by family visuals.`);
  return shape;
};
const isSafeScenePoint = (point: { x: number; y: number }): boolean =>
  Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5000 && Math.abs(point.y) < 5000;

export interface ShieldVisualOptions {
  definition: ShieldMember;
  strength: number;
  initialStrength: number;
  x: number;
  y: number;
  now: number;
  scale?: number;
  projectScreenOffset?: (x: number, y: number, offsetX: number, offsetY: number) => { x: number; y: number };
  hitProgress?: number;
  visible?: boolean;
}

export function shieldVisuals(options: ShieldVisualOptions): FamilyVisualScene {
  const scene = emptyScene();
  const {
    definition, x, y, now,
    scale = 1,
    projectScreenOffset,
    hitProgress = 1,
    visible = true,
  } = options;
  const strength = Math.max(0, options.strength);
  const initialStrength = Math.max(1, options.initialStrength);
  const impact = Math.max(0, 1 - hitProgress);
  const exploding = strength <= 0 && hitProgress < 1;
  const color = neonPalette[definition.color];
  const radius = definition.radius * scale;

  if (visible || exploding) {
    scene.shapes.push({
      shape: requiredShape("shield-ring"),
      x, y,
      size: radius,
      color,
      lineThickness: .72,
      glow: 1 + impact * .8,
      opacity: 1,
      energyIntensity: 1.15 + impact * 1.5,
      energyCoverage: .42 + impact * .3,
      energySpeed: 1.15 + impact * 1.2,
      energyBleed: .5 + impact * .35,
      explodeProgress: exploding ? Math.min(1, hitProgress) : 0,
      explodeMagnitude: .9,
    });
  }

  if (!visible) return scene;
  const orbiterShape = requiredShape(definition.orbiterShape === "hex" ? "hex-fighter" : "star-core");
  const orbiterCount = Math.ceil(definition.orbiterCount * strength / initialStrength);
  const angleStep = Math.PI * 2 / definition.orbiterCount;
  const baseAngle = now / 1000 * definition.orbiterSpeed;
  for (let i = 0; i < orbiterCount; i++) {
    const angle = baseAngle + i * angleStep;
    const fallbackOrbiter = { x: x + Math.cos(angle) * radius, y: y + Math.sin(angle) * radius };
    const projectedOrbiter = projectScreenOffset?.(x, y, Math.cos(angle) * radius, Math.sin(angle) * radius);
    const orbiter = projectedOrbiter && isSafeScenePoint(projectedOrbiter) ? projectedOrbiter : fallbackOrbiter;
    scene.shapes.push({
      shape: orbiterShape,
      x: orbiter.x,
      y: orbiter.y,
      size: definition.orbiterSize * 1.8 * scale,
      color,
      rotationZ: angle + now / 1400,
      lineThickness: .72,
      glow: 1,
      energyIntensity: 1.1,
      energyCoverage: .4,
      energySpeed: 1.25,
      energyBleed: .5,
    });
  }
  return scene;
}

export interface SwordVisualOptions {
  definition: SwordMember;
  slash: ActiveSlashAnimation | null;
  slashes?: readonly (ActiveSlashAnimation | null)[];
  dockSide: -1 | 1;
  dockSides?: readonly (-1 | 1)[];
  points: readonly { x: number; y: number }[];
  tuning?: Partial<SwordVisualTuning>;
  scale?: number;
  visible?: boolean;
}

export interface SwordVisualTuning {
  dockSideOffset: number;
  dockForward: number;
  strikeDuration: number;
  followThroughDuration: number;
  swingAngle: number;
  arcLift: number;
  arcRadius: number;
  trailSegments: number;
  trailWidth: number;
  trailIntensity: number;
}

export const defaultSwordVisualTuning: SwordVisualTuning = {
  dockSideOffset: 13,
  dockForward: 3,
  strikeDuration: .31,
  followThroughDuration: .18,
  swingAngle: 2.8,
  arcLift: 14,
  arcRadius: 42,
  trailSegments: 14,
  trailWidth: 2.6,
  trailIntensity: .75,
};

export const completeSwordVisualTuning = (tuning?: Partial<SwordVisualTuning>): SwordVisualTuning => ({
  ...defaultSwordVisualTuning,
  ...tuning,
});

export const swordVisualDurationMs = (tuning?: Partial<SwordVisualTuning>): number => {
  const resolved = completeSwordVisualTuning(tuning);
  return Math.max(120, (resolved.strikeDuration + resolved.followThroughDuration) * 1000);
};

function quadraticPoint(from: { x: number; y: number }, control: { x: number; y: number }, to: { x: number; y: number }, t: number): { x: number; y: number } {
  const inv = 1 - t;
  return {
    x: inv * inv * from.x + 2 * inv * t * control.x + t * t * to.x,
    y: inv * inv * from.y + 2 * inv * t * control.y + t * t * to.y,
  };
}

function cubicPoint(
  from: { x: number; y: number },
  controlA: { x: number; y: number },
  controlB: { x: number; y: number },
  to: { x: number; y: number },
  t: number,
): { x: number; y: number } {
  const inv = 1 - t;
  return {
    x: inv ** 3 * from.x + 3 * inv * inv * t * controlA.x + 3 * inv * t * t * controlB.x + t ** 3 * to.x,
    y: inv ** 3 * from.y + 3 * inv * inv * t * controlA.y + 3 * inv * t * t * controlB.y + t ** 3 * to.y,
  };
}

function swordPath(
  base: { x: number; y: number },
  target: { x: number; y: number },
  destinationSide: -1 | 1,
  scale: number,
  tuning: SwordVisualTuning,
  crossLane: boolean,
  targetSpan: number,
) {
  const startSide: -1 | 1 = destinationSide === 1 ? -1 : 1;
  const sweepWidth = crossLane ? targetSpan * .34 : 0;
  const start = { x: base.x + startSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const finish = { x: base.x + destinationSide * (tuning.dockSideOffset * scale + sweepWidth), y: base.y - tuning.dockForward * scale };
  const targetInfluence = Math.max(0, Math.min(1, tuning.arcRadius / 100));
  const apex = {
    x: ((start.x + finish.x) / 2 * (1 - targetInfluence) + target.x * targetInfluence) + destinationSide * (crossLane ? 12 * scale : 0),
    y: Math.min(start.y, finish.y, target.y) - tuning.arcLift * scale,
  };
  const controlA = {
    x: start.x + startSide * tuning.swingAngle * (crossLane ? 18 : 13) * scale,
    y: start.y + 10 * scale,
  };
  const controlB = {
    x: apex.x - destinationSide * tuning.swingAngle * (crossLane ? 30 : 22) * scale,
    y: apex.y,
  };
  return { start, finish, controlA, controlB };
}

function targetSpan(targets: readonly { x: number; y: number }[]): number {
  if (targets.length < 2) return 0;
  const xs = targets.map(target => target.x);
  return Math.max(...xs) - Math.min(...xs);
}

function sweepTargetFor(targets: readonly { x: number; y: number }[], side: -1 | 1, fallback: { x: number; y: number }): { x: number; y: number } {
  if (targets.length === 0) return fallback;
  if (targets.length === 1) return targets[0];
  const sorted = [...targets].sort((a, b) => side === 1 ? a.x - b.x : b.x - a.x);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const span = Math.abs(last.x - first.x);
  return {
    x: last.x + side * Math.min(34, Math.max(14, span * .1)),
    y: Math.min(...sorted.map(target => target.y), (first.y + last.y) / 2),
  };
}

function slashPose(
  base: { x: number; y: number },
  target: { x: number; y: number },
  destinationSide: -1 | 1,
  progress: number,
  scale: number,
  tuning: SwordVisualTuning,
  crossLane: boolean,
  span: number,
): { x: number; y: number; rotation: number; trailProgress: number } {
  const totalDuration = Math.max(.01, tuning.strikeDuration + tuning.followThroughDuration);
  const strike = tuning.strikeDuration / totalDuration;
  const path = swordPath(base, target, destinationSide, scale, tuning, crossLane, span);
  const tangentSample = (pathT: number) => {
    const a = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.max(0, pathT - .015));
    const b = cubicPoint(path.start, path.controlA, path.controlB, path.finish, Math.min(1, pathT + .015));
    return Math.atan2(b.y - a.y, b.x - a.x) - Math.PI / 2;
  };

  if (progress < strike) {
    const t = progress / strike;
    const ease = t * t * (3 - 2 * t);
    const point = cubicPoint(path.start, path.controlA, path.controlB, path.finish, ease);
    return {
      x: point.x,
      y: point.y,
      rotation: tangentSample(ease),
      trailProgress: ease,
    };
  }

  const t = (progress - strike) / Math.max(.001, 1 - strike);
  const ease = t * t * (3 - 2 * t);
  const overshoot = {
    x: path.finish.x + destinationSide * 7 * scale,
    y: path.finish.y - 4 * scale,
  };
  const point = quadraticPoint(path.finish, overshoot, path.finish, ease);
  return {
    x: point.x,
    y: point.y,
    rotation: tangentSample(1) - destinationSide * (1 - ease) * .35,
    trailProgress: 1,
  };
}

function swordTrail(slash: ActiveSlashAnimation, scale: number, origins: readonly { x: number; y: number }[], tuning: SwordVisualTuning): NeonPrimitive[] {
  if (slash.progress >= 1) return [];
  const life = 1 - slash.progress;
  const thickness = slash.thickness * scale;
  const primitives: NeonPrimitive[] = [];
  const targets = slash.targetPoints.length > 0 ? slash.targetPoints : [{ x: slash.x, y: slash.y - slash.reach }];
  const span = targetSpan(targets);
  const crossLane = span > 80 * scale;
  const sweepTarget = sweepTargetFor(targets, slash.side, targets[0]);
  for (const [index, origin] of origins.entries()) {
    const target = targets.length > 1 ? sweepTarget : targets[index % targets.length];
    const segments = tuning.trailSegments;
    const pose = slashPose(origin, target, slash.side, slash.progress, scale, tuning, crossLane, span);
    const travel = pose.trailProgress;
    if (travel <= 0) continue;
    const visibleSegments = Math.max(3, Math.ceil(segments * travel));
    for (let i = 0; i < visibleSegments; i++) {
      const t0 = Math.max(0, travel - (visibleSegments - i) / segments);
      const t1 = Math.min(1, t0 + .16);
      const totalDuration = tuning.strikeDuration + tuning.followThroughDuration;
      const strike = tuning.strikeDuration / totalDuration;
      const a = slashPose(origin, target, slash.side, t0 * strike, scale, tuning, crossLane, span);
      const b = slashPose(origin, target, slash.side, t1 * strike, scale, tuning, crossLane, span);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const age = i / visibleSegments;
      const fade = Math.max(.18, Math.pow(1 - age, .85)) * Math.min(1, life + .35);
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(1.6, thickness * (tuning.trailWidth - age * tuning.trailWidth * .48)),
        height: Math.hypot(dx, dy) / 2,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.8 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "line",
        rotation: Math.atan2(-dx, dy),
      });
      primitives.push({
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        width: Math.max(2.2, thickness * (tuning.trailWidth * 1.35 - age * tuning.trailWidth * .55)),
        height: Math.hypot(dx, dy) * .72,
        color: slash.color,
        secondaryColor: "#ffffff",
        glow: 1.6 * fade,
        intensity: tuning.trailIntensity * fade,
        shape: "bolt",
        rotation: Math.atan2(-dx, dy),
      });
    }
  }
  return primitives;
}

export function swordVisuals(options: SwordVisualOptions): FamilyVisualScene {
  const scene = emptyScene();
  if (!options.visible) return scene;
  const { definition, slash, points, scale = 1 } = options;
  const tuning = completeSwordVisualTuning(options.tuning);
  const slashes = options.slashes ?? [slash];
  for (const [index, point] of points.entries()) {
    const slotSlash = slashes[index] ?? null;
    const dockSide = slotSlash?.side ?? options.dockSides?.[index] ?? options.dockSide;
    const targets = slotSlash?.targetPoints ?? [];
    const span = targetSpan(targets);
    const crossLane = span > 80 * scale;
    const sweepTarget = slotSlash ? sweepTargetFor(targets, dockSide, { x: point.x, y: point.y - 30 * scale }) : null;
    const target = targets.length > 1 ? sweepTarget : targets[index % Math.max(1, targets.length)];
    const rest = { x: point.x + dockSide * tuning.dockSideOffset * scale, y: point.y - tuning.dockForward * scale };
    const current = slotSlash && target ? slashPose(point, target, dockSide, slotSlash.progress, scale, tuning, crossLane, span) : {
      x: rest.x,
      y: rest.y,
      rotation: -dockSide * .95,
      trailProgress: 0,
    };
    scene.shapes.push({
      shape: requiredShape("sword-needle-sabre"),
      x: current.x,
      y: current.y,
      z: .02 + index * .001,
      size: Math.min(23, definition.range * .34) * scale,
      color: neonPalette[definition.color],
      rotationX: 75 * Math.PI / 180,
      rotationY: 13 * Math.PI / 180,
      rotationZ: 15 * Math.PI / 180 + current.rotation,
      lineThickness: .92,
      glow: slotSlash ? 1.65 : 1.08,
      energyIntensity: slotSlash ? 2.25 : 1.2,
      energyCoverage: slotSlash ? .72 : .42,
      energySpeed: slotSlash ? 2.1 : 1.2,
      energyBleed: slotSlash ? .8 : .5,
    });
  }
  for (const [index, slotSlash] of slashes.entries()) {
    if (!slotSlash) continue;
    const point = points[index];
    if (point) scene.primitives.push(...swordTrail(slotSlash, scale, [point], tuning));
  }
  return scene;
}

export interface FamilyPickupVisualOptions {
  x: number;
  y: number;
  color: string;
  now: number;
  scale?: number;
}

function pickupShape(shapeId: string, options: FamilyPickupVisualOptions): NeonTopDownShape {
  const { x, y, color, now, scale = 1 } = options;
  return {
    shape: requiredShape(shapeId),
    x: x + Math.sin(now / 420 + y * .07) * 4.5 * scale,
    y,
    size: 10 * scale * (1 + Math.sin(now / 600 + y * .05) * .08),
    color,
    rotationZ: now / 1100,
    lineThickness: .76,
    glow: 1.05,
    energyIntensity: 1.25,
    energyCoverage: .48,
    energySpeed: 1.35,
    energyBleed: .55,
  };
}

export const shieldPickupVisual = (options: FamilyPickupVisualOptions): NeonTopDownShape =>
  pickupShape("shield-ring", options);

export const swordPickupVisual = (options: FamilyPickupVisualOptions): NeonTopDownShape =>
  pickupShape("sword-needle-sabre", options);

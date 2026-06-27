import {
  getNeonShape,
  NeonShapeActor,
  NeonShapeDisposal,
  neonPalette,
  type NeonPrimitive,
} from "@just-the-games-please/neon-factory";
import { orbFamily, type OrbId, type OrbMember } from "../CombatDefinition";
import { enemyEntranceProfiles } from "./enemyEntranceVisuals";
import { createEnemyExitEffect, type ActiveEnemyExitEffect } from "./enemyExitVisuals";
import { projectHelicopterPoint, type HelicopterCameraSettings, type HelicopterViewport } from "./viewport";

export type EnemyTrackId = `enemy.${string}`;

export const enemyTrackId = (enemyId: OrbId): EnemyTrackId =>
  enemyId === "basicOrb" ? "enemy.basic" : `enemy.${enemyId}`;

export const enemyIdFromTrackId = (id: string): OrbId | null => {
  if (id === "enemy.basic") return "basicOrb";
  if (!id.startsWith("enemy.")) return null;
  const candidate = id.slice("enemy.".length);
  return candidate in orbFamily.members ? candidate as OrbId : null;
};

export function enemyDefinitionFromTrackId(id: string): { enemyId: OrbId; definition: OrbMember } | null {
  const enemyId = enemyIdFromTrackId(id);
  return enemyId ? { enemyId, definition: orbFamily.members[enemyId] } : null;
}

export function createEnemyActor(enemyId: OrbId): NeonShapeActor {
  const definition = orbFamily.members[enemyId];
  const shape = getNeonShape(definition.shapeId);
  if (!shape) throw new Error(`Enemy "${enemyId}" uses missing NeonFactory shape "${definition.shapeId}".`);
  const entrance = enemyEntranceProfiles[enemyId];
  const actor = new NeonShapeActor({
    shape,
    color: neonPalette[definition.baseColor],
    entranceDuration: entrance.durationSeconds,
    entranceMagnitude: entrance.scatterMagnitude,
  });
  return actor.enter(entrance.durationSeconds, entrance.scatterMagnitude);
}

export function createEnemyDeathEffect(options: {
  enemyId: OrbId;
  x: number;
  y: number;
  color: string;
  seed?: number;
}): ActiveEnemyExitEffect | null {
  const definition = orbFamily.members[options.enemyId];
  if (definition.deathVisual !== "cloud") return null;
  return createEnemyExitEffect({
    enemyType: options.enemyId,
    x: options.x,
    y: options.y,
    color: options.color,
    seed: options.seed,
  });
}

export function disposeEnemyActor(actor: NeonShapeActor, definition: OrbMember): void {
  actor.explodeMagnitude = definition.explosionMagnitude;
  actor.dispose(NeonShapeDisposal.Explode);
}

export interface DamageableEnemy {
  id: number;
  enemyId: OrbId;
  x: number;
  y: number;
  health: number;
  actor: NeonShapeActor;
  dying: boolean;
  hitFlashUntil?: number;
  exitEffectSpawned?: boolean;
}

export function defeatEnemy(
  enemy: DamageableEnemy,
  effects: ActiveEnemyExitEffect[],
  color: string = neonPalette[orbFamily.members[enemy.enemyId].baseColor],
): OrbMember {
  const definition = orbFamily.members[enemy.enemyId];
  enemy.dying = true;
  if (!enemy.exitEffectSpawned) {
    enemy.exitEffectSpawned = true;
    const effect = createEnemyDeathEffect({
      enemyId: enemy.enemyId,
      x: enemy.x,
      y: enemy.y,
      color,
      seed: enemy.id,
    });
    if (effect) effects.push(effect);
  }
  disposeEnemyActor(enemy.actor, definition);
  return definition;
}

export function resolveEnemyDamage(options: {
  enemy: DamageableEnemy;
  effects: ActiveEnemyExitEffect[];
  damage?: number;
  impactMagnitude?: number;
  hitFlashUntil?: number;
  color?: string;
}): { killed: boolean; definition: OrbMember } {
  const definition = orbFamily.members[options.enemy.enemyId];
  if (options.damage) options.enemy.health -= options.damage;
  if (options.impactMagnitude) {
    options.enemy.actor.impact({
      direction: { x: 0, y: 1 },
      magnitude: options.impactMagnitude / definition.impactResistance,
    });
  }
  if (options.hitFlashUntil !== undefined) options.enemy.hitFlashUntil = options.hitFlashUntil;
  if (options.enemy.health <= 0) {
    return { killed: true, definition: defeatEnemy(options.enemy, options.effects, options.color) };
  }
  return { killed: false, definition };
}

export function enemyHealthBarPrimitives(options: {
  x: number;
  y: number;
  width: number;
  health: number;
  maxHealth: number;
  color: string;
  visibleThreshold?: number;
}): NeonPrimitive[] {
  const threshold = options.visibleThreshold ?? orbFamily.members.basicOrb.health;
  if (options.maxHealth <= threshold) return [];
  const ratio = Math.max(0, Math.min(1, options.health / options.maxHealth));
  const y = options.y;
  const width = Math.max(36, options.width);
  const left = options.x - width / 2;
  const filled = Math.max(0, width * ratio);
  return [
    {
      x: options.x,
      y,
      width: 8.8,
      height: width / 2,
      color: "#160817",
      secondaryColor: "#160817",
      glow: .08,
      intensity: .42,
      shape: "line",
      rotation: Math.PI / 2,
    },
    {
      x: left + filled / 2,
      y,
      width: 7.2,
      height: Math.max(1, filled) / 2,
      color: options.color,
      secondaryColor: neonPalette.whiteHot,
      glow: .32,
      intensity: .78,
      shape: "line",
      rotation: Math.PI / 2,
    },
  ];
}

export interface EnemyHealthBarTarget {
  enemyId: OrbId;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  size: number;
  scale?: number;
}

export function projectedEnemyHealthBarPrimitives(
  targets: readonly EnemyHealthBarTarget[],
  cameraSettings: HelicopterCameraSettings,
  viewport: HelicopterViewport,
): NeonPrimitive[] {
  return targets.flatMap(target => {
    const definition = orbFamily.members[target.enemyId];
    const point = projectHelicopterPoint(target.x, target.y, cameraSettings, viewport);
    const projectedSize = target.size * point.scale;
    const scale = target.scale ?? 1;
    return enemyHealthBarPrimitives({
      x: point.x,
      y: point.y - projectedSize * .72 - 12,
      width: Math.max(projectedSize * 1.35, definition.radius * 5.2 * scale * point.scale),
      health: target.health,
      maxHealth: target.maxHealth,
      color: neonPalette[definition.baseColor],
    });
  });
}

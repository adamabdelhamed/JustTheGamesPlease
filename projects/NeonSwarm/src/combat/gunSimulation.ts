import {
  NeonProjectile,
  neonPalette,
  type NeonPrimitive,
  type NeonProjectileShape,
} from "@just-the-games-please/neon-factory";
import type {
  GunLevel,
  GunMember,
  ImpactEffect,
  MuzzleEffect,
  ProjectileShape,
} from "../../CombatDefinition";

export interface GunProjectile {
  id: number;
  lane: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  damage: number;
  pierceRemaining: number;
  color: string;
  trailColor: string;
  coreColor: string;
  aspect: number;
  trailWidthScale: number;
  visualIntensity: number;
  shape: ProjectileShape;
  impactEffect: ImpactEffect;
  impactDurationMs: number;
  trailLength: number;
  tracer: boolean;
  knockback: number;
  hitFlashScale: number;
  hitEnemyIds: Set<number>;
}

export interface GunEffect {
  kind: "muzzle" | "impact" | "death";
  style: MuzzleEffect | ImpactEffect | "deathBloom";
  x: number;
  y: number;
  color: string;
  secondaryColor: string;
  radius: number;
  expiresAt: number;
  duration: number;
  seed: number;
}

export interface GunTarget {
  id: number;
  lane: number;
  x: number;
  y: number;
  radius: number;
  health: number;
  dying: boolean;
}

interface ScheduledVolley {
  firesAt: number;
  gun: GunMember;
  level: GunLevel;
  lane: number;
  origins: readonly { x: number; y: number; aimX?: number; aimY?: number }[];
  scale: number;
}

export class GunSimulation {
  readonly projectiles: GunProjectile[] = [];
  readonly effects: GunEffect[] = [];
  private scheduledVolleys: ScheduledVolley[] = [];
  private sequence = 0;
  private shotSequence = 0;

  clear(): void {
    this.projectiles.length = 0;
    this.effects.length = 0;
    this.scheduledVolleys.length = 0;
  }

  fire(gun: GunMember, level: GunLevel, lane: number, origins: readonly { x: number; y: number; aimX?: number; aimY?: number }[], now: number, scale = 1): void {
    for (let burstIndex = 0; burstIndex < level.burstCount; burstIndex++) {
      this.scheduledVolleys.push({
        firesAt: now + burstIndex * level.burstIntervalMs,
        gun, level, lane, origins: origins.map(origin => ({ ...origin })), scale,
      });
    }
  }

  updateFiring(now: number): number {
    let fired = 0;
    const due = this.scheduledVolleys.filter(volley => volley.firesAt <= now);
    this.scheduledVolleys = this.scheduledVolleys.filter(volley => volley.firesAt > now);
    for (const volley of due) {
      this.spawnVolley(volley, now);
      fired++;
    }
    return fired;
  }

  updateProjectiles(
    delta: number,
    now: number,
    targets: readonly GunTarget[],
    bounds: { top: number; left?: number; right?: number },
    onHit: (projectile: GunProjectile, target: GunTarget) => void,
  ): void {
    for (const projectile of [...this.projectiles]) {
      projectile.x += projectile.vx * delta;
      projectile.y += projectile.vy * delta;
      if (projectile.y < bounds.top || projectile.x < (bounds.left ?? -Infinity) || projectile.x > (bounds.right ?? Infinity)) {
        this.removeProjectile(projectile);
        continue;
      }
      for (const target of targets) {
        if (target.dying || projectile.lane !== target.lane || projectile.hitEnemyIds.has(target.id)) continue;
        const dx = projectile.x - target.x;
        const dy = projectile.y - target.y;
        const hitRadius = projectile.radius + target.radius;
        if (dx * dx + dy * dy > hitRadius * hitRadius) continue;
        projectile.hitEnemyIds.add(target.id);
        target.health -= projectile.damage;
        target.y -= projectile.knockback;
        this.effects.push({
          kind: "impact",
          style: projectile.impactEffect,
          x: projectile.x, y: projectile.y,
          color: projectile.color, secondaryColor: projectile.trailColor,
          radius: projectile.radius * projectile.hitFlashScale * 4,
          expiresAt: now + projectile.impactDurationMs,
          duration: projectile.impactDurationMs,
          seed: projectile.id,
        });
        onHit(projectile, target);
        if (projectile.pierceRemaining > 0) projectile.pierceRemaining--;
        else this.removeProjectile(projectile);
        if (!this.projectiles.includes(projectile)) break;
      }
    }
    for (const effect of [...this.effects]) {
      if (effect.expiresAt <= now) this.effects.splice(this.effects.indexOf(effect), 1);
    }
  }

  projectilePrimitives(): NeonPrimitive[] {
    return this.projectiles.flatMap(projectile => new NeonProjectile({
      x: projectile.x, y: projectile.y,
      velocityX: projectile.vx, velocityY: projectile.vy,
      radius: projectile.radius,
      length: projectile.radius * projectile.aspect,
      trailLength: projectile.trailLength,
      trailWidth: Math.max(projectile.radius * projectile.trailWidthScale, 1.1),
      color: projectile.color,
      trailColor: projectile.trailColor,
      coreColor: projectile.coreColor,
      shape: projectile.shape as NeonProjectileShape,
      intensity: projectile.visualIntensity * (projectile.tracer ? 1.35 : 1),
      glow: projectile.tracer ? 1.4 : .72,
    }).primitives());
  }

  private spawnVolley(volley: ScheduledVolley, now: number): void {
    const { gun, level, lane, origins, scale } = volley;
    for (const origin of origins) {
      const count = Math.max(1, level.projectileCount);
      for (let index = 0; index < count; index++) {
        const aimAngle = origin.aimX === undefined || origin.aimY === undefined
          ? 0
          : Math.atan2(origin.aimX - origin.x, origin.y - origin.aimY);
        const spreadDegrees = count === 1 ? 0 : (index / (count - 1) - .5) * level.spreadDegrees;
        const angle = aimAngle + spreadDegrees * Math.PI / 180;
        const speed = level.projectileSpeed * scale;
        this.shotSequence++;
        this.projectiles.push({
          id: ++this.sequence, lane,
          x: origin.x + (Math.random() * 2 - 1) * gun.visualIdentity.horizontalJitter * scale,
          y: origin.y,
          vx: Math.sin(angle) * speed,
          vy: -Math.cos(angle) * speed,
          radius: level.projectileRadius * scale,
          damage: level.damage,
          pierceRemaining: level.pierce,
          color: neonPalette[gun.visualIdentity.projectileColor],
          trailColor: neonPalette[gun.visualIdentity.trailColor],
          coreColor: neonPalette[gun.visualIdentity.coreColor],
          aspect: gun.visualIdentity.projectileAspect,
          trailWidthScale: gun.visualIdentity.trailWidthScale,
          visualIntensity: gun.visualIdentity.visualIntensity,
          shape: gun.visualIdentity.projectileShape,
          impactEffect: gun.visualIdentity.impactEffect,
          impactDurationMs: gun.visualIdentity.impactDurationMs,
          trailLength: level.trailLength * scale,
          tracer: level.tracerEveryNthShot > 0 && this.shotSequence % level.tracerEveryNthShot === 0,
          knockback: level.knockback * scale,
          hitFlashScale: level.hitFlashScale,
          hitEnemyIds: new Set(),
        });
      }
    }
    this.effects.push({
      kind: "muzzle", style: gun.visualIdentity.muzzleEffect,
      x: origins.reduce((sum, origin) => sum + origin.x, 0) / origins.length,
      y: origins[0]?.y ?? 0,
      color: neonPalette[gun.visualIdentity.projectileColor],
      secondaryColor: neonPalette[gun.visualIdentity.trailColor],
      radius: 10 * level.muzzleFlashScale * scale,
      expiresAt: now + gun.visualIdentity.muzzleDurationMs,
      duration: gun.visualIdentity.muzzleDurationMs,
      seed: this.shotSequence,
    });
  }

  private removeProjectile(projectile: GunProjectile): void {
    const index = this.projectiles.indexOf(projectile);
    if (index >= 0) this.projectiles.splice(index, 1);
  }
}

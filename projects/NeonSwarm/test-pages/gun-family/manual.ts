import { NeonPrimitiveRenderer, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";
import { gunFamily, orbFamily, type GunLevel, type GunMember, type ImpactEffect, type MuzzleEffect, type ProjectileShape } from "../../CombatDefinition";

interface Enemy {
  id: number;
  lane: number;
  y: number;
  health: number;
  hitFlashUntil: number;
}

interface Projectile {
  id: number;
  lane: number;
  x: number;
  y: number;
  vx: number;
  radius: number;
  damage: number;
  speed: number;
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

interface Pickup {
  gunId: string;
  level: number;
  lane: number;
  y: number;
}

interface Effect {
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

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const gunSelect = document.querySelector<HTMLSelectElement>("#gun-select")!;
const levelSelect = document.querySelector<HTMLSelectElement>("#level-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;

try {
  const renderer = await NeonPrimitiveRenderer.create(canvas);
  const guns: Record<string, GunMember> = gunFamily.members;
  const orb = orbFamily.members.basicOrb;
  const enemies: Enemy[] = [];
  const projectiles: Projectile[] = [];
  const pickups: Pickup[] = [];
  const effects: Effect[] = [];
  let playerLane = 0;
  let equippedGunId = "pulsePistol";
  let equippedLevel = 1;
  let cooldown = 0;
  let shotSequence = 0;
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let recoil = 0;
  const pseudoRandom = (seed: number): number => {
    const value = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return value - Math.floor(value);
  };

  const laneX = (lane: number) => canvas.width * (lane === 0 ? 0.38 : 0.62);
  const playerY = () => canvas.height * 0.82;
  const scale = () => Math.min(devicePixelRatio || 1, 2);

  for (const [id, gun] of Object.entries(guns)) {
    gunSelect.add(new Option(gun.label, id));
  }
  gunSelect.value = equippedGunId;

  const selectedLevel = (): GunLevel => {
    const levels = guns[equippedGunId].levels;
    return levels.find(level => level.level === equippedLevel) ?? levels[0];
  };

  const updateReadout = (): void => {
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    weaponReadout.textContent = `${gun.label} · L${level.level}`;
    scoreReadout.textContent = `Kills ${kills}`;
    specReadout.innerHTML = [
      ["Pattern", gun.shotPattern],
      ["Fire rate", `${level.fireRatePerSecond}/s`],
      ["Damage", String(level.damage)],
      ["Speed", String(level.projectileSpeed)],
      ["Radius", String(level.projectileRadius)],
      ["Burst", String(level.burstCount)],
      ["Pierce", String(level.pierce)],
      ["Enemy HP", String(orb.health)],
      ["Enemy speed", String(orb.speed)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };

  const equip = (gunId: string, level: number): void => {
    equippedGunId = gunId;
    equippedLevel = level;
    cooldown = 0;
    gunSelect.value = gunId;
    levelSelect.value = String(level);
    window.gameAudio?.play("Pickup");
    updateReadout();
  };

  const spawnEnemy = (lane: number): void => {
    enemies.push({ id: ++entitySequence, lane, y: 105 * scale(), health: orb.health, hitFlashUntil: 0 });
  };

  const spawnPickup = (lane: number): void => {
    pickups.push({ gunId: gunSelect.value, level: Number(levelSelect.value), lane, y: 135 * scale() });
  };

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy)));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => spawnPickup(Number(button.dataset.spawnPickup)));
  });
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => {
    enemies.length = projectiles.length = pickups.length = effects.length = 0;
  });

  const setLane = (lane: number): void => {
    playerLane = Math.max(0, Math.min(1, lane));
  };
  addEventListener("keydown", event => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") setLane(1);
  });

  window.gameController?.createJoystick({
    element: "#joystick",
    container: document.querySelector("#game"),
    radius: 54,
    orientationLayout: {
      portrait: { x: 82, yFromBottom: 88 },
      landscape: { x: 88, yFromBottom: 82 },
    },
    recenterRadius: { portrait: 130, landscape: 150 },
  }).onChange(input => {
    if (input.x < -0.25) setLane(0);
    if (input.x > 0.25) setLane(1);
  });

  const spawnProjectile = (lane: number, angleDegrees: number, level: GunLevel, gun: GunMember): void => {
    shotSequence += 1;
    const angle = angleDegrees * Math.PI / 180;
    const speed = level.projectileSpeed * scale();
    projectiles.push({
      id: ++entitySequence,
      lane,
      x: laneX(lane) + (pseudoRandom(entitySequence + shotSequence * 3.17) * 2 - 1) * gun.visualIdentity.horizontalJitter * scale(),
      y: playerY() - 22 * scale(),
      vx: Math.sin(angle) * speed,
      radius: level.projectileRadius * scale(),
      damage: level.damage,
      speed: Math.cos(angle) * speed,
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
      trailLength: level.trailLength * scale(),
      tracer: level.tracerEveryNthShot > 0 && shotSequence % level.tracerEveryNthShot === 0,
      knockback: level.knockback * scale(),
      hitFlashScale: level.hitFlashScale,
      hitEnemyIds: new Set(),
    });
  };

  const fireVolley = (gun: GunMember, level: GunLevel): void => {
    const lanes = [playerLane];
    for (const lane of lanes) {
      const count = Math.max(1, level.projectileCount);
      for (let index = 0; index < count; index++) {
        const offset = count === 1 ? 0 : (index / (count - 1) - 0.5) * level.spreadDegrees;
        spawnProjectile(lane, offset, level, gun);
      }
    }
    recoil = level.muzzleFlashScale * 7 * scale();
    effects.push({
      kind: "muzzle",
      style: gun.visualIdentity.muzzleEffect,
      x: laneX(playerLane),
      y: playerY() - 22 * scale(),
      color: neonPalette[gun.visualIdentity.projectileColor],
      secondaryColor: neonPalette[gun.visualIdentity.trailColor],
      radius: 10 * level.muzzleFlashScale * scale(),
      expiresAt: performance.now() + gun.visualIdentity.muzzleDurationMs,
      duration: gun.visualIdentity.muzzleDurationMs,
      seed: shotSequence,
    });
    window.gameAudio?.playRotated("Primary", 3);
  };

  const fire = (gun: GunMember, level: GunLevel): void => {
    fireVolley(gun, level);
    for (let index = 1; index < level.burstCount; index++) {
      setTimeout(() => fireVolley(gun, level), level.burstIntervalMs * index);
    }
  };

  const hitEnemy = (projectile: Projectile, enemy: Enemy, now: number): void => {
    projectile.hitEnemyIds.add(enemy.id);
    enemy.health -= projectile.damage;
    enemy.y -= projectile.knockback;
    enemy.hitFlashUntil = now + orb.hitFlashDurationMs;
    effects.push({
      kind: "impact",
      style: projectile.impactEffect,
      x: projectile.x, y: projectile.y, color: projectile.color,
      secondaryColor: projectile.trailColor,
      radius: projectile.radius * projectile.hitFlashScale * 4,
      expiresAt: now + projectile.impactDurationMs,
      duration: projectile.impactDurationMs,
      seed: projectile.id,
    });
    window.gameAudio?.play("Hit");
    if (enemy.health <= 0) {
      effects.push({
        kind: "death",
        style: "deathBloom",
        x: laneX(enemy.lane), y: enemy.y, color: neonPalette[orb.baseColor],
        secondaryColor: neonPalette[orb.rimColor],
        radius: orb.radius * orb.deathFlashScale * scale(),
        expiresAt: now + orb.hitFlashDurationMs * 2,
        duration: orb.hitFlashDurationMs * 2,
        seed: enemy.id,
      });
      enemies.splice(enemies.indexOf(enemy), 1);
      kills += 1;
      window.gameAudio?.play("EnemyDestroyed");
      updateReadout();
    }
    if (projectile.pierceRemaining > 0) projectile.pierceRemaining -= 1;
    else projectiles.splice(projectiles.indexOf(projectile), 1);
  };

  const update = (now: number): void => {
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    cooldown -= delta;
    if (cooldown <= 0) {
      fire(gun, level);
      cooldown += 1 / level.fireRatePerSecond;
    }
    recoil *= Math.pow(0.001, delta);

    for (const projectile of [...projectiles]) {
      projectile.x += projectile.vx * delta;
      projectile.y -= projectile.speed * delta;
      if (projectile.y < -40 * scale()) {
        projectiles.splice(projectiles.indexOf(projectile), 1);
        continue;
      }
      for (const enemy of [...enemies]) {
        if (projectile.hitEnemyIds.has(enemy.id)) continue;
        const dx = projectile.x - laneX(enemy.lane);
        const dy = projectile.y - enemy.y;
        const hitRadius = projectile.radius + orb.radius * scale();
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          hitEnemy(projectile, enemy, now);
          if (!projectiles.includes(projectile)) break;
        }
      }
    }

    for (const enemy of [...enemies]) {
      enemy.y += orb.speed * scale() * delta;
      if (enemy.y >= playerY()) enemies.splice(enemies.indexOf(enemy), 1);
    }
    for (const pickup of [...pickups]) {
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        equip(pickup.gunId, pickup.level);
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height + 30 * scale()) {
        pickups.splice(pickups.indexOf(pickup), 1);
      }
    }
    for (const effect of [...effects]) {
      if (effect.expiresAt <= now) effects.splice(effects.indexOf(effect), 1);
    }
  };

  const draw = (now: number): void => {
    const s = scale();
    const primitives: NeonPrimitive[] = [];
    primitives.push({ x: laneX(playerLane), y: playerY() + recoil, width: 12 * s, color: neonPalette.cyan, glow: 0.95 });
    for (const projectile of projectiles) {
      primitives.push({
        x: projectile.x, y: projectile.y + projectile.trailLength / 2,
        width: Math.max(projectile.radius * projectile.trailWidthScale, 1.1 * s),
        height: projectile.trailLength,
        color: projectile.trailColor, secondaryColor: projectile.color,
        glow: projectile.tracer ? 1.25 : 0.45,
        intensity: projectile.visualIntensity * (projectile.tracer ? 1.45 : 0.72), shape: "bolt",
      });
      primitives.push({
        x: projectile.x, y: projectile.y,
        width: projectile.radius, height: projectile.radius * projectile.aspect,
        color: projectile.color, secondaryColor: projectile.coreColor,
        glow: projectile.tracer ? 1.4 : 0.72,
        intensity: projectile.visualIntensity * (projectile.tracer ? 1.35 : 1),
        shape: projectile.shape === "needle" ? "circle" : "bolt",
      });
    }
    for (const enemy of enemies) {
      primitives.push({
        x: laneX(enemy.lane) + orb.radius * .35 * s,
        y: enemy.y + orb.radius * 1.12 * s,
        width: orb.radius * .9 * s,
        height: orb.radius * .28 * s,
        color: neonPalette[orb.shadowColor],
        glow: .18,
        intensity: .3,
        shape: "circle",
      });
      primitives.push({
        x: laneX(enemy.lane), y: enemy.y, width: orb.radius * s,
        color: enemy.hitFlashUntil > now ? neonPalette.whiteHot : neonPalette[orb.rimColor],
        secondaryColor: neonPalette[orb.baseColor],
        glow: orb.glow,
        texture: orb.surfaceTexture,
        rimIntensity: orb.rimIntensity,
        shadowStrength: orb.shadowStrength,
        intensity: enemy.hitFlashUntil > now ? 1.55 : 1,
        shape: "orb",
      });
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      const pickupColor = neonPalette[gun.visualIdentity.projectileColor];
      const trailColor = neonPalette[gun.visualIdentity.trailColor];
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 9 * s, height: 9 * gun.visualIdentity.projectileAspect * .55 * s, color: pickupColor, secondaryColor: trailColor, glow: .82, intensity: gun.visualIdentity.visualIntensity, shape: gun.visualIdentity.projectileShape === "needle" ? "circle" : "bolt" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: pickupColor, secondaryColor: trailColor, glow: .48, intensity: .72, shape: "ring" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 13 * s, color: trailColor, secondaryColor: pickupColor, glow: .34, intensity: .58, shape: "spark" });
    }
    for (const effect of effects) {
      const life = Math.max(0, (effect.expiresAt - now) / effect.duration);
      const progress = 1 - life;
      const size = effect.radius * (1 + progress * 1.35);
      if (effect.kind === "muzzle") {
        if (effect.style === "crispStar") {
          primitives.push({ x: effect.x, y: effect.y - size * .28, width: size * .85, height: size * 1.65, color: effect.color, secondaryColor: effect.secondaryColor, glow: .7 * life, intensity: 1.1 * life, shape: "spark" });
        } else if (effect.style === "rapidFlicker") {
          const jitter = (pseudoRandom(effect.seed) * 2 - 1) * size * .35;
          primitives.push({ x: effect.x + jitter, y: effect.y - size * .2, width: size * .52, height: size * .9, color: effect.color, secondaryColor: effect.secondaryColor, glow: .55, intensity: life, shape: "circle" });
        } else if (effect.style === "groupedPulse") {
          primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: .75 * life, intensity: life, shape: "ring" });
          primitives.push({ x: effect.x, y: effect.y - size * .25, width: size * .65, height: size * 1.4, color: effect.secondaryColor, secondaryColor: effect.color, glow: .5, intensity: life, shape: "spark" });
        } else if (effect.style === "shockDiamond") {
          primitives.push({ x: effect.x, y: effect.y - size * .35, width: size * .95, height: size * 1.65, color: effect.color, secondaryColor: effect.secondaryColor, glow: .9, intensity: 1.15 * life, shape: "bolt" });
          primitives.push({ x: effect.x, y: effect.y, width: size * 1.2, color: effect.secondaryColor, secondaryColor: effect.color, glow: .55, intensity: .75 * life, shape: "ring" });
        } else {
          primitives.push({ x: effect.x - size * .35, y: effect.y - size * .2, width: size * .38, height: size * 1.5, color: effect.color, secondaryColor: effect.secondaryColor, glow: .65, intensity: life, shape: "bolt" });
          primitives.push({ x: effect.x + size * .35, y: effect.y - size * .2, width: size * .38, height: size * 1.5, color: effect.secondaryColor, secondaryColor: effect.color, glow: .65, intensity: life, shape: "bolt" });
        }
      } else if (effect.kind === "impact") {
        if (effect.style === "impactRing" || effect.style === "splitRipple") {
          primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: .72 * life, intensity: life, shape: "ring" });
          if (effect.style === "splitRipple") primitives.push({ x: effect.x, y: effect.y, width: size * .62, color: effect.secondaryColor, secondaryColor: effect.color, glow: .48, intensity: life, shape: "ring" });
        }
        const sparkCount = effect.style === "needleScatter" ? 3 : effect.style === "burstCross" ? 2 : 1;
        for (let index = 0; index < sparkCount; index++) {
          const offset = (index - (sparkCount - 1) / 2) * size * .36;
          primitives.push({ x: effect.x + offset, y: effect.y, width: size * .62, height: size * (effect.style === "needleScatter" ? 1.35 : .9), color: index % 2 ? effect.secondaryColor : effect.color, secondaryColor: effect.color, glow: .55 * life, intensity: life, shape: "spark" });
        }
      } else {
        primitives.push({ x: effect.x, y: effect.y, width: size, color: effect.color, secondaryColor: effect.secondaryColor, glow: life, intensity: life, shape: "ring" });
        primitives.push({ x: effect.x, y: effect.y, width: size * .7, color: effect.secondaryColor, secondaryColor: effect.color, glow: life, intensity: life, shape: "spark" });
      }
    }
    renderer.render(primitives, now / 1000);
  };

  const frame = (now: number): void => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };

  equip(equippedGunId, equippedLevel);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window {
    gameAudio?: {
      play(id: string): void;
      playRotated(id: string, alternatives: number): void;
    };
    gameController?: {
      createJoystick(options: object): {
        onChange(callback: (input: { x: number; y: number; magnitude: number }) => void): unknown;
      };
    };
  }
}

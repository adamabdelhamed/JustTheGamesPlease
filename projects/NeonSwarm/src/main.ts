import { NeonPrimitiveRenderer, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";

interface GunLevel {
  level: number;
  fireRatePerSecond: number;
  damage: number;
  projectileSpeed: number;
  projectileRadius: number;
  projectileCount: number;
  burstCount: number;
  burstIntervalMs: number;
  spreadDegrees: number;
  pierce: number;
  laneCoverage?: "both";
  trailLength: number;
  tracerEveryNthShot: number;
  impactRadius?: number;
  knockback: number;
  muzzleFlashScale: number;
  hitFlashScale: number;
}

interface GunMember {
  label: string;
  shotPattern: "single" | "rapidSingle" | "burst" | "heavySingle" | "pairedLaneSplit";
  projectileBehavior: "straight" | "piercingStraight";
  visualIdentity: {
    silhouette: string;
    projectileColor: string;
  };
  levels: GunLevel[];
}

interface GunSpec {
  weaponFamilies: { gun: { members: Record<string, GunMember> } };
}

interface OrbMember {
  label: string;
  health: number;
  speed: number;
  radius: number;
  contactDamage: number;
  score: number;
  color: string;
  glow: number;
  hitFlashDurationMs: number;
  deathFlashScale: number;
}

interface OrbSpec {
  enemyFamilies: { orb: { members: { basicOrb: OrbMember } } };
}

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
  x: number;
  y: number;
  color: string;
  radius: number;
  expiresAt: number;
  duration: number;
}

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const gunSelect = document.querySelector<HTMLSelectElement>("#gun-select")!;
const levelSelect = document.querySelector<HTMLSelectElement>("#level-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;

const loadJson = async <T>(path: string): Promise<T> => {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
  return response.json() as Promise<T>;
};

const validateSpecs = (guns: GunSpec, orbs: OrbSpec): void => {
  const members = guns.weaponFamilies?.gun?.members;
  if (!members || Object.keys(members).length === 0) throw new Error("GunFamily.json has no gun members.");
  for (const [id, gun] of Object.entries(members)) {
    if (!gun.levels?.length) throw new Error(`${id} has no levels.`);
    if (!gun.visualIdentity?.projectileColor) throw new Error(`${id} is missing visualIdentity.projectileColor.`);
  }
  if (!orbs.enemyFamilies?.orb?.members?.basicOrb) throw new Error("OrbFamily.json is missing basicOrb.");
};

try {
  const [gunSpec, orbSpec, renderer] = await Promise.all([
    loadJson<GunSpec>("NeonSwarm/specs/GunFamily.json"),
    loadJson<OrbSpec>("NeonSwarm/specs/OrbFamily.json"),
    NeonPrimitiveRenderer.create(canvas),
  ]);
  validateSpecs(gunSpec, orbSpec);

  const guns = gunSpec.weaponFamilies.gun.members;
  const orb = orbSpec.enemyFamilies.orb.members.basicOrb;
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
  let muzzleUntil = 0;

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
      x: laneX(lane),
      y: playerY() - 22 * scale(),
      vx: Math.sin(angle) * speed,
      radius: level.projectileRadius * scale(),
      damage: level.damage,
      speed: Math.cos(angle) * speed,
      pierceRemaining: level.pierce,
      color: gun.visualIdentity.projectileColor,
      trailLength: level.trailLength * scale(),
      tracer: level.tracerEveryNthShot > 0 && shotSequence % level.tracerEveryNthShot === 0,
      knockback: level.knockback * scale(),
      hitFlashScale: level.hitFlashScale,
      hitEnemyIds: new Set(),
    });
  };

  const fireVolley = (gun: GunMember, level: GunLevel): void => {
    const lanes = gun.shotPattern === "pairedLaneSplit" || level.laneCoverage === "both" ? [0, 1] : [playerLane];
    for (const lane of lanes) {
      const count = Math.max(1, level.projectileCount / lanes.length);
      for (let index = 0; index < count; index++) {
        const offset = count === 1 ? 0 : (index / (count - 1) - 0.5) * level.spreadDegrees;
        spawnProjectile(lane, offset, level, gun);
      }
    }
    recoil = level.muzzleFlashScale * 7 * scale();
    muzzleUntil = performance.now() + 70;
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
      x: projectile.x, y: projectile.y, color: projectile.color,
      radius: projectile.radius * projectile.hitFlashScale * 4,
      expiresAt: now + orb.hitFlashDurationMs,
      duration: orb.hitFlashDurationMs,
    });
    window.gameAudio?.play("Hit");
    if (enemy.health <= 0) {
      effects.push({
        x: laneX(enemy.lane), y: enemy.y, color: orb.color,
        radius: orb.radius * orb.deathFlashScale * scale(),
        expiresAt: now + orb.hitFlashDurationMs * 2,
        duration: orb.hitFlashDurationMs * 2,
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
    for (const lane of [0, 1]) {
      primitives.push({ x: laneX(lane), y: canvas.height * 0.52, width: 1.2 * s, height: canvas.height * 0.82, color: "#174a61", glow: 0.22, shape: "bolt" });
    }
    primitives.push({ x: laneX(playerLane), y: playerY() + recoil, width: 12 * s, color: neonPalette.cyan, glow: 0.95 });
    if (muzzleUntil > now) {
      const level = selectedLevel();
      primitives.push({ x: laneX(playerLane), y: playerY() - 25 * s, width: 10 * level.muzzleFlashScale * s, color: guns[equippedGunId].visualIdentity.projectileColor, glow: 1.2 });
    }
    for (const projectile of projectiles) {
      primitives.push({
        x: projectile.x, y: projectile.y + projectile.trailLength / 2,
        width: Math.max(projectile.radius * 0.7, 1.2 * s),
        height: projectile.trailLength,
        color: projectile.color, glow: projectile.tracer ? 1.25 : 0.55,
        intensity: projectile.tracer ? 1.4 : 0.85, shape: "bolt",
      });
      primitives.push({
        x: projectile.x, y: projectile.y,
        width: projectile.radius, height: projectile.radius * (projectile.radius > 4 * s ? 1.5 : 2.5),
        color: projectile.color, glow: projectile.tracer ? 1.4 : 0.75, shape: "bolt",
      });
    }
    for (const enemy of enemies) {
      primitives.push({
        x: laneX(enemy.lane), y: enemy.y, width: orb.radius * s,
        color: enemy.hitFlashUntil > now ? "#ffffff" : orb.color,
        glow: orb.glow, intensity: enemy.hitFlashUntil > now ? 1.6 : 1,
      });
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 10 * s, color: gun.visualIdentity.projectileColor, glow: 1.1, shape: "bolt" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 17 * s, color: gun.visualIdentity.projectileColor, glow: 0.35, intensity: 0.5 });
    }
    for (const effect of effects) {
      const life = Math.max(0, (effect.expiresAt - now) / effect.duration);
      primitives.push({ x: effect.x, y: effect.y, width: effect.radius * (1.5 - life * 0.5), color: effect.color, glow: life, intensity: life });
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

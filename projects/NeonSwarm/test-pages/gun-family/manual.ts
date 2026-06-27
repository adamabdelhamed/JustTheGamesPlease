import { NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer, neonPalette, type NeonPrimitive, type NeonTopDownShape } from "@just-the-games-please/neon-factory";
import { gunFamily, multiplierFamily, orbFamily, type GunLevel, type GunMember, type OrbId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { SquadModel } from "../../src/squad";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";
import { defaultHelicopterCameraSettings, applyPortraitStage, laneRunnerCameraFocusX, laneRunnerViewport, projectHelicopterScene } from "../../src/viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../../src/shapeVisuals";
import { billboardOrientation, enemyOrientation, helicopterViewportFor, playerOrientation } from "../../src/renderOrientation";
import { GunSimulation } from "../../src/combat/gunSimulation";
import { createEnemyActor, projectedEnemyHealthBarPrimitives, resolveEnemyDamage } from "../../src/enemyCatalog";
import { enemyExitCloud, updateEnemyExitEffects, type ActiveEnemyExitEffect } from "../../src/enemyExitVisuals";
import { applyLaneRunnerSceneBackground, laneRunnerScenePrimitives } from "../../src/sceneEnvironment";

interface Enemy {
  id: number;
  lane: number;
  enemyId: OrbId;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  hitFlashUntil: number;
  rowId: number;
  actor: NeonShapeActor;
  dying: boolean;
}

interface Pickup {
  gunId: string;
  level: number;
  lane: number;
  y: number;
  actor: NeonShapeActor;
}

interface MultiplierPickup { lane: number; y: number; actor: NeonShapeActor }

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const gunSelect = document.querySelector<HTMLSelectElement>("#gun-select")!;
const levelSelect = document.querySelector<HTMLSelectElement>("#level-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const formationSize = document.querySelector<HTMLInputElement>("#formation-size")!;
const formationRows = document.querySelector<HTMLSelectElement>("#formation-rows")!;
const shapeZoom = document.querySelector<HTMLInputElement>("#shape-zoom")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
applyPortraitStage(gameElement, laneRunnerViewport);
applyLaneRunnerSceneBackground(gameElement, "neonHall");
const audioId = (id: string): string => `../../../../audio/${id}`;
const playSfx = (id: string): void => window.gameAudio?.play(audioId(id));
const playRotatedSfx = (id: string, alternatives: number): void => window.gameAudio?.playRotated(audioId(id), alternatives);

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, laneRunnerViewport.logicalWidth, laneRunnerViewport.logicalHeight);
  const guns: Record<string, GunMember> = gunFamily.members;
  const enemies: Enemy[] = [];
  const gunSimulation = new GunSimulation();
  const projectiles = gunSimulation.projectiles;
  const pickups: Pickup[] = [];
  const effects = gunSimulation.effects;
  const enemyExitEffects: ActiveEnemyExitEffect[] = [];
  const multipliers: MultiplierPickup[] = [];
  const squad = new SquadModel();
  let playerLane = 0;
  const aimControl = new AutoAimControlState();
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

  const laneX = (lane: number) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;
  const playEnemySpawnSound = (id: string | null): void => {
    if (!id) return;
    if (id === "Boss") playRotatedSfx("Boss", 1);
    else playSfx(id);
  };

  for (const [id, gun] of Object.entries(guns)) {
    gunSelect.add(new Option(gun.label, id));
  }
  gunSelect.value = equippedGunId;
  for (const [id, enemy] of Object.entries(orbFamily.members)) {
    enemySelect.add(new Option(enemy.label, id));
  }
  enemySelect.value = "basicOrb";

  const selectedLevel = (): GunLevel => {
    const levels = guns[equippedGunId].levels;
    return levels.find(level => level.level === equippedLevel) ?? levels[0];
  };

  const updateReadout = (): void => {
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    const enemy = orbFamily.members[enemySelect.value as OrbId];
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
      ["Enemy", enemy.label],
      ["Enemy HP", String(enemy.health)],
      ["Enemy speed", String(enemy.speed)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };

  const equip = (gunId: string, level: number): void => {
    equippedGunId = gunId;
    equippedLevel = level;
    cooldown = 0;
    gunSelect.value = gunId;
    levelSelect.value = String(level);
    playSfx("Pickup");
    updateReadout();
  };

  squad.x = laneX(0);
  squad.targetX = laneX(0);

  const spawnEnemy = (lane: number, x = laneX(lane), y = 105 * scale(), rowId = ++entitySequence): void => {
    const enemyId = enemySelect.value as OrbId;
    const definition = orbFamily.members[enemyId];
    const maxHealth = definition.health;
    enemies.push({ id: ++entitySequence, lane, enemyId, x, y, health: maxHealth, maxHealth, hitFlashUntil: 0, rowId, actor: createEnemyActor(enemyId), dying: false });
    playEnemySpawnSound(definition.spawnSound);
  };

  const spawnPickup = (lane: number): void => {
    pickups.push({ gunId: gunSelect.value, level: Number(levelSelect.value), lane, y: 135 * scale(), actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
  };

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy)));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => spawnPickup(Number(button.dataset.spawnPickup)));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-formation]").forEach(button => {
    button.addEventListener("click", () => {
      const lane = Number(button.dataset.spawnFormation);
      const count = Number(formationSize.value);
      const rows = Number(formationRows.value);
      const perRow = Math.ceil(count / rows);
      let remaining = count;
      for (let row = 0; row < rows; row++) {
        const rowId = ++entitySequence;
        const rowCount = Math.min(perRow, remaining);
        for (let column = 0; column < rowCount; column++) {
          spawnEnemy(lane, laneX(lane) + (column - (rowCount - 1) / 2) * 15 * scale(), (105 - row * 24) * scale(), rowId);
        }
        remaining -= rowCount;
      }
    });
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-multiplier]").forEach(button => {
    button.addEventListener("click", () => multipliers.push({ lane: Number(button.dataset.spawnMultiplier), y: 135 * scale(), actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) }));
  });
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => {
    enemies.length = projectiles.length = pickups.length = effects.length = multipliers.length = enemyExitEffects.length = 0;
  });

  bindSquadInput(document.querySelector<HTMLElement>("#game")!, "#joystick", {
    lane: () => squad.lane,
    setLane: lane => {
      playerLane = lane;
      squad.setLane(lane, laneX, performance.now());
      aimControl.laneSelected();
    },
    setAim: value => {
      squad.setAim(value, canvas.width * .22, laneX);
      aimControl.aimChanged();
    },
    releaseAim: () => { aimControl.aimReleased(); },
  });

  const fireVolley = (gun: GunMember, level: GunLevel): void => {
    gunSimulation.fire(gun, level, playerLane, squad.points(playerY(), scale()).map(point => ({
      x: point.x, y: playerY() - 22 * scale(),
    })), performance.now(), scale());
    recoil = level.muzzleFlashScale * 7 * scale();
  };

  const fire = (gun: GunMember, level: GunLevel): void => {
    fireVolley(gun, level);
  };

  const hitEnemy = (projectile: typeof projectiles[number], enemy: Enemy, now: number): void => {
    const definition = orbFamily.members[enemy.enemyId];
    const result = resolveEnemyDamage({
      enemy,
      effects: enemyExitEffects,
      impactMagnitude: projectile.damage + projectile.knockback * .06,
      hitFlashUntil: now + definition.hitFlashDurationMs,
      color: neonPalette[definition.baseColor],
    });
    if (result.killed) {
      kills += 1;
      playSfx(result.definition.deathSound);
      updateReadout();
    } else {
      playSfx("Hit");
    }
  };

  const update = (now: number): void => {
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    updateEnemyExitEffects(enemyExitEffects, delta);
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    cooldown -= delta;
    if (cooldown <= 0) {
      fire(gun, level);
      cooldown += 1 / level.fireRatePerSecond;
    }
    if (gunSimulation.updateFiring(now) > 0) playRotatedSfx("Primary", 3);
    recoil *= Math.pow(0.001, delta);
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter(enemy => enemy.lane === squad.lane && !enemy.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);

    gunSimulation.updateProjectiles(delta, now, enemies.map(enemy => Object.assign(enemy, {
      radius: orbFamily.members[enemy.enemyId].radius * scale(),
    })), { top: -40 * scale(), left: -40, right: canvas.width + 40 },
    (projectile, target) => hitEnemy(projectile, target as unknown as Enemy, now));

    for (const enemy of [...enemies]) {
      enemy.actor.update(delta);
      enemy.y += orbFamily.members[enemy.enemyId].speed * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) { enemies.splice(enemies.indexOf(enemy), 1); continue; }
      if (!enemy.dying && enemy.y >= playerY()) enemies.splice(enemies.indexOf(enemy), 1);
    }
    for (const pickup of [...pickups]) {
      pickup.actor.update(delta); pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        equip(pickup.gunId, pickup.level);
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height + 30 * scale()) {
        pickups.splice(pickups.indexOf(pickup), 1);
      }
    }
    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta); pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members.squadPlusOne.squadAdded);
        multipliers.splice(multipliers.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
  };

  const draw = (now: number): void => {
    const s = scale();
    const primitives: NeonPrimitive[] = [
      ...laneRunnerScenePrimitives("neonHall", canvas.width, canvas.height, now),
    ];
    for (const point of squad.points(playerY() + recoil, s)) void point;
    primitives.push(...gunSimulation.projectilePrimitives());
    if (false) for (const enemy of enemies) {
      const definition = orbFamily.members[enemy.enemyId];
      primitives.push({
        x: enemy.x + definition.radius * .35 * s,
        y: enemy.y + definition.radius * 1.12 * s,
        width: definition.radius * .9 * s,
        height: definition.radius * .28 * s,
        color: neonPalette[definition.shadowColor],
        glow: .18,
        intensity: .3,
        shape: "circle",
      });
      primitives.push({
        x: enemy.x, y: enemy.y, width: definition.radius * s,
        color: enemy.hitFlashUntil > now ? neonPalette.whiteHot : neonPalette[definition.rimColor],
        secondaryColor: neonPalette[definition.baseColor],
        glow: definition.glow,
        texture: definition.surfaceTexture,
        rimIntensity: definition.rimIntensity,
        shadowStrength: definition.shadowStrength,
        intensity: enemy.hitFlashUntil > now ? 1.55 : 1,
        shape: "orb",
      });
    }
    if (false) for (const pickup of multipliers) {
      const spec = multiplierFamily.members.squadPlusOne;
      const pColor = neonPalette[spec.pickupColor];
      const tColor = neonPalette[spec.coreColor];
      const px = laneX(pickup.lane);
      // Wobble & scale pulse matching weapon pickup style
      const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
      const wx = px + wobble;
      const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;

      // Outer bloom halo (different size/glow for distinction)
      primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pColor, secondaryColor: tColor, glow: .95, intensity: .25, shape: "circle" });
      // Pentagon glassy panel (neon edges)
      primitives.push({ x: wx, y: pickup.y, width: 19 * s * pulse, color: pColor, secondaryColor: tColor, glow: .9, intensity: 1.1, shape: "pentagon" });

      // Inner glyph for "+1" (using simple lines/spark for + and bolt/line for 1)
      // Draw the vertical and horizontal bars of "+"
      primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 1.0 * s, height: 6.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });
      primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 6.0 * s, height: 1.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });
      // Draw the "1" (thick vertical line with a small notch)
      primitives.push({ x: wx + 2.5 * s, y: pickup.y, width: 1.4 * s, height: 7.0 * s, color: pColor, secondaryColor: tColor, glow: .75, intensity: 1.2, shape: "bolt" });
      primitives.push({ x: wx + 1.2 * s, y: pickup.y - 2.5 * s, width: 1.5 * s, height: 1.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });

      // Sparkle particles
      for (let sp = 0; sp < 3; sp++) {
        const angle = now / 900 + sp * 2.09 + pickup.y;
        const dist = (10 + sp * 3.5) * s * pulse;
        primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pColor, glow: .95, intensity: .6 + Math.sin(now / 300 + sp) * .25, shape: "circle" });
      }
    }
    if (false) for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      const pickupColor = neonPalette[gun.visualIdentity.projectileColor];
      const trailColor = neonPalette[gun.visualIdentity.trailColor];
      const px = laneX(pickup.lane);
      // Wobble: gentle ±15° rocking → horizontal offset
      const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
      const wx = px + wobble;
      // Scale pulse
      const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;
      // Outer bloom halo
      primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pickupColor, secondaryColor: trailColor, glow: .9, intensity: .22, shape: "circle" });
      // Diamond glassy panel (neon edges)
      primitives.push({ x: wx, y: pickup.y, width: 18 * s * pulse, color: pickupColor, secondaryColor: trailColor, glow: .85, intensity: 1.05, shape: "diamond" });
      // Inner weapon icon (silhouette varies per projectile shape)
      const iconShape = gun.visualIdentity.projectileShape;
      if (iconShape === "needle") {
        for (let n = -1; n <= 1; n++) primitives.push({ x: wx + n * 3.2 * s, y: pickup.y, width: 1.2 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: .6, intensity: 1.1, shape: "bolt" });
      } else if (iconShape === "slug") {
        primitives.push({ x: wx, y: pickup.y, width: 3.5 * s, height: 9 * s, color: pickupColor, secondaryColor: trailColor, glow: .7, intensity: 1.15, shape: "bolt" });
      } else if (iconShape === "splitBolt") {
        primitives.push({ x: wx - 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: .6, intensity: 1.1, shape: "bolt" });
        primitives.push({ x: wx + 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pickupColor, secondaryColor: trailColor, glow: .6, intensity: 1.1, shape: "bolt" });
      } else {
        primitives.push({ x: wx, y: pickup.y - 1 * s, width: 2 * s, height: 9 * s, color: pickupColor, secondaryColor: trailColor, glow: .65, intensity: 1.1, shape: "bolt" });
      }
      // Sparkle particles
      for (let sp = 0; sp < 3; sp++) {
        const angle = now / 900 + sp * 2.09 + pickup.y;
        const dist = (9 + sp * 3) * s * pulse;
        primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pickupColor, glow: .9, intensity: .55 + Math.sin(now / 300 + sp) * .25, shape: "circle" });
      }
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
    
    const zoom = +shapeZoom.value / 100;
    const shapes: NeonTopDownShape[] = [];
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY(), laneRunnerCameraFocusX(canvas.width, squad.x));
    for (const [index, point] of squad.points(playerY() + recoil, s).entries()) {
      shapes.push(actorInTopDownScene(new NeonShapeActor({ shape: swarmShapes.player }), point.x, point.y, 14 * zoom, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    const enemyHealthBars: Parameters<typeof projectedEnemyHealthBarPrimitives>[0][number][] = [];
    for (const enemy of enemies) {
      const definition = orbFamily.members[enemy.enemyId];
      const size = 18 * definition.columnSpan * zoom;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapes.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 15 * zoom, billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, laneX(pickup.lane), pickup.y, now)));
    }
    for (const pickup of multipliers) {
      pickup.actor.label = shapeLabel(`${multiplierFamily.members.squadPlusOne.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[multiplierFamily.members.squadPlusOne.pickupColor];
      shapes.push(actorInTopDownScene(pickup.actor, laneX(pickup.lane), pickup.y, 16 * zoom, billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, laneX(pickup.lane), pickup.y, now)));
    }
  const projected = projectHelicopterScene(primitives, shapes, enemyExitEffects.map(enemyExitCloud), defaultHelicopterCameraSettings, helicopterViewport);
  projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, defaultHelicopterCameraSettings, helicopterViewport));
  renderer.render(projected, now / 1000);
  };

  const frame = (now: number): void => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };

  equip(equippedGunId, equippedLevel);
  enemySelect.addEventListener("change", updateReadout);
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
  }
}

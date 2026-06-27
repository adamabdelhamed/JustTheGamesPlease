import {
  NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer,
  neonPalette, type NeonPrimitive, type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  shieldFamily, orbFamily,
  type OrbId,
  type ShieldId,
} from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { SquadModel } from "../../src/squad";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";
import { defaultHelicopterCameraSettings, applyPortraitStage, laneRunnerCameraFocusX, laneRunnerViewport, projectHelicopterScene } from "../../src/viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../../src/shapeVisuals";
import { enemyOrientation, helicopterViewportFor, playerOrientation } from "../../src/renderOrientation";
import { resolveShieldContact, ShieldState, tickShield } from "../../src/combat/shieldEvaluator";
import { queryNearbyThreats } from "../../src/combat/nearbyThreatQuery";
import { shieldPickupVisual, shieldVisuals } from "../../src/familyVisuals";
import { createEnemyActor, projectedEnemyHealthBarPrimitives, resolveEnemyDamage } from "../../src/enemyCatalog";
import { enemyExitCloud, updateEnemyExitEffects, type ActiveEnemyExitEffect } from "../../src/enemyExitVisuals";
import { applyLaneRunnerSceneBackground, laneRunnerScenePrimitives } from "../../src/sceneEnvironment";

interface Enemy {
  id: number;
  lane: 0 | 1;
  enemyId: OrbId;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  rowId: number;
  actor: NeonShapeActor;
  dying: boolean;
}

interface ShieldPickup {
  shieldId: ShieldId;
  lane: 0 | 1;
  y: number;
}

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const shieldSelect = document.querySelector<HTMLSelectElement>("#shield-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const enemyHpInput = document.querySelector<HTMLInputElement>("#enemy-hp")!;
const shieldStrengthReadout = document.querySelector<HTMLElement>("#shield-strength")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
applyPortraitStage(gameElement, laneRunnerViewport);
applyLaneRunnerSceneBackground(gameElement, "neonHall");
const audioId = (id: string): string => `../../../../audio/${id}`;
const playSfx = (id: string): void => window.gameAudio?.play(audioId(id));
const playRotatedSfx = (id: string, alternatives: number): void => window.gameAudio?.playRotated(audioId(id), alternatives);
const playEnemyDestroyed = (): void => window.gameAudio?.playRotated(audioId("EnemyDestroyed"), 2);
const playEnemySpawnSound = (id: string | null): void => {
  if (!id) return;
  if (id === "Boss") playRotatedSfx("Boss", 1);
  else playSfx(id);
};

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, laneRunnerViewport.logicalWidth, laneRunnerViewport.logicalHeight);
  const enemies: Enemy[] = [];
  const enemyExitEffects: ActiveEnemyExitEffect[] = [];
  const pickups: ShieldPickup[] = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let playerLane = 0;
  let activeShieldId: ShieldId = "lightGuard";
  let shieldState = new ShieldState(activeShieldId, shieldFamily.members[activeShieldId].maxCharges);
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let playerAlive = true;
  let restartAt = 0;
  let playerActor = new NeonShapeActor({ shape: swarmShapes.player });
  let initialShieldStrength: number = shieldFamily.members[activeShieldId].maxCharges;
  let shieldStrength: number = initialShieldStrength;

  const laneX = (lane: number) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;

  for (const [id, shield] of Object.entries(shieldFamily.members)) {
    shieldSelect.add(new Option(shield.label, id));
  }
  shieldSelect.value = activeShieldId;
  for (const [id, enemy] of Object.entries(orbFamily.members)) {
    enemySelect.add(new Option(enemy.label, id));
  }
  enemySelect.value = "basicOrb";

  const equip = (id: ShieldId) => {
    activeShieldId = id;
    const def = shieldFamily.members[id];
    shieldState = new ShieldState(id, def.maxCharges);
    initialShieldStrength = def.mode === "charge" ? def.maxCharges : 0;
    shieldStrength = initialShieldStrength;
    shieldSelect.value = id;
    playSfx("PickupShield");
    playSfx("Shield");
    updateReadout();
  };

  const updateReadout = () => {
    const def = shieldFamily.members[activeShieldId];
    const enemy = orbFamily.members[enemySelect.value as OrbId];
    weaponReadout.textContent = `${def.label}`;
    scoreReadout.textContent = `Kills ${kills}`;
    const chargesText = def.maxCharges > 0 ? `${Math.ceil(shieldStrength)}/${def.maxCharges}` : "—";
    shieldStrengthReadout.textContent = `${shieldStrength.toFixed(2)} / ${initialShieldStrength.toFixed(2)}`;
    specReadout.innerHTML = [
      ["Radius", String(def.radius)],
      ["Strength", chargesText],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Orbiters", `${def.orbiterCount} × ${def.orbiterShape}`],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
    specReadout.innerHTML += [
      ["Enemy", enemy.label],
      ["Enemy speed", String(enemy.speed)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };

  squad.x = laneX(0);
  squad.targetX = laneX(0);

  const spawnEnemy = (lane: 0 | 1): void => {
    const enemyId = enemySelect.value as OrbId;
    const definition = orbFamily.members[enemyId];
    const requestedHp = Number.parseFloat(enemyHpInput.value);
    const health = Number.isFinite(requestedHp) && requestedHp > 0 ? requestedHp : definition.health;
    enemies.push({ id: ++entitySequence, lane, enemyId, x: laneX(lane), y: 105, health, maxHealth: health, rowId: ++entitySequence, actor: createEnemyActor(enemyId), dying: false });
    playEnemySpawnSound(definition.spawnSound);
  };

  const spawnPickup = (lane: 0 | 1): void => {
    pickups.push({ shieldId: shieldSelect.value as ShieldId, lane, y: 135 });
  };

  const restartSimulation = (): void => {
    enemies.length = 0;
    enemyExitEffects.length = 0;
    pickups.length = 0;
    playerAlive = true;
    restartAt = 0;
    playerActor = new NeonShapeActor({ shape: swarmShapes.player });
    equip(activeShieldId);
    spawnEnemy(0);
    spawnEnemy(1);
  };

  const killPlayer = (now: number): void => {
    if (!playerAlive) return;
    playerAlive = false;
    restartAt = now + 900;
    playerActor.explodeMagnitude = 0.8;
    playerActor.dispose(NeonShapeDisposal.Explode);
    weaponReadout.textContent = "Shield broken";
    playSfx("ShieldBreak");
  };

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(b => b.addEventListener("click", () => spawnEnemy(Number(b.dataset.spawnEnemy) as 0 | 1)));
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(b => b.addEventListener("click", () => spawnPickup(Number(b.dataset.spawnPickup) as 0 | 1)));
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0); spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => {
    enemies.length = pickups.length = 0;
    enemyExitEffects.length = 0;
  });
  shieldSelect.addEventListener("change", () => equip(shieldSelect.value as ShieldId));
  enemySelect.addEventListener("change", updateReadout);

  bindSquadInput(gameElement, "#joystick", {
    lane: () => squad.lane,
    setLane: lane => { playerLane = lane; squad.setLane(lane, laneX, performance.now()); aimControl.laneSelected(); },
    setAim: value => { squad.setAim(value, canvas.width * .22, laneX); aimControl.aimChanged(); },
    releaseAim: () => { aimControl.aimReleased(); },
  });

  const update = (now: number): void => {
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    updateEnemyExitEffects(enemyExitEffects, delta);
    playerActor.update(delta);
    if (!playerAlive) {
      if (shieldState.hitFlashUntil > 0) {
        shieldState.hitFlashProgress = Math.min(1, (now - (shieldState.hitFlashUntil - 280)) / 280);
      }
      for (const e of enemies) e.actor.update(delta);
      if (now >= restartAt) restartSimulation();
      return;
    }

    // Auto aim
    if (!aimControl.manual) {
      const laneEnemies = enemies.filter(e => e.lane === squad.lane && !e.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);

    // Shield tick
    const px = squad.x;
    const py = playerY();
    const def = shieldFamily.members[activeShieldId];
    const maxEnemyRadius = Math.max(...enemies.map(e => orbFamily.members[e.enemyId].radius), orbFamily.members.basicOrb.radius);
    const threats = queryNearbyThreats(enemies, { origin: { x: px, y: py }, lane: playerLane as 0 | 1, range: def.radius + maxEnemyRadius, purpose: "shield" });
    tickShield(shieldState, def, [], px, py, now, delta);

    // Enemy movement + player contact
    for (const e of [...enemies]) {
      const enemyDef = orbFamily.members[e.enemyId];
      e.actor.update(delta);
      e.y += enemyDef.speed * delta - e.actor.y * canvas.height / 2.5;
      e.actor.moveTo(0, 0);
      if (e.dying && e.actor.disposed) { enemies.splice(enemies.indexOf(e), 1); continue; }
      if (e.dying) continue;
      const contact = resolveShieldContact(shieldState, def, Object.assign(e, { radius: enemyDef.radius }), px, py, now);
      if (contact.absorbed) {
        shieldStrength = shieldState.charges;
        updateReadout();
        if (contact.enemyDestroyed) {
          const result = resolveEnemyDamage({
            enemy: e,
            effects: enemyExitEffects,
            color: neonPalette[enemyDef.baseColor],
          });
          kills++;
          updateReadout();
          if (result.definition.deathSound === "EnemyDestroyed") playEnemyDestroyed();
          else playSfx(result.definition.deathSound);
          continue;
        }
        playSfx("ShieldImpact");
      }
      const pts = squad.points(playerY(), scale());
      const hit = pts.findIndex(pt => Math.hypot(pt.x - e.x, pt.y - e.y) <= enemyDef.radius * 3.2);
      if (hit >= 0) {
        if (!e.dying) {
          shieldStrength = 0;
          shieldState.charges = 0;
          shieldState.hitFlashUntil = now + 280;
          shieldState.hitFlashProgress = 0;
          killPlayer(now);
        }
        continue;
      }
      if (e.y > canvas.height + enemyDef.radius * 2) enemies.splice(enemies.indexOf(e), 1);
    }

    // Pickups
    for (const p of [...pickups]) {
      p.y += 62 * delta;
      if (p.y >= playerY() - 12 && p.lane === playerLane) {
        equip(p.shieldId); pickups.splice(pickups.indexOf(p), 1);
      } else if (p.y > canvas.height + 30) pickups.splice(pickups.indexOf(p), 1);
    }
  };

  const draw = (now: number): void => {
    const s = scale();
    const primitives: NeonPrimitive[] = [
      ...laneRunnerScenePrimitives("neonHall", canvas.width, canvas.height, now),
    ];

    // Shield rendering
    const def = shieldFamily.members[activeShieldId];
    const shieldColor = neonPalette[def.color];
    const px = squad.x;
    const py = playerY();
    const shapes: NeonTopDownShape[] = [];
    const shieldScene = shieldVisuals({
      definition: def,
      strength: shieldStrength,
      initialStrength: initialShieldStrength,
      x: px, y: py, now, scale: s,
      hitProgress: shieldState.hitFlashProgress,
      visible: playerAlive,
    });
    primitives.push(...shieldScene.primitives);
    shapes.push(...shieldScene.shapes);
    for (const pickup of pickups) {
      const pickupDef = shieldFamily.members[pickup.shieldId];
      shapes.push(shieldPickupVisual({
        x: laneX(pickup.lane), y: pickup.y,
        color: neonPalette[pickupDef.color],
        now, scale: s,
      }));
    }
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY(), laneRunnerCameraFocusX(canvas.width, squad.x));
    shapes.push(actorInTopDownScene(playerActor, squad.x, playerY(), 14, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, squad.x, playerY(), now)));
    const enemyHealthBars: Parameters<typeof projectedEnemyHealthBarPrimitives>[0][number][] = [];
    for (const e of enemies) {
      const enemyDef = orbFamily.members[e.enemyId];
      const size = 18 * enemyDef.columnSpan;
      enemyHealthBars.push({ enemyId: e.enemyId, x: e.x, y: e.y, health: e.health, maxHealth: e.maxHealth, size, scale: s });
      shapes.push(actorInTopDownScene(e.actor, e.x, e.y, size, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, e.x, e.y, now, e.rowId)));
    }
  const projected = projectHelicopterScene(primitives, shapes, enemyExitEffects.map(enemyExitCloud), defaultHelicopterCameraSettings, helicopterViewport);
  projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, defaultHelicopterCameraSettings, helicopterViewport));
  renderer.render(projected, now / 1000);
  };

  const frame = (now: number): void => { update(now); draw(now); requestAnimationFrame(frame); };
  equip(activeShieldId);
  spawnEnemy(0); spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window { gameAudio?: { play(id: string): void; playRotated(id: string, n: number): void }; }
}

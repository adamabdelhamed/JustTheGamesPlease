import {
  createLaneRunnerScene,
  NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer,
  neonPalette,
  type NeonPrimitive, type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  swordFamily, orbFamily,
  type SwordId, type SwordTargetingMode,
} from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { SquadModel } from "../../src/squad";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";
import { defaultHelicopterCameraSettings, applyPortraitStage, projectHelicopterScene } from "../../src/viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../../src/shapeVisuals";
import { enemyOrientation, helicopterViewportFor, playerOrientation } from "../../src/renderOrientation";
import { SwordState, tickSword } from "../../src/combat/swordEvaluator";
import { queryNearbyThreats } from "../../src/combat/nearbyThreatQuery";
import { swordPickupVisual, swordVisuals } from "../../src/familyVisuals";

interface Enemy {
  id: number;
  lane: 0 | 1;
  x: number;
  y: number;
  health: number;
  rowId: number;
  actor: NeonShapeActor;
  dying: boolean;
}

interface SwordPickup {
  swordId: SwordId;
  lane: 0 | 1;
  y: number;
}

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const swordSelect = document.querySelector<HTMLSelectElement>("#sword-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
applyPortraitStage(gameElement, { aspectWidth: 9, aspectHeight: 16 });
const audioId = (id: string): string => `../../../../audio/${id}`;
const playSfx = (id: string): void => window.gameAudio?.play(audioId(id));
const playEnemyDestroyed = (): void => window.gameAudio?.playRotated(audioId("EnemyDestroyed"), 2);
const swordSwingSoundIds: Record<SwordId, string> = {
  arcBlade: "SwordSwing",
  cleaver: "SwordHeavySwing",
  needleRapier: "SwordStab",
};

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 450, 800);
  const orb = orbFamily.members.basicOrb;
  const enemies: Enemy[] = [];
  const pickups: SwordPickup[] = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let playerLane = 0;
  let activeSwordId: SwordId = "arcBlade";
  let swordState = new SwordState(activeSwordId);
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let playerAlive = true;
  let restartAt = 0;
  let playerActor = new NeonShapeActor({ shape: swarmShapes.player });

  const laneX = (lane: number) => canvas.width * (lane === 0 ? 0.32 : 0.68);
  const playerY = () => canvas.height * 0.82;
  const scale = () => 1;

  for (const [id, sword] of Object.entries(swordFamily.members)) {
    swordSelect.add(new Option(sword.label, id));
  }
  swordSelect.value = activeSwordId;

  const equip = (id: SwordId) => {
    activeSwordId = id;
    swordState = new SwordState(id);
    swordSelect.value = id;
    playSfx("PickupSword");
    updateReadout();
  };

  const updateReadout = () => {
    const def = swordFamily.members[activeSwordId];
    weaponReadout.textContent = def.label;
    scoreReadout.textContent = `Kills ${kills}`;
    const cdLeft = swordState.cooldownLeft.toFixed(2);
    specReadout.innerHTML = [
      ["Range", `${def.range}px`],
      ["Arc", `${def.arcDegrees}°`],
      ["Damage", String(def.damage)],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Cooldown left", `${cdLeft}s`],
      ["Max targets", String(def.maxTargets)],
      ["Targeting", def.targetingMode],
      ["Slash duration", `${def.slashDurationMs}ms`],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };

  squad.x = laneX(0);
  squad.targetX = laneX(0);

  const spawnEnemy = (lane: 0 | 1): void => {
    enemies.push({ id: ++entitySequence, lane, x: laneX(lane), y: 105, health: orb.health, rowId: ++entitySequence, actor: new NeonShapeActor({ shape: swarmShapes.enemy }), dying: false });
  };

  const spawnPickup = (lane: 0 | 1): void => {
    pickups.push({ swordId: swordSelect.value as SwordId, lane, y: 135 });
  };

  const restartSimulation = (): void => {
    enemies.length = 0;
    pickups.length = 0;
    playerAlive = true;
    restartAt = 0;
    playerActor = new NeonShapeActor({ shape: swarmShapes.player });
    equip(activeSwordId);
    spawnEnemy(0);
    spawnEnemy(1);
  };

  const killPlayer = (now: number): void => {
    if (!playerAlive) return;
    playerAlive = false;
    restartAt = now + 900;
    playerActor.explodeMagnitude = 0.8;
    playerActor.dispose(NeonShapeDisposal.Explode);
    weaponReadout.textContent = "Player defeated";
    playSfx("SwordHit");
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
  });
  swordSelect.addEventListener("change", () => equip(swordSelect.value as SwordId));

  bindSquadInput(gameElement, "#joystick", {
    lane: () => squad.lane,
    setLane: lane => { playerLane = lane; squad.setLane(lane, laneX, performance.now()); aimControl.laneSelected(); },
    setAim: value => { squad.setAim(value, canvas.width * .22, laneX); aimControl.aimChanged(); },
    releaseAim: () => { aimControl.aimReleased(); },
  });

  const update = (now: number): void => {
    const delta = Math.min((now - lastFrame) / 1000, 0.05);
    lastFrame = now;
    playerActor.update(delta);
    if (!playerAlive) {
      for (const e of enemies) e.actor.update(delta);
      if (now >= restartAt) restartSimulation();
      return;
    }

    if (!aimControl.manual) {
      const laneEnemies = enemies.filter(e => e.lane === squad.lane && !e.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);

    // Sword tick — swings only when enemies are in range
    const px = squad.x;
    const py = playerY();
    const def = swordFamily.members[activeSwordId];
    const threats = queryNearbyThreats(enemies, {
      origin: { x: px, y: py },
      lane: playerLane as 0 | 1,
      range: def.range,
      includeAdjacentLanes: (def.targetingMode as SwordTargetingMode) === "nearestInEitherLane",
      maxTargets: def.maxTargets,
      purpose: "sword",
    });

    const swordResult = tickSword(swordState, def, threats, px, py, now, delta, neonPalette[def.color]);

    if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
      playSfx(swordSwingSoundIds[activeSwordId]);
      for (const e of [...enemies]) {
        if (e.dying || !swordResult.hitEnemyIds.includes(e.id)) continue;
        e.health -= swordResult.damage;
        e.actor.impact({ direction: { x: 0, y: 1 }, magnitude: swordResult.damage / orb.impactResistance });
        if (e.health <= 0) {
          e.dying = true; e.actor.explodeMagnitude = orb.explosionMagnitude;
          e.actor.dispose(NeonShapeDisposal.Explode);
          kills++; updateReadout(); playEnemyDestroyed();
        }
      }
    }

    // Enemy movement
    for (const e of [...enemies]) {
      e.actor.update(delta);
      e.y += orb.speed * delta - e.actor.y * canvas.height / 2.5;
      e.actor.moveTo(0, 0);
      if (e.dying && e.actor.disposed) { enemies.splice(enemies.indexOf(e), 1); continue; }
      if (!e.dying && Math.hypot(e.x - squad.x, e.y - playerY()) <= orb.radius * 3.2) {
        killPlayer(now);
      }
    }

    // Pickups
    for (const p of [...pickups]) {
      p.y += 62 * delta;
      if (p.y >= playerY() - 12 && p.lane === playerLane) {
        equip(p.swordId); pickups.splice(pickups.indexOf(p), 1);
      } else if (p.y > canvas.height + 30) pickups.splice(pickups.indexOf(p), 1);
    }

    updateReadout();
  };

  const draw = (now: number): void => {
    const s = scale();
    const primitives: NeonPrimitive[] = [
      ...(createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: now }).primitives ?? []),
    ];
    const px = squad.x;
    const py = playerY();

    const def = swordFamily.members[activeSwordId];
    const swordColor = neonPalette[def.color];
    const shapes: NeonTopDownShape[] = [];
    const swordScene = swordVisuals({
      definition: def,
      slash: swordState.activeSlash,
      x: px, y: py, scale: s,
      visible: playerAlive,
    });
    primitives.push(...swordScene.primitives);
    shapes.push(...swordScene.shapes);
    for (const pickup of pickups) {
      const pickupDef = swordFamily.members[pickup.swordId];
      shapes.push(swordPickupVisual({
        x: laneX(pickup.lane), y: pickup.y,
        color: neonPalette[pickupDef.color],
        now, scale: s,
      }));
    }
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY());
    shapes.push(actorInTopDownScene(playerActor, squad.x, py, 14, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, squad.x, py, now)));
    for (const e of enemies) shapes.push(actorInTopDownScene(e.actor, e.x, e.y, 18, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, e.x, e.y, now, e.rowId)));
  renderer.render(projectHelicopterScene(primitives, shapes, [], defaultHelicopterCameraSettings, helicopterViewport), now / 1000);
  };

  const frame = (now: number): void => { update(now); draw(now); requestAnimationFrame(frame); };
  equip(activeSwordId);
  spawnEnemy(0); spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window { gameAudio?: { play(id: string): void; playRotated(id: string, n: number): void }; }
}

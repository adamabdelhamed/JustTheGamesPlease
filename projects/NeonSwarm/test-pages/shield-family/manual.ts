import {
  createLaneRunnerScene,
  NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer,
  neonPalette, type NeonPrimitive, type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  shieldFamily, orbFamily,
  type ShieldId,
} from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { SquadModel } from "../../src/squad";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";
import { defaultHelicopterCameraSettings, applyPortraitStage, projectHelicopterScene } from "../../src/viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../../src/shapeVisuals";
import { enemyOrientation, helicopterViewportFor, playerOrientation } from "../../src/renderOrientation";
import { resolveShieldContact, ShieldState, tickShield } from "../../src/combat/shieldEvaluator";
import { queryNearbyThreats } from "../../src/combat/nearbyThreatQuery";
import { shieldPickupVisual, shieldVisuals } from "../../src/familyVisuals";

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

interface ShieldPickup {
  shieldId: ShieldId;
  lane: 0 | 1;
  y: number;
}

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const shieldSelect = document.querySelector<HTMLSelectElement>("#shield-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const enemyHpInput = document.querySelector<HTMLInputElement>("#enemy-hp")!;
const shieldStrengthReadout = document.querySelector<HTMLElement>("#shield-strength")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
applyPortraitStage(gameElement, { aspectWidth: 9, aspectHeight: 16 });
const audioId = (id: string): string => `../../../../audio/${id}`;
const playSfx = (id: string): void => window.gameAudio?.play(audioId(id));
const playEnemyDestroyed = (): void => window.gameAudio?.playRotated(audioId("EnemyDestroyed"), 2);

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 450, 800);
  const orb = orbFamily.members.basicOrb;
  const enemies: Enemy[] = [];
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
  };

  squad.x = laneX(0);
  squad.targetX = laneX(0);

  const spawnEnemy = (lane: 0 | 1): void => {
    const requestedHp = Number.parseFloat(enemyHpInput.value);
    const health = Number.isFinite(requestedHp) && requestedHp > 0 ? requestedHp : orb.health;
    enemies.push({ id: ++entitySequence, lane, x: laneX(lane), y: 105, health, rowId: ++entitySequence, actor: new NeonShapeActor({ shape: swarmShapes.enemy }), dying: false });
  };

  const spawnPickup = (lane: 0 | 1): void => {
    pickups.push({ shieldId: shieldSelect.value as ShieldId, lane, y: 135 });
  };

  const restartSimulation = (): void => {
    enemies.length = 0;
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
  });
  shieldSelect.addEventListener("change", () => equip(shieldSelect.value as ShieldId));

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
    const threats = queryNearbyThreats(enemies, { origin: { x: px, y: py }, lane: playerLane as 0 | 1, range: def.radius + orb.radius, purpose: "shield" });
    tickShield(shieldState, def, [], px, py, now, delta);

    // Enemy movement + player contact
    for (const e of [...enemies]) {
      e.actor.update(delta);
      e.y += orb.speed * delta - e.actor.y * canvas.height / 2.5;
      e.actor.moveTo(0, 0);
      if (e.dying && e.actor.disposed) { enemies.splice(enemies.indexOf(e), 1); continue; }
      if (e.dying) continue;
      const contact = resolveShieldContact(shieldState, def, Object.assign(e, { radius: orb.radius }), px, py, now);
      if (contact.absorbed) {
        shieldStrength = shieldState.charges;
        updateReadout();
        if (contact.enemyDestroyed) {
          e.dying = true;
          e.actor.explodeMagnitude = orb.explosionMagnitude;
          e.actor.dispose(NeonShapeDisposal.Explode);
          kills++;
          updateReadout();
          playEnemyDestroyed();
          continue;
        }
        playSfx("ShieldImpact");
      }
      const pts = squad.points(playerY(), scale());
      const hit = pts.findIndex(pt => Math.hypot(pt.x - e.x, pt.y - e.y) <= orb.radius * 3.2);
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
      if (e.y > canvas.height + orb.radius * 2) enemies.splice(enemies.indexOf(e), 1);
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
      ...(createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: now }).primitives ?? []),
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
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY());
    shapes.push(actorInTopDownScene(playerActor, squad.x, playerY(), 14, playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, squad.x, playerY(), now)));
    for (const e of enemies) shapes.push(actorInTopDownScene(e.actor, e.x, e.y, 18, enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, e.x, e.y, now, e.rowId)));
  renderer.render(projectHelicopterScene(primitives, shapes, [], defaultHelicopterCameraSettings, helicopterViewport), now / 1000);
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

import { NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer, NeonVictoryExperience, neonPalette, type NeonPrimitive, type NeonTopDownShape } from "@just-the-games-please/neon-factory";
import { gunFamily, multiplierFamily, orbFamily, parseTrackDefinition, shieldFamily, swordFamily, trackFamily, type GunId, type MultiplierId, type ParsedTrackEntity, type ShieldId, type SwordId, type TrackMember, type SwordTargetingMode } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { SquadModel } from "./squad";
import { AutoAimControlState, selectAutoAimOffset } from "./autoAim";
import { applyPortraitStage } from "./viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "./shapeVisuals";
import { ShieldState, tickShield, tryAbsorbHit } from "./combat/shieldEvaluator";
import { SwordState, tickSword } from "./combat/swordEvaluator";
import { queryNearbyThreats } from "./combat/nearbyThreatQuery";
import { shieldPickupVisual, shieldVisuals, swordPickupVisual, swordVisuals } from "./familyVisuals";
import { GunSimulation } from "./combat/gunSimulation";

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

interface Enemy { id: number; lane: 0 | 1; x: number; y: number; health: number; speedMultiplier: number; rowId: number; actor: NeonShapeActor; dying: boolean }
interface GunPickup { lane: 0 | 1; x: number; y: number; gunId: GunId; level: number; speedMultiplier: number; actor: NeonShapeActor }
interface ShieldPickup { lane: 0 | 1; x: number; y: number; shieldId: ShieldId; speedMultiplier: number }
interface SwordPickup { lane: 0 | 1; x: number; y: number; swordId: SwordId; speedMultiplier: number }
interface MultiplierPickup { lane: 0 | 1; x: number; y: number; multiplierId: MultiplierId; speedMultiplier: number; actor: NeonShapeActor }

// ---------------------------------------------------------------------------
// DOM references
// ---------------------------------------------------------------------------

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const trackSelect = document.querySelector<HTMLElement>("#track-select")!;
const trackList = document.querySelector<HTMLElement>("#track-list")!;
const status = document.querySelector<HTMLElement>("#status")!;
const runStatus = document.querySelector<HTMLElement>("#run-status")!;
const result = document.querySelector<HTMLElement>("#result")!;
const resultTitle = document.querySelector<HTMLElement>("#result-title")!;
const resultDetail = document.querySelector<HTMLElement>("#result-detail")!;
const error = document.querySelector<HTMLElement>("#error")!;
const developerTools = document.querySelector<HTMLElement>("#developer-tools")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
developerTools.hidden = new URLSearchParams(location.search).get("dev") !== "1";
const defaultTrack = Object.values(trackFamily.members)[0];
applyPortraitStage(gameElement, defaultTrack.viewport);

try {
  const viewport = defaultTrack.viewport;
  const renderer = await NeonTopDownSceneRenderer.create(canvas, viewport.logicalWidth, viewport.logicalHeight);
  let activeTrack: TrackMember | null = null;
  let startedAt = 0;
  let lastFrame = performance.now();
  let playerLane: 0 | 1 = 0;
  let cooldown = 0;
  let entityIdCounter = 0;
  let trackEntities: ParsedTrackEntity[] = [];
  let nextTrackEntity = 0;
  let breaches = 0;
  let enemies: Enemy[] = [];
  const gunSimulation = new GunSimulation();
  let gunPickups: GunPickup[] = [];
  let shieldPickups: ShieldPickup[] = [];
  let swordPickups: SwordPickup[] = [];
  let multipliers: MultiplierPickup[] = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let victory: NeonVictoryExperience | null = null;
  let failureReason = "";
  const playerActors: NeonShapeActor[] = [];
  const explodingPlayers: Array<{ actor: NeonShapeActor; x: number; y: number }> = [];

  // ---------------------------------------------------------------------------
  // Active family slots — one per family, family-scoped exclusivity.
  // Gun + Shield + Sword may all be active simultaneously.
  // Two items from the same family are not allowed.
  //
  // near-player effect order (intentionally explicit):
  //   1. shieldBlock        — charge-based hit absorption
  //   2. shieldPulse        — emergency push
  //   3. swordAttack        — sword family
  //   4. shieldContactDamage — contact damage on shield edge
  //   5. shieldAura         — slow/debuff aura
  // ---------------------------------------------------------------------------
  const activeByFamily: {
    gun: { id: GunId; level: number };
    shield: ShieldState | null;
    sword: SwordState | null;
  } = {
    gun: { id: "pulsePistol", level: 1 },
    shield: null,
    sword: null,
  };

  const scale = () => 1;
  const laneX = (lane: number) => canvas.width * (lane === 0 ? .32 : .68);
  const entityX = (entity: ParsedTrackEntity) => laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2) * 15 * scale();
  const playerY = () => canvas.height * .82;

  // ---------------------------------------------------------------------------
  // Reset / start
  // ---------------------------------------------------------------------------

  const resetToTracks = (): void => {
    activeTrack = null;
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track. Tap either side to switch lanes; use the joystick to fine aim.";
    runStatus.textContent = "";
    enemies = [];
    gunSimulation.clear();
    gunPickups = [];
    shieldPickups = [];
    swordPickups = [];
    multipliers = [];
    victory = null;
    failureReason = "";
    activeByFamily.shield = null;
    activeByFamily.sword = null;
  };

  const startTrack = (track: TrackMember): void => {
    activeTrack = track;
    startedAt = performance.now();
    lastFrame = startedAt;
    const allEntities = parseTrackDefinition(track.definition);
    const playerStart = allEntities.find(entity => entity.id === "player.start");
    const startLane: 0 | 1 = playerStart?.side === "right" ? 1 : 0;
    playerLane = startLane;
    activeByFamily.gun = { id: track.startingGun, level: track.startingGunLevel };
    activeByFamily.shield = null;
    activeByFamily.sword = null;
    cooldown = 0;
    nextTrackEntity = 0;
    trackEntities = allEntities.filter(entity => entity.id !== "player.start");
    breaches = 0;
    enemies = [];
    gunSimulation.clear();
    gunPickups = [];
    shieldPickups = [];
    swordPickups = [];
    multipliers = [];
    squad.count = 1;
    playerActors.length = 0;
    playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    explodingPlayers.length = 0;
    squad.aimOffset = 0;
    squad.lane = startLane;
    squad.x = laneX(startLane);
    squad.targetX = laneX(startLane);
    victory = null;
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap a side to switch lanes. Small joystick motion aims; full motion crosses lanes.";
  };

  trackList.innerHTML = Object.entries(trackFamily.members).map(([id, track]) => `
    <button class="track-card" data-track="${id}">
      <strong>${track.label}</strong><span>${track.description}</span><b>${track.durationSeconds}s →</b>
    </button>`).join("");
  trackList.querySelectorAll<HTMLButtonElement>("[data-track]").forEach(button => {
    button.addEventListener("click", () => startTrack(trackFamily.members[button.dataset.track as keyof typeof trackFamily.members]));
  });
  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", resetToTracks);

  bindSquadInput(document.querySelector<HTMLElement>("#game")!, "#joystick", {
    lane: () => squad.lane,
    setLane: lane => {
      if (!activeTrack) return;
      squad.setLane(lane, laneX, performance.now());
      playerLane = lane;
      aimControl.laneSelected();
    },
    setAim: value => {
      if (!activeTrack) return;
      squad.setAim(value, canvas.width * .22, laneX);
      aimControl.aimChanged();
    },
    releaseAim: () => {
      aimControl.aimReleased();
    },
  });

  // ---------------------------------------------------------------------------
  // Gun fire
  // ---------------------------------------------------------------------------

  const fire = (): void => {
    const { id: gunId, level: gunLevel } = activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find(item => item.level === gunLevel) ?? gun.levels[0];
    const points = squad.points(playerY(), scale()).map(point => ({ x: point.x, y: playerY() - 20 * scale() }));
    gunSimulation.fire(gun, tuning, playerLane, points, performance.now(), scale());
    cooldown += 1 / tuning.fireRatePerSecond;
    window.gameAudio?.playRotated("Primary", 3);
  };

  // ---------------------------------------------------------------------------
  // Finish
  // ---------------------------------------------------------------------------

  const finish = (won: boolean): void => {
    if (!activeTrack) return;
    result.hidden = false;
    resultTitle.textContent = won ? "FLAWLESS RUN" : "TRACK FAILED";
    resultDetail.textContent = won ? "No enemy touched or escaped past you." : failureReason || `${breaches} enemy${breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      victory = new NeonVictoryExperience({
        centerX: canvas.width / 2, centerY: canvas.height * .38,
        width: canvas.width, height: canvas.height, particleCount: 120,
      });
      window.gameAudio?.play("PuzzleComplete");
    } else {
      window.gameAudio?.play("GameOver");
    }
    activeTrack = null;
  };

  const syncPlayerActors = (): void => {
    while (playerActors.length < squad.count) playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    if (playerActors.length > squad.count) playerActors.length = squad.count;
  };

  // ---------------------------------------------------------------------------
  // Update
  // ---------------------------------------------------------------------------

  const update = (now: number): void => {
    const delta = Math.min(.05, (now - lastFrame) / 1000);
    lastFrame = now;
    for (const item of [...explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) explodingPlayers.splice(explodingPlayers.indexOf(item), 1);
    }
    if (!activeTrack) return;
    const elapsed = (now - startedAt) / 1000;

    const { id: gunId } = activeByFamily.gun;
    const shieldDef = activeByFamily.shield ? shieldFamily.members[activeByFamily.shield.shieldId] : null;
    const swordDef = activeByFamily.sword ? swordFamily.members[activeByFamily.sword.swordId] : null;

    runStatus.textContent = `${gunFamily.members[gunId].label}${shieldDef ? ` · ${shieldDef.label}` : ""}${swordDef ? ` · ${swordDef.label}` : ""} · ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;

    while (nextTrackEntity < trackEntities.length && trackEntities[nextTrackEntity].distanceFromPlayer <= elapsed) {
      const entity = trackEntities[nextTrackEntity++];
      const lane = entity.side === "left" ? 0 : 1;
      if (entity.id === "enemy.basic") {
        enemies.push({
          id: ++entityIdCounter,
          lane,
          x: entityX(entity),
          y: 110 * scale(),
          health: orbFamily.members.basicOrb.health * activeTrack.definition.balance.enemyHp,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor: new NeonShapeActor({ shape: swarmShapes.enemy }),
          dying: false,
        });
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        gunPickups.push({ lane, x: entityX(entity), y: 120 * scale(), gunId: candidate as GunId, level: 1, speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        shieldPickups.push({ lane, x: entityX(entity), y: 120 * scale(), shieldId: candidate as ShieldId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        swordPickups.push({ lane, x: entityX(entity), y: 120 * scale(), swordId: candidate as SwordId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        multipliers.push({ lane, x: entityX(entity), y: 125 * scale(), multiplierId: "squadPlusOne", speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }

    if (!aimControl.manual) {
      const laneEnemies = enemies.filter(enemy => enemy.lane === squad.lane && !enemy.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);
    syncPlayerActors();
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);

    // --- Gun fire ---
    cooldown -= delta;
    if (cooldown <= 0) fire();
    if (gunSimulation.updateFiring(now) > 0) window.gameAudio?.playRotated("Primary", 3);

    // --- Projectile movement + hit detection ---
    gunSimulation.updateProjectiles(delta, now, enemies.map(enemy => Object.assign(enemy, {
      radius: orbFamily.members.basicOrb.radius * scale(),
    })), { top: -40 * scale(), left: -40, right: canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy as Enemy & { radius: number };
      gameEnemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: (shot.damage + shot.knockback * .06) / orbFamily.members.basicOrb.impactResistance });
      if (gameEnemy.health <= 0) {
        gameEnemy.dying = true;
        gameEnemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
        gameEnemy.actor.dispose(NeonShapeDisposal.Explode);
        window.gameAudio?.play("EnemyDestroyed");
      } else window.gameAudio?.play("Hit");
    });

    // ---------------------------------------------------------------------------
    // Near-player effect system — explicit precedence order:
    //   1. shieldBlock        — charge-based hit absorption (handled in enemy contact below)
    //   2. shieldPulse        — emergency push
    //   3. swordAttack        — sword family
    //   4. shieldContactDamage — contact damage on shield edge
    //   5. shieldAura         — slow/debuff aura
    //
    // Shields and swords query enemies via queryNearbyThreats() to avoid
    // independent, incompatible scans.
    // ---------------------------------------------------------------------------

    const px = squad.x;
    const py = playerY();

    // --- 2. Shield pulse + 4. Contact damage + 5. Aura slow ---
    if (activeByFamily.shield && shieldDef) {
      const shieldState = activeByFamily.shield;
      const shieldThreats = queryNearbyThreats(enemies, {
        origin: { x: px, y: py },
        lane: playerLane,
        range: shieldDef.radius * scale(),
        includeAdjacentLanes: false,
        purpose: "shield",
      });

      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, now, delta);

      // Apply push (pulse mode)
      if (shieldResult.pushEnemyIds.length > 0) {
        for (const enemy of enemies) {
          if (shieldResult.pushEnemyIds.includes(enemy.id ?? 0)) {
            const dx = enemy.x - px;
            const dy = enemy.y - py;
            const dist = Math.hypot(dx, dy) || 1;
            enemy.x += (dx / dist) * shieldResult.pushDistance * scale();
            enemy.y += (dy / dist) * shieldResult.pushDistance * scale();
          }
        }
        window.gameAudio?.play("Hit");
      }

      // Apply contact damage (contact mode)
      if (shieldResult.contactDamageEnemyIds.length > 0) {
        for (const enemy of [...enemies]) {
          if (enemy.dying) continue;
          // Contact damage is applied per-frame — scale by delta so it's per-second
          const isContact = shieldResult.contactDamageEnemyIds.includes(enemy.id ?? 0);
          if (!isContact) continue;
          enemy.health -= shieldResult.contactDamageAmount * delta;
          if (enemy.health <= 0) {
            enemy.dying = true;
            enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
            enemy.actor.dispose(NeonShapeDisposal.Explode);
            window.gameAudio?.play("EnemyDestroyed");
          }
        }
      }

      // Note: slowEnemyIds are consumed during enemy movement below
    }

    // --- 3. Sword attack ---
    if (activeByFamily.sword && swordDef) {
      const swordState = activeByFamily.sword;
      const swordThreats = queryNearbyThreats(enemies, {
        origin: { x: px, y: py },
        lane: playerLane,
        range: swordDef.range * scale(),
        includeAdjacentLanes: (swordDef.targetingMode as SwordTargetingMode) === "nearestInEitherLane",
        maxTargets: swordDef.maxTargets,
        purpose: "sword",
      });

      const swordResult = tickSword(
        swordState, swordDef, swordThreats, px, py, now, delta,
        neonPalette[swordDef.color],
      );

      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        window.gameAudio?.play("Hit");
        for (const enemy of [...enemies]) {
          if (enemy.dying) continue;
          if (!swordResult.hitEnemyIds.includes(enemy.id ?? 0)) continue;
          enemy.health -= swordResult.damage;
          enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: swordResult.damage / orbFamily.members.basicOrb.impactResistance });
          if (enemy.health <= 0) {
            enemy.dying = true;
            enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
            enemy.actor.dispose(NeonShapeDisposal.Explode);
            window.gameAudio?.play("EnemyDestroyed");
          }
        }
      }
    }

    // --- Enemy movement, collision, breach ---
    const slowEnemyIds = new Set<number>();

    for (const enemy of [...enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      const effective = slowEnemyIds.has(enemy.id ?? 0)
        ? enemy.speedMultiplier * (shieldDef?.slowMultiplier ?? 1)
        : enemy.speedMultiplier;
      enemy.y += orbFamily.members.basicOrb.speed * effective * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) { enemies.splice(enemies.indexOf(enemy), 1); continue; }
      if (enemy.dying) continue;

      // Player contact
      const points = squad.points(playerY(), scale());
      const hitIndex = points.findIndex(point => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= orbFamily.members.basicOrb.radius * 3.2);
      if (hitIndex >= 0) {
        // --- 1. shieldBlock: try absorbing hit before it counts ---
        const absorbed = activeByFamily.shield && shieldDef
          ? tryAbsorbHit(activeByFamily.shield, shieldDef, now)
          : false;

        if (absorbed) {
          // Shield ate the hit — push enemy away from player slightly
          const dx = enemy.x - px;
          const dy = enemy.y - py;
          const dist = Math.hypot(dx, dy) || 1;
          enemy.x += (dx / dist) * 20 * scale();
          enemy.y += (dy / dist) * 20 * scale();
          window.gameAudio?.play("Hit");
        } else {
          // No shield or out of charges — player takes the hit
          const point = points[hitIndex];
          const actor = playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
          actor.explodeMagnitude = .55;
          actor.dispose(NeonShapeDisposal.Explode);
          explodingPlayers.push({ actor, x: point.x, y: point.y });
          playerActors.splice(hitIndex, 1);
          squad.remove();
          enemies.splice(enemies.indexOf(enemy), 1);
          window.gameAudio?.play("EnemyDestroyed");
          if (squad.count === 0) { failureReason = "The entire squad was destroyed on contact."; finish(false); return; }
          continue;
        }
      }

      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
        window.gameAudio?.play("EnemyEscaped");
        failureReason = "An enemy passed the defense line.";
        finish(false);
        return;
      }
    }

    // --- Pickup collection ---
    for (const pickup of [...gunPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        activeByFamily.gun = { id: pickup.gunId, level: 1 };
        cooldown = 0;
        gunPickups.splice(gunPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) gunPickups.splice(gunPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        // Family-scoped exclusivity: replace existing shield
        const def = shieldFamily.members[pickup.shieldId];
        activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges);
        shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        // Family-scoped exclusivity: replace existing sword
        activeByFamily.sword = new SwordState(pickup.swordId);
        swordPickups.splice(swordPickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) swordPickups.splice(swordPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta); pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        syncPlayerActors();
        multipliers.splice(multipliers.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }

    if (elapsed >= activeTrack.durationSeconds && enemies.length === 0) finish(breaches === 0);
  };

  // ---------------------------------------------------------------------------
  // Environment rendering (unchanged)
  // ---------------------------------------------------------------------------

  const environment = (track: TrackMember, now: number): NeonPrimitive[] => {
    const s = scale();
    const pulse = .6 + Math.sin(now / 1000 * track.environment.pulseRate * Math.PI * 2) * .2;
    const items: NeonPrimitive[] = [];
    items.push({ x: canvas.width / 2, y: canvas.height * .76, width: canvas.width * .44, height: canvas.height * .46, color: neonPalette[track.environment.floorColor], secondaryColor: "#030712", glow: .1, intensity: .22, shape: "bolt" });
    items.push({ x: canvas.width / 2, y: canvas.height * .49, width: canvas.width * .34, height: 2 * s, color: neonPalette[track.environment.horizonColor], glow: .8, intensity: pulse, shape: "bolt" });
    for (let depth = 0; depth < 8; depth++) {
      const perspective = depth / 7;
      const y = canvas.height * (.53 + perspective * .38);
      const width = canvas.width * (.2 + perspective * .25);
      items.push({ x: canvas.width / 2, y, width, height: (1 + perspective * 1.5) * s, color: neonPalette[track.environment.floorColor], glow: .3, intensity: .18 + pulse * .18, shape: "bolt" });
    }
    for (const side of [-1, 1]) {
      for (let segment = 0; segment < 9; segment++) {
        const perspective = segment / 8;
        const x = canvas.width / 2 + side * canvas.width * (.1 + perspective * .13);
        const y = canvas.height * (.53 + perspective * .38);
        items.push({ x, y, width: (1 + perspective) * s, height: (18 + perspective * 42) * s, color: neonPalette[track.environment.crackColor], glow: .42, intensity: .22 + pulse * .2, shape: "bolt" });
      }
    }
    for (let index = 0; index < track.environment.crackDensity; index++) {
      const x = canvas.width * (.3 + ((index * 37) % 100) / 250);
      const y = canvas.height * (.56 + ((index * 61) % 100) / 250);
      items.push({ x, y, width: (1 + index % 3) * s, height: (20 + index % 5 * 12) * s, color: neonPalette[track.environment.crackColor], glow: .5, intensity: pulse * (.45 + index % 4 * .1), shape: index % 3 ? "bolt" : "spark" });
    }
    for (let index = 0; index < track.environment.airStreakCount; index++) {
      const x = canvas.width * (.12 + ((index * 53) % 100) / 130);
      const y = canvas.height * (.16 + ((index * 29 + now / 35) % 100) / 330);
      items.push({ x, y, width: 1.2 * s, height: (12 + index % 4 * 9) * s, color: neonPalette[track.environment.airColor], glow: .4, intensity: .3 + pulse * .25, shape: "bolt" });
    }
    return items;
  };

  // ---------------------------------------------------------------------------
  // Draw
  // ---------------------------------------------------------------------------

  const draw = (now: number): void => {
    const primitives = activeTrack ? environment(activeTrack, now) : [];
    const s = scale();

    if (activeTrack) {
      // --- Player lane smear ---
      for (const point of squad.points(playerY(), s)) {
        const smear = Math.min(22 * s, Math.abs(squad.targetX - squad.x) * .45);
        if (smear > 2) primitives.push({ x: point.x - Math.sign(squad.targetX - squad.x) * smear * .5, y: point.y, width: smear, height: 2.2 * s, color: neonPalette.deepBlue, secondaryColor: neonPalette.cyan, glow: .45, intensity: .5, shape: "bolt" });
      }

      // --- Projectiles ---
      primitives.push(...gunSimulation.projectilePrimitives());

    }

    if (victory) primitives.push(...victory.primitives(now));

    const shapeInstances: NeonTopDownShape[] = [];
    if (activeByFamily.shield) {
      const liveShield = activeByFamily.shield;
      const liveDef = shieldFamily.members[liveShield.shieldId];
      const scene = shieldVisuals({
        definition: liveDef,
        strength: liveShield.charges,
        initialStrength: liveDef.maxCharges,
        x: squad.x, y: playerY(), now, scale: s,
        hitProgress: liveShield.hitFlashProgress,
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    if (activeByFamily.sword) {
      const liveSword = activeByFamily.sword;
      const liveDef = swordFamily.members[liveSword.swordId];
      const scene = swordVisuals({
        definition: liveDef,
        slash: liveSword.activeSlash,
        x: squad.x, y: playerY(), scale: s,
        visible: true,
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    for (const pickup of shieldPickups) {
      const definition = shieldFamily.members[pickup.shieldId];
      shapeInstances.push(shieldPickupVisual({
        x: laneX(pickup.lane), y: pickup.y,
        color: neonPalette[definition.color],
        now, scale: s,
      }));
    }
    for (const pickup of swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      shapeInstances.push(swordPickupVisual({
        x: laneX(pickup.lane), y: pickup.y,
        color: neonPalette[definition.color],
        now, scale: s,
      }));
    }
    const playerSize = 14;
    for (const [index, point] of squad.points(playerY(), s).entries()) {
      const actor = playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, { rotationX: Math.sin(now / 650) * .12 }));
    }
    for (const item of explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    for (const enemy of enemies) shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, 18, { rotationY: Math.sin(now / 700 + enemy.rowId) * .18 }));
    for (const pickup of gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15));
    }
    for (const pickup of multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16));
    }
    renderer.render({ primitives, shapes: shapeInstances }, now / 1000);
  };

  const frame = (now: number) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
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

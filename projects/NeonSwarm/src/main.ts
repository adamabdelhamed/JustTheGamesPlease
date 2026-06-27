import { NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer, NeonVictoryExperience, createLaneRunnerScene, getLaneRunnerSceneName, isLaneRunnerSceneId, laneRunnerSceneIds, neonPalette, type LaneRunnerSceneId, type NeonPrimitive, type NeonTopDownShape } from "@just-the-games-please/neon-factory";
import { combatTuning, gunFamily, multiplierFamily, orbFamily, parseTrackDefinition, shieldFamily, swordFamily, trackFamily, type GunId, type MultiplierId, type OrbId, type ParsedTrackEntity, type ShieldId, type SwordId, type TrackMember, type SwordTargetingMode } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { SquadModel } from "./squad";
import { AutoAimControlState, selectAutoAimOffset } from "./autoAim";
import { applyPortraitStage, defaultHelicopterCameraSettings, projectHelicopterScene, worldYForProjectedY, type HelicopterCameraSettings } from "./viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "./shapeVisuals";
import { billboardOrientation, enemyOrientation, helicopterViewportFor, playerOrientation } from "./renderOrientation";
import { ShieldState, resolveShieldContact, tickShield } from "./combat/shieldEvaluator";
import { SwordState, tickSword } from "./combat/swordEvaluator";
import { queryNearbyThreats } from "./combat/nearbyThreatQuery";
import { shieldPickupVisual, shieldVisuals, swordPickupVisual, swordVisuals } from "./familyVisuals";
import { GunSimulation } from "./combat/gunSimulation";
import { enemyExitCloud, updateEnemyExitEffects, type ActiveEnemyExitEffect, type EnemyVisualType } from "./enemyExitVisuals";
import { createEnemyActor, defeatEnemy, enemyDefinitionFromTrackId, projectedEnemyHealthBarPrimitives, resolveEnemyDamage } from "./enemyCatalog";

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

interface Enemy { id: number; enemyType: EnemyVisualType; enemyId: OrbId; lane: 0 | 1; x: number; y: number; health: number; maxHealth: number; speedMultiplier: number; rowId: number; actor: NeonShapeActor; dying: boolean; exitEffectSpawned?: boolean }
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
const cameraLab = document.querySelector<HTMLElement>("#camera-lab")!;
const sceneLab = document.querySelector<HTMLElement>("#scene-lab")!;
const sceneSelect = document.querySelector<HTMLSelectElement>("#scene-select")!;
const cameraOutputText = document.querySelector<HTMLOutputElement>("#camera-output-text")!;
const urlOptions = window.JustTheGamesPlease?.urlOptions;
const developerMode = urlOptions?.isEnabled("dev") ?? false;
developerTools.hidden = !developerMode;
cameraLab.hidden = !(developerMode && (urlOptions?.isEnabled("cameracontrols") ?? false));
sceneLab.hidden = !developerMode;
const defaultTrack = Object.values(trackFamily.members)[0];
applyPortraitStage(gameElement, defaultTrack.viewport);

let sceneOverride: LaneRunnerSceneId | null = null;
if (developerMode) {
  const sceneFromUrl = (urlOptions as { get?(name: string): string | null } | undefined)?.get?.("scene");
  if (sceneFromUrl && isLaneRunnerSceneId(sceneFromUrl)) sceneOverride = sceneFromUrl;
}

sceneSelect.innerHTML = laneRunnerSceneIds.map(sceneId => `<option value="${sceneId}">${getLaneRunnerSceneName(sceneId)}</option>`).join("");
sceneSelect.value = sceneOverride ?? defaultTrack.environment.sceneId;
sceneSelect.addEventListener("change", () => {
  sceneOverride = isLaneRunnerSceneId(sceneSelect.value) ? sceneSelect.value : null;
});

const cameraSettings: HelicopterCameraSettings = { ...defaultHelicopterCameraSettings };
const bindCameraSlider = (id: string, key: keyof HelicopterCameraSettings): HTMLInputElement => {
  const input = document.querySelector<HTMLInputElement>(id)!;
  input.value = String(cameraSettings[key]);
  input.addEventListener("input", () => {
    cameraSettings[key] = Number(input.value);
    cameraOutputText.value = "";
  });
  return input;
};
bindCameraSlider("#camera-height", "height");
bindCameraSlider("#camera-look", "lookAngleDegrees");
bindCameraSlider("#camera-back", "followDistance");
bindCameraSlider("#camera-zoom", "zoom");
bindCameraSlider("#camera-horizon", "horizon");
document.querySelector<HTMLButtonElement>("#camera-output")!.addEventListener("click", async () => {
  const output = `camera: height=${cameraSettings.height.toFixed(0)}, lookAngleDegrees=${cameraSettings.lookAngleDegrees.toFixed(0)}, followDistance=${cameraSettings.followDistance.toFixed(0)}, zoom=${cameraSettings.zoom.toFixed(2)}, horizon=${cameraSettings.horizon.toFixed(2)}`;
  cameraOutputText.value = output;
  if (navigator.clipboard) await navigator.clipboard.writeText(output).catch(() => undefined);
});

const gunFireSoundIds: Record<GunId, string> = {
  pulsePistol: "Primary",
  needlerSmg: "NeedlerFire",
  burstCarbine: "BurstCarbineFire",
  heavyCannon: "HeavyCannonFire",
  splitterRifle: "SplitterRifleFire",
};

const swordSwingSoundIds: Record<SwordId, string> = {
  arcBlade: "SwordSwing",
  cleaver: "SwordHeavySwing",
  needleRapier: "SwordStab",
};

const soundAlternativeCounts: Partial<Record<string, number>> = {
  Primary: 3,
  EnemyDestroyed: 2,
  EnemyHit: 2,
  EnemySpawn: 2,
  Boss: 1,
  ProjectileHit: 2,
};

const playRotatedSfx = (id: string, alternatives: number): void => window.gameAudio?.playRotated(id, alternatives);
const playSfx = (id: string): void => window.gameAudio?.play(id);
const playLibrarySfx = (id: string): void => {
  const alternatives = soundAlternativeCounts[id] ?? 0;
  if (alternatives > 0) playRotatedSfx(id, alternatives);
  else playSfx(id);
};
const playGunFire = (gunId: GunId): void => {
  playLibrarySfx(gunFireSoundIds[gunId]);
};
const playSwordSwing = (swordId: SwordId): void => playLibrarySfx(swordSwingSoundIds[swordId]);
const playPickup = (id: "PickupGun" | "PickupShield" | "PickupSword" | "PickupMultiplier"): void => {
  playLibrarySfx("Pickup");
  playLibrarySfx(id);
};

try {
  const viewport = defaultTrack.viewport;
  const renderer = await NeonTopDownSceneRenderer.create(canvas, viewport.logicalWidth, viewport.logicalHeight);
  let activeTrack: TrackMember | null = null;
  let lastFrame = performance.now();
  let combatElapsed = 0;
  let combatNow = 0;
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
  let enemyExitEffects: ActiveEnemyExitEffect[] = [];
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
    gun: { id: GunId; level: number } | null;
    shield: ShieldState | null;
    sword: SwordState | null;
  } = {
    gun: null,
    shield: null,
    sword: null,
  };
  const actorVisualRoles = {
    player: "groundForward",
    enemy: "tumblingBillboard",
    gunPickup: "screenBillboard",
    multiplier: "screenBillboard",
  } as const;

  const scale = () => 1;
  const enemyExitColor = (enemy: Enemy): string => enemy.actor.color ?? enemy.actor.shape.color;
  const enemyDefinition = (enemy: Enemy) => orbFamily.members[enemy.enemyId];
  const destroyEnemy = (enemy: Enemy): void => {
    const definition = defeatEnemy(enemy, enemyExitEffects, enemyExitColor(enemy));
    playLibrarySfx(definition.deathSound);
  };
  const laneX = (lane: number) => canvas.width * (lane === 0 ? .32 : .68);
  const entityX = (entity: ParsedTrackEntity) => laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2 + (entity.columnSpan - 1) / 2) * 15 * scale();
  const playerY = () => canvas.height * .82;
  const activeSceneId = (): LaneRunnerSceneId => sceneOverride ?? activeTrack?.environment.sceneId ?? defaultTrack.environment.sceneId;
  const entityBaseY = (entity: ParsedTrackEntity): number => entity.id === "pickup.unitMultiplier.2x" ? 125 : entity.id.startsWith("pickup.") ? 120 : 110;
  const entitySpeed = (entity: ParsedTrackEntity): number =>
    (enemyDefinitionFromTrackId(entity.id)?.definition.speed ?? 72) * entity.speedMultiplier * scale();
  const visualSpawnY = (): number =>
    worldYForProjectedY(canvas.height * .14, cameraSettings, { height: canvas.height, playerY: playerY() });
  const enemySpawnY = (entity: ParsedTrackEntity): number =>
    entityBaseY(entity) * scale() - entitySpeed(entity) * spawnLeadSeconds(entity);
  const pickupSpawnY = (baseY: number, entity: ParsedTrackEntity): number =>
    baseY * scale() - entitySpeed(entity) * spawnLeadSeconds(entity);
  const spawnLeadSeconds = (entity: ParsedTrackEntity): number =>
    Math.min(entity.distanceFromPlayer, Math.max(0, (entityBaseY(entity) * scale() - visualSpawnY()) / entitySpeed(entity)));

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
    enemyExitEffects = [];
    victory = null;
    failureReason = "";
    activeByFamily.gun = null;
    activeByFamily.shield = null;
    activeByFamily.sword = null;
    playSfx("MenuOpen");
  };

  const startTrack = (track: TrackMember): void => {
    activeTrack = track;
    if (!sceneOverride) sceneSelect.value = track.environment.sceneId;
    lastFrame = performance.now();
    combatElapsed = 0;
    combatNow = 0;
    const allEntities = parseTrackDefinition(track.definition);
    const playerStart = allEntities.find(entity => entity.id === "player.start");
    const startLane: 0 | 1 = playerStart?.side === "right" ? 1 : 0;
    playerLane = startLane;
    activeByFamily.gun = null;
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
    enemyExitEffects = [];
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
    playSfx("TrackStart");
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
      if (lane !== squad.lane) playLibrarySfx("LaneSwitch");
      squad.setLane(lane, laneX, combatNow);
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
      playSfx("AimRelease");
    },
  });

  // ---------------------------------------------------------------------------
  // Gun fire
  // ---------------------------------------------------------------------------

  const fire = (): void => {
    if (!activeByFamily.gun) return;
    const { id: gunId, level: gunLevel } = activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find(item => item.level === gunLevel) ?? gun.levels[0];
    const points = squad.points(playerY(), scale()).map(point => ({ x: point.x, y: playerY() - 20 * scale() }));
    gunSimulation.fire(gun, tuning, playerLane, points, combatNow, scale());
    cooldown += 1 / tuning.fireRatePerSecond;
    playGunFire(gunId);
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
      playSfx("PuzzleComplete");
    } else {
      playSfx("GameOver");
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

  const update = (frameNow: number): void => {
    const rawDelta = Math.min(.05, (frameNow - lastFrame) / 1000);
    lastFrame = frameNow;
    const delta = rawDelta * combatTuning.globalSpeedMultiplier;
    combatElapsed += delta;
    combatNow = combatElapsed * 1000;
    for (const item of [...explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) explodingPlayers.splice(explodingPlayers.indexOf(item), 1);
    }
    updateEnemyExitEffects(enemyExitEffects, delta);
    if (!activeTrack) return;
    const elapsed = combatElapsed;

    const gunStatus = activeByFamily.gun ? gunFamily.members[activeByFamily.gun.id].label : "No weapon";
    const shieldDef = activeByFamily.shield ? shieldFamily.members[activeByFamily.shield.shieldId] : null;
    const swordDef = activeByFamily.sword ? swordFamily.members[activeByFamily.sword.swordId] : null;

    runStatus.textContent = `${gunStatus}${shieldDef ? ` · ${shieldDef.label}` : ""}${swordDef ? ` · ${swordDef.label}` : ""} · ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;

    while (
      nextTrackEntity < trackEntities.length &&
      trackEntities[nextTrackEntity].distanceFromPlayer <= elapsed + spawnLeadSeconds(trackEntities[nextTrackEntity])
    ) {
      const entity = trackEntities[nextTrackEntity++];
      const lane = entity.side === "left" ? 0 : 1;
      const enemyDefinitionEntry = enemyDefinitionFromTrackId(entity.id);
      if (enemyDefinitionEntry) {
        const { enemyId, definition } = enemyDefinitionEntry;
        const enemyType: EnemyVisualType = enemyId;
        const actor = createEnemyActor(enemyId);
        const maxHealth = definition.health * activeTrack.definition.balance.enemyHp;
        enemies.push({
          id: ++entityIdCounter,
          enemyType,
          enemyId,
          lane,
          x: entityX(entity),
          y: enemySpawnY(entity),
          health: maxHealth,
          maxHealth,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor,
          dying: false,
        });
        if (definition.spawnSound) playLibrarySfx(definition.spawnSound);
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        gunPickups.push({ lane, x: entityX(entity), y: pickupSpawnY(120, entity), gunId: candidate as GunId, level: 1, speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        shieldPickups.push({ lane, x: entityX(entity), y: pickupSpawnY(120, entity), shieldId: candidate as ShieldId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        swordPickups.push({ lane, x: entityX(entity), y: pickupSpawnY(120, entity), swordId: candidate as SwordId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        multipliers.push({ lane, x: entityX(entity), y: pickupSpawnY(125, entity), multiplierId: "squadPlusOne", speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) });
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
    if (activeByFamily.gun) {
      cooldown -= delta;
      if (cooldown <= 0) fire();
      if (gunSimulation.updateFiring(combatNow) > 0) playGunFire(activeByFamily.gun.id);
    }

    // --- Projectile movement + hit detection ---
    gunSimulation.updateProjectiles(delta, combatNow, enemies.map(enemy => Object.assign(enemy, {
      radius: enemyDefinition(enemy).radius * scale(),
    })), { top: -40 * scale(), left: -40, right: canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy as Enemy & { radius: number };
      const result = resolveEnemyDamage({
        enemy: gameEnemy,
        effects: enemyExitEffects,
        impactMagnitude: shot.damage + shot.knockback * .06,
        color: enemyExitColor(gameEnemy),
      });
      if (result.killed) {
        playLibrarySfx(result.definition.deathSound);
      } else {
        playLibrarySfx("ProjectileHit");
        playLibrarySfx("EnemyHit");
      }
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

      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, combatNow, delta);

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
        playLibrarySfx("ShieldPulse");
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
            destroyEnemy(enemy);
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
        swordState, swordDef, swordThreats, px, py, combatNow, delta,
        neonPalette[swordDef.color],
      );

      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        playSwordSwing(swordState.swordId);
        for (const enemy of [...enemies]) {
          if (enemy.dying) continue;
          if (!swordResult.hitEnemyIds.includes(enemy.id ?? 0)) continue;
          const result = resolveEnemyDamage({
            enemy,
            effects: enemyExitEffects,
            damage: swordResult.damage,
            impactMagnitude: swordResult.damage,
            color: enemyExitColor(enemy),
          });
          if (result.killed) {
            playLibrarySfx(result.definition.deathSound);
          } else {
            playLibrarySfx("SwordHit");
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
      enemy.y += enemyDefinition(enemy).speed * effective * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) { enemies.splice(enemies.indexOf(enemy), 1); continue; }
      if (enemy.dying) continue;

      // Shield contact is geometric and independent of authored lane. This catches
      // vertical approaches and horizontal collisions while the squad changes lanes.
      if (activeByFamily.shield && shieldDef) {
        const shieldContact = resolveShieldContact(activeByFamily.shield, shieldDef, Object.assign(enemy, {
          radius: enemyDefinition(enemy).radius * scale(),
        }), px, py, combatNow, scale());
        if (shieldContact.absorbed) {
          if (shieldContact.enemyDestroyed) {
            destroyEnemy(enemy);
          } else {
            enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: shieldContact.damageAbsorbed / enemyDefinition(enemy).impactResistance });
            playLibrarySfx("ShieldImpact");
          }
          continue;
        }
      }

      // Player body contact
      const points = squad.points(playerY(), scale());
      const hitIndex = points.findIndex(point => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= enemyDefinition(enemy).radius * 3.2);
      if (hitIndex >= 0) {
        const point = points[hitIndex];
        const actor = playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
        actor.explodeMagnitude = .55;
        actor.dispose(NeonShapeDisposal.Explode);
        explodingPlayers.push({ actor, x: point.x, y: point.y });
        playerActors.splice(hitIndex, 1);
        squad.remove();
        enemies.splice(enemies.indexOf(enemy), 1);
        playLibrarySfx("PlayerDamage");
        playLibrarySfx("SquadMemberLost");
        if (squad.count === 1) playSfx("LowHealthWarning");
        if (squad.count === 0) { failureReason = "The entire squad was destroyed on contact."; finish(false); return; }
        continue;
      }

      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
        playSfx("EnemyEscaped");
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
        playPickup("PickupGun");
        playSfx("WeaponReady");
      } else if (pickup.y > canvas.height) gunPickups.splice(gunPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        // Family-scoped exclusivity: replace existing shield
        const def = shieldFamily.members[pickup.shieldId];
        activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges);
        shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
        playPickup("PickupShield");
        playSfx("Shield");
      } else if (pickup.y > canvas.height) shieldPickups.splice(shieldPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        // Family-scoped exclusivity: replace existing sword
        activeByFamily.sword = new SwordState(pickup.swordId);
        swordPickups.splice(swordPickups.indexOf(pickup), 1);
        playPickup("PickupSword");
        playSfx("WeaponReady");
      } else if (pickup.y > canvas.height) swordPickups.splice(swordPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta); pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        syncPlayerActors();
        multipliers.splice(multipliers.indexOf(pickup), 1);
        playPickup("PickupMultiplier");
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }

    if (elapsed >= activeTrack.durationSeconds && enemies.length === 0) finish(breaches === 0);
  };

  // ---------------------------------------------------------------------------
  // Environment rendering
  // ---------------------------------------------------------------------------

  const environment = (track: TrackMember, now: number): NeonPrimitive[] => {
    const scene = createLaneRunnerScene({
      sceneId: activeSceneId(),
      width: canvas.width,
      height: canvas.height,
      timeMs: now,
    });
    return [...(scene.primitives ?? [])];
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
    const cloudInstances = enemyExitEffects.map(enemyExitCloud);
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
    const helicopterViewport = helicopterViewportFor(canvas.width, canvas.height, playerY());
    for (const [index, point] of squad.points(playerY(), s).entries()) {
      const actor = playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, playerOrientation(cameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    for (const item of explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    const enemyHealthBars: Parameters<typeof projectedEnemyHealthBarPrimitives>[0][number][] = [];
    for (const enemy of enemies) {
      const definition = enemyDefinition(enemy);
      const size = 18 * definition.columnSpan;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(cameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15, billboardOrientation(cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }
    for (const pickup of multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16, billboardOrientation(cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }
    const projected = projectHelicopterScene(primitives, shapeInstances, cloudInstances, cameraSettings, {
      ...helicopterViewport,
    });
    projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, cameraSettings, helicopterViewport));
    renderer.render(projected, now / 1000);
  };

  const frame = (now: number) => {
    update(now);
    draw(combatNow);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window {
    JustTheGamesPlease?: {
      urlOptions?: {
        isEnabled(name: string): boolean;
      };
    };
    gameAudio?: {
      play(id: string): void;
      playRotated(id: string, alternatives: number): void;
    };
  }
}

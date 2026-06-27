import {
  NeonShapeActor,
  NeonShapeDisposal,
  NeonTopDownSceneRenderer,
  NeonVictoryExperience,
  neonPalette,
  type LaneRunnerSceneId,
  type NeonPrimitive,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  combatTuning,
  gunFamily,
  multiplierFamily,
  orbFamily,
  parseTrackDefinition,
  shieldFamily,
  swordFamily,
  type GunId,
  type MultiplierId,
  type OrbId,
  type ParsedTrackEntity,
  type ShieldId,
  type SwordId,
  type SwordTargetingMode,
  type TrackMember,
} from "../../CombatDefinition";
import { AutoAimControlState, selectAutoAimOffset } from "../autoAim";
import { GunSimulation } from "../combat/gunSimulation";
import { queryNearbyThreats } from "../combat/nearbyThreatQuery";
import { resolveShieldContact, ShieldState, tickShield } from "../combat/shieldEvaluator";
import { SwordState, tickSword } from "../combat/swordEvaluator";
import { createEnemyActor, defeatEnemy, enemyDefinitionFromTrackId, projectedEnemyHealthBarPrimitives, resolveEnemyDamage } from "../enemyCatalog";
import { enemyExitCloud, updateEnemyExitEffects, type ActiveEnemyExitEffect, type EnemyVisualType } from "../enemyExitVisuals";
import { shieldPickupVisual, shieldVisuals, swordPickupVisual, swordVisuals } from "../familyVisuals";
import { billboardOrientation, enemyOrientation, helicopterViewportFor, playerOrientation } from "../renderOrientation";
import { applyLaneRunnerSceneBackground, laneRunnerScenePrimitives } from "../sceneEnvironment";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../shapeVisuals";
import { SquadModel } from "../squad";
import {
  defaultHelicopterCameraSettings,
  laneRunnerCameraFocusX,
  laneRunnerViewport,
  projectHelicopterScene,
  worldYForProjectedY,
  type HelicopterCameraSettings,
} from "../viewport";

type Lane = 0 | 1;

export type NeonSwarmSimulationMode = "game" | "lab";

export interface NeonSwarmSound {
  play(id: string): void;
  playRotated?(id: string, alternatives: number): void;
}

export interface NeonSwarmSimulationOptions {
  mode: NeonSwarmSimulationMode;
  canvas: HTMLCanvasElement;
  stageElement: HTMLElement;
  cameraSettings?: HelicopterCameraSettings;
  sound?: NeonSwarmSound;
  sceneId?: LaneRunnerSceneId;
  onRunStatus?: (status: string) => void;
  onFinish?: (result: NeonSwarmFinishResult) => void;
}

export interface NeonSwarmFinishResult {
  won: boolean;
  title: string;
  detail: string;
  breaches: number;
}

export interface NeonSwarmSnapshot {
  mode: NeonSwarmSimulationMode;
  activeTrack: boolean;
  combatNow: number;
  combatElapsed: number;
  sceneId: LaneRunnerSceneId;
  squad: {
    lane: Lane;
    count: number;
    x: number;
    targetX: number;
    aimOffset: number;
  };
  active: {
    gun: { id: GunId; level: number } | null;
    shield: ShieldId | null;
    sword: SwordId | null;
  };
  enemies: Array<{ id: number; enemyId: OrbId; lane: Lane; x: number; y: number; health: number; maxHealth: number; dying: boolean }>;
  pickups: {
    guns: number;
    shields: number;
    swords: number;
    multipliers: number;
  };
  kills: number;
}

interface Enemy {
  id: number;
  enemyType: EnemyVisualType;
  enemyId: OrbId;
  lane: Lane;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  speedMultiplier: number;
  rowId: number;
  actor: NeonShapeActor;
  dying: boolean;
  exitEffectSpawned?: boolean;
}

interface GunPickup {
  lane: Lane;
  x: number;
  y: number;
  gunId: GunId;
  level: number;
  speedMultiplier: number;
  actor: NeonShapeActor;
}

interface ShieldPickup {
  lane: Lane;
  x: number;
  y: number;
  shieldId: ShieldId;
  speedMultiplier: number;
}

interface SwordPickup {
  lane: Lane;
  x: number;
  y: number;
  swordId: SwordId;
  speedMultiplier: number;
}

interface MultiplierPickup {
  lane: Lane;
  x: number;
  y: number;
  multiplierId: MultiplierId;
  speedMultiplier: number;
  actor: NeonShapeActor;
}

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

export class NeonSwarmSimulation {
  readonly mode: NeonSwarmSimulationMode;
  readonly canvas: HTMLCanvasElement;
  readonly stageElement: HTMLElement;
  readonly cameraSettings: HelicopterCameraSettings;
  readonly squad = new SquadModel();
  readonly aimControl = new AutoAimControlState();

  private renderer: NeonTopDownSceneRenderer;
  private sound?: NeonSwarmSound;
  private onRunStatus?: (status: string) => void;
  private onFinish?: (result: NeonSwarmFinishResult) => void;
  private animationFrame = 0;
  private activeTrack: TrackMember | null = null;
  private trackSceneId: LaneRunnerSceneId;
  private lastFrame = performance.now();
  private combatElapsed = 0;
  private combatNow = 0;
  private playerLane: Lane = 0;
  private cooldown = 0;
  private entityIdCounter = 0;
  private trackEntities: ParsedTrackEntity[] = [];
  private nextTrackEntity = 0;
  private breaches = 0;
  private kills = 0;
  private enemies: Enemy[] = [];
  private gunSimulation = new GunSimulation();
  private gunPickups: GunPickup[] = [];
  private shieldPickups: ShieldPickup[] = [];
  private swordPickups: SwordPickup[] = [];
  private multipliers: MultiplierPickup[] = [];
  private enemyExitEffects: ActiveEnemyExitEffect[] = [];
  private victory: NeonVictoryExperience | null = null;
  private failureReason = "";
  private playerActors: NeonShapeActor[] = [];
  private explodingPlayers: Array<{ actor: NeonShapeActor; x: number; y: number }> = [];
  private activeByFamily: {
    gun: { id: GunId; level: number } | null;
    shield: ShieldState | null;
    sword: SwordState | null;
  } = {
    gun: null,
    shield: null,
    sword: null,
  };

  private constructor(renderer: NeonTopDownSceneRenderer, options: NeonSwarmSimulationOptions) {
    this.renderer = renderer;
    this.mode = options.mode;
    this.canvas = options.canvas;
    this.stageElement = options.stageElement;
    this.cameraSettings = options.cameraSettings ?? { ...defaultHelicopterCameraSettings };
    this.sound = options.sound;
    this.onRunStatus = options.onRunStatus;
    this.onFinish = options.onFinish;
    this.trackSceneId = options.sceneId ?? "neonHall";
    this.applySceneBackground();
    this.reset({ silent: true });
  }

  static async create(options: NeonSwarmSimulationOptions): Promise<NeonSwarmSimulation> {
    const renderer = await NeonTopDownSceneRenderer.create(options.canvas, laneRunnerViewport.logicalWidth, laneRunnerViewport.logicalHeight);
    return new NeonSwarmSimulation(renderer, options);
  }

  get now(): number {
    return this.combatNow;
  }

  get activeTrackRunning(): boolean {
    return this.activeTrack !== null;
  }

  laneX(lane: Lane): number {
    return this.canvas.width * (lane === 0 ? .32 : .68);
  }

  playerY(): number {
    return this.canvas.height * .82;
  }

  scale(): number {
    return 1;
  }

  reset(options: { silent?: boolean } = {}): void {
    this.activeTrack = null;
    this.lastFrame = performance.now();
    this.combatElapsed = 0;
    this.combatNow = 0;
    this.cooldown = 0;
    this.nextTrackEntity = 0;
    this.trackEntities = [];
    this.breaches = 0;
    this.kills = 0;
    this.clearStage();
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.squad.count = 1;
    this.squad.aimOffset = 0;
    this.squad.lane = 0;
    this.squad.x = this.laneX(0);
    this.squad.targetX = this.laneX(0);
    this.playerLane = 0;
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.failureReason = "";
    this.victory = null;
    if (!options.silent) this.play("MenuOpen");
  }

  clearStage(): void {
    this.enemies = [];
    this.gunSimulation.clear();
    this.gunPickups = [];
    this.shieldPickups = [];
    this.swordPickups = [];
    this.multipliers = [];
    this.enemyExitEffects = [];
    this.explodingPlayers = [];
    this.victory = null;
  }

  startTrack(track: TrackMember): void {
    this.activeTrack = track;
    this.trackSceneId = track.environment.sceneId;
    this.applySceneBackground();
    this.lastFrame = performance.now();
    this.combatElapsed = 0;
    this.combatNow = 0;
    const allEntities = parseTrackDefinition(track.definition);
    const playerStart = allEntities.find(entity => entity.id === "player.start");
    const startLane: Lane = playerStart?.side === "right" ? 1 : 0;
    this.playerLane = startLane;
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.cooldown = 0;
    this.nextTrackEntity = 0;
    this.trackEntities = allEntities.filter(entity => entity.id !== "player.start");
    this.breaches = 0;
    this.clearStage();
    this.squad.count = 1;
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.squad.aimOffset = 0;
    this.squad.lane = startLane;
    this.squad.x = this.laneX(startLane);
    this.squad.targetX = this.laneX(startLane);
    this.play("TrackStart");
  }

  setScene(sceneId: LaneRunnerSceneId): void {
    this.trackSceneId = sceneId;
    this.applySceneBackground();
  }

  setSquadLane(lane: Lane, options: { requireActiveTrack?: boolean } = {}): void {
    if (options.requireActiveTrack && !this.activeTrack) return;
    if (lane !== this.squad.lane) this.play("LaneSwitch");
    this.squad.setLane(lane, value => this.laneX(value), this.combatNow);
    this.playerLane = lane;
    this.aimControl.laneSelected();
  }

  setSquadAim(value: number, options: { requireActiveTrack?: boolean } = {}): void {
    if (options.requireActiveTrack && !this.activeTrack) return;
    this.squad.setAim(value, this.canvas.width * .22, lane => this.laneX(lane));
    this.aimControl.aimChanged();
  }

  releaseAim(): void {
    this.aimControl.aimReleased();
    this.play("AimRelease");
  }

  equipGun(gunId: GunId, level = 1): void {
    this.activeByFamily.gun = { id: gunId, level };
    this.cooldown = 0;
    this.playPickup("PickupGun");
    this.play("WeaponReady");
  }

  equipShield(shieldId: ShieldId): void {
    const def = shieldFamily.members[shieldId];
    this.activeByFamily.shield = new ShieldState(shieldId, def.maxCharges);
    this.playPickup("PickupShield");
    this.play("Shield");
  }

  equipSword(swordId: SwordId): void {
    this.activeByFamily.sword = new SwordState(swordId);
    this.playPickup("PickupSword");
    this.play("WeaponReady");
  }

  addSquadMembers(amount: number): void {
    this.squad.add(amount);
    this.syncPlayerActors();
  }

  spawnEnemy(options: { enemyId: OrbId; lane: Lane; x?: number; y?: number; health?: number; speedMultiplier?: number; rowId?: number; playSound?: boolean; color?: string }): number {
    const definition = orbFamily.members[options.enemyId];
    const health = options.health ?? definition.health;
    const id = ++this.entityIdCounter;
    const actor = createEnemyActor(options.enemyId);
    if (options.color) actor.color = options.color;
    this.enemies.push({
      id,
      enemyType: options.enemyId,
      enemyId: options.enemyId,
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 105 * this.scale(),
      health,
      maxHealth: health,
      speedMultiplier: options.speedMultiplier ?? 1,
      rowId: options.rowId ?? id,
      actor,
      dying: false,
    });
    if (options.playSound !== false && definition.spawnSound) this.play(definition.spawnSound);
    return id;
  }

  defeatEnemyById(id: number): void {
    const enemy = this.enemies.find(item => item.id === id);
    if (enemy && !enemy.dying) this.destroyEnemy(enemy);
  }

  spawnGunPickup(options: { gunId: GunId; lane: Lane; level?: number; x?: number; y?: number; speedMultiplier?: number }): void {
    this.gunPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      gunId: options.gunId,
      level: options.level ?? 1,
      speedMultiplier: options.speedMultiplier ?? 1,
      actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }),
    });
  }

  spawnShieldPickup(options: { shieldId: ShieldId; lane: Lane; x?: number; y?: number; speedMultiplier?: number }): void {
    this.shieldPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      shieldId: options.shieldId,
      speedMultiplier: options.speedMultiplier ?? 1,
    });
  }

  spawnSwordPickup(options: { swordId: SwordId; lane: Lane; x?: number; y?: number; speedMultiplier?: number }): void {
    this.swordPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      swordId: options.swordId,
      speedMultiplier: options.speedMultiplier ?? 1,
    });
  }

  spawnMultiplierPickup(options: { lane: Lane; x?: number; y?: number; speedMultiplier?: number; multiplierId?: MultiplierId }): void {
    const multiplierId = options.multiplierId ?? "squadPlusOne";
    this.multipliers.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      multiplierId,
      speedMultiplier: options.speedMultiplier ?? 1,
      actor: new NeonShapeActor({ shape: swarmShapes.multiplier }),
    });
  }

  startLoop(): void {
    this.stopLoop();
    const frame = (now: number): void => {
      this.tick(now);
      this.render(this.combatNow);
      this.animationFrame = requestAnimationFrame(frame);
    };
    this.animationFrame = requestAnimationFrame(frame);
  }

  stopLoop(): void {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
  }

  tick(frameNow: number): void {
    const rawDelta = Math.min(.05, (frameNow - this.lastFrame) / 1000);
    this.lastFrame = frameNow;
    const delta = rawDelta * combatTuning.globalSpeedMultiplier;
    this.combatElapsed += delta;
    this.combatNow = this.combatElapsed * 1000;
    for (const item of [...this.explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) this.explodingPlayers.splice(this.explodingPlayers.indexOf(item), 1);
    }
    updateEnemyExitEffects(this.enemyExitEffects, delta);

    if (this.mode === "game" && !this.activeTrack) return;
    if (this.activeTrack) this.spawnTrackEntities();

    const gunStatus = this.activeByFamily.gun ? gunFamily.members[this.activeByFamily.gun.id].label : "No weapon";
    const shieldDef = this.activeByFamily.shield ? shieldFamily.members[this.activeByFamily.shield.shieldId] : null;
    const swordDef = this.activeByFamily.sword ? swordFamily.members[this.activeByFamily.sword.swordId] : null;
    if (this.activeTrack) {
      this.onRunStatus?.(`${gunStatus}${shieldDef ? ` · ${shieldDef.label}` : ""}${swordDef ? ` · ${swordDef.label}` : ""} · ${Math.max(0, this.activeTrack.durationSeconds - this.combatElapsed).toFixed(1)}s`);
    }

    if (!this.aimControl.manual) {
      const laneEnemies = this.enemies.filter(enemy => enemy.lane === this.squad.lane && !enemy.dying);
      const colOffsets = this.squad.frontRowColumnOffsets(this.scale());
      const offset = selectAutoAimOffset(laneEnemies, this.laneX(this.squad.lane), colOffsets, this.squad.aimOffset);
      this.squad.autoAim(offset, this.canvas.width * .22, lane => this.laneX(lane));
    }
    this.squad.update(delta);
    this.stageElement.dataset.squadLane = String(this.squad.lane);
    this.stageElement.dataset.squadAim = this.squad.aimOffset.toFixed(2);
    this.syncPlayerActors();

    if (this.activeByFamily.gun) {
      this.cooldown -= delta;
      if (this.cooldown <= 0) this.fire();
      if (this.gunSimulation.updateFiring(this.combatNow) > 0) this.playGunFire(this.activeByFamily.gun.id);
    }

    this.updateProjectiles(delta);
    this.updateNearPlayerEffects(delta, shieldDef, swordDef);
    this.updateEnemies(delta, shieldDef);
    this.updatePickups(delta);

    if (this.activeTrack && this.combatElapsed >= this.activeTrack.durationSeconds && this.enemies.length === 0) this.finish(this.breaches === 0);
  }

  render(now = this.combatNow): void {
    const primitives = laneRunnerScenePrimitives(this.trackSceneId, this.canvas.width, this.canvas.height, now);
    const s = this.scale();

    for (const point of this.squad.points(this.playerY(), s)) {
      const smear = Math.min(22 * s, Math.abs(this.squad.targetX - this.squad.x) * .45);
      if (smear > 2) {
        primitives.push({
          x: point.x - Math.sign(this.squad.targetX - this.squad.x) * smear * .5,
          y: point.y,
          width: smear,
          height: 2.2 * s,
          color: neonPalette.deepBlue,
          secondaryColor: neonPalette.cyan,
          glow: .45,
          intensity: .5,
          shape: "bolt",
        });
      }
    }

    primitives.push(...this.gunSimulation.projectilePrimitives());
    if (this.victory) primitives.push(...this.victory.primitives(now));

    const shapeInstances: NeonTopDownShape[] = [];
    if (this.activeByFamily.shield) {
      const liveShield = this.activeByFamily.shield;
      const liveDef = shieldFamily.members[liveShield.shieldId];
      const scene = shieldVisuals({
        definition: liveDef,
        strength: liveShield.charges,
        initialStrength: liveDef.maxCharges,
        x: this.squad.x,
        y: this.playerY(),
        now,
        scale: s,
        hitProgress: liveShield.hitFlashProgress,
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }
    if (this.activeByFamily.sword) {
      const liveSword = this.activeByFamily.sword;
      const liveDef = swordFamily.members[liveSword.swordId];
      const scene = swordVisuals({
        definition: liveDef,
        slash: liveSword.activeSlash,
        x: this.squad.x,
        y: this.playerY(),
        scale: s,
        visible: true,
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }

    for (const pickup of this.shieldPickups) {
      const definition = shieldFamily.members[pickup.shieldId];
      shapeInstances.push(shieldPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s,
      }));
    }
    for (const pickup of this.swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      shapeInstances.push(swordPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s,
      }));
    }

    const helicopterViewport = helicopterViewportFor(this.canvas.width, this.canvas.height, this.playerY(), laneRunnerCameraFocusX(this.canvas.width, this.squad.x));
    const playerSize = 14;
    for (const [index, point] of this.squad.points(this.playerY(), s).entries()) {
      const actor = this.playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, playerOrientation(this.cameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    for (const item of this.explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));

    const enemyHealthBars: Parameters<typeof projectedEnemyHealthBarPrimitives>[0][number][] = [];
    for (const enemy of this.enemies) {
      const definition = this.enemyDefinition(enemy);
      const size = 18 * definition.columnSpan;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(this.cameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of this.gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15, billboardOrientation(this.cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }
    for (const pickup of this.multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16, billboardOrientation(this.cameraSettings, helicopterViewport, pickup.x, pickup.y, now)));
    }

    const projected = projectHelicopterScene(primitives, shapeInstances, this.enemyExitEffects.map(enemyExitCloud), this.cameraSettings, helicopterViewport);
    projected.primitives.push(...projectedEnemyHealthBarPrimitives(enemyHealthBars, this.cameraSettings, helicopterViewport));
    this.renderer.render(projected, now / 1000);
  }

  snapshot(): NeonSwarmSnapshot {
    return {
      mode: this.mode,
      activeTrack: this.activeTrack !== null,
      combatNow: this.combatNow,
      combatElapsed: this.combatElapsed,
      sceneId: this.trackSceneId,
      squad: {
        lane: this.squad.lane,
        count: this.squad.count,
        x: this.squad.x,
        targetX: this.squad.targetX,
        aimOffset: this.squad.aimOffset,
      },
      active: {
        gun: this.activeByFamily.gun ? { ...this.activeByFamily.gun } : null,
        shield: this.activeByFamily.shield?.shieldId ?? null,
        sword: this.activeByFamily.sword?.swordId ?? null,
      },
      enemies: this.enemies.map(enemy => ({
        id: enemy.id,
        enemyId: enemy.enemyId,
        lane: enemy.lane,
        x: enemy.x,
        y: enemy.y,
        health: enemy.health,
        maxHealth: enemy.maxHealth,
        dying: enemy.dying,
      })),
      pickups: {
        guns: this.gunPickups.length,
        shields: this.shieldPickups.length,
        swords: this.swordPickups.length,
        multipliers: this.multipliers.length,
      },
      kills: this.kills,
    };
  }

  destroy(): void {
    this.stopLoop();
    this.renderer.destroy();
  }

  private spawnTrackEntities(): void {
    if (!this.activeTrack) return;
    while (
      this.nextTrackEntity < this.trackEntities.length &&
      this.trackEntities[this.nextTrackEntity].distanceFromPlayer <= this.combatElapsed + this.spawnLeadSeconds(this.trackEntities[this.nextTrackEntity])
    ) {
      const entity = this.trackEntities[this.nextTrackEntity++];
      const lane: Lane = entity.side === "left" ? 0 : 1;
      const enemyDefinitionEntry = enemyDefinitionFromTrackId(entity.id);
      if (enemyDefinitionEntry) {
        const { enemyId, definition } = enemyDefinitionEntry;
        this.enemies.push({
          id: ++this.entityIdCounter,
          enemyType: enemyId,
          enemyId,
          lane,
          x: this.entityX(entity),
          y: this.enemySpawnY(entity),
          health: definition.health * this.activeTrack.definition.balance.enemyHp,
          maxHealth: definition.health * this.activeTrack.definition.balance.enemyHp,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor: createEnemyActor(enemyId),
          dying: false,
        });
        if (definition.spawnSound) this.play(definition.spawnSound);
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        this.spawnGunPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), gunId: candidate as GunId, level: 1, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        this.spawnShieldPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), shieldId: candidate as ShieldId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        this.spawnSwordPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(120, entity), swordId: candidate as SwordId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        this.spawnMultiplierPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(125, entity), speedMultiplier: entity.speedMultiplier });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }
  }

  private fire(): void {
    if (!this.activeByFamily.gun) return;
    const { id: gunId, level: gunLevel } = this.activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find(item => item.level === gunLevel) ?? gun.levels[0];
    const points = this.squad.points(this.playerY(), this.scale()).map(point => ({ x: point.x, y: this.playerY() - 20 * this.scale() }));
    this.gunSimulation.fire(gun, tuning, this.playerLane, points, this.combatNow, this.scale());
    this.cooldown += 1 / tuning.fireRatePerSecond;
    this.playGunFire(gunId);
  }

  private updateProjectiles(delta: number): void {
    this.gunSimulation.updateProjectiles(delta, this.combatNow, this.enemies.map(enemy => Object.assign(enemy, {
      radius: this.enemyDefinition(enemy).radius * this.scale(),
    })), { top: -40 * this.scale(), left: -40, right: this.canvas.width + 40 }, (shot, enemy) => {
      const gameEnemy = enemy as Enemy & { radius: number };
      const result = resolveEnemyDamage({
        enemy: gameEnemy,
        effects: this.enemyExitEffects,
        impactMagnitude: shot.damage + shot.knockback * .06,
        color: this.enemyExitColor(gameEnemy),
      });
      if (result.killed) {
        this.kills++;
        this.play(result.definition.deathSound);
      } else {
        this.play("ProjectileHit");
        this.play("EnemyHit");
      }
    });
  }

  private updateNearPlayerEffects(delta: number, shieldDef: (typeof shieldFamily.members)[ShieldId] | null, swordDef: (typeof swordFamily.members)[SwordId] | null): void {
    const px = this.squad.x;
    const py = this.playerY();
    if (this.activeByFamily.shield && shieldDef) {
      const shieldState = this.activeByFamily.shield;
      const shieldThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: shieldDef.radius * this.scale(),
        includeAdjacentLanes: false,
        purpose: "shield",
      });

      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, this.combatNow, delta);
      if (shieldResult.pushEnemyIds.length > 0) {
        for (const enemy of this.enemies) {
          if (!shieldResult.pushEnemyIds.includes(enemy.id)) continue;
          const dx = enemy.x - px;
          const dy = enemy.y - py;
          const dist = Math.hypot(dx, dy) || 1;
          enemy.x += (dx / dist) * shieldResult.pushDistance * this.scale();
          enemy.y += (dy / dist) * shieldResult.pushDistance * this.scale();
        }
        this.play("ShieldPulse");
      }
      if (shieldResult.contactDamageEnemyIds.length > 0) {
        for (const enemy of [...this.enemies]) {
          if (enemy.dying || !shieldResult.contactDamageEnemyIds.includes(enemy.id)) continue;
          enemy.health -= shieldResult.contactDamageAmount * delta;
          if (enemy.health <= 0) this.destroyEnemy(enemy);
        }
      }
    }

    if (this.activeByFamily.sword && swordDef) {
      const swordState = this.activeByFamily.sword;
      const swordThreats = queryNearbyThreats(this.enemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: swordDef.range * this.scale(),
        includeAdjacentLanes: (swordDef.targetingMode as SwordTargetingMode) === "nearestInEitherLane",
        maxTargets: swordDef.maxTargets,
        purpose: "sword",
      });
      const swordResult = tickSword(swordState, swordDef, swordThreats, px, py, this.combatNow, delta, neonPalette[swordDef.color]);
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        this.playSwordSwing(swordState.swordId);
        for (const enemy of [...this.enemies]) {
          if (enemy.dying || !swordResult.hitEnemyIds.includes(enemy.id)) continue;
          const result = resolveEnemyDamage({
            enemy,
            effects: this.enemyExitEffects,
            damage: swordResult.damage,
            impactMagnitude: swordResult.damage,
            color: this.enemyExitColor(enemy),
          });
          if (result.killed) {
            this.kills++;
            this.play(result.definition.deathSound);
          }
          else this.play("SwordHit");
        }
      }
    }
  }

  private updateEnemies(delta: number, shieldDef: (typeof shieldFamily.members)[ShieldId] | null): void {
    const slowEnemyIds = new Set<number>();
    const px = this.squad.x;
    const py = this.playerY();
    for (const enemy of [...this.enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      const effective = slowEnemyIds.has(enemy.id)
        ? enemy.speedMultiplier * (shieldDef?.slowMultiplier ?? 1)
        : enemy.speedMultiplier;
      enemy.y += this.enemyDefinition(enemy).speed * effective * this.scale() * delta - enemy.actor.y * this.canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) {
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        continue;
      }
      if (enemy.dying) continue;

      if (this.activeByFamily.shield && shieldDef) {
        const shieldContact = resolveShieldContact(this.activeByFamily.shield, shieldDef, Object.assign(enemy, {
          radius: this.enemyDefinition(enemy).radius * this.scale(),
        }), px, py, this.combatNow, this.scale());
        if (shieldContact.absorbed) {
          if (shieldContact.enemyDestroyed) {
            this.destroyEnemy(enemy);
          } else {
            enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: shieldContact.damageAbsorbed / this.enemyDefinition(enemy).impactResistance });
            this.play("ShieldImpact");
          }
          continue;
        }
      }

      const hitIndex = this.squad.points(this.playerY(), this.scale()).findIndex(point => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= this.enemyDefinition(enemy).radius * 3.2);
      if (hitIndex >= 0) {
        const point = this.squad.points(this.playerY(), this.scale())[hitIndex];
        const actor = this.playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
        actor.explodeMagnitude = .55;
        actor.dispose(NeonShapeDisposal.Explode);
        this.explodingPlayers.push({ actor, x: point.x, y: point.y });
        this.playerActors.splice(hitIndex, 1);
        this.squad.remove();
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        this.play("PlayerDamage");
        this.play("SquadMemberLost");
        if (this.squad.count === 1) this.play("LowHealthWarning");
        if (this.mode === "game" && this.squad.count === 0) {
          this.failureReason = "The entire squad was destroyed on contact.";
          this.finish(false);
          return;
        }
        continue;
      }

      if (enemy.y >= this.playerY()) {
        if (this.mode === "game") {
          this.breaches++;
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
          this.play("EnemyEscaped");
          this.failureReason = "An enemy passed the defense line.";
          this.finish(false);
          return;
        }
        if (enemy.y > this.canvas.height + this.enemyDefinition(enemy).radius * 2) this.enemies.splice(this.enemies.indexOf(enemy), 1);
      }
    }
  }

  private updatePickups(delta: number): void {
    for (const pickup of [...this.gunPickups]) {
      pickup.actor.update(delta);
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        this.activeByFamily.gun = { id: pickup.gunId, level: pickup.level };
        this.cooldown = 0;
        this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
        this.playPickup("PickupGun");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const def = shieldFamily.members[pickup.shieldId];
        this.activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges);
        this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
        this.playPickup("PickupShield");
        this.play("Shield");
      } else if (pickup.y > this.canvas.height) this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        this.activeByFamily.sword = new SwordState(pickup.swordId);
        this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
        this.playPickup("PickupSword");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.multipliers]) {
      pickup.actor.update(delta);
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        this.squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        this.syncPlayerActors();
        this.multipliers.splice(this.multipliers.indexOf(pickup), 1);
        this.playPickup("PickupMultiplier");
      } else if (pickup.y > this.canvas.height) this.multipliers.splice(this.multipliers.indexOf(pickup), 1);
    }
  }

  private finish(won: boolean): void {
    if (!this.activeTrack) return;
    const title = won ? "FLAWLESS RUN" : "TRACK FAILED";
    const detail = won ? "No enemy touched or escaped past you." : this.failureReason || `${this.breaches} enemy${this.breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      this.victory = new NeonVictoryExperience({
        centerX: this.canvas.width / 2,
        centerY: this.canvas.height * .38,
        width: this.canvas.width,
        height: this.canvas.height,
        particleCount: 120,
      });
      this.play("PuzzleComplete");
    } else {
      this.play("GameOver");
    }
    this.activeTrack = null;
    this.onFinish?.({ won, title, detail, breaches: this.breaches });
  }

  private syncPlayerActors(): void {
    while (this.playerActors.length < this.squad.count) this.playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    if (this.playerActors.length > this.squad.count) this.playerActors.length = this.squad.count;
  }

  private applySceneBackground(): void {
    applyLaneRunnerSceneBackground(this.stageElement, this.trackSceneId);
  }

  private enemyExitColor(enemy: Enemy): string {
    return enemy.actor.color ?? enemy.actor.shape.color;
  }

  private enemyDefinition(enemy: Enemy): (typeof orbFamily.members)[OrbId] {
    return orbFamily.members[enemy.enemyId];
  }

  private destroyEnemy(enemy: Enemy): void {
    const definition = defeatEnemy(enemy, this.enemyExitEffects, this.enemyExitColor(enemy));
    this.kills++;
    this.play(definition.deathSound);
  }

  private entityX(entity: ParsedTrackEntity): number {
    return this.laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2 + (entity.columnSpan - 1) / 2) * 15 * this.scale();
  }

  private entityBaseY(entity: ParsedTrackEntity): number {
    return entity.id === "pickup.unitMultiplier.2x" ? 125 : entity.id.startsWith("pickup.") ? 120 : 110;
  }

  private entitySpeed(entity: ParsedTrackEntity): number {
    return (enemyDefinitionFromTrackId(entity.id)?.definition.speed ?? 72) * entity.speedMultiplier * this.scale();
  }

  private visualSpawnY(): number {
    return worldYForProjectedY(this.canvas.height * .14, this.cameraSettings, { height: this.canvas.height, playerY: this.playerY() });
  }

  private enemySpawnY(entity: ParsedTrackEntity): number {
    return this.entityBaseY(entity) * this.scale() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }

  private pickupSpawnY(baseY: number, entity: ParsedTrackEntity): number {
    return baseY * this.scale() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }

  private spawnLeadSeconds(entity: ParsedTrackEntity): number {
    return Math.min(entity.distanceFromPlayer, Math.max(0, (this.entityBaseY(entity) * this.scale() - this.visualSpawnY()) / this.entitySpeed(entity)));
  }

  private play(id: string): void {
    const alternatives = soundAlternativeCounts[id] ?? 0;
    if (alternatives > 0 && this.sound?.playRotated) this.sound.playRotated(id, alternatives);
    else this.sound?.play(id);
  }

  private playGunFire(gunId: GunId): void {
    this.play(gunFireSoundIds[gunId]);
  }

  private playSwordSwing(swordId: SwordId): void {
    this.play(swordSwingSoundIds[swordId]);
  }

  private playPickup(id: "PickupGun" | "PickupShield" | "PickupSword" | "PickupMultiplier"): void {
    this.play("Pickup");
    this.play(id);
  }
}

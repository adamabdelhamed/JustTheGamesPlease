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
  lightningFamily,
  multiplierFamily,
  orbFamily,
  parseTrackDefinition,
  shieldFamily,
  showstopperFamily,
  swordFamily,
  type GunId,
  type LightningId,
  type MultiplierId,
  type OrbId,
  type ParsedTrackEntity,
  type ShieldId,
  type ShowstopperId,
  type ShowstopperMember,
  type SwordId,
  type SwordMember,
  type SwordTargetingMode,
  type TrackMember,
} from "../../CombatDefinition";
import { selectAutoAimOffset } from "../autoAim";
import { GunSimulation } from "../combat/gunSimulation";
import { advanceCooldownSlots, selectBestUnclaimed, syncSlotArray } from "../combat/independentWeaponSlots";
import { LightningState, tickLightning } from "../combat/lightningEvaluator";
import { queryNearbyThreats } from "../combat/nearbyThreatQuery";
import { resolveShieldContact, ShieldState, tickShield } from "../combat/shieldEvaluator";
import { SwordState, tickSword } from "../combat/swordEvaluator";
import { createEnemyActor, defeatEnemy, enemyDefinitionFromTrackId, projectedEnemyHealthBarPrimitives, resolveEnemyDamage } from "../enemyCatalog";
import { createEnemyExitEffect, enemyExitCloud, updateEnemyExitEffects, type ActiveEnemyExitEffect, type EnemyVisualType } from "../enemyExitVisuals";
import { lightningPickupVisual, lightningVisuals, shieldPickupVisual, shieldVisuals, showstopperPickupVisual, swordPickupVisual, swordVisualDurationMs, swordVisuals } from "../familyVisuals";
import type { SwordVisualTuning } from "../familyVisuals";
import { billboardOrientation, enemyOrientation, helicopterViewportFor, playerOrientation } from "../renderOrientation";
import {
  applyLaneRunnerSceneBackground,
  defaultLaneRunnerSceneBackgroundTuning,
  laneRunnerSceneBackgroundProfile,
  laneRunnerScenePrimitives,
  syncLaneRunnerSceneBackgroundPlacement,
  type LaneRunnerSceneBackgroundProfile,
  type LaneRunnerSceneBackgroundTuning,
  type LaneRunnerSceneParallaxInterpretation,
} from "../sceneEnvironment";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "../shapeVisuals";
import { ShowstopperDirector, type ShowstopperDirectorState } from "../showstopperDirector";
import { SquadModel } from "../squad";
import {
  defaultHelicopterCameraSettings,
  laneRunnerCameraFocusX,
  laneRunnerViewport,
  projectHelicopterScene,
  projectHelicopterPoint,
  unprojectHelicopterScreenPoint,
  type HelicopterCameraSettings,
} from "../viewport";

type Lane = 0 | 1;
type LevelWeaponFamily = "gun" | "shield" | "sword" | "lightning";
type LevelWeaponId = GunId | ShieldId | SwordId | LightningId;

export type NeonSwarmSimulationMode = "game" | "lab";

export interface NeonSwarmSound {
  play(id: string): void;
  playRotated?(id: string, alternatives: number): void;
  setMusicVolume?(volume: number): void;
}

export interface NeonSwarmSimulationOptions {
  mode: NeonSwarmSimulationMode;
  canvas: HTMLCanvasElement;
  stageElement: HTMLElement;
  cameraSettings?: HelicopterCameraSettings;
  sound?: NeonSwarmSound;
  sceneId?: LaneRunnerSceneId;
  sceneBackgroundProfile?: LaneRunnerSceneBackgroundProfile;
  sceneParallaxInterpretation?: Partial<LaneRunnerSceneParallaxInterpretation>;
  initialShowstopperBank?: ShowstopperId | readonly ShowstopperId[];
  playerInvincible?: boolean;
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
    shieldLevel: number | null;
    sword: { id: SwordId; level: number } | null;
    lightning: { id: LightningId; level: number } | null;
    showstopper: ShowstopperId | null;
    showstopperCount: number;
    showstoppers: Array<{ id: ShowstopperId; count: number }>;
  };
  enemies: Array<{ id: number; enemyId: OrbId; lane: Lane; x: number; y: number; health: number; maxHealth: number; dying: boolean }>;
  pickups: {
    guns: number;
    shields: number;
    swords: number;
    lightnings: number;
    multipliers: number;
    showstoppers: number;
  };
  kills: number;
}

interface WeaponHudTuning {
  iconScale: number;
  spacing: number;
  fontSize: number;
  verticalOffset: number;
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
  planned: boolean;
  actor: NeonShapeActor;
  dying: boolean;
  suppressed?: boolean;
  exitEffectSpawned?: boolean;
}

interface GunPickup {
  lane: Lane;
  x: number;
  y: number;
  gunId: GunId;
  requestedLevel?: number;
  speedMultiplier: number;
  actor: NeonShapeActor;
}

interface ShieldPickup {
  lane: Lane;
  x: number;
  y: number;
  shieldId: ShieldId;
  requestedLevel?: number;
  speedMultiplier: number;
}

interface SwordPickup {
  lane: Lane;
  x: number;
  y: number;
  swordId: SwordId;
  requestedLevel?: number;
  speedMultiplier: number;
}

interface LightningPickup {
  lane: Lane;
  x: number;
  y: number;
  lightningId: LightningId;
  requestedLevel?: number;
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

interface ShowstopperPickup {
  lane: Lane;
  x: number;
  y: number;
  showstopperId: ShowstopperId;
  speedMultiplier: number;
}

interface PendingSwordDamage {
  hits: Array<{ enemyId: number; dueAt: number }>;
  damage: number;
  color: string;
  impactSoundId: string;
}

interface SnowParticle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  age: number;
  duration: number;
  size: number;
  seed: number;
}

interface DelayedSound {
  id: string;
  dueAt: number;
}

const gunFireSoundIds: Record<GunId, string> = {
  pulsePistol: "Primary",
  needlerSmg: "NeedlerFire",
  burstCarbine: "BurstCarbineFire",
  heavyCannon: "HeavyCannonFire",
  splitterRifle: "SplitterRifleFire",
};

const swordImpactSoundIds: Record<SwordId, string> = {
  arcBlade: "SwordArcImpact",
  cleaver: "SwordCleaverImpact",
};

const lightningFireSoundIds: Record<LightningId, string> = {
  chainSpark: "Lightning",
  forkCapacitor: "Lightning",
};

const soundAlternativeCounts: Partial<Record<string, number>> = {
  Primary: 3,
  EnemyDestroyed: 2,
  EnemyHit: 2,
  EnemySpawn: 2,
  Boss: 1,
  ProjectileHit: 2,
  Lightning: 2,
  IceCracking: 2,
};
const maxTrackSpawnLeadSeconds = 18;
const firstTrackRowArrivalSeconds = 2 * combatTuning.globalSpeedMultiplier;
const trackRowTravelSeconds = .375 * combatTuning.globalSpeedMultiplier;
const showstopperMinimumRowWorldDistance = 38;
const dragonBreathExplosionDurationSeconds = 3;
const dragonBreathExplosionColumns = 5;
const dragonBreathFireColors = ["#ff3d00", "#ff7a00", "#ffb321", "#ffd36a"] as const;
const deepFreezeCloudDurationSeconds = 2.2;
const deepFreezeSweepColumns = 7;
const deepFreezeSnowParticlesPerRow = 3;
const deepFreezeCloudColors = ["#f7fbff", "#dff6ff", "#bfeaff"] as const;
const frozenShatterDelaySeconds = 2;
const smoothingClearDistance = 390;
const smoothingSpawnDistance = 430;
const smoothingMinimumUpcomingSeconds = 3.2;
const smoothingCooldownSeconds = 1.6;
const smoothingMaxEnemiesPerBurst = 5;
const smoothingFinalActClearDistance = 320;
const smoothingFinalActCooldownSeconds = 1.05;
const smoothingFinalActMaxEnemiesPerBurst = 7;
const smoothingSourceRowWindow = 3;
const smoothingExcludedEnemyIds = new Set<OrbId>(["tank"]);
const showstopperMusicPostReturnRampMs = 1000;

export class NeonSwarmSimulation {
  readonly mode: NeonSwarmSimulationMode;
  readonly canvas: HTMLCanvasElement;
  readonly stageElement: HTMLElement;
  readonly cameraSettings: HelicopterCameraSettings;
  readonly squad = new SquadModel();

  private renderer: NeonTopDownSceneRenderer;
  private sound?: NeonSwarmSound;
  private onRunStatus?: (status: string) => void;
  private onFinish?: (result: NeonSwarmFinishResult) => void;
  private initialShowstopperBank?: ShowstopperId | readonly ShowstopperId[];
  private playerInvincible = false;
  private animationFrame = 0;
  private activeTrack: TrackMember | null = null;
  private trackSceneId: LaneRunnerSceneId;
  private lastFrame = performance.now();
  private combatElapsed = 0;
  private combatNow = 0;
  private playerLane: Lane = 0;
  private cooldown = 0;
  private gunCooldowns: number[] = [];
  private entityIdCounter = 0;
  private trackEntities: ParsedTrackEntity[] = [];
  private nextTrackEntity = 0;
  private smoothedTrackRows = new Set<number>();
  private nextSmoothingAt = 0;
  private breaches = 0;
  private kills = 0;
  private enemies: Enemy[] = [];
  private gunSimulation = new GunSimulation();
  private gunPickups: GunPickup[] = [];
  private shieldPickups: ShieldPickup[] = [];
  private swordPickups: SwordPickup[] = [];
  private lightningPickups: LightningPickup[] = [];
  private collectedWeaponLevels = new Map<string, number>();
  private multipliers: MultiplierPickup[] = [];
  private showstopperPickups: ShowstopperPickup[] = [];
  private enemyExitEffects: ActiveEnemyExitEffect[] = [];
  private snowParticles: SnowParticle[] = [];
  private delayedSounds: DelayedSound[] = [];
  private victory: NeonVictoryExperience | null = null;
  private swordVisualTuning: Partial<SwordVisualTuning> = {};
  private pendingSwordDamage: PendingSwordDamage | null = null;
  private failureReason = "";
  private playerActors: NeonShapeActor[] = [];
  private explodingPlayers: Array<{ actor: NeonShapeActor; x: number; y: number }> = [];
  private bankedShowstoppers = new Map<ShowstopperId, number>();
  private activeShowstopper: ShowstopperDirectorState | null = null;
  private showstopperDirector = new ShowstopperDirector();
  private showstopperCameraFocusX: number | null = null;
  private showstopperCameraFocusStartX = 0;
  private showstopperLastExplosionRow = -1;
  private showstopperLastAttackProgress = -1;
  private showstopperAttackSoundPlayed = false;
  private currentMusicVolume = 1;
  private showstopperMusicReleaseElapsedMs: number | null = null;
  private showstopperMusicReleaseFrom = 1;
  private weaponHudScreenX: number | null = null;
  private weaponHudTuning: WeaponHudTuning = {
    iconScale: .22,
    spacing: 63,
    fontSize: 15,
    verticalOffset: 131,
  };
  private simulationSpeed = 1;
  private sceneBackgroundTuning: LaneRunnerSceneBackgroundTuning = { ...defaultLaneRunnerSceneBackgroundTuning };
  private sceneBackgroundProfile: LaneRunnerSceneBackgroundProfile | null = null;
  private sceneParallaxInterpretation: Partial<LaneRunnerSceneParallaxInterpretation> = {};
  private activeByFamily: {
    gun: { id: GunId; level: number } | null;
    shield: ShieldState | null;
    sword: SwordState | null;
    lightning: LightningState | null;
  } = {
    gun: null,
    shield: null,
    sword: null,
    lightning: null,
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
    this.initialShowstopperBank = options.initialShowstopperBank;
    this.playerInvincible = Boolean(options.playerInvincible);
    this.trackSceneId = options.sceneId ?? "neonHall";
    this.sceneBackgroundProfile = options.sceneBackgroundProfile ? cloneSceneBackgroundProfile(options.sceneBackgroundProfile) : null;
    this.sceneParallaxInterpretation = { ...options.sceneParallaxInterpretation };
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
    this.setMusicVolume(1);
    this.cancelShowstopperMusicRelease();
    this.activeTrack = null;
    this.lastFrame = performance.now();
    this.combatElapsed = 0;
    this.combatNow = 0;
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.nextTrackEntity = 0;
    this.smoothedTrackRows.clear();
    this.nextSmoothingAt = 0;
    this.trackEntities = [];
    this.breaches = 0;
    this.kills = 0;
    this.clearStage();
    this.activeByFamily.gun = null;
    this.activeByFamily.shield = null;
    this.activeByFamily.sword = null;
    this.activeByFamily.lightning = null;
    this.collectedWeaponLevels.clear();
    this.squad.count = 1;
    this.squad.aimOffset = 0;
    this.squad.lane = 0;
    this.squad.x = this.laneX(0);
    this.squad.targetX = this.laneX(0);
    this.playerLane = 0;
    this.weaponHudScreenX = this.weaponHudTargetScreenX(0);
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.bankedShowstoppers.clear();
    this.activeShowstopper = null;
    this.showstopperCameraFocusX = null;
    this.showstopperCameraFocusStartX = 0;
    this.showstopperLastExplosionRow = -1;
    this.showstopperLastAttackProgress = -1;
    this.showstopperAttackSoundPlayed = false;
    this.failureReason = "";
    this.victory = null;
    this.pendingSwordDamage = null;
    if (!options.silent) this.play("MenuOpen");
  }

  clearStage(): void {
    this.enemies = [];
    this.gunSimulation.clear();
    this.gunPickups = [];
    this.shieldPickups = [];
    this.swordPickups = [];
    this.lightningPickups = [];
    this.multipliers = [];
    this.showstopperPickups = [];
    this.enemyExitEffects = [];
    this.snowParticles = [];
    this.delayedSounds = [];
    this.explodingPlayers = [];
    this.victory = null;
    this.pendingSwordDamage = null;
  }

  startTrack(track: TrackMember): void {
    this.setMusicVolume(1);
    this.cancelShowstopperMusicRelease();
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
    this.activeByFamily.lightning = null;
    this.collectedWeaponLevels.clear();
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.nextTrackEntity = 0;
    this.smoothedTrackRows.clear();
    this.nextSmoothingAt = 0;
    this.trackEntities = allEntities.filter(entity => entity.id !== "player.start");
    this.breaches = 0;
    this.clearStage();
    this.squad.count = 1;
    this.playerActors = [new NeonShapeActor({ shape: swarmShapes.player })];
    this.squad.aimOffset = 0;
    this.squad.lane = startLane;
    this.squad.x = this.laneX(startLane);
    this.squad.targetX = this.laneX(startLane);
    this.weaponHudScreenX = this.weaponHudTargetScreenX(startLane);
    if (this.initialShowstopperBank) {
      const initialBank = Array.isArray(this.initialShowstopperBank) ? this.initialShowstopperBank : [this.initialShowstopperBank];
      for (const id of initialBank) this.bankShowstopper(id);
    }
    this.activeShowstopper = null;
    this.showstopperCameraFocusX = null;
    this.showstopperCameraFocusStartX = 0;
    this.showstopperLastExplosionRow = -1;
    this.showstopperLastAttackProgress = -1;
    this.showstopperAttackSoundPlayed = false;
    this.play("TrackStart");
  }

  setScene(sceneId: LaneRunnerSceneId): void {
    this.trackSceneId = sceneId;
    this.sceneBackgroundProfile = null;
    this.applySceneBackground();
  }

  setSceneBackgroundProfile(profile: LaneRunnerSceneBackgroundProfile | null): void {
    this.sceneBackgroundProfile = profile ? cloneSceneBackgroundProfile(profile) : null;
    if (profile) this.trackSceneId = profile.sceneId;
    this.applySceneBackground();
  }

  setSceneParallaxInterpretation(interpretation: Partial<LaneRunnerSceneParallaxInterpretation>): void {
    this.sceneParallaxInterpretation = {
      ...this.sceneParallaxInterpretation,
      ...interpretation,
    };
    this.syncSceneBackgroundPlacement();
  }

  setSquadLane(lane: Lane, options: { requireActiveTrack?: boolean } = {}): void {
    if (options.requireActiveTrack && !this.activeTrack) return;
    if (this.isLaneInputLocked()) return;
    if (lane !== this.squad.lane) this.play("LaneSwitch");
    this.squad.setLane(lane, value => this.laneX(value), this.combatNow);
    this.playerLane = lane;
  }

  bankShowstopper(id: ShowstopperId): void {
    this.bankedShowstoppers.set(id, this.bankedShowstopperCount(id) + 1);
  }

  triggerBankedShowstopper(id?: ShowstopperId): boolean {
    const banked = id && this.bankedShowstopperCount(id) > 0 ? id : this.nextBankedShowstopper();
    if (this.mode === "game" && !this.activeTrack || !banked || this.activeShowstopper) return false;
    this.activeShowstopper = this.showstopperDirector.createState(banked);
    this.showstopperCameraFocusStartX = laneRunnerCameraFocusX(this.canvas.width, this.squad.x);
    this.showstopperCameraFocusX = this.showstopperCameraFocusStartX;
    this.showstopperLastExplosionRow = -1;
    this.showstopperLastAttackProgress = -1;
    this.showstopperAttackSoundPlayed = false;
    this.cancelShowstopperMusicRelease();
    this.consumeBankedShowstopper(banked);
    this.play(showstopperFamily.members[this.activeShowstopper.id].soundCues.deploy);
    this.syncShowstopperMusicVolume(this.activeShowstopper);
    this.setCameraSettings(this.showstopperDirector.cameraAt(this.showstopperDirector.member(this.activeShowstopper.id), 0));
    return true;
  }

  private nextBankedShowstopper(): ShowstopperId | null {
    for (const [id, count] of this.bankedShowstoppers) {
      if (count > 0) return id;
    }
    return null;
  }

  private bankedShowstopperEntries(limit = Number.POSITIVE_INFINITY): Array<{ id: ShowstopperId; count: number }> {
    const entries: Array<{ id: ShowstopperId; count: number }> = [];
    for (const [id, count] of this.bankedShowstoppers) {
      if (count <= 0) continue;
      entries.push({ id, count });
      if (entries.length >= limit) break;
    }
    return entries;
  }

  private bankedShowstopperCount(id: ShowstopperId | null): number {
    return id ? this.bankedShowstoppers.get(id) ?? 0 : 0;
  }

  private consumeBankedShowstopper(id: ShowstopperId): void {
    const nextCount = this.bankedShowstopperCount(id) - 1;
    if (nextCount > 0) this.bankedShowstoppers.set(id, nextCount);
    else this.bankedShowstoppers.delete(id);
  }

  isLaneInputLocked(): boolean {
    return this.activeShowstopper !== null;
  }

  equipGun(gunId: GunId, level = 1): void {
    const normalizedLevel = this.normalizeWeaponLevel("gun", gunId, level);
    this.recordWeaponLevel("gun", gunId, normalizedLevel);
    this.activeByFamily.gun = { id: gunId, level: normalizedLevel };
    this.cooldown = 0;
    this.gunCooldowns = [];
    this.playPickup("PickupGun");
    this.play("WeaponReady");
  }

  equipShield(shieldId: ShieldId): void {
    const level = this.nextWeaponPickupLevel("shield", shieldId);
    const def = shieldFamily.members[shieldId];
    this.recordWeaponLevel("shield", shieldId, level);
    this.activeByFamily.shield = new ShieldState(shieldId, def.maxCharges, level);
    this.playPickup("PickupShield");
    this.play("Shield");
  }

  equipSword(swordId: SwordId): void {
    const level = this.nextWeaponPickupLevel("sword", swordId);
    this.recordWeaponLevel("sword", swordId, level);
    this.activeByFamily.sword = new SwordState(swordId, level);
    this.playPickup("PickupSword");
    this.play("WeaponReady");
  }

  equipLightning(lightningId: LightningId, level = 1): void {
    const normalizedLevel = this.normalizeWeaponLevel("lightning", lightningId, level);
    this.recordWeaponLevel("lightning", lightningId, normalizedLevel);
    this.activeByFamily.lightning = new LightningState(lightningId, normalizedLevel);
    this.playPickup("PickupGun");
    this.play("WeaponReady");
  }

  setSwordVisualTuning(tuning: Partial<SwordVisualTuning>): void {
    this.swordVisualTuning = { ...tuning };
  }

  setSimulationSpeed(speed: number): void {
    this.simulationSpeed = Number.isFinite(speed) ? Math.max(.05, Math.min(2, speed)) : 1;
  }

  setCameraSettings(settings: Partial<HelicopterCameraSettings>): void {
    Object.assign(this.cameraSettings, settings);
    this.syncSceneBackgroundPlacement();
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
    const enemy: Enemy = {
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
      planned: false,
      actor,
      dying: false,
    };
    this.completeSpawnSuppressedByShowstopper(enemy);
    this.enemies.push(enemy);
    if (!enemy.suppressed && options.playSound !== false && definition.spawnSound) this.play(definition.spawnSound);
    return id;
  }

  spawnEnemyGrid(options: {
    enemyId: OrbId;
    lanes?: readonly Lane[];
    rows: number;
    columns: number;
    rowSpacing?: number;
    columnSpacing?: number;
    firstRowOffset?: number;
    startY?: number;
    health?: number;
    speedMultiplier?: number;
    playSound?: boolean;
  }): number[] {
    const lanes = options.lanes ?? [0, 1];
    const rowSpacing = options.rowSpacing ?? 38 * this.scale();
    const columnSpacing = options.columnSpacing ?? 18 * this.scale();
    const firstRowOffset = options.firstRowOffset ?? rowSpacing;
    const startY = options.startY;
    const ids: number[] = [];
    for (const lane of lanes) {
      for (let row = 0; row < options.rows; row++) {
        for (let column = 0; column < options.columns; column++) {
          ids.push(this.spawnEnemy({
            enemyId: options.enemyId,
            lane,
            x: this.laneX(lane) + (column - (options.columns - 1) / 2) * columnSpacing,
            y: startY === undefined ? this.playerY() - firstRowOffset - row * rowSpacing : startY - row * rowSpacing,
            health: options.health,
            speedMultiplier: options.speedMultiplier,
            rowId: row,
            playSound: options.playSound,
          }));
        }
      }
    }
    return ids;
  }

  private completeSpawnSuppressedByShowstopper(enemy: Enemy): void {
    if (!this.enemySpawnIsInActiveShowstopperPath(enemy)) return;
    enemy.health = 0;
    enemy.dying = true;
    enemy.suppressed = true;
    enemy.exitEffectSpawned = true;
    enemy.actor.dispose(NeonShapeDisposal.Disappear);
    this.kills++;
  }

  private enemySpawnIsInActiveShowstopperPath(enemy: Enemy): boolean {
    const active = this.activeShowstopper;
    if (!active || active.returning) return false;
    const member = this.showstopperDirector.member(active.id);
    const attack = member.attack;
    if (attack.targeting !== "allLanesAhead") return false;
    const maxReach = this.showstopperRowWorldDistance() * (1 + Math.max(0, attack.rowsAhead));
    return this.enemyIntersectsForwardDistance(enemy, 0, maxReach);
  }

  defeatEnemyById(id: number, exit?: Parameters<typeof defeatEnemy>[3]): void {
    const enemy = this.enemies.find(item => item.id === id);
    if (enemy && !enemy.dying) this.destroyEnemy(enemy, exit);
  }

  defeatEnemiesInRowsAhead(rowsAhead: number): void {
    this.destroyEnemiesInForwardAttackSweep(rowsAhead, 1);
  }

  defeatEnemiesInRowRange(from: number, to: number): void {
    this.destroyEnemiesInForwardDistanceRange(
      from * this.showstopperRowWorldDistance(),
      (to + 1) * this.showstopperRowWorldDistance(),
    );
  }

  resolveShowstopperAttack(rowsAhead: number, progress: number): void {
    this.destroyEnemiesInForwardAttackSweep(rowsAhead, progress);
  }

  spawnGunPickup(options: { gunId: GunId; lane: Lane; level?: number; x?: number; y?: number; speedMultiplier?: number }): void {
    this.gunPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      gunId: options.gunId,
      requestedLevel: options.level === undefined ? undefined : this.normalizeWeaponLevel("gun", options.gunId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1,
      actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }),
    });
  }

  spawnShieldPickup(options: { shieldId: ShieldId; lane: Lane; level?: number; x?: number; y?: number; speedMultiplier?: number }): void {
    this.shieldPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      shieldId: options.shieldId,
      requestedLevel: options.level === undefined ? undefined : this.normalizeWeaponLevel("shield", options.shieldId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1,
    });
  }

  spawnSwordPickup(options: { swordId: SwordId; lane: Lane; level?: number; x?: number; y?: number; speedMultiplier?: number }): void {
    this.swordPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      swordId: options.swordId,
      requestedLevel: options.level === undefined ? undefined : this.normalizeWeaponLevel("sword", options.swordId, options.level),
      speedMultiplier: options.speedMultiplier ?? 1,
    });
  }

  spawnLightningPickup(options: { lightningId: LightningId; lane: Lane; level?: number; x?: number; y?: number; speedMultiplier?: number }): void {
    this.lightningPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      lightningId: options.lightningId,
      requestedLevel: options.level === undefined ? undefined : this.normalizeWeaponLevel("lightning", options.lightningId, options.level),
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

  spawnShowstopperPickup(options: { showstopperId: ShowstopperId; lane: Lane; x?: number; y?: number; speedMultiplier?: number }): void {
    this.showstopperPickups.push({
      lane: options.lane,
      x: options.x ?? this.laneX(options.lane),
      y: options.y ?? 135 * this.scale(),
      showstopperId: options.showstopperId,
      speedMultiplier: options.speedMultiplier ?? 1,
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
    const gameplayScale = this.showstopperGameplayScale(rawDelta);
    const delta = rawDelta * combatTuning.globalSpeedMultiplier * this.simulationSpeed * gameplayScale;
    this.combatElapsed += delta;
    this.combatNow = this.combatElapsed * 1000;
    this.updateWeaponHud(delta);
    for (const item of [...this.explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) this.explodingPlayers.splice(this.explodingPlayers.indexOf(item), 1);
    }
    updateEnemyExitEffects(this.enemyExitEffects, rawDelta);
    this.updateSnowParticles(rawDelta);
    this.updateDelayedSounds();

    if (this.mode === "game" && !this.activeTrack) return;
    if (this.activeTrack) {
      this.spawnTrackEntities();
      this.smoothClearedTrackSpace();
    }

    const gunStatus = this.activeByFamily.gun ? gunFamily.members[this.activeByFamily.gun.id].label : "No weapon";
    const bankedShowstopper = this.nextBankedShowstopper();
    const bankedShowstopperCount = this.bankedShowstopperCount(bankedShowstopper);
    const showstopperStatus = this.activeShowstopper
      ? `${showstopperFamily.members[this.activeShowstopper.id].label} active`
      : bankedShowstopper
        ? `${showstopperFamily.members[bankedShowstopper].label}${bankedShowstopperCount > 1 ? ` x${bankedShowstopperCount}` : ""} banked`
        : "";
    const shieldDef = this.activeByFamily.shield ? shieldFamily.members[this.activeByFamily.shield.shieldId] : null;
    const swordDef = this.activeByFamily.sword ? swordFamily.members[this.activeByFamily.sword.swordId] : null;
    if (this.activeTrack) {
      this.onRunStatus?.(`${gunStatus}${shieldDef ? ` · ${shieldDef.label}` : ""}${swordDef ? ` · ${swordDef.label}` : ""}${showstopperStatus ? ` · ${showstopperStatus}` : ""}`);
    }

    const laneEnemies = this.enemies.filter(enemy => enemy.lane === this.squad.lane && !enemy.dying);
    const colOffsets = this.squad.frontRowColumnOffsets(this.scale());
    const offset = selectAutoAimOffset(laneEnemies, this.laneX(this.squad.lane), colOffsets, this.squad.aimOffset);
    this.squad.autoAim(offset, this.canvas.width * .22, lane => this.laneX(lane));
    this.squad.update(delta);
    this.stageElement.dataset.squadLane = String(this.squad.lane);
    this.syncSceneBackgroundPlacement();
    this.syncPlayerActors();
    this.updateShowstopper(rawDelta);
    this.updateShowstopperMusicRelease(rawDelta);

    if (this.activeByFamily.gun) {
      advanceCooldownSlots(this.gunCooldowns, delta);
      this.fire();
      if (this.gunSimulation.updateFiring(this.combatNow) > 0) this.playGunFire(this.activeByFamily.gun.id);
    }

    this.updateLightning(delta);
    this.updateProjectiles(delta);
    this.updateNearPlayerEffects(delta, shieldDef, swordDef);
    this.updateEnemies(delta, shieldDef);
    this.updatePickups(delta);

    if (this.activeTrack && this.trackResolved()) this.finish(this.breaches === 0);
  }

  render(now = this.combatNow): void {
    const primitives = laneRunnerScenePrimitives(this.trackSceneId, this.canvas.width, this.canvas.height, now);
    const s = this.scale();
    const playerPoints = this.squad.points(this.playerY(), s);
    const helicopterViewport = helicopterViewportFor(this.canvas.width, this.canvas.height, this.playerY(), this.currentCameraFocusX());

    for (const point of playerPoints) {
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
    primitives.push(...this.snowParticlePrimitives());
    if (this.activeByFamily.lightning) primitives.push(...lightningVisuals(this.activeByFamily.lightning.activeChains, now));
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
        projectScreenOffset: (x, y, offsetX, offsetY) => {
          const center = projectHelicopterPoint(x, y, this.cameraSettings, helicopterViewport);
          return unprojectHelicopterScreenPoint(center.x + offsetX * center.scale, center.y + offsetY * center.scale, this.cameraSettings, helicopterViewport);
        },
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
        slashes: liveSword.activeSlashes,
        dockSide: liveSword.previousSlashSide,
        dockSides: liveSword.previousSlashSides,
        points: playerPoints,
        tuning: this.swordVisualTuning,
        scale: s,
        visible: true,
      });
      primitives.push(...scene.primitives);
      shapeInstances.push(...scene.shapes);
    }

    for (const pickup of this.shieldPickups) {
      const definition = shieldFamily.members[pickup.shieldId];
      const level = this.pickupGrantLevel("shield", pickup.shieldId, pickup.requestedLevel);
      shapeInstances.push({
        ...shieldPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s,
        }),
        label: shapeLabel(`${definition.label}: L${level}`, "above", 10, 7),
      });
    }
    for (const pickup of this.swordPickups) {
      const definition = swordFamily.members[pickup.swordId];
      const level = this.pickupGrantLevel("sword", pickup.swordId, pickup.requestedLevel);
      shapeInstances.push({
        ...swordPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.color],
        now,
        scale: s,
        }),
        label: shapeLabel(`${definition.label}: L${level}`, "above", 10, 7),
      });
    }
    for (const pickup of this.lightningPickups) {
      const definition = lightningFamily.members[pickup.lightningId];
      const level = this.pickupGrantLevel("lightning", pickup.lightningId, pickup.requestedLevel);
      shapeInstances.push({
        ...lightningPickupVisual({
        x: pickup.x,
        y: pickup.y,
        color: neonPalette[definition.visualIdentity.color],
        now,
        scale: s,
        }),
        label: shapeLabel(`${definition.label}: L${level}`, "above", 10, 7),
      });
    }
    for (const pickup of this.showstopperPickups) {
      const definition = showstopperFamily.members[pickup.showstopperId];
      shapeInstances.push({
        ...showstopperPickupVisual({
          x: pickup.x,
          y: pickup.y,
          color: neonPalette[definition.pickupColor],
          now,
          scale: s,
        }),
        label: shapeLabel(definition.label, "above", 10, 7),
      });
    }

    const playerSize = 14;
    for (const [index, point] of playerPoints.entries()) {
      const actor = this.playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, playerOrientation(this.cameraSettings, helicopterViewport, point.x, point.y, now, index)));
    }
    for (const item of this.explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    shapeInstances.push(...this.weaponHudShapes(now, s, helicopterViewport));

    const enemyHealthBars: Parameters<typeof projectedEnemyHealthBarPrimitives>[0][number][] = [];
    for (const enemy of this.enemies) {
      if (enemy.suppressed) continue;
      const definition = this.enemyDefinition(enemy);
      const size = 18 * definition.columnSpan;
      enemyHealthBars.push({ enemyId: enemy.enemyId, x: enemy.x, y: enemy.y, health: enemy.health, maxHealth: enemy.maxHealth, size, scale: s });
      shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, size, enemyOrientation(this.cameraSettings, helicopterViewport, enemy.x, enemy.y, now, enemy.rowId)));
    }
    for (const pickup of this.gunPickups) {
      const gun = gunFamily.members[pickup.gunId];
      const level = this.pickupGrantLevel("gun", pickup.gunId, pickup.requestedLevel);
      pickup.actor.label = shapeLabel(`${gun.label}: L${level}`, "above", 10, 7);
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
    const bankedShowstopper = this.nextBankedShowstopper();
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
        shieldLevel: this.activeByFamily.shield?.level ?? null,
        sword: this.activeByFamily.sword ? { id: this.activeByFamily.sword.swordId, level: this.activeByFamily.sword.level } : null,
        lightning: this.activeByFamily.lightning ? { id: this.activeByFamily.lightning.lightningId, level: this.activeByFamily.lightning.level } : null,
        showstopper: this.activeShowstopper?.id ?? bankedShowstopper,
        showstopperCount: this.activeShowstopper ? 0 : this.bankedShowstopperCount(bankedShowstopper),
        showstoppers: this.activeShowstopper ? [] : this.bankedShowstopperEntries(2),
      },
      enemies: this.enemies
        .filter(enemy => !enemy.suppressed)
        .map(enemy => ({
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
        lightnings: this.lightningPickups.length,
        multipliers: this.multipliers.length,
        showstoppers: this.showstopperPickups.length,
      },
      kills: this.kills,
    };
  }

  destroy(): void {
    this.setMusicVolume(1);
    this.cancelShowstopperMusicRelease();
    this.stopLoop();
    this.renderer.destroy();
  }

  private spawnTrackEntities(): void {
    if (!this.activeTrack) return;
    while (
      this.nextTrackEntity < this.trackEntities.length &&
      this.entityArrivalSeconds(this.trackEntities[this.nextTrackEntity]) <= this.combatElapsed + this.spawnLeadSeconds(this.trackEntities[this.nextTrackEntity])
    ) {
      const entity = this.trackEntities[this.nextTrackEntity++];
      const lane: Lane = entity.side === "left" ? 0 : 1;
      const enemyDefinitionEntry = enemyDefinitionFromTrackId(entity.id);
      if (enemyDefinitionEntry) {
        this.spawnTrackEnemy(entity, lane, this.enemySpawnY(entity), entity.distanceFromPlayer);
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        this.spawnGunPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), gunId: candidate as GunId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.shield.")) {
        const candidate = entity.id.slice("pickup.weapon.shield.".length);
        if (!(candidate in shieldFamily.members)) throw new Error(`Track uses unknown shield id "${entity.id}".`);
        this.spawnShieldPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), shieldId: candidate as ShieldId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.sword.")) {
        const candidate = entity.id.slice("pickup.weapon.sword.".length);
        if (!(candidate in swordFamily.members)) throw new Error(`Track uses unknown sword id "${entity.id}".`);
        this.spawnSwordPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), swordId: candidate as SwordId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.weapon.lightning.")) {
        const candidate = entity.id.slice("pickup.weapon.lightning.".length);
        if (!(candidate in lightningFamily.members)) throw new Error(`Track uses unknown lightning id "${entity.id}".`);
        this.spawnLightningPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), lightningId: candidate as LightningId, speedMultiplier: entity.speedMultiplier });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        this.spawnMultiplierPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), speedMultiplier: entity.speedMultiplier });
      } else if (entity.id.startsWith("pickup.showstopper.")) {
        const candidate = entity.id.slice("pickup.showstopper.".length);
        if (!(candidate in showstopperFamily.members)) throw new Error(`Track uses unknown showstopper id "${entity.id}".`);
        this.spawnShowstopperPickup({ lane, x: this.entityX(entity), y: this.pickupSpawnY(entity), showstopperId: candidate as ShowstopperId, speedMultiplier: entity.speedMultiplier });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }
  }

  private smoothClearedTrackSpace(): void {
    if (!this.activeTrack || this.mode !== "game" || this.combatElapsed < this.nextSmoothingAt) return;
    const finalAct = this.trackEntities.length > 0 && this.nextTrackEntity / this.trackEntities.length >= .72;
    const clearDistance = finalAct ? smoothingFinalActClearDistance : smoothingClearDistance;
    const liveEnemyY = this.enemies
      .filter(enemy => !enemy.dying)
      .map(enemy => enemy.y);
    const closestEnemyY = liveEnemyY.length > 0 ? Math.max(...liveEnemyY) : Number.NEGATIVE_INFINITY;
    if (this.playerY() - closestEnemyY < clearDistance) return;

    const sourceEnemies = this.nextUpcomingEnemiesForSmoothing(finalAct);
    if (sourceEnemies.length === 0) return;
    const [first] = sourceEnemies;
    const arrivalGap = this.entityArrivalSeconds(first) - this.combatElapsed;
    if (!finalAct && arrivalGap < smoothingMinimumUpcomingSeconds) return;

    const spawnY = this.playerY() - smoothingSpawnDistance * this.scale();
    sourceEnemies.slice(0, finalAct ? smoothingFinalActMaxEnemiesPerBurst : smoothingMaxEnemiesPerBurst).forEach((entity, index) => {
      this.spawnTrackEnemy(entity, entity.side === "left" ? 0 : 1, spawnY - index * 28 * this.scale(), -100000 - entity.rowIndex);
      this.smoothedTrackRows.add(entity.rowIndex);
    });
    this.nextSmoothingAt = this.combatElapsed + (finalAct ? smoothingFinalActCooldownSeconds : smoothingCooldownSeconds);
  }

  private nextUpcomingEnemiesForSmoothing(finalAct: boolean): ParsedTrackEntity[] {
    const enemies: ParsedTrackEntity[] = [];
    for (let index = this.nextTrackEntity; index < this.trackEntities.length; index++) {
      const candidate = this.trackEntities[index];
      if (!enemyDefinitionFromTrackId(candidate.id) || this.smoothedTrackRows.has(candidate.rowIndex)) continue;
      const maxRowIndex = candidate.rowIndex + smoothingSourceRowWindow;
      for (let sourceIndex = index; sourceIndex < this.trackEntities.length && enemies.length < smoothingMaxEnemiesPerBurst; sourceIndex++) {
        const entity = this.trackEntities[sourceIndex];
        if (entity.rowIndex > maxRowIndex) break;
        const enemyDefinition = enemyDefinitionFromTrackId(entity.id);
        if (this.smoothedTrackRows.has(entity.rowIndex) || !enemyDefinition || smoothingExcludedEnemyIds.has(enemyDefinition.enemyId)) continue;
        enemies.push(entity);
      }
      break;
    }
    if (enemies.length === 0 && finalAct && this.enemies.some(enemy => enemy.planned && !enemy.dying)) return this.recentEnemiesForSmoothing();
    return enemies;
  }

  private recentEnemiesForSmoothing(): ParsedTrackEntity[] {
    const enemies: ParsedTrackEntity[] = [];
    const seenRows = new Set<number>();
    for (let index = this.nextTrackEntity - 1; index >= 0 && enemies.length < smoothingFinalActMaxEnemiesPerBurst; index--) {
      const entity = this.trackEntities[index];
      const enemyDefinition = enemyDefinitionFromTrackId(entity.id);
      if (!enemyDefinition || smoothingExcludedEnemyIds.has(enemyDefinition.enemyId) || seenRows.has(entity.rowIndex)) continue;
      const row = this.trackEntities.filter(candidate => candidate.rowIndex === entity.rowIndex && enemyDefinitionFromTrackId(candidate.id));
      for (const rowEnemy of row) {
        const rowEnemyDefinition = enemyDefinitionFromTrackId(rowEnemy.id);
        if (!rowEnemyDefinition || smoothingExcludedEnemyIds.has(rowEnemyDefinition.enemyId)) continue;
        enemies.push(rowEnemy);
        if (enemies.length >= smoothingFinalActMaxEnemiesPerBurst) break;
      }
      seenRows.add(entity.rowIndex);
    }
    return enemies;
  }

  private spawnTrackEnemy(entity: ParsedTrackEntity, lane: Lane, y: number, rowId: number): void {
    if (!this.activeTrack) return;
    const enemyDefinitionEntry = enemyDefinitionFromTrackId(entity.id);
    if (!enemyDefinitionEntry) return;
    const { enemyId, definition } = enemyDefinitionEntry;
    const enemy: Enemy = {
      id: ++this.entityIdCounter,
      enemyType: enemyId,
      enemyId,
      lane,
      x: this.entityX(entity),
      y,
      health: definition.health * this.activeTrack.definition.balance.enemyHp,
      maxHealth: definition.health * this.activeTrack.definition.balance.enemyHp,
      speedMultiplier: entity.speedMultiplier,
      rowId,
      planned: rowId >= 0,
      actor: createEnemyActor(enemyId),
      dying: false,
    };
    this.completeSpawnSuppressedByShowstopper(enemy);
    this.enemies.push(enemy);
    if (!enemy.suppressed && definition.spawnSound) this.play(definition.spawnSound);
  }

  private trackResolved(): boolean {
    return this.nextTrackEntity >= this.trackEntities.length
      && this.enemies.length === 0
      && this.gunPickups.length === 0
      && this.shieldPickups.length === 0
      && this.swordPickups.length === 0
      && this.lightningPickups.length === 0
      && this.multipliers.length === 0;
  }

  private fire(): void {
    if (!this.activeByFamily.gun) return;
    const { id: gunId, level: gunLevel } = this.activeByFamily.gun;
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find(item => item.level === gunLevel) ?? gun.levels[0];
    const points = this.squad.points(this.playerY(), this.scale()).map(point => ({ x: point.x, y: this.playerY() - 20 * this.scale() }));
    this.syncGunCooldowns(points.length);
    const claimedTargetIds = new Set<number>();
    const cycleSeconds = 1 / tuning.fireRatePerSecond;
    for (const [index, point] of points.entries()) {
      if (this.gunCooldowns[index] > 0) continue;
      const target = this.selectGunTarget(point.x, claimedTargetIds);
      if (!target) continue;
      claimedTargetIds.add(target.id);
      this.gunSimulation.fire(gun, tuning, this.playerLane, [{ ...point, aimX: target.x, aimY: target.y }], this.combatNow, this.scale());
      this.gunCooldowns[index] = cycleSeconds;
    }
    this.cooldown = this.gunCooldowns.length > 0 ? Math.min(...this.gunCooldowns) : 0;
  }

  private syncGunCooldowns(count: number): void {
    syncSlotArray(this.gunCooldowns, count, () => 0);
  }

  private selectGunTarget(originX: number, claimedTargetIds: ReadonlySet<number>): Enemy | null {
    const nativeReach = 42 * this.scale();
    const assistReach = 96 * this.scale();
    const liveLaneEnemies = this.enemies.filter(enemy => !enemy.dying && enemy.lane === this.playerLane && enemy.y < this.playerY());
    const nativeTarget = selectBestUnclaimed(
      liveLaneEnemies,
      claimedTargetIds,
      enemy => enemy.id,
      enemy => this.scoreGunNativeTarget(enemy, originX, nativeReach),
    );
    const pressureTarget = selectBestUnclaimed(
      liveLaneEnemies,
      new Set(),
      enemy => enemy.id,
      enemy => this.scoreGunPressureTarget(enemy, originX, assistReach, claimedTargetIds.has(enemy.id)),
    );
    if (!nativeTarget) return pressureTarget;
    if (!pressureTarget) return nativeTarget;

    const nativeDistance = this.playerY() - nativeTarget.y;
    const pressureDistance = this.playerY() - pressureTarget.y;
    return pressureDistance + 80 * this.scale() < nativeDistance ? pressureTarget : nativeTarget;
  }

  private scoreGunNativeTarget(enemy: Enemy, originX: number, horizontalReach: number): number | null {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    return dx * 1000 + dy;
  }

  private scoreGunPressureTarget(enemy: Enemy, originX: number, horizontalReach: number, alreadyClaimed: boolean): number | null {
    const dx = Math.abs(enemy.x - originX);
    if (dx > horizontalReach + this.enemyDefinition(enemy).radius * this.scale()) return null;
    const dy = this.playerY() - enemy.y;
    const columnPressure = this.enemies.filter(other =>
      !other.dying &&
      other.lane === enemy.lane &&
      other.y < this.playerY() &&
      Math.abs(other.x - enemy.x) <= 18 * this.scale() &&
      Math.abs(other.y - enemy.y) <= 180 * this.scale()
    ).length;
    const claimedPenalty = alreadyClaimed ? 450 : 0;
    const pressureBonus = Math.min(4, columnPressure) * 70 * this.scale();
    return claimedPenalty + dx * 7 + dy - pressureBonus;
  }

  private updateProjectiles(delta: number): void {
    this.gunSimulation.updateProjectiles(delta, this.combatNow, this.liveEnemies().map(enemy => Object.assign(enemy, {
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
        if (result.deathSound) this.play(result.deathSound);
      } else {
        this.play("ProjectileHit");
        this.play("EnemyHit");
      }
    });
  }

  private updateLightning(delta: number): void {
    const state = this.activeByFamily.lightning;
    if (!state) return;
    const member = lightningFamily.members[state.lightningId];
    const level = member.levels.find(item => item.level === state.level) ?? member.levels[0];
    const result = tickLightning(state, member, level, this.liveEnemies(), {
      x: this.squad.x,
      y: this.playerY() - 22 * this.scale(),
      lane: this.playerLane,
    }, this.combatNow, delta);
    if (!result.triggered) return;
    this.play(lightningFireSoundIds[state.lightningId]);
    let impacted = false;
    for (const hit of result.hits) {
      const enemy = this.enemies.find(item => item.id === hit.enemyId);
      if (!enemy || enemy.dying) continue;
      impacted = true;
      const resolved = resolveEnemyDamage({
        enemy,
        effects: this.enemyExitEffects,
        damage: hit.damage,
        impactMagnitude: hit.damage,
        color: neonPalette[member.visualIdentity.color],
      });
      if (resolved.killed) {
        this.kills++;
        if (resolved.deathSound) this.play(resolved.deathSound);
      }
    }
    if (impacted) this.play("EnemyHit");
  }

  private updateNearPlayerEffects(delta: number, shieldDef: (typeof shieldFamily.members)[ShieldId] | null, swordDef: SwordMember | null): void {
    const px = this.squad.x;
    const py = this.playerY();
    const liveEnemies = this.liveEnemies();
    if (this.activeByFamily.shield && shieldDef) {
      const shieldState = this.activeByFamily.shield;
      const shieldThreats = queryNearbyThreats(liveEnemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: shieldDef.radius * this.scale(),
        includeAdjacentLanes: false,
        purpose: "shield",
      });

      const shieldResult = tickShield(shieldState, shieldDef, shieldThreats, px, py, this.combatNow, delta);
      if (shieldResult.pushEnemyIds.length > 0) {
        for (const enemy of this.enemies) {
          if (enemy.dying || !shieldResult.pushEnemyIds.includes(enemy.id)) continue;
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
      const swordQueryRange = swordDef.rowReach
        ? Math.max(this.canvas.width, swordDef.range * this.scale())
        : swordDef.range * this.scale();
      const swordThreats = queryNearbyThreats(liveEnemies, {
        origin: { x: px, y: py },
        lane: this.playerLane,
        range: swordQueryRange,
        includeAdjacentLanes: (swordDef.targetingMode as SwordTargetingMode) === "nearestInEitherLane",
        maxTargets: swordDef.rowReach ? undefined : swordDef.maxTargets,
        purpose: "sword",
      }).filter(threat => !swordDef.rowReach || Math.abs(threat.target.y - py) <= swordDef.range * this.scale());
      const swordResult = tickSword(swordState, swordDef, swordThreats, px, py, this.combatNow, delta, neonPalette[swordDef.color], swordVisualDurationMs(this.swordVisualTuning), this.squad.count);
      if (swordResult.swingTriggered && swordResult.hitEnemyIds.length > 0) {
        this.applyPendingSwordDamage({ force: true });
        this.play("SwordSwingWhoosh");
        this.pendingSwordDamage = {
          hits: this.scheduleSwordHits(swordResult.hitTargets, swordState.previousSlashSide),
          damage: swordResult.damage,
          color: neonPalette[swordDef.color],
          impactSoundId: swordImpactSoundIds[swordState.swordId],
        };
      }
      this.applyPendingSwordDamage();
    }
  }

  private scheduleSwordHits(targets: Array<{ id: number; x: number; y: number }>, side: -1 | 1): Array<{ enemyId: number; dueAt: number }> {
    if (targets.length === 0) return [];
    const duration = swordVisualDurationMs(this.swordVisualTuning);
    const xs = targets.map(target => target.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const span = Math.max(1, maxX - minX);
    const leftToRight = side === 1;
    return targets.map(target => {
      const laneProgress = leftToRight
        ? (target.x - minX) / span
        : (maxX - target.x) / span;
      return {
        enemyId: target.id,
        dueAt: this.combatNow + duration * this.swordStrikeProgress(laneProgress),
      };
    });
  }

  private updateShowstopper(deltaSeconds: number): void {
    const active = this.activeShowstopper;
    if (!active) return;
    const member = this.showstopperDirector.member(active.id);
    const previousElapsedMs = active.elapsedMs;
    const step = this.showstopperDirector.step(active, deltaSeconds * 1000, this.firstVisibleEnemyRow());
    if (step.state) this.syncShowstopperMusicVolume(step.state, member);
    else if (!step.resolved) this.syncShowstopperMusicVolume(null);
    this.updateShowstopperCameraFocus(active);
    this.setCameraSettings(step.camera);
    if (!this.showstopperAttackSoundPlayed && step.state && !step.state.returning && this.crossedShowstopperEvent(member.timelineEvents, "startAttack", previousElapsedMs, step.state.elapsedMs)) {
      this.showstopperAttackSoundPlayed = true;
      this.play(member.soundCues.attackStart);
    }
    if (step.attackWindow) {
      this.resolveShowstopperAttackSweep(member, step.attackWindow.rowsAhead, step.attackWindow.progress);
    } else if (step.clearRows) {
      this.destroyEnemiesInForwardDistanceRange(
        step.clearRows.from * this.showstopperRowWorldDistance(),
        (step.clearRows.to + 1) * this.showstopperRowWorldDistance(),
      );
    }
    this.activeShowstopper = step.state;
    if (step.resolved) {
      this.startShowstopperMusicRelease();
      this.showstopperCameraFocusX = null;
      this.showstopperLastExplosionRow = -1;
      this.showstopperLastAttackProgress = -1;
      this.showstopperAttackSoundPlayed = false;
      const resolveSound = this.showstopperDirector.member(step.resolved).soundCues.resolve;
      if (resolveSound) this.play(resolveSound);
    }
  }

  private crossedShowstopperEvent(events: ShowstopperMember["timelineEvents"], type: ShowstopperMember["timelineEvents"][number]["type"], previousElapsedMs: number, elapsedMs: number): boolean {
    return events.some(event => event.type === type && previousElapsedMs < event.atMs && elapsedMs >= event.atMs);
  }

  private updateShowstopperCameraFocus(state: ShowstopperDirectorState): void {
    const member = this.showstopperDirector.member(state.id);
    const centeredFocusX = this.canvas.width / 2;
    if (member.centerCameraMs <= 0 || state.centerElapsedMs >= member.centerCameraMs) {
      this.showstopperCameraFocusX = centeredFocusX;
      return;
    }
    const progress = this.easeInOut(state.centerElapsedMs / Math.max(1, member.centerCameraMs));
    this.showstopperCameraFocusX = this.lerp(this.showstopperCameraFocusStartX, centeredFocusX, progress);
  }

  private showstopperGameplayScale(deltaSeconds: number): number {
    const active = this.activeShowstopper;
    if (!active) return 1;
    const member = this.showstopperDirector.member(active.id);
    if (active.centerElapsedMs < member.centerCameraMs) return 1;
    const projectedElapsedMs = active.returning
      ? active.elapsedMs - deltaSeconds * 1000
      : active.elapsedMs + deltaSeconds * 1000;
    return this.showstopperDirector.gameplayScaleForState(active, member, projectedElapsedMs);
  }

  private currentCameraFocusX(): number {
    return this.showstopperCameraFocusX ?? laneRunnerCameraFocusX(this.canvas.width, this.squad.x);
  }

  private syncShowstopperMusicVolume(state: ShowstopperDirectorState | null, member?: ShowstopperMember): void {
    if (!state) {
      this.setMusicVolume(1);
      return;
    }
    const activeMember = member ?? this.showstopperDirector.member(state.id);
    const duckVolume = activeMember.musicDuckVolume;
    const attackStartMs = activeMember.attack.startMs;
    const attackEndMs = activeMember.attack.endMs;
    const rampDownDurationMs = Math.max(1, activeMember.centerCameraMs + attackStartMs);
    if (!state.returning && state.elapsedMs <= attackStartMs) {
      const progress = Math.max(0, Math.min(1, (state.centerElapsedMs + state.elapsedMs) / rampDownDurationMs));
      this.setMusicVolume(this.lerp(1, duckVolume, this.easeIn(progress)));
      return;
    }
    const returnEndMs = activeMember.durationMs + activeMember.returnCameraMs + showstopperMusicPostReturnRampMs;
    const musicClockMs = state.returning
      ? activeMember.durationMs + state.returnElapsedMs
      : state.elapsedMs;
    if (musicClockMs >= attackEndMs) {
      const progress = Math.max(0, Math.min(1, (musicClockMs - attackEndMs) / Math.max(1, returnEndMs - attackEndMs)));
      this.setMusicVolume(this.lerp(duckVolume, 1, this.easeInOut(progress)));
      return;
    }
    this.setMusicVolume(duckVolume);
  }

  private startShowstopperMusicRelease(): void {
    this.showstopperMusicReleaseElapsedMs = 0;
    this.showstopperMusicReleaseFrom = this.currentMusicVolume;
  }

  private cancelShowstopperMusicRelease(): void {
    this.showstopperMusicReleaseElapsedMs = null;
    this.showstopperMusicReleaseFrom = 1;
  }

  private updateShowstopperMusicRelease(deltaSeconds: number): void {
    if (this.showstopperMusicReleaseElapsedMs === null || this.activeShowstopper) return;
    this.showstopperMusicReleaseElapsedMs += deltaSeconds * 1000;
    const progress = Math.max(0, Math.min(1, this.showstopperMusicReleaseElapsedMs / showstopperMusicPostReturnRampMs));
    this.setMusicVolume(this.lerp(this.showstopperMusicReleaseFrom, 1, this.easeInOut(progress)));
    if (progress >= 1) this.cancelShowstopperMusicRelease();
  }

  private easeInOut(progress: number): number {
    const t = Math.max(0, Math.min(1, progress));
    return t * t * (3 - 2 * t);
  }

  private easeIn(progress: number): number {
    const t = Math.max(0, Math.min(1, progress));
    return t * t;
  }

  private easeOut(progress: number): number {
    const t = Math.max(0, Math.min(1, progress));
    return 1 - (1 - t) * (1 - t);
  }

  private lerp(from: number, to: number, progress: number): number {
    return from + (to - from) * progress;
  }

  private firstVisibleEnemyRow(): number | null {
    return this.enemies.some(enemy => this.enemyIsVisibleAhead(enemy)) ? 0 : null;
  }

  private destroyEnemiesInForwardAttackSweep(rowsAhead: number, progress: number): void {
    const rowDistance = this.showstopperRowWorldDistance();
    const clampedProgress = Math.max(0, Math.min(1, progress));
    if (clampedProgress < this.showstopperLastAttackProgress) this.showstopperLastExplosionRow = -1;
    this.showstopperLastAttackProgress = clampedProgress;
    const reach = rowDistance * (1 + Math.max(0, rowsAhead) * clampedProgress);
    this.spawnDragonBreathExplosionRows(reach, rowDistance);
    this.destroyEnemiesInForwardDistanceRange(0, reach, { visual: "burn", sound: "none" });
  }

  private resolveShowstopperAttackSweep(member: ShowstopperMember, rowsAhead: number, progress: number): void {
    if (member.attack.effect === "deepFreeze") {
      this.destroyEnemiesInLateralFreezeSweep(rowsAhead, progress);
      return;
    }
    this.destroyEnemiesInForwardAttackSweep(rowsAhead, progress);
  }

  private destroyEnemiesInLateralFreezeSweep(rowsAhead: number, progress: number): void {
    const rowDistance = this.showstopperRowWorldDistance();
    const clampedProgress = Math.max(0, Math.min(1, progress));
    const previousProgress = Math.max(0, this.showstopperLastAttackProgress);
    if (clampedProgress < this.showstopperLastAttackProgress) this.showstopperLastExplosionRow = -1;
    this.showstopperLastAttackProgress = clampedProgress;
    this.spawnDeepFreezeSweepColumns(previousProgress, clampedProgress, rowsAhead, rowDistance);

    const bounds = this.deepFreezeSweepBounds(previousProgress, clampedProgress);
    const maxDistance = rowDistance * (1 + Math.max(0, rowsAhead));
    for (const enemy of [...this.enemies]) {
      if (!this.enemyIntersectsForwardDistance(enemy, 0, maxDistance)) continue;
      const radius = this.enemyDefinition(enemy).radius * this.scale();
      if (enemy.x + radius < bounds.left || enemy.x - radius > bounds.right) continue;
      this.destroyEnemy(enemy, { visual: "freeze", sound: "FrozenShatter" });
    }
  }

  private deepFreezeSweepBounds(fromProgress: number, toProgress: number): { left: number; right: number } {
    const margin = 44 * this.scale();
    const minX = this.laneX(0) - 64 * this.scale();
    const maxX = this.laneX(1) + 64 * this.scale();
    const fromX = this.lerp(minX, maxX, fromProgress);
    const toX = this.lerp(minX, maxX, toProgress);
    return {
      left: Math.min(fromX, toX) - margin,
      right: Math.max(fromX, toX) + margin,
    };
  }

  private spawnDeepFreezeSweepColumns(fromProgress: number, toProgress: number, rowsAhead: number, rowDistance: number): void {
    const columns = Math.max(3, deepFreezeSweepColumns);
    const targetColumn = Math.max(0, Math.min(columns - 1, Math.floor(toProgress * columns)));
    if (targetColumn <= this.showstopperLastExplosionRow) return;
    for (let column = this.showstopperLastExplosionRow + 1; column <= targetColumn; column++) {
      const progress = columns === 1 ? .5 : Math.max(fromProgress, Math.min(1, column / (columns - 1)));
      this.spawnDeepFreezeSweepColumn(column, progress, rowsAhead, rowDistance);
    }
    this.showstopperLastExplosionRow = targetColumn;
  }

  private spawnDeepFreezeSweepColumn(column: number, progress: number, rowsAhead: number, rowDistance: number): void {
    const minX = this.laneX(0) - 64 * this.scale();
    const maxX = this.laneX(1) + 64 * this.scale();
    const x = this.lerp(minX, maxX, progress);
    const windDirection = 1;
    const maxRow = Math.max(0, rowsAhead);
    for (let row = 0; row <= maxRow; row++) {
      const y = this.playerY() - row * rowDistance;
      const color = deepFreezeCloudColors[(row + column) % deepFreezeCloudColors.length];
      this.enemyExitEffects.push(createEnemyExitEffect({
        enemyType: "basicOrb",
        x: x + Math.sin((row + column) * 1.3) * 7 * this.scale(),
        y: y + Math.cos((row - column) * 1.1) * 5 * this.scale(),
        color,
        seed: 1900 + column * 47 + row * 19,
        durationSeconds: deepFreezeCloudDurationSeconds,
        size: 18 * this.scale(),
        glow: 10,
        coreIntensity: 1.1,
        rimIntensity: .75,
        opacity: .74,
      }));
      this.spawnDeepFreezeSnow(x, y, windDirection, column, row);
    }
  }

  private spawnDeepFreezeSnow(x: number, y: number, windDirection: number, column: number, row: number): void {
    for (let index = 0; index < deepFreezeSnowParticlesPerRow; index++) {
      const seed = column * 113 + row * 37 + index * 17;
      const jitterX = Math.sin(seed * 12.9898) * 18 * this.scale();
      const jitterY = Math.cos(seed * 78.233) * 13 * this.scale();
      this.snowParticles.push({
        x: x + jitterX,
        y: y + jitterY,
        velocityX: windDirection * (34 + (seed % 11) * 4) * this.scale(),
        velocityY: (24 + (seed % 7) * 5) * this.scale(),
        age: 0,
        duration: 1.5 + (seed % 5) * .08,
        size: (2.2 + (seed % 4) * .45) * this.scale(),
        seed,
      });
    }
  }

  private updateSnowParticles(deltaSeconds: number): void {
    for (const particle of [...this.snowParticles]) {
      particle.age += deltaSeconds;
      particle.x += particle.velocityX * deltaSeconds;
      particle.y += particle.velocityY * deltaSeconds;
      if (particle.age >= particle.duration) this.snowParticles.splice(this.snowParticles.indexOf(particle), 1);
    }
  }

  private snowParticlePrimitives(): NeonPrimitive[] {
    return this.snowParticles.map(particle => {
      const progress = Math.max(0, Math.min(1, particle.age / particle.duration));
      const fade = Math.sin(progress * Math.PI);
      return {
        x: particle.x,
        y: particle.y,
        width: particle.size * (1.8 + fade),
        height: particle.size,
        color: "#f7fbff",
        secondaryColor: "#bfeaff",
        glow: .35,
        intensity: .45 + fade * .65,
        rotation: particle.seed * .13 + progress * Math.PI,
        shape: "spark",
      };
    });
  }

  private spawnDragonBreathExplosionRows(reach: number, rowDistance: number): void {
    const targetRow = Math.max(0, Math.floor(reach / Math.max(1, rowDistance)));
    if (targetRow <= this.showstopperLastExplosionRow) return;
    for (let row = this.showstopperLastExplosionRow + 1; row <= targetRow; row++) {
      this.spawnDragonBreathExplosionRow(row, rowDistance);
    }
    this.showstopperLastExplosionRow = targetRow;
  }

  private spawnDragonBreathExplosionRow(row: number, rowDistance: number): void {
    const left = this.laneX(0) - 48 * this.scale();
    const right = this.laneX(1) + 48 * this.scale();
    const y = this.playerY() - row * rowDistance;
    const columns = Math.max(3, dragonBreathExplosionColumns);
    for (let index = 0; index < columns; index++) {
      const progress = columns === 1 ? .5 : index / (columns - 1);
      const x = this.lerp(left, right, progress);
      const color = dragonBreathFireColors[(row + index) % dragonBreathFireColors.length];
      this.enemyExitEffects.push(createEnemyExitEffect({
        enemyType: "basicOrb",
        x,
        y: y + Math.sin((row + index) * 1.7) * 5 * this.scale(),
        color,
        seed: row * 31 + index * 17,
        durationSeconds: dragonBreathExplosionDurationSeconds,
        size: 16 * this.scale(),
        glow: 18,
        coreIntensity: 1.8,
        rimIntensity: 1.25,
        opacity: .9,
      }));
    }
  }

  private destroyEnemiesInForwardDistanceRange(fromDistance: number, toDistance: number, exit?: Parameters<typeof defeatEnemy>[3]): void {
    const minDistance = Math.max(0, Math.min(fromDistance, toDistance));
    const maxDistance = Math.max(minDistance, Math.max(fromDistance, toDistance));
    for (const enemy of [...this.enemies]) {
      if (!this.enemyIntersectsForwardDistance(enemy, minDistance, maxDistance)) continue;
      this.destroyEnemy(enemy, exit);
    }
  }

  private enemyIntersectsForwardDistance(enemy: Enemy, minDistance: number, maxDistance: number): boolean {
    if (enemy.dying) return false;
    const radius = this.enemyDefinition(enemy).radius * this.scale();
    const distanceAhead = this.playerY() - enemy.y;
    return distanceAhead + radius >= minDistance && distanceAhead - radius <= maxDistance;
  }

  private showstopperRowWorldDistance(): number {
    return Math.max(showstopperMinimumRowWorldDistance * this.scale(), orbFamily.members.basicOrb.speed * trackRowTravelSeconds * this.scale());
  }

  private destroyEnemiesInVisibleRowRange(from: number, to: number): void {
    const minRow = Math.max(0, Math.floor(Math.min(from, to)));
    const maxRow = Math.max(minRow, Math.floor(Math.max(from, to)));
    const rows = this.visibleEnemyRowsAhead();
    for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
      for (const enemy of rows[rowIndex]?.enemies ?? []) {
        if (!enemy.dying) this.destroyEnemy(enemy);
      }
    }
  }

  private visibleEnemyRowsAhead(): Array<{ y: number; enemies: Enemy[] }> {
    const rowTolerance = 8 * this.scale();
    const rows: Array<{ y: number; enemies: Enemy[] }> = [];
    for (const enemy of this.enemies) {
      if (!this.enemyIsVisibleAhead(enemy)) continue;
      const existing = rows.find(row => Math.abs(row.y - enemy.y) <= rowTolerance);
      if (existing) {
        existing.enemies.push(enemy);
        existing.y = (existing.y * (existing.enemies.length - 1) + enemy.y) / existing.enemies.length;
      } else {
        rows.push({ y: enemy.y, enemies: [enemy] });
      }
    }
    return rows.sort((a, b) => b.y - a.y);
  }

  private enemyIsVisibleAhead(enemy: Enemy): boolean {
    return !enemy.dying && enemy.y < this.playerY();
  }

  private liveEnemies(): Enemy[] {
    return this.enemies.filter(enemy => !enemy.dying);
  }

  private swordStrikeProgress(laneProgress = .72): number {
    const tuning = this.swordVisualTuning;
    const strike = tuning.strikeDuration ?? .31;
    const followThrough = tuning.followThroughDuration ?? .18;
    const total = Math.max(.01, strike + followThrough);
    const clampedLaneProgress = Math.max(.18, Math.min(.88, laneProgress));
    return Math.min(.95, (strike * clampedLaneProgress) / total);
  }

  private applyPendingSwordDamage(options: { force?: boolean } = {}): void {
    const pending = this.pendingSwordDamage;
    if (!pending) return;
    const dueHits = options.force
      ? pending.hits
      : pending.hits.filter(hit => this.combatNow >= hit.dueAt);
    if (dueHits.length === 0) return;
    const dueEnemyIds = dueHits.map(hit => hit.enemyId);
    pending.hits = pending.hits.filter(hit => !dueEnemyIds.includes(hit.enemyId));
    if (pending.hits.length === 0) this.pendingSwordDamage = null;
    let impacted = false;
    for (const enemy of [...this.enemies]) {
      if (enemy.dying || !dueEnemyIds.includes(enemy.id)) continue;
      impacted = true;
      const result = resolveEnemyDamage({
        enemy,
        effects: this.enemyExitEffects,
        damage: pending.damage,
        impactMagnitude: pending.damage,
        color: pending.color,
      });
      if (result.killed) {
        this.kills++;
        if (result.deathSound) this.play(result.deathSound);
      }
    }
    if (impacted) this.play(pending.impactSoundId);
  }

  private updateEnemies(delta: number, shieldDef: (typeof shieldFamily.members)[ShieldId] | null): void {
    const slowEnemyIds = new Set<number>();
    const px = this.squad.x;
    const py = this.playerY();
    for (const enemy of [...this.enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      if (enemy.dying) {
        enemy.actor.moveTo(0, 0);
        if (enemy.actor.disposed) this.enemies.splice(this.enemies.indexOf(enemy), 1);
        continue;
      }
      const effective = slowEnemyIds.has(enemy.id)
        ? enemy.speedMultiplier * (shieldDef?.slowMultiplier ?? 1)
        : enemy.speedMultiplier;
      enemy.y += this.enemyDefinition(enemy).speed * effective * this.scale() * delta - enemy.actor.y * this.canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);

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

      if (this.pendingSwordDamage?.hits.some(hit => hit.enemyId === enemy.id)) continue;

      const hitIndex = this.squad.points(this.playerY(), this.scale()).findIndex(point => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= this.enemyDefinition(enemy).radius * 3.2);
      if (hitIndex >= 0) {
        if (this.playerInvincible || this.activeShowstopper) {
          this.destroyEnemy(enemy);
          continue;
        }
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
        const level = this.pickupGrantLevel("gun", pickup.gunId, pickup.requestedLevel);
        this.recordWeaponLevel("gun", pickup.gunId, level);
        this.activeByFamily.gun = { id: pickup.gunId, level };
        this.cooldown = 0;
        this.gunCooldowns = [];
        this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
        this.playPickup("PickupGun");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.gunPickups.splice(this.gunPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.shieldPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const def = shieldFamily.members[pickup.shieldId];
        const level = this.pickupGrantLevel("shield", pickup.shieldId, pickup.requestedLevel);
        this.recordWeaponLevel("shield", pickup.shieldId, level);
        this.activeByFamily.shield = new ShieldState(pickup.shieldId, def.maxCharges, level);
        this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
        this.playPickup("PickupShield");
        this.play("Shield");
      } else if (pickup.y > this.canvas.height) this.shieldPickups.splice(this.shieldPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.swordPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const level = this.pickupGrantLevel("sword", pickup.swordId, pickup.requestedLevel);
        this.recordWeaponLevel("sword", pickup.swordId, level);
        this.activeByFamily.sword = new SwordState(pickup.swordId, level);
        this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
        this.playPickup("PickupSword");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.swordPickups.splice(this.swordPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.lightningPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        const level = this.pickupGrantLevel("lightning", pickup.lightningId, pickup.requestedLevel);
        this.recordWeaponLevel("lightning", pickup.lightningId, level);
        this.activeByFamily.lightning = new LightningState(pickup.lightningId, level);
        this.lightningPickups.splice(this.lightningPickups.indexOf(pickup), 1);
        this.playPickup("PickupGun");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.lightningPickups.splice(this.lightningPickups.indexOf(pickup), 1);
    }

    for (const pickup of [...this.showstopperPickups]) {
      pickup.y += 72 * pickup.speedMultiplier * this.scale() * delta;
      if (pickup.y >= this.playerY() - 15 * this.scale() && pickup.lane === this.playerLane) {
        this.bankShowstopper(pickup.showstopperId);
        this.showstopperPickups.splice(this.showstopperPickups.indexOf(pickup), 1);
        this.play("Pickup");
        this.play("WeaponReady");
      } else if (pickup.y > this.canvas.height) this.showstopperPickups.splice(this.showstopperPickups.indexOf(pickup), 1);
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

  private weaponHudShapes(now: number, scale: number, helicopterViewport: ReturnType<typeof helicopterViewportFor>): NeonTopDownShape[] {
    const items: NeonTopDownShape[] = [];
    const hudScale = scale * this.weaponHudTuning.iconScale;
    const spacing = this.weaponHudTuning.spacing * scale;
    const entries: Array<{ label: string; color: string; kind: "gun" | "shield" | "sword" | "lightning" }> = [];
    if (this.activeByFamily.gun) {
      const gun = gunFamily.members[this.activeByFamily.gun.id];
      entries.push({ label: `L: ${this.activeByFamily.gun.level}`, color: neonPalette[gun.visualIdentity.projectileColor], kind: "gun" });
    }
    if (this.activeByFamily.shield) {
      const shield = shieldFamily.members[this.activeByFamily.shield.shieldId];
      entries.push({ label: `L: ${this.activeByFamily.shield.level}`, color: neonPalette[shield.color], kind: "shield" });
    }
    if (this.activeByFamily.sword) {
      const sword = swordFamily.members[this.activeByFamily.sword.swordId];
      entries.push({ label: `L: ${this.activeByFamily.sword.level}`, color: neonPalette[sword.color], kind: "sword" });
    }
    if (this.activeByFamily.lightning) {
      const lightning = lightningFamily.members[this.activeByFamily.lightning.lightningId];
      entries.push({ label: `L: ${this.activeByFamily.lightning.level}`, color: neonPalette[lightning.visualIdentity.color], kind: "lightning" });
    }
    const playerScreen = projectHelicopterPoint(this.laneX(this.playerLane), this.playerY(), this.cameraSettings, helicopterViewport);
    const centerScreenX = this.weaponHudScreenX ?? this.weaponHudTargetScreenX(this.playerLane);
    const startScreenX = centerScreenX - (entries.length - 1) * spacing / 2;
    const screenY = playerScreen.y + this.weaponHudTuning.verticalOffset * scale;
    for (const [index, entry] of entries.entries()) {
      const screenX = startScreenX + index * spacing;
      const { x, y } = unprojectHelicopterScreenPoint(screenX, screenY, this.cameraSettings, helicopterViewport);
      const common = { x, y, color: entry.color, now, scale: hudScale };
      const shape = entry.kind === "shield"
        ? shieldPickupVisual(common)
        : entry.kind === "sword"
          ? swordPickupVisual(common)
          : entry.kind === "lightning"
            ? lightningPickupVisual(common)
            : actorInTopDownScene(new NeonShapeActor({ shape: swarmShapes.gunPickup }), x, y, this.weaponHudTuning.iconScale * 20 * scale);
      items.push({
        ...shape,
        color: entry.color,
        label: shapeLabel(entry.label, "below", this.weaponHudTuning.fontSize, Math.max(2, this.weaponHudTuning.fontSize * .7)),
        opacity: .68,
      });
    }
    return items;
  }

  private pickupGrantLevel(family: LevelWeaponFamily, id: LevelWeaponId, requestedLevel?: number): number {
    return requestedLevel === undefined
      ? this.nextWeaponPickupLevel(family, id)
      : this.normalizeWeaponLevel(family, id, requestedLevel);
  }

  private nextWeaponPickupLevel(family: LevelWeaponFamily, id: LevelWeaponId): number {
    return this.normalizeWeaponLevel(family, id, (this.collectedWeaponLevels.get(this.weaponLevelKey(family, id)) ?? 0) + 1);
  }

  private normalizeWeaponLevel(family: LevelWeaponFamily, id: LevelWeaponId, level: number): number {
    const requested = Math.max(1, Math.floor(level));
    if (family === "gun") {
      const levels = gunFamily.members[id as GunId].levels.map(item => item.level);
      const maxLevel = Math.max(...levels);
      const clamped = Math.min(maxLevel, requested);
      return levels.includes(clamped) ? clamped : levels.reduce((best, candidate) =>
        Math.abs(candidate - clamped) < Math.abs(best - clamped) ? candidate : best, levels[0]);
    }
    return Math.min(5, requested);
  }

  private recordWeaponLevel(family: LevelWeaponFamily, id: LevelWeaponId, level: number): void {
    const key = this.weaponLevelKey(family, id);
    this.collectedWeaponLevels.set(key, Math.max(this.collectedWeaponLevels.get(key) ?? 0, this.normalizeWeaponLevel(family, id, level)));
  }

  private weaponLevelKey(family: LevelWeaponFamily, id: LevelWeaponId): string {
    return `${family}.${id}`;
  }

  private updateWeaponHud(delta: number): void {
    const targetX = this.weaponHudTargetScreenX(this.playerLane);
    if (this.weaponHudScreenX === null) {
      this.weaponHudScreenX = targetX;
      return;
    }
    const response = 1 - Math.pow(.0006, delta);
    this.weaponHudScreenX += (targetX - this.weaponHudScreenX) * response;
  }

  private weaponHudTargetScreenX(lane: Lane): number {
    const inwardBias = this.canvas.width * .12;
    return lane === 0
      ? this.canvas.width * .32 + inwardBias
      : this.canvas.width * .68 - inwardBias;
  }

  private applySceneBackground(): void {
    applyLaneRunnerSceneBackground(this.stageElement, this.trackSceneId, this.sceneBackgroundTuning, this.sceneBackgroundLaneOffset(), {}, this.sceneBackgroundRuntimeOptions());
  }

  private syncSceneBackgroundPlacement(): void {
    const forwardOffset = Math.max(-1, Math.min(1, (defaultHelicopterCameraSettings.followDistance - this.cameraSettings.followDistance) / 220));
    const lookOffset = Math.max(-1, Math.min(1, (this.cameraSettings.lookAngleDegrees - defaultHelicopterCameraSettings.lookAngleDegrees) / 28));
    const verticalOffset = Math.max(-1, Math.min(1, (this.cameraSettings.height - defaultHelicopterCameraSettings.height) / 80));
    const zoomOffset = Math.max(-1, Math.min(1, (this.cameraSettings.zoom - defaultHelicopterCameraSettings.zoom) / .4));
    syncLaneRunnerSceneBackgroundPlacement(this.stageElement, this.sceneBackgroundTuning, this.sceneBackgroundLaneOffset(), this.trackSceneId, {
      forwardOffset,
      lookOffset,
      verticalOffset,
      zoomOffset,
    }, this.sceneBackgroundRuntimeOptions());
  }

  private sceneBackgroundRuntimeOptions(): { profile: LaneRunnerSceneBackgroundProfile; interpretation: Partial<LaneRunnerSceneParallaxInterpretation> } {
    return {
      profile: this.sceneBackgroundProfile ?? laneRunnerSceneBackgroundProfile(this.trackSceneId),
      interpretation: this.sceneParallaxInterpretation,
    };
  }

  private sceneBackgroundLaneOffset(): number {
    const leftX = this.laneX(0);
    const rightX = this.laneX(1);
    const laneSpan = rightX - leftX || 1;
    return ((this.squad.x - leftX) / laneSpan) * 2 - 1;
  }

  private enemyExitColor(enemy: Enemy): string {
    return enemy.actor.color ?? enemy.actor.shape.color;
  }

  private enemyDefinition(enemy: Enemy): (typeof orbFamily.members)[OrbId] {
    return orbFamily.members[enemy.enemyId];
  }

  private destroyEnemy(enemy: Enemy, exit?: Parameters<typeof defeatEnemy>[3]): void {
    const result = defeatEnemy(enemy, this.enemyExitEffects, this.enemyExitColor(enemy), exit);
    this.kills++;
    if (result.deathSound === "FrozenShatter") {
      this.play("IceCracking");
      this.delayedSounds.push({ id: result.deathSound, dueAt: this.combatNow + frozenShatterDelaySeconds * 1000 });
    } else if (result.deathSound) this.play(result.deathSound);
  }

  private entityX(entity: ParsedTrackEntity): number {
    return this.laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2 + (entity.columnSpan - 1) / 2) * 15 * this.scale();
  }

  private entitySpeed(entity: ParsedTrackEntity): number {
    return (enemyDefinitionFromTrackId(entity.id)?.definition.speed ?? 72) * entity.speedMultiplier * this.scale();
  }

  private enemySpawnY(entity: ParsedTrackEntity): number {
    return this.playerY() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }

  private pickupSpawnY(entity: ParsedTrackEntity): number {
    return this.playerY() - this.entitySpeed(entity) * this.spawnLeadSeconds(entity);
  }

  private spawnLeadSeconds(entity: ParsedTrackEntity): number {
    const arrivalSeconds = this.entityArrivalSeconds(entity);
    return Math.min(maxTrackSpawnLeadSeconds, arrivalSeconds);
  }

  private entityArrivalSeconds(entity: ParsedTrackEntity): number {
    return firstTrackRowArrivalSeconds + Math.max(0, entity.distanceFromPlayer - 1) * trackRowTravelSeconds;
  }

  private play(id: string): void {
    const alternatives = soundAlternativeCounts[id] ?? 0;
    if (alternatives > 0 && this.sound?.playRotated) this.sound.playRotated(id, alternatives);
    else this.sound?.play(id);
  }

  private playGunFire(gunId: GunId): void {
    this.play(gunFireSoundIds[gunId]);
  }

  private playPickup(id: "PickupGun" | "PickupShield" | "PickupSword" | "PickupMultiplier"): void {
    this.play("Pickup");
    this.play(id);
  }

  private setMusicVolume(volume: number): void {
    this.currentMusicVolume = Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1));
    this.sound?.setMusicVolume?.(this.currentMusicVolume);
  }

  private updateDelayedSounds(): void {
    for (const sound of [...this.delayedSounds]) {
      if (this.combatNow < sound.dueAt) continue;
      this.delayedSounds.splice(this.delayedSounds.indexOf(sound), 1);
      this.play(sound.id);
    }
  }
}

function cloneSceneBackgroundProfile(profile: LaneRunnerSceneBackgroundProfile): LaneRunnerSceneBackgroundProfile {
  return {
    sceneId: profile.sceneId,
    label: profile.label,
    layers: profile.layers.map(layer => ({ ...layer })),
    parallax: { ...profile.parallax },
  };
}

import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export type ShowstopperBankBehavior = "bankedManualTrigger";
export type ShowstopperTargetingMode = "allLanesAhead" | "currentLaneAhead";
export type ShowstopperEasing = "linear" | "easeIn" | "easeOut" | "easeInOut";

export interface ShowstopperTimeWarpPoint {
  atMs: number;
  progress?: number;
  gameplayScale: number;
  easing?: ShowstopperEasing;
}

export interface ShowstopperCameraPose {
  atMs: number;
  progress?: number;
  height: number;
  lookAngleDegrees: number;
  followDistance: number;
  zoom: number;
  horizon: number;
  backgroundForwardOffset?: number;
  backgroundVerticalOffset?: number;
  backgroundZoomOffset?: number;
  easing?: ShowstopperEasing;
}

export interface ShowstopperAttackDefinition {
  startMs: number;
  endMs: number;
  rowsAhead: number;
  targeting: ShowstopperTargetingMode;
}

export interface ShowstopperTimelineEvent {
  type: "startAttack" | "stopAttack";
  atMs: number;
  progress?: number;
}

export interface ShowstopperMember {
  label: string;
  description: string;
  rarity: "rare" | "epic" | "legendary";
  bankBehavior: ShowstopperBankBehavior;
  durationMs: number;
  centerCameraMs: number;
  returnCameraMs: number;
  timeWarp: readonly ShowstopperTimeWarpPoint[];
  camera: readonly ShowstopperCameraPose[];
  timelineEvents: readonly ShowstopperTimelineEvent[];
  attack: ShowstopperAttackDefinition;
  pickupColor: NeonColorName;
  soundCues: Readonly<Record<"deploy" | "attackStart" | "resolve", string>>;
}

type TimedByProgress<T> = Omit<T, "atMs"> & { progress: number };

interface DragonBreathIntent {
  durationMs: number;
  centerCameraMs: number;
  returnCameraMs: number;
  attackStartProgress: number;
  attackEndProgress: number;
  rowsAhead: number;
  timeWarp: readonly TimedByProgress<ShowstopperTimeWarpPoint>[];
  camera: readonly TimedByProgress<ShowstopperCameraPose>[];
  soundCues: ShowstopperMember["soundCues"];
}

const dragonBreathIntent = {
  durationMs: 1600,
  centerCameraMs: 50,
  returnCameraMs: 400,
  attackStartProgress: .125,
  attackEndProgress: 1,
  rowsAhead: 15,
  timeWarp: [
    { progress: 0, gameplayScale: 1, easing: "easeInOut" },
    { progress: .0333, gameplayScale: .1, easing: "easeIn" },
    { progress: .2667, gameplayScale: .4, easing: "easeIn" },
    { progress: 1, gameplayScale: 1, easing: "easeIn" },
  ],
  camera: [
    { progress: 0, height: 65, lookAngleDegrees: 27, followDistance: 20, zoom: .2, horizon: .51 },
    { progress: .1167, height: 45, lookAngleDegrees: 27, followDistance: -5, zoom: .28, horizon: .47, backgroundForwardOffset: .12, backgroundVerticalOffset: -.25, backgroundZoomOffset: .24, easing: "easeIn" },
    { progress: .2583, height: 35, lookAngleDegrees: 27, followDistance: -25, zoom: .32, horizon: .45, backgroundForwardOffset: .22, backgroundVerticalOffset: -.38, backgroundZoomOffset: .32, easing: "easeInOut" },
  ],
  soundCues: {
    deploy: "WavePressure",
    attackStart: "DragonBreath",
    resolve: "ProjectileHit",
  },
} as const satisfies DragonBreathIntent;

function dragonBreathMember(intent: DragonBreathIntent): ShowstopperMember {
  return {
    label: "Dragon's Breath",
    description: "A banked cinematic clear where a friendly neon shape dives ahead and lays a thick wave of fire.",
    rarity: "rare",
    bankBehavior: "bankedManualTrigger",
    durationMs: intent.durationMs,
    centerCameraMs: intent.centerCameraMs,
    returnCameraMs: intent.returnCameraMs,
    timeWarp: pointsAtMs(intent.timeWarp, intent.durationMs),
    camera: pointsAtMs(intent.camera, intent.durationMs),
    timelineEvents: [
      { type: "startAttack", progress: intent.attackStartProgress, atMs: msAtProgress(intent.attackStartProgress, intent.durationMs) },
      { type: "stopAttack", progress: intent.attackEndProgress, atMs: msAtProgress(intent.attackEndProgress, intent.durationMs) },
    ],
    attack: {
      startMs: msAtProgress(intent.attackStartProgress, intent.durationMs),
      endMs: intent.durationMs,
      rowsAhead: intent.rowsAhead,
      targeting: "allLanesAhead",
    },
    pickupColor: "orange",
    soundCues: intent.soundCues,
  };
}

function pointsAtMs<T extends { progress: number }>(points: readonly T[], durationMs: number): Array<T & { atMs: number }> {
  return points.map(point => ({
    ...point,
    atMs: msAtProgress(point.progress, durationMs),
  }));
}

function msAtProgress(progress: number, durationMs: number): number {
  return Math.round(Math.max(0, Math.min(1, progress)) * durationMs);
}

export class ShowstopperFamilyDefinition extends FamilyDefinition<Record<string, ShowstopperMember>> {
  readonly familyId = "showstopper";
  readonly label = "Showstopper";
  readonly implementation = {
    banked: true,
    manualTrigger: true,
    cinematicDirector: true,
    deterministicClear: true,
  } as const;

  readonly members = {
    dragonsBreath: dragonBreathMember(dragonBreathIntent),
  } as const satisfies Record<string, ShowstopperMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, member] of Object.entries(this.members)) {
      this.require(member.durationMs > 0, `${id} durationMs must be positive.`);
      this.require(member.centerCameraMs >= 0, `${id} centerCameraMs cannot be negative.`);
      this.require(member.returnCameraMs > 0, `${id} returnCameraMs must be positive.`);
      this.require(member.timeWarp.length >= 2, `${id} must define at least two time-warp points.`);
      this.require(member.camera.length >= 2, `${id} must define at least two camera poses.`);
      this.require(member.timelineEvents.length >= 2, `${id} must define at least two timeline events.`);
      this.require(member.attack.startMs >= 0 && member.attack.endMs > member.attack.startMs, `${id} attack must have a valid time range.`);
      this.require(member.attack.endMs <= member.durationMs, `${id} attack cannot exceed duration.`);
      this.require(member.attack.rowsAhead > 0, `${id} attack rowsAhead must be positive.`);
      this.require(neonPalette[member.pickupColor] !== undefined, `${id} has an unknown pickup color.`);
      this.validateTimedPoints(id, "timeWarp", member.timeWarp, member.durationMs);
      this.validateTimedPoints(id, "camera", member.camera, member.durationMs);
      this.validateTimedPoints(id, "timelineEvents", member.timelineEvents, member.durationMs);
      for (const point of member.timeWarp) {
        this.require(point.gameplayScale > 0 && point.gameplayScale <= 1, `${id} gameplayScale must be in the 0-1 range.`);
      }
      for (const pose of member.camera) {
        this.require(pose.height >= -200, `${id} camera height is outside the supported lab range.`);
        this.require(pose.zoom > 0, `${id} camera zoom must be positive.`);
        this.require(pose.horizon > 0 && pose.horizon < 1, `${id} camera horizon must be between 0 and 1.`);
      }
    }
  }

  private validateTimedPoints(id: string, label: string, points: readonly { atMs: number }[], durationMs: number): void {
    let previous = Number.NEGATIVE_INFINITY;
    for (const point of points) {
      this.require(point.atMs >= 0 && point.atMs <= durationMs, `${id} ${label} point atMs is outside the sequence.`);
      this.require(point.atMs >= previous, `${id} ${label} points must be sorted by atMs.`);
      previous = point.atMs;
    }
  }
}

export const showstopperFamily = new ShowstopperFamilyDefinition();
export type ShowstopperId = keyof typeof showstopperFamily.members;
export const startingShowstopperId: ShowstopperId = "dragonsBreath";

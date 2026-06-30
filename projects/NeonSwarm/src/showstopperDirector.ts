import {
  showstopperFamily,
  type ShowstopperEasing,
  type ShowstopperCameraPose,
  type ShowstopperId,
  type ShowstopperMember,
  type ShowstopperTimeWarpPoint,
} from "../CombatDefinition";
import type { HelicopterCameraSettings } from "./viewport";

type ProgressCameraPose = Omit<ShowstopperCameraPose, "atMs"> & { atMs?: number; progress: number };
type ProgressTimeWarpPoint = Omit<ShowstopperTimeWarpPoint, "atMs"> & { atMs?: number; progress: number };

export interface ShowstopperDirectorState {
  id: ShowstopperId;
  elapsedMs: number;
  centerElapsedMs: number;
  returning: boolean;
  returnElapsedMs: number;
  lastClearedRow: number;
  baseClearRow: number | null;
  returnStartMs: number | null;
  returnStartGameplayScale: number | null;
  returnStartCamera: Partial<HelicopterCameraSettings> | null;
}

export interface ShowstopperDirectorStep {
  state: ShowstopperDirectorState | null;
  camera: Partial<HelicopterCameraSettings>;
  clearRows?: { from: number; to: number };
  attackWindow?: {
    progress: number;
    rowsAhead: number;
    targeting: ShowstopperMember["attack"]["targeting"];
  };
  resolved?: ShowstopperId;
}

export interface ShowstopperRowClearState {
  lastClearedRow: number;
  baseClearRow: number | null;
}

export function nextShowstopperRowClear(options: {
  elapsedMs: number;
  startMs: number;
  endMs: number;
  rowsAhead: number;
  state: ShowstopperRowClearState;
  baseClearRow: number | null;
}): { from: number; to: number } | undefined {
  if (options.elapsedMs < options.startMs || options.elapsedMs > options.endMs) return undefined;
  if (options.state.baseClearRow === null) {
    if (options.baseClearRow === null) return undefined;
    options.state.baseClearRow = options.baseClearRow;
  }
  const progress = Math.max(0, Math.min(1, (options.elapsedMs - options.startMs) / Math.max(1, options.endMs - options.startMs)));
  const targetRow = Math.min(options.rowsAhead, Math.floor(progress * (options.rowsAhead + 1)));
  if (targetRow <= options.state.lastClearedRow) return undefined;
  const from = options.state.baseClearRow + options.state.lastClearedRow + 1;
  const to = options.state.baseClearRow + targetRow;
  options.state.lastClearedRow = targetRow;
  return { from, to };
}

export function showstopperCameraAt(camera: readonly ShowstopperCameraPose[], elapsedMs: number): Partial<HelicopterCameraSettings> {
  const first = camera[0];
  const last = camera[camera.length - 1];
  if (!first || !last) return {};
  const clampedMs = Math.max(0, Math.min(last.atMs, elapsedMs));
  if (clampedMs <= first.atMs) return first;
  if (clampedMs >= last.atMs) return last;
  const nextIndex = camera.findIndex(point => point.atMs >= clampedMs);
  const from = camera[Math.max(0, nextIndex - 1)];
  const to = camera[nextIndex];
  const span = Math.max(1, to.atMs - from.atMs);
  const eased = ease((clampedMs - from.atMs) / span, "easing" in to ? to.easing ?? "linear" : "linear");
  return {
    height: lerp(from.height, to.height, eased),
    lookAngleDegrees: lerp(from.lookAngleDegrees, to.lookAngleDegrees, eased),
    followDistance: lerp(from.followDistance, to.followDistance, eased),
    zoom: lerp(from.zoom, to.zoom, eased),
    horizon: lerp(from.horizon, to.horizon, eased),
  };
}

export function showstopperCameraAtProgress(camera: readonly ProgressCameraPose[], progress: number): Partial<HelicopterCameraSettings> {
  const durationMs = progressDurationMs(camera);
  return showstopperCameraAt(pointsWithAtMs(camera, durationMs), Math.max(0, Math.min(1, progress)) * durationMs);
}

export function showstopperGameplayScaleAt(timeWarp: readonly ShowstopperTimeWarpPoint[], elapsedMs: number): number {
  const first = timeWarp[0];
  const last = timeWarp[timeWarp.length - 1];
  if (!first || !last) return 1;
  const clampedMs = Math.max(0, Math.min(last.atMs, elapsedMs));
  if (clampedMs <= first.atMs) return first.gameplayScale;
  if (clampedMs >= last.atMs) return last.gameplayScale;
  const nextIndex = timeWarp.findIndex(point => point.atMs >= clampedMs);
  const from = timeWarp[Math.max(0, nextIndex - 1)];
  const to = timeWarp[nextIndex];
  const span = Math.max(1, to.atMs - from.atMs);
  const eased = ease((clampedMs - from.atMs) / span, to.easing ?? "linear");
  return lerp(from.gameplayScale, to.gameplayScale, eased);
}

export function showstopperGameplayScaleAtProgress(timeWarp: readonly ProgressTimeWarpPoint[], progress: number): number {
  const durationMs = progressDurationMs(timeWarp);
  return showstopperGameplayScaleAt(pointsWithAtMs(timeWarp, durationMs), Math.max(0, Math.min(1, progress)) * durationMs);
}

export function showstopperReturnCameraAt(options: {
  from: Partial<HelicopterCameraSettings>;
  to: Partial<HelicopterCameraSettings>;
  elapsedMs: number;
  durationMs: number;
}): Partial<HelicopterCameraSettings> {
  const progress = ease(Math.max(0, Math.min(1, options.elapsedMs / Math.max(1, options.durationMs))), "easeInOut");
  const from = options.from;
  const to = options.to;
  return {
    height: lerp(from.height ?? to.height ?? 0, to.height ?? from.height ?? 0, progress),
    lookAngleDegrees: lerp(from.lookAngleDegrees ?? to.lookAngleDegrees ?? 0, to.lookAngleDegrees ?? from.lookAngleDegrees ?? 0, progress),
    followDistance: lerp(from.followDistance ?? to.followDistance ?? 0, to.followDistance ?? from.followDistance ?? 0, progress),
    zoom: lerp(from.zoom ?? to.zoom ?? 1, to.zoom ?? from.zoom ?? 1, progress),
    horizon: lerp(from.horizon ?? to.horizon ?? .5, to.horizon ?? from.horizon ?? .5, progress),
  };
}

export function showstopperReturnGameplayScaleAt(options: {
  fromScale: number;
  elapsedMs: number;
  durationMs: number;
}): number {
  const progress = Math.max(0, Math.min(1, options.elapsedMs / Math.max(1, options.durationMs)));
  return lerp(options.fromScale, 1, ease(progress, "easeInOut"));
}

export class ShowstopperDirector {
  createState(id: ShowstopperId): ShowstopperDirectorState {
    return {
      id,
      elapsedMs: 0,
      centerElapsedMs: 0,
      returning: false,
      returnElapsedMs: 0,
      lastClearedRow: -1,
      baseClearRow: null,
      returnStartMs: null,
      returnStartGameplayScale: null,
      returnStartCamera: null,
    };
  }

  member(id: ShowstopperId): ShowstopperMember {
    return showstopperFamily.members[id];
  }

  step(state: ShowstopperDirectorState, deltaMs: number, baseClearRow: number | null): ShowstopperDirectorStep {
    const member = this.member(state.id);
    if (state.centerElapsedMs < member.centerCameraMs) {
      state.centerElapsedMs = Math.min(member.centerCameraMs, state.centerElapsedMs + deltaMs);
      return {
        state,
        camera: this.cameraAt(member, 0),
      };
    }
    if (!state.returning) {
      state.elapsedMs += deltaMs;
      if (state.elapsedMs >= member.durationMs) {
        state.returning = true;
        state.returnElapsedMs = 0;
        state.returnStartMs = member.returnCameraMs;
        state.returnStartGameplayScale = this.gameplayScaleAt(member, member.durationMs);
        state.returnStartCamera = this.cameraAt(member, state.elapsedMs);
      }
    } else {
      state.returnElapsedMs += deltaMs;
      if (state.returnElapsedMs >= member.returnCameraMs) {
        return {
          state: null,
          camera: this.cameraAt(member, 0),
          resolved: state.id,
        };
      }
      return {
        state,
        camera: this.returnCameraAt(member, state),
      };
    }

    const clearRows = state.returning ? undefined : this.clearRows(state, member, baseClearRow);
    const attackWindow = state.returning ? undefined : this.attackWindow(state, member);
    return {
      state,
      camera: this.cameraAt(member, state.elapsedMs),
      clearRows,
      attackWindow,
    };
  }

  cameraAt(member: ShowstopperMember, elapsedMs: number): Partial<HelicopterCameraSettings> {
    return showstopperCameraAt(member.camera, elapsedMs);
  }

  gameplayScaleAt(member: ShowstopperMember, elapsedMs: number): number {
    return showstopperGameplayScaleAt(member.timeWarp, elapsedMs);
  }

  gameplayScaleForState(state: ShowstopperDirectorState, member: ShowstopperMember, projectedElapsedMs = state.elapsedMs): number {
    if (!state.returning) return this.gameplayScaleAt(member, projectedElapsedMs);
    const returnStartMs = Math.max(1, state.returnStartMs ?? member.returnCameraMs);
    const returnStartScale = state.returnStartGameplayScale ?? this.gameplayScaleAt(member, state.elapsedMs);
    return showstopperReturnGameplayScaleAt({
      fromScale: returnStartScale,
      elapsedMs: state.returnElapsedMs,
      durationMs: returnStartMs,
    });
  }

  private returnCameraAt(member: ShowstopperMember, state: ShowstopperDirectorState): Partial<HelicopterCameraSettings> {
    return showstopperReturnCameraAt({
      from: state.returnStartCamera ?? this.cameraAt(member, member.durationMs),
      to: this.cameraAt(member, 0),
      elapsedMs: state.returnElapsedMs,
      durationMs: member.returnCameraMs,
    });
  }

  private clearRows(state: ShowstopperDirectorState, member: ShowstopperMember, baseClearRow: number | null): { from: number; to: number } | undefined {
    const window = member.attack;
    if (state.elapsedMs < window.startMs || state.elapsedMs > window.endMs) return undefined;
    return nextShowstopperRowClear({
      elapsedMs: state.elapsedMs,
      startMs: window.startMs,
      endMs: window.endMs,
      rowsAhead: window.rowsAhead,
      state,
      baseClearRow,
    });
  }

  private attackWindow(state: ShowstopperDirectorState, member: ShowstopperMember): ShowstopperDirectorStep["attackWindow"] {
    const window = member.attack;
    if (state.elapsedMs < window.startMs || state.elapsedMs > window.endMs) return undefined;
    return {
      progress: Math.max(0, Math.min(1, (state.elapsedMs - window.startMs) / Math.max(1, window.endMs - window.startMs))),
      rowsAhead: window.rowsAhead,
      targeting: window.targeting,
    };
  }
}

function ease(progress: number, easing: ShowstopperEasing): number {
  const t = Math.max(0, Math.min(1, progress));
  if (easing === "easeIn") return t * t;
  if (easing === "easeOut") return 1 - (1 - t) * (1 - t);
  if (easing === "easeInOut") return t * t * (3 - 2 * t);
  return t;
}

function lerp(from: number, to: number, progress: number): number {
  return from + (to - from) * progress;
}

function progressDurationMs(points: readonly { atMs?: number; progress?: number }[]): number {
  const last = points[points.length - 1];
  if (!last) return 1;
  if (last.progress && last.progress > 0 && last.atMs !== undefined) return last.atMs / last.progress;
  return last.atMs || 1;
}

function pointsWithAtMs<T extends { atMs?: number; progress?: number }>(points: readonly T[], durationMs: number): Array<T & { atMs: number }> {
  return points.map(point => ({
    ...point,
    atMs: point.progress === undefined ? point.atMs : Math.round(Math.max(0, Math.min(1, point.progress)) * durationMs),
  } as T & { atMs: number }));
}

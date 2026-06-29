import { createLaneRunnerScene, type LaneRunnerSceneId, type NeonPrimitive } from "@just-the-games-please/neon-factory";

type SceneBackgroundState = "missing" | "loaded" | "loading";

const sceneBackgrounds = new Map<string, SceneBackgroundState>();

export interface LaneRunnerSceneBackgroundTuning {
  zoomPercent: number;
  laneShiftPercent: number;
  yPercent: number;
}

export const defaultLaneRunnerSceneBackgroundTuning: LaneRunnerSceneBackgroundTuning = {
  zoomPercent: 108,
  laneShiftPercent: 30,
  yPercent: 50,
};

export function laneRunnerScenePrimitives(
  sceneId: LaneRunnerSceneId,
  width: number,
  height: number,
  timeMs: number,
): NeonPrimitive[] {
  return [...(createLaneRunnerScene({ sceneId, width, height, timeMs }).primitives ?? [])];
}

export function laneRunnerSceneBackgroundUrl(sceneId: LaneRunnerSceneId): string {
  const path = location.pathname;
  const marker = "/NeonSwarm/";
  const nestedIndex = path.indexOf(marker);
  if (nestedIndex >= 0) return `${path.slice(0, nestedIndex)}/NeonSwarm/scenes/${sceneId}.png`;

  const pageIndex = path.lastIndexOf("/NeonSwarm.html");
  if (pageIndex >= 0) return `${path.slice(0, pageIndex)}/NeonSwarm/scenes/${sceneId}.png`;

  return `NeonSwarm/scenes/${sceneId}.png`;
}

export function applyLaneRunnerSceneBackground(
  element: HTMLElement,
  sceneId: LaneRunnerSceneId,
  tuning: LaneRunnerSceneBackgroundTuning = defaultLaneRunnerSceneBackgroundTuning,
  laneOffset = 0,
): void {
  syncLaneRunnerSceneBackgroundPlacement(element, tuning, laneOffset);
  element.style.backgroundRepeat = "no-repeat";

  const path = laneRunnerSceneBackgroundUrl(sceneId);
  const state = sceneBackgrounds.get(path);
  if (state === "loaded") {
    element.style.backgroundImage = `url("${path}")`;
    return;
  }

  element.style.removeProperty("background-image");
  if (state) return;

  sceneBackgrounds.set(path, "loading");
  const image = new Image();
  image.onload = () => {
    sceneBackgrounds.set(path, "loaded");
    element.style.backgroundImage = `url("${path}")`;
  };
  image.onerror = () => {
    sceneBackgrounds.set(path, "missing");
    element.style.removeProperty("background-image");
  };
  image.src = path;
}

export function syncLaneRunnerSceneBackgroundPlacement(
  element: HTMLElement,
  tuning: LaneRunnerSceneBackgroundTuning = defaultLaneRunnerSceneBackgroundTuning,
  laneOffset = 0,
): void {
  const clampedLaneOffset = Math.max(-1, Math.min(1, laneOffset));
  const shift = clampedLaneOffset * tuning.laneShiftPercent;
  element.style.backgroundPosition = `calc(50% + ${shift.toFixed(2)}%) ${tuning.yPercent.toFixed(2)}%`;
  element.style.backgroundSize = `${tuning.zoomPercent.toFixed(2)}% auto`;
}

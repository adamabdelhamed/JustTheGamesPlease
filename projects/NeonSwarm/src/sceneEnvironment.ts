import { createLaneRunnerScene, type LaneRunnerSceneId, type NeonPrimitive } from "@just-the-games-please/neon-factory";

type SceneBackgroundState = "missing" | "loaded" | "loading";

const sceneBackgrounds = new Map<string, SceneBackgroundState>();

export interface LaneRunnerSceneBackgroundTuning {
  zoomPercent: number;
  laneShiftPercent: number;
  yPercent: number;
}

interface LaneRunnerSceneBackgroundLayer {
  suffix?: string;
  zoomPercent: number;
  laneShiftPercent: number;
  yPercent: number;
}

export const defaultLaneRunnerSceneBackgroundTuning: LaneRunnerSceneBackgroundTuning = {
  zoomPercent: 108,
  laneShiftPercent: 30,
  yPercent: 50,
};

const parallaxSceneBackgroundLayers: Partial<Record<LaneRunnerSceneId, readonly LaneRunnerSceneBackgroundLayer[]>> = {
  neonHall: [
    { zoomPercent: 108, laneShiftPercent: 10, yPercent: 50 },
    { suffix: "medium", zoomPercent: 112, laneShiftPercent: 24, yPercent: 50 },
    { suffix: "close", zoomPercent: 118, laneShiftPercent: 42, yPercent: 50 },
  ],
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
  return laneRunnerSceneLayerBackgroundUrl(sceneId);
}

function laneRunnerSceneLayerBackgroundUrl(sceneId: LaneRunnerSceneId, suffix?: string): string {
  const fileName = suffix ? `${sceneId}.${suffix}.png` : `${sceneId}.png`;
  const path = location.pathname;
  const marker = "/NeonSwarm/";
  const nestedIndex = path.indexOf(marker);
  if (nestedIndex >= 0) return `${path.slice(0, nestedIndex)}/NeonSwarm/scenes/${fileName}`;

  const pageIndex = path.lastIndexOf("/NeonSwarm.html");
  if (pageIndex >= 0) return `${path.slice(0, pageIndex)}/NeonSwarm/scenes/${fileName}`;

  return `NeonSwarm/scenes/${fileName}`;
}

export function applyLaneRunnerSceneBackground(
  element: HTMLElement,
  sceneId: LaneRunnerSceneId,
  tuning: LaneRunnerSceneBackgroundTuning = defaultLaneRunnerSceneBackgroundTuning,
  laneOffset = 0,
): void {
  const layers = sceneBackgroundLayers(sceneId, tuning);
  syncLaneRunnerSceneBackgroundPlacement(element, tuning, laneOffset, sceneId);
  element.style.backgroundRepeat = "no-repeat";

  const paths = layers.map(layer => laneRunnerSceneLayerBackgroundUrl(sceneId, layer.suffix));
  if (paths.every(path => sceneBackgrounds.get(path) === "loaded")) {
    element.style.backgroundImage = paths.map(path => `url("${path}")`).reverse().join(", ");
    return;
  }

  element.style.removeProperty("background-image");
  if (paths.every(path => sceneBackgrounds.has(path))) return;

  for (const path of paths) {
    if (sceneBackgrounds.has(path)) continue;
    sceneBackgrounds.set(path, "loading");
    const image = new Image();
    image.onload = () => {
      sceneBackgrounds.set(path, "loaded");
      if (paths.every(item => sceneBackgrounds.get(item) === "loaded")) {
        element.style.backgroundImage = paths.map(item => `url("${item}")`).reverse().join(", ");
      }
    };
    image.onerror = () => {
      sceneBackgrounds.set(path, "missing");
      element.style.removeProperty("background-image");
    };
    image.src = path;
  }
}

export function syncLaneRunnerSceneBackgroundPlacement(
  element: HTMLElement,
  tuning: LaneRunnerSceneBackgroundTuning = defaultLaneRunnerSceneBackgroundTuning,
  laneOffset = 0,
  sceneId?: LaneRunnerSceneId,
): void {
  const clampedLaneOffset = Math.max(-1, Math.min(1, laneOffset));
  const layers = sceneBackgroundLayers(sceneId, tuning);
  element.style.backgroundPosition = layers
    .map(layer => {
      const shift = clampedLaneOffset * layer.laneShiftPercent;
      return `calc(50% + ${shift.toFixed(2)}%) ${layer.yPercent.toFixed(2)}%`;
    })
    .reverse()
    .join(", ");
  element.style.backgroundSize = layers.map(layer => `${layer.zoomPercent.toFixed(2)}% auto`).reverse().join(", ");
}

function sceneBackgroundLayers(
  sceneId: LaneRunnerSceneId | undefined,
  tuning: LaneRunnerSceneBackgroundTuning,
): readonly LaneRunnerSceneBackgroundLayer[] {
  return sceneId && parallaxSceneBackgroundLayers[sceneId]
    ? parallaxSceneBackgroundLayers[sceneId]
    : [tuning];
}

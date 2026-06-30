import { createLaneRunnerScene, type LaneRunnerSceneId, type NeonPrimitive } from "@just-the-games-please/neon-factory";

type SceneBackgroundState = "missing" | "loaded" | "loading";

const sceneBackgrounds = new Map<string, SceneBackgroundState>();

export interface LaneRunnerSceneBackgroundTuning {
  zoomPercent: number;
  laneShiftPercent: number;
  yPercent: number;
}

export interface LaneRunnerSceneBackgroundCameraMotion {
  lateralOffset?: number;
  forwardOffset?: number;
  lookOffset?: number;
  verticalOffset?: number;
  zoomOffset?: number;
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
  cameraMotion: LaneRunnerSceneBackgroundCameraMotion = {},
): void {
  const layers = sceneBackgroundLayers(sceneId, tuning);
  syncLaneRunnerSceneBackgroundPlacement(element, tuning, laneOffset, sceneId, cameraMotion);
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
  cameraMotion: LaneRunnerSceneBackgroundCameraMotion = {},
): void {
  const clampedLaneOffset = clampUnit(laneOffset + (cameraMotion.lateralOffset ?? 0));
  const forwardOffset = clampUnit(cameraMotion.forwardOffset ?? 0);
  const lookOffset = clampUnit(cameraMotion.lookOffset ?? 0);
  const verticalOffset = clampUnit(cameraMotion.verticalOffset ?? 0);
  const zoomOffset = clampUnit(cameraMotion.zoomOffset ?? 0);
  const layers = sceneBackgroundLayers(sceneId, tuning);
  element.style.backgroundPosition = layers
    .map(layer => {
      const depth = backgroundLayerDepth(layer, tuning);
      const shift = clampedLaneOffset * layer.laneShiftPercent;
      const y = layer.yPercent - forwardOffset * depth * 9 - lookOffset * depth * 7 - verticalOffset * depth * 3;
      return `calc(50% + ${shift.toFixed(2)}%) ${y.toFixed(2)}%`;
    })
    .reverse()
    .join(", ");
  element.style.backgroundSize = layers.map(layer => {
    const depth = backgroundLayerDepth(layer, tuning);
    const zoom = layer.zoomPercent + forwardOffset * depth * 11 + lookOffset * depth * 6 - verticalOffset * depth * 2 + zoomOffset * depth * 10;
    return `${Math.max(80, zoom).toFixed(2)}% auto`;
  }).reverse().join(", ");
}

function sceneBackgroundLayers(
  sceneId: LaneRunnerSceneId | undefined,
  tuning: LaneRunnerSceneBackgroundTuning,
): readonly LaneRunnerSceneBackgroundLayer[] {
  return sceneId && parallaxSceneBackgroundLayers[sceneId]
    ? parallaxSceneBackgroundLayers[sceneId]
    : [tuning];
}

function clampUnit(value: number): number {
  return Math.max(-1, Math.min(1, Number.isFinite(value) ? value : 0));
}

function backgroundLayerDepth(layer: LaneRunnerSceneBackgroundLayer, tuning: LaneRunnerSceneBackgroundTuning): number {
  const laneDepth = layer.laneShiftPercent / Math.max(1, tuning.laneShiftPercent);
  return Math.max(.45, Math.min(1.8, .55 + laneDepth));
}

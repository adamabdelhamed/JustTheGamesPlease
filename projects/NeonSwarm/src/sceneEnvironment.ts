import {
  createLaneRunnerScene,
  getLaneRunnerSceneName,
  type LaneRunnerSceneId,
  type NeonPrimitive,
} from "@just-the-games-please/neon-factory";

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

export interface LaneRunnerSceneBackgroundLayer {
  id: string;
  label: string;
  suffix?: string;
  zoomPercent: number;
  laneShiftPercent: number;
  yPercent: number;
  closeness: number;
}

export interface LaneRunnerSceneParallaxInterpretation {
  panStrength: number;
  zoomStrength: number;
}

export interface LaneRunnerSceneBackgroundProfile {
  sceneId: LaneRunnerSceneId;
  label: string;
  layers: LaneRunnerSceneBackgroundLayer[];
  parallax: LaneRunnerSceneParallaxInterpretation;
}

export interface LaneRunnerSceneBackgroundRuntimeOptions {
  profile?: LaneRunnerSceneBackgroundProfile;
  interpretation?: Partial<LaneRunnerSceneParallaxInterpretation>;
}

export const defaultLaneRunnerSceneBackgroundTuning: LaneRunnerSceneBackgroundTuning = {
  zoomPercent: 108,
  laneShiftPercent: 30,
  yPercent: 50,
};

export const defaultLaneRunnerSceneParallaxInterpretation: LaneRunnerSceneParallaxInterpretation = {
  panStrength: 1,
  zoomStrength: 1,
};

const defaultLayerCloseness = 1.55;

const laneRunnerSceneBackgroundProfiles: Record<LaneRunnerSceneId, LaneRunnerSceneBackgroundProfile> = {
  neonHall: sceneBackgroundProfile("neonHall", [
    { id: "back", label: "Back stars", zoomPercent: 108, laneShiftPercent: 10, yPercent: 50, closeness: 1 },
    { id: "medium", label: "Mid nebula", suffix: "medium", zoomPercent: 112, laneShiftPercent: 24, yPercent: 50, closeness: 3 },
    { id: "close", label: "Near frame", suffix: "close", zoomPercent: 118, laneShiftPercent: 42, yPercent: 50, closeness: 6 },
  ], { panStrength: .15, zoomStrength: .7 }),
  aurora: sceneBackgroundProfile("aurora", [
    { id: "back", label: "Aurora field", zoomPercent: 108, laneShiftPercent: 30, yPercent: 50, closeness: 6 },
  ], { panStrength: .3, zoomStrength: .45 }),
  crystalForge: sceneBackgroundProfile("crystalForge", [
    { id: "back", label: "Forge floor", zoomPercent: 108, laneShiftPercent: 30, yPercent: 50, closeness: 6 },
  ], { panStrength: .3, zoomStrength: .45 }),
  voidGarden: sceneBackgroundProfile("voidGarden", [
    { id: "back", label: "Garden field", zoomPercent: 108, laneShiftPercent: 30, yPercent: 50, closeness: 6 },
  ], { panStrength: .3, zoomStrength: .45 }),
  solarArray: sceneBackgroundProfile("solarArray", [
    { id: "floor", label: "Solar deck", zoomPercent: 109, laneShiftPercent: 34, yPercent: 52, closeness: 6 },
  ], { panStrength: .3, zoomStrength: .45 }),
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
  runtimeOptions: LaneRunnerSceneBackgroundRuntimeOptions = {},
): void {
  const profile = runtimeOptions.profile ?? laneRunnerSceneBackgroundProfile(sceneId);
  const layers = sceneBackgroundLayers(sceneId, tuning, profile);
  syncLaneRunnerSceneBackgroundPlacement(element, tuning, laneOffset, sceneId, cameraMotion, runtimeOptions);
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
  runtimeOptions: LaneRunnerSceneBackgroundRuntimeOptions = {},
): void {
  const profile = runtimeOptions.profile ?? (sceneId ? laneRunnerSceneBackgroundProfile(sceneId) : undefined);
  const interpretation = resolvedParallaxInterpretation(profile, runtimeOptions.interpretation);
  const clampedLaneOffset = clampUnit(laneOffset);
  const cameraLateralOffset = clampUnit(cameraMotion.lateralOffset ?? 0);
  const forwardOffset = clampUnit(cameraMotion.forwardOffset ?? 0);
  const lookOffset = clampUnit(cameraMotion.lookOffset ?? 0);
  const verticalOffset = clampUnit(cameraMotion.verticalOffset ?? 0);
  const zoomOffset = clampUnit(cameraMotion.zoomOffset ?? 0);
  const layers = sceneBackgroundLayers(sceneId, tuning, profile);
  const resolvedLayers = layers.map(layer => {
    const closeness = backgroundLayerCloseness(layer, tuning);
    const zoom = Math.max(100, layer.zoomPercent + (forwardOffset * closeness * 11 + lookOffset * closeness * 6 - verticalOffset * closeness * 2 + zoomOffset * closeness * 10) * interpretation.zoomStrength);
    const zoomAnchorScale = layer.zoomPercent / zoom;
    return { layer, closeness, zoom, zoomAnchorScale };
  });
  element.style.backgroundPosition = layers
    .map((layer, index) => {
      const resolved = resolvedLayers[index];
      const laneShift = clampedLaneOffset * layer.laneShiftPercent;
      const cameraShift = cameraLateralOffset * layer.laneShiftPercent * resolved.closeness * interpretation.panStrength;
      const x = clampBackgroundPositionPercent(50 + laneShift + cameraShift * resolved.zoomAnchorScale);
      const y = clampBackgroundPositionPercent(layer.yPercent - (forwardOffset * resolved.closeness * 9 + lookOffset * resolved.closeness * 7 + verticalOffset * resolved.closeness * 3) * interpretation.panStrength);
      return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
    })
    .reverse()
    .join(", ");
  element.style.backgroundSize = resolvedLayers.map(({ zoom }) => `${zoom.toFixed(2)}% auto`).reverse().join(", ");
}

export function laneRunnerSceneBackgroundProfile(sceneId: LaneRunnerSceneId): LaneRunnerSceneBackgroundProfile {
  const profile = laneRunnerSceneBackgroundProfiles[sceneId];
  return {
    sceneId: profile.sceneId,
    label: profile.label,
    layers: profile.layers.map(layer => ({ ...layer })),
    parallax: { ...profile.parallax },
  };
}

function sceneBackgroundLayers(
  sceneId: LaneRunnerSceneId | undefined,
  tuning: LaneRunnerSceneBackgroundTuning,
  profile?: LaneRunnerSceneBackgroundProfile,
): readonly LaneRunnerSceneBackgroundLayer[] {
  return profile?.layers.length
    ? profile.layers
    : [{
      id: "back",
      label: sceneId ? getLaneRunnerSceneName(sceneId) : "Background",
      ...tuning,
      closeness: defaultLayerCloseness,
    }];
}

function clampUnit(value: number): number {
  return Math.max(-1, Math.min(1, Number.isFinite(value) ? value : 0));
}

function clampBackgroundPositionPercent(value: number): number {
  return Math.max(0, Math.min(100, Number.isFinite(value) ? value : 50));
}

function backgroundLayerCloseness(layer: LaneRunnerSceneBackgroundLayer, tuning: LaneRunnerSceneBackgroundTuning): number {
  const fallbackCloseness = .55 + layer.laneShiftPercent / Math.max(1, tuning.laneShiftPercent);
  const closeness = Number.isFinite(layer.closeness) ? layer.closeness : fallbackCloseness;
  return Math.max(.05, Math.min(6, closeness));
}

function sceneBackgroundProfile(
  sceneId: LaneRunnerSceneId,
  layers: readonly LaneRunnerSceneBackgroundLayer[],
  parallax: LaneRunnerSceneParallaxInterpretation = defaultLaneRunnerSceneParallaxInterpretation,
): LaneRunnerSceneBackgroundProfile {
  return {
    sceneId,
    label: getLaneRunnerSceneName(sceneId),
    layers: layers.map(layer => ({ ...layer })),
    parallax,
  };
}

function resolvedParallaxInterpretation(
  profile?: LaneRunnerSceneBackgroundProfile,
  override: Partial<LaneRunnerSceneParallaxInterpretation> = {},
): LaneRunnerSceneParallaxInterpretation {
  return {
    panStrength: finitePositive(override.panStrength ?? profile?.parallax.panStrength ?? defaultLaneRunnerSceneParallaxInterpretation.panStrength, 1),
    zoomStrength: finitePositive(override.zoomStrength ?? profile?.parallax.zoomStrength ?? defaultLaneRunnerSceneParallaxInterpretation.zoomStrength, 1),
  };
}

function finitePositive(value: number, fallback: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : fallback;
}

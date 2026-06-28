import type { NeonPrimitive, NeonTopDownCloudBurst, NeonTopDownShape } from "@just-the-games-please/neon-factory";

export interface PortraitViewportPolicy {
  aspectWidth: number;
  aspectHeight: number;
}

export interface LaneRunnerViewportPolicy extends PortraitViewportPolicy {
  readonly orientation: "portrait";
  readonly logicalWidth: number;
  readonly logicalHeight: number;
}

export const laneRunnerViewport: LaneRunnerViewportPolicy = {
  orientation: "portrait",
  aspectWidth: 9,
  aspectHeight: 16,
  logicalWidth: 450,
  logicalHeight: 800,
};

export interface HelicopterCameraSettings {
  height: number;
  lookAngleDegrees: number;
  followDistance: number;
  zoom: number;
  horizon: number;
}

export interface ProjectedScene {
  primitives: NeonPrimitive[];
  clouds?: NeonTopDownCloudBurst[];
  shapes: NeonTopDownShape[];
}

export interface HelicopterViewport {
  width: number;
  height: number;
  playerY: number;
  focusX?: number;
}

export function laneRunnerCameraFocusX(width: number, targetX: number): number {
  const centerX = width / 2;
  return centerX + (targetX - centerX) * .55;
}

export function applyPortraitStage(stage: HTMLElement, policy: PortraitViewportPolicy): void {
  stage.style.setProperty("--stage-aspect", `${policy.aspectWidth} / ${policy.aspectHeight}`);
}

export function stageNormalizedX(stage: HTMLElement, clientX: number): number {
  const bounds = stage.getBoundingClientRect();
  return Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
}

export const defaultHelicopterCameraSettings: HelicopterCameraSettings = {
  height: 65,
  lookAngleDegrees: 27,
  followDistance: 20,
  zoom: .2,
  horizon: .51,
};

export function projectHelicopterScene(
  primitives: readonly NeonPrimitive[],
  shapes: readonly NeonTopDownShape[],
  clouds: readonly NeonTopDownCloudBurst[],
  settings: HelicopterCameraSettings,
  viewport: HelicopterViewport,
): ProjectedScene {
  const projectPoint = projectHelicopterPointFactory(settings, viewport);

  const projectedPrimitives = primitives.map(primitive => {
    if (primitive.shape === "line") {
      const rotation = primitive.rotation ?? 0;
      const halfLength = primitive.height ?? primitive.width;
      const directionX = -Math.sin(rotation);
      const directionY = Math.cos(rotation);
      const start = projectPoint(primitive.x - directionX * halfLength, primitive.y - directionY * halfLength);
      const end = projectPoint(primitive.x + directionX * halfLength, primitive.y + directionY * halfLength);
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const scale = (start.scale + end.scale) * .5;
      return {
        ...primitive,
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2,
        width: primitive.width * scale,
        height: Math.hypot(dx, dy) / 2,
        rotation: Math.atan2(-dx, dy),
      };
    }

    const point = projectPoint(primitive.x, primitive.y);
    const width = primitive.width * point.scale;
    const height = (primitive.height ?? primitive.width) * point.scale;
    let rotation = primitive.rotation;
    if (rotation !== undefined) {
      const axisLength = Math.max(primitive.height ?? primitive.width, primitive.width, 1);
      const directionX = -Math.sin(rotation);
      const directionY = Math.cos(rotation);
      const end = projectPoint(primitive.x + directionX * axisLength, primitive.y + directionY * axisLength);
      rotation = Math.atan2(point.x - end.x, end.y - point.y);
    }
    return {
      ...primitive,
      x: point.x,
      y: point.y,
      width,
      height,
      rotation,
    };
  });

  const projectedShapes = shapes
    .map(shape => {
      const point = projectPoint(shape.x, shape.y);
      return {
        ...shape,
        x: point.x,
        y: point.y,
        size: shape.size * point.scale,
        z: (shape.z ?? 0) - point.depth * .0008,
      };
    })
    .sort((a, b) => ((b.z ?? 0) - (a.z ?? 0)));

  const projectedClouds = clouds.map(cloud => {
    const point = projectPoint(cloud.x, cloud.y);
    return {
      ...cloud,
      x: point.x,
      y: point.y,
      size: cloud.size * point.scale,
    };
  });

  return { primitives: projectedPrimitives, clouds: projectedClouds, shapes: projectedShapes };
}

export function projectHelicopterPoint(
  x: number,
  y: number,
  settings: HelicopterCameraSettings,
  viewport: HelicopterViewport,
): { x: number; y: number; scale: number; depth: number } {
  return projectHelicopterPointFactory(settings, viewport)(x, y);
}

export function unprojectHelicopterScreenPoint(
  screenX: number,
  screenY: number,
  settings: HelicopterCameraSettings,
  viewport: HelicopterViewport,
): { x: number; y: number } {
  const fallback = { x: screenX, y: screenY };
  const centerX = viewport.width / 2;
  const focusX = viewport.focusX ?? centerX;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const relativeY = -settings.height;
  const screenRatio = (horizonY - screenY) / focalLength;
  const denominator = sin - screenRatio * cos;
  if (Math.abs(denominator) < .0001) return fallback;
  const worldZ = -relativeY * (cos + screenRatio * sin) / denominator;
  const cameraZ = Math.max(20, worldZ * cos - relativeY * sin);
  const scale = focalLength / cameraZ;
  const point = {
    x: focusX + (screenX - centerX) / scale,
    y: viewport.playerY + settings.followDistance - worldZ,
  };
  return Number.isFinite(point.x) && Number.isFinite(point.y) && Math.abs(point.x) < 5000 && Math.abs(point.y) < 5000
    ? point
    : fallback;
}

function projectHelicopterPointFactory(settings: HelicopterCameraSettings, viewport: HelicopterViewport) {
  const centerX = viewport.width / 2;
  const focusX = viewport.focusX ?? centerX;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;

  return (x: number, y: number): { x: number; y: number; scale: number; depth: number } => {
    const worldX = x - focusX;
    const worldZ = viewport.playerY - y + settings.followDistance;
    const relativeY = -settings.height;
    const cameraY = relativeY * cos + worldZ * sin;
    const cameraZ = Math.max(minDepth, worldZ * cos - relativeY * sin);
    const scale = focalLength / cameraZ;
    return {
      x: centerX + worldX * scale,
      y: horizonY - cameraY * scale,
      scale,
      depth: cameraZ,
    };
  };
}

export function worldYForProjectedY(
  screenY: number,
  settings: HelicopterCameraSettings,
  viewport: { height: number; playerY: number },
): number {
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const relativeY = -settings.height;
  const screenRatio = (horizonY - screenY) / focalLength;
  const denominator = sin - screenRatio * cos;
  if (Math.abs(denominator) < .0001) return Number.NEGATIVE_INFINITY;

  const worldZ = -relativeY * (cos + screenRatio * sin) / denominator;
  return viewport.playerY + settings.followDistance - worldZ;
}

import type { NeonPrimitive, NeonTopDownShape } from "@just-the-games-please/neon-factory";

export interface PortraitViewportPolicy {
  aspectWidth: number;
  aspectHeight: number;
}

export interface HelicopterCameraSettings {
  height: number;
  lookAngleDegrees: number;
  followDistance: number;
  zoom: number;
  horizon: number;
}

export interface ProjectedScene {
  primitives: NeonPrimitive[];
  shapes: NeonTopDownShape[];
}

export function applyPortraitStage(stage: HTMLElement, policy: PortraitViewportPolicy): void {
  stage.style.setProperty("--stage-aspect", `${policy.aspectWidth} / ${policy.aspectHeight}`);
}

export function stageNormalizedX(stage: HTMLElement, clientX: number): number {
  const bounds = stage.getBoundingClientRect();
  return Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
}

export const defaultHelicopterCameraSettings: HelicopterCameraSettings = {
  height: 170,
  lookAngleDegrees: 20,
  followDistance: 255,
  zoom: .73,
  horizon: .54,
};

export function projectHelicopterScene(
  primitives: readonly NeonPrimitive[],
  shapes: readonly NeonTopDownShape[],
  settings: HelicopterCameraSettings,
  viewport: { width: number; height: number; playerY: number },
): ProjectedScene {
  const centerX = viewport.width / 2;
  const pitch = settings.lookAngleDegrees * Math.PI / 180;
  const cos = Math.cos(pitch);
  const sin = Math.sin(pitch);
  const focalLength = viewport.height * settings.zoom;
  const horizonY = viewport.height * settings.horizon;
  const minDepth = 20;

  const projectPoint = (x: number, y: number): { x: number; y: number; scale: number; depth: number } => {
    const worldX = x - centerX;
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
    return {
      ...primitive,
      x: point.x,
      y: point.y,
      width,
      height,
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

  return { primitives: projectedPrimitives, shapes: projectedShapes };
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

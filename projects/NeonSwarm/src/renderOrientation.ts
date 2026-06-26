import type { NeonShapeInstance } from "@just-the-games-please/neon-factory";
import type { HelicopterCameraSettings, HelicopterViewport } from "./viewport";

const degreesToRadians = (degrees: number): number => degrees * Math.PI / 180;
const playerForwardRotation = {
  rotationX: degreesToRadians(-52),
  rotationY: degreesToRadians(-1),
  rotationZ: degreesToRadians(1),
};
const screenForwardYaw = (direction: { x: number; y: number }): number => {
  const length = Math.hypot(direction.x, direction.y) || 1;
  return Math.atan2(direction.x / length, -direction.y / length);
};

export type ActorVisualRole =
  | "groundForward"
  | "screenBillboard"
  | "tumblingBillboard";

export interface ActorOrientationContext {
  camera: HelicopterCameraSettings;
  viewport: HelicopterViewport;
  x: number;
  y: number;
  now: number;
  phase?: number;
  facing?: { x: number; y: number };
}

export function actorOrientation(role: ActorVisualRole, context: ActorOrientationContext): Partial<NeonShapeInstance> {
  switch (role) {
    case "groundForward": {
      return {
        ...playerForwardRotation,
        rotationX: playerForwardRotation.rotationX + Math.sin(context.now / 650 + (context.phase ?? 0)) * .06,
        rotationY: playerForwardRotation.rotationY + (context.facing ? screenForwardYaw(context.facing) : 0),
      };
    }
    case "tumblingBillboard":
      return {
        rotationY: Math.sin(context.now / 700 + (context.phase ?? 0)) * .18,
      };
    case "screenBillboard":
      return {};
  }
}

export function helicopterViewportFor(width: number, height: number, playerY: number): HelicopterViewport {
  return { width, height, playerY };
}

export function playerOrientation(
  camera: HelicopterCameraSettings,
  viewport: HelicopterViewport,
  x: number,
  y: number,
  now: number,
  phase = 0,
): Partial<NeonShapeInstance> {
  return actorOrientation("groundForward", {
    camera,
    viewport,
    x,
    y,
    now,
    phase,
    facing: { x: 0, y: -1 },
  });
}

export function enemyOrientation(
  camera: HelicopterCameraSettings,
  viewport: HelicopterViewport,
  x: number,
  y: number,
  now: number,
  phase = 0,
): Partial<NeonShapeInstance> {
  return actorOrientation("tumblingBillboard", {
    camera,
    viewport,
    x,
    y,
    now,
    phase,
  });
}

export function billboardOrientation(
  camera: HelicopterCameraSettings,
  viewport: HelicopterViewport,
  x: number,
  y: number,
  now: number,
): Partial<NeonShapeInstance> {
  return actorOrientation("screenBillboard", {
    camera,
    viewport,
    x,
    y,
    now,
  });
}

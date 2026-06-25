import { getNeonShape, NeonShapeActor, type NeonShapeInstance, type NeonShapeLabel, type NeonTopDownShape } from "@just-the-games-please/neon-factory";

export const swarmShapes = {
  player: getNeonShape("arrow-classic")!,
  enemy: getNeonShape("hunter-eye")!,
  multiplier: getNeonShape("bruiser-cross")!,
  gunPickup: getNeonShape("hex-fighter")!,
} as const;

export const pixelsToShapeWorld = (canvas: HTMLCanvasElement, x: number, y: number) => ({
  x: (x / canvas.width - .5) * (canvas.width / canvas.height) * 2.5,
  y: (.5 - y / canvas.height) * 2.5,
});

export const pixelSizeToShapeScale = (canvas: HTMLCanvasElement, pixels: number) => pixels / canvas.height * 2.5;

export function actorAtPixels(actor: NeonShapeActor, canvas: HTMLCanvasElement, x: number, y: number, pixelSize: number, overrides: Partial<NeonShapeInstance> = {}): NeonShapeInstance {
  const world = pixelsToShapeWorld(canvas, x, y);
  actor.moveTo(world.x, world.y);
  actor.scale = pixelSizeToShapeScale(canvas, pixelSize);
  return actor.renderInstance(overrides);
}

export const actorInTopDownScene = (actor: NeonShapeActor, x: number, y: number, size: number, overrides: Partial<NeonShapeInstance> = {}): NeonTopDownShape =>
  ({ ...actor.renderInstance(overrides), x, y, size });

export const shapeLabel = (text: string, position: NeonShapeLabel["position"], fontSize: number, offset = 4): NeonShapeLabel =>
  ({ text, position, fontSize, offset, fontFamily: "Segoe UI, sans-serif", fontWeight: 700 });

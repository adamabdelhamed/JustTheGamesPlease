import { NeonPrimitiveRenderer, type NeonPrimitive } from "./primitive-renderer";
import { NeonGeometricShapeRenderer, type NeonShapeInstance } from "./geometric-shape-renderer";

export interface NeonTopDownShape extends Omit<NeonShapeInstance, "x" | "y" | "scale"> {
  x: number;
  y: number;
  size: number;
}

export interface NeonTopDownScene {
  primitives?: readonly NeonPrimitive[];
  shapes?: readonly NeonTopDownShape[];
}

export class NeonTopDownSceneRenderer {
  readonly canvas: HTMLCanvasElement;
  readonly device: GPUDevice;
  #primitives: NeonPrimitiveRenderer;
  #shapes: NeonGeometricShapeRenderer;
  #width: number;
  #height: number;
  #context: GPUCanvasContext;

  private constructor(canvas: HTMLCanvasElement, device: GPUDevice, context: GPUCanvasContext, format: GPUTextureFormat, width: number, height: number) {
    this.canvas = canvas; this.device = device; this.#context = context; this.#width = width; this.#height = height;
    this.#primitives = new NeonPrimitiveRenderer(canvas, device, context, format).setLogicalSize(width, height);
    this.#shapes = new NeonGeometricShapeRenderer(canvas, device, context, format).setLogicalSize(width, height);
  }

  static async create(canvas: HTMLCanvasElement, logicalWidth: number, logicalHeight: number): Promise<NeonTopDownSceneRenderer> {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory top-down scenes.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu");
    if (!context) throw new Error("Could not create a WebGPU canvas context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new NeonTopDownSceneRenderer(canvas, device, context, format, logicalWidth, logicalHeight);
  }

  render(scene: NeonTopDownScene, timeSeconds = performance.now() / 1000): void {
    const target = this.#context.getCurrentTexture().createView();
    this.#primitives.render([...(scene.primitives ?? [])], timeSeconds, false, target);
    const aspect = this.#width / this.#height;
    this.#shapes.render((scene.shapes ?? []).map(shape => ({
      ...shape,
      x: (shape.x / this.#width - .5) * aspect * 2.5,
      y: (.5 - shape.y / this.#height) * 2.5,
      scale: shape.size / this.#height * 2.5,
    })), true, target);
  }

  destroy(): void {
    this.#shapes.destroy(false);
    this.device.destroy();
  }
}

import type { NeonGeometricShapeDefinition } from "./geometric-shapes";
import type { NeonShapeInstance, NeonShapeLabel } from "./geometric-shape-renderer";

export enum NeonShapeDisposal {
  FadeOut = "fadeOut",
  Disappear = "disappear",
  Explode = "explode",
}

export interface NeonShapeVector {
  x: number;
  y: number;
}

export interface NeonShapeImpact {
  direction: NeonShapeVector;
  magnitude: number;
}

export interface NeonShapeActorOptions {
  shape: NeonGeometricShapeDefinition;
  x?: number;
  y?: number;
  z?: number;
  velocity?: Partial<NeonShapeVector>;
  scale?: number;
  label?: NeonShapeLabel;
  color?: string;
  disposal?: NeonShapeDisposal;
  explodeMagnitude?: number;
}

export class NeonShapeActor {
  shape: NeonGeometricShapeDefinition;
  x: number;
  y: number;
  z: number;
  velocity: NeonShapeVector;
  scale: number;
  label?: NeonShapeLabel;
  color?: string;
  disposal: NeonShapeDisposal;
  explodeMagnitude: number;
  rotationX = 0;
  rotationY = 0;
  rotationZ = 0;
  disposed = false;
  #disposalProgress = 0;
  #impactVelocity: NeonShapeVector = { x: 0, y: 0 };
  #impactRotation: NeonShapeVector = { x: 0, y: 0 };

  constructor(options: NeonShapeActorOptions) {
    this.shape = options.shape;
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.z = options.z ?? 0;
    this.velocity = { x: options.velocity?.x ?? 0, y: options.velocity?.y ?? 0 };
    this.scale = options.scale ?? 1;
    this.label = options.label;
    this.color = options.color;
    this.disposal = options.disposal ?? NeonShapeDisposal.FadeOut;
    this.explodeMagnitude = options.explodeMagnitude ?? .55;
  }

  moveTo(x: number, y: number, z = this.z): this {
    this.x = x; this.y = y; this.z = z;
    return this;
  }

  setVelocity(x: number, y: number): this {
    this.velocity.x = x; this.velocity.y = y;
    return this;
  }

  impact({ direction, magnitude }: NeonShapeImpact): this {
    const length = Math.hypot(direction.x, direction.y) || 1;
    const x = direction.x / length, y = direction.y / length;
    this.#impactVelocity.x += x * magnitude * .34;
    this.#impactVelocity.y += y * magnitude * .34;
    this.#impactRotation.x += y * magnitude * .9;
    this.#impactRotation.y -= x * magnitude * .9;
    return this;
  }

  dispose(mode = this.disposal): this {
    this.disposal = mode;
    this.#disposalProgress = mode === NeonShapeDisposal.Disappear ? 1 : .0001;
    if (mode === NeonShapeDisposal.Disappear) this.disposed = true;
    return this;
  }

  regenerate(): this {
    this.disposed = false;
    this.#disposalProgress = 0;
    return this;
  }

  update(deltaSeconds: number): this {
    this.x += (this.velocity.x + this.#impactVelocity.x) * deltaSeconds;
    this.y += (this.velocity.y + this.#impactVelocity.y) * deltaSeconds;
    this.rotationX += this.#impactRotation.x * deltaSeconds;
    this.rotationY += this.#impactRotation.y * deltaSeconds;
    const damping = Math.exp(-7 * deltaSeconds);
    this.#impactVelocity.x *= damping; this.#impactVelocity.y *= damping;
    this.#impactRotation.x *= damping; this.#impactRotation.y *= damping;
    if (this.#disposalProgress > 0 && !this.disposed) {
      const duration = this.disposal === NeonShapeDisposal.Explode ? .85 : .55;
      this.#disposalProgress = Math.min(1, this.#disposalProgress + deltaSeconds / duration);
      if (this.#disposalProgress >= 1) this.disposed = true;
    }
    return this;
  }

  renderInstance(overrides: Partial<NeonShapeInstance> = {}): NeonShapeInstance {
    const fade = this.disposal === NeonShapeDisposal.FadeOut ? 1 - this.#disposalProgress : 1;
    return {
      shape: this.shape, x: this.x, y: this.y, z: this.z, scale: this.scale,
      rotationX: this.rotationX, rotationY: this.rotationY, rotationZ: this.rotationZ,
      label: this.label, color: this.color, opacity: this.disposed ? 0 : fade,
      explodeProgress: this.disposal === NeonShapeDisposal.Explode ? this.#disposalProgress : 0,
      explodeMagnitude: this.explodeMagnitude,
      ...overrides,
    };
  }
}

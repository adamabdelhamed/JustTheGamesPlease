import type { NeonPrimitive } from "./primitive-renderer";

export type NeonProjectileShape = "dart" | "needle" | "slug" | "splitBolt";

export interface NeonProjectileOptions {
  x: number;
  y: number;
  velocityX?: number;
  velocityY?: number;
  radius?: number;
  length?: number;
  trailLength?: number;
  trailWidth?: number;
  color: string;
  trailColor?: string;
  coreColor?: string;
  shape?: NeonProjectileShape;
  intensity?: number;
  glow?: number;
}

const rotationForScreenForwardVector = (x: number, y: number): number => {
  const length = Math.hypot(x, y) || 1;
  return Math.atan2(x / length, -y / length);
};

export class NeonProjectile {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  length: number;
  trailLength: number;
  trailWidth: number;
  color: string;
  trailColor: string;
  coreColor: string;
  shape: NeonProjectileShape;
  intensity: number;
  glow: number;

  constructor(options: NeonProjectileOptions) {
    this.x=options.x;this.y=options.y;this.velocityX=options.velocityX??0;this.velocityY=options.velocityY??-500;
    this.radius=options.radius??3;this.length=options.length??9;this.trailLength=options.trailLength??16;this.trailWidth=options.trailWidth??1.5;
    this.color=options.color;this.trailColor=options.trailColor??options.color;this.coreColor=options.coreColor??options.color;
    this.shape=options.shape??"dart";this.intensity=options.intensity??1;this.glow=options.glow??.75;
  }

  update(deltaSeconds: number): this {
    this.x += this.velocityX * deltaSeconds;
    this.y += this.velocityY * deltaSeconds;
    return this;
  }

  primitives(): NeonPrimitive[] {
    const split = this.shape === "splitBolt";
    const needle = this.shape === "needle";
    const slug = this.shape === "slug";
    const speed = Math.hypot(this.velocityX, this.velocityY) || 1;
    const directionX = this.velocityX / speed;
    const directionY = this.velocityY / speed;
    const rotation = rotationForScreenForwardVector(this.velocityX, this.velocityY);
    const items: NeonPrimitive[] = [{
      x:this.x-directionX*this.trailLength*.5,y:this.y-directionY*this.trailLength*.5,
      width:this.trailWidth,height:this.trailLength,color:this.trailColor,secondaryColor:this.color,
      glow:this.glow*.6,intensity:this.intensity*.72,shape:"bolt",rotation,
    }];
    const width=slug?this.radius*1.5:needle?this.radius*.65:this.radius;
    const height=slug?this.length*.75:this.length;
    const sideX = -directionY;
    const sideY = directionX;
    const add=(offset:number)=>items.push({x:this.x+sideX*offset,y:this.y+sideY*offset,width,height,color:this.color,secondaryColor:this.coreColor,glow:this.glow,intensity:this.intensity,shape:needle?"circle":"bolt",rotation});
    if(split){add(-this.radius*.7);add(this.radius*.7)}else add(0);
    return items;
  }
}

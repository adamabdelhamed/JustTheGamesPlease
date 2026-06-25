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
    const items: NeonPrimitive[] = [{
      x:this.x,y:this.y-this.velocityY/Math.abs(this.velocityY||1)*this.trailLength*.5,
      width:this.trailWidth,height:this.trailLength,color:this.trailColor,secondaryColor:this.color,
      glow:this.glow*.6,intensity:this.intensity*.72,shape:"bolt",
    }];
    const width=slug?this.radius*1.5:needle?this.radius*.65:this.radius;
    const height=slug?this.length*.75:this.length;
    const add=(offset:number)=>items.push({x:this.x+offset,y:this.y,width,height,color:this.color,secondaryColor:this.coreColor,glow:this.glow,intensity:this.intensity,shape:needle?"circle":"bolt"});
    if(split){add(-this.radius*.7);add(this.radius*.7)}else add(0);
    return items;
  }
}


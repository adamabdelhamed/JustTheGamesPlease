import { createTestPage, NeonOrb, NeonTopDownSceneRenderer, neonPalette, type NeonOrbOptions } from "../../src/index";

const canvas = document.querySelector<HTMLCanvasElement>("#orb-canvas")!;
const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const error = document.querySelector<HTMLElement>("#error")!;
const color = document.querySelector<HTMLSelectElement>("#color")!;
const radius = document.querySelector<HTMLInputElement>("#radius")!;
const glow = document.querySelector<HTMLInputElement>("#glow")!;
const animate = document.querySelector<HTMLInputElement>("#animate")!;
const orb = new NeonOrb();

const update = (options: NeonOrbOptions) => {
  orb.update(options);
  if (options.color) color.value = options.color;
  if (options.radius !== undefined) radius.value = String(options.radius * 100);
  if (options.glow !== undefined) glow.value = String(options.glow * 100);
  if (options.animate !== undefined) animate.checked = options.animate;
};

const test = createTestPage("neon-factory-orb", { setOrb: update }, status);
color.addEventListener("change", () => update({ color: color.value }));
radius.addEventListener("input", () => update({ radius: Number(radius.value) / 100 }));
glow.addEventListener("input", () => update({ glow: Number(glow.value) / 100 }));
animate.addEventListener("change", () => update({ animate: animate.checked }));

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 800, 600);
  let frame=0;const render=(now:number)=>{renderer.render({primitives:[{x:orb.x*800,y:orb.y*600,width:orb.radius*600,color:orb.color,glow:orb.glow,shape:"orb"}]},now/1000);frame=requestAnimationFrame(render)};frame=requestAnimationFrame(render);
  addEventListener("pagehide",()=>{cancelAnimationFrame(frame);renderer.destroy()},{once:true});
  test.ready();
  test.assert("WebGPU renderer initialized", true);
  test.assert("Orb uses the standard cyan token", orb.color === neonPalette.cyan);
  const automation = window as unknown as { neonFactoryTest?: { setOrb?: unknown } };
  test.assert("Automation driver is exposed", typeof automation.neonFactoryTest?.setOrb === "function");
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false;
  error.textContent = message;
  test.assert("WebGPU renderer initialized", false, message);
}

import { createTestPage, NeonOrb, NeonRenderer, neonPalette, type NeonOrbOptions } from "../../src/index";

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
  const renderer = await NeonRenderer.create(canvas);
  renderer.setScene(orb).start();
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

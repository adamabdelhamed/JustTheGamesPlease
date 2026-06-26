import {
  createTestPage,
  getNeonShape,
  NeonShapeActor,
  NeonTopDownSceneRenderer,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  createEnemyExitEffect,
  enemyExitCloud,
  enemyExitDuration,
  enemyExitProfiles,
  updateEnemyExitEffects,
  type ActiveEnemyExitEffect,
  type EnemyVisualType,
} from "../../src/enemyExitVisuals";
import { actorInTopDownScene } from "../../src/shapeVisuals";

const q = <T extends Element>(selector: string) => document.querySelector<T>(selector)!;
const canvas = q<HTMLCanvasElement>("#stage");
const status = q<HTMLOutputElement>("#test-status");
const error = q<HTMLElement>("#error");
const enemyType = q<HTMLSelectElement>("#enemy-type");
const color = q<HTMLInputElement>("#color");
const json = q<HTMLTextAreaElement>("#json");
const readout = q<HTMLElement>("#readout");
const shape = getNeonShape("hunter-eye");
if (!shape) throw new Error("Enemy exit lab requires hunter-eye shape.");
const actor = new NeonShapeActor({ shape });
const effects: ActiveEnemyExitEffect[] = [];
let last = performance.now();

const selectedType = (): EnemyVisualType => enemyType.value as EnemyVisualType;
const syncJson = () => {
  const profile = enemyExitProfiles[selectedType()];
  json.value = JSON.stringify({ enemyType: selectedType(), color: color.value, profile }, null, 2);
  readout.textContent = `${selectedType()} - ${enemyExitDuration(selectedType()).toFixed(2)}s spark fade`;
};
const run = () => {
  effects.length = 0;
  effects.push(createEnemyExitEffect({ enemyType: selectedType(), x: 450, y: 350, color: color.value }));
  syncJson();
};
q<HTMLButtonElement>("#run").addEventListener("click", run);
q<HTMLButtonElement>("#copy").addEventListener("click", () => navigator.clipboard?.writeText(json.value));
[enemyType, color].forEach(control => control.addEventListener("input", syncJson));
syncJson();
run();

const test = createTestPage("neon-swarm-enemy-exit-lab", { run }, status);
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 900, 700);
  let frame = 0;
  const render = (now: number) => {
    const delta = Math.min(.04, (now - last) / 1000);
    last = now;
    updateEnemyExitEffects(effects, delta);
    if (!effects.length) run();
    actor.color = color.value;
    const shapes: NeonTopDownShape[] = effects.length && effects[0].age < .09
      ? [actorInTopDownScene(actor, 450, 350, 18, { color: color.value, opacity: 1 - effects[0].age / .09 })]
      : [];
    renderer.render({ clouds: effects.map(enemyExitCloud), shapes }, now / 1000);
    frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);
  addEventListener("pagehide", () => { cancelAnimationFrame(frame); renderer.destroy(); }, { once: true });
  test.ready();
  test.assert("Enemy exit profile is shared", enemyExitProfiles.basicOrb.dissipationAction === "sparkFade");
  test.assert("WebGPU enemy exit lab initialized", true);
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false;
  error.textContent = message;
  test.assert("WebGPU enemy exit lab initialized", false, message);
}

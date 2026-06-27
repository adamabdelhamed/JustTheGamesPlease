import { createTestPage, neonPalette } from "@just-the-games-please/neon-factory";
import { orbFamily } from "../../CombatDefinition";
import { enemyExitDuration, enemyExitProfiles, type EnemyVisualType } from "../../src/enemyExitVisuals";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";

const q = <T extends Element>(selector: string) => document.querySelector<T>(selector)!;
const canvas = q<HTMLCanvasElement>("#stage");
const status = q<HTMLOutputElement>("#test-status");
const error = q<HTMLElement>("#error");
const enemyType = q<HTMLSelectElement>("#enemy-type");
const color = q<HTMLInputElement>("#color");
const json = q<HTMLTextAreaElement>("#json");
const readout = q<HTMLElement>("#readout");

for (const [id, enemy] of Object.entries(orbFamily.members)) enemyType.add(new Option(enemy.label, id));

let sim: NeonSwarmSimulation | null = null;
let activeEnemyId = 0;

const selectedType = (): EnemyVisualType => enemyType.value as EnemyVisualType;
const selectedColor = (): string => color.value || neonPalette[orbFamily.members[selectedType()].baseColor];
const syncJson = (): void => {
  const profile = enemyExitProfiles[selectedType()];
  json.value = JSON.stringify({ enemyType: selectedType(), color: selectedColor(), profile }, null, 2);
  readout.textContent = `${selectedType()} - ${enemyExitDuration(selectedType()).toFixed(2)}s spark fade`;
};
const run = (): void => {
  if (!sim) return;
  sim.stopLoop();
  sim.reset({ silent: true });
  activeEnemyId = sim.spawnEnemy({
    enemyId: selectedType(),
    lane: 0,
    x: canvas.width / 2,
    y: canvas.height / 2,
    health: 1,
    speedMultiplier: 0,
    color: selectedColor(),
    playSound: false,
  });
  sim.defeatEnemyById(activeEnemyId);
  sim.startLoop();
  syncJson();
};

q<HTMLButtonElement>("#run").addEventListener("click", run);
q<HTMLButtonElement>("#copy").addEventListener("click", () => navigator.clipboard?.writeText(json.value));
[enemyType, color].forEach(control => control.addEventListener("input", run));
syncJson();

const test = createTestPage("neon-swarm-enemy-exit-lab", { run }, status);
try {
  sim = await NeonSwarmSimulation.create({ mode: "lab", canvas, stageElement: canvas.parentElement ?? document.body });
  run();
  test.ready();
  test.assert("Enemy exit profiles include new enemies", "glassShield" in enemyExitProfiles && "winger" in enemyExitProfiles && "tank" in enemyExitProfiles);
  test.assert("WebGPU enemy exit lab initialized", true);
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false;
  error.textContent = message;
  test.assert("WebGPU enemy exit lab initialized", false, message);
}

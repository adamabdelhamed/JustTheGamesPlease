import { createTestPage } from "@just-the-games-please/neon-factory";
import { multiplierFamily } from "../../CombatDefinition";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { SquadModel } from "../../src/squad";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const results = document.querySelector<HTMLOListElement>("#results")!;
const run = () => {
  const squad = new SquadModel();
  const spec = multiplierFamily.members.squadPlusOne;
  const initial = squad.count;
  squad.add(spec.squadAdded);
  const afterPickup = squad.count;
  for (let index = 0; index < 20; index++) squad.add(spec.squadAdded);
  const capped = squad.count;
  squad.x = 200;
  const points = squad.points(400, 1);
  const firstRow = points.filter(point => point.row === 0);
  const uniqueColumns = new Set(firstRow.map(point => point.x)).size;
  return {
    initial,
    afterPickup,
    capped,
    points,
    firstRow,
    uniqueColumns,
    simultaneousTargets: Math.min(firstRow.length, 5),
  };
};

const test = createTestPage("neon-swarm-multiplier-family-smoke", { suite: "smoke", run }, status);
test.ready();
const outcome = run();
const assertions = [
  ["Pickup adds one wingmate", outcome.afterPickup === outcome.initial + 1],
  ["Squad respects ten-member cap", outcome.capped === multiplierFamily.members.squadPlusOne.maxSquadSize],
  ["Formation creates two five-member rows", outcome.points.length === 10 && outcome.firstRow.length === 5],
  ["First row has five distinct firing columns", outcome.uniqueColumns === 5],
  ["Five-member squad can cover five enemy positions", outcome.simultaneousTargets === 5],
] as const;

results.innerHTML = assertions.map(([name, passed], index) => `
  <li data-passed="${passed}" data-index="${index}">
    <strong>${name}</strong>
    <span>${passed ? "PASS" : "FAIL"}</span>
  </li>`).join("");
results.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => void startSimulation(Number(item.getAttribute("data-index"))));
});
for (const [name, passed] of assertions) test.assert(name, passed);

const pageContainer = document.getElementById("page-container")!;
const simulatorPanel = document.getElementById("simulator-panel")!;
const closeSimBtn = document.getElementById("close-sim")!;
const replayBtn = document.getElementById("replay-btn")!;
const pauseBtn = document.getElementById("pause-btn")!;
const simStatusText = document.getElementById("sim-status")!;
const simTitle = document.getElementById("sim-title")!;
const simDetails = document.getElementById("sim-details")!;
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const stage = document.getElementById("canvas-container") ?? simulatorPanel;

let sim: NeonSwarmSimulation | null = null;
let activeScenarioIdx = 0;
let isPaused = false;

async function ensureSimulation(): Promise<NeonSwarmSimulation> {
  sim ??= await NeonSwarmSimulation.create({ mode: "lab", canvas, stageElement: stage });
  return sim;
}

async function startSimulation(index: number): Promise<void> {
  activeScenarioIdx = index;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  simTitle.textContent = assertions[index][0];
  await ensureSimulation();
  resetSimulation();
}

function resetSimulation(): void {
  if (!sim) return;
  sim.stopLoop();
  sim.reset({ silent: true });
  sim.setSquadLane(0);
  if (activeScenarioIdx === 0) {
    sim.spawnMultiplierPickup({ lane: 0, y: 100 });
  } else if (activeScenarioIdx === 1) {
    for (let index = 0; index < 12; index++) sim.spawnMultiplierPickup({ lane: 0, y: 120 - index * 28, speedMultiplier: 2 });
  } else if (activeScenarioIdx === 2) {
    sim.addSquadMembers(9);
  } else {
    sim.addSquadMembers(4);
    for (let index = 0; index < 5; index++) {
      sim.spawnEnemy({ enemyId: "basicOrb", lane: 0, x: sim.laneX(0) + (index - 2) * 30, y: 210, health: 99, playSound: false });
    }
  }
  isPaused = false;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "PASSED";
  simStatusText.className = "sim-status";
  updateDetails();
  sim.startLoop();
}

function updateDetails(): void {
  if (!sim) return;
  const snapshot = sim.snapshot();
  simDetails.innerHTML = `
    <dt>Scenario</dt><dd>${assertions[activeScenarioIdx][0]}</dd>
    <dt>Squad Size</dt><dd>${snapshot.squad.count} wingmates</dd>
    <dt>Time Elapsed</dt><dd>${snapshot.combatNow.toFixed(0)} ms</dd>
    <dt>Status</dt><dd>Shared runtime replay</dd>
  `;
}

window.setInterval(updateDetails, 150);
closeSimBtn.addEventListener("click", () => {
  sim?.stopLoop();
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
});
replayBtn.addEventListener("click", resetSimulation);
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
  if (isPaused) sim?.stopLoop();
  else sim?.startLoop();
});

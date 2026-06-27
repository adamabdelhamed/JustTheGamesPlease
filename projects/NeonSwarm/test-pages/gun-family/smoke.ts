import { createTestPage } from "@just-the-games-please/neon-factory";
import { gunFamily, orbFamily } from "../../CombatDefinition";
import { evaluateGunAgainstOrb, type GunSmokeResult } from "../../src/combat/gunEvaluator";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;
let results: GunSmokeResult[] = [];

const run = (): GunSmokeResult[] => {
  results = Object.entries(gunFamily.members).map(([gunId, gun]) =>
    evaluateGunAgainstOrb(gunId, gun, orbFamily.members.basicOrb));
  resultsElement.innerHTML = results.map(result => `
    <li data-passed="${result.passed}" data-gun-id="${result.gunId}">
      <strong>${gunFamily.members[result.gunId as keyof typeof gunFamily.members].label}</strong>
      <span>${result.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">kill ${result.killTimeMs?.toFixed(0) ?? "never"}ms · arrival ${result.enemyArrivalMs.toFixed(0)}ms · ${result.shotsFired} shots</span>
    </li>`).join("");
  resultsElement.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      const gunId = item.getAttribute("data-gun-id");
      if (gunId) void startSimulation(gunId as keyof typeof gunFamily.members);
    });
  });
  return results;
};

const test = createTestPage("neon-swarm-gun-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.gunId} kills weakest orb before contact`,
    result.passed,
    `kill=${result.killTimeMs ?? "never"}ms arrival=${result.enemyArrivalMs.toFixed(0)}ms`,
  );
}

const pageContainer = document.getElementById("page-container")!;
const simulatorPanel = document.getElementById("simulator-panel")!;
const closeSimBtn = document.getElementById("close-sim")!;
const replayBtn = document.getElementById("replay-btn")!;
const pauseBtn = document.getElementById("pause-btn")!;
const simStatusText = document.getElementById("sim-status")!;
const simTitle = document.getElementById("sim-title")!;
const simDetails = document.getElementById("sim-details")!;
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const canvasContainer = document.getElementById("canvas-container")!;

let sim: NeonSwarmSimulation | null = null;
let activeGunId: keyof typeof gunFamily.members | null = null;
let isPaused = false;
let simOutcome = "";

async function ensureSimulation(): Promise<NeonSwarmSimulation> {
  sim ??= await NeonSwarmSimulation.create({ mode: "lab", canvas, stageElement: canvasContainer });
  return sim;
}

async function startSimulation(gunId: keyof typeof gunFamily.members): Promise<void> {
  activeGunId = gunId;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  simTitle.textContent = `${gunFamily.members[gunId].label} Simulation`;
  await ensureSimulation();
  resetSimulation();
}

function resetSimulation(): void {
  if (!sim || !activeGunId) return;
  const gun = gunFamily.members[activeGunId];
  const orb = orbFamily.members.basicOrb;
  sim.stopLoop();
  sim.reset({ silent: true });
  sim.equipGun(activeGunId, 1);
  sim.spawnEnemy({ enemyId: "basicOrb", lane: 0, x: sim.laneX(0), y: 110, health: orb.health, playSound: false });
  isPaused = false;
  simOutcome = `Running ${gun.label} against ${orb.label}`;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "Simulating...";
  simStatusText.className = "sim-status";
  updateDetails();
  sim.startLoop();
}

function updateDetails(): void {
  if (!sim || !activeGunId) return;
  const gun = gunFamily.members[activeGunId];
  const orb = orbFamily.members.basicOrb;
  const level = gun.levels[0];
  const snapshot = sim.snapshot();
  const enemy = snapshot.enemies[0];
  if (enemy?.dying && !simOutcome.startsWith("PASSED")) {
    simOutcome = `PASSED · Defeated at ${snapshot.combatNow.toFixed(0)}ms`;
    simStatusText.textContent = "PASSED";
    simStatusText.className = "sim-status";
  } else if (enemy && enemy.y >= sim.playerY() && !simOutcome.startsWith("FAILED")) {
    simOutcome = "FAILED · Orb reached contact";
    simStatusText.textContent = "FAILED";
    simStatusText.className = "sim-status failed";
  }
  simDetails.innerHTML = `
    <dt>Weapon</dt><dd>${gun.label} (Lvl ${level.level})</dd>
    <dt>Fire Rate</dt><dd>${level.fireRatePerSecond}/s</dd>
    <dt>Damage</dt><dd>${level.damage}</dd>
    <dt>Speed</dt><dd>${level.projectileSpeed} px/s</dd>
    <dt>Enemy Health</dt><dd>${(enemy?.health ?? 0).toFixed(2)} / ${orb.health}</dd>
    <dt>Enemy Speed</dt><dd>${orb.speed} px/s</dd>
    <dt>Time Elapsed</dt><dd>${snapshot.combatNow.toFixed(0)} ms</dd>
    <dt>Outcome</dt><dd>${simOutcome || "In Progress"}</dd>
  `;
}

window.setInterval(updateDetails, 150);

closeSimBtn.addEventListener("click", () => {
  sim?.stopLoop();
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
  activeGunId = null;
});

replayBtn.addEventListener("click", resetSimulation);

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
  if (isPaused) sim?.stopLoop();
  else sim?.startLoop();
});

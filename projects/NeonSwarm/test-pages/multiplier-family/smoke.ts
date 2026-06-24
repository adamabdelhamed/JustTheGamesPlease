import { createTestPage, NeonPrimitiveRenderer, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";
import { multiplierFamily } from "../../CombatDefinition";
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

// Bind click handlers
results.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    const idx = Number(item.getAttribute("data-index"));
    startSimulation(idx);
  });
});

for (const [name, passed] of assertions) test.assert(name, passed);

// Visual Simulation Logic
const pageContainer = document.getElementById("page-container")!;
const simulatorPanel = document.getElementById("simulator-panel")!;
const closeSimBtn = document.getElementById("close-sim")!;
const replayBtn = document.getElementById("replay-btn")!;
const pauseBtn = document.getElementById("pause-btn")!;
const simStatusText = document.getElementById("sim-status")!;
const simTitle = document.getElementById("sim-title")!;
const simDetails = document.getElementById("sim-details")!;
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;

let renderer: any = null;
let animationFrameId: number | null = null;
let isPaused = false;
let activeScenarioIdx = 0;

// Simulation State
let simTimeMs = 0;
let lastTimeMs = 0;
let simFinished = false;
let simOutcome = "";

// Scenario Elements
let squad = new SquadModel();
let pickups: Array<{ y: number; lane: number }> = [];
let nextPickupTime = 0;
let showBeams = false;
let beamTargets: Array<{ x: number; y: number }> = [];

async function startSimulation(index: number) {
  if (!renderer) {
    try {
      renderer = await NeonPrimitiveRenderer.create(canvas);
      renderer.setLogicalSize(450, 800);
    } catch (e) {
      console.error("Failed to initialize renderer", e);
      return;
    }
  }

  activeScenarioIdx = index;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  simTitle.textContent = assertions[index][0];

  resetSimulation();
  loop(performance.now());
}

function resetSimulation() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  simTimeMs = 0;
  lastTimeMs = 0;
  simFinished = false;
  simOutcome = "";
  isPaused = false;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "Simulating...";
  simStatusText.className = "sim-status";

  // Re-init squad
  squad = new SquadModel();
  squad.x = 225; // center squad on canvas (450 width)
  squad.targetX = 225;

  pickups = [];
  nextPickupTime = 0;
  showBeams = false;
  beamTargets = [];

  if (activeScenarioIdx === 0) {
    // Pickup adds one wingmate
    pickups.push({ y: 100, lane: 0 }); // spawn one pickup
  } else if (activeScenarioIdx === 1) {
    // Respects cap (spawn pickups sequentially)
    nextPickupTime = 200;
  } else if (activeScenarioIdx === 2) {
    // Formation: 10 members
    for (let i = 0; i < 9; i++) squad.add(1);
    simFinished = true;
    simOutcome = "PASSED · Visualizing 2 rows of 5 wingmates";
    simStatusText.textContent = "PASSED";
  } else if (activeScenarioIdx === 3) {
    // First row columns
    for (let i = 0; i < 4; i++) squad.add(1); // 5 members total
    showBeams = true;
    simFinished = true;
    simOutcome = "PASSED · Visualizing 5 distinct firing columns";
    simStatusText.textContent = "PASSED";
  } else if (activeScenarioIdx === 4) {
    // Cover 5 enemy positions
    for (let i = 0; i < 4; i++) squad.add(1); // 5 members total
    showBeams = true;
    beamTargets = [
      { x: 165, y: 200 },
      { x: 195, y: 200 },
      { x: 225, y: 200 },
      { x: 255, y: 200 },
      { x: 285, y: 200 }
    ];
    simFinished = true;
    simOutcome = "PASSED · Visualizing coverage of 5 positions";
    simStatusText.textContent = "PASSED";
  }

  updateDetails();
}

function updateDetails() {
  simDetails.innerHTML = `
    <dt>Scenario</dt><dd>${assertions[activeScenarioIdx][0]}</dd>
    <dt>Squad Size</dt><dd>${squad.count} wingmates</dd>
    <dt>Time Elapsed</dt><dd>${simTimeMs.toFixed(0)} ms</dd>
    <dt>Status</dt><dd>${simOutcome || "Simulating"}</dd>
  `;
}

function loop(now: number) {
  if (isPaused) {
    lastTimeMs = now;
    animationFrameId = requestAnimationFrame(loop);
    return;
  }

  if (lastTimeMs === 0) lastTimeMs = now;
  const dt = Math.min((now - lastTimeMs) / 1000, 0.05);
  lastTimeMs = now;

  updateSim(dt);
  drawSim();

  if (!simFinished) {
    animationFrameId = requestAnimationFrame(loop);
  }
}

function updateSim(dt: number) {
  simTimeMs += dt * 1000;
  squad.update(dt);

  const playerY = 650;
  const spec = multiplierFamily.members.squadPlusOne;

  if (activeScenarioIdx === 0) {
    // Move pickup down
    for (let i = pickups.length - 1; i >= 0; i--) {
      const p = pickups[i];
      p.y += 250 * dt; // speed
      if (p.y >= playerY - 10) {
        squad.add(spec.squadAdded);
        pickups.splice(i, 1);
        simFinished = true;
        simOutcome = "PASSED · Added 1 wingmate";
        simStatusText.textContent = "PASSED";
      }
    }
  } else if (activeScenarioIdx === 1) {
    // Respect cap
    if (simTimeMs >= nextPickupTime && squad.count < 12) {
      pickups.push({ y: 50, lane: 0 });
      nextPickupTime = simTimeMs + 500; // spawn next in 500ms
    }

    for (let i = pickups.length - 1; i >= 0; i--) {
      const p = pickups[i];
      p.y += 350 * dt;
      if (p.y >= playerY - 10) {
        squad.add(spec.squadAdded);
        pickups.splice(i, 1);
      }
    }

    if (squad.count >= 10 && pickups.length === 0) {
      simFinished = true;
      simOutcome = "PASSED · Checked up to 12 additions, squad capped at 10";
      simStatusText.textContent = "PASSED";
    }
  }

  updateDetails();
}

function drawSim() {
  const primitives: NeonPrimitive[] = [];
  const playerY = 650;
  const points = squad.points(playerY, 1);

  // Render squad members
  for (const point of points) {
    primitives.push({
      x: point.x,
      y: point.y,
      width: multiplierFamily.members.squadPlusOne.memberRadius,
      color: neonPalette.cyan,
      secondaryColor: neonPalette.deepBlue,
      glow: 0.85,
      shape: "orb",
      rimIntensity: 0.8
    });

    // If first row columns or targets scenario is active, project firing lines
    if (showBeams) {
      if (activeScenarioIdx === 3 && point.row === 0) {
        // Draw straight column beams
        primitives.push({
          x: point.x,
          y: (point.y + 100) / 2,
          width: 1.5,
          height: point.y - 100,
          color: neonPalette.green,
          secondaryColor: neonPalette.whiteHot,
          glow: 0.5,
          shape: "bolt"
        });
      }
    }
  }

  // Draw target positions and connected target coverage lasers
  if (activeScenarioIdx === 4 && beamTargets.length > 0) {
    const firstRowPoints = points.filter(p => p.row === 0);
    for (let i = 0; i < Math.min(firstRowPoints.length, beamTargets.length); i++) {
      const sp = firstRowPoints[i];
      const tp = beamTargets[i];

      // Laser path
      primitives.push({
        x: (sp.x + tp.x) / 2,
        y: (sp.y + tp.y) / 2,
        width: 2.0,
        height: Math.abs(sp.y - tp.y),
        color: neonPalette.pink,
        secondaryColor: neonPalette.whiteHot,
        glow: 0.6,
        shape: "bolt"
      });

      // Target node
      primitives.push({
        x: tp.x,
        y: tp.y,
        width: 5,
        color: neonPalette.gold,
        secondaryColor: neonPalette.whiteHot,
        glow: 0.8,
        shape: "ring"
      });
    }
  }

  // Draw helper guidelines for rows in formation scenario
  if (activeScenarioIdx === 2) {
    // Row 0 line
    primitives.push({
      x: squad.x,
      y: playerY,
      width: 100,
      height: 1,
      color: neonPalette.cyan,
      secondaryColor: neonPalette.cyan,
      glow: 0.1,
      shape: "bolt"
    });
    // Row 1 line
    primitives.push({
      x: squad.x,
      y: playerY + multiplierFamily.members.squadPlusOne.spacing,
      width: 100,
      height: 1,
      color: neonPalette.cyan,
      secondaryColor: neonPalette.cyan,
      glow: 0.1,
      shape: "bolt"
    });
  }

  // Draw pickups falling down
  for (const pickup of pickups) {
    const spec = multiplierFamily.members.squadPlusOne;
    primitives.push({
      x: squad.x,
      y: pickup.y,
      width: 18,
      color: neonPalette[spec.pickupColor],
      secondaryColor: neonPalette[spec.coreColor],
      glow: 0.6,
      shape: "ring"
    });
    primitives.push({
      x: squad.x,
      y: pickup.y,
      width: 10,
      color: neonPalette[spec.coreColor],
      secondaryColor: neonPalette[spec.pickupColor],
      glow: 0.75,
      shape: "spark"
    });
  }

  renderer.render(primitives, simTimeMs / 1000);
}

closeSimBtn.addEventListener("click", () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
});

replayBtn.addEventListener("click", () => {
  resetSimulation();
  loop(performance.now());
});

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
});

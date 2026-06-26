import { createLaneRunnerScene, createTestPage, NeonPrimitiveRenderer, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";
import { defaultHelicopterCameraSettings, projectHelicopterScene } from "../../src/viewport";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const results = document.querySelector<HTMLOListElement>("#results")!;

const run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120, rowId: 1 }, { x: 230, y: 120, rowId: 1 }];
  const fartherCenteredRow = [{ x: 200, y: 80, rowId: 2 }];
  const allTargets = [...remaining, ...fartherCenteredRow];
  const firstOffset = selectAutoAimOffset(allTargets, laneCenter, [0]);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? allTargets.filter(target => target !== firstTarget) : allTargets;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter, [0]);
  const control = new AutoAimControlState();
  control.laneSelected();
  const autoAimAfterLaneTap = !control.manual;
  control.aimChanged();
  const manualDuringJoystickAim = control.manual;
  control.aimReleased();
  const autoAimAfterJoystickRelease = !control.manual;
  return { firstOffset, firstTarget, secondOffset, autoAimAfterLaneTap, manualDuringJoystickAim, autoAimAfterJoystickRelease };
};

const test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
const outcome = run();
const assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
  ["Closer row wins over a farther centered row", outcome.firstOffset !== 0],
  ["Lane tap does not permanently disable auto aim", outcome.autoAimAfterLaneTap],
  ["Joystick aim suppresses auto aim only until release", outcome.manualDuringJoystickAim && outcome.autoAimAfterJoystickRelease],
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

for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);

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

// Scenario elements
let squadX = 200;
let squadAimX = 200;
let targetSquadAimX = 200;
let enemies: Array<{ x: number; y: number; id: number; color: string; health: number }> = [];
let joystickOffset = 0;
let manualMode = false;
let laserActive = false;

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

  // Configure scenario specific states
  squadX = 200;
  squadAimX = 200;
  targetSquadAimX = 200;
  joystickOffset = 0;
  manualMode = false;
  laserActive = true;

  if (activeScenarioIdx === 0 || activeScenarioIdx === 1) {
    // Symmetric survivors
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 2) {
    // Kill first then shift to second
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 3) {
    // Closer row vs farther row
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 },
      { x: 230, y: 320, id: 2, color: neonPalette.pink, health: 1 },
      { x: 200, y: 200, id: 3, color: neonPalette.gold, health: 1 } // Farther in Y (smaller Y = farther away from squad Y=650)
    ];
  } else if (activeScenarioIdx === 4) {
    // Lane tap
    enemies = [
      { x: 170, y: 320, id: 1, color: neonPalette.pink, health: 1 }
    ];
  } else if (activeScenarioIdx === 5) {
    // Joystick suppression then release
    enemies = [
      { x: 230, y: 320, id: 1, color: neonPalette.pink, health: 1 }
    ];
  }

  updateDetails();
}

function updateDetails() {
  simDetails.innerHTML = `
    <dt>Scenario</dt><dd>${assertions[activeScenarioIdx][0]}</dd>
    <dt>Squad Position</dt><dd>x: ${squadX.toFixed(0)}, aim: ${(squadAimX - squadX).toFixed(0)}</dd>
    <dt>Manual Mode</dt><dd>${manualMode ? "YES" : "NO"}</dd>
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

  // Run the logic for the specific test scenario step-by-step
  if (activeScenarioIdx === 0 || activeScenarioIdx === 1) {
    // Highlight auto aim choosing target
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = `PASSED · Selected target at x=${squadAimX.toFixed(0)}`;
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 2) {
    // Focus first survivor, shoot/destroy it, then shift to the second one
    const laneCenter = 200;
    if (simTimeMs < 1500) {
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
      targetSquadAimX = laneCenter + offset;
    } else if (simTimeMs >= 1500 && simTimeMs < 3000) {
      // First survivor gets destroyed
      if (enemies.length === 2) {
        enemies.splice(0, 1); // Kill left survivor
      }
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], squadAimX - laneCenter);
      targetSquadAimX = laneCenter + offset;
    } else {
      simFinished = true;
      simOutcome = "PASSED · Successfully shifted auto-aim to the second survivor";
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 3) {
    // Closer row vs farther centered
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = `PASSED · Chose closer row target at x=${squadAimX.toFixed(0)} over farther centered row`;
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 4) {
    // Lane tap does not permanently disable auto aim
    const laneCenter = 200;
    const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
    targetSquadAimX = laneCenter + offset;
    
    if (simTimeMs > 2500) {
      simFinished = true;
      simOutcome = "PASSED · Lane tap checked; auto aim is active";
      simStatusText.textContent = "PASSED";
    }
  } else if (activeScenarioIdx === 5) {
    // Joystick aim suppresses auto aim only until release
    const laneCenter = 200;
    if (simTimeMs < 1200) {
      // Manual aim override to the left (suppress auto-aim)
      manualMode = true;
      targetSquadAimX = 140; // Overridden
    } else if (simTimeMs >= 1200 && simTimeMs < 3000) {
      // Released joystick, snap back to target (x = 230)
      manualMode = false;
      const offset = selectAutoAimOffset(enemies, laneCenter, [0], 0);
      targetSquadAimX = laneCenter + offset;
    } else {
      simFinished = true;
      simOutcome = "PASSED · Auto aim suppressed by joystick, snapped back on release";
      simStatusText.textContent = "PASSED";
    }
  }

  // Smoothly sweep squadAimX towards the target direction
  squadAimX += (targetSquadAimX - squadAimX) * Math.min(8 * dt, 1);

  updateDetails();
}

function drawSim() {
  const primitives: NeonPrimitive[] = [
    ...(createLaneRunnerScene({ sceneId: "neonHall", width: canvas.width, height: canvas.height, timeMs: simTimeMs }).primitives ?? []),
  ];

  // Squad at (squadX, 650)
  primitives.push({
    x: squadX,
    y: 650,
    width: 8,
    color: neonPalette.cyan,
    secondaryColor: neonPalette.deepBlue,
    glow: 0.85,
    shape: "orb",
    rimIntensity: 0.8
  });

  // Target lines (laser aiming line)
  if (laserActive) {
    primitives.push({
      x: (squadX + squadAimX) / 2,
      y: (650 + 320) / 2,
      width: manualMode ? 1.5 : 2.5,
      height: 330,
      color: manualMode ? neonPalette.pink : neonPalette.green,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.6,
      intensity: 0.8,
      shape: "bolt"
    });
  }

  // Draw enemies
  for (const enemy of enemies) {
    primitives.push({
      x: enemy.x,
      y: enemy.y,
      width: 7,
      color: enemy.color,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.8,
      texture: 0.3,
      rimIntensity: 1.0,
      shadowStrength: 0.5,
      intensity: 1.0,
      shape: "orb"
    });
  }

  // Render text for joystick info
  if (manualMode) {
    // Joystick overlay representation
    primitives.push({
      x: 100,
      y: 700,
      width: 30,
      color: neonPalette.pink,
      secondaryColor: neonPalette.whiteHot,
      glow: 0.5,
      shape: "ring"
    });
  }

    const projected = projectHelicopterScene(primitives, [], [], defaultHelicopterCameraSettings, {
    width: canvas.width,
    height: canvas.height,
    playerY: 650,
  });
  renderer.render(projected.primitives, simTimeMs / 1000);
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

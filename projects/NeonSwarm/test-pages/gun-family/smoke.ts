import { createTestPage, NeonPrimitiveRenderer, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";
import { gunFamily, orbFamily, type GunLevel, type GunMember } from "../../CombatDefinition";
import { evaluateGunAgainstOrb, type GunSmokeResult } from "../../src/combat/gunEvaluator";

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
  
  // Bind click handlers to list items
  const items = resultsElement.querySelectorAll("li");
  items.forEach(item => {
    item.addEventListener("click", () => {
      const gunId = item.getAttribute("data-gun-id");
      if (gunId) {
        startSimulation(gunId);
      }
    });
  });

  return results;
};

// Test harness registration (runs headless instantly)
const test = createTestPage("neon-swarm-gun-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.gunId} kills weakest orb before contact`,
    result.passed,
    `kill=${result.killTimeMs ?? "never"}ms arrival=${result.enemyArrivalMs.toFixed(0)}ms`,
  );
}

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
let activeGunId: string | null = null;

// Simulation state
let simTimeMs = 0;
let lastTimeMs = 0;
let enemyHealth = 0;
let enemyY = 0;
let enemyX = 225;
let playerY = 650;
let playerX = 225;
let projectiles: Array<{
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  damage: number;
  color: string;
  trailColor: string;
  coreColor: string;
  shape: string;
  aspect: number;
  trailWidthScale: number;
  visualIntensity: number;
  trailLength: number;
  tracer: boolean;
}> = [];
let effects: Array<{
  x: number;
  y: number;
  color: string;
  secondaryColor: string;
  radius: number;
  expiresAt: number;
  duration: number;
  style: string;
  kind: "muzzle" | "impact" | "death";
  seed: number;
}> = [];

let cooldown = 0;
let shotSequence = 0;
let simFinished = false;
let simOutcome = "";
let simEndingTime: number | null = null;

async function startSimulation(gunId: string) {
  if (!renderer) {
    try {
      renderer = await NeonPrimitiveRenderer.create(canvas);
      renderer.setLogicalSize(450, 800);
    } catch (e) {
      console.error("Failed to initialize renderer", e);
      return;
    }
  }

  activeGunId = gunId;
  pageContainer.classList.add("simulator-active");
  simulatorPanel.removeAttribute("hidden");
  
  const gun = gunFamily.members[gunId as keyof typeof gunFamily.members];
  simTitle.textContent = `${gun.label} Simulation`;
  
  resetSimulation();
  loop(performance.now());
}

function resetSimulation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  const gun = gunFamily.members[activeGunId as keyof typeof gunFamily.members];
  const orb = orbFamily.members.basicOrb;

  simTimeMs = 0;
  lastTimeMs = 0;
  enemyHealth = orb.health;
  // Start enemy at y = 110, so it travels exactly 540 pixels to reach player at y = 650 (650 - 110 = 540)
  enemyY = 110; 
  projectiles = [];
  effects = [];
  cooldown = 0;
  shotSequence = 0;
  simFinished = false;
  simEndingTime = null;
  simOutcome = "";
  isPaused = false;
  pauseBtn.textContent = "Pause";
  simStatusText.textContent = "Simulating...";
  simStatusText.className = "sim-status";

  updateDetails();
}

function updateDetails() {
  if (!activeGunId) return;
  const gun = gunFamily.members[activeGunId as keyof typeof gunFamily.members];
  const orb = orbFamily.members.basicOrb;
  const level = gun.levels[0];

  simDetails.innerHTML = `
    <dt>Weapon</dt><dd>${gun.label} (Lvl ${level.level})</dd>
    <dt>Fire Rate</dt><dd>${level.fireRatePerSecond}/s</dd>
    <dt>Damage</dt><dd>${level.damage}</dd>
    <dt>Speed</dt><dd>${level.projectileSpeed} px/s</dd>
    <dt>Enemy Health</dt><dd>${enemyHealth.toFixed(2)} / ${orb.health}</dd>
    <dt>Enemy Speed</dt><dd>${orb.speed} px/s</dd>
    <dt>Time Elapsed</dt><dd>${simTimeMs.toFixed(0)} ms</dd>
    <dt>Outcome</dt><dd>${simOutcome || "In Progress"}</dd>
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
  const gun = gunFamily.members[activeGunId as keyof typeof gunFamily.members];
  const orb = orbFamily.members.basicOrb;
  const level = gun.levels[0];

  // Spawn projectiles according to fire rate
  cooldown -= dt;
  if (cooldown <= 0 && !simFinished) {
    const count = Math.max(1, level.projectileCount);
    for (let index = 0; index < count; index++) {
      const offset = count === 1 ? 0 : (index / (count - 1) - 0.5) * level.spreadDegrees;
      const angle = offset * Math.PI / 180;
      const speed = level.projectileSpeed;
      shotSequence++;
      projectiles.push({
        x: playerX,
        y: playerY - 22,
        vx: Math.sin(angle) * speed,
        vy: -Math.cos(angle) * speed,
        radius: level.projectileRadius,
        damage: level.damage,
        color: neonPalette[gun.visualIdentity.projectileColor],
        trailColor: neonPalette[gun.visualIdentity.trailColor],
        coreColor: neonPalette[gun.visualIdentity.coreColor],
        shape: gun.visualIdentity.projectileShape,
        aspect: gun.visualIdentity.projectileAspect,
        trailWidthScale: gun.visualIdentity.trailWidthScale,
        visualIntensity: gun.visualIdentity.visualIntensity,
        trailLength: level.trailLength,
        tracer: level.tracerEveryNthShot > 0 && shotSequence % level.tracerEveryNthShot === 0,
      });
    }

    effects.push({
      kind: "muzzle",
      style: gun.visualIdentity.muzzleEffect,
      x: playerX,
      y: playerY - 22,
      color: neonPalette[gun.visualIdentity.projectileColor],
      secondaryColor: neonPalette[gun.visualIdentity.trailColor],
      radius: 10 * level.muzzleFlashScale,
      expiresAt: simTimeMs + gun.visualIdentity.muzzleDurationMs,
      duration: gun.visualIdentity.muzzleDurationMs,
      seed: shotSequence,
    });

    cooldown += 1 / level.fireRatePerSecond;
  }

  // Move projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.y < 0) {
      projectiles.splice(i, 1);
      continue;
    }

    // Check collision with enemy
    if (!simFinished) {
      const dx = p.x - enemyX;
      const dy = p.y - enemyY;
      const hitRadius = p.radius + orb.radius;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        enemyHealth -= p.damage;
        enemyY -= level.knockback; // knockback push-back
        
        effects.push({
          kind: "impact",
          style: p.shape === "needle" ? "pinSpark" : "impactRing",
          x: p.x,
          y: p.y,
          color: p.color,
          secondaryColor: p.trailColor,
          radius: p.radius * level.hitFlashScale * 4,
          expiresAt: simTimeMs + gun.visualIdentity.impactDurationMs,
          duration: gun.visualIdentity.impactDurationMs,
          seed: i,
        });

        projectiles.splice(i, 1);

        if (enemyHealth <= 0 && !simEndingTime) {
          enemyHealth = 0;
          simEndingTime = simTimeMs + 1200; // allow 1.2s for death animation
          simOutcome = `PASSED · Defeated at ${simTimeMs.toFixed(0)}ms`;
          simStatusText.textContent = "PASSED";
          simStatusText.className = "sim-status";
          
          effects.push({
            kind: "death",
            style: "deathBloom",
            x: enemyX,
            y: enemyY,
            color: neonPalette[orb.baseColor],
            secondaryColor: neonPalette[orb.rimColor],
            radius: orb.radius * orb.deathFlashScale,
            expiresAt: simTimeMs + orb.hitFlashDurationMs * 2,
            duration: orb.hitFlashDurationMs * 2,
            seed: 99,
          });
        }
      }
    }
  }

  // Move enemy
  if (!simFinished && !simEndingTime) {
    enemyY += orb.speed * dt;
    if (enemyY >= playerY) {
      enemyY = playerY;
      simEndingTime = simTimeMs + 800; // allow 800ms to show impact
      simOutcome = "FAILED · Orb reached contact";
      simStatusText.textContent = "FAILED";
      simStatusText.className = "sim-status failed";
    }
  }

  if (simEndingTime && simTimeMs >= simEndingTime) {
    simFinished = true;
  }

  // Clean effects
  for (let i = effects.length - 1; i >= 0; i--) {
    if (effects[i].expiresAt <= simTimeMs) {
      effects.splice(i, 1);
    }
  }

  updateDetails();
}

function drawSim() {
  const primitives: NeonPrimitive[] = [];

  // Player
  primitives.push({
    x: playerX,
    y: playerY,
    width: 6,
    color: neonPalette.cyan,
    secondaryColor: neonPalette.deepBlue,
    glow: 0.85,
    shape: "orb",
    rimIntensity: 0.8
  });

  // Projectiles
  for (const p of projectiles) {
    primitives.push({
      x: p.x,
      y: p.y + p.trailLength / 2,
      width: Math.max(p.radius * p.trailWidthScale, 1.1),
      height: p.trailLength,
      color: p.trailColor,
      secondaryColor: p.color,
      glow: p.tracer ? 1.25 : 0.45,
      intensity: p.visualIntensity * (p.tracer ? 1.45 : 0.72),
      shape: "bolt",
    });
    primitives.push({
      x: p.x,
      y: p.y,
      width: p.radius,
      height: p.radius * p.aspect,
      color: p.color,
      secondaryColor: p.coreColor,
      glow: p.tracer ? 1.4 : 0.72,
      intensity: p.visualIntensity * (p.tracer ? 1.35 : 1),
      shape: p.shape === "needle" ? "circle" : "bolt",
    });
  }

  // Enemy
  if (!simFinished || enemyHealth > 0) {
    const orb = orbFamily.members.basicOrb;
    primitives.push({
      x: enemyX,
      y: enemyY,
      width: orb.radius,
      color: neonPalette[orb.rimColor],
      secondaryColor: neonPalette[orb.baseColor],
      glow: orb.glow,
      texture: orb.surfaceTexture,
      rimIntensity: orb.rimIntensity,
      shadowStrength: orb.shadowStrength,
      intensity: 1,
      shape: "orb",
    });
  }

  // Effects
  for (const effect of effects) {
    const life = Math.max(0, (effect.expiresAt - simTimeMs) / effect.duration);
    const progress = 1 - life;
    const size = effect.radius * (1 + progress * 1.35);

    if (effect.kind === "muzzle") {
      primitives.push({
        x: effect.x,
        y: effect.y,
        width: size,
        color: effect.color,
        secondaryColor: effect.secondaryColor,
        glow: 0.75 * life,
        intensity: life,
        shape: "ring"
      });
    } else if (effect.kind === "impact") {
      primitives.push({
        x: effect.x,
        y: effect.y,
        width: size,
        color: effect.color,
        secondaryColor: effect.secondaryColor,
        glow: 0.72 * life,
        intensity: life,
        shape: "ring"
      });
    } else if (effect.kind === "death") {
      primitives.push({
        x: effect.x,
        y: effect.y,
        width: size,
        color: effect.color,
        secondaryColor: effect.secondaryColor,
        glow: life,
        intensity: life,
        shape: "ring"
      });
    }
  }

  renderer.render(primitives, simTimeMs / 1000);
}

closeSimBtn.addEventListener("click", () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  pageContainer.classList.remove("simulator-active");
  simulatorPanel.setAttribute("hidden", "true");
  activeGunId = null;
});

replayBtn.addEventListener("click", () => {
  if (activeGunId) {
    resetSimulation();
    loop(performance.now());
  }
});

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
});

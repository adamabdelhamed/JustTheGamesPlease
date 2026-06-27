import { orbFamily, shieldFamily, type OrbId, type ShieldId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const shieldSelect = document.querySelector<HTMLSelectElement>("#shield-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const enemyHpInput = document.querySelector<HTMLInputElement>("#enemy-hp")!;
const shieldStrengthReadout = document.querySelector<HTMLElement>("#shield-strength")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const audioId = (id: string): string => `../../../../audio/${id}`;

applyPortraitStage(gameElement, laneRunnerViewport);

try {
  const sim = await NeonSwarmSimulation.create({
    mode: "lab",
    canvas,
    stageElement: gameElement,
    sound: {
      play: id => window.gameAudio?.play(audioId(id)),
      playRotated: (id, alternatives) => window.gameAudio?.playRotated(audioId(id), alternatives),
    },
  });

  for (const [id, shield] of Object.entries(shieldFamily.members)) shieldSelect.add(new Option(shield.label, id));
  for (const [id, enemy] of Object.entries(orbFamily.members)) enemySelect.add(new Option(enemy.label, id));
  shieldSelect.value = "lightGuard";
  enemySelect.value = "basicOrb";

  const selectedShield = (): ShieldId => shieldSelect.value as ShieldId;
  const selectedEnemy = (): OrbId => enemySelect.value as OrbId;
  const updateReadout = (): void => {
    const def = shieldFamily.members[selectedShield()];
    const enemy = orbFamily.members[selectedEnemy()];
    const snapshot = sim.snapshot();
    weaponReadout.textContent = def.label;
    scoreReadout.textContent = `Kills ${snapshot.kills}`;
    shieldStrengthReadout.textContent = snapshot.active.shield ? "equipped" : "none";
    specReadout.innerHTML = [
      ["Radius", String(def.radius)],
      ["Strength", `${def.maxCharges}`],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Orbiters", `${def.orbiterCount} x ${def.orbiterShape}`],
      ["Enemy", enemy.label],
      ["Enemy speed", String(enemy.speed)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (): void => {
    sim.equipShield(selectedShield());
    updateReadout();
  };
  const spawnEnemy = (lane: 0 | 1): void => {
    const requestedHp = Number.parseFloat(enemyHpInput.value);
    const definition = orbFamily.members[selectedEnemy()];
    sim.spawnEnemy({
      enemyId: selectedEnemy(),
      lane,
      health: Number.isFinite(requestedHp) && requestedHp > 0 ? requestedHp : definition.health,
    });
  };

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy) as 0 | 1));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => sim.spawnShieldPickup({ shieldId: selectedShield(), lane: Number(button.dataset.spawnPickup) as 0 | 1 }));
  });
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    window.setTimeout(() => spawnEnemy(0), 450);
    window.setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => sim.clearStage());
  shieldSelect.addEventListener("change", equip);
  enemySelect.addEventListener("change", updateReadout);
  enemyHpInput.addEventListener("input", updateReadout);

  bindSquadInput(gameElement, "#joystick", {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane),
    setAim: value => sim.setSquadAim(value),
    releaseAim: () => sim.releaseAim(),
  });

  equip();
  spawnEnemy(0);
  spawnEnemy(1);
  sim.startLoop();
  window.setInterval(updateReadout, 200);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window {
    gameAudio?: {
      play(id: string): void;
      playRotated(id: string, alternatives: number): void;
    };
  }
}

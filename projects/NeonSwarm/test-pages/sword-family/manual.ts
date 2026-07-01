import { orbFamily, swordFamily, type OrbId, type SwordId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { defaultSwordVisualTuning, type SwordVisualTuning } from "../../src/familyVisuals";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const swordSelect = document.querySelector<HTMLSelectElement>("#sword-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const simSpeed = document.querySelector<HTMLInputElement>("#sim-speed")!;
const simSpeedReadout = document.querySelector<HTMLOutputElement>("#sim-speed-readout")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const tuningReadout = document.querySelector<HTMLTextAreaElement>("#tuning-readout")!;
const tuningInputs = Array.from(document.querySelectorAll<HTMLInputElement>("[data-tuning]"));
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

  for (const [id, sword] of Object.entries(swordFamily.members)) swordSelect.add(new Option(sword.label, id));
  for (const [id, enemy] of Object.entries(orbFamily.members)) enemySelect.add(new Option(enemy.label, id));
  swordSelect.value = "arcBlade";
  enemySelect.value = "basicOrb";

  const selectedSword = (): SwordId => swordSelect.value as SwordId;
  const selectedEnemy = (): OrbId => enemySelect.value as OrbId;
  const currentTuning = (): SwordVisualTuning => Object.fromEntries(tuningInputs.map(input => [
    input.dataset.tuning!,
    input.dataset.tuning === "trailSegments" ? Math.round(Number(input.value)) : Number(input.value),
  ])) as unknown as SwordVisualTuning;
  const updateTuning = (): void => {
    const tuning = currentTuning();
    sim.setSwordVisualTuning(tuning);
    tuningReadout.value = JSON.stringify(tuning, null, 2);
  };
  const updateReadout = (): void => {
    const def = swordFamily.members[selectedSword()];
    const enemy = orbFamily.members[selectedEnemy()];
    const snapshot = sim.snapshot();
    weaponReadout.textContent = def.label;
    scoreReadout.textContent = `Kills ${snapshot.kills}`;
    specReadout.innerHTML = [
      ["Range", `${def.range}px`],
      ["Arc", `${def.arcDegrees}deg`],
      ["Damage", String(def.damage)],
      ["Cooldown", `${def.cooldownSeconds}s`],
      ["Max targets", String(def.maxTargets)],
      ["Targeting", def.targetingMode],
      ["Slash duration", `${def.slashDurationMs}ms`],
      ["Enemy", enemy.label],
      ["Enemy HP", String(enemy.health)],
      ["Enemy speed", String(enemy.speed)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (): void => {
    sim.equipSword(selectedSword());
    updateReadout();
  };
  const updateSimSpeed = (): void => {
    const speed = Number(simSpeed.value);
    sim.setSimulationSpeed(speed);
    simSpeedReadout.value = `${speed.toFixed(2)}x`;
    simSpeedReadout.textContent = simSpeedReadout.value;
  };
  const spawnEnemy = (lane: 0 | 1): void => {
    sim.spawnEnemy({ enemyId: selectedEnemy(), lane });
  };

  for (const input of tuningInputs) {
    const key = input.dataset.tuning as keyof SwordVisualTuning;
    input.value = String(defaultSwordVisualTuning[key]);
    input.addEventListener("input", updateTuning);
  }
  updateTuning();

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy) as 0 | 1));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => sim.spawnSwordPickup({ swordId: selectedSword(), lane: Number(button.dataset.spawnPickup) as 0 | 1 }));
  });
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    window.setTimeout(() => spawnEnemy(0), 450);
    window.setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => sim.clearStage());
  swordSelect.addEventListener("change", equip);
  enemySelect.addEventListener("change", updateReadout);
  simSpeed.addEventListener("input", updateSimSpeed);

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane),
  });

  equip();
  updateSimSpeed();
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
      setMusicVolume?(volume: number): void;
    };
  }
}

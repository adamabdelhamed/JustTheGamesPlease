import { orbFamily, swordFamily, type OrbId, type SwordId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const swordSelect = document.querySelector<HTMLSelectElement>("#sword-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
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
  const spawnEnemy = (lane: 0 | 1): void => {
    sim.spawnEnemy({ enemyId: selectedEnemy(), lane });
  };

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

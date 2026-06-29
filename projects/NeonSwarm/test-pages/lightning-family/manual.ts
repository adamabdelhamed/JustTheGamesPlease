import { lightningFamily, orbFamily, type LightningId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";
import { bindFamilyLabControls } from "../family-lab-controls";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const lightningSelect = document.querySelector<HTMLSelectElement>("#lightning-select")!;
const levelSelect = document.querySelector<HTMLSelectElement>("#level-select")!;
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

  for (const [id, item] of Object.entries(lightningFamily.members)) lightningSelect.add(new Option(item.label, id));
  lightningSelect.value = "chainSpark";

  const selectedLightning = (): LightningId => lightningSelect.value as LightningId;
  const selectedLevel = (): number => Number(levelSelect.value);
  const syncLevelOptions = (): void => {
    const previous = selectedLevel();
    const item = lightningFamily.members[selectedLightning()];
    levelSelect.replaceChildren(...item.levels.map(level => new Option(String(level.level), String(level.level))));
    levelSelect.value = String(item.levels.some(level => level.level === previous) ? previous : item.levels[0].level);
  };
  const updateReadout = (): void => {
    const item = lightningFamily.members[selectedLightning()];
    const level = item.levels.find(candidate => candidate.level === selectedLevel()) ?? item.levels[0];
    const enemy = orbFamily.members[selectedEnemy()];
    const snapshot = sim.snapshot();
    weaponReadout.textContent = `${item.label} · L${level.level}`;
    scoreReadout.textContent = `Kills ${snapshot.kills}`;
    specReadout.innerHTML = [
      ["Targeting", item.targetingMode],
      ["Cooldown", `${level.cooldownSeconds}s`],
      ["Damage", String(level.damage)],
      ["Range", `${level.chainRange}px`],
      ["Jumps", String(level.maxJumps)],
      ["Fanout", String(level.branchFanout)],
      ["Depth", String(level.maxDepth)],
      ["Decay", String(level.branchDecay)],
      ["Enemy", enemy.label],
      ["Enemy HP", String(enemy.health)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (): void => {
    sim.equipLightning(selectedLightning(), selectedLevel());
    updateReadout();
  };
  const labControls = bindFamilyLabControls({
    sim,
    enemySelect,
    selectedWeapon: selectedLightning,
    spawnWeaponPickup: ({ weaponId, lane }) => sim.spawnLightningPickup({ lightningId: weaponId, lane }),
    onChange: updateReadout,
    enemySpawnY: 112,
  });
  const selectedEnemy = labControls.selectedEnemy;
  const spawnEnemy = labControls.spawnEnemy;

  document.querySelector<HTMLButtonElement>("#spawn-cluster")?.addEventListener("click", () => {
    for (let row = 0; row < 3; row++) {
      spawnEnemy(0, sim.laneX(0) + (row % 2 ? 18 : -16), 110 + row * 42, 100 + row);
      spawnEnemy(1, sim.laneX(1) + (row % 2 ? -20 : 16), 128 + row * 40, 110 + row);
    }
  });
  document.querySelector<HTMLButtonElement>("#spawn-wall")?.addEventListener("click", () => {
    for (let column = -2; column <= 2; column++) {
      spawnEnemy(0, sim.laneX(0) + column * 16, 128, 200);
      spawnEnemy(1, sim.laneX(1) + column * 16, 128, 200);
    }
  });
  lightningSelect.addEventListener("change", () => { syncLevelOptions(); equip(); });
  levelSelect.addEventListener("change", equip);

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane),
  });

  syncLevelOptions();
  equip();
  document.querySelector<HTMLButtonElement>("#spawn-cluster")?.click();
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

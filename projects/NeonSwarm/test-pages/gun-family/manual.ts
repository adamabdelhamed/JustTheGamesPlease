import { gunFamily, multiplierFamily, orbFamily, type GunId, type OrbId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const gunSelect = document.querySelector<HTMLSelectElement>("#gun-select")!;
const levelSelect = document.querySelector<HTMLSelectElement>("#level-select")!;
const enemySelect = document.querySelector<HTMLSelectElement>("#enemy-select")!;
const weaponReadout = document.querySelector<HTMLElement>("#weapon-readout")!;
const scoreReadout = document.querySelector<HTMLElement>("#score-readout")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const formationSize = document.querySelector<HTMLInputElement>("#formation-size")!;
const formationRows = document.querySelector<HTMLSelectElement>("#formation-rows")!;
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

  for (const [id, gun] of Object.entries(gunFamily.members)) gunSelect.add(new Option(gun.label, id));
  for (const [id, enemy] of Object.entries(orbFamily.members)) enemySelect.add(new Option(enemy.label, id));
  gunSelect.value = "pulsePistol";
  enemySelect.value = "basicOrb";

  const selectedGun = (): GunId => gunSelect.value as GunId;
  const selectedLevel = (): number => Number(levelSelect.value);
  const selectedEnemy = (): OrbId => enemySelect.value as OrbId;
  const updateReadout = (): void => {
    const gun = gunFamily.members[selectedGun()];
    const level = gun.levels.find(item => item.level === selectedLevel()) ?? gun.levels[0];
    const enemy = orbFamily.members[selectedEnemy()];
    const snapshot = sim.snapshot();
    weaponReadout.textContent = `${gun.label} · L${level.level}`;
    scoreReadout.textContent = `Kills ${snapshot.kills}`;
    specReadout.innerHTML = [
      ["Pattern", gun.shotPattern],
      ["Fire rate", `${level.fireRatePerSecond}/s`],
      ["Damage", String(level.damage)],
      ["Speed", String(level.projectileSpeed)],
      ["Radius", String(level.projectileRadius)],
      ["Burst", String(level.burstCount)],
      ["Pierce", String(level.pierce)],
      ["Enemy", enemy.label],
      ["Enemy HP", String(enemy.health)],
      ["Enemy speed", String(enemy.speed)],
      ["Squad", String(snapshot.squad.count)],
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };

  const equip = (): void => {
    sim.equipGun(selectedGun(), selectedLevel());
    updateReadout();
  };
  const spawnEnemy = (lane: 0 | 1, x = sim.laneX(lane), y = 105, rowId?: number): void => {
    sim.spawnEnemy({ enemyId: selectedEnemy(), lane, x, y, rowId });
  };

  document.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy) as 0 | 1));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => sim.spawnGunPickup({ gunId: selectedGun(), level: selectedLevel(), lane: Number(button.dataset.spawnPickup) as 0 | 1 }));
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-formation]").forEach(button => {
    button.addEventListener("click", () => {
      const lane = Number(button.dataset.spawnFormation) as 0 | 1;
      const count = Number(formationSize.value);
      const rows = Number(formationRows.value);
      const perRow = Math.ceil(count / rows);
      let remaining = count;
      for (let row = 0; row < rows; row++) {
        const rowId = performance.now() + row;
        const rowCount = Math.min(perRow, remaining);
        for (let column = 0; column < rowCount; column++) {
          spawnEnemy(lane, sim.laneX(lane) + (column - (rowCount - 1) / 2) * 15, 105 - row * 24, rowId);
        }
        remaining -= rowCount;
      }
    });
  });
  document.querySelectorAll<HTMLButtonElement>("[data-spawn-multiplier]").forEach(button => {
    button.addEventListener("click", () => sim.spawnMultiplierPickup({ lane: Number(button.dataset.spawnMultiplier) as 0 | 1, multiplierId: "squadPlusOne" }));
  });
  document.querySelector<HTMLButtonElement>("#spawn-wave")!.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    window.setTimeout(() => spawnEnemy(0), 450);
    window.setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector<HTMLButtonElement>("#clear-stage")!.addEventListener("click", () => sim.clearStage());
  gunSelect.addEventListener("change", equip);
  levelSelect.addEventListener("change", equip);
  enemySelect.addEventListener("change", updateReadout);

  bindSquadInput(gameElement, "#joystick", {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane),
    setAim: value => sim.setSquadAim(value),
    releaseAim: () => sim.releaseAim(),
  });

  sim.equipGun("pulsePistol", 1);
  spawnEnemy(0);
  spawnEnemy(1);
  sim.startLoop();
  window.setInterval(updateReadout, 200);
  updateReadout();
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

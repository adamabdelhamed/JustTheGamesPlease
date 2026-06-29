import { gunFamily, orbFamily, type GunId } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import { applyPortraitStage, laneRunnerViewport } from "../../src/viewport";
import { bindFamilyLabControls } from "../family-lab-controls";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const error = document.querySelector<HTMLElement>("#error")!;
const gunSelect = document.querySelector<HTMLSelectElement>("#gun-select")!;
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

  for (const [id, gun] of Object.entries(gunFamily.members)) gunSelect.add(new Option(gun.label, id));
  gunSelect.value = "pulsePistol";

  const selectedGun = (): GunId => gunSelect.value as GunId;
  const selectedLevel = (): number => Number(levelSelect.value);
  const syncLevelOptions = (): void => {
    const previousLevel = selectedLevel();
    const gun = gunFamily.members[selectedGun()];
    levelSelect.replaceChildren(...gun.levels.map(level => new Option(String(level.level), String(level.level))));
    const validLevel = gun.levels.some(level => level.level === previousLevel)
      ? previousLevel
      : gun.levels[0].level;
    levelSelect.value = String(validLevel);
  };
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
      ["Collision", `${level.collisionRadiusScale ?? 1}x`],
      ["Projectiles", String(level.projectileCount)],
      ["Spread", `${level.spreadDegrees}deg`],
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
  const labControls = bindFamilyLabControls({
    sim,
    enemySelect,
    selectedWeapon: selectedGun,
    spawnWeaponPickup: ({ weaponId, lane }) => sim.spawnGunPickup({ gunId: weaponId, lane }),
    onChange: updateReadout,
  });
  const selectedEnemy = labControls.selectedEnemy;
  const spawnEnemy = labControls.spawnEnemy;
  gunSelect.addEventListener("change", () => {
    syncLevelOptions();
    equip();
  });
  levelSelect.addEventListener("change", equip);
  enemySelect.addEventListener("change", updateReadout);

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane),
  });

  syncLevelOptions();
  sim.equipGun("pulsePistol", selectedLevel());
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

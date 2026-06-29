import { orbFamily, type OrbId } from "../CombatDefinition";
import type { NeonSwarmSimulation } from "../src/simulation/NeonSwarmSimulation";

type Lane = 0 | 1;

export interface FamilyLabControls<TWeaponId extends string> {
  selectedEnemy(): OrbId;
  spawnEnemy(lane: Lane, x?: number, y?: number, rowId?: number): void;
}

interface BindFamilyLabControlsOptions<TWeaponId extends string> {
  sim: NeonSwarmSimulation;
  enemySelect: HTMLSelectElement;
  selectedWeapon: () => TWeaponId;
  spawnWeaponPickup: (options: { weaponId: TWeaponId; lane: Lane }) => void;
  onChange?: () => void;
  enemySpawnY?: number;
  defaultEnemyId?: OrbId;
  root?: ParentNode;
}

const laneFromDataset = (value: string | undefined): Lane => Number(value) as Lane;

export const populateEnemySelect = (enemySelect: HTMLSelectElement, defaultEnemyId: OrbId = "basicOrb"): void => {
  enemySelect.replaceChildren(
    ...Object.entries(orbFamily.members).map(([id, enemy]) => new Option(enemy.label, id)),
  );
  enemySelect.value = defaultEnemyId;
};

export const bindFamilyLabControls = <TWeaponId extends string>({
  sim,
  enemySelect,
  selectedWeapon,
  spawnWeaponPickup,
  onChange,
  enemySpawnY = 105,
  defaultEnemyId = "basicOrb",
  root = document,
}: BindFamilyLabControlsOptions<TWeaponId>): FamilyLabControls<TWeaponId> => {
  populateEnemySelect(enemySelect, defaultEnemyId);

  const selectedEnemy = (): OrbId => enemySelect.value as OrbId;
  const spawnEnemy = (lane: Lane, x = sim.laneX(lane), y = enemySpawnY, rowId?: number): void => {
    sim.spawnEnemy({ enemyId: selectedEnemy(), lane, x, y, rowId, playSound: false });
  };

  root.querySelectorAll<HTMLButtonElement>("[data-spawn-enemy]").forEach(button => {
    button.addEventListener("click", () => spawnEnemy(laneFromDataset(button.dataset.spawnEnemy)));
  });
  root.querySelectorAll<HTMLButtonElement>("[data-spawn-pickup]").forEach(button => {
    button.addEventListener("click", () => {
      spawnWeaponPickup({ weaponId: selectedWeapon(), lane: laneFromDataset(button.dataset.spawnPickup) });
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-spawn-formation]").forEach(button => {
    button.addEventListener("click", () => {
      const lane = laneFromDataset(button.dataset.spawnFormation);
      const count = Number(root.querySelector<HTMLInputElement>("#formation-size")?.value ?? 5);
      const rows = Number(root.querySelector<HTMLSelectElement>("#formation-rows")?.value ?? 1);
      const perRow = Math.ceil(count / rows);
      let remaining = count;
      for (let row = 0; row < rows; row++) {
        const rowId = performance.now() + row;
        const rowCount = Math.min(perRow, remaining);
        for (let column = 0; column < rowCount; column++) {
          spawnEnemy(lane, sim.laneX(lane) + (column - (rowCount - 1) / 2) * 15, enemySpawnY - row * 24, rowId);
        }
        remaining -= rowCount;
      }
    });
  });
  root.querySelectorAll<HTMLButtonElement>("[data-spawn-multiplier]").forEach(button => {
    button.addEventListener("click", () => {
      sim.spawnMultiplierPickup({ lane: laneFromDataset(button.dataset.spawnMultiplier), multiplierId: "squadPlusOne" });
    });
  });
  root.querySelector<HTMLButtonElement>("#spawn-wave")?.addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    window.setTimeout(() => spawnEnemy(0), 450);
    window.setTimeout(() => spawnEnemy(1), 700);
  });
  root.querySelector<HTMLButtonElement>("#clear-stage")?.addEventListener("click", () => sim.clearStage());
  enemySelect.addEventListener("change", () => onChange?.());

  return { selectedEnemy, spawnEnemy };
};

import { createTestPage } from "@just-the-games-please/neon-factory";
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
results.innerHTML = assertions.map(([name, passed]) => `<li data-passed="${passed}"><strong>${name}</strong><span>${passed ? "PASS" : "FAIL"}</span></li>`).join("");
for (const [name, passed] of assertions) test.assert(name, passed);

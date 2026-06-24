import { createTestPage } from "@just-the-games-please/neon-factory";
import { gunFamily, orbFamily } from "../../CombatDefinition";
import { evaluateGunAgainstOrb, type GunSmokeResult } from "../../src/combat/gunEvaluator";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;
let results: GunSmokeResult[] = [];

const run = (): GunSmokeResult[] => {
  results = Object.entries(gunFamily.members).map(([gunId, gun]) =>
    evaluateGunAgainstOrb(gunId, gun, orbFamily.members.basicOrb));
  resultsElement.innerHTML = results.map(result => `
    <li data-passed="${result.passed}">
      <strong>${gunFamily.members[result.gunId as keyof typeof gunFamily.members].label}</strong>
      <span>${result.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">kill ${result.killTimeMs?.toFixed(0) ?? "never"}ms · arrival ${result.enemyArrivalMs.toFixed(0)}ms · ${result.shotsFired} shots</span>
    </li>`).join("");
  return results;
};

const test = createTestPage("neon-swarm-gun-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.gunId} kills weakest orb before contact`,
    result.passed,
    `kill=${result.killTimeMs ?? "never"}ms arrival=${result.enemyArrivalMs.toFixed(0)}ms`,
  );
}

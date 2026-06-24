import { createTestPage } from "@just-the-games-please/neon-factory";
import { selectAutoAimOffset } from "../../src/autoAim";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const results = document.querySelector<HTMLOListElement>("#results")!;

const run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120 }, { x: 230, y: 120 }];
  const firstOffset = selectAutoAimOffset(remaining, laneCenter);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? remaining.filter(target => target !== firstTarget) : remaining;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter);
  return { firstOffset, firstTarget, secondOffset };
};

const test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
const outcome = run();
const assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
] as const;
results.innerHTML = assertions.map(([name, passed]) => `<li data-passed="${passed}"><strong>${name}</strong><span>${passed ? "PASS" : "FAIL"}</span></li>`).join("");
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);

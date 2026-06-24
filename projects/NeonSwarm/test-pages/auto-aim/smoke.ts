import { createTestPage } from "@just-the-games-please/neon-factory";
import { AutoAimControlState, selectAutoAimOffset } from "../../src/autoAim";

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const results = document.querySelector<HTMLOListElement>("#results")!;

const run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120, rowId: 1 }, { x: 230, y: 120, rowId: 1 }];
  const fartherCenteredRow = [{ x: 200, y: 80, rowId: 2 }];
  const allTargets = [...remaining, ...fartherCenteredRow];
  const firstOffset = selectAutoAimOffset(allTargets, laneCenter);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? allTargets.filter(target => target !== firstTarget) : allTargets;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter);
  const control = new AutoAimControlState();
  control.laneSelected();
  const autoAimAfterLaneTap = !control.manual;
  control.aimChanged();
  const manualDuringJoystickAim = control.manual;
  control.aimReleased();
  const autoAimAfterJoystickRelease = !control.manual;
  return { firstOffset, firstTarget, secondOffset, autoAimAfterLaneTap, manualDuringJoystickAim, autoAimAfterJoystickRelease };
};

const test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
const outcome = run();
const assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
  ["Closer row wins over a farther centered row", outcome.firstOffset !== 0],
  ["Lane tap does not permanently disable auto aim", outcome.autoAimAfterLaneTap],
  ["Joystick aim suppresses auto aim only until release", outcome.manualDuringJoystickAim && outcome.autoAimAfterJoystickRelease],
] as const;
results.innerHTML = assertions.map(([name, passed]) => `<li data-passed="${passed}"><strong>${name}</strong><span>${passed ? "PASS" : "FAIL"}</span></li>`).join("");
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);

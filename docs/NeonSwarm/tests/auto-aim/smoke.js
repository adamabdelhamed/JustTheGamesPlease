// projects/NeonFactory/src/test-harness.ts
function createTestPage(id, driver, statusElement) {
  const snapshot = { id, status: "booting", assertions: [] };
  const publish = () => {
    statusElement.dataset.status = snapshot.status;
    statusElement.textContent = `${snapshot.status.toUpperCase()} \xB7 ${snapshot.assertions.filter((a) => a.passed).length}/${snapshot.assertions.length} assertions`;
    document.documentElement.dataset.testStatus = snapshot.status;
  };
  const api = {
    ...driver,
    getSnapshot: () => structuredClone(snapshot),
    ready() {
      snapshot.status = "ready";
      publish();
    },
    assert(name, passed, detail) {
      snapshot.assertions.push({ name, passed, detail });
      snapshot.status = snapshot.assertions.every((assertion) => assertion.passed) ? "passed" : "failed";
      publish();
    }
  };
  window.neonFactoryTest = api;
  publish();
  return api;
}

// projects/NeonSwarm/src/autoAim.ts
var AutoAimControlState = class {
  manual = false;
  laneSelected() {
  }
  aimChanged() {
    this.manual = true;
  }
  aimReleased() {
    this.manual = false;
  }
};
function selectAutoAimOffset(targets, laneCenter, currentOffset = 0) {
  if (!targets.length) return 0;
  const explicitRows = /* @__PURE__ */ new Map();
  for (const target of targets) {
    if (target.rowId === void 0) continue;
    const row = explicitRows.get(target.rowId) ?? [];
    row.push(target);
    explicitRows.set(target.rowId, row);
  }
  const closestRow = explicitRows.size ? [...explicitRows.values()].sort((left, right) => Math.max(...right.map((target) => target.y)) - Math.max(...left.map((target) => target.y)))[0] : targets.filter((target) => Math.abs(target.y - Math.max(...targets.map((candidate) => candidate.y))) < 3);
  const currentAimX = laneCenter + currentOffset;
  const selected = [...closestRow].sort((left, right) => {
    const distanceDifference = Math.abs(left.x - currentAimX) - Math.abs(right.x - currentAimX);
    return distanceDifference || left.x - right.x;
  })[0];
  return selected.x - laneCenter;
}

// projects/NeonSwarm/test-pages/auto-aim/smoke.ts
var status = document.querySelector("#test-status");
var results = document.querySelector("#results");
var run = () => {
  const laneCenter = 200;
  const remaining = [{ x: 170, y: 120, rowId: 1 }, { x: 230, y: 120, rowId: 1 }];
  const fartherCenteredRow = [{ x: 200, y: 80, rowId: 2 }];
  const allTargets = [...remaining, ...fartherCenteredRow];
  const firstOffset = selectAutoAimOffset(allTargets, laneCenter);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? allTargets.filter((target) => target !== firstTarget) : allTargets;
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
var test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
var outcome = run();
var assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)],
  ["Closer row wins over a farther centered row", outcome.firstOffset !== 0],
  ["Lane tap does not permanently disable auto aim", outcome.autoAimAfterLaneTap],
  ["Joystick aim suppresses auto aim only until release", outcome.manualDuringJoystickAim && outcome.autoAimAfterJoystickRelease]
];
results.innerHTML = assertions.map(([name, passed]) => `<li data-passed="${passed}"><strong>${name}</strong><span>${passed ? "PASS" : "FAIL"}</span></li>`).join("");
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);
//# sourceMappingURL=smoke.js.map

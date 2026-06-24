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
function selectAutoAimOffset(targets, laneCenter, currentOffset = 0) {
  if (!targets.length) return 0;
  const closestY = Math.max(...targets.map((target) => target.y));
  const closestRow = targets.filter((target) => Math.abs(target.y - closestY) < 3);
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
  const remaining = [{ x: 170, y: 120 }, { x: 230, y: 120 }];
  const firstOffset = selectAutoAimOffset(remaining, laneCenter);
  const firstTarget = firstOffset < 0 ? remaining[0] : firstOffset > 0 ? remaining[1] : null;
  const afterFirstKill = firstTarget ? remaining.filter((target) => target !== firstTarget) : remaining;
  const secondOffset = selectAutoAimOffset(afterFirstKill, laneCenter);
  return { firstOffset, firstTarget, secondOffset };
};
var test = createTestPage("neon-swarm-auto-aim-smoke", { suite: "smoke", run }, status);
test.ready();
var outcome = run();
var assertions = [
  ["Symmetric outside survivors produce a decisive first shift", outcome.firstOffset !== 0],
  ["First shift selects one remaining enemy", outcome.firstTarget !== null],
  ["After first kill auto aim shifts to the other survivor", outcome.firstTarget !== null && outcome.secondOffset !== 0 && Math.sign(outcome.secondOffset) !== Math.sign(outcome.firstOffset)]
];
results.innerHTML = assertions.map(([name, passed]) => `<li data-passed="${passed}"><strong>${name}</strong><span>${passed ? "PASS" : "FAIL"}</span></li>`).join("");
for (const [name, passed] of assertions) test.assert(name, passed, `first=${outcome.firstOffset} second=${outcome.secondOffset}`);
//# sourceMappingURL=smoke.js.map

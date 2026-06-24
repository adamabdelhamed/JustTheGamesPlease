export type TestStatus = "booting" | "ready" | "passed" | "failed";

export interface TestAssertion {
  name: string;
  passed: boolean;
  detail?: string;
}

export interface TestPageSnapshot {
  id: string;
  status: TestStatus;
  assertions: TestAssertion[];
}

export function createTestPage<TDriver extends object>(
  id: string,
  driver: TDriver,
  statusElement: HTMLElement,
) {
  const snapshot: TestPageSnapshot = { id, status: "booting", assertions: [] };
  const publish = () => {
    statusElement.dataset.status = snapshot.status;
    statusElement.textContent = `${snapshot.status.toUpperCase()} · ${snapshot.assertions.filter(a => a.passed).length}/${snapshot.assertions.length} assertions`;
    document.documentElement.dataset.testStatus = snapshot.status;
  };
  const api = {
    ...driver,
    getSnapshot: (): TestPageSnapshot => structuredClone(snapshot),
    ready(): void {
      snapshot.status = "ready";
      publish();
    },
    assert(name: string, passed: boolean, detail?: string): void {
      snapshot.assertions.push({ name, passed, detail });
      snapshot.status = snapshot.assertions.every(assertion => assertion.passed) ? "passed" : "failed";
      publish();
    },
  };
  (window as unknown as { neonFactoryTest: typeof api }).neonFactoryTest = api;
  publish();
  return api;
}

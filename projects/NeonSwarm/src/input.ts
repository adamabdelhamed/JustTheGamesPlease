export interface SquadInputCallbacks {
  lane(): 0 | 1;
  setLane(lane: 0 | 1): void;
}

export function bindSquadInput(
  container: HTMLElement,
  callbacks: SquadInputCallbacks,
): void {
  let pointerId: number | null = null;
  const applyPointer = (clientX: number): void => {
    const bounds = container.getBoundingClientRect();
    const normalized = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
    const lane: 0 | 1 = normalized < .5 ? 0 : 1;
    if (lane !== callbacks.lane()) callbacks.setLane(lane);
  };
  addEventListener("keydown", event => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", event => {
    const target = event.target as Element;
    if (target.closest("button,input,select,a")) return;
    pointerId = event.pointerId;
    container.setPointerCapture?.(pointerId);
    applyPointer(event.clientX);
  });
  container.addEventListener("pointermove", event => {
    if (event.pointerId !== pointerId) return;
    applyPointer(event.clientX);
  });
  const endPointer = (event: PointerEvent): void => {
    if (event.pointerId !== pointerId) return;
    pointerId = null;
  };
  container.addEventListener("pointerup", endPointer);
  container.addEventListener("pointercancel", endPointer);
  container.addEventListener("lostpointercapture", () => {
    pointerId = null;
  });
}

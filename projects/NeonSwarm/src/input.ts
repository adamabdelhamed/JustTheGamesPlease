export interface SquadInputCallbacks {
  lane(): 0 | 1;
  setLane(lane: 0 | 1): void;
  setAim(value: number): void;
  releaseAim(): void;
}

export function bindSquadInput(
  container: HTMLElement,
  joystick: string,
  callbacks: SquadInputCallbacks,
): void {
  let pointerId: number | null = null;
  let pointerStartedX = 0;
  let pointerMoved = false;
  const applyPointer = (clientX: number): void => {
    const bounds = container.getBoundingClientRect();
    const normalized = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width));
    const lane: 0 | 1 = normalized < .5 ? 0 : 1;
    if (lane !== callbacks.lane()) callbacks.setLane(lane);
    const laneStart = lane === 0 ? 0 : .5;
    const withinLane = (normalized - laneStart) / .5;
    callbacks.setAim((withinLane - .5) * 2);
  };
  addEventListener("keydown", event => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", event => {
    const target = event.target as Element;
    if (target.closest(joystick) || target.closest("button,input,select,a")) return;
    pointerId = event.pointerId;
    pointerStartedX = event.clientX;
    pointerMoved = false;
    container.setPointerCapture?.(pointerId);
    applyPointer(event.clientX);
  });
  container.addEventListener("pointermove", event => {
    if (event.pointerId !== pointerId) return;
    pointerMoved ||= Math.abs(event.clientX - pointerStartedX) > 3;
    applyPointer(event.clientX);
  });
  const endPointer = (event: PointerEvent): void => {
    if (event.pointerId !== pointerId) return;
    if (!pointerMoved) applyPointer(event.clientX);
    pointerId = null;
    callbacks.releaseAim();
  };
  container.addEventListener("pointerup", endPointer);
  container.addEventListener("pointercancel", endPointer);
  container.addEventListener("lostpointercapture", () => {
    pointerId = null;
    callbacks.releaseAim();
  });
  if (matchMedia("(pointer: coarse)").matches) {
    const element = container.querySelector<HTMLElement>(joystick);
    const knob = element?.querySelector<HTMLElement>(".stick-knob");
    let joystickPointer: number | null = null;
    const applyJoystick = (event: PointerEvent): void => {
      if (!element) return;
      const bounds = element.getBoundingClientRect();
      const radius = bounds.width / 2;
      const raw = (event.clientX - (bounds.left + radius)) / radius;
      const x = Math.max(-1, Math.min(1, raw));
      if (knob) knob.style.transform = `translate(calc(-50% + ${x * radius * .62}px),-50%)`;
      const magnitude = Math.abs(x);
      if (magnitude >= .95) {
        const requested: 0 | 1 = x < 0 ? 0 : 1;
        if (requested !== callbacks.lane()) callbacks.setLane(requested);
        callbacks.setAim(0);
      } else if (magnitude <= .5) callbacks.setAim(x / .5);
      else callbacks.setAim(Math.sign(x));
    };
    element?.addEventListener("pointerdown", event => {
      event.stopPropagation();
      joystickPointer = event.pointerId;
      element.setPointerCapture(event.pointerId);
      applyJoystick(event);
    });
    element?.addEventListener("pointermove", event => {
      if (event.pointerId === joystickPointer) applyJoystick(event);
    });
    const endJoystick = (event: PointerEvent): void => {
      if (event.pointerId !== joystickPointer) return;
      joystickPointer = null;
      if (knob) knob.style.transform = "translate(-50%,-50%)";
      callbacks.releaseAim();
    };
    element?.addEventListener("pointerup", endJoystick);
    element?.addEventListener("pointercancel", endJoystick);
  }
}

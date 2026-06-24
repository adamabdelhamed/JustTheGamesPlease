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
  addEventListener("keydown", event => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") callbacks.setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") callbacks.setLane(1);
  });
  container.addEventListener("pointerdown", event => {
    const target = event.target as Element;
    if (target.closest(joystick) || target.closest("button,input,select,a")) return;
    callbacks.setLane(event.clientX < innerWidth / 2 ? 0 : 1);
  });
  window.gameController?.createJoystick({
    element: joystick, container, radius: 54,
    orientationLayout: { portrait: { x: 82, yFromBottom: 88 }, landscape: { x: 88, yFromBottom: 82 } },
    recenterRadius: { portrait: 130, landscape: 150 },
  }).onChange(input => {
    const magnitude = Math.abs(input.x);
    if (magnitude >= .95) {
      const requested: 0 | 1 = input.x < 0 ? 0 : 1;
      if (requested !== callbacks.lane()) callbacks.setLane(requested);
      callbacks.setAim(0);
    } else if (magnitude <= .5) {
      callbacks.setAim(input.x / .5);
    } else {
      callbacks.setAim(Math.sign(input.x));
    }
    if (input.magnitude === 0) callbacks.releaseAim();
  });
}

declare global {
  interface Window {
    gameController?: {
      createJoystick(options: object): {
        onChange(callback: (input: { x: number; y: number; magnitude: number }) => void): unknown;
      };
    };
  }
}

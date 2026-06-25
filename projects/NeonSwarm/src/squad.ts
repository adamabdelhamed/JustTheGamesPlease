import { multiplierFamily } from "../CombatDefinition/MultiplierFamily";

export interface SquadPoint {
  x: number;
  y: number;
  column: number;
  row: number;
}

export class SquadModel {
  lane: 0 | 1 = 0;
  count = 1;
  aimOffset = 0;
  x = 0;
  targetX = 0;
  laneShiftStartedAt = 0;

  add(amount: number): number {
    const spec = multiplierFamily.members.squadPlusOne;
    this.count = Math.min(spec.maxSquadSize, this.count + amount);
    return this.count;
  }

  remove(amount = 1): number {
    this.count = Math.max(0, this.count - amount);
    return this.count;
  }

  setLane(lane: 0 | 1, laneCenter: (lane: 0 | 1) => number, now: number): void {
    if (lane !== this.lane) {
      this.laneShiftStartedAt = now;
      // Reset aim offset so the player snaps to the correct column in the new lane.
      this.aimOffset = 0;
    }
    this.lane = lane;
    this.targetX = laneCenter(lane) + this.aimOffset;
  }

  setAim(normalized: number, laneWidth: number, laneCenter: (lane: 0 | 1) => number): void {
    this.aimOffset = Math.max(-1, Math.min(1, normalized)) * laneWidth * .28;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
  }

  autoAim(targetOffset: number, laneWidth: number, laneCenter: (lane: 0 | 1) => number): void {
    // High lerp factor (0.85) so auto-aim snaps almost instantaneously each frame.
    this.aimOffset += (Math.max(-laneWidth * .28, Math.min(laneWidth * .28, targetOffset)) - this.aimOffset) * .85;
    this.targetX = laneCenter(this.lane) + this.aimOffset;
  }

  update(deltaSeconds: number): void {
    const response = 1 - Math.pow(.00008, deltaSeconds);
    this.x += (this.targetX - this.x) * response;
  }

  /** X offsets of each column in the front row, relative to squad center. */
  frontRowColumnOffsets(scale: number): number[] {
    const spec = multiplierFamily.members.squadPlusOne;
    const rowCount = Math.min(spec.membersPerRow, this.count);
    return Array.from({ length: rowCount }, (_, col) =>
      (col - (rowCount - 1) / 2) * spec.spacing * scale,
    );
  }

  points(baseY: number, scale: number): SquadPoint[] {
    const spec = multiplierFamily.members.squadPlusOne;
    const points: SquadPoint[] = [];
    for (let index = 0; index < this.count; index++) {
      const row = Math.floor(index / spec.membersPerRow);
      const rowCount = Math.min(spec.membersPerRow, this.count - row * spec.membersPerRow);
      const column = index % spec.membersPerRow;
      points.push({
        x: this.x + (column - (rowCount - 1) / 2) * spec.spacing * scale,
        y: baseY + row * spec.spacing * scale,
        column,
        row,
      });
    }
    return points;
  }
}

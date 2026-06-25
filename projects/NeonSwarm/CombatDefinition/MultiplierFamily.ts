import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export interface MultiplierMember {
  label: string;
  squadAdded: number;
  maxSquadSize: number;
  membersPerRow: number;
  memberRadius: number;
  spacing: number;
  pickupColor: NeonColorName;
  coreColor: NeonColorName;
  pulseRate: number;
  pickupShapeZoom: number;
}

export class MultiplierFamilyDefinition extends FamilyDefinition<Record<string, MultiplierMember>> {
  readonly familyId = "multiplier";
  readonly label = "Squad Multiplier";
  readonly members = {
    squadPlusOne: {
      label: "+1 Wingmate",
      squadAdded: 1,
      maxSquadSize: 10,
      membersPerRow: 5,
      memberRadius: 5.25,
      spacing: 18,
      pickupColor: "gold",
      coreColor: "cyan",
      pulseRate: 2.2,
      pickupShapeZoom: 3.1,
    },
  } as const satisfies Record<string, MultiplierMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, item] of Object.entries(this.members)) {
      this.require(item.squadAdded > 0, `${id} must add squad members.`);
      this.require(item.maxSquadSize >= item.membersPerRow, `${id} max squad must fit at least one row.`);
      this.require(item.memberRadius > 0 && item.spacing > item.memberRadius * 2, `${id} member geometry overlaps.`);
      this.require(neonPalette[item.pickupColor] !== undefined, `${id} has an unknown pickup color.`);
    }
  }
}

export const multiplierFamily = new MultiplierFamilyDefinition();
export type MultiplierId = keyof typeof multiplierFamily.members;

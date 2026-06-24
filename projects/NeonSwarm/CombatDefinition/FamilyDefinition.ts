export abstract class FamilyDefinition<TMembers extends Record<string, unknown>> {
  abstract readonly familyId: string;
  abstract readonly label: string;
  abstract readonly members: TMembers;

  protected require(condition: unknown, message: string): asserts condition {
    if (!condition) throw new Error(`${this.familyId}: ${message}`);
  }

  abstract validate(): void;
}

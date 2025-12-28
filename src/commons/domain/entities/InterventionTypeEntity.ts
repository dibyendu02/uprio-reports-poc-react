export class InterventionTypeEntity {
  interventionId: number;
  type: string;

  constructor(interventionId: number, type: string) {
    this.interventionId = interventionId;
    this.type = type;
  }
}

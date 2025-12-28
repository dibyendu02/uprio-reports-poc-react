export class UnderstandingLevelEntity {
  wellUnderstood: number;
  understoodBut: number;
  requiresFurther: number;

  constructor(
    wellUnderstood: number,
    understoodBut: number,
    requiresFurther: number
  ) {
    this.wellUnderstood = wellUnderstood;
    this.understoodBut = understoodBut;
    this.requiresFurther = requiresFurther;
  }
}

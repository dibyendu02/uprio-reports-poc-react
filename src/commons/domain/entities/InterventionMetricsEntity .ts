export class InterventionMetricsEntity {
  questionsAsked: number;
  questionsAnsweredCorrectly: number;
  correctSteps: number;
  totalSteps: number;

  constructor(
    questionsAsked: number,
    questionsAnsweredCorrectly: number,
    correctSteps: number,
    totalSteps: number
  ) {
    this.questionsAsked = questionsAsked;
    this.questionsAnsweredCorrectly = questionsAnsweredCorrectly;
    this.correctSteps = correctSteps;
    this.totalSteps = totalSteps;
  }
}

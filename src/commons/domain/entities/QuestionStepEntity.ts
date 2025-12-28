export class QuestionStepEntity {
  stepId: number;
  status: "Correct" | "Incorrect" | "Partial";
  step: string;

  constructor(
    stepId: number,
    status: "Correct" | "Incorrect" | "Partial",
    step: string
  ) {
    this.stepId = stepId;
    this.status = status;
    this.step = step;
  }
}

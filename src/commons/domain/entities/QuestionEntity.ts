import { InterventionTypeEntity } from "./InterventionTypeEntity";
import { NotebookImageEntity } from "./NotebookImageEntity";
import { QuestionStepEntity } from "./QuestionStepEntity";

export class QuestionEntity {
  questionId: string;
  subjectId: string;
  chapterId: string;
  categoryId: string;
  question: string;
  stepsRequired: QuestionStepEntity[];
  status: "Correct" | "Incorrect";
  notebookImages: NotebookImageEntity[]; // Optional array of notebook image URLs
  interventionTypes?: InterventionTypeEntity[]; // Optional array of intervention types

  constructor(
    questionId: string,
    subjectId: string,
    chapterId: string,
    categoryId: string,
    question: string,
    stepsRequired: QuestionStepEntity[],
    status: "Correct" | "Incorrect",
    notebookImages: NotebookImageEntity[],
    interventionTypes?: InterventionTypeEntity[]
  ) {
    this.questionId = questionId;
    this.subjectId = subjectId;
    this.chapterId = chapterId;
    this.categoryId = categoryId;
    this.question = question;
    this.stepsRequired = stepsRequired;
    this.status = status;
    this.notebookImages = notebookImages || []; // Defaults to empty array
    this.interventionTypes = interventionTypes || []; // Defaults to empty array
  }
}

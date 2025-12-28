import { UnderstandingLevelEntity } from "./UnderstandingLevelEntity";

export class ChapterInterventionSummaryEntity {
  chapterId: string;
  categories: number;
  preUnderstanding: UnderstandingLevelEntity;
  postUnderstanding: UnderstandingLevelEntity;

  constructor(
    chapterId: string,
    categories: number,
    preUnderstanding: UnderstandingLevelEntity,
    postUnderstanding: UnderstandingLevelEntity
  ) {
    this.chapterId = chapterId;
    this.categories = categories;
    this.preUnderstanding = preUnderstanding;
    this.postUnderstanding = postUnderstanding;
  }
}

import { InterventionMetricsEntity } from "./InterventionMetricsEntity ";

export class CategoryInterventionEntity {
  chapterId: string;
  categoryTitle: string;
  preRating: 2 | 3 | 5;
  postRating: 2 | 3 | 5;
  remarkMessage?: string;
  preIntervention: InterventionMetricsEntity;
  postIntervention: InterventionMetricsEntity;

  constructor(
    chapterId: string,
    categoryTitle: string,
    preRating: 2 | 3 | 5,
    postRating: 2 | 3 | 5,
    preIntervention: InterventionMetricsEntity,
    postIntervention: InterventionMetricsEntity,
    remarkMessage?: string
  ) {
    this.chapterId = chapterId;
    this.categoryTitle = categoryTitle;
    this.preRating = preRating;
    this.postRating = postRating;
    this.preIntervention = preIntervention;
    this.postIntervention = postIntervention;
    this.remarkMessage = remarkMessage;
  }
}

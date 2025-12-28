export class PostInterventionCategoryEntity {
  id: number;
  text: string;
  preIntervention: string;
  postIntervention: string;
  rating: number;
  interventionTypes: string[];

  constructor(
    id: number,
    text: string,
    preIntervention: string,
    postIntervention: string,
    rating: number,
    interventionTypes: string[]
  ) {
    this.id = id;
    this.text = text;
    this.preIntervention = preIntervention;
    this.postIntervention = postIntervention;
    this.rating = rating;
    this.interventionTypes = interventionTypes;
  }
}

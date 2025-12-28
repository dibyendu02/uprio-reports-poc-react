export class QuestionCategoryEntity {
  id: number;
  text: string;
  categoriesCount: number;
  totalCategoriesCount: number;
  rating?: number;
  interventionTypes?: string[];

  constructor(
    id: number,
    text: string,
    categoriesCount: number,
    totalCategoriesCount: number,
    rating?: number,
    interventionTypes?: string[]
  ) {
    this.id = id;
    this.text = text;
    this.categoriesCount = categoriesCount;
    this.totalCategoriesCount = totalCategoriesCount;
    this.rating = rating;
    this.interventionTypes = interventionTypes;
  }
}

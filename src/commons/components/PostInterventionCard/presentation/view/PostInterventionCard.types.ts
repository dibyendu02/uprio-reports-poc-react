export interface CategoryCounts {
  wellUnderstood: number;
  sillyMistakes: number;
  needsReinforcement: number;
  notAssessed: number;
}

export interface PostInterventionCardProps {
  preInterventionCounts: CategoryCounts;
  postInterventionCounts: CategoryCounts;
  totalCategories: number;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

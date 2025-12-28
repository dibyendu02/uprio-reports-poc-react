interface CategoryCounts {
  wellUnderstood: number;
  sillyMistakes: number;
  needsReinforcement: number;
  notAssessed: number;
}

export type CategoryKey = keyof CategoryCounts;

export interface PreInterventionCardProps {
  categoryCounts: CategoryCounts;
  totalCategories: number;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

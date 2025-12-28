import { CategoryEntity } from "@/commons/domain/entities/CategoryEntity";

export interface CategoryCardProps {
  idx: number;
  category: CategoryEntity;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  evaluationId?: number | null;
}

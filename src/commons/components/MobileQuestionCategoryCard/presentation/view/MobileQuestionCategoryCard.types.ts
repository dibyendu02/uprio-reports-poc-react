import { CategoryEntity } from "@/commons/domain/entities/CategoryEntity";
import { QuestionCategoryEntity } from "@/commons/domain/entities/QuestionCategoryEntity";

export interface MobileQuestionCategoryCardProps {
  questionCategory: QuestionCategoryEntity;
  categories?: CategoryEntity[];
  onClick?: () => void;
  onCategoryClick?: () => void;
  className?: string;
}

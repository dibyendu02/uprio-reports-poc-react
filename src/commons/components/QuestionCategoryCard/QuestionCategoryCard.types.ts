import { QuestionCategoryEntity } from "@/commons/domain/entities/QuestionCategoryEntity";

export interface QuestionCategoryCardProps {
  questionCategory: QuestionCategoryEntity;
  onClick?: () => void;
  className?: string;
}

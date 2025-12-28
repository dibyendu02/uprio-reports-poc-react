import { QuestionEntity } from "@/commons/domain/entities/QuestionEntity";

export interface QuestionCardProps {
  idx: number;
  questionEntity: QuestionEntity;
  isSelected: boolean;
  onClick?: () => void;
  className?: string;
}

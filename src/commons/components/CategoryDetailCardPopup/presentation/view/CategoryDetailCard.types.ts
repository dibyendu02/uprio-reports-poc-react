import { QuestionEntity } from "@/commons/domain/entities/QuestionEntity";

export interface CategoryDetailCardProps {
  idx: string;
  questions: QuestionEntity[];
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

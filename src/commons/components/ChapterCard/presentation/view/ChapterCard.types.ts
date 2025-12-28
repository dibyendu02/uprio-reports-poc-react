import { ChapterEntity } from "@/commons/domain/entities/ChapterEntity";

export interface ChapterCardProps {
  chapter: ChapterEntity;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

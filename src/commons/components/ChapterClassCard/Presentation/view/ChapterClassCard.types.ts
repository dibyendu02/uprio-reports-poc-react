import { ChapterClassEntity } from "@/commons/domain/entities/ChapterClassEntity";

export interface ChapterClassCardProps {
  chapterClass: ChapterClassEntity;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

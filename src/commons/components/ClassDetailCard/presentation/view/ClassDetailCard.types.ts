import { ChapterClassEntity } from "@/commons/domain/entities/ChapterClassEntity";

export interface ClassDetailCardProps {
  chapterClasses: ChapterClassEntity[];
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

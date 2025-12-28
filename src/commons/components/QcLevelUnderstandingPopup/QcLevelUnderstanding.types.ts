import { CategoryEntity } from "@/commons/domain/entities/CategoryEntity";

export interface QcLevelUnderstandingPopupProps {
  id: number;
  title: string;
  rating: number;
  categories: CategoryEntity[];
  onClose: () => void;
}

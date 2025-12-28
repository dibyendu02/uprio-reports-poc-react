import { NotebookImageEntity } from "@/commons/domain/entities/NotebookImageEntity";

export interface NotebookImageGalleryProps {
  notebookImages: NotebookImageEntity[];
  isActive?: boolean;
  className?: string;
  onClose?: () => void;
}

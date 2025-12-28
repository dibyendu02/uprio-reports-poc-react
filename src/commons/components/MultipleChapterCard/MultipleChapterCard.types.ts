// export interface MultipleChaptersCardProps {
//   subjectLabel?: string;
//   chapters: {
//     title: string;
//     topics: string[];
//   }[];
//   className?: string;
//   isSelected?: boolean;
//   onClick?: () => void;
// }

export interface SubjectChapters {
  title: string;
  topics: string[];
}

export interface SubjectsData {
  [key: string]: SubjectChapters[];
}

export interface MultipleChaptersCardProps {
  subjects: SubjectsData;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

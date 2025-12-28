// types.ts
export interface Attendance {
  scheduled: number;
  attended: number;
}

export interface Practice {
  assigned: number;
  submitted: number;
}

export interface Topic {
  id: number;
  title: string;
  attendance?: Attendance;
  practice?: Practice;
}

export interface SubjectData {
  label: string;
  topics: Topic[];
}

export interface SubjectsData {
  [key: string]: SubjectData;
}

export interface TopicCardProps {
  title: string;
  attendance?: Attendance;
  practice?: Practice;
  isSelected?: boolean;
}

export interface AttendanceAndPracticeCardProps {
  data: SubjectsData;
  defaultSubject?: string;
  studentName?: string;
  onSubjectChange?: (subject: string) => void;
  onTopicClick?: (topicId: number, subject: string) => void;
  onClick?: () => void;
  practiceSheetClick?: () => void;
  classesScheduledClick?: () => void;
  setShowMobileFooter: (value: React.SetStateAction<boolean>) => void
}

export interface AttendanceDetailsProps {
  onClose: () => void;
  data: Array<{
    title: string;
    scheduled: number;
    attended: number;
    attendedPercentage: number;
  }>;
  practiceSheetClick?: () => void;
  classesScheduledClick?: () => void;
}

export interface AttendanceDetailsItemProps {
  title: string;
  scheduled: number;
  attended: number;
  attendedPercentage: number;
  
}

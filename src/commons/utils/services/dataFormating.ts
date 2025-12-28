export interface TopicStats {
  completed: number;
  total: number;
}

export interface Topic {
  id: string;
  title: string;
  understanding: number;
  categories: number;
  stats?: TopicStats;
}

export interface SubjectData {
  label: string;
  understanding: Topic[];
}

export interface ExamData {
  subjects: {
    [key: string]: SubjectData;
  };
}

export interface FormattedData {
  [key: string]: {
    label: string;
    topics: Array<{
      id: string;
      title: string;
      understanding: number;
      categories: number;
      stats?: TopicStats;
    }>;
  };
}

export const formatUnderstandingData = (examData: ExamData): FormattedData => {
  const formattedData: FormattedData = {};

  Object.entries(examData.subjects).forEach(([subjectKey, subjectData]) => {
    formattedData[subjectKey] = {
      label: subjectData.label,
      topics: subjectData.understanding.map((topic) => ({
        id: topic.id,
        title: topic.title,
        understanding: topic.understanding,
        categories: topic.categories,
        stats: topic.stats,
      })),
    };
  });

  return formattedData;
};

  

export const formatAttendanceData = (examData: any) => {
  const formattedData: {
    [key: string]: {
      label: string;
      topics: Array<{
        id: number;
        title: string;
        attendance?: {
          scheduled: number;
          attended: number;
        };
        practice?: {
          assigned: number;
          submitted: number;
        };
      }>;
    };
  } = {};

  Object.entries(examData.subjects).forEach(
    ([subjectKey, subjectData]: [string, any]) => {
      formattedData[subjectKey] = {
        label: subjectData.label,
        topics: subjectData.chapters.map((chapter: any, index: number) => {
          const attendanceData = subjectData.attendancePractice.find(
            (ap: any) => ap.title === chapter.title
          );

          return {
            id: index + 1,
            title: chapter.title,
            attendance: attendanceData?.attendance,
            practice: attendanceData?.practice,
          };
        }),
      };
    }
  );

  return formattedData;
};
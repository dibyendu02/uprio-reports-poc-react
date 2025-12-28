import { CategoryEntity } from "./commons/domain/entities/CategoryEntity";

// Types for better type safety
interface Chapter {
  subjectId: string;
  chapterId: string;
  title: string;
  topics: string[];
}

interface AttendancePractice {
  id: number;
  title: string;
  attendance: {
    scheduled: number;
    attended: number;
  };
  practice: {
    assigned: number;
    submitted: number;
  };
}

interface Understanding {
  id: string;
  title: string;
  understanding: number;
  categories: number;
  stats: {
    completed: number;
    total: number;
  };
}

interface RevisionPlan {
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  tags: string[];
}

interface Subject {
  label: string;
  chapters: Chapter[];
  attendancePractice: AttendancePractice[];
  understanding: Understanding[];
}

interface ExamData {
  title: string;
  date: string;
  subjects: {
    [key: string]: Subject;
  };
  revisionPlans: RevisionPlan[];
}

// Restructured data
// Extended data
export const reportThreeData: ExamData[] = [
  
  {
    title: "PT2",
    date: "Exam on 15 July, 2024",
    subjects: {
      maths1: {
        label: "Math 1",
        chapters: [
          {
            subjectId: "math1",
            chapterId: "chapter3",
            title: "Linear Equations",
            topics: [
              "Definition",
              "Solving Linear Equations",
              "Applications in Real Life",
            ],
          },
          
        ],
        attendancePractice: [
          {
            id: 4,
            title: "Linear Equations",
            attendance: { scheduled: 5, attended: 4 },
            practice: { assigned: 3, submitted: 3 },
          },
        ],
        understanding: [
          {
            id: "4",
            title: "Linear Equations",
            understanding: 5,
            categories: 10,
            stats: {
              completed: 8,
              total: 10,
            },
          },
        ],
      },
      maths2: {
        label: "Math 2",
        chapters: [{
            subjectId: "math2",
            chapterId: "chapter5",
            title: "Quadratic Equations",
            topics: [
              "Definition",
              "Solving Quadratic Equations",
              "Applications in Real Life",
            ],
          },],
        attendancePractice: [
          {
            id: 5,
            title: "Quadratic Equations",
            attendance: { scheduled: 4, attended: 3 },
            practice: { assigned: 2, submitted: 1 },
          },
        ],
        understanding: [
          {
            id: "5",
            title: "Quadratic Equations",
            understanding: 4,
            categories: 12,
            stats: {
              completed: 9,
              total: 12,
            },
          },
        ],
      },
    },
    revisionPlans: [
      {
        date: "2024-09-15",
        title: "Linear Equations",
        startTime: "5:00 PM",
        endTime: "6:30 PM",
        tags: ["Revision", "Mock Test"],
      },
    ],
  },
  {
    title: "PT3",
    date: "Exam on 30 August, 2024",
    subjects: {
      maths1: {
        label: "Math 1",
        chapters: [
          {
            subjectId: "math1",
            chapterId: "chapter4",
            title: "Probability",
            topics: [
              "Introduction to Probability",
              "Basic Theorems",
              "Applications",
            ],
          },
          
        ],
        attendancePractice: [
          {
            id: 6,
            title: "Probability",
            attendance: { scheduled: 4, attended: 4 },
            practice: { assigned: 3, submitted: 2 },
          },
        ],
        understanding: [
          {
            id: "6",
            title: "Probability",
            understanding: 3,
            categories: 8,
            stats: {
              completed: 5,
              total: 8,
            },
          },
        ],
      },
      maths2: {
        label: "Math 2",
        chapters: [{
            subjectId: "math2",
            chapterId: "chapter3",
            title: "Linear Equations",
            topics: [
              "Definition",
              "Solving Linear Equations",
              "Applications in Real Life",
            ],
          },],
        attendancePractice: [
          {
            id: 7,
            title: "Linear Equations",
            attendance: { scheduled: 3, attended: 2 },
            practice: { assigned: 2, submitted: 2 },
          },
        ],
        understanding: [
          {
            id: "7",
            title: "Statistics",
            understanding: 4,
            categories: 10,
            stats: {
              completed: 7,
              total: 10,
            },
          },
        ],
      },
    },
    revisionPlans: [
      {
        date: "2024-10-01",
        title: "Probability",
        startTime: "6:00 PM",
        endTime: "7:30 PM",
        tags: ["Mock paper", "Evaluation"],
      },
    ],
  },
  {
    title: "Midterm Exam",
    date: "Exam on 20 October, 2024",
    subjects: {
      science: {
        label: "Science",
        chapters: [
          {
            subjectId: "science",
            chapterId: "chapter5",
            title: "Chemical Reactions",
            topics: [
              "Types of Reactions",
              "Reactants and Products",
              "Energy Changes",
            ],
          },
          
        ],
        attendancePractice: [
          {
            id: 8,
            title: "Chemical Reactions",
            attendance: { scheduled: 7, attended: 6 },
            practice: { assigned: 5, submitted: 5 },
          },
        ],
        understanding: [
          {
            id: "8",
            title: "Chemical Reactions",
            understanding: 4,
            categories: 10,
            stats: {
              completed: 7,
              total: 10,
            },
          },
        ],
      },
      english: {
        label: "English",
        chapters: [{
            subjectId: "english",
            chapterId: "chapter1",
            title: "Grammar and Composition",
            topics: [
              "Types of Grammar",
              "Grammar concepts",
              "Composition concepts",
            ],
          },],
        attendancePractice: [
          {
            id: 9,
            title: "Grammar and Composition",
            attendance: { scheduled: 5, attended: 5 },
            practice: { assigned: 2, submitted: 2 },
          },
        ],
        understanding: [
          {
            id: "9",
            title: "Grammar and Composition",
            understanding: 5,
            categories: 5,
            stats: {
              completed: 4,
              total: 5,
            },
          },
        ],
      },
    },
    revisionPlans: [
      {
        date: "2024-10-19",
        title: "Chemical Reactions",
        startTime: "5:00 PM",
        endTime: "6:00 PM",
        tags: ["Quick Review"],
      },
      {
        date: "2024-10-19",
        title: "Essay Writing",
        startTime: "6:00 PM",
        endTime: "7:00 PM",
        tags: ["Mock Practice"],
      },
    ],
  },
];

export const dummyDataForQCPopUp = [
  new CategoryEntity(
    "cat1_1",
    "math",
    "grade8",
    "cbse",
    "Converting decimal number to fraction",
    1,
    1,
    4,
    4
  ),
  new CategoryEntity(
    "cat1_1",
    "math",
    "grade8",
    "cbse",
    "Converting decimal number to fraction",
    1,
    1,
    4,
    4
  ),
  new CategoryEntity(
    "cat1_1",
    "math",
    "grade8",
    "cbse",
    "Converting decimal number to fraction",
    1,
    1,
    4,
    4
  ),
];


export const practicesheetsData = [
    {
      id: "1",
      title: "Cubes & Cube Roots PP 1",
      totalQuestions: 13,
      attemptedQuestions: 13,
      correctQuestions: 7,
      isSubmitted: true,
    },
    {
      id: "2",
      title: "Algebra Basics WS 2",
      totalQuestions: 9,
      attemptedQuestions: 5,
      correctQuestions: 5,
      isSubmitted: false,
    },
    {
      id: "3",
      title: "Height and Distance PP 2",
      totalQuestions: 9,
      attemptedQuestions: 5,
      correctQuestions: 5,
      isSubmitted: false,
  },{
      id: "4",
      title: "Algebra Basics WS 1",
      totalQuestions: 9,
      attemptedQuestions: 5,
      correctQuestions: 5,
      isSubmitted: false,
  },
    
];
  

export const dummyClassesNotAttendedData = [
    {
      date: "10 Aug, 2024",
      type: "evaluation" as const,
      topics: ["Cubes and cube roots", "Quadrilaterals"],
    },
    {
      date: "11 Aug, 2024",
      type: "teach" as const,
      topics: ["Quadrilaterals"],
    },
    {
      date: "24 Aug, 2024",
      type: "intervention" as const,
      topics: ["Cubes and cube roots"],
    },
    {
      date: "5 Sep, 2024",
      type: "intervention" as const,
      topics: ["Parallelograms"],
  },
    {
      date: "5 Sep, 2024",
      type: "intervention" as const,
      topics: ["Parallelograms"],
    },
  ];

// Helper functions to access the data
export const getExamChapters = (
  examTitle: string,
  subjectId: string
): Chapter[] => {
  const exam = reportThreeData.find((e) => e.title === examTitle);
  return exam?.subjects[subjectId]?.chapters || [];
};

export const getChapterDetails = (
  examTitle: string,
  subjectId: string,
  chapterTitle: string
) => {
  const exam = reportThreeData.find((e) => e.title === examTitle);
  const subject = exam?.subjects[subjectId];

  return {
    chapter: subject?.chapters.find((c) => c.title === chapterTitle),
    attendance: subject?.attendancePractice.find(
      (ap) => ap.title === chapterTitle
    ),
    understanding: subject?.understanding.find((u) => u.title === chapterTitle),
    revisionPlans: exam?.revisionPlans.filter(
      (rp) => rp.title === chapterTitle
    ),
  };
};

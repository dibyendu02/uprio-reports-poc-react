import { createContext, RefObject, MutableRefObject, useContext } from "react";

// Base interfaces
interface ChapterToPreInterventionConnection {
  chapterRef: RefObject<HTMLDivElement> | null;
}

interface PostInterventionQcConnection {
  selectedPostInterventionQcRef: RefObject<HTMLDivElement> | null;
  postInterventionQCRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  selectedStatus: string | null;
}

interface PostInterventionConnection {
  postInterventionRef: RefObject<HTMLDivElement> | null;
}

interface PreInterventionConnection {
  preInterventionRef: RefObject<HTMLDivElement> | null;
}

interface UnderstandingToCategoryConnection {
  selectedUnderstandingRef: RefObject<HTMLDivElement> | null;
  underStandingRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  selectedEvaluationId: number | null;
}

interface ClassDetailToUnderstandingConnection {
  classDetailRef: RefObject<HTMLDivElement> | null;
}

interface MultipleChapterToChapterDetailsConnection {
  multipleChapterRef: RefObject<HTMLDivElement> | null;
  chapterDetailsRef: RefObject<HTMLDivElement> | null;
}

interface ChapterDetailsToUnderstandingConnection {
  chapterDetailsRef: RefObject<HTMLDivElement> | null;
  understandingRef: RefObject<HTMLDivElement> | null;
}

interface ExamToChapterConnection {
  examCardRefs: MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  selectedExam: string | null;
}

interface ChapterCardConnection {
  chaptersRef: RefObject<HTMLDivElement> | null;
  chapterRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  selectedChapterId: string | null;
}

interface SubjectConnection {
  subjectRef: RefObject<HTMLDivElement> | null;
  subjectRefs: MutableRefObject<Array<HTMLDivElement | null>>;
  selectedSubjectId: string | null;
}

interface RevisionConnection {
  revisionRef: RefObject<HTMLDivElement> | null;
  understandingRef: RefObject<HTMLDivElement> | null;
}

// Combined context type
interface ConnectionContextType
  extends Partial<ChapterToPreInterventionConnection>,
    Partial<PostInterventionQcConnection>,
    Partial<PostInterventionConnection>,
    Partial<PreInterventionConnection>,
    Partial<UnderstandingToCategoryConnection>,
    Partial<ClassDetailToUnderstandingConnection>,
    Partial<ExamToChapterConnection>,
    Partial<ChapterCardConnection>,
    Partial<SubjectConnection>,
    Partial<MultipleChapterToChapterDetailsConnection>,
    Partial<ChapterDetailsToUnderstandingConnection>,
    Partial<RevisionConnection> {}

// Context creation
export const ConnectionContext = createContext<ConnectionContextType>({});

// Type guards
export const hasExamConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & ExamToChapterConnection =>
  context.examCardRefs !== undefined;

export const hasChapterCardConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & ChapterCardConnection =>
  context.chaptersRef !== undefined;

export const hasSubjectConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & SubjectConnection =>
  context.subjectRef !== undefined;

export const hasChapterConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & ChapterToPreInterventionConnection =>
  context.chapterRef !== undefined;

export const hasClassDetailConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & ClassDetailToUnderstandingConnection =>
  context.classDetailRef !== undefined;

export const hasMultipleChapterToDetailsConnection = (
  context: ConnectionContextType
): context is ConnectionContextType &
  MultipleChapterToChapterDetailsConnection =>
  context.multipleChapterRef !== undefined &&
  context.chapterDetailsRef !== undefined;

export const hasChapterDetailsToUnderstandingConnection = (
  context: ConnectionContextType
): context is ConnectionContextType & ChapterDetailsToUnderstandingConnection =>
  context.chapterDetailsRef !== undefined &&
  context.understandingRef !== undefined;

// Custom hook
export const useConnectionContext = () => {
  const context = useContext(ConnectionContext);
  if (context === undefined) {
    throw new Error(
      "useConnectionContext must be used within a ConnectionContext.Provider"
    );
  }
  return context;
};

// Type exports
export type {
  ChapterToPreInterventionConnection,
  PostInterventionQcConnection,
  PostInterventionConnection,
  PreInterventionConnection,
  UnderstandingToCategoryConnection,
  ClassDetailToUnderstandingConnection,
  ExamToChapterConnection,
  ChapterCardConnection,
  SubjectConnection,
  MultipleChapterToChapterDetailsConnection,
  ChapterDetailsToUnderstandingConnection,
  ConnectionContextType,
};

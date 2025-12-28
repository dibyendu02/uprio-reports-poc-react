export class ChapterEntity {
  chapterId: string;
  subjectId: string;
  gradeId: string;
  boardId: string;
  title: string;
  dateRange?: string;
  notebookEvaluations?: number;
  practiceSheets?: number;

  constructor(
    chapterId: string,
    subjectId: string,
    gradeId: string,
    boardId: string,
    title: string,
    dateRange?: string,
    notebookEvaluations?: number,
    practiceSheets?: number
  ) {
    this.chapterId = chapterId;
    this.subjectId = subjectId;
    this.gradeId = gradeId;
    this.boardId = boardId;
    this.title = title;
    this.dateRange = dateRange;
    this.notebookEvaluations = notebookEvaluations;
    this.practiceSheets = practiceSheets;
  }
}

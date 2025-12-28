import { PracticeSheetEntity } from "./PracticeSheetEntity";

export class ChapterClassEntity {
  chapterClassId: string;
  chapterId: string;
  subjectId: string;
  gradeId: string;
  boardId: string;
  studentId: string;
  date: string;
  type: string;
  attendance: "Present" | "Absent";
  notebookEvaluations?: number;
  practiceSheets?: PracticeSheetEntity;

  constructor(
    chapterClassId: string,
    chapterId: string,
    subjectId: string,
    gradeId: string,
    boardId: string,
    studentId: string,
    date: string,
    type: string,
    attendance: "Present" | "Absent",
    notebookEvaluations?: number,
    practiceSheets?: PracticeSheetEntity
  ) {
    this.chapterClassId = chapterClassId;
    this.chapterId = chapterId;
    this.subjectId = subjectId;
    this.gradeId = gradeId;
    this.boardId = boardId;
    this.studentId = studentId;
    this.date = date;
    this.type = type;
    this.attendance = attendance;
    this.notebookEvaluations = notebookEvaluations;
    this.practiceSheets = practiceSheets;
  }
}

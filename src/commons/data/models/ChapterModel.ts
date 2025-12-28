import { ChapterEntity } from "@/commons/domain/entities/ChapterEntity";

export class ChapterModel {
  chapterId: string;
  subjectId: string;
  gradeId: string;
  boardId: string;
  title: string;

  constructor(
    chapterId: string,
    subjectId: string,
    gradeId: string,
    boardId: string,
    title: string
  ) {
    this.chapterId = chapterId;
    this.subjectId = subjectId;
    this.gradeId = gradeId;
    this.boardId = boardId;
    this.title = title;
  }

  static fromJSON(json: any): ChapterModel {
    return new ChapterModel(
      json.chapterId,
      json.subjectId,
      json.gradeId,
      json.boardId,
      json.title
    );
  }

  toJSON(): any {
    return {
      chapterId: this.chapterId,
      subjectId: this.subjectId,
      gradeId: this.gradeId,
      boardId: this.boardId,
      title: this.title,
    };
  }

  toEntity(): ChapterEntity {
    return new ChapterEntity(
      this.chapterId,
      this.subjectId,
      this.gradeId,
      this.boardId,
      this.title
    );
  }
}

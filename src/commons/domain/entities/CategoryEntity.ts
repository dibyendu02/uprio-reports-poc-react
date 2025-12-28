export class CategoryEntity {
  categoryId: string;
  subject: string;
  grade: string;
  board: string;
  title: string;
  questionsAnswered: number;
  totalQuestions: number;
  correctSteps: number;
  totalSteps: number;

  constructor(
    categoryId: string,
    subject: string,
    grade: string,
    board: string,
    title: string,
    questionsAnswered: number,
    totalQuestions: number,
    correctSteps: number,
    totalSteps: number
  ) {
    this.categoryId = categoryId;
    this.subject = subject;
    this.grade = grade;
    this.board = board;
    this.title = title;
    this.questionsAnswered = questionsAnswered;
    this.totalQuestions = totalQuestions;
    this.correctSteps = correctSteps;
    this.totalSteps = totalSteps;
  }
}

export class MultipleChaptersEntity {
  // subjectId: string;
  // chapterId: string;
  title: string;
  topics: string[];

  constructor(
    // subjectId: string, chapterId: string,
    title: string,
    topics: string[]
  ) {
    // this.subjectId = subjectId;
    // this.chapterId = chapterId;
    this.title = title;
    this.topics = topics;
  }
}

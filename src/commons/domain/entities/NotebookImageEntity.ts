export class NotebookImageEntity {
  imageId: number;
  imageUrl: string;
  title: string;

  constructor(imageId: number, imageUrl: string, title: string) {
    this.imageId = imageId;
    this.imageUrl = imageUrl;
    this.title = title;
  }
}

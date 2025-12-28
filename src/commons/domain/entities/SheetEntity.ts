export class SheetEntity {
  sheetId: number;
  name: string;
  total: number;
  completed: number;

  constructor(sheetId: number, name: string, total: number, completed: number) {
    this.sheetId = sheetId;
    this.name = name;
    this.total = total;
    this.completed = completed;
  }
}

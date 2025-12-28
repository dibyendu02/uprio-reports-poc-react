import { SheetEntity } from "./SheetEntity";

export class PracticeSheetEntity {
  status: string;
  sheets?: SheetEntity[];

  constructor(status: string, sheets: SheetEntity[]) {
    this.status = status;
    this.sheets = sheets;
  }
}

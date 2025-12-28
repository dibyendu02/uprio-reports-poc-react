export class ReportEntity {
  reportId: string;
  reportName: string;
  reportType: string;

  constructor(reportId: string, reportName: string, reportType: string) {
    this.reportId = reportId;
    this.reportName = reportName;
    this.reportType = reportType;
  }
}

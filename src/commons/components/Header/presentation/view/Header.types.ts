export interface HeaderProps {
  onSegmentChange: (index: number) => void;
  onReportSelect: (report: string) => void;
  onDownloadClick: () => void;
  onColumnVisibilityChange: (shouldShowBothColumns: boolean) => void;
}

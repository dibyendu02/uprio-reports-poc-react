import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import downloadIcon from "@/assets/icons/download-icon.svg";
import Dropdown from "@/commons/components/Dropdown/presentation/view/Dropdown";
import SegmentControl from "@/commons/components/SegmentControl/presentation/view/SegmentControl";
import IconButton from "@/commons/components/SolidButton/presentation/view/SolidButton";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { ReportType, useReport } from "@/commons/context/ReportContext";
// @ts-ignore
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import ChapterLevelQCReport from "@/assets/pdf/ChapterLevelQCReport";
import InterventionImpactReport from "@/assets/pdf/InterventionImpactReport";
import ExamStatusReport from "@/assets/pdf/ExamStatusReport";

const Header: React.FC<HeaderProps> = ({
  onSegmentChange,
  onReportSelect,
  onColumnVisibilityChange,
}) => {
  const { selectedReport, setSelectedReport } = useReport();
  const location = useLocation();
  const navigate = useNavigate();

  const segments = ["Maths", "Science"];
  const reportOptions: ReportType[] = [
    "Chapter Level QC Report",
    "Intervention Impact Report",
    "Exam Status Report",
  ];

  const DEFAULT_REPORT: ReportType = "Exam Status Report";

  const handleReportSelect = (report: string) => {
    const reportType = report as ReportType;
    setSelectedReport(reportType);
    const shouldShowBothColumns = reportType === "Chapter Level QC Report";
    onColumnVisibilityChange(shouldShowBothColumns);
    onReportSelect(reportType);

    const isUnderstandingRoute = location.pathname.includes("/understanding");
    const isInterventionRoute = location.pathname.includes("/intervention");

    if (
      (reportType === "Chapter Level QC Report" && isUnderstandingRoute) ||
      (reportType !== "Chapter Level QC Report" && isInterventionRoute)
    ) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!selectedReport) {
      handleReportSelect(DEFAULT_REPORT);
    }
  }, [selectedReport]);

  // =========================================== This is where PDF logic start ===========================================

  const downloadPdf = async () => {
    try {
      const fileName = `${selectedReport || "report"}_${
        new Date().toISOString().split("T")[0]
      }.pdf`;

      let PdfComponent;

      // Dynamically select the appropriate PDF component
      switch (selectedReport) {
        case "Chapter Level QC Report":
          PdfComponent = ChapterLevelQCReport;
          break;
        case "Intervention Impact Report":
          PdfComponent = InterventionImpactReport;
          break;
        case "Exam Status Report":
          PdfComponent = ExamStatusReport;
          break;
        default:
          console.error("Invalid report type selected");
          return;
      }

      const blob = await pdf(<PdfComponent />).toBlob();
      if (!blob) {
        console.error("Failed to generate PDF blob");
        return;
      }

      saveAs(blob, fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  // =========================================== This is where PDF logic Ends ===========================================

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["left-wrap"]}>
          <SegmentControl
            segments={segments}
            initialSelectedIndex={0}
            onSegmentChange={onSegmentChange}
          />
        </div>

        <div className={styles["right-wrap"]}>
          <div className={styles["dropdown-wrapper"]}>
            <Dropdown
              options={reportOptions}
              placeholder="Select Report Type"
              selectedOption={selectedReport || "Select Report Type"}
              onSelect={handleReportSelect}
            />
          </div>

          <div className={styles["icon-button-wrapper"]}>
            <IconButton iconUrl={downloadIcon} onClick={downloadPdf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

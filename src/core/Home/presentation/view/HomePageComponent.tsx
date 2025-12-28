import { FC, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "@/commons/components/NavBar/presentation/view/NavBar";
import MobileHeader from "@/commons/components/MobileHeader/presentation/view/MobileHeader";
import Header from "@/commons/components/Header/presentation/view/Header";
import { useMobileDetection } from "./hooks/useMobileDetection";
import {
  ReportProvider,
  ReportType,
  useReport,
} from "@/commons/context/ReportContext";
import ChapterLevelReport from "./components/ChapterLevelReport";
import ExaminationReport from "./components/ExaminationReport";
import InterventionReport from "./components/InterventionReport";

const HomePage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMobileDetection();
  const { selectedReport, setSelectedReport } = useReport();
  const [showBothColumns, setShowBothColumns] = useState(false);

  useEffect(() => {
    setShowBothColumns(selectedReport === "Chapter Level QC Report");
  }, [selectedReport]);

  const handleReportSelect = (report: string) => {
    setSelectedReport(report as ReportType);
    const shouldShowBothColumns = report === "Chapter Level QC Report";
    setShowBothColumns(shouldShowBothColumns);

    // Update URL based on selected report
    switch (report) {
      default:
        navigate("/");
    }
  };

  const handleDownloadClick = () => {
    if (selectedReport) {
      alert(`Downloading ${selectedReport}`);
    } else {
      alert("Please select a report type before downloading.");
    }
  };

  const renderReportComponent = () => {
    switch (selectedReport) {
      case "Exam Status Report":
        return <ExaminationReport />;
      case "Intervention Impact Report":
        return <InterventionReport />;
      case "Chapter Level QC Report":
        return <ChapterLevelReport showBothColumns={showBothColumns} />;
      default:
        return null;
    }
  };

  return (
    <ReportProvider initialPath={location.pathname}>
      <div className="flex min-h-screen bg-dotted-pattern relative">
        <NavBar />
        <div className="flex-1 overflow-auto h-screen">
          <div className="relative md:pl-36 md:pr-4 pb-4 ">
            <MobileHeader />
            {!(isMobile && location.pathname !== "/") && (
              <Header
                onSegmentChange={() => {}}
                onReportSelect={handleReportSelect}
                onDownloadClick={handleDownloadClick}
                onColumnVisibilityChange={setShowBothColumns}
              />
            )}
            {renderReportComponent()}
          </div>
        </div>
      </div>
    </ReportProvider>
  );
};

export default HomePage;

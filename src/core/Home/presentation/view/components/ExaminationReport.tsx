import { FC, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import ExaminationCard from "@/commons/components/ExaminationCard/ExaminationCard";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import { ConnectionContext } from "@/commons/context/ConnectionContext";
import {
  dummyClassesNotAttendedData,
  dummyDataForQCPopUp,
  practicesheetsData,
  reportThreeData,
} from "@/dummyDataThree";
import QcLevelUnderstandingPopup from "@/commons/components/QcLevelUnderstandingPopup/QcLevelUnderstandingPopup";
import { useMobileDetection } from "../hooks/useMobileDetection";
import PracticeSheetStatus from "@/commons/components/PracticeSheetSubmissionPopup/PracticeSheetSubmissionPopup";
import ClassesNotAttended from "@/commons/components/ClassesNotAttendedPopup/ClassesNotAttendedPopup";

const ExaminationReport: FC = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const examCardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const isExamRoute = location.pathname.includes("/exam/");

  // For handling scroll on popup visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const isPracticeSheetRoute = location.pathname.includes(
      "/details/submissionstatus"
    );
    const isClassesNotAttendedRoute = location.pathname.includes(
      "/details/classesnotattended"
    );
    const isProgressDetailsRoute = location.pathname.includes(
      "/details/progress/details"
    );

    const shouldScroll =
      isPracticeSheetRoute ||
      isClassesNotAttendedRoute ||
      isProgressDetailsRoute;

    if (shouldScroll) {
      const container = containerRef.current;
      const scrollPosition = container.scrollWidth - container.clientWidth;

      // Determine extra space based on route
      const extraSpace = isProgressDetailsRoute ? 1000 : 500;

      // Immediate scroll
      container.scrollTo({
        left: scrollPosition + extraSpace,
        behavior: "smooth",
      });

      // Delayed scroll for dynamic content
      const timeoutId = setTimeout(() => {
        if (container) {
          container.scrollTo({
            left: scrollPosition + extraSpace,
            behavior: "smooth",
          });
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  const handleExamSelect = (examTitle: string) => {
    setSelectedExam(examTitle);
    navigate(`/exam/${examTitle}`);
  };

  const closePopup = () => {
    const newPath = location.pathname.replace("/progress/details", "/progress");
    navigate(newPath);
  };

  const closeClassNotAttendedPopup = () => {
    const newPath = location.pathname.replace(
      "/details/classesnotattended",
      "/details"
    );
    navigate(newPath);
  };

  const shouldShowPopup =
    location.pathname.includes("/exam/") &&
    location.pathname.includes("/details/progress/details");

  const showPracticeSheetPopup =
    location.pathname.includes("/exam/") &&
    location.pathname.includes("/details/submissionstatus");

  const showClassesNotAttendedPopup =
    location.pathname.includes("/exam/") &&
    location.pathname.includes("/details/classesnotattended");

  const renderPopupContent = () => {
    if (shouldShowPopup) {
      return (
        <QcLevelUnderstandingPopup
          id={1}
          title="Operations on Algebraic Expressions"
          rating={3}
          categories={dummyDataForQCPopUp}
          onClose={closePopup}
        />
      );
    }
    if (showPracticeSheetPopup) {
      return (
        <PracticeSheetStatus
          sheets={practicesheetsData}
          onClose={() => navigate(`/exam/${examId}/details`)}
        />
      );
    }
    if (showClassesNotAttendedPopup) {
      return (
        <ClassesNotAttended
          classes={dummyClassesNotAttendedData}
          onClose={closeClassNotAttendedPopup}
        />
      );
    }
    return null;
  };

  const isAnyPopupVisible =
    shouldShowPopup || showPracticeSheetPopup || showClassesNotAttendedPopup;

  return (
    <ConnectionContext.Provider value={{ examCardRefs, selectedExam }}>
      <div ref={containerRef} className="relative overflow-x-auto p-4 md:p-0">
        <div
          className={`flex flex-col md:flex-row md:gap-20 relative z-0 ${
            showPracticeSheetPopup || showClassesNotAttendedPopup
              ? "md:min-w-[900px]"
              : shouldShowPopup
              ? "md:min-w-[1400px]"
              : ""
          }`}
        >
          {/* Left Column: Examination List */}
          {!(isExamRoute && isMobile) && (
            <div className="flex flex-col md:min-w-72 w-full md:w-[320px]">
              {!isMobile && (
                <SectionHeader
                  text="Examinations"
                  textColor="primary-950"
                  backgroundColor="from-[#8ECFF8] to-[#CBE9FC]"
                />
              )}
              <div className="w-full flex flex-col gap-4">
                {reportThreeData.map((exam) => (
                  <div
                    key={exam.title}
                    ref={(el) => (examCardRefs.current[exam.title] = el)}
                  >
                    <ExaminationCard
                      title={exam.title}
                      date={exam.date}
                      isSelected={selectedExam === exam.title}
                      onClick={() => handleExamSelect(exam.title)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column: Outlet for Exam Details */}
          <div
            className={`transition-opacity duration-300 w-full ${
              isMobile && isExamRoute ? "mt-4" : ""
            }`}
          >
            <Outlet />
          </div>
        </div>

        {/* Popups */}
        {isMobile ? (
          <BottomSheet isVisible={isAnyPopupVisible} onClose={closePopup}>
            {renderPopupContent()}
          </BottomSheet>
        ) : (
          <div
            className={`fixed top-24 right-8 flex justify-end z-50 transition-all duration-300 transform
              ${
                isAnyPopupVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }
              ${shouldShowPopup ? "w-[90%] max-w-[800px]" : "w-[400px]"}`}
          >
            {renderPopupContent()}
          </div>
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default ExaminationReport;

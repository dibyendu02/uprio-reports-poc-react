import React, { useRef, useState, useEffect } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  ConnectionContext,
  ConnectionContextType,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import AttendanceAndPracticeCard from "@/commons/components/AttendanceAndPracticeCard/AttendanceAndPracticeCard";
import { reportThreeData } from "@/dummyDataThree";
import { ConnectionLines } from "../MultipleChapterOutlet/ConnectionLines";
import { useConnections } from "./useConnection";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import { formatAttendanceData } from "@/commons/utils/services/dataFormating";
import { BackHeader } from "../Home/presentation/view/components/BackHeader";
import { useMobileDetection } from "../Home/presentation/view/hooks/useMobileDetection";
import MobileFooter from "@/commons/components/MobileFooter/MobileFooter";
import RightArrow from "@/assets/icons/arrow-right.svg";

const ChapterDetailsOutlet: React.FC = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const context = useConnectionContext();
  const isMobile = useMobileDetection();
  const location = useLocation();

  const containerRef = useRef<HTMLDivElement>(null);
  const attendanceCardRef = useRef<HTMLDivElement>(null);
  const [isAttendanceMounted, setIsAttendanceMounted] = useState(false);
  const [showMobileFoorter, setShowMobileFooter] = useState(true);

  // Check if the current path contains submissionstatus or classesnotattended
  const isSpecialView =
    location.pathname.includes("submissionstatus") ||
    location.pathname.includes("classesnotattended");

  useEffect(() => {
    if (attendanceCardRef.current) {
      setIsAttendanceMounted(true);
    }
    return () => setIsAttendanceMounted(false);
  }, [attendanceCardRef.current]);

  const { connections, svgDimensions } = useConnections(
    containerRef,
    context.chaptersRef?.current ?? null,
    attendanceCardRef,
    isAttendanceMounted
  );

  const selectedExam = reportThreeData.find((exam) => exam.title === examId);
  if (!selectedExam) return null;

  const attendanceData = formatAttendanceData(selectedExam);

  const contextValue: ConnectionContextType = {
    ...context,
    chapterDetailsRef: attendanceCardRef,
    multipleChapterRef: context.chaptersRef,
  };

  const shouldShowConnections =
    Boolean(context.chaptersRef?.current) && isAttendanceMounted;

  const isProgressView = location.pathname.includes("progress");

  return (
    <ConnectionContext.Provider value={contextValue}>
      <div className="w-full relative pb-20 md:pb-0" ref={containerRef}>
        <div
          className={`flex md:gap-20 relative z-0 ${
            isSpecialView ? "md:min-w-[1300px]" : ""
          }`}
        >
          {!(isMobile && isProgressView) && (
            <div className="flex flex-col min-w-full md:min-w-fit w-full md:w-[320px]">
              <div className="mb-3 md:mb-0">
                {isMobile ? (
                  <BackHeader
                    title={`Isha's Input for ${examId} Exam`}
                    route={`/exam/${examId}`}
                  />
                ) : (
                  <SectionHeader
                    text={`Isha's Input for ${examId} Exam`}
                    textColor="secondary-900"
                    backgroundColor="from-[#97E5DE] to-[#CEEAE8]"
                  />
                )}
              </div>
              <div className="w-full md:min-w-[385px]" ref={attendanceCardRef}>
                <AttendanceAndPracticeCard
                  data={attendanceData}
                  defaultSubject={Object.keys(attendanceData)[0]}
                  onSubjectChange={(subject) =>
                    console.log("Subject changed:", subject)
                  }
                  onTopicClick={(topicId, subject) => {
                    console.log("Topic clicked:", topicId, subject);
                  }}
                  onClick={() => navigate(`/exam/${examId}/details/progress`)}
                  practiceSheetClick={() =>
                    navigate(`/exam/${examId}/details/submissionstatus`)
                  }
                  classesScheduledClick={() =>
                    navigate(`/exam/${examId}/details/classesnotattended`)
                  }
                  setShowMobileFooter={setShowMobileFooter}
                />
              </div>
            </div>
          )}
          <div className="transition-opacity duration-300 w-full">
            <Outlet />
          </div>
        </div>

        {shouldShowConnections && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <ConnectionLines
              connections={connections}
              svgDimensions={svgDimensions}
            />
          </div>
        )}

        {/* Mobile Footer */}
        {isMobile && !isProgressView && showMobileFoorter && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <MobileFooter
              text={`View Understanding of ${examId} Chapters`}
              onClick={() => navigate(`/exam/${examId}/details/progress`)}
              iconUrl={RightArrow}
            />
          </div>
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default ChapterDetailsOutlet;

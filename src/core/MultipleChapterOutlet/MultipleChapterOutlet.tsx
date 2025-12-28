import React, { useRef, useEffect, useState } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { BackHeader } from "@/core/Home/presentation/view/components/BackHeader";
import {
  ConnectionContext,
  useConnectionContext,
  ConnectionContextType,
} from "@/commons/context/ConnectionContext";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import MultipleChaptersCard from "@/commons/components/MultipleChapterCard/MultipleChapterCard";
import { reportThreeData } from "@/dummyDataThree";
import { useConnections } from "./useConnection";
import { ConnectionLines } from "./ConnectionLines";
import { useMobileDetection } from "../Home/presentation/view/hooks/useMobileDetection";
import RightArrow from "@/assets/icons/arrow-right.svg";
import MobileFooter from "@/commons/components/MobileFooter/MobileFooter";

const ExamOutlet: React.FC = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobileDetection();

  // Update context usage
  const context = useConnectionContext();
  const examCardRefs = context.examCardRefs;
  const selectedExam = context.selectedExam;

  const chaptersRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track if chapter card is mounted
  const [isChapterMounted, setIsChapterMounted] = useState(false);

  // Get exam data and organize chapters by subject
  const selectedExamData = reportThreeData.find(
    (exam) => exam.title === examId
  );

  // Effect to track chapter card mounting
  useEffect(() => {
    if (chaptersRef.current) {
      setIsChapterMounted(true);
    }
    return () => setIsChapterMounted(false);
  }, [chaptersRef.current]);

  // Get the current exam card element safely
  const currentExamCardElement =
    examId && examCardRefs?.current
      ? examCardRefs.current[examId] ?? null
      : null;

  // Only calculate connections when both elements are available
  const { connections, svgDimensions } = useConnections(
    containerRef,
    currentExamCardElement,
    chaptersRef,
    isChapterMounted
  );

  if (!selectedExamData) return null;

  const formatSubjectsData = (examData: any) => {
    if (!examData?.subjects) return {};

    const formattedData: {
      [key: string]: { title: string; topics: string[] }[];
    } = {};

    Object.entries(examData.subjects).forEach(
      ([_, subjectData]: [string, any]) => {
        formattedData[subjectData.label] = subjectData.chapters;
      }
    );

    return formattedData;
  };

  const isDetailsView = location.pathname.includes("details");
  const subjectsData = formatSubjectsData(selectedExamData);

  const handleChaptersClick = () => {
    navigate(`/exam/${examId}/details`);
  };

  // Prepare context value with proper typing
  const contextValue: ConnectionContextType = {
    chaptersRef,
    examCardRefs,
    selectedExam,
  };

  const shouldShowConnections =
    Boolean(currentExamCardElement) && isChapterMounted;

  return (
    <ConnectionContext.Provider value={contextValue}>
      <div className="flex flex-col min-w-full md:min-w-fit relative pb-20 md:pb-0">
        <div className="flex md:gap-20 relative z-0" ref={containerRef}>
          {/* Left Column */}
          <div
            className={`flex flex-col min-w-full md:min-w-fit w-full md:w-[320px] ${
              isDetailsView ? "hidden md:flex" : ""
            }`}
          >
            {/* Mobile/Desktop Headers */}
            {isMobile ? (
              <BackHeader title="Examination Details" route="/" />
            ) : (
              <div className="hidden md:block">
                <SectionHeader
                  text={`${examId}: List of Chapters`}
                  textColor="accent-purple-900"
                  backgroundColor="from-[#D7BBF3] to-[#EAD7FD]"
                />
              </div>
            )}

            {/* Single MultipleChaptersCard with all subjects */}
            <div className="w-full md:w-[320px] mt-3 md:mt-0" ref={chaptersRef}>
              <MultipleChaptersCard
                subjects={subjectsData}
                onClick={handleChaptersClick}
                className="bg-white hover:shadow-lg transition-shadow"
                isSelected={true}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="transition-opacity duration-300 w-full">
            <Outlet />
          </div>
        </div>

        {/* Connection Lines - Only render when both elements are available */}
        {shouldShowConnections && (
          <ConnectionLines
            connections={connections}
            svgDimensions={svgDimensions}
          />
        )}

        {/* Mobile Footer */}
        {isMobile && !isDetailsView && (
          <MobileFooter
            text={`View Isha's input for ${examId} exam`}
            onClick={handleChaptersClick}
            iconUrl={RightArrow}
          />
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default ExamOutlet;

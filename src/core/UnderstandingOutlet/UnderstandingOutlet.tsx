import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom";
import {
  ConnectionContext,
  ConnectionContextType,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import UnderstandingAndProgressCard from "@/commons/components/UnderstandingAndProgressCard/UnderstandingAndProgressCard";
import { reportThreeData } from "@/dummyDataThree";
import { ConnectionLines } from "../MultipleChapterOutlet/ConnectionLines";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import { useConnections } from "../ChapterDetailsOutlet/useConnection";
import { formatUnderstandingData } from "@/commons/utils/services/dataFormating";
import { BackHeader } from "../Home/presentation/view/components/BackHeader";
import { useMobileDetection } from "../Home/presentation/view/hooks/useMobileDetection";
import MobileFooter from "@/commons/components/MobileFooter/MobileFooter";
import RightArrow from "@/assets/icons/arrow-right.svg";

const UnderstandingOutlet: React.FC = () => {
  const { examId } = useParams();
  const context = useConnectionContext();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobileDetection();

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardMounted, setIsCardMounted] = useState(false);
  const [showMobileFoorter, setShowMobileFooter] = useState(true);

  useEffect(() => {
    if (cardRef.current) {
      setIsCardMounted(true);
    }
    return () => setIsCardMounted(false);
  }, [cardRef.current]);

  const { connections, svgDimensions } = useConnections(
    containerRef,
    context.chapterDetailsRef?.current ?? null,
    cardRef,
    isCardMounted
  );

  const selectedExam = reportThreeData.find((exam) => exam.title === examId);
  if (!selectedExam) return null;

  const understandingData = formatUnderstandingData(selectedExam);
  const contextValue: ConnectionContextType = {
    ...context,
    understandingRef: cardRef,
    chapterDetailsRef: context.chapterDetailsRef,
  };

  const shouldShowConnections =
    Boolean(context.chapterDetailsRef?.current) && isCardMounted;

  const isRevisionView = location.pathname.includes("revision");
  const isProgressDetailsView = location.pathname.includes(
    "details/progress/details"
  );

  const handleRevisionClick = () => {
    navigate(`/exam/${examId}/details/progress/revision`);
  };

  useEffect(() => {
    console.log(isProgressDetailsView);
  }, [isProgressDetailsView]);

  return (
    <ConnectionContext.Provider value={contextValue}>
      <div className="w-full relative pb-20 md:pb-0" ref={containerRef}>
        <div
          className={`flex md:gap-20 relative z-0   ${
            isProgressDetailsView ? "w-[1700px] " : ""
          }`}
        >
          {!(isRevisionView && isMobile) && (
            <div className="flex flex-col min-w-full md:min-w-fit w-full md:w-[320px]">
              <div className="mb-3 md:mb-0">
                {isMobile ? (
                  <BackHeader
                    title={`Understanding & Progress of ${examId} Syllabus Chapters`}
                    route={`/exam/${examId}/details`}
                  />
                ) : (
                  <SectionHeader
                    text={`Understanding & Progress of ${examId} Syllabus Chapters`}
                    textColor="semantic-warning-800"
                    backgroundColor="from-[#EFDD81] to-[#F2E6AE]"
                  />
                )}
              </div>
              <div className="w-full md:min-w-[385px]" ref={cardRef}>
                <UnderstandingAndProgressCard
                  data={understandingData}
                  defaultSubject={Object.keys(understandingData)[0]}
                  onSubjectChange={(subject) =>
                    console.log("Subject changed:", subject)
                  }
                  onTopicClick={(topicId, subject) =>
                    console.log("Topic clicked:", topicId, subject)
                  }
                  onClick={handleRevisionClick}
                  onUnderstaningCardClick={() => {
                    navigate(`/exam/${examId}/details/progress/details`);
                  }}
                  setShowMobileFooter={setShowMobileFooter}
                />
              </div>
            </div>
          )}
          <div className="transition-opacity duration-300 w-full">
            <Outlet />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {shouldShowConnections && (
            <ConnectionLines
              connections={connections}
              svgDimensions={svgDimensions}
            />
          )}
        </div>

        {/* Mobile Footer */}
        {isMobile && !isRevisionView && showMobileFoorter && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-10">
            <MobileFooter
              text={`View ${examId} Revision Plan`}
              onClick={() =>
                navigate(`/exam/${examId}/details/progress/revision`)
              }
              iconUrl={RightArrow}
            />
          </div>
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default UnderstandingOutlet;

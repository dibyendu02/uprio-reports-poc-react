import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ConnectionContext,
  ConnectionContextType,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import { reportThreeData } from "@/dummyDataThree";
import { ConnectionLines } from "../MultipleChapterOutlet/ConnectionLines";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import RevisionTimelineCard from "@/commons/components/RevisionPlanCard/RevisionPlanCard";
import { useConnections } from "../ChapterDetailsOutlet/useConnection";
import { BackHeader } from "../Home/presentation/view/components/BackHeader";
import { useMobileDetection } from "../Home/presentation/view/hooks/useMobileDetection";

const RevisionOutlet: React.FC = () => {
  const { examId } = useParams();
  const context = useConnectionContext();
  const isMobile = useMobileDetection();

  const containerRef = useRef<HTMLDivElement>(null);
  const revisionCardRef = useRef<HTMLDivElement>(null);
  const [isRevisionMounted, setIsRevisionMounted] = useState(false);

  useEffect(() => {
    if (revisionCardRef.current) {
      setIsRevisionMounted(true);
    }
    return () => setIsRevisionMounted(false);
  }, [revisionCardRef.current]);

  const { connections, svgDimensions } = useConnections(
    containerRef,
    context.understandingRef?.current ?? null,
    revisionCardRef,
    isRevisionMounted
  );

  const selectedExam = reportThreeData.find((exam) => exam.title === examId);
  if (!selectedExam) return null;

  const contextValue: ConnectionContextType = {
    ...context,
    revisionRef: revisionCardRef,
    understandingRef: context.understandingRef,
  };

  const shouldShowConnections =
    Boolean(context.understandingRef?.current) && isRevisionMounted;

  return (
    <ConnectionContext.Provider value={contextValue}>
      <div className="w-full relative" ref={containerRef}>
        <div className="flex md:gap-20 relative z-0">
          <div className="flex flex-col min-w-full md:min-w-fit w-full md:w-[320px]">
            <div className="mb-3 md:mb-0">
              {isMobile ? (
                <BackHeader
                  title={`Revision Timeline for ${examId}`}
                  route={`/exam/${examId}/details/progress`}
                />
              ) : (
                <SectionHeader
                  text={`Revision Timeline for ${examId}`}
                  textColor="semantic-success-800"
                  backgroundColor="from-[#B6E6A0] to-[#CEF1BF]"
                />
              )}
            </div>
            <div className="w-full md:min-w-[385px]" ref={revisionCardRef}>
              <RevisionTimelineCard plans={selectedExam.revisionPlans} />
            </div>
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
      </div>
    </ConnectionContext.Provider>
  );
};

export default RevisionOutlet;

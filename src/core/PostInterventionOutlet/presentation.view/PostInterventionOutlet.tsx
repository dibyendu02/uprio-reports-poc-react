import PostInterventionCard from "@/commons/components/PostInterventionCard/presentation/view/PostInterventionCard";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import {
  ConnectionContext,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import { BackHeader } from "@/core/Home/presentation/view/components/BackHeader";
import { ConnectionConfig } from "@/core/Home/presentation/view/hooks/useConnectionCalculator";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";
import { chapters } from "@/dummyData";
import { chapterInterventionSummaries } from "@/dummyDataTwo";
import { Connection } from "@/types/Connection";
import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const PostInterventionOutlet: React.FC = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobileDetection();

  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const { preInterventionRef } = useConnectionContext();
  const postInterventionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isCategoryView = location.pathname.includes("category");

  // Calculate connections logic
  const calculateConnections = () => {
    if (
      !containerRef.current ||
      !preInterventionRef?.current ||
      !postInterventionRef.current
    ) {
      return;
    }

    const newConnections: Connection[] = [];
    const containerRect = containerRef.current.getBoundingClientRect();
    const preInterventionRect =
      preInterventionRef.current.getBoundingClientRect();
    const postInterventionRect =
      postInterventionRef.current.getBoundingClientRect();

    const config: ConnectionConfig = {
      curveWidth: 40,
      curveRadius: 30,
      minLineHeight: 10,
    };

    const startX = preInterventionRect.right - containerRect.left;
    const startY =
      preInterventionRect.top +
      preInterventionRect.height / 4 -
      containerRect.top;
    const endX = postInterventionRect.left - containerRect.left;
    const endY =
      postInterventionRect.top +
      postInterventionRect.height / 2 -
      containerRect.top;

    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    let startCurve: string;
    let endCurve: string;
    let line: { top: number; left: number; height: number };

    if (isNearlyHorizontal) {
      startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY}, ${
        startX + config.curveWidth
      } ${startY}
      `;
      endCurve = `
        M ${endX - config.curveWidth} ${endY}
        H ${endX}
      `;
      line = {
        top: startY - 1,
        left: startX + config.curveWidth - 1,
        height: 2,
      };
    } else {
      startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY}, ${
        startX + config.curveWidth
      } ${startY + (isDescending ? config.curveRadius : -config.curveRadius)}
      `;
      endCurve = `
        M ${endX - config.curveWidth} ${
        endY + (isDescending ? -config.curveRadius : config.curveRadius)
      }
        Q ${endX - config.curveWidth} ${endY}, ${
        endX - config.curveWidth + config.curveRadius
      } ${endY}
        H ${endX}
      `;
      const verticalDistance = Math.abs(endY - startY);
      const effectiveHeight = Math.max(
        verticalDistance - config.curveRadius * 2,
        0
      );
      line = {
        top: isDescending
          ? startY + config.curveRadius
          : endY + config.curveRadius,
        left: startX + config.curveWidth - 1,
        height: effectiveHeight,
      };
    }

    newConnections.push({
      startCurve,
      endCurve,
      line,
      startDot: { x: startX, y: startY },
      endDot: { x: endX, y: endY },
    });

    setConnections(newConnections);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });
  };

  useEffect(() => {
    calculateConnections();
    const observer = new ResizeObserver(calculateConnections);
    if (containerRef.current) observer.observe(containerRef.current);
    if (preInterventionRef?.current)
      observer.observe(preInterventionRef.current);
    if (postInterventionRef.current)
      observer.observe(postInterventionRef.current);
    window.addEventListener("scroll", calculateConnections);
    window.addEventListener("resize", calculateConnections);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnections);
      window.removeEventListener("resize", calculateConnections);
    };
  }, [preInterventionRef?.current]);

  const interventionData = chapterInterventionSummaries.find(
    (summary) => summary.chapterId === chapterId
  );
  const chapterData = chapters.find(
    (chapter) => chapter.chapterId === chapterId
  );

  if (!interventionData || !chapterData) return null;

  const preInterventionCounts = {
    wellUnderstood: interventionData.preUnderstanding.wellUnderstood,
    sillyMistakes: interventionData.preUnderstanding.understoodBut,
    needsReinforcement: interventionData.preUnderstanding.requiresFurther,
    notAssessed: 0,
  };

  const postInterventionCounts = {
    wellUnderstood: interventionData.postUnderstanding.wellUnderstood,
    sillyMistakes: interventionData.postUnderstanding.understoodBut,
    needsReinforcement: interventionData.postUnderstanding.requiresFurther,
    notAssessed: 0,
  };

  const handleCardClick = () => {
    navigate(`/chapter/${chapterId}/intervention/details/category`);
  };

  const shouldShowHeader = !isMobile || !isCategoryView;

  return (
    <ConnectionContext.Provider
      value={{
        postInterventionRef: postInterventionRef,
      }}
    >
      <div className="flex flex-col min-w-full md:min-w-fit relative">
        <div
          className="flex flex-col md:flex-row md:gap-20 relative z-0"
          ref={containerRef}
        >
          <div
            className={`flex flex-col w-full md:w-[500px] ${
              isCategoryView && isMobile ? "hidden" : ""
            }`}
          >
            {shouldShowHeader && (
              <SectionHeader
                text="Post-Intervention Chapter Level Understanding"
                textColor="secondary-900"
                backgroundColor="from-[#97E5DE] to-[#CEEAE8]"
              />
            )}
            {isMobile && !isCategoryView && (
              <BackHeader
                title="Post-Intervention Chapter Level Understanding"
                route={`/chapter/${chapterId}/intervention`}
              />
            )}
            <div className="w-full mt-3 md:mt-0" ref={postInterventionRef}>
              <PostInterventionCard
                preInterventionCounts={preInterventionCounts}
                postInterventionCounts={postInterventionCounts}
                totalCategories={interventionData.categories}
                onClick={handleCardClick}
                className="bg-white hover:shadow-lg transition-shadow"
                isSelected={true}
              />
            </div>
          </div>
          <div className="transition-opacity duration-300 w-full">
            <Outlet />
          </div>
        </div>
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-0 left-0"
              width={svgDimensions.width}
              height={svgDimensions.height}
              style={{ overflow: "visible" }}
            >
              {connections.map((conn, index) => (
                <g key={`curves-${index}`}>
                  {conn.startCurve && (
                    <path
                      d={conn.startCurve}
                      fill="none"
                      stroke="#B4B6C5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  )}
                  {conn.endCurve && (
                    <path
                      d={conn.endCurve}
                      fill="none"
                      stroke="#B4B6C5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  )}
                  {conn.startDot && (
                    <path
                      d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                      A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
                      fill="#a54eef"
                    />
                  )}
                  {conn.endDot && (
                    <path
                      d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                      A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                      fill="#039882"
                    />
                  )}
                </g>
              ))}
            </svg>
            {connections.map(
              (conn, index) =>
                conn.line && (
                  <div
                    key={`line-${index}`}
                    className="absolute bg-neutral-300 w-0.5 transition-all duration-300"
                    style={{
                      top: `${conn.line.top}px`,
                      left: `${conn.line.left}px`,
                      height: `${conn.line.height}px`,
                    }}
                  />
                )
            )}
          </div>
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default PostInterventionOutlet;

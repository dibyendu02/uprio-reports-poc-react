import React, { useEffect, useRef, useState } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import PreInterventionCard from "@/commons/components/PreInterventionCard/presentation/view/PreInterventionCard";
import { chapterInterventionSummaries } from "@/dummyDataTwo";
import { ConnectionConfig } from "@/core/Home/presentation/view/hooks/useConnectionCalculator";
import { Connection } from "@/types/Connection";
import { chapters } from "@/dummyData";
import { BackHeader } from "@/core/Home/presentation/view/components/BackHeader";
import {
  ConnectionContext,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";

const PreInterventionOutlet: React.FC = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // const { chapterRef } = useContext(ChapterToPreInterventionConnectionContext);
  const { chapterRef } = useConnectionContext();

  const preInterventionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateConnections = () => {
    if (
      !containerRef.current ||
      !chapterRef?.current ||
      !preInterventionRef.current
    ) {
      console.log("Missing refs:", {
        container: !!containerRef.current,
        chapter: !!chapterRef?.current,
        preIntervention: !!preInterventionRef.current,
      });
      return;
    }

    const newConnections: Connection[] = [];
    const containerRect = containerRef.current.getBoundingClientRect();

    // if (chapterRef.current && preInterventionRef.current) {
    const chapterRect = chapterRef.current.getBoundingClientRect();
    const preInterventionRect =
      preInterventionRef.current.getBoundingClientRect();

    // Configuration for connection curves
    const config: ConnectionConfig = {
      curveWidth: 40, // Horizontal spacing for the curve
      curveRadius: 30, // Radius for the curve
      minLineHeight: 10, // Minimum height for the line
    };

    console.log("Rects:", {
      container: {
        left: containerRect.left,
        top: containerRect.top,
        width: containerRect.width,
        height: containerRect.height,
      },
      chapter: {
        left: chapterRect.left,
        right: chapterRect.right,
        top: chapterRect.top,
        width: chapterRect.width,
        height: chapterRect.height,
      },
      preIntervention: {
        left: preInterventionRect.left,
        top: preInterventionRect.top,
        height: preInterventionRect.height,
      },
    });

    // Calculate the connection points
    const startX = chapterRect.right - containerRect.left;
    const startY = chapterRect.top + chapterRect.height / 2 - containerRect.top;
    const endX = preInterventionRect.left - containerRect.left;
    const endY =
      preInterventionRect.top +
      preInterventionRect.height / 2 -
      containerRect.top;

    console.log("Connection points:", { startX, startY, endX, endY });

    // Calculate path data
    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    let startCurve: string;
    let endCurve: string;
    let line: { top: number; left: number; height: number };

    if (isNearlyHorizontal) {
      // Handle nearly horizontal connections
      startCurve = `
            M ${startX} ${startY}
            H ${startX + config.curveWidth - config.curveRadius}
            Q ${startX + config.curveWidth} ${startY},
              ${startX + config.curveWidth} ${startY}
          `;

      endCurve = `
            M ${endX - config.curveWidth} ${endY}
            H ${endX}
          `;

      line = {
        top: startY - 1,
        left: startX + config.curveWidth - 1,
        height: 2, // Minimal height for visual consistency
      };
    } else {
      // Handle curved connections
      const verticalDistance = Math.abs(endY - startY);
      const effectiveHeight = Math.max(
        verticalDistance - config.curveRadius * 2,
        0
      );

      startCurve = `
            M ${startX} ${startY}
            H ${startX + config.curveWidth - config.curveRadius}
            Q ${startX + config.curveWidth} ${startY},
              ${startX + config.curveWidth} ${
        startY + (isDescending ? config.curveRadius : -config.curveRadius)
      }
          `;

      endCurve = `
            M ${endX - config.curveWidth} ${
        endY + (isDescending ? -config.curveRadius : config.curveRadius)
      }
            Q ${endX - config.curveWidth} ${endY},
              ${endX - config.curveWidth + config.curveRadius} ${endY}
            H ${endX}
          `;

      line = {
        top: isDescending
          ? startY + config.curveRadius
          : endY + config.curveRadius,
        left: startX + config.curveWidth - 1,
        height: effectiveHeight,
      };
    }

    console.log(startCurve, endCurve, line);

    // Create the connection object
    newConnections.push({
      startCurve,
      endCurve,
      line,
      startDot: { x: startX, y: startY },
      endDot: { x: endX, y: endY },
    });
    // }

    // Update state with new connections and dimensions
    setConnections(newConnections);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });
  };

  useEffect(() => {
    // Initial calculation
    calculateConnections();

    // Set up resize observer
    const observer = new ResizeObserver(calculateConnections);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (chapterRef?.current) {
      observer.observe(chapterRef.current);
    }
    if (preInterventionRef.current) {
      observer.observe(preInterventionRef.current);
    }

    // Set up event listeners
    window.addEventListener("scroll", calculateConnections);
    window.addEventListener("resize", calculateConnections);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnections);
      window.removeEventListener("resize", calculateConnections);
    };
  }, [chapterRef?.current]);
  const location = useLocation();

  const isDetailsView = location.pathname.includes("details");

  // Get intervention data for current chapter
  const interventionData = chapterInterventionSummaries.find(
    (summary) => summary.chapterId === chapterId
  );

  // Get chapter data for current chapter
  const chapterData = chapters.find(
    (chapter) => chapter.chapterId === chapterId
  );

  if (!interventionData || !chapterData) return null;

  // Prepare data for PreInterventionCard
  const categoryCounts = {
    wellUnderstood: interventionData.preUnderstanding.wellUnderstood,
    sillyMistakes: interventionData.preUnderstanding.understoodBut,
    needsReinforcement: interventionData.preUnderstanding.requiresFurther,
    notAssessed: 0,
  };

  const handleCardClick = () => {
    navigate(`/chapter/${chapterId}/intervention/details`);
  };

  return (
    <ConnectionContext.Provider
      value={{
        preInterventionRef: preInterventionRef,
      }}
    >
      <div className="flex flex-col min-w-full md:min-w-fit relative">
        <div
          className="flex md:gap-20 relative z-0"
          style={{ flexDirection: "row" }}
          ref={containerRef}
        >
          {/* Left Column */}
          <div
            className={`flex flex-col min-w-full md:min-w-fit w-full md:w-[320px] ${
              isDetailsView ? "hidden md:flex" : ""
            }`}
          >
            {/* Mobile Header - Only visible on mobile and when not in details view */}
            {!isDetailsView && (
              <>
                <BackHeader
                  title="Pre-Intervention Chapter Level Understanding"
                  route={`/`}
                />
                <div className="md:hidden my-3 px-4 py-3 bg-white rounded-[8px]">
                  <div className="p302 text-neutral-600">
                    Chapter: <span className="p303">{chapterData.title}</span>
                  </div>
                </div>
              </>
            )}

            {/* Desktop Header - Only visible on desktop */}
            <div className="hidden md:block">
              <SectionHeader
                text="Pre-Intervention Chapter Level Understanding"
                textColor="accent-purple-900"
                backgroundColor="from-[#D7BBF3] to-[#EAD7FD]"
              />
            </div>

            <div className="w-full md:w-[320px]" ref={preInterventionRef}>
              <PreInterventionCard
                categoryCounts={categoryCounts}
                totalCategories={interventionData.categories}
                onClick={handleCardClick}
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
        {/* Connection Elements */}

        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {/* SVG Connections */}
          <svg
            className="absolute top-0 left-0"
            width={svgDimensions.width}
            height={svgDimensions.height}
            style={{ overflow: "visible" }}
          >
            {connections.map((conn, index) => (
              <g key={`curves-${index}`}>
                {/* Start Curve */}
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

                {/* End Curve */}
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

                {/* Start Half-Cycle Dot (Y-axis) */}
                {conn.startDot && (
                  <path
                    d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                    A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
                    fill="#086ac5"
                  />
                )}

                {/* End Half-Cycle Dot (Y-axis) */}
                {conn.endDot && (
                  <path
                    d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                    fill="#a54eef"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Vertical Connection Lines */}
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
      </div>
    </ConnectionContext.Provider>
  );
};

export default PreInterventionOutlet;

import PostInterventionQCCard from "@/commons/components/PostInterventionQCCard/PostInterventionQCCard";
import { ImprovementVariant } from "@/commons/components/PostInterventionQCCard/PostInterventionQCCard.types";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import {
  ConnectionContext,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import { BackHeader } from "@/core/Home/presentation/view/components/BackHeader";
import { categoryInterventions } from "@/dummyDataTwo";
import { Connection } from "@/types/Connection";
import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const PostInterventionQCOutlet: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const { postInterventionRef } = useConnectionContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const postInterventionQCRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const { chapterId, categoryIndex } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Get the relevant class data based on chapter ID
  const classKey = `class${chapterId?.replace("chap", "")}_1`;
  const interventions = categoryInterventions[classKey] || [];

  const getImprovementStatus = (preRating: number, postRating: number) => {
    if (postRating > preRating) return "Improved";
    if (postRating < preRating) return "Drop in performance";
    return "Same as before";
  };

  const isDetailsView = /\/\d+\/details$/.test(location.pathname);

  const handleCardClick = (categoryIndex: number, selectedStatus: string) => {
    setSelectedIndex(categoryIndex);
    setSelectedStatus(selectedStatus);

    isDetailsView
      ? navigate(
          `/chapter/${chapterId}/intervention/details/category/${categoryIndex}/details/questions`
        )
      : navigate(
          `/chapter/${chapterId}/intervention/details/category/${categoryIndex}/details`
        );
  };

  // Transform intervention metrics for InDepthQcCard
  const getInterventionData = (metrics: any) => ({
    questionsAsked: metrics.questionsAsked,
    answeredCorrectly: metrics.questionsAnsweredCorrectly,
    answeredPercentage: Math.round(
      (metrics.questionsAnsweredCorrectly / metrics.questionsAsked) * 100
    ),
    correctSteps: metrics.correctSteps,
    correctStepsPercentage: Math.round(
      (metrics.correctSteps / metrics.totalSteps) * 100
    ),
    totalSteps: metrics.totalSteps,
  });

  const toImprovementVariant = (status: string): ImprovementVariant => {
    const normalized = status.trim().toLowerCase();
    if (normalized === "improved") return "improved";
    if (normalized === "drop in performance") return "drop-in-performance";
    return "same-as-before";
  };

  const calculateConnections = () => {
    if (!containerRef.current || !postInterventionRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const postInterventionRect =
      postInterventionRef.current.getBoundingClientRect();
    const newConnections: Connection[] = [];

    postInterventionQCRefs.current.forEach((postInterventionQCRef, index) => {
      if (!postInterventionQCRef) return;

      const postInterventionQCRect =
        postInterventionQCRef.getBoundingClientRect();

      const intervention = interventions[index];

      const startX = postInterventionRect.right - containerRect.left;
      const startY = postInterventionRect.top + 32 - containerRect.top;
      const endX = postInterventionQCRect.left - containerRect.left;
      const endY =
        postInterventionQCRect.top +
        postInterventionQCRect.height / 2 -
        containerRect.top;

      const curveWidth = 40;
      const curveRadius = 30;
      const yDifference = Math.abs(endY - startY);
      const isDescending = endY > startY;
      const minLineHeight = 40; // Ensure a minimum height for the line

      const isNearlyHorizontal = yDifference < minLineHeight;

      let startCurve, endCurve, line;

      if (isNearlyHorizontal) {
        startCurve = ``;

        endCurve = `
          M ${endX - curveWidth} ${endY}
          H ${endX}
        `;

        line = {
          top: startY - 1,
          left: startX + curveWidth - 1,
          height: 2,
        };
      } else {
        startCurve = `
          M ${startX} ${startY}
          H ${startX + curveWidth - curveRadius}
          Q ${startX + curveWidth} ${startY},
            ${startX + curveWidth} ${
          startY + (isDescending ? curveRadius : -curveRadius)
        }
          V ${isDescending ? endY - curveRadius : endY + curveRadius}
        `;

        endCurve = `
          M ${endX - curveWidth} ${
          isDescending ? endY - curveRadius : startY - curveRadius
        }
          V ${endY - (isDescending ? curveRadius : -curveRadius)}
          Q ${endX - curveWidth} ${endY},
            ${endX - curveWidth + curveRadius} ${endY}
          H ${endX}
        `;

        line = {
          top: Math.min(
            startY + (isDescending ? curveRadius - 1 : 0),
            endY + (isDescending ? 0 : curveRadius - 1)
          ),
          left: startX + curveWidth - 1,
          height: Math.abs(endY - startY) - curveRadius * 2 + 2,
        };
      }

      newConnections.push({
        startCurve,
        endCurve,
        line,
        startDot: { x: startX, y: startY },
        endDot: { x: endX, y: endY },
        dotColor: getDotColor(
          toImprovementVariant(
            getImprovementStatus(
              intervention.preRating,
              intervention.postRating
            )
          )
        ),
        // evaluationId,
      });
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
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (postInterventionRef?.current) {
      observer.observe(postInterventionRef.current);
    }

    window.addEventListener("resize", () => {
      calculateConnections();
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateConnections);
    };
  }, [postInterventionRef?.current]);

  // const isDetailsView = location.pathname.includes("details");

  // Get the relevant class data based on chapter ID

  const getDotColor = (variant: ImprovementVariant) => {
    switch (variant) {
      case "improved":
        return "var(--semantic-success-600)";
      case "same-as-before":
        return "var(--accent-orange-500)";
      default:
        return "var(--semantic-error-600)";
    }
  };

  const handleInternalCardClick = () => {
    console.log("navigatiiiiing");
  };

  // Create the context value with required refs
  const connectionContextValue = {
    selectedPostInterventionQcRef:
      selectedIndex !== null
        ? { current: postInterventionQCRefs.current[selectedIndex] }
        : null,
    postInterventionQCRefs,
    selectedStatus,
  };
  return (
    <ConnectionContext.Provider value={connectionContextValue}>
      <div className="flex flex-col w-full relative">
        <BackHeader
          title="Post Intervention QC Level Understanding"
          route={`/chapter/${chapterId}/intervention/details`}
        />

        <div
          className="flex md:gap-20 relative z-0 flex-col md:flex-row"
          ref={containerRef}
        >
          <div className={`flex flex-col w-full md:w-[380px] `}>
            <div className="hidden md:block">
              <SectionHeader
                text="Post Intervention QC Level Understanding"
                textColor="semantic-warning-800"
                backgroundColor="from-[#EFDD81] to-[#F2E6AE]"
              />
            </div>

            <div className="space-y-4 w-full mt-3 md:mt-0 md:w-[380px]">
              {interventions.map((intervention, index) => (
                <div
                  key={`${intervention.chapterId}-${index}`}
                  ref={(el) => (postInterventionQCRefs.current[index] = el)}
                >
                  <PostInterventionQCCard
                    idx={index + 1}
                    categoryTitle={intervention.categoryTitle}
                    preInterventionRating={intervention.preRating}
                    postInterventionRating={intervention.postRating}
                    improvementStatus={getImprovementStatus(
                      intervention.preRating,
                      intervention.postRating
                    )}
                    remarks={intervention.remarkMessage}
                    className="bg-white hover:shadow-lg transition-shadow cursor-pointer"
                    isSelected={true}
                    onClick={() =>
                      handleCardClick(
                        index,
                        getImprovementStatus(
                          intervention.preRating,
                          intervention.postRating
                        )
                      )
                    }
                    handleInternalCardClick={handleInternalCardClick}
                    isInDepth={isDetailsView}
                    // Pass intervention data for mobile view
                    mobileViewData={
                      isDetailsView && index === parseInt(categoryIndex || "0")
                        ? {
                            preIntervention: getInterventionData(
                              intervention.preIntervention
                            ),
                            postIntervention: getInterventionData(
                              intervention.postIntervention
                            ),
                            title: intervention.categoryTitle,
                          }
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="transition-opacity duration-300 w-full hidden md:block">
            <Outlet />
          </div>
        </div>
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 left-0"
            width={svgDimensions.width}
            height={svgDimensions.height}
            style={{ overflow: "visible" }}
          >
            {connections.map((conn, index) => (
              <g key={`curves-${index}`}>
                {/* Connection Curves */}
                <path
                  d={conn.startCurve}
                  fill="none"
                  stroke="#B4B6C5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                <path
                  d={conn.endCurve}
                  fill="none"
                  stroke="#B4B6C5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Start Half-Cycle Dot */}
                <path
                  d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                    A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
                  fill="#148D8A"
                />
                {/* End Half-Cycle Dot */}
                <path
                  d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                  fill={conn.dotColor}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </ConnectionContext.Provider>
  );
};

export default PostInterventionQCOutlet;

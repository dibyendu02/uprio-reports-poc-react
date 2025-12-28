import InDepthQcCard from "@/commons/components/InDepthQcCard/presentation/view/InDepthQcCard";
import { ImprovementVariant } from "@/commons/components/PostInterventionQCCard/PostInterventionQCCard.types";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import { useConnectionContext } from "@/commons/context/ConnectionContext";
import { categoryInterventions } from "@/dummyDataTwo";
import { Connection } from "@/types/Connection";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const InDepthQcOutlet: React.FC = () => {
  const location = useLocation();
  const { chapterId, categoryIndex } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inDepthQcCardRef = useRef<HTMLDivElement>(null);
  const isQuestionsRoute = location.pathname.includes("/questions");

  const {
    selectedPostInterventionQcRef,
    postInterventionQCRefs,
    selectedStatus,
  } = useConnectionContext();

  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const calculateConnections = () => {
    console.log("Container Ref:", containerRef.current);
    console.log("Selected QC Ref:", selectedPostInterventionQcRef?.current);
    console.log("InDepth Card Ref:", inDepthQcCardRef.current);

    if (
      !containerRef.current ||
      !selectedPostInterventionQcRef?.current ||
      !inDepthQcCardRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const selectedPostInterventionQcRect =
      selectedPostInterventionQcRef.current.getBoundingClientRect();
    const inDepthQcCardRect = inDepthQcCardRef.current.getBoundingClientRect();

    const newConnections: Connection[] = [];

    const startX = selectedPostInterventionQcRect.right - containerRect.left;
    let startY =
      selectedPostInterventionQcRect.top +
      selectedPostInterventionQcRect.height / 2 -
      containerRect.top;
    const endX = inDepthQcCardRect.left - containerRect.left;
    const endY =
      inDepthQcCardRect.top + inDepthQcCardRect.height / 2 - containerRect.top;

    const curveWidth = 40;
    const curveRadius = 30;
    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const minLineHeight = 40; // Ensure a minimum height for the line

    const isNearlyHorizontal = yDifference < minLineHeight;

    let startCurve, endCurve, line;

    if (isNearlyHorizontal) {
      startY = startY - selectedPostInterventionQcRect.height / 4;

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
      // evaluationId: 1,
      // dotColor: getDotColor(
      //   toImprovementVariant(selectedStatus || "Same as before")
      // ),
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
    if (postInterventionQCRefs?.current) {
      postInterventionQCRefs.current.forEach((ref) => {
        if (
          ref === selectedPostInterventionQcRef?.current &&
          selectedPostInterventionQcRef?.current
        ) {
          observer.observe(selectedPostInterventionQcRef.current);
        }
      });
    }

    window.addEventListener("scroll", calculateConnections);
    window.addEventListener("resize", calculateConnections);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnections);
      window.removeEventListener("resize", calculateConnections);
    };
  }, [
    postInterventionQCRefs,
    selectedPostInterventionQcRef?.current,
    categoryIndex,
  ]);

  const classKey = `class${chapterId?.replace("chap", "")}_1`;
  const interventions = categoryInterventions[classKey] || [];

  const selectedIntervention = interventions[Number(categoryIndex)];

  if (!selectedIntervention) {
    return null;
  }

  // Transform the intervention metrics into the format needed for InDepthQcCard
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

  const handleCardClick = () => {
    navigate(
      `/chapter/${chapterId}/intervention/details/category/${categoryIndex}/details/questions`
    );
  };

  const preIntervention = getInterventionData(
    selectedIntervention.preIntervention
  );
  const postIntervention = getInterventionData(
    selectedIntervention.postIntervention
  );

  // Determine status based on improvement
  const getStatus = () => {
    const prePercentage = preIntervention.answeredPercentage;
    const postPercentage = postIntervention.answeredPercentage;
    if (postPercentage > prePercentage) return "success";
    if (postPercentage < prePercentage) return "error";
    return "warning";
  };

  // Convert user-friendly improvementStatus to a variant used internally
  // e.g. "Improved" -> "improved"
  const toImprovementVariant = (status: string): ImprovementVariant => {
    const normalized = status.trim().toLowerCase();
    if (normalized === "improved") return "improved";
    if (normalized === "drop in performance") return "drop-in-performance";
    return "same-as-before";
  };

  const variant = toImprovementVariant(selectedStatus || "Same as before");

  const getHeaderTextColor = (variant: ImprovementVariant) => {
    switch (variant) {
      case "improved":
        return "semantic-success-800";
      case "same-as-before":
        return "accent-orange-900";
      default:
        return "semantic-error-800";
    }
  };

  const getHeaderBgColor = (variant: ImprovementVariant) => {
    switch (variant) {
      case "improved":
        return "from-[#B6E6A0] to-[#CEF1BF]";
      case "same-as-before":
        return "from-[#EDBE97] to-[#FBE2C6]";
      default:
        return "from-[#F4B6B6] to-[#FBDCDC]";
    }
  };

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

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div
        className={`flex ${
          isQuestionsRoute ? "w-[1084px]" : "w-full"
        } transition-all duration-300`}
      >
        <div
          className={`flex flex-col min-w-full md:min-w-fit md:max-w-[550px]`}
        >
          <SectionHeader
            text="In-Depth QC Improvement Status"
            backgroundColor={getHeaderBgColor(variant)}
            textColor={getHeaderTextColor(variant)}
          />

          <div className="space-y-4 w-[550px]" ref={inDepthQcCardRef}>
            <InDepthQcCard
              key={`${selectedIntervention.chapterId}-${categoryIndex}`}
              title={selectedIntervention.categoryTitle}
              preIntervention={preIntervention}
              postIntervention={postIntervention}
              status={getStatus()}
              variant={variant}
              className="bg-white hover:shadow-lg transition-shadow"
              isSelected={true}
              onClick={handleCardClick}
            />
          </div>
        </div>
      </div>

      {/* Connection Elements */}
      <div
        className="absolute inset-0 pointer-events-none "
        style={{ zIndex: 0 }}
      >
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
                fill={getDotColor(variant)}
              />
              {/* End Half-Cycle Dot */}
              <path
                d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                fill={getDotColor(variant)}
              />
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
    </div>
  );
};

export default InDepthQcOutlet;

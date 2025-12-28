import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categoryData } from "@/dummyData";
import CategoryCard from "@/commons/components/CategoryCard/presentation/view/CategoryCard";
import { Connection } from "@/types/Connection";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import { useConnectionContext } from "@/commons/context/ConnectionContext";

const CategoryOutlet: React.FC = () => {
  const { chapterId, categoryId } = useParams<{
    chapterId: string;
    categoryId?: string;
  }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const { selectedUnderstandingRef, underStandingRefs, selectedEvaluationId } =
    useConnectionContext();
  const categoryRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Get categories for the current chapter
  const categories = categoryData[chapterId || ""] || [];

  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const calculateConnections = () => {
    if (!containerRef.current || !selectedUnderstandingRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const underStandingRect =
      selectedUnderstandingRef.current.getBoundingClientRect();
    const newConnections: Connection[] = [];

    categoryRefs.current.forEach((categoryRef) => {
      if (!categoryRef) return;

      const categoryRect = categoryRef.getBoundingClientRect();

      // Updated coordinate calculations
      const startX = underStandingRect.right - containerRect.left;
      const startY =
        underStandingRect.top +
        underStandingRect.height / 2 -
        containerRect.top;
      const endX = categoryRect.left - containerRect.left;
      const endY =
        categoryRect.top + categoryRect.height / 2 - containerRect.top;

      const curveWidth = 40;
      const curveRadius = 30;
      const yDifference = Math.abs(endY - startY);
      const isDescending = endY > startY;
      const minLineHeight = 40; // Ensure a minimum height for the line

      const isNearlyHorizontal = yDifference < minLineHeight;

      let startCurve, endCurve, line;

      if (isNearlyHorizontal) {
        // For nearly horizontal connections, use a simple straight line with small curves
        startCurve = ``;

        endCurve = `
        M ${endX - curveWidth} ${endY}
        H ${endX}
      `;

        line = {
          top: startY - 1,
          left: startX + curveWidth - 1,
          height: 2, // Minimal height for visual consistency
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
        evaluationId: selectedEvaluationId ?? 1,
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
    if (underStandingRefs?.current) {
      underStandingRefs.current.forEach((ref) => {
        if (
          ref === selectedUnderstandingRef?.current &&
          selectedUnderstandingRef?.current
        ) {
          observer.observe(selectedUnderstandingRef.current);
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
  }, [underStandingRefs, selectedUnderstandingRef]);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/chapter/${chapterId}/understanding/category/${categoryId}`);
  };

  if (!categories) {
    return <div>No categories available for this chapter.</div>;
  }

  const getHeaderTextColor = (id: number) => {
    switch (id) {
      case 1:
        return "semantic-success-900"; // #3d8b25 from semantic-success-600
      case 2:
        return "accent-orange-950"; // #f29245 from accent-orange-400
      case 3:
        return "semantic-error-900"; // #cc3636 from semantic-error-600
      case 4:
        return "neutral-900"; // #6c6e8b from surface-500
      default:
        return "#000000";
    }
  };

  const getHeaderBgColor = (id: number) => {
    switch (id) {
      case 1:
        return "from-[#B6E6A0] to-[#CEF1BF]"; // #3d8b25 from semantic-success-600
      case 2:
        return "from-[#EDBE97] to-[#FBE2C6]"; // #f29245 from accent-orange-400
      case 3:
        return "from-[#F4B6B6] to-[#FBDCDC]"; // #cc3636 from semantic-error-600
      case 4:
        return "from-green-400 to-green-200"; // #6c6e8b from surface-500
      default:
        return "from-green-400 to-green-200";
    }
  };

  const getDotColor = (evaluationId: number) => {
    switch (evaluationId) {
      case 1:
        return "var(--semantic-success-600)"; // #3d8b25 from semantic-success-600
      case 2:
        return "var(--accent-orange-400)"; // #f29245 from accent-orange-400
      case 3:
        return "var(--semantic-error-600)"; // #cc3636 from semantic-error-600
      case 4:
        return "var(--neutral-500)"; // #6c6e8b from surface-500
      default:
        return "#000000";
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex ${
          categoryId ? "w-[950px]" : "w-full"
        } transition-all duration-300`}
      >
        <div className="flex flex-col ">
          <SectionHeader
            text="Question category level understanding"
            textColor={getHeaderTextColor(selectedEvaluationId ?? 1)}
            backgroundColor={getHeaderBgColor(selectedEvaluationId ?? 1)}
          />
          <div className={`flex flex-col gap-4 w-[400px] `}>
            {categories.map((category, idx) => (
              <div
                key={category.categoryId}
                ref={(el) => (categoryRefs.current[idx] = el)}
              >
                <CategoryCard
                  idx={idx}
                  category={category}
                  evaluationId={selectedEvaluationId}
                  onClick={() => handleCategoryClick(category.categoryId)}
                />
              </div>
            ))}
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
                fill={getDotColor(conn.evaluationId ?? 1)}
              />
              {/* End Half-Cycle Dot */}
              <path
                d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                fill={getDotColor(conn.evaluationId ?? 1)}
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

export default CategoryOutlet;

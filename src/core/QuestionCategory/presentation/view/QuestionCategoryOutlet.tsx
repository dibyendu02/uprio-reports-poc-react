import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import MobileQuestionCategoryCard from "@/commons/components/MobileQuestionCategoryCard/presentation/view/MobileQuestionCategoryCard";
import QuestionCategoryCard from "@/commons/components/QuestionCategoryCard/QuestionCategoryCard";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import {
  ConnectionContext,
  useConnectionContext,
} from "@/commons/context/ConnectionContext";
import {
  questionCategoryData,
  categoryData,
  evaluationsData,
} from "@/dummyData";
import { Connection } from "@/types/Connection";

const QuestionCategoryOutlet = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  // States
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Get classDetailRef from context
  const { classDetailRef } = useConnectionContext();

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const underStandingRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Connection calculation logic
  const calculateConnections = () => {
    if (!containerRef.current || !classDetailRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const classDetailRect = classDetailRef.current.getBoundingClientRect();
    const newConnections: Connection[] = [];

    underStandingRefs.current.forEach((underStandingRef, index) => {
      if (!underStandingRef) return;

      const categoryRect = underStandingRef.getBoundingClientRect();
      const evaluationId = evaluationsData[index].id;

      const startX = classDetailRect.right - containerRect.left;
      const startY = classDetailRect.top + 32 - containerRect.top;
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
        evaluationId,
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
    if (classDetailRef?.current) {
      observer.observe(classDetailRef.current);
    }

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      calculateConnections();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedCategory, classDetailRef]);

  // Event handlers
  const handleQuestionCategoryClick = (category: any, index: number) => {
    if (category.name !== "Categories not assessed in class") {
      setSelectedCategory(category);
      setSelectedIndex(index);
      navigate(`/chapter/${chapterId}/understanding/category`);
    }
  };

  const handleMobileClose = () => {
    setSelectedCategory(null);
    navigate(`/chapter/${chapterId}/understanding`);
  };

  // Utility functions
  const getDotColor = (evaluationId: number) => {
    switch (evaluationId) {
      case 1:
        return "var(--semantic-success-600)";
      case 2:
        return "var(--accent-orange-400)";
      case 3:
        return "var(--semantic-error-600)";
      case 4:
        return "var(--neutral-500)";
      default:
        return "#000000";
    }
  };

  const categoriesForChapter = questionCategoryData.filter((category) => {
    const numericChapterId = chapterId?.replace("chap", "");
    return category.chapterId === Number(numericChapterId);
  });

  // Create context value for understanding refs
  const understandingContextValue = {
    selectedUnderstandingRef:
      selectedIndex !== null
        ? { current: underStandingRefs.current[selectedIndex] }
        : null,
    underStandingRefs,
    selectedEvaluationId:
      selectedIndex !== null ? evaluationsData[selectedIndex].id : null,
  };

  return (
    <ConnectionContext.Provider value={understandingContextValue}>
      <div ref={containerRef} className="relative  w-full">
        <div className="flex gap-20">
          <div className="flex flex-col min-w-full md:min-w-fit">
            <SectionHeader
              text="Chapter level understanding"
              textColor="accent-purple-900"
              backgroundColor="from-[#D7BBF3] to-[#EAD7FD]"
            />
            <div className="space-y-4 md:w-[350px]">
              {categoriesForChapter.map((category, index) =>
                selectedCategory === category && isMobileView ? (
                  <div key={category.id}>
                    <MobileQuestionCategoryCard
                      questionCategory={category}
                      categories={categoryData[chapterId || ""] || []}
                      onClick={handleMobileClose}
                      className="shadow-md"
                    />
                  </div>
                ) : (
                  <div
                    key={category.id}
                    ref={(el) => (underStandingRefs.current[index] = el)}
                    onClick={() => handleQuestionCategoryClick(category, index)}
                  >
                    <QuestionCategoryCard
                      questionCategory={category}
                      className="hover:shadow-lg transition-shadow"
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="transition-opacity duration-300 hidden md:block">
            <Outlet />
          </div>
        </div>

        {/* Connection Elements */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 left-0"
            width={svgDimensions.width}
            height={svgDimensions.height}
            style={{ overflow: "visible" }}
          >
            {connections.map((conn, index) => (
              <g key={`curves-${index}`}>
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
                <path
                  d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                    A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
                  fill="#148D8A"
                />
                <path
                  d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                  fill={getDotColor(conn.evaluationId ?? 1)}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </ConnectionContext.Provider>
  );
};

export default QuestionCategoryOutlet;

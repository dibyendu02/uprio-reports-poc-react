import { useState, useEffect, useRef, forwardRef } from "react";
import { ChevronRight, Star } from "lucide-react";
import { UnderstandingLevelCard } from "./UnderstandingLevelCard";
import { useTopicConnection } from "./useUnderstandingConnection";
import BottomSheet from "../BottomSheet/presentation/view/BottomSheet";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";
import RevisionPlanButton from "./RevisionPlanButton";

export interface Topic {
  id: string;
  title: string;
  understanding: number;
  categories: number;
  stats?: {
    completed: number;
    total: number;
  };
}

export interface SubjectData {
  label: string;
  topics: Topic[];
}

export interface UnderstandingAndProgressCardProps {
  data: {
    [key: string]: SubjectData;
  };
  defaultSubject?: string;
  onSubjectChange?: (subject: string) => void;
  onTopicClick?: (topicId: string, subject: string) => void;
  onUnderstaningCardClick?: () => void;
  onClick?: () => void;
  setShowMobileFooter: (value: React.SetStateAction<boolean>) => void;
}

interface CategoryCounts {
  wellUnderstood: number;
  sillyMistakes: number;
  needsReinforcement: number;
  notAssessed: number;
}

interface ConnectionData {
  startCurve: string;
  endCurve: string;
  startDot: { x: number; y: number };
  endDot: { x: number; y: number };
  line: {
    top: number;
    left: number;
    height: number;
  };
}

interface TopicItemProps {
  topic: Topic;
  onClick: () => void;
  isSelected: boolean;
}

const TopicItem = forwardRef<HTMLDivElement, TopicItemProps>(
  ({ topic, onClick, isSelected }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`p-3 cursor-pointer border rounded-[8px] transition-colors relative
          ${
            isSelected
              ? "shadow-[0_2px_10px_0px_rgba(0,0,0,0.08)] border-neutral-100 before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-semantic-warning-400 before:rounded-r"
              : "border-neutral-100 hover:border-neutral-200"
          }`}
      >
        <div className="flex items-center justify-between mb-1">
          <span className="sh201">{topic.title}</span>
          <ChevronRight className="text-neutral-950" size={18} />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <div className="p302 text-neutral-600">
              Chapter level understanding:
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  className={`${
                    idx < topic.understanding
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="p301 text-neutral-300 mt-[2px]">
            {topic.categories} categories
          </div>
        </div>
      </div>
    );
  }
);

const UnderstandingAndProgressCard: React.FC<
  UnderstandingAndProgressCardProps
> = ({
  data,
  defaultSubject,
  onSubjectChange,
  onTopicClick,
  onUnderstaningCardClick,
  onClick,
  setShowMobileFooter,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(
    defaultSubject || Object.keys(data)[0]
  );
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<number>(-1);
  const cardRef = useRef<HTMLDivElement>(null);
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  useEffect(() => {
    if (data[selectedSubject]) {
      topicRefs.current = new Array(data[selectedSubject].topics.length).fill(
        null
      );
    }
  }, [selectedSubject, data]);

  const connection = useTopicConnection(
    topicRefs.current,
    selectedTopicIndex,
    cardRef,
    !!selectedTopic && !isMobile,
    containerRef
  ) as ConnectionData | null;

  useEffect(() => {
    if (defaultSubject && data[defaultSubject]) {
      setSelectedSubject(defaultSubject);
      setSelectedTopic(null);
      setSelectedTopicIndex(-1);
    }
  }, [defaultSubject]);

  const handleSubjectChange = (subject: string): void => {
    if (subject !== selectedSubject) {
      setSelectedTopic(null);
      setSelectedTopicIndex(-1);
      setSelectedSubject(subject);
      onSubjectChange?.(subject);
    }
  };

  const handleTopicClick = (topic: Topic, index: number): void => {
    if (topic.id === selectedTopic?.id) {
      setSelectedTopic(null);
      setSelectedTopicIndex(-1);
    } else {
      setSelectedTopic(topic);
      setSelectedTopicIndex(index);
      onTopicClick?.(topic.id, selectedSubject);
      setShowMobileFooter(false);
    }
  };

  const calculateCategoryCounts = (topic: Topic): CategoryCounts => ({
    wellUnderstood: Math.floor(topic.categories * 0.4),
    sillyMistakes: Math.floor(topic.categories * 0.3),
    needsReinforcement: Math.floor(topic.categories * 0.2),
    notAssessed: Math.floor(topic.categories * 0.1),
  });

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClick?.();
    }
  };

  const handleCloseUnderstanding = () => {
    setSelectedTopic(null);
    setSelectedTopicIndex(-1);
    setShowMobileFooter(true);
  };

  const renderUnderstandingCard = () => (
    <UnderstandingLevelCard
      onClick={onUnderstaningCardClick}
      categoryCounts={calculateCategoryCounts(selectedTopic!)}
      totalCategories={selectedTopic!.categories}
    />
  );

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`flex ${
        isMobile
          ? "flex-col"
          : "gap-[54px] border-[2px] border-semantic-warning-200 relative before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-semantic-warning-400 before:rounded-r"
      } items-start bg-white rounded-[8px] `}
    >
      <div
        onClick={handleContainerClick}
        className="w-full max-w-md bg-white rounded-[8px] p-4 flex flex-col gap-6"
      >
        <div className="border-[1.5px] border-neutral-100 rounded-[8px]">
          <div className="border-b">
            <div className="flex min-w-[340px]">
              {Object.entries(data).map(([key, subject]) => (
                <button
                  key={key}
                  onClick={() => handleSubjectChange(key)}
                  className={`px-6 py-3 relative text-sm font-medium 
                    ${
                      selectedSubject === key
                        ? "text-emerald-500"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {subject.label}
                  {selectedSubject === key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 max-h-[420px] overflow-y-auto">
            {data[selectedSubject] ? (
              <div className="flex flex-col gap-3">
                {data[selectedSubject].topics.map((topic, index) => (
                  <TopicItem
                    key={topic.id}
                    ref={(el) => (topicRefs.current[index] = el)}
                    topic={topic}
                    onClick={() => handleTopicClick(topic, index)}
                    isSelected={selectedTopic?.id === topic.id}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No data available for this subject
              </div>
            )}
          </div>
        </div>

        {!selectedTopic && !isMobile && (
          <div className="pt-0">
            <RevisionPlanButton onClick={onClick} className="w-full" />
          </div>
        )}
      </div>

      {/* Understanding Level Card - Desktop */}
      {!isMobile && selectedTopic && (
        <div className="flex flex-col gap-6">
          <div ref={cardRef} className="w-full">
            {renderUnderstandingCard()}
          </div>
          <div className="pr-4 pb-4">
            <RevisionPlanButton onClick={onClick} className="w-full" />
          </div>
        </div>
      )}

      {/* Understanding Level Card - Mobile BottomSheet */}
      {isMobile && (
        <BottomSheet
          isVisible={!!selectedTopic}
          onClose={handleCloseUnderstanding}
        >
          {selectedTopic && (
            <div className="p-4">{renderUnderstandingCard()}</div>
          )}
        </BottomSheet>
      )}

      {/* Connection lines */}
      {connection && selectedTopic && (
        <div className="absolute  left-[300px]  pointer-events-none">
          <svg
            className={`absolute top-0 right-[0]
          `}
            style={{ overflow: "visible" }}
            pointerEvents="none"
          >
            <path
              d={connection.startCurve}
              fill="none"
              stroke="#B4B6C5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d={connection.endCurve}
              fill="none"
              stroke="#B4B6C5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d={`M ${connection.startDot.x},${connection.startDot.y - 5} 
        A 5,5 0 1,1 ${connection.startDot.x},${connection.startDot.y + 5}`}
              fill="#10B981"
            />
            <path
              d={`M ${connection.endDot.x},${connection.endDot.y - 5} 
        A 5,5 0 1,0 ${connection.endDot.x},${connection.endDot.y + 5}`}
              fill="#10B981"
            />
            <line
              x1={connection.line.left + 1}
              y1={connection.line.top}
              x2={connection.line.left + 1}
              y2={connection.line.top + connection.line.height}
              stroke="#B4B6C5"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default UnderstandingAndProgressCard;

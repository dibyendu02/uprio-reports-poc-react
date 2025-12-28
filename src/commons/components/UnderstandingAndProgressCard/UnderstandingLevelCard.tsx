import React from "react";
import { ChevronRight, Star } from "lucide-react";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";

interface CategoryCounts {
  wellUnderstood: number;
  sillyMistakes: number;
  needsReinforcement: number;
  notAssessed: number;
}

interface UnderstandingLevelCardProps {
  // topic: Topic;
  categoryCounts: CategoryCounts;
  totalCategories: number;
  onClick?: () => void;
}

type CategoryStatus = "success" | "warning" | "error" | "neutral";

export interface Category {
  key: keyof CategoryCounts;
  title: string;
  stars: number;
  status: CategoryStatus;
}

const FIXED_CATEGORIES: Category[] = [
  {
    key: "wellUnderstood",
    title: "Well understood",
    stars: 4,
    status: "success",
  },
  {
    key: "sillyMistakes",
    title: "Understood but student makes silly mistakes",
    stars: 3,
    status: "warning",
  },
  {
    key: "needsReinforcement",
    title: "Requires further reinforcement",
    stars: 2,
    status: "error",
  },
  {
    key: "notAssessed",
    title: "Categories not assessed in class",
    stars: 0,
    status: "neutral",
  },
];

export const UnderstandingLevelCard: React.FC<UnderstandingLevelCardProps> = ({
  categoryCounts,
  totalCategories,
  onClick,
}) => {
  const isMobile = useMobileDetection();
  const getStatusStyles = (status: CategoryStatus): string => {
    const baseStyles = "px-2 py-0.5 rounded-full text-xs font-normal";

    switch (status) {
      case "success":
        return `${baseStyles} bg-green-100 text-green-800`;
      case "warning":
        return `${baseStyles} bg-orange-100 text-orange-900`;
      case "error":
        return `${baseStyles} bg-red-100 text-red-800`;
      default:
        return `${baseStyles} bg-gray-100 text-gray-900`;
    }
  };

  return (
    <div
      className={`bg-white rounded-xl m-4 ml-0 p-4 relative w-96 border-[1.5px] border-neutral-100 ${
        isMobile
          ? " "
          : "before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-semantic-warning-400 before:rounded-r"
      } `}
    >
      <div className="mb-3 flex justify-between items-center">
        <h2 className="sh201">Understanding Level</h2>
      </div>

      <div className="space-y-3">
        {FIXED_CATEGORIES.map((category) => (
          <div
            key={category.key}
            onClick={onClick}
            className="border border-gray-100 rounded-lg p-3 bg-white"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900 max-w-[180px] flex-1 pr-2">
                {category.title}
              </span>
              <div className="flex gap-2">
                <span className={getStatusStyles(category.status)}>
                  {categoryCounts[category.key] || 0}/{totalCategories}
                </span>
                <ChevronRight className="text-neutral-950" size={18} />
              </div>
            </div>
            {category.stars > 0 && (
              <div className="flex gap-1">
                {Array.from({ length: category.stars }).map((_, index) => (
                  <Star
                    key={index}
                    size={24}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnderstandingLevelCard;

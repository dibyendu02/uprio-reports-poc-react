import React, { useState } from "react";
import { Star } from "lucide-react";
import CategoryCard from "../CategoryCard/presentation/view/CategoryCard";
import { CategoryEntity } from "@/commons/domain/entities/CategoryEntity";
import { QuestionEntity } from "@/commons/domain/entities/QuestionEntity";
import { QuestionStepEntity } from "@/commons/domain/entities/QuestionStepEntity";
import { CATEGORY_CONFIG } from "@/commons/constants/category-config";
import CategoryDetailCard from "../CategoryDetailCardPopup/presentation/view/CategoryDetailCard";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import crossIcon from "@/assets/icons/cross-icon.svg";
import { QcLevelUnderstandingPopupProps } from "./QcLevelUnderstanding.types";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";

export const QcLevelUnderstandingPopup: React.FC<
  QcLevelUnderstandingPopupProps
> = ({ title, rating, categories, onClose }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryEntity | null>(null);
  const isMobile = useMobileDetection();

  // Dummy questions data - in real app, this would come from props or API
  const dummyQuestions = [
    new QuestionEntity(
      "q1",
      "math",
      "chap1",
      selectedCategory?.categoryId || "",
      "Solve for x: 2x + 3 = 7",
      [
        new QuestionStepEntity(1, "Correct", "Subtract 3 from both sides"),
        new QuestionStepEntity(2, "Correct", "Divide both sides by 2"),
      ],
      "Correct",
      [],
      []
    ),
    new QuestionEntity(
      "q2",
      "math",
      "chap1",
      selectedCategory?.categoryId || "",
      "Factor: x² + 5x + 6",
      [
        new QuestionStepEntity(1, "Incorrect", "Find factors that add to 5"),
        new QuestionStepEntity(2, "Partial", "Write as (x + 2)(x + 3)"),
      ],
      "Incorrect",
      [],
      []
    ),
  ];

  const handleCategoryClick = (category: CategoryEntity) => {
    setSelectedCategory(category);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div
      className={`flex shadow-md border bg-white border-neutral-100 rounded-xl ${
        selectedCategory && !isMobile ? "w-full" : "w-full md:w-1/2"
      }`}
    >
      {/* Main QC Understanding Popup */}
      <div
        className={`flex flex-col h-[calc(100vh-120px)] ${
          selectedCategory && !isMobile ? "w-[50%]" : "w-full"
        }`}
      >
        {/* Header */}
        <div
          className="relative flex items-center justify-between p-4"
          style={{ boxShadow: "0px 16px 32px -4px #0c0c0d0d" }}
        >
          <h3 className="sh102">Isha's QC Level Understanding</h3>
          {(!selectedCategory || isMobile) && (
            <button onClick={onClose}>
              <img src={crossIcon} alt="close popup" width={20} height={20} />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pt-3 pb-4 overflow-y-scroll h-[90%]">
          {/* Chapter Info */}
          <div className="mb-4">
            <h3 className="p302 text-neutral-300 mb-1">Chapter</h3>
            <h3 className="sh102 mb-3">{title}</h3>

            {/* Star Rating */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <h3 className="p302 text-neutral-700">
              {CATEGORY_CONFIG.find((category) => category.rating === rating)
                ?.title || "Unknown"}
            </h3>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div
                key={category.categoryId}
                onClick={() => handleCategoryClick(category)}
                className="cursor-pointer"
              >
                <CategoryCard
                  idx={index}
                  category={category}
                  evaluationId={1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Detail Card */}
      {isMobile ? (
        <BottomSheet
          isVisible={!!selectedCategory}
          onClose={handleCloseCategory}
        >
          {selectedCategory && (
            <CategoryDetailCard
              idx={selectedCategory.categoryId}
              questions={dummyQuestions}
              onClick={handleCloseCategory}
              selected={true}
            />
          )}
        </BottomSheet>
      ) : (
        selectedCategory && (
          <div className="w-[50%] rounded-r-xl border border-l border-neutral-100">
            <CategoryDetailCard
              idx={selectedCategory.categoryId}
              questions={dummyQuestions}
              onClick={handleCloseCategory}
              selected={true}
            />
          </div>
        )
      )}
    </div>
  );
};

export default QcLevelUnderstandingPopup;

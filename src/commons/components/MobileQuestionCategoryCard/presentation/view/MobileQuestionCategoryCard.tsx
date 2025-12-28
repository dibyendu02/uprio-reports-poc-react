import React from "react";
import { MobileQuestionCategoryCardProps } from "./MobileQuestionCategoryCard.types";
import styles from "./MobileQuestionCategoryCard.module.scss";
import classNames from "classnames";

import starIcon from "@/assets/icons/star-icon.svg";
import closeIcon from "@/assets/icons/cross-icon.svg";
import Tag from "@/commons/components/Tag/presentation/view/Tag";
import CategoryCard from "@/commons/components/CategoryCard/presentation/view/CategoryCard";
import { useNavigate, useParams } from "react-router-dom";

const MobileQuestionCategoryCard: React.FC<MobileQuestionCategoryCardProps> = ({
  questionCategory,
  categories,
  onClick,
  className,
}) => {
  const { chapterId } = useParams<{
    chapterId: string;
    categoryId?: string;
  }>();
  const classArray = className?.split(" ") || [];
  const navigate = useNavigate();

  // Map each class to its CSS module equivalent
  const moduleClasses = classArray.map((cls) => styles[cls]);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/chapter/${chapterId}/understanding/category/${categoryId}`);
  };

  const getStatusClass = () => {
    switch (questionCategory.id) {
      case 1:
        return styles["status-success"];
      case 2:
        return styles["status-orange"];
      case 3:
        return styles["status-error"];
      case 4:
        return styles["status-neutral"];
      default:
        return styles["status-success"];
    }
  };

  return (
    <div
      className={classNames(
        styles["mobile-question-category-card"],
        getStatusClass(),
        ...moduleClasses
      )}
    >
      <div className={styles["card-content"]}>
        <div className={styles["content-header"]}>
          <div className={styles["title"]}>
            <div className={styles["left-wrap"]}>
              <h2>{questionCategory.text}</h2>
            </div>
            <div className={styles["right-wrap"]}>
              <Tag
                text={
                  questionCategory.categoriesCount +
                  "/" +
                  questionCategory.totalCategoriesCount
                }
                className="success"
              />
              <img
                src={closeIcon}
                onClick={onClick}
                alt="close icon"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={styles["rating"]}>
            {Array.from({ length: questionCategory.rating || 0 }, (_, i) => (
              <img src={starIcon} width={24} height={24} alt="star" key={i} />
            ))}
          </div>

          <div className={styles["intervention"]}>
            <span>Intervention:</span>{" "}
            {questionCategory.interventionTypes &&
            questionCategory.interventionTypes.length > 0 ? (
              questionCategory.interventionTypes.map(
                (interventionType, index) => (
                  <Tag
                    text={interventionType}
                    key={index}
                    className={`bordered ${
                      interventionType.toLocaleLowerCase() === "practice"
                        ? "secondary"
                        : interventionType.toLocaleLowerCase() === "re-explain"
                        ? "primary"
                        : ""
                    }`}
                  />
                )
              )
            ) : (
              <Tag text="N/A" key={0} className="bordered" />
            )}
          </div>
        </div>

        {/* Render CategoryCard components */}
        <div className={styles["categories-list"]}>
          {categories &&
            categories.map((category, idx) => (
              <div className={styles["category-card"]} key={idx}>
                <CategoryCard
                  key={category.categoryId}
                  idx={idx}
                  category={category}
                  onClick={() => handleCategoryClick(category.categoryId)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileQuestionCategoryCard;

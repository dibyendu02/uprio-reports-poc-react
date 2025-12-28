import React from "react";
import { CategoryCardProps } from "./CategoryCard.types";
import styles from "./CategoryCard.module.scss";
import classNames from "classnames";

import redirectIcon from "@/assets/icons/redirect-icon.svg";
import bulletIcon from "@/assets/icons/bullet-icon.svg";
import Tag from "@/commons/components/Tag/presentation/view/Tag";

const CategoryCard: React.FC<CategoryCardProps> = ({
  idx,
  category,
  onClick,
  className,
  selected = false,
  evaluationId,
}) => {
  const getStatusClass = () => {
    switch (evaluationId) {
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
        styles["category-card"],
        className,
        getStatusClass(),
        {
          [styles.selected]: selected,
        }
      )}
      onClick={onClick}
    >
      <div className={styles["card-header"]}>
        <div className={styles["sub-title"]}>
          <h2>Category {idx + 1}</h2>
          <img src={redirectIcon} alt="redirect icon" width={20} height={20} />
        </div>

        <div className={styles["title"]}>
          <h3>{category.title}</h3>
        </div>
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["progress-wrap"]}>
          <img src={bulletIcon} alt="bullet icon" width={18} height={18} />
          <span>Questions answered correctly:</span>
          <Tag
            text={category.questionsAnswered + "/" + category.totalQuestions}
            className="success"
          />
          <span>
            (
            {(
              (category.questionsAnswered / category.totalQuestions) *
              100
            ).toFixed(0)}
            %)
          </span>
        </div>

        <div className={styles["progress-wrap"]}>
          <img src={bulletIcon} alt="bullet icon" width={18} height={18} />
          <span>Correct steps percentage:</span>
          <Tag
            text={category.correctSteps + "/" + category.totalSteps}
            className="success"
          />
          <span>
            ({((category.correctSteps / category.totalSteps) * 100).toFixed(0)}
            %)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

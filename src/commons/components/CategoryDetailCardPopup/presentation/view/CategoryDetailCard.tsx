import React from "react";
import { CategoryDetailCardProps } from "./CategoryDetailCard.types";
import styles from "./CategoryDetailCard.module.scss";
import classNames from "classnames";

import crossIcon from "@/assets/icons/cross-icon.svg";
import QuestionCard from "@/commons/components/QuestionCard/presentation/view/QuestionCard";

const CategoryDetailCard: React.FC<CategoryDetailCardProps> = ({
  idx,
  questions,
  onClick,
  className,
  selected = false,
}) => {
  return (
    <div
      className={classNames(styles["category-detail-card"], className, {
        [styles.selected]: selected,
      })}
    >
      <div className={styles["card-header"]}>
        <h3>In-depth step level evaluation</h3>
        <button onClick={onClick}>
          <img src={crossIcon} alt="close popup" width={20} height={20} />
        </button>
      </div>

      <div className={styles["card-content"]}>
        <div className={styles["title"]}>
          <h3>Category {idx}</h3>
        </div>

        <div className={styles["questions-wrap"]}>
          {questions.map((question, index) => (
            <QuestionCard
              className="question-card"
              key={index}
              idx={index}
              questionEntity={question}
              isSelected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailCard;

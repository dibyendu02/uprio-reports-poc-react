import { QuestionCategoryCardProps } from "./QuestionCategoryCard.types";
import styles from "./QuestionCategoryCard.module.scss";
import classNames from "classnames";
import Tag from "../Tag/presentation/view/Tag";

import starIcon from "@/assets/icons/star-icon.svg";
import redirectIcon from "@/assets/icons/redirect-icon.svg";

const QuestionCategoryCard: React.FC<QuestionCategoryCardProps> = ({
  questionCategory,
  onClick,
  className,
}) => {
  const classArray = className?.split(" ") || [];

  // Map each class to its CSS module equivalent
  const moduleClasses = classArray.map((cls) => styles[cls]);

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
        styles["question-category-card"],
        getStatusClass(),
        ...moduleClasses
      )}
      onClick={onClick}
    >
      <div className={styles["card-content"]}>
        <div className={styles["title"]}>
          <h2 className="max-w-[174px]">{questionCategory.text}</h2>
          <div className={styles["count-wrapper"]}>
            {questionCategory.categoriesCount &&
            questionCategory.totalCategoriesCount ? (
              <span className={styles["category-count"]}>
                <span className="font-bold">
                  {questionCategory.categoriesCount}
                </span>
                /{questionCategory.totalCategoriesCount}
              </span>
            ) : null}
            {questionCategory.id !== 4 ? (
              <img
                src={redirectIcon}
                alt="redirect icon"
                width={20}
                height={20}
              />
            ) : null}
          </div>
        </div>

        {questionCategory.rating && questionCategory.rating > 0 ? (
          <div className={styles["rating"]}>
            {Array.from({ length: questionCategory.rating }, (_, i) => (
              <img src={starIcon} width={24} height={24} alt="star" key={i} />
            ))}
          </div>
        ) : null}

        {questionCategory.interventionTypes &&
        questionCategory.interventionTypes.length > 0 ? (
          <div className={styles["intervention"]}>
            <span>Intervention:</span>{" "}
            {questionCategory.interventionTypes.map(
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
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuestionCategoryCard;

// PreInterventionCard.types.ts
interface CategoryCounts {
  wellUnderstood: number;
  sillyMistakes: number;
  needsReinforcement: number;
  notAssessed: number;
}

export interface PreInterventionCardProps {
  categoryCounts: CategoryCounts;
  totalCategories: number;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

// PreInterventionCard.tsx
import React from "react";
import classNames from "classnames";
import styles from "./PreInterventionCard.module.scss";
import starIcon from "@/assets/icons/star-icon.svg";
import redirectIcon from "@/assets/icons/redirect-icon.svg";

const FIXED_CATEGORIES = [
  {
    key: "wellUnderstood" as keyof CategoryCounts,
    title: "Well understood",
    rating: 5,
    status: "success",
  },
  {
    key: "sillyMistakes" as keyof CategoryCounts,
    title: "Understood but student makes silly mistakes",
    rating: 3,
    status: "warning",
  },
  {
    key: "needsReinforcement" as keyof CategoryCounts,
    title: "Requires further reinforcement",
    rating: 2,
    status: "error",
  },
  {
    key: "notAssessed" as keyof CategoryCounts,
    title: "Categories not assessed in class",
    rating: 0,
    status: "neutral",
  },
];

const PreInterventionCard: React.FC<PreInterventionCardProps> = ({
  categoryCounts,
  totalCategories,
  isSelected = false,
  onClick,
  className,
}) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "success":
        return styles["status-success"];
      case "warning":
        return styles["status-orange"];
      case "error":
        return styles["status-error"];
      case "neutral":
        return styles["status-neutral"];
      default:
        return styles["status-success"];
    }
  };

  const classArray = className?.split(" ") || [];
  const moduleClasses = classArray.map((cls) => styles[cls]);

  return (
    <div
      className={classNames(
        styles["pre-intervention-card"],
        { [styles["selected"]]: isSelected },
        ...moduleClasses
      )}
      onClick={onClick}
    >
      <div className={styles["card-content"]}>
        <div className={styles["title"]}>
          <div className={styles["count-wrapper"]}>
            <h2>Pre-Intervention</h2>
            <span className={styles.count}>({totalCategories} categories)</span>
          </div>
          <img src={redirectIcon} alt="redirect" width={20} height={20} />
        </div>

        <div className={styles["categories"]}>
          {FIXED_CATEGORIES.map((category) => (
            <div
              key={category.key}
              className={classNames(
                styles["category-item"],
                getStatusClass(category.status)
              )}
            >
              <div className={styles["category-content"]}>
                <div className={styles["category-header"]}>
                  <span className={styles["category-title"]}>
                    {category.title}
                  </span>
                  <span className={styles["category-count"]}>
                    <strong>{categoryCounts[category.key]}</strong>/
                    {totalCategories}
                  </span>
                </div>
                {category.rating > 0 && (
                  <div className={styles["rating"]}>
                    {Array.from({ length: category.rating }, (_, i) => (
                      <img
                        key={i}
                        src={starIcon}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreInterventionCard;

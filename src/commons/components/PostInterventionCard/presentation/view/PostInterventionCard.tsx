// PostInterventionCard.tsx
import React from "react";
import classNames from "classnames";
import styles from "./PostInterventionCard.module.scss";
import star from "@/assets/icons/star-icon.svg";
import RightArrow from "@/assets/icons/right-arrow.svg";
import { PostInterventionCardProps } from "./PostInterventionCard.types";

const CATEGORY_CONFIG = [
  {
    key: "wellUnderstood" as const,
    title: "Well understood",
    rating: 5,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
  {
    key: "sillyMistakes" as const,
    title: "Understood but student makes silly mistakes",
    rating: 3,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
  {
    key: "needsReinforcement" as const,
    title: "Requires further reinforcement",
    rating: 2,
    preClass: "bg-neutral-100",
    postClass: "bg-accent-orange-100 text-accent-orange-900",
  },
  {
    key: "notAssessed" as const,
    title: "Categories not assessed in class",
    rating: 0,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
];

const PostInterventionCard: React.FC<PostInterventionCardProps> = ({
  preInterventionCounts,
  postInterventionCounts,
  totalCategories,
  onClick,
  className,
  isSelected = true,
}) => {
  return (
    <div
      className={classNames(
        styles["post-intervention-card"],
        { [styles.selected]: isSelected },
        className
      )}
      onClick={onClick}
    >
      <div className={styles.header}>
        <p className={styles.title}>
          Post-Intervention{" "}
          <span className={styles["category-count"]}>
            ({totalCategories} categories)
          </span>
        </p>
        <img src={RightArrow} alt="Right Arrow" />
      </div>

      <div className={styles.content}>
        <div className={styles["table-header"]}>
          <div className={styles["header-content"]}>
            <span className={styles["column-title"]}>Pre-Intervention</span>
            <span className={styles["column-title"]}>Post-Intervention</span>
          </div>
        </div>

        {CATEGORY_CONFIG.map((category) => (
          <div key={category.key} className={styles["category-row"]}>
            <div className={styles["category-content"]}>
              <div className={styles["rating-section"]}>
                {category.rating > 0 && (
                  <div className={styles.stars}>
                    {Array.from({ length: category.rating }).map((_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt="Star"
                        className={styles.star}
                      />
                    ))}
                  </div>
                )}
                <p className={styles["category-title"]}>{category.title}</p>
              </div>

              <div className={styles["intervention-data"]}>
                <div className={styles["data-content"]}>
                  <div className={styles["pre-intervention"]}>
                    <p className={styles["mobile-label"]}>Pre-Intervention</p>
                    <div
                      className={classNames(
                        styles["count-wrapper"],
                        category.preClass
                      )}
                    >
                      <p className="text-xs">
                        <strong>{preInterventionCounts[category.key]}</strong>/
                        {totalCategories}
                      </p>
                    </div>
                  </div>
                  <div className={styles["post-intervention"]}>
                    <p className={styles["mobile-label"]}>Post-Intervention</p>
                    <div
                      className={classNames(
                        styles["count-badge"],
                        category.postClass
                      )}
                    >
                      <p className="text-xs">
                        <strong>{postInterventionCounts[category.key]}</strong>/
                        {totalCategories}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostInterventionCard;

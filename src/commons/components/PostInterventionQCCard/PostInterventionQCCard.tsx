import React from "react";
import classNames from "classnames";
import styles from "./PostInterventionQCCard.module.scss";
import {
  PostInterventionQCCardProps,
  ImprovementVariant,
} from "./PostInterventionQCCard.types";

// Example icon imports (replace with your actual paths)
import starIcon from "@/assets/icons/star-icon.svg";
import improvementUpIcon from "@/assets/icons/improvement-up-icon.svg";
import improvementDownIcon from "@/assets/icons/improvement-down-icon.svg";
import improvementNoneIcon from "@/assets/icons/improvement-same-icon.svg";
import redirectIcon from "@/assets/icons/redirect-icon.svg";
import Tag from "../Tag/presentation/view/Tag";
import InDepthQcCard from "../InDepthQcCard/presentation/view/InDepthQcCard";

const PostInterventionQCCard: React.FC<PostInterventionQCCardProps> = ({
  idx,
  isSelected = false,
  categoryTitle,
  preInterventionRating,
  postInterventionRating,
  improvementStatus,
  remarks,
  onClick,
  handleInternalCardClick,
  isInDepth = false,
  className,
  mobileViewData,
}) => {
  // Create arrays for the stars
  const preRatingArray = Array.from(
    { length: preInterventionRating },
    (_, i) => i
  );
  const postRatingArray = Array.from(
    { length: postInterventionRating },
    (_, i) => i
  );

  // Decide which icon we display for improvement
  const getImprovementIcon = (variant: ImprovementVariant) => {
    switch (variant) {
      case "improved":
        return improvementUpIcon;
      case "drop-in-performance":
        return improvementDownIcon;
      default:
        return improvementNoneIcon;
    }
  };

  // Decide which textual label to display for improvement
  // (You could also render improvementStatus directly, but this allows flexibility.)
  const getStatusLabel = (variant: ImprovementVariant): string => {
    switch (variant) {
      case "improved":
        return "Improved";
      case "drop-in-performance":
        return "Drop in performance";
      default:
        return "Same as before";
    }
  };

  const getTagColor = (variant: ImprovementVariant) => {
    switch (variant) {
      case "improved":
        return "secondary";
      case "same-as-before":
        return "accent-orange";
      default:
        return "error";
    }
  };

  // Convert user-friendly improvementStatus to a variant used internally
  // e.g. "Improved" -> "improved"
  const toImprovementVariant = (status: string): ImprovementVariant => {
    const normalized = status.trim().toLowerCase();
    if (normalized === "improved") return "improved";
    if (normalized === "drop in performance") return "drop-in-performance";
    return "same-as-before";
  };

  const variant = toImprovementVariant(improvementStatus);

  return (
    <div
      className={classNames(
        styles["post-intervention-qc-card"],
        {
          [styles["selected"]]: isSelected,
          [getTagColor(variant)]: isSelected,
        },
        styles[variant],
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      <div className={styles["card-header"]}>
        <div className={styles["card-title-container"]}>
          <label>Category {idx}</label>
          <img src={redirectIcon} alt="redirect icon" />
        </div>
        <h3 className={styles["category-title"]}>{categoryTitle}</h3>
      </div>

      {/* Content */}
      <div className={styles["card-content"]}>
        {/* Star rating row */}
        <div className={styles["stars-row"]}>
          <div className={styles["star-group"]}>
            <label>Pre-Intervention</label>
            <div className={styles["stars"]}>
              {preRatingArray.map((_, i) => (
                <img key={`pre-star-${i}`} src={starIcon} alt="Star" />
              ))}
            </div>
          </div>

          <div className={styles["star-group"]}>
            <label>Post-Intervention</label>
            <div className={styles["stars"]}>
              {postRatingArray.map((_, i) => (
                <img key={`post-star-${i}`} src={starIcon} alt="Star" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles["card-footer"]}>
        <div className={styles["improvement-row"]}>
          <label htmlFor="improvement-status">Improvement Status:</label>
          <Tag
            text={getStatusLabel(variant)}
            iconLeft={getImprovementIcon(variant)}
            className={classNames("bordered", getTagColor(variant))}
          />
        </div>

        {/* Remarks (optional) */}
        {remarks && (
          <div className={styles["remarks-row"]}>
            <span className={styles["remarks-label"]}>Remarks : </span>
            <span className={styles["remarks-text"]}>{remarks}</span>
          </div>
        )}
      </div>

      {isInDepth && mobileViewData && (
        <div className="mt-3 md:hidden">
          <InDepthQcCard
            mobile={true}
            title={mobileViewData.title}
            preIntervention={mobileViewData.preIntervention}
            postIntervention={mobileViewData.postIntervention}
            onClick={handleInternalCardClick}
          />
        </div>
      )}
    </div>
  );
};

export default PostInterventionQCCard;

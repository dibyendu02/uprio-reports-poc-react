import React from "react";
import styles from "./InDepthQcCard.module.scss";
import classNames from "classnames";
import redirectIcon from "@/assets/icons/redirect-icon.svg";
import { InDepthQcCardProps } from "./InDepthQcCard.types";

const InDepthQcCard: React.FC<InDepthQcCardProps> = ({
  title,
  preIntervention,
  postIntervention,
  mobile,
  onClick,
  isSelected = false,
  status = "success",
  variant = "same-as-before",
  className,
}) => {
  return (
    <div
      className={classNames(
        styles["qc-card"],
        styles[`status-${status}`],
        {
          [styles.selected]: isSelected,
          [styles.mobile]: mobile,
          [variant]: isSelected,
        },
        styles[variant],
        className
      )}
      onClick={onClick}
    >
      {/* Card Header */}
      <div className={styles["card-header"]}>
        <h1 className={styles.title}>
          {mobile ? "In-Depth QC Improvement Status" : title}
        </h1>

        <img
          src={redirectIcon}
          alt="redirect"
          className={styles["redirect-icon"]}
          width={20}
          height={20}
        />
      </div>

      {/* Pre-Intervention Section */}
      <div className={styles["intervention-section"]}>
        <h2 className={styles["section-title"]}>Pre-Intervention</h2>
        <div className={styles["metrics-grid"]}>
          <MetricItem
            value={preIntervention.questionsAsked}
            label="Questions asked"
            circleStyle="bg-neutral"
          />
          <MetricItem
            value={`${preIntervention.answeredCorrectly}`}
            percentage={preIntervention.answeredPercentage}
            label="Answered correctly"
            circleStyle="bg-orange"
          />
          <MetricItem
            value={`${preIntervention.correctSteps}/${preIntervention.totalSteps}`}
            percentage={preIntervention.correctStepsPercentage}
            label="Correct steps percentage"
            circleStyle="bg-pink"
          />
        </div>
      </div>

      {/* Post-Intervention Section */}
      <div className={styles["intervention-section"]}>
        <h2 className={styles["section-title"]}>Post-Intervention</h2>
        <div className={styles["metrics-grid"]}>
          <MetricItem
            value={postIntervention.questionsAsked}
            label="Questions asked"
            circleStyle="bg-neutral"
          />
          <MetricItem
            value={postIntervention.answeredCorrectly}
            percentage={postIntervention.answeredPercentage}
            label="Answered correctly"
            circleStyle="bg-success"
          />
          <MetricItem
            value={`${postIntervention.correctSteps}/${postIntervention.totalSteps}`}
            percentage={postIntervention.correctStepsPercentage}
            label="Correct steps percentage"
            circleStyle="bg-success"
          />
        </div>
      </div>
    </div>
  );
};

// Metric Item Component
const MetricItem: React.FC<{
  value: number | string;
  percentage?: number;
  label: string;
  circleStyle: string;
}> = ({ value, percentage, label, circleStyle }) => {
  return (
    <div className={styles["metric-item"]}>
      <div className={styles["metric-value-wrapper"]}>
        <div
          className={classNames(styles["metric-circle"], styles[circleStyle])}
        >
          <span className={styles["metric-value"]}>{value}</span>
        </div>
        {percentage !== undefined && (
          <span className={styles["percentage"]}>({percentage}%)</span>
        )}
      </div>
      <p className={styles["metric-label"]}>{label}</p>
    </div>
  );
};

export default InDepthQcCard;

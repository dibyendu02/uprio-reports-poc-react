import React from "react";
import crossIcon from "@/assets/icons/cross-icon.svg";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
import styles from "./PracticeSheetSubmissionPopup.module.scss";
import classNames from "classnames";
import Tag from "../Tag/presentation/view/Tag";
import presentIcon from "@/assets/icons/check-circle-icon.svg";
import absentIcon from "@/assets/icons/cancel-circle-icon.svg";

interface PracticeSheet {
  id: string;
  title: string;
  totalQuestions: number;
  attemptedQuestions: number;
  correctQuestions: number;
  isSubmitted: boolean;
}

interface PracticeSheetStatusProps {
  sheets: PracticeSheet[];
  onClose?: () => void;
}

const PracticeSheetCard: React.FC<PracticeSheet> = ({
  title,
  totalQuestions,
  attemptedQuestions,
  correctQuestions,
  isSubmitted,
}) => {
  const correctPercentage = Math.round(
    (correctQuestions / totalQuestions) * 100
  );

  return (
    <div className="border border-blue-100 rounded-xl p-3">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] p-[7px] rounded-[50%] border border-neutral-100">
            <img
              src={notebookIcon}
              alt="practice icon"
              className="w-full h-full"
            />
          </div>
          <span className="p203 w-[105px]">{title}</span>
        </div>
        {/* Use Tag component for the submission status */}
        {isSubmitted ? (
          <Tag
            iconLeft={presentIcon}
            text="Submitted"
            className="success" // Apply styles for success
          />
        ) : (
          <Tag
            iconLeft={absentIcon}
            text="Not Submitted"
            className="error" // Apply styles for error
          />
        )}
      </div>

      <div className="flex gap-4 mb-4">
        <MetricItem
          value={totalQuestions}
          label="Total Questions"
          circleStyle="bg-neutral"
        />
        <MetricItem
          value={attemptedQuestions}
          label="Attempted"
          circleStyle="bg-neutral"
        />
      </div>
      <div>
        <MetricItem
          value={correctQuestions}
          percentage={correctPercentage}
          label="Correct Questions"
          circleStyle="bg-success"
        />
      </div>
    </div>
  );
};

const PracticeSheetStatus: React.FC<PracticeSheetStatusProps> = ({
  sheets,
  onClose,
}) => {
  return (
    <div className="bg-white rounded-xl w-full max-w-2xl border border-blue-100">
      <div
        style={{ boxShadow: "0px 16px 32px -4px #0c0c0d0d" }}
        className="flex items-center justify-between p-4 border-b border-gray-100"
      >
        <h2 className="sh102">Practice Sheets Submission Status</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <img src={crossIcon} alt="close popup" width={20} height={20} />
        </button>
      </div>

      <div className="p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {sheets.map((sheet) => (
          <PracticeSheetCard key={sheet.id} {...sheet} />
        ))}
      </div>
    </div>
  );
};

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

export default PracticeSheetStatus;

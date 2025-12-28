import React from "react";
import styles from "./ChapterClassCard.module.scss";
import { ChapterClassCardProps } from "./ChapterClassCard.types";

import infoIcon from "@/assets/icons/info-icon.svg";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
import practiceIcon from "@/assets/icons/practice-sheets-icon.svg";
import presentIcon from "@/assets/icons/check-circle-icon.svg";
import absentIcon from "@/assets/icons/cancel-circle-icon.svg";

import classNames from "classnames";
import Tag from "@/commons/components/Tag/presentation/view/Tag";

const ChapterClassCard: React.FC<ChapterClassCardProps> = ({
  chapterClass,
  className,
}) => {
  const classArray = className?.split(" ") || [];

  // Map each class to its CSS module equivalent
  const moduleClasses = classArray.map((cls) => styles[cls]);

  return (
    <div
      className={classNames(
        styles["chapter-class-card"], // Base class
        ...moduleClasses // Spread the array of module classes
      )}
    >
      <div className={styles["card-header"]}>
        <div className={styles["sub-title"]}>
          <span className={styles["date"]}>{chapterClass.date}</span>
          <Tag
            text={chapterClass.attendance}
            iconLeft={
              chapterClass.attendance.toLocaleLowerCase() === "present"
                ? presentIcon
                : absentIcon
            }
            className={
              chapterClass.attendance.toLocaleLowerCase() === "present"
                ? "success"
                : "error"
            }
          />
        </div>

        <div className={styles["title"]}>
          <h3 className={styles.type}>
            {/* Capitalize the first letter of the first word only */}
            {chapterClass.type.split("_").join(" ").charAt(0).toUpperCase() +
              chapterClass.type
                .split("_")
                .join(" ")
                .slice(1)
                .toLocaleLowerCase()}
          </h3>
        </div>
      </div>

      <div className={styles["card-content"]}>
        <div className={styles["card-item"]}>
          <div className={styles["icon-wrap"]}>
            <img src={notebookIcon} alt="notebook icon" />
          </div>
          <span>Notebook evaluations:</span>
          <span className={styles["count"]}>
            {chapterClass.notebookEvaluations || "NA"}
          </span>
          <img src={infoIcon} alt="info icon" width={20} height={20} />
        </div>

        <div className={styles["card-item"]}>
          <div className={styles["icon-wrap"]}>
            <img src={practiceIcon} alt="practice icon" />
          </div>
          <span>Practice sheets:</span>
          <span
            className={classNames(
              styles["status"],
              styles[
                `${
                  chapterClass.practiceSheets?.status.toLocaleLowerCase() ===
                  "submitted"
                    ? "success"
                    : chapterClass.practiceSheets?.status.toLocaleLowerCase() ===
                      "not_submitted"
                    ? "error"
                    : ""
                }`
              ]
            )}
          >
            {/* Capitalize the first letter of the first word only */}
            {(chapterClass.practiceSheets &&
              chapterClass.practiceSheets.status
                .split("_")
                .join(" ")
                .charAt(0)
                .toUpperCase() +
                chapterClass.practiceSheets?.status
                  .split("_")
                  .join(" ")
                  .slice(1)
                  .toLocaleLowerCase()) ||
              "NA"}
          </span>
          <img src={infoIcon} alt="info icon" width={20} height={20} />
        </div>

        {/* Make the following div hidden if there are no practice sheets */}
        {chapterClass.practiceSheets &&
          chapterClass.practiceSheets.sheets &&
          chapterClass.practiceSheets.sheets.length > 0 && (
            <div className={styles["sheets-wrap"]}>
              {chapterClass.practiceSheets?.sheets?.map((sheet) => (
                <div key={sheet.sheetId} className={styles["sheet-item"]}>
                  <span className={styles["bullet"]}></span>
                  <span className={styles["sheet-name"]}>{sheet.name}</span>
                  <span className={styles["sheet-count"]}>
                    ({sheet.completed}/{sheet.total} attempted)
                  </span>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default ChapterClassCard;

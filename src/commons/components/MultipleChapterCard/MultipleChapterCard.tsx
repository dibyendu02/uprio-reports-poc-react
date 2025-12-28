import React from "react";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
import practiceIcon from "@/assets/icons/practice-sheets-icon.svg";
import classNames from "classnames";
import { MultipleChaptersCardProps } from "./MultipleChapterCard.types";
import styles from "./MultipleChapterCard.module.scss";
import redirectIcon from "@/assets/icons/redirect-icon.svg";

const MultipleChaptersCard: React.FC<MultipleChaptersCardProps> = ({
  subjects,
  className,
  isSelected = true,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.selected]: isSelected,
      })}
      onClick={onClick}
    >
      <div className="flex justify-between mb-4">
        <h1 className={styles.header}>Subject & Chapters</h1>
        <img src={redirectIcon} alt="redirect" width={18} height={18} />
      </div>

      <div className="flex flex-col gap-4">
        {Object.entries(subjects).map(([subjectName, chapters]) => (
          <div key={subjectName} className="flex flex-col gap-4">
            {/* Subject Title */}
            {/* <h2 className={styles["subject-title"]}>{subjectName}</h2> */}

            {/* Chapters for this subject */}
            {chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className={classNames(styles.chapter)}>
                <div className={styles["chapter-header"]}>
                  <div>
                    <h3 className={styles["chapter-title"]}>{chapter.title}</h3>
                  </div>
                </div>
                <div className={styles["topic-container"]}>
                  {/* First topic as Notebook Evaluations */}
                  {chapter.topics.length > 0 && (
                    <div className={styles["topic-row"]}>
                      <div className="flex items-center">
                        <div className={styles["icon-wrap"]}>
                          <img src={notebookIcon} alt="notebook icon" />
                        </div>
                        <span className={styles["topic-text"]}>
                          {chapter.topics[0]}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Remaining topics as Practice Sheets */}
                  {chapter.topics.slice(1).map((topic, topicIndex) => (
                    <div key={topicIndex} className={styles["topic-row"]}>
                      <div className="flex items-center">
                        <div className={styles["icon-wrap"]}>
                          <img src={practiceIcon} alt="practice icon" />
                        </div>
                        <span className={styles["topic-text"]}>{topic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChaptersCard;

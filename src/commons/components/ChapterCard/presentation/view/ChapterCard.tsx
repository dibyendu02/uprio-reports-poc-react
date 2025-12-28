import React, { useState, useEffect } from "react";
import styles from "./ChapterCard.module.scss";
import { ChapterCardProps } from "./ChapterCard.types";
import infoIcon from "@/assets/icons/info-icon.svg";
import redirectIcon from "@/assets/icons/redirect-icon.svg";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
import InfoCard from "@/commons/components/InfoCard/presentation/view/InfoCard";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import classNames from "classnames";
import { createPortal } from "react-dom";
import notebookImage from "@/assets/images/notebook-evaluation.png";
import practicesheetImage from "@/assets/images/practice-sheet.png";
import practiceIcon from "@/assets/icons/practice-sheets-icon.svg";

const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  isSelected = false,
  onClick,
  className,
}) => {
  const [infoContent, setInfoContent] = useState<{
    title: string;
    description: string;
    position?: { top: number; left: number };
    type: "notebook" | "practice";
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [cardPosition, setCardPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const classArray = className?.split(" ") || [];
  const moduleClasses = classArray.map((cls) => styles[cls]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInfoClick = (
    e: React.MouseEvent<HTMLImageElement>,
    title: string,
    description: string,
    type: "notebook" | "practice"
  ) => {
    e.stopPropagation();
    const rect = e.currentTarget
      .closest(`.${styles["chapter-card"]}`)
      ?.getBoundingClientRect();

    if (rect) {
      setCardPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }

    if (isMobile) {
      setInfoContent({ title, description, type });
      setBottomSheetVisible(true);
    } else {
      const targetRect = e.currentTarget.getBoundingClientRect();
      setInfoContent({
        title,
        description,
        position: {
          top: targetRect.top + 10,
          left: targetRect.left + 30,
        },
        type,
      });
    }
  };

  const handleInfoCardClose = () => {
    setInfoContent(null);
    setCardPosition(null);
  };

  const handleBottomSheetClose = () => {
    setBottomSheetVisible(false);
    setInfoContent(null);
  };

  const getImageForType = (type: "notebook" | "practice") => {
    return type === "notebook" ? notebookImage : practicesheetImage;
  };

  return (
    <>
      <div
        className={classNames(
          styles["chapter-card"],
          {
            [styles["selected"]]: isSelected,
            [styles["hover-active"]]: infoContent && !isMobile,
          },
          ...moduleClasses
        )}
        onClick={handleInfoCardClose}
      >
        <div className={styles["card-header"]} onClick={onClick}>
          <div className={styles["title"]}>
            <h2 className={styles.title}>{chapter.title}</h2>
            <img
              src={redirectIcon}
              alt="redirect icon"
              width={20}
              height={20}
            />
          </div>
          <p className={styles["sub-title"]}>{chapter.dateRange}</p>
        </div>

        <div className={styles["card-content"]}>
          <div className={styles["card-item"]}>
            <div className={styles["icon-wrap"]}>
              <img src={notebookIcon} alt="notebook icon" />
            </div>
            <span>Notebook evaluations:</span>
            <span className={styles["number"]}>
              {chapter.notebookEvaluations}
            </span>
            <img
              src={infoIcon}
              alt="info icon"
              width={20}
              height={20}
              onClick={(e) =>
                handleInfoClick(
                  e,
                  "What is notebook evaluation?",
                  "Notebook evaluation is a process where a teacher checks the work done by the students in their notebooks.",
                  "notebook"
                )
              }
            />
          </div>

          <div className={styles["card-item"]}>
            <div className={styles["icon-wrap"]}>
              <img src={practiceIcon} alt="practice icon" />
            </div>
            <span>Practice sheets:</span>
            <span className={styles["number"]}>{chapter.practiceSheets}</span>
            <img
              src={infoIcon}
              alt="info icon"
              width={20}
              height={20}
              onClick={(e) =>
                handleInfoClick(
                  e,
                  "What are practice sheets?",
                  "Practice sheets help students to improve their problem-solving skills by providing them with a set of problems that they need to solve.",
                  "practice"
                )
              }
            />
          </div>
        </div>

        {/* Cloned ChapterCard */}

        {/* InfoCard */}
        {infoContent &&
          !isMobile &&
          infoContent.position &&
          createPortal(
            <div className="fixed inset-0 z-[105]">
              <div
                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                onClick={handleInfoCardClose}
              />
              {cardPosition && (
                <div
                  className="fixed bg-white shadow-lg z-[110] rounded-lg"
                  style={{
                    top: cardPosition.top,
                    left: cardPosition.left,
                    width: cardPosition.width,
                    height: cardPosition.height,
                    borderRadius: 12,
                  }}
                  onClick={handleInfoCardClose}
                >
                  <div
                    className={classNames(
                      styles["chapter-card"],
                      {
                        [styles["selected"]]: isSelected,
                      },
                      ...moduleClasses
                    )}
                  >
                    <div className={styles["card-header"]}>
                      <div className={styles["title"]}>
                        <h2 className={styles.title}>{chapter.title}</h2>
                        <img
                          src={redirectIcon}
                          alt="redirect icon"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className={styles["sub-title"]}>{chapter.dateRange}</p>
                    </div>
                    <div className={styles["card-content"]}>
                      <div className={styles["card-item"]}>
                        <div className={styles["icon-wrap"]}>
                          <img src={notebookIcon} alt="notebook icon" />
                        </div>
                        <span>Notebook evaluations:</span>
                        <span className={styles["number"]}>
                          {chapter.notebookEvaluations}
                        </span>
                        <img
                          src={infoIcon}
                          alt="info icon"
                          width={20}
                          height={20}
                        />
                      </div>

                      <div className={styles["card-item"]}>
                        <div className={styles["icon-wrap"]}>
                          <img src={practiceIcon} alt="practice icon" />
                        </div>
                        <span>Practice sheets:</span>
                        <span className={styles["number"]}>
                          {chapter.practiceSheets}
                        </span>
                        <img
                          src={infoIcon}
                          alt="info icon"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="absolute z-[120]"
                style={{
                  top: infoContent.position.top,
                  left: infoContent.position.left,
                }}
              >
                <InfoCard
                  image={getImageForType(infoContent.type)}
                  title={infoContent.title}
                  description={infoContent.description}
                />
              </div>
            </div>,
            document.body
          )}
      </div>

      {/* BottomSheet for mobile display */}
      {infoContent && isMobile && (
        <BottomSheet
          isVisible={bottomSheetVisible}
          onClose={handleBottomSheetClose}
        >
          <div className={styles["bottom-sheet-content"]}>
            <InfoCard
              image={getImageForType(infoContent.type)}
              title={infoContent.title}
              description={infoContent.description}
            />
          </div>
        </BottomSheet>
      )}
    </>
  );
};

export default ChapterCard;

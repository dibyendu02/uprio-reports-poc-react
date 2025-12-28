import React, { useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import styles from "./QuestionCard.module.scss";

import { QuestionCardProps } from "./QuestionCard.types";

import checkCircleIcon from "@/assets/icons/check-circle-green-icon.svg";
import crossCircleIcon from "@/assets/icons/cross-circle-red-icon.svg";
import exclamationCircleIcon from "@/assets/icons/exclamation-circle-brown-icon.svg";
import notebookIcon from "@/assets/icons/notebook-icon.svg";
import Tag from "@/commons/components/Tag/presentation/view/Tag";
import NotebookImageGallery from "@/commons/components/NotebookImageGallery/presentation/view/NotebookImageGallery";

const QuestionCard: React.FC<QuestionCardProps> = ({
  idx,
  questionEntity,
  isSelected,
  className,
  onClick,
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const classArray = className?.split(" ") || [];
  const moduleClasses = classArray.map((cls) => styles[cls]);

  const openGallery = () => {
    if (questionEntity.notebookImages?.length) {
      setIsGalleryOpen(true);
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      <div
        className={classNames(
          styles["question-card"],
          { [styles["selected"]]: isSelected },
          ...moduleClasses
        )}
        onClick={onClick}
      >
        <div className={styles["card-header"]}>
          <div className={styles["sub-title"]}>
            <h3>Question {idx + 1}</h3>
            <Tag
              text={questionEntity.status}
              className={
                questionEntity.status === "Correct" ? "success" : "error"
              }
            />
          </div>

          <div className={styles["title"]}>
            <h2>{questionEntity.question}</h2>
          </div>
        </div>

        <div className={styles["card-content"]}>
          <div className={styles["title"]}>
            <h3>Steps Required</h3>
          </div>
          <div className={styles["steps"]}>
            {questionEntity.stepsRequired.map((stepEntity, index) => (
              <div className={styles["step"]} key={index}>
                <img
                  src={
                    stepEntity.status.toLowerCase() === "correct"
                      ? checkCircleIcon
                      : stepEntity.status.toLowerCase() === "incorrect"
                      ? crossCircleIcon
                      : exclamationCircleIcon
                  }
                  alt={stepEntity.status}
                />
                <span>{stepEntity.step}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={classNames(
            styles["card-footer"],
            !questionEntity.notebookImages?.length &&
              !questionEntity.interventionTypes?.length
              ? "hidden"
              : ""
          )}
        >
          {questionEntity.notebookImages &&
          questionEntity.notebookImages.length > 0 ? (
            <div
              className={classNames(
                styles["footer-item"],
                styles["notebook-image"]
              )}
              onClick={openGallery} // Open gallery on click
            >
              <img src={notebookIcon} alt="notebook-icon" />
              <label>
                <span>{questionEntity.notebookImages.length}+ </span>
                <span>View Notebook Image</span>
              </label>
            </div>
          ) : (
            <div className="hidden"></div>
          )}

          {questionEntity.interventionTypes &&
          questionEntity.interventionTypes.length > 0 ? (
            <div
              className={classNames(
                styles["footer-item"],
                styles["notebook-intervention"]
              )}
            >
              <label>Student will be Intervened by:</label>
              <div className={styles["interventions"]}>
                {questionEntity.interventionTypes.map((intervention, index) => (
                  <Tag
                    key={index}
                    text={intervention.type}
                    className="bordered secondary"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      </div>

      {isGalleryOpen &&
        createPortal(
          <div className={styles["gallery-modal"]}>
            <NotebookImageGallery
              notebookImages={questionEntity.notebookImages}
              className={styles["gallery"]}
              onClose={closeGallery} // Pass closeGallery as onClose
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default QuestionCard;

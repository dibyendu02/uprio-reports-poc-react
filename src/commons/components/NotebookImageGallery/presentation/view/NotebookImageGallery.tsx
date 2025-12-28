import React, { useState } from "react";
import { NotebookImageGalleryProps } from "./NotebookImageGallery.types";
import styles from "./NotebookImageGallery.module.scss";
import classNames from "classnames";

import redirectWhiteIcon from "@/assets/icons/redirect-white-icon.svg";
import crossIcon from "@/assets/icons/cross-icon.svg";

const NotebookImageGallery: React.FC<NotebookImageGalleryProps> = ({
  notebookImages,
  className,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < notebookImages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={classNames(styles["notebook-gallery-wrap"], className)}>
      <div className={styles["header"]}>
        <h4>Notebook Images</h4>
        <img
          src={crossIcon}
          alt="close popup"
          width={20}
          height={20}
          onClick={onClose}
          className={styles["close-icon"]}
        />
      </div>

      <div className={styles["carousel-wrap"]}>
        <div className={styles["carousel-images-wrap"]}>
          <div
            className={styles["carousel-images"]}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${notebookImages.length * 100}%`,
            }}
          >
            {notebookImages.map((image, idx) => (
              <div key={idx}>
                <img
                  src={image.imageUrl}
                  alt={image.title || `Notebook Page ${idx}`}
                  className={styles["notebook-image"]}
                />
              </div>
            ))}
          </div>

          <div className={styles["navigation-wrap"]}>
            <span
              onClick={handlePrev}
              className={classNames(styles["prev-button"], {
                [styles["disabled"]]: currentIndex === 0,
              })}
            >
              <img
                src={redirectWhiteIcon}
                alt="Previous"
                width={20}
                height={20}
              />
            </span>

            <span
              onClick={handleNext}
              className={classNames(styles["next-button"], {
                [styles["disabled"]]:
                  currentIndex === notebookImages.length - 1,
              })}
            >
              <img src={redirectWhiteIcon} alt="Next" width={20} height={20} />
            </span>
          </div>
        </div>

        <div className={styles["indicators"]}>
          {notebookImages.map((_, idx) => (
            <div
              key={idx}
              className={classNames(styles["dot"], {
                [styles["active"]]: idx === currentIndex,
              })}
              onClick={() => handleIndicatorClick(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotebookImageGallery;

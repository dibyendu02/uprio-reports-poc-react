import React, { useEffect, useRef, useState } from "react";
import styles from "./ClassDetailCard.module.scss";
import classNames from "classnames";
import { ClassDetailCardProps } from "./ClassDetailCard.types";
import ChapterClassCard from "@/commons/components/ChapterClassCard/Presentation/view/ChapterClassCard";

const ClassDetailCard: React.FC<ClassDetailCardProps> = ({
  chapterClasses,
  isSelected = true,
  onClick,
  className,
}) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const classArray = className?.split(" ") || [];
  const moduleClasses = classArray.map((cls) => styles[cls]);

  // Check for mobile screen on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (contentRef.current && chapterClasses.length > 0) {
      const wrappers = contentRef.current.querySelectorAll(
        `.${styles["card-wrapper"]}`
      );
      if (wrappers.length > 0) {
        const firstDot = wrappers[0].querySelector(`.${styles["dot"]}`);
        const lastDot = wrappers[wrappers.length - 1].querySelector(
          `.${styles["dot"]}`
        );

        if (firstDot && lastDot) {
          const firstDotRect = firstDot.getBoundingClientRect();
          const lastDotRect = lastDot.getBoundingClientRect();
          const height = lastDotRect.top - firstDotRect.top + 16; // Add padding for better visibility
          setLineHeight(height);
          setTimeout(() => setIsVisible(true), 100);
        }
      }
    } else {
      setLineHeight(0);
      setIsVisible(false);
    }
  }, [chapterClasses]);

  const toggleExpand = () => {
    if (contentRef.current && isMobile) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div
      className={classNames(
        styles["class-detail-card"],
        { [styles["selected"]]: isSelected },
        ...moduleClasses
      )}
      onClick={onClick}
    >
      <div className={styles["card-header"]}>
        <h2 className={styles["title"]}>Class Details</h2>
      </div>

      <div
        className={classNames(styles["card-content"], {
          [styles["has-line"]]: isVisible,
          [styles["expanded"]]: isExpanded,
        })}
        ref={contentRef}
        style={
          {
            "--line-height": `${lineHeight}px`,
          } as React.CSSProperties
        }
      >
        {chapterClasses.map((chapterClass) => (
          <div
            className={styles["card-wrapper"]}
            key={chapterClass.chapterClassId}
          >
            <div className={styles["dot"]}></div>
            <ChapterClassCard chapterClass={chapterClass} />
          </div>
        ))}
      </div>

      {/* View All Button - Only shown on mobile */}
      {isMobile && (
        <div className={styles["view-all-wrapper"]}>
          <button
            className={styles["view-all-button"]}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            {isExpanded ? "View less" : "View more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassDetailCard;

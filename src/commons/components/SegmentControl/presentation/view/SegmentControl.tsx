import React, { useState, useEffect, useRef } from "react";
import styles from "./SegmentControl.module.scss";
import { SegmentControlProps } from "./SegmentControl.types";
import classNames from "classnames";

const SegmentControl: React.FC<SegmentControlProps> = ({
  segments,
  initialSelectedIndex = 0,
  onSegmentChange,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const gap = 2; // Gap between buttons in pixels
  const padding = 2; // Padding in pixels

  useEffect(() => {
    if (onSegmentChange) {
      onSegmentChange(selectedIndex);
    }
  }, [selectedIndex, onSegmentChange]);

  // Calculate the button width and update on resize
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalGaps = (segments.length - 1) * gap;
        const totalPadding = padding * 2;
        const availableWidth = containerWidth - totalGaps - totalPadding;
        const calculatedButtonWidth = availableWidth / segments.length;
        setButtonWidth(calculatedButtonWidth);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [segments.length]);

  const classArray = className?.split(" ") || [];
  const moduleClasses = classArray.map((cls) => styles[cls]);

  // Always calculate translateX value for horizontal toggling
  const translateValue = selectedIndex * (buttonWidth + gap);

  return (
    <div
      ref={containerRef}
      className={classNames(styles["segment-control"], ...moduleClasses)}
    >
      {/* Active background */}
      <div
        className={styles["highlight"]}
        style={{
          width: `${buttonWidth}px`,
          transform: `translateX(${translateValue}px)`,
        }}
      />
      {segments.map((segment, index) => (
        <button
          key={index}
          className={classNames(styles["segment-button"], {
            [styles["active"]]: index === selectedIndex,
          })}
          onClick={() => setSelectedIndex(index)}
        >
          {segment}
        </button>
      ))}
    </div>
  );
};

export default SegmentControl;

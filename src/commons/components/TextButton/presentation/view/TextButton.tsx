// TextButton.tsx
import React from "react";
import styles from "./TextButton.module.scss";
import classNames from "classnames";
import { TextButtonProps } from "./TextButton.types";

const TextButton: React.FC<TextButtonProps> = ({
  text,
  iconUrl,
  iconPosition = "left",
  onClick,
  className,
}) => {
  // Ensure at least one of text or iconUrl is provided
  if (!text && !iconUrl) {
    throw new Error("TextButton must have either text or an icon.");
  }

  const classArray = className?.split(" ") || [];

  // Map each class to its CSS module equivalent
  const moduleClasses = classArray.map((cls) => styles[cls]);

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles["text-button"], // Base class
        ...moduleClasses // Spread the array of module classes
      )}
    >
      {/* Conditionally render the icon on the left */}
      {iconUrl && iconPosition === "left" && (
        <img
          src={iconUrl}
          alt="icon"
          className={classNames(styles["icon"], styles["icon-left"])}
        />
      )}
      {/* Conditionally render the text */}
      {text && <span className={styles["text"]}>{text}</span>}
      {/* Conditionally render the icon on the right */}
      {iconUrl && iconPosition === "right" && (
        <img
          src={iconUrl}
          alt="icon"
          className={classNames(styles["icon"], styles["icon-right"])}
        />
      )}
    </button>
  );
};

export default TextButton;

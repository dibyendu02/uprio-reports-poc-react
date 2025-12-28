import React from "react";
import styles from "./SolidButton.module.scss";
import { SolidButtonProps } from "./SolidButton.types";
import classNames from "classnames";

const SolidButton: React.FC<SolidButtonProps> = ({
  iconUrl,
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles["solid-button"], className)}
    >
      <img src={iconUrl} alt="icon" className={styles["icon"]} />
      {text && text.trim() !== "" && <span>{text}</span>}
    </button>
  );
};

export default SolidButton;

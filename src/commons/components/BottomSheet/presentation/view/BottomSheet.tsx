import React, { useEffect } from "react";
import styles from "./BottomSheet.module.scss";
import classNames from "classnames";

export interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  // Prevent body scroll when bottom sheet is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={classNames(styles.overlay, { [styles.visible]: isVisible })}
      onClick={onClose}
    >
      <div
        className={classNames(styles.bottomSheet, {
          [styles.visible]: isVisible,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.lineWrapper}>
          <div className={styles.line} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default BottomSheet;

import classNames from "classnames";
import styles from "./Tag.module.scss";
import { TagProps } from "./Tag.types";

const Tag: React.FC<TagProps> = ({ text, iconLeft, iconRight, className }) => {
  const classArray = className?.split(" ") || [];

  // Map each class to its CSS module equivalent
  const moduleClasses = classArray.map((cls) => styles[cls]);

  if (iconLeft) {
    moduleClasses.push(styles["has-img"]);
  }

  return (
    <div
      className={classNames(
        styles["tag"], // Base class
        ...moduleClasses // Spread the array of module classes
      )}
    >
      {iconLeft && <img src={iconLeft} alt="icon left" />}
      <span className={styles["text"]}>{text}</span>
      {iconRight && <img src={iconRight} alt="icon right" />}
    </div>
  );
};

export default Tag;

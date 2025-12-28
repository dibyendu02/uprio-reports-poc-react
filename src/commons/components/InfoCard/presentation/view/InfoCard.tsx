import React from "react";
import styles from "./InfoCard.module.scss";

interface InfoCardProps {
  image: string; // Image URL
  title: string; // Title text
  description: string; // Description text
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles["info-card"]}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt={title} className={styles["info-image"]} />
      </div>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

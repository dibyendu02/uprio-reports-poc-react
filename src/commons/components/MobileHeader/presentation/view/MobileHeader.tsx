import React from "react";
import styles from "./MobileHeader.module.scss";
import menuIcon from "@/assets/icons/hamburger-menu.svg";
import mobileLogo from "@/assets/images/mobile-logo.png";

const MobileHeader: React.FC = () => {
  return (
    <div className={styles["mobile-header"]}>
      <img src={menuIcon} alt="Menu Icon" className={styles["menu-icon"]} />
      <img src={mobileLogo} alt="Mobile Logo" className={styles["logo"]} />
    </div>
  );
};

export default MobileHeader;

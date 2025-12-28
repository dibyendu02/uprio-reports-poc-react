import classNames from "classnames";
import React from "react";
import styles from "./NavBar.module.scss";
import logoIcon from "@/assets/images/logo.png";

import homeIcon from "@/assets/icons/home-icon.svg";
import userIcon from "@/assets/icons/profile-icon.svg";
import reportIcon from "@/assets/icons/report-icon.svg";
import chartIcon from "@/assets/icons/chart-icon.svg";
import settingsIcon from "@/assets/icons/settings-icon.svg";
import helpIcon from "@/assets/icons/help-icon.svg";
import logoutIcon from "@/assets/icons/logout-icon.svg";

const NavBar: React.FC = () => {
  const mainItems = [
    {
      icon: homeIcon,
      label: "Home",
      isActive: false,
    },
    {
      icon: userIcon,
      label: "Profile",
      isActive: false,
    },
    {
      icon: reportIcon,
      label: "Reports",
      isActive: false,
    },
    {
      icon: chartIcon,
      label: "Analytics",
      isActive: false,
    },
  ];

  const settingsItem = {
    icon: settingsIcon,
    label: "Settings",
    isActive: false,
  };

  const bottomItems = [
    { icon: helpIcon, label: "Help", isActive: false },
    {
      icon: logoutIcon,
      label: "Logout",
      isActive: false,
    },
  ];

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["nav-top"]}>
        {/* Logo Section */}
        <div className={styles["logo-wrap"]}>
          <img src={logoIcon} alt="Logo" />
        </div>

        {/* Divider */}
        <div className={styles["nav-divider"]} />

        {/* Main Section */}
        <div className={styles["nav-section"]}>
          <div
            key={0}
            className={classNames(styles["nav-item"], styles["text"])}
          >
            Main
          </div>
          {mainItems.map((item, index) => (
            <div
              key={index + 1}
              className={classNames(
                styles["nav-item"],
                item.isActive && styles["active"]
              )}
              title={item.label}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={styles["nav-icon"]}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles["nav-divider"]} />

        {/* Settings Section */}
        <div className={styles["nav-section"]}>
          <div
            key={0}
            className={classNames(styles["nav-item"], styles["text"])}
          >
            Settings
          </div>
          <div
            className={classNames(styles["nav-item"])}
            title={settingsItem.label}
          >
            <img
              src={settingsItem.icon}
              alt={settingsItem.label}
              className={styles["nav-icon"]}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles["nav-bottom"]}>
        {bottomItems.map((item, index) => (
          <div
            key={index}
            className={classNames(styles["nav-item"])}
            title={item.label}
          >
            <img src={item.icon} alt={item.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

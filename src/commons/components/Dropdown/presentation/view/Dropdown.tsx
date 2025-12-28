import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";
import classNames from "classnames";
import { DropdownProps } from "./Dropdown.types";
import dropdownIcon from "@/assets/icons/dropdown-icon.svg";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  selectedOption,
  onSelect,
  disabledOptions = [],
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    if (!disabledOptions.includes(option)) {
      onSelect(option); // Trigger the parent's onSelect handler
      setIsOpen(false); // Close the dropdown after selection
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
      role="combobox"
      aria-expanded={isOpen}
    >
      {/* Dropdown Toggle */}
      <div
        className={styles["dropdown-toggle"]}
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
      >
        <span>{selectedOption || placeholder}</span>
        <img
          src={dropdownIcon}
          alt="Dropdown Icon"
          className={classNames(styles["dropdown-arrow"], {
            [styles["dropdown-arrow-open"]]: isOpen,
          })}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={classNames(styles["dropdown-menu"], {
          [styles["dropdown-menu-open"]]: isOpen,
        })}
        role="listbox"
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={classNames(styles["dropdown-item"], {
              [styles["dropdown-item-selected"]]: option === selectedOption,
              [styles["dropdown-item-disabled"]]:
                disabledOptions.includes(option),
            })}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={option === selectedOption}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

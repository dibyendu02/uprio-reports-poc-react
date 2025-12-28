import { OutlinedButtonProps } from "./OutlinedButton.types";
import RightArrow from "@/assets/icons/arrow-right.svg";

const OutlinedButton = ({
  children,
  disabled = false,
  onClick,
  className = "",
}: OutlinedButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${disabled ? "w-full" : "w-[45.5%]"}        
        py-[13.5px]
        px-6 
        rounded-[6px]
        border-[1.5px]
        flex 
        items-center 
        justify-center 
        gap-2 
        transition-colors
        sh201
        ${
          disabled
            ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white"
            : "border-secondary-600 text-secondary-600 "
        }
        ${className}
      `}
    >
      {children}
      <img
        src={RightArrow}
        alt="Right Arrow"
        className={`transition-transform ${
          disabled ? "filter grayscale opacity-50" : ""
        }`}
      />
    </button>
  );
};

export default OutlinedButton;

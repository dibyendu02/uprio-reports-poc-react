import RightArrow from "@/assets/icons/arrow-right.svg";

interface RevisionPlanButtonProps {
  className?: string;
  onClick?: () => void;
}

const RevisionPlanButton: React.FC<RevisionPlanButtonProps> = ({
  className = "",
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`py-3 px-4 bg-secondary-500 text-white rounded-lg flex gap-2 items-center justify-center hover:bg-secondary-400  ${className}`}
  >
    <h1 className="sh201">View PT 2 Revision Plan</h1>
    <img
      src={RightArrow}
      alt="Right arrow"
      className="w-5 h-5"
      style={{ filter: "brightness(0) invert(100)" }}
    />
  </button>
);

export default RevisionPlanButton;

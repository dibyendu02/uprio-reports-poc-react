import redirectIcon from "@/assets/icons/redirect-icon.svg";

interface ExaminationCardProps {
  title: string;
  date: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ExaminationCard = ({
  title,
  date,
  isSelected = false,
  onClick,
}: ExaminationCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-xl p-3 border-2 transition-all duration-200 cursor-pointer flex justify-between items-center
      ${
        isSelected
          ? "border-primary-300 shadow-lg"
          : "border-transparent hover:border-primary-100"
      }
      ${
        isSelected
          ? 'before:content-[""] before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-[-2px] before:w-1 before:bg-primary-700 before:rounded-r'
          : ""
      }
    `}
    >
      <div>
        <h3 className="sh201">{title}</h3>
        <p className="text-neutral-300 p302">{date}</p>
      </div>
      <div className="flex items-start h-full">
        <img src={redirectIcon} alt="icon" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ExaminationCard;

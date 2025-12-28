import React from "react";
import classNames from "classnames";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
// import practiceIcon from "@/assets/icons/practice-sheets-icon.svg";

interface ClassNotAttendedProps {
  date: string;
  type: string;
  topics: string[];
  className?: string;
  onClick?: () => void;
}

const ClassNotAttendedCard: React.FC<ClassNotAttendedProps> = ({
  date,
  type,
  topics,
  className,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "relative flex flex-col w-full p-3 bg-white rounded-xl  border border-neutral-100 cursor-pointer",

        className
      )}
      onClick={onClick}
    >
      {/* Date and class type */}
      <div className="mb-2">
        <div className="p302 text-neutral-300">{date}</div>
        <h3 className="p203 text-neutral-900">{type} Class</h3>
      </div>

      {/* Topics container */}
      <div className="flex flex-col gap-2 bg-neutral-50 rounded-lg p-3">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 p-2 rounded-full border border-neutral-100 mr-2">
                <img src={notebookIcon} alt="notebook icon" />
              </div>
              <span className="text-sm text-neutral-600">{topic}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassNotAttendedCard;

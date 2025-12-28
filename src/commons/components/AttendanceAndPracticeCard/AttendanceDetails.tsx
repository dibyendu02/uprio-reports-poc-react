import React from "react";
import { XIcon } from "lucide-react";
import RightArrow from "@/assets/icons/arrow-right.svg";
import {
  AttendanceDetailsItemProps,
  AttendanceDetailsProps,
} from "./AttendanceAndPracticeCard.types";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";
import OutlinedButton from "../OiutlinedButton/OutlinedButton";

const AttendanceDetailsItem: React.FC<AttendanceDetailsItemProps> = ({
  title,
  scheduled,
  attended,
  attendedPercentage,
}) => (
  <div className="mb-3 last:border-b-0 last:pb-0">
    {title !== "Teach classes" && <h3 className="p303 mb-3">{title}</h3>}
    <div className="flex justify-between border border-neutral-100 p-3 rounded-[6px] items-center gap-4">
      <div className="flex flex-col items-start gap-3 w-[48%]">
        <div className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-gray-900">{scheduled}</span>
        </div>
        <span className="p301">Classes scheduled</span>
      </div>
      <div className="h-12 w-[1px] bg-neutral-50"></div>
      <div className="flex flex-col items-start gap-3 w-[48%]">
        <div className="flex gap-1 items-center">
          <div
            className={`${
              attendedPercentage === 100
                ? "bg-green-50"
                : attendedPercentage >= 65
                ? "bg-orange-50"
                : "bg-gray-100"
            } w-6 h-6 rounded-full flex items-center justify-center`}
          >
            <span className="font-['Roboto'] font-bold text-xs leading-[16px] text-neutral-900">
              {attended}
            </span>
          </div>
          <span className="text-sm text-gray-500">({attendedPercentage}%)</span>
        </div>
        <div className="flex gap-1">
          <span className="p301">Classes attended</span>
        </div>
      </div>
    </div>
  </div>
);

const AttendanceDetails: React.FC<AttendanceDetailsProps> = ({
  onClose,
  data,
  practiceSheetClick,
}) => {
  const isMobile = useMobileDetection();
  return (
    <div
      className={`relative bg-white w-full rounded-[8px] border border-neutral-100 p-4 ${
        isMobile
          ? ""
          : "before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-secondary-400 before:rounded-r"
      } `}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="p303 mb-0">Teach classes</h2>
        {!isMobile && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XIcon size={20} />
          </button>
        )}
      </div>

      <div className="">
        {data.map((item, index) => (
          <AttendanceDetailsItem key={index} {...item} />
        ))}

        {isMobile ? (
          <OutlinedButton onClick={practiceSheetClick} className="w-full">
            Practice sheet submission status
          </OutlinedButton>
        ) : (
          <div
            onClick={practiceSheetClick}
            className="flex items-center gap-[9px] text-secondary-600 cursor-pointer py-[5.5px]"
          >
            <span className="sh201">Practice sheet submission status</span>
            <img src={RightArrow} alt="Right Arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceDetails;

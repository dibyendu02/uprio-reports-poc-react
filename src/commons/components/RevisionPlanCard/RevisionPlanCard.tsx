import React from "react";
import practiceIcon from "@/assets/icons/practice-sheets-icon.svg";
import evaluationIcon from "@/assets/icons/evaluation-icon.svg";
import mockDiscussionIcon from "@/assets/icons/mock-discussion-icon.svg";
import mockPaperIcon from "@/assets/icons/mock-paper-icon.svg";
import revisionIcon from "@/assets/icons/revision-icon.svg";

import { Book } from "lucide-react";
import classNames from "classnames";

interface RevisionPlan {
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  tags: string[];
}

interface RevisionTimelineCardProps {
  plans: RevisionPlan[];
  className?: string;
}

const getTagConfig = (
  tag: string
): { icon: React.ReactNode; className: string } => {
  const configs: {
    [key: string]: { icon: React.ReactNode; className: string };
  } = {
    revision: {
      icon: (
        <img
          src={revisionIcon}
          alt="practice icon"
          className="w-[18px] h-[18px]"
        />
      ),
      className: "bg-orange-50/50 text-orange-800",
    },
    evaluation: {
      icon: (
        <img
          src={evaluationIcon}
          alt="practice icon"
          className="w-[18px] h-[18px]"
        />
      ),
      className: "bg-blue-50/50 text-blue-800",
    },
    "mock paper": {
      icon: (
        <img
          src={mockPaperIcon}
          alt="practice icon"
          className="w-[18px] h-[18px]"
        />
      ),
      className: "bg-purple-100 text-purple-800",
    },
    "mock paper discussion": {
      icon: (
        <img
          src={mockDiscussionIcon}
          alt="practice icon"
          className="w-[18px] h-[18px]"
        />
      ),
      className: "bg-neutral-100 text-neutral-800",
    },
    "personal class": {
      icon: (
        <img
          src={practiceIcon}
          alt="practice icon"
          className="w-[18px] h-[18px]"
        />
      ),
      className: "bg-emerald-100 text-emerald-800",
    },
  };

  return (
    configs[tag.toLowerCase()] || {
      icon: <Book className="w-4 h-4" />,
      className: "bg-gray-100 text-gray-800",
    }
  );
};

const Tag: React.FC<{ text: string }> = ({ text }) => {
  const config = getTagConfig(text.toLowerCase());

  return (
    <span
      className={classNames(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full p303",
        config.className
      )}
    >
      {config.icon}
      {text}
    </span>
  );
};

const TimelineItem: React.FC<RevisionPlan> = ({
  date,
  title,
  startTime,
  endTime,
  tags,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="text-neutral-300 p302 pb-1.5">{formattedDate}</div>

      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-[32px] h-[32px] p-[7px] rounded-[50%] border-[1px] border-solid border-neutral-100 mr-[8px]">
              <img
                src={practiceIcon}
                alt="practice icon"
                className="w-[18px] h-[18px]"
              />
            </div>
            <h3 className="p203">{title}</h3>
          </div>

          <div className="flex flex-wrap gap-2 my-2">
            {tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} text={tag} />
            ))}
          </div>

          <p className="p302 text-neutral-600">
            {startTime} to {endTime}
          </p>
        </div>
      </div>
    </div>
  );
};

const RevisionTimelineCard: React.FC<RevisionTimelineCardProps> = ({
  plans,
  className,
}) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-xl relative  border-[2px] border-semantic-success-200 px-4 before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-semantic-success-500 before:rounded-r",
        className
      )}
    >
      {plans.map((plan, index) => (
        <TimelineItem key={index} {...plan} />
      ))}
    </div>
  );
};

export default RevisionTimelineCard;

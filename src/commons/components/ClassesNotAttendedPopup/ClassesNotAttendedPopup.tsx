import React from "react";
import { X } from "lucide-react";
import ClassNotAttendedCard from "./ClassNotAttendedCard";

// Types
interface ClassTopic {
  type: "evaluation" | "teach" | "intervention";
  topics: string[];
  date: string;
}

interface ClassesNotAttendedProps {
  classes: ClassTopic[];
  onClose?: () => void;
}

const ClassesNotAttended: React.FC<ClassesNotAttendedProps> = ({
  classes,
  onClose,
}) => {
  return (
    <div className="w-full max-h-[85vh] max-w-md bg-white rounded-lg shadow-lg flex flex-col">
      {/* Fixed Header */}
      <div
        style={{ boxShadow: "0px 16px 32px -4px #0c0c0d0d" }}
        className="flex items-center justify-between p-4 border-b border-neutral-100 flex-shrink-0"
      >
        <h1 className="sh102">Classes Not Attended</h1>
        {onClose && (
          <button onClick={onClose} className="p-1 rounded-full ">
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-4">
          {classes.map((classItem, index) => (
            <ClassNotAttendedCard
              key={index}
              date={classItem.date}
              type={
                classItem.type.charAt(0).toUpperCase() + classItem.type.slice(1)
              }
              topics={classItem.topics}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesNotAttended;

import React, { useState, useEffect, useRef } from "react";
import TopicCard from "./TopicCard";
import OutlinedButton from "../OiutlinedButton/OutlinedButton";
import redirectIcon from "@/assets/icons/redirect-icon.svg";
import AttendanceDetails from "./AttendanceDetails";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import { useTopicAttendanceConnection } from "./connectionLine";
import {
  AttendanceAndPracticeCardProps,
  Topic,
  AttendanceDetailsItemProps,
} from "./AttendanceAndPracticeCard.types";
import { useMobileDetection } from "@/core/Home/presentation/view/hooks/useMobileDetection";
import crossIcon from "@/assets/icons/cross-icon.svg";

const AttendanceAndPracticeCard: React.FC<AttendanceAndPracticeCardProps> = ({
  data,
  defaultSubject,
  studentName = "Student",
  onSubjectChange,
  onTopicClick,
  onClick,
  practiceSheetClick,
  classesScheduledClick,
  setShowMobileFooter,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>(
    defaultSubject || Object.keys(data)[0]
  );
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [showAttendanceDetails, setShowAttendanceDetails] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const topicContainerRef = useRef<HTMLDivElement>(null);
  const attendanceDetailsRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  const connection = useTopicAttendanceConnection(
    containerRef,
    topicContainerRef,
    attendanceDetailsRef,
    showAttendanceDetails && !isMobile
  );

  useEffect(() => {
    if (defaultSubject && data[defaultSubject]) {
      setSelectedSubject(defaultSubject);
    }
  }, [defaultSubject]);

  const handleSubjectChange = (subject: string): void => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setShowAttendanceDetails(false);
    onSubjectChange?.(subject);
  };

  const handleTopicClick = (topicId: number): void => {
    const topic = data[selectedSubject].topics.find((t) => t.id === topicId);
    if (topic) {
      setSelectedTopic(topic);
      setShowAttendanceDetails(true);
      onTopicClick?.(topicId, selectedSubject);
      setShowMobileFooter(false);
    }
  };

  const handleCloseAttendanceDetails = () => {
    setShowAttendanceDetails(false);
    setSelectedTopic(null);
    setShowMobileFooter(true);
  };

  const generateTopicAttendanceData = (
    topic: Topic | null
  ): AttendanceDetailsItemProps[] => {
    if (!topic) return [];

    return [
      {
        title: "Teach classes",
        scheduled: topic.attendance?.scheduled || 0,
        attended: topic.attendance?.attended || 0,
        attendedPercentage: topic.attendance
          ? Math.round(
              (topic.attendance.attended / topic.attendance.scheduled) * 100
            )
          : 0,
      },
      {
        title: "Evaluation classes",
        scheduled: topic.practice?.assigned || 0,
        attended: topic.practice?.submitted || 0,
        attendedPercentage: topic.practice
          ? Math.round(
              (topic.practice.submitted / topic.practice.assigned) * 100
            )
          : 0,
      },
      {
        title: "Intervention classes",
        scheduled: topic.attendance?.scheduled || 0,
        attended: topic.attendance?.attended || 0,
        attendedPercentage: topic.attendance
          ? Math.round(
              (topic.attendance.attended / topic.attendance.scheduled) * 100
            )
          : 0,
      },
      {
        title: "Practice Sheet",
        scheduled: topic.practice?.assigned || 0,
        attended: topic.practice?.submitted || 0,
        attendedPercentage: topic.practice
          ? Math.round(
              (topic.practice.submitted / topic.practice.assigned) * 100
            )
          : 0,
      },
    ];
  };

  const currentSubjectStats = data[selectedSubject]?.topics.reduce(
    (acc, topic) => {
      if (topic.attendance) {
        acc.totalScheduled += topic.attendance.scheduled;
        acc.totalAttended += topic.attendance.attended;
      }
      return acc;
    },
    { totalScheduled: 0, totalAttended: 0 }
  );

  const renderAttendanceDetails = () => (
    <AttendanceDetails
      data={generateTopicAttendanceData(selectedTopic)}
      onClose={handleCloseAttendanceDetails}
      practiceSheetClick={practiceSheetClick}
      classesScheduledClick={classesScheduledClick}
    />
  );

  return (
    <div
      className="bg-white w-full rounded-[12px] border-[2px] border-secondary-200 overflow-hidden mx-auto p-4  relative before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-secondary-400 before:rounded-r"
      ref={containerRef}
    >
      <div className="flex justify-between items-center mb-6" onClick={onClick}>
        <h2 className="sh201">Class attendance & practice sheet</h2>
        <img src={redirectIcon} alt="redirect icon" width={20} height={20} />
      </div>
      <div
        className={`flex ${
          isMobile ? "flex-col" : "gap-[82px]"
        } justify-between`}
      >
        <div
          ref={topicContainerRef}
          className={`border-[1.5px] h-full border-neutral-100 rounded-[8px] ${
            showAttendanceDetails && !isMobile ? "w-[350px]" : "w-full"
          }`}
        >
          <div className="border-b">
            <div className="flex">
              {Object.entries(data).map(([key, subjectData]) => (
                <button
                  key={key}
                  onClick={() => handleSubjectChange(key)}
                  className={`px-6 py-3 p203 relative
                    ${
                      selectedSubject === key
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {subjectData.label}
                  {selectedSubject === key && (
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-secondary-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[450px] overflow-y-auto p-4">
            {data[selectedSubject] ? (
              <div className="space-y-3">
                {data[selectedSubject].topics.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => handleTopicClick(topic.id)}
                    className="cursor-pointer"
                  >
                    <TopicCard
                      title={topic.title}
                      attendance={topic.attendance}
                      practice={topic.practice}
                      isSelected={selectedTopic?.id === topic.id}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No data available for this subject
              </div>
            )}
          </div>
        </div>

        {/* Desktop Attendance Details */}
        {!isMobile && showAttendanceDetails && selectedTopic && (
          <div ref={attendanceDetailsRef} className="w-[350px] overflow-y-auto">
            {renderAttendanceDetails()}
          </div>
        )}

        {/* Mobile Attendance Details in BottomSheet */}
        {isMobile && (
          <BottomSheet
            isVisible={showAttendanceDetails && !!selectedTopic}
            onClose={handleCloseAttendanceDetails}
          >
            <div
              style={{ boxShadow: "0px 16px 32px -4px #0c0c0d0d" }}
              className="flex items-center justify-between p-4 border-b border-gray-100"
            >
              <h2 className="sh102">{selectedTopic?.title}</h2>
              <button
                onClick={handleCloseAttendanceDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                <img src={crossIcon} alt="close popup" width={20} height={20} />
              </button>
            </div>
            {selectedTopic && renderAttendanceDetails()}
            {/* <div className="h-24"></div> */}
          </BottomSheet>
        )}

        {/* Connection lines - only for desktop */}
        {connection && showAttendanceDetails && !isMobile && (
          <div className="absolute left-[0] pointer-events-none">
            <svg
              className="absolute top-0 left-0"
              style={{ overflow: "visible" }}
              pointerEvents="none"
            >
              <path
                d={connection.startCurve}
                fill="none"
                stroke="#B4B6C5"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d={connection.endCurve}
                fill="none"
                stroke="#B4B6C5"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d={`M ${connection.startDot.x},${connection.startDot.y - 5} 
                   A 5,5 0 1,1 ${connection.startDot.x},${
                  connection.startDot.y + 5
                }`}
                fill="#10B981"
              />
              <path
                d={`M ${connection.endDot.x},${connection.endDot.y - 5} 
                   A 5,5 0 1,0 ${connection.endDot.x},${
                  connection.endDot.y + 5
                }`}
                fill="#10B981"
              />
              <line
                x1={connection.line.left + 1}
                y1={connection.line.top}
                x2={connection.line.left}
                y2={connection.line.top + connection.line.height}
                stroke="#B4B6C5"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
      </div>

      <div
        className={`pt-6 bg-white flex ${
          showAttendanceDetails && !isMobile ? "justify-end" : "justify-start"
        }`}
      >
        <OutlinedButton
          onClick={classesScheduledClick}
          disabled={!showAttendanceDetails && !isMobile}
          className={`${
            showAttendanceDetails && !isMobile ? "w-1/2" : "w-full"
          }`}
        >
          {currentSubjectStats.totalScheduled > 0
            ? `Classes Not Attended by ${studentName}`
            : `No Classes Scheduled for ${studentName}`}
        </OutlinedButton>
      </div>
    </div>
  );
};

export default AttendanceAndPracticeCard;

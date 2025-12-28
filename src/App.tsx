// import UnderstandingAndProgressCard from "./commons/components/UnderstandingAndProgressCard/UnderstandingAndProgressCard";
// import ExaminationCard from "./commons/components/ExaminationCard/ExaminationCard";
// import RevisionTimeline from "./commons/components/RevisionPlanCard/RevisionPlanCard";
// import RevisionTimelineCard from "./commons/components/RevisionPlanCard/RevisionPlanCard";

import ClassesNotAttended from "./commons/components/ClassesNotAttendedPopup/ClassesNotAttendedPopup";

// import PracticeSheetSubmissionCard from "./commons/components/PracticeSheetSubmissionPopup/PracticeSheetSubmissionCard";
// import PracticeSheetStatus from "./commons/components/PracticeSheetSubmissionPopup/PracticeSheetSubmissionPopup";

// // revision card

// const App = () => {
//   const revisionPlans = [
//     {
//       date: "2024-08-10",
//       title: "Cubes and cube roots",
//       startTime: "6:00 PM",
//       endTime: "7:30 PM",
//       tags: ["Revision", "Evaluation"],
//     },
//     {
//       date: "2024-08-10",
//       title: "Operations on algebraic expressions",
//       startTime: "6:00 PM",
//       endTime: "7:30 PM",
//       tags: ["Mock paper"],
//     },
//     {
//       date: "2024-08-10",
//       title: "Parallelograms",
//       startTime: "6:00 PM",
//       endTime: "7:30 PM",
//       tags: ["Mock paper discussion", "Revision"],
//     },
//     {
//       date: "2024-08-10",
//       title: "Mock paper",
//       startTime: "6:00 PM",
//       endTime: "7:30 PM",
//       tags: ["Personal class"],
//     },
//   ];

//   return (
//     <div className="w-full  p-6">
//       <div className="w-96 mx-auto">
//         <RevisionTimelineCard plans={revisionPlans} />
//       </div>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const sheets = [
//     {
//       id: "1",
//       title: "Cubes & Cube Roots PP 1",
//       totalQuestions: 13,
//       attemptedQuestions: 13,
//       correctQuestions: 7,
//       isSubmitted: true,
//     },
//     {
//       id: "2",
//       title: "Cubes & Cube Roots PP 2",
//       totalQuestions: 9,
//       attemptedQuestions: 5,
//       correctQuestions: 5,
//       isSubmitted: false,
//     },
//     {
//       id: "3",
//       title: "Cubes & Cube Roots PP 2",
//       totalQuestions: 9,
//       attemptedQuestions: 5,
//       correctQuestions: 5,
//       isSubmitted: false,
//     },
//   ];
//   return (
//     <div className="p-8 flex justify-center">
//       <div className="w-[22%] ">
//         <PracticeSheetStatus sheets={sheets} onClose={() => {}} />
//       </div>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const dummyClasses = [
    {
      date: "10 Aug, 2024",
      type: "evaluation" as const,
      topics: ["Cubes and cube roots", "Quadrilaterals"],
    },
    {
      date: "11 Aug, 2024",
      type: "teach" as const,
      topics: ["Quadrilaterals"],
    },
    {
      date: "24 Aug, 2024",
      type: "intervention" as const,
      topics: ["Cubes and cube roots"],
    },
    {
      date: "5 Sep, 2024",
      type: "intervention" as const,
      topics: ["Parallelograms"],
    },
  ];

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <ClassesNotAttended classes={dummyClasses} onClose={handleClose} />
    </div>
  );
};

export default App;

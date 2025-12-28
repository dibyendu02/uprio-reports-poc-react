import { FC, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom";

// Components
import ChapterCard from "@/commons/components/ChapterCard/presentation/view/ChapterCard";
import ClassDetailCard from "@/commons/components/ClassDetailCard/presentation/view/ClassDetailCard";
import Header from "@/commons/components/Header/presentation/view/Header";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import NavBar from "@/commons/components/NavBar/presentation/view/NavBar";
import CategoryDetailCard from "@/commons/components/CategoryDetailCardPopup/presentation/view/CategoryDetailCard";
import MobileHeader from "@/commons/components/MobileHeader/presentation/view/MobileHeader";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import { BackHeader } from "./components/BackHeader";
import { ConnectionLines } from "./components/ConnectionLines";

// Hooks
import { useChapterManagement } from "./hooks/useChapterManagement";
import { useConnectionCalculator } from "./hooks/useConnectionCalculator";
import { useMobileDetection } from "./hooks/useMobileDetection";
import { useScrollManagement } from "./hooks/useScrollManagement";

// Context

// Data
import { questions } from "@/dummyData";
import { chapters } from "@/dummyData";

// Types
import { HomePageProps } from "./Home.types";
import { useReport } from "@/commons/context/ReportContext";
import { categoryInterventions, getQuestionsByCategory } from "@/dummyDataTwo";
import {
  ConnectionContext,
  ConnectionContextType,
} from "@/commons/context/ConnectionContext";

import ExaminationCard from "@/commons/components/ExaminationCard/ExaminationCard";
import { reportThreeData } from "@/dummyDataThree";

const HomePage: FC<HomePageProps> = () => {
  // Router hooks
  const location = useLocation();
  const { chapterId, categoryId } = useParams();
  const navigate = useNavigate();

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedChapterRef = useRef<HTMLDivElement>(null);
  const classDetailRef = useRef<HTMLDivElement>(null);

  //context
  const { selectedReport } = useReport();

  // Route checks

  const isUnderstandingRoute = location.pathname.includes("/understanding");
  const isInterventionRoute = location.pathname.includes("/intervention");

  useEffect(() => {
    const isUnderstandingRoute = location.pathname.includes("/understanding");
    const isInterventionRoute = location.pathname.includes("/intervention");

    // Redirect based on report type
    if (selectedReport !== "Chapter Level QC Report" && isUnderstandingRoute) {
      navigate("/");
    } else if (
      selectedReport !== "Intervention Impact Report" &&
      isInterventionRoute
    ) {
      navigate("/");
    }

    // Update showBothColumns whenever selectedReport changes
    setShowBothColumns(selectedReport === "Chapter Level QC Report");
  }, [selectedReport, location.pathname, navigate]);

  // Custom hooks

  const isMobile = useMobileDetection();

  const { showPopup, setBottomSheetVisible, setShowPopup } =
    useScrollManagement({
      containerRef,
      isMobile,
      defaultConfig: {
        extraScrollSpace: 500,
        behavior: "smooth",
      },
    });

  useEffect(() => {
    const isQuestionRoute =
      location.pathname.includes("/details/questions") ||
      (location.pathname.includes("/understanding") && Boolean(categoryId));
    setShowPopup(isQuestionRoute);
  }, [location.pathname, categoryId]);

  // Header state and handlers
  const [showBothColumns, setShowBothColumns] = useState(
    selectedReport === "Chapter Level QC Report"
  );

  //custom hooks
  const { selectedChapter, filteredClasses, handleChapterSelect } =
    useChapterManagement(selectedReport);

  const { connections, svgDimensions } = useConnectionCalculator(
    containerRef,
    selectedChapterRef,
    classDetailRef,
    selectedChapter
  );

  const handleSegmentChange = () => {
    // console.log(segment);
  };

  // Update the handleReportSelect function in HomePage
  const handleReportSelect = (report: string) => {
    const shouldShowBothColumns = report === "Chapter Level QC Report";
    setShowBothColumns(shouldShowBothColumns);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const getQuestionsForCurrentRoute = () => {
    if (location.pathname.includes("/details/questions")) {
      // Get intervention questions
      const categoryIndex = location.pathname
        .split("/category/")[1]
        ?.split("/")[0];
      if (chapterId && categoryIndex) {
        const classKey = `class${chapterId.replace("chap", "")}_1`;
        const interventions = categoryInterventions[classKey] || [];
        const selectedIntervention = interventions[Number(categoryIndex)];

        if (selectedIntervention) {
          return getQuestionsByCategory(
            chapterId,
            selectedIntervention.categoryTitle
          );
        }
      }
      return [];
    } else {
      // Get chapter level QC questions
      return chapterId && categoryId
        ? questions.filter(
            (q) =>
              q.chapterId === chapterId.replace("chap", "") &&
              q.categoryId === categoryId
          )
        : [];
    }
  };

  const handleDownloadClick = () => {
    if (selectedReport) {
      alert(`Downloading ${selectedReport}`);
    } else {
      alert("Please select a report type before downloading.");
    }
  };

  // Class card click handler
  const handleClassCardClick = () => {
    if (selectedChapter && showBothColumns) {
      navigate(`/chapter/${selectedChapter.chapterId}/understanding`);
    }
  };

  // Category close handler
  const closeCategoryDetails = () => {
    setBottomSheetVisible(false);
    if (location.pathname.includes("/details/questions")) {
      // Remove the /questions part from intervention route
      const newPath = location.pathname.replace("/questions", "");
      navigate(newPath);
    } else {
      // Original chapter understanding route
      navigate(`/chapter/${chapterId}/understanding/category`);
    }
  };

  // Get questions based on current route
  const currentQuestions = getQuestionsForCurrentRoute();

  console.log("showBothColumns  ", showBothColumns);

  const shouldShowFirstColumn = () => {
    if (!isMobile) return true;
    return !(isUnderstandingRoute || isInterventionRoute);
  };

  const connectionContextValue = {
    chapterRef: selectedChapterRef,
    classDetailRef: classDetailRef,
  };

  // State for selected examination
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  // const examCardRef = useRef<HTMLDivElement>(null);
  const examCardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleExamSelect = (examTitle: string) => {
    setSelectedExam(examTitle);
    navigate(`/exam/${examTitle}`);
  };

  if (selectedReport === "Exam Status Report") {
    const connectionContextValue: ConnectionContextType = {
      examCardRefs,
      selectedExam,
    };

    return (
      <ConnectionContext.Provider value={connectionContextValue}>
        <div className="flex min-h-screen bg-dotted-pattern relative">
          <NavBar />

          <div className="flex-1 overflow-auto h-screen">
            <div className="relative md:pl-36 md:pr-4 pb-4">
              <MobileHeader />

              {!(isMobile && (isUnderstandingRoute || isInterventionRoute)) && (
                <Header
                  onSegmentChange={handleSegmentChange}
                  onReportSelect={handleReportSelect}
                  onDownloadClick={handleDownloadClick}
                  onColumnVisibilityChange={setShowBothColumns}
                />
              )}

              <div
                ref={containerRef}
                className="relative overflow-x-auto p-4 md:p-0"
              >
                <div
                  className="flex md:gap-20 relative z-0"
                  style={
                    isMobile ? { flexDirection: "column", gap: "24px" } : {}
                  }
                >
                  <div className="flex flex-col">
                    <SectionHeader
                      text="Examinations"
                      textColor="primary-950"
                      backgroundColor="from-[#8ECFF8] to-[#CBE9FC]"
                    />
                    <div className="w-72 flex flex-col gap-4">
                      {reportThreeData.map(
                        (exam: { title: string; date: string }) => (
                          <div
                            key={exam.title}
                            ref={(el) => {
                              examCardRefs.current[exam.title] = el;
                            }}
                          >
                            <ExaminationCard
                              title={exam.title}
                              date={exam.date}
                              isSelected={selectedExam === exam.title}
                              onClick={() => handleExamSelect(exam.title)}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ConnectionContext.Provider>
    );
  }

  return (
    <ConnectionContext.Provider value={connectionContextValue}>
      <div className="flex min-h-screen bg-dotted-pattern relative">
        <NavBar />

        <div className="flex-1 overflow-auto h-screen">
          <div className=" relative md:pl-36 md:pr-4 pb-4">
            <MobileHeader />

            {/* Header - Hide on mobile for understanding/intervention routes */}
            {!(isMobile && (isUnderstandingRoute || isInterventionRoute)) && (
              <Header
                onSegmentChange={handleSegmentChange}
                onReportSelect={handleReportSelect}
                onDownloadClick={handleDownloadClick}
                onColumnVisibilityChange={setShowBothColumns}
              />
            )}

            {/* Main Content */}
            <div
              ref={containerRef}
              className="relative overflow-x-auto p-4 md:p-0"
            >
              <div
                className="flex md:gap-20 relative z-0"
                style={isMobile ? { flexDirection: "column", gap: "24px" } : {}}
              >
                {/* First Column */}
                {shouldShowFirstColumn() && (
                  <div className="flex flex-col min-w-full md:min-w-fit">
                    {/* Section Header */}
                    <SectionHeader
                      text="What we have taught to Isha so far"
                      textColor="primary-950"
                      backgroundColor="from-[#8ECFF8] to-[#CBE9FC]"
                    />

                    <div className="flex flex-col md:flex-row gap-3 md:gap-20 relative w-full z-0">
                      {/* Chapter Cards */}
                      <div className="space-y-4 w-full md:w-[330px]">
                        {chapters.map((chapter) => (
                          <div
                            key={chapter.chapterId}
                            ref={
                              selectedChapter?.chapterId === chapter.chapterId
                                ? selectedChapterRef
                                : null
                            }
                          >
                            <ChapterCard
                              chapter={chapter}
                              isSelected={
                                selectedChapter?.chapterId === chapter.chapterId
                              }
                              className="hover:border-teal-500 transition-colors cursor-pointer"
                              onClick={() => handleChapterSelect(chapter)}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Mobile Chapter Header */}
                      {isUnderstandingRoute && isMobile && selectedChapter && (
                        <BackHeader title={selectedChapter.title} />
                      )}

                      {/* Class Details Card */}
                      {showBothColumns &&
                        (isUnderstandingRoute || !isMobile) && (
                          <div
                            ref={classDetailRef}
                            className={`w-full md:w-[400px] transition-opacity duration-300 ${
                              selectedChapter ? "opacity-100" : "opacity-0"
                            }`}
                            onClick={handleClassCardClick}
                          >
                            {selectedChapter && (
                              <ClassDetailCard
                                chapterClasses={filteredClasses}
                                className="bg-white rounded-lg cursor-pointer"
                              />
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                )}

                {/* Outlet for nested routes */}
                <div className="transition-opacity duration-300">
                  <Outlet />
                </div>
              </div>

              {/* Category Details */}
              {(showBothColumns || isInterventionRoute) && (
                <>
                  {isMobile ? (
                    <BottomSheet
                      isVisible={Boolean(
                        categoryId ||
                          location.pathname.includes("/details/questions")
                      )}
                      onClose={closeCategoryDetails}
                    >
                      <CategoryDetailCard
                        idx={
                          categoryId ||
                          location.pathname
                            .split("/category/")[1]
                            ?.split("/")[0]
                        }
                        questions={currentQuestions}
                        selected={true}
                        onClick={closeCategoryDetails}
                      />
                    </BottomSheet>
                  ) : (
                    <div
                      className={`fixed top-10 right-8 bg-white shadow-lg rounded-lg w-[25vw] z-50 overflow-y-auto
                        transition-all duration-300 transform
                        ${
                          showPopup
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                        }`}
                      style={{ marginTop: "64px" }}
                    >
                      {(categoryId ||
                        location.pathname.includes("/details/questions")) && (
                        <CategoryDetailCard
                          idx={
                            categoryId ||
                            location.pathname
                              .split("/category/")[1]
                              ?.split("/")[0]
                          }
                          questions={currentQuestions}
                          selected={true}
                          onClick={closeCategoryDetails}
                        />
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Connection Lines */}
              {showBothColumns && selectedChapter && (
                <ConnectionLines
                  connections={connections}
                  svgDimensions={svgDimensions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ConnectionContext.Provider>
  );
};

export default HomePage;

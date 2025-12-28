import { FC, useRef } from "react";
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";
import ChapterCard from "@/commons/components/ChapterCard/presentation/view/ChapterCard";
import ClassDetailCard from "@/commons/components/ClassDetailCard/presentation/view/ClassDetailCard";
import CategoryDetailCard from "@/commons/components/CategoryDetailCardPopup/presentation/view/CategoryDetailCard";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import { chapters, questions } from "@/dummyData";
import { ConnectionContext } from "@/commons/context/ConnectionContext";
import { useMobileDetection } from "../hooks/useMobileDetection";
import { useChapterManagement } from "../hooks/useChapterManagement";
import { useConnectionCalculator } from "../hooks/useConnectionCalculator";
import { useScrollManagement } from "../hooks/useScrollManagement";
import { BackHeader } from "./BackHeader";
import { ConnectionLines } from "./ConnectionLines";

interface ChapterLevelReportProps {
  showBothColumns: boolean;
}

const ChapterLevelReport: FC<ChapterLevelReportProps> = ({
  showBothColumns,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { chapterId, categoryId } = useParams();
  const isMobile = useMobileDetection();

  const containerRef = useRef<HTMLDivElement>(null);
  const selectedChapterRef = useRef<HTMLDivElement>(null);
  const classDetailRef = useRef<HTMLDivElement>(null);

  const isUnderstandingRoute = location.pathname.includes("/understanding");

  const { selectedChapter, filteredClasses, handleChapterSelect } =
    useChapterManagement("Chapter Level QC Report");

  const { connections, svgDimensions } = useConnectionCalculator(
    containerRef,
    selectedChapterRef,
    classDetailRef,
    selectedChapter
  );

  const { showPopup, setBottomSheetVisible } = useScrollManagement({
    containerRef,
    isMobile,
    defaultConfig: { extraScrollSpace: 500, behavior: "smooth" },
  });

  const handleClassCardClick = () => {
    if (selectedChapter && showBothColumns) {
      navigate(`/chapter/${selectedChapter.chapterId}/understanding`);
    }
  };

  const closeCategoryDetails = () => {
    setBottomSheetVisible(false);
    navigate(`/chapter/${chapterId}/understanding/category`);
  };

  const currentQuestions =
    chapterId && categoryId
      ? questions.filter(
          (q) =>
            q.chapterId === chapterId.replace("chap", "") &&
            q.categoryId === categoryId
        )
      : [];

  const connectionContextValue = {
    chapterRef: selectedChapterRef,
    classDetailRef: classDetailRef,
  };

  return (
    <ConnectionContext.Provider value={connectionContextValue}>
      <div ref={containerRef} className="relative overflow-x-auto p-4 md:p-0">
        <div className="flex md:gap-20 relative z-0 ">
          {!(isMobile && isUnderstandingRoute) && (
            <div className="flex flex-col min-w-full md:min-w-fit">
              <SectionHeader
                text="What we have taught to Isha so far"
                textColor="primary-950"
                backgroundColor="from-[#8ECFF8] to-[#CBE9FC]"
              />
              <div className="flex flex-col md:flex-row gap-3 md:gap-20 relative w-full z-0">
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

                {isUnderstandingRoute && isMobile && selectedChapter && (
                  <BackHeader title={selectedChapter.title} />
                )}

                {showBothColumns && (isUnderstandingRoute || !isMobile) && (
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
          <Outlet />
        </div>

        {showBothColumns && (
          <>
            {isMobile ? (
              <BottomSheet
                isVisible={Boolean(categoryId)}
                onClose={closeCategoryDetails}
              >
                <CategoryDetailCard
                  idx={
                    categoryId ||
                    location.pathname.split("/category/")[1]?.split("/")[0]
                  }
                  questions={currentQuestions}
                  selected={true}
                  onClick={closeCategoryDetails}
                />
              </BottomSheet>
            ) : (
              <div
                className={`fixed top-10 right-8 bg-white shadow-lg rounded-lg w-[25vw] z-50 overflow-y-auto
                  transition-all duration-300 transform ${
                    showPopup
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                style={{ marginTop: "64px" }}
              >
                {categoryId && (
                  <CategoryDetailCard
                    idx={categoryId}
                    questions={currentQuestions}
                    selected={true}
                    onClick={closeCategoryDetails}
                  />
                )}
              </div>
            )}
          </>
        )}

        {showBothColumns && selectedChapter && (
          <ConnectionLines
            connections={connections}
            svgDimensions={svgDimensions}
          />
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default ChapterLevelReport;

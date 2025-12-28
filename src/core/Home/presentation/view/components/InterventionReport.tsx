import { FC, useRef } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import CategoryDetailCard from "@/commons/components/CategoryDetailCardPopup/presentation/view/CategoryDetailCard";
import BottomSheet from "@/commons/components/BottomSheet/presentation/view/BottomSheet";
import ChapterCard from "@/commons/components/ChapterCard/presentation/view/ChapterCard";
import SectionHeader from "@/commons/components/SectionHeader/presentation/view/SectionHeader";

import { categoryInterventions, getQuestionsByCategory } from "@/dummyDataTwo";
import { chapters } from "@/dummyData";
import { useMobileDetection } from "../hooks/useMobileDetection";
import { useScrollManagement } from "../hooks/useScrollManagement";
import { useChapterManagement } from "../hooks/useChapterManagement";
import { ConnectionContext } from "@/commons/context/ConnectionContext";

const InterventionReport: FC = () => {
  const location = useLocation();
  const { chapterId } = useParams();
  const isMobile = useMobileDetection();
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedChapterRef = useRef<HTMLDivElement>(null);
  const classDetailRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isInterventionRoute = location.pathname.includes("/intervention");

  const { selectedChapter, handleChapterSelect } = useChapterManagement(
    "Intervention Impact Report"
  );

  const { showPopup, setBottomSheetVisible } = useScrollManagement({
    containerRef,
    isMobile,
    defaultConfig: { extraScrollSpace: 500, behavior: "smooth" },
  });

  const closeCategoryDetails = () => {
    setBottomSheetVisible(false);
    const newPath = location.pathname.replace("/questions", "");
    navigate(newPath);
  };

  const getQuestionsForIntervention = () => {
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
  };

  const currentQuestions = getQuestionsForIntervention();

  const connectionContextValue = {
    chapterRef: selectedChapterRef,
    classDetailRef: classDetailRef,
  };

  return (
    <ConnectionContext.Provider value={connectionContextValue}>
      <div ref={containerRef} className="relative overflow-x-auto p-4 md:p-0">
        <div className="flex md:gap-20 relative z-0">
          {!(isMobile && isInterventionRoute) && (
            <div className="flex flex-col min-w-full md:min-w-fit">
              <SectionHeader
                text="What we have taught to Isha so far"
                textColor="primary-950"
                backgroundColor="from-[#8ECFF8] to-[#CBE9FC]"
              />
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
            </div>
          )}
          <Outlet />
        </div>

        {isMobile ? (
          <BottomSheet
            isVisible={location.pathname.includes("/details/questions")}
            onClose={closeCategoryDetails}
          >
            <CategoryDetailCard
              idx={location.pathname.split("/category/")[1]?.split("/")[0]}
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
            {location.pathname.includes("/details/questions") && (
              <CategoryDetailCard
                idx={location.pathname.split("/category/")[1]?.split("/")[0]}
                questions={currentQuestions}
                selected={true}
                onClick={closeCategoryDetails}
              />
            )}
          </div>
        )}
      </div>
    </ConnectionContext.Provider>
  );
};

export default InterventionReport;

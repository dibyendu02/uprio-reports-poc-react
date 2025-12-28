import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChapterEntity } from "@/commons/domain/entities/ChapterEntity";
import { ChapterClassEntity } from "@/commons/domain/entities/ChapterClassEntity";
import { chapters, chapterClasses } from "@/dummyData";

export const useChapterManagement = (selectedReport: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedChapter, setSelectedChapter] = useState<ChapterEntity | null>(
    chapters[0]
  );
  const [filteredClasses, setFilteredClasses] = useState<ChapterClassEntity[]>(
    chapterClasses.filter((cls) => cls.chapterId === chapters[0].chapterId)
  );

  const handleChapterSelect = (chapter: ChapterEntity) => {
    setSelectedChapter(chapter);
    const relevantClasses = chapterClasses.filter(
      (cls) => cls.chapterId === chapter.chapterId
    );
    setFilteredClasses(relevantClasses);

    const isSmallScreen = window.innerWidth < 768;
    const isUnderstandingRoute = location.pathname.includes("/understanding");

    // Determine which route to navigate to based on report type
    if (selectedReport === "Intervention Impact Report") {
      // if (isSmallScreen) {
      //   navigate(`/chapter/${chapter.chapterId}/intervention`);
      // } else if (isUnderstandingRoute || isInterventionRoute) {
      //   navigate("/");
      // }

      navigate(`/chapter/${chapter.chapterId}/intervention`);
    } else {
      // Default behavior for other reports
      if (isSmallScreen) {
        navigate(`/chapter/${chapter.chapterId}/understanding`);
      } else if (isUnderstandingRoute) {
        navigate("/");
      }
    }
  };

  return {
    selectedChapter,
    filteredClasses,
    handleChapterSelect,
  };
};

import { useEffect, RefObject, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface ScrollConfig {
  extraScrollSpace: number;
  behavior: ScrollBehavior;
}

interface UseScrollManagementProps {
  containerRef: RefObject<HTMLDivElement>;
  isMobile: boolean;
  defaultConfig?: ScrollConfig;
}

export const useScrollManagement = ({
  containerRef,
  isMobile,
  defaultConfig = {
    extraScrollSpace: 300,
    behavior: "smooth",
  },
}: UseScrollManagementProps) => {
  const location = useLocation();
  const { categoryId } = useParams();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Enhanced route detection
  const isCategoryRoute = location.pathname.includes("/category/");
  const isQuestionsRoute = location.pathname.includes("/questions");
  const isInterventionDetailsRoute =
    location.pathname.includes("/details/category");

  const debugScroll = (reason: string) => {
    console.log("Scroll Debug:", {
      reason,
      pathname: location.pathname,
      isCategoryRoute,
      isQuestionsRoute,
      isInterventionDetailsRoute,
      containerWidth: containerRef.current?.scrollWidth,
      viewportWidth: containerRef.current?.clientWidth,
      categoryId,
    });
  };

  // Handle scroll for all routes
  useEffect(() => {
    if (!containerRef.current) return;

    const shouldScroll =
      isCategoryRoute || isInterventionDetailsRoute || isQuestionsRoute;

    if (shouldScroll) {
      debugScroll("Route changed");

      const container = containerRef.current;
      const scrollPosition =
        container.scrollWidth -
        container.clientWidth +
        defaultConfig.extraScrollSpace;

      // Immediate scroll
      container.scrollTo({
        left: scrollPosition,
        behavior: defaultConfig.behavior,
      });

      // Delayed scroll to handle dynamic content
      const timeoutId = setTimeout(() => {
        if (container) {
          debugScroll("Delayed scroll");
          container.scrollTo({
            left: scrollPosition,
            behavior: defaultConfig.behavior,
          });
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [
    location.pathname,
    categoryId,
    defaultConfig.extraScrollSpace,
    defaultConfig.behavior,
    isCategoryRoute,
    isInterventionDetailsRoute,
    isQuestionsRoute,
  ]);

  // Handle popup visibility
  useEffect(() => {
    const shouldShowPopup = categoryId || isQuestionsRoute;

    if (shouldShowPopup) {
      const timer = setTimeout(() => {
        debugScroll("Setting popup visible");
        setShowPopup(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [categoryId, isQuestionsRoute]);

  // Handle bottom sheet for mobile
  useEffect(() => {
    if (isMobile) {
      const shouldShowBottomSheet = !!categoryId || isQuestionsRoute;
      setBottomSheetVisible(shouldShowBottomSheet);
    }
  }, [categoryId, isMobile, isQuestionsRoute]);

  return {
    isBottomSheetVisible,
    showPopup,
    setBottomSheetVisible,
    setShowPopup,
  };
};

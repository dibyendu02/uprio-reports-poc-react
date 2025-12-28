import { useEffect, useState } from "react";

export const useTopicConnection = (
  topicRefs: (HTMLDivElement | null)[],
  selectedTopicIndex: number,
  cardRef: React.RefObject<HTMLDivElement>,
  isVisible: boolean,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const [connection, setConnection] = useState<any>(null);

  const calculateConnection = () => {
    if (
      !isVisible ||
      !cardRef.current ||
      selectedTopicIndex < 0 ||
      !topicRefs[selectedTopicIndex] ||
      !containerRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const topicRect = topicRefs[selectedTopicIndex].getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    const config = {
      curveWidth: 41.3,
      curveRadius: 30,
      minLineHeight: 20,
    };

    // Start from the center-right of the selected topic
    const startX = topicRect.right - containerRect.left;
    const startY = topicRect.top + topicRect.height / 2 - containerRect.top;

    // End at the left center of the understanding card
    const endX = cardRect.left - containerRect.left;
    let endY = cardRect.top + 200 - containerRect.top; // Keep this fixed for visual consistency

    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    if (isNearlyHorizontal) {
      endY = endY - 40;
    }

    const verticalDistance = Math.abs(endY - startY);
    const effectiveHeight = Math.max(
      verticalDistance - config.curveRadius * 2,
      0
    );

    const startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY},
          ${startX + config.curveWidth} ${
      startY + (isDescending ? config.curveRadius : -config.curveRadius)
    }
      `;

    const endCurve = `
        M ${endX - config.curveWidth} ${
      endY + (isDescending ? -config.curveRadius : config.curveRadius)
    }
        Q ${endX - config.curveWidth} ${endY},
          ${endX - config.curveWidth + config.curveRadius} ${endY}
        H ${endX}
      `;

    const line = {
      top: isDescending
        ? startY + config.curveRadius
        : endY + config.curveRadius,
      left: startX + config.curveWidth - 1,
      height: effectiveHeight,
    };

    setConnection({
      startCurve,
      endCurve,
      line,
      startDot: { x: startX, y: startY },
      endDot: { x: endX, y: endY },
    });
  };

  useEffect(() => {
    calculateConnection();

    const observer = new ResizeObserver(calculateConnection);
    if (topicRefs[selectedTopicIndex]) {
      observer.observe(topicRefs[selectedTopicIndex]);
    }
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    window.addEventListener("scroll", calculateConnection);
    window.addEventListener("resize", calculateConnection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnection);
      window.removeEventListener("resize", calculateConnection);
    };
  }, [isVisible, selectedTopicIndex, topicRefs, cardRef]);

  return connection;
};

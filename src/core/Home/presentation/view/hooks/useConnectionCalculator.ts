import { useState, useEffect, RefObject } from "react";
import { ChapterEntity } from "@/commons/domain/entities/ChapterEntity";
import { Connection } from "@/types/Connection";

export interface ConnectionConfig {
  curveWidth: number;
  curveRadius: number;
  minLineHeight: number;
}

export const useConnectionCalculator = (
  containerRef: RefObject<HTMLDivElement>,
  selectedChapterRef: RefObject<HTMLDivElement>,
  classDetailRef: RefObject<HTMLDivElement>,
  selectedChapter: ChapterEntity | null
) => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const calculateConnections = () => {
    if (!containerRef.current || !selectedChapterRef.current || !classDetailRef.current || !selectedChapter) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const chapterRect = selectedChapterRef.current.getBoundingClientRect();
    const classRect = classDetailRef.current.getBoundingClientRect();

    const config: ConnectionConfig = {
      curveWidth: 40,
      curveRadius: 30,
      minLineHeight: 10,
    };

    const startX = chapterRect.right - containerRect.left;
    const startY = chapterRect.top + chapterRect.height / 2 - containerRect.top;
    const endX = classRect.left - containerRect.left;
    const endY = classRect.top + classRect.height / 2 - containerRect.top;

    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    let startCurve: string;
    let endCurve: string;
    let line: { top: number; left: number; height: number };

    if (isNearlyHorizontal) {
      startCurve = `M ${startX} ${startY} H ${startX + config.curveWidth}`;
      endCurve = `M ${endX - config.curveWidth} ${endY} H ${endX}`;
      line = {
        top: startY - 1,
        left: startX + config.curveWidth - 1,
        height: 2,
      };
    } else {
      startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY},
          ${startX + config.curveWidth} ${startY + (isDescending ? config.curveRadius : -config.curveRadius)}
      `;

      endCurve = `
        M ${endX - config.curveWidth} ${endY + (isDescending ? -config.curveRadius : config.curveRadius)}
        Q ${endX - config.curveWidth} ${endY},
          ${endX - config.curveWidth + config.curveRadius} ${endY}
        H ${endX}
      `;

      line = {
        top: Math.min(startY, endY) + config.curveRadius,
        left: startX + config.curveWidth - 1,
        height: Math.abs(endY - startY) - 2 * config.curveRadius,
      };
    }

    const newConnections = [{
      startCurve,
      endCurve,
      line,
      startDot: { x: startX, y: startY },
      endDot: { x: endX, y: endY },
    }];

    setConnections(newConnections);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });
  };

  useEffect(() => {
    calculateConnections();

    const observer = new ResizeObserver(calculateConnections);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("scroll", calculateConnections);
    window.addEventListener("resize", calculateConnections);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnections);
      window.removeEventListener("resize", calculateConnections);
    };
  }, [selectedChapter]);

  return { connections, svgDimensions };
};
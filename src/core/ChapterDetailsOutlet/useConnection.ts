import { useState, useEffect, RefObject, useCallback } from "react";
import { Connection } from "@/types/Connection";

export interface ConnectionConfig {
  curveWidth: number;
  curveRadius: number;
  minLineHeight: number;
}

export const useConnections = (
  containerRef: RefObject<HTMLDivElement>,
  startElement: HTMLDivElement | null,
  endRef: RefObject<HTMLDivElement>,
  isEndElementMounted: boolean = true
) => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const calculateConnections = useCallback(() => {
    if (!containerRef.current || !startElement || !endRef.current || !isEndElementMounted) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const startRect = startElement.getBoundingClientRect();
    const endRect = endRef.current.getBoundingClientRect();

    if (startRect.width === 0 || endRect.width === 0) return;

    const config: ConnectionConfig = {
      curveWidth: 40,
      curveRadius: 30,
      minLineHeight: 30,
    };

    const startX = startRect.right - containerRect.left;
    const startY = startRect.top - 40;
    const endX = endRect.left - containerRect.left;
    const endY = endRect.top + endRect.height / 2 - containerRect.top;
    const isStartBelow = startY > endY;
    const isNearlyHorizontal = Math.abs(endY - startY) < config.minLineHeight;

    let connection: Connection;

    if (isNearlyHorizontal) {
      // Create straight horizontal line
      connection = {
        startCurve: `M ${startX} ${startY} L ${endX} ${startY}`,
        endCurve: '',
        line: { top: 0, left: 0, height: 0 },
        startDot: { x: startX, y: startY },
        endDot: { x: endX, y: startY }
      };
    } else {
      // Create curved line for vertical connections
      const verticalDistance = Math.abs(endY - startY);
      const effectiveHeight = Math.max(verticalDistance - config.curveRadius * 2, 0);

      const startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY},
          ${startX + config.curveWidth} ${startY + (isStartBelow ? -config.curveRadius : config.curveRadius)}
      `;

      const endCurve = `
        M ${endX - config.curveWidth} ${endY + (isStartBelow ? config.curveRadius : -config.curveRadius)}
        Q ${endX - config.curveWidth} ${endY},
          ${endX - config.curveWidth + config.curveRadius} ${endY}
        H ${endX}
      `;

      connection = {
        startCurve,
        endCurve,
        line: {
          top: Math.min(
            startY + (isStartBelow ? -config.curveRadius : config.curveRadius),
            endY + (isStartBelow ? config.curveRadius : -config.curveRadius)
          ),
          left: startX + config.curveWidth - 1,
          height: effectiveHeight
        },
        startDot: { x: startX, y: startY },
        endDot: { x: endX, y: endY }
      };
    }

    setConnections([connection]);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height
    });
  }, [containerRef, startElement, endRef, isEndElementMounted]);

  useEffect(() => {
    calculateConnections();

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(calculateConnections);
    });

    if (containerRef.current) observer.observe(containerRef.current);
    if (startElement) observer.observe(startElement);
    if (endRef.current) observer.observe(endRef.current);

    let scrollTimeout: NodeJS.Timeout;
    let resizeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(calculateConnections);
      }, 16);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(calculateConnections);
      }, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateConnections]);

  return { connections, svgDimensions };
};
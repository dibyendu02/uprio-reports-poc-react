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

    // Check if elements are actually visible in the DOM
    if (startRect.width === 0 || endRect.width === 0) {
      return;
    }

    const config: ConnectionConfig = {
      curveWidth: 40,
      curveRadius: 30,
      minLineHeight: 30,
    };

    // Calculate positions relative to container
    const startX = startRect.right - containerRect.left;
    const startY = startRect.top + startRect.height / 2 - containerRect.top;
    const endX = endRect.left - containerRect.left;
    let endY = endRect.top + endRect.height / 2 - containerRect.top;
    const originalEndY = endY; // Store original endY for line positioning

    const yDifference = Math.abs(endY - startY);
    const isStartBelow = startY > originalEndY; // Check against original endY
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    // For nearly horizontal cases, adjust the end point upward
    if (isNearlyHorizontal) {
      endY = endY - 100; // Move end point up to create an arc
    }

    let startCurve: string;
    let endCurve: string;
    let line: { top: number; left: number; height: number };

    // Calculate vertical connection with direction awareness
    const verticalDistance = Math.abs(endY - startY);
    const effectiveHeight = Math.max(verticalDistance - config.curveRadius * 2, 0);

    // For start curve, move up if start is below or nearly horizontal
    startCurve = `
      M ${startX} ${startY}
      H ${startX + config.curveWidth - config.curveRadius}
      Q ${startX + config.curveWidth} ${startY},
        ${startX + config.curveWidth} ${startY + (isStartBelow || isNearlyHorizontal ? -config.curveRadius : config.curveRadius)}
    `;

    // For end curve, approach from below if start is above, from above if start is below or nearly horizontal
    endCurve = `
      M ${endX - config.curveWidth} ${endY + (isStartBelow || isNearlyHorizontal ? config.curveRadius : -config.curveRadius)}
      Q ${endX - config.curveWidth} ${endY},
        ${endX - config.curveWidth + config.curveRadius} ${endY}
      H ${endX}
    `;

    // Line positioning depends on curve direction and whether points are nearly horizontal
    line = {
      top: Math.min(
        startY + (isStartBelow || isNearlyHorizontal ? -config.curveRadius : config.curveRadius),
        endY + (isStartBelow || isNearlyHorizontal ? config.curveRadius : -config.curveRadius)
      ),
      left: startX + config.curveWidth - 1,
      height: effectiveHeight,
    };

    const newConnections = [
      {
        startCurve,
        endCurve,
        line,
        startDot: { x: startX, y: startY },
        endDot: { x: endX, y: endY },
      },
    ];

    setConnections(newConnections);
    setSvgDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });
  }, [containerRef, startElement, endRef, isEndElementMounted]);

  useEffect(() => {
    // Initial calculation
    calculateConnections();

    // Set up ResizeObserver
    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(calculateConnections);
    });

    // Observe elements
    if (containerRef.current) observer.observe(containerRef.current);
    if (startElement) observer.observe(startElement);
    if (endRef.current) observer.observe(endRef.current);

    // Set up event listeners with debouncing
    let scrollTimeout: NodeJS.Timeout;
    let resizeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        window.requestAnimationFrame(calculateConnections);
      }, 16); // ~60fps
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.requestAnimationFrame(calculateConnections);
      }, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup
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
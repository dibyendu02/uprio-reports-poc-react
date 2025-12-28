import { RefObject, useEffect, useState } from "react";

interface Connection {
  startCurve: string;
  endCurve: string;
  line: {
    top: number;
    left: number;
    height: number;
  };
  startDot: { x: number; y: number };
  endDot: { x: number; y: number };
}

export const useTopicAttendanceConnection = (
  containerRef: RefObject<HTMLDivElement>,
  topicRef: RefObject<HTMLDivElement>,
  attendanceRef: RefObject<HTMLDivElement>,
  isVisible: boolean
) => {
  const [connection, setConnection] = useState<Connection | null>(null);

  const calculateConnection = () => {
    if (
      !isVisible ||
      !topicRef.current ||
      !attendanceRef.current ||
      !containerRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const topicRect = topicRef.current.getBoundingClientRect();
    const attendanceRect = attendanceRef.current.getBoundingClientRect();

    // Configuration for connection curves
    const config = {
      curveWidth: 41.3, // Horizontal spacing for the curve
      curveRadius: 30, // Radius for the curve
      minLineHeight: 10, // Minimum height for the line
    };

    // Calculate the connection points
    const startX = topicRect.right - containerRect.left;
    const startY = topicRect.top - containerRect.top;
    const endX = attendanceRect.left - containerRect.left;
    const endY = attendanceRect.top + 160 - containerRect.top;

    // Calculate path data
    const yDifference = Math.abs(endY - startY);
    const isDescending = endY > startY;
    const isNearlyHorizontal = yDifference < config.minLineHeight;

    let startCurve: string;
    let endCurve: string;
    let line: { top: number; left: number; height: number };

    if (isNearlyHorizontal) {
      // Handle nearly horizontal connections
      startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY},
          ${startX + config.curveWidth} ${startY}
      `;

      endCurve = `
        M ${endX - config.curveWidth} ${endY}
        H ${endX}
      `;

      line = {
        top: startY - 1,
        left: startX + config.curveWidth - 1,
        height: 2,
      };
    } else {
      // Handle curved connections
      const verticalDistance = Math.abs(endY - startY);
      const effectiveHeight = Math.max(
        verticalDistance - config.curveRadius * 2,
        0
      );

      startCurve = `
        M ${startX} ${startY}
        H ${startX + config.curveWidth - config.curveRadius}
        Q ${startX + config.curveWidth} ${startY},
          ${startX + config.curveWidth} ${
        startY + (isDescending ? config.curveRadius : -config.curveRadius)
      }
      `;

      endCurve = `
        M ${endX - config.curveWidth} ${
        endY + (isDescending ? -config.curveRadius : config.curveRadius)
      }
        Q ${endX - config.curveWidth} ${endY},
          ${endX - config.curveWidth + config.curveRadius} ${endY}
        H ${endX}
      `;

      line = {
        top: isDescending
          ? startY + config.curveRadius
          : endY + config.curveRadius,
        left: startX + config.curveWidth - 1,
        height: effectiveHeight,
      };
    }

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
    if (topicRef.current) {
      observer.observe(topicRef.current);
    }

    window.addEventListener("scroll", calculateConnection);
    window.addEventListener("resize", calculateConnection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", calculateConnection);
      window.removeEventListener("resize", calculateConnection);
    };
  }, [isVisible, topicRef.current, attendanceRef.current]);

  return connection;
};

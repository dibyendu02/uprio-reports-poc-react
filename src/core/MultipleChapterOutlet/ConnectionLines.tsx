import React, { useMemo } from "react";
import { Connection } from "@/types/Connection";

interface ConnectionLinesProps {
  connections: Connection[];
  svgDimensions: {
    width: number;
    height: number;
  };
}

export const ConnectionLines: React.FC<ConnectionLinesProps> = ({
  connections,
  svgDimensions,
}) => {
  // Memoize the path calculations to prevent unnecessary re-renders
  const connectionElements = useMemo(() => {
    return connections.map((conn, index) => (
      <g key={`curves-${index}`}>
        {/* Start curve with animation */}
        {conn.startCurve && (
          <path
            d={conn.startCurve}
            fill="none"
            stroke="#B4B6C5"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        )}

        {/* End curve with animation */}
        {conn.endCurve && (
          <path
            d={conn.endCurve}
            fill="none"
            stroke="#B4B6C5"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        )}

        {/* Start dot with specific color */}
        {conn.startDot && (
          <path
            d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
            fill="#086ac5"
            className="transition-all duration-300 ease-in-out"
          />
        )}

        {/* End dot with different color */}
        {conn.endDot && (
          <path
            d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
            fill="#a54eef"
            className="transition-all duration-300 ease-in-out"
          />
        )}
      </g>
    ));
  }, [connections]);

  // Memoize the vertical lines
  const verticalLines = useMemo(() => {
    return connections.map(
      (conn, index) =>
        conn.line && (
          <div
            key={`line-${index}`}
            className="absolute bg-neutral-300 w-0.5 transition-all duration-300 ease-in-out"
            style={{
              top: `${conn.line.top}px`,
              left: `${conn.line.left}px`,
              height: `${conn.line.height}px`,
              opacity: conn.line.height > 0 ? 1 : 0,
            }}
          />
        )
    );
  }, [connections]);

  // Early return if no connections or dimensions
  if (!connections.length || !svgDimensions.width || !svgDimensions.height) {
    return null;
  }

  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none">
      <svg
        className="absolute top-0 left-0"
        width={svgDimensions.width}
        height={svgDimensions.height}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        {connectionElements}
      </svg>
      {verticalLines}
    </div>
  );
};

import { Connection } from "@/types/Connection";
import { FC } from "react";

interface ConnectionLinesProps {
  connections: Connection[];
  svgDimensions: { width: number; height: number };
}

export const ConnectionLines: FC<ConnectionLinesProps> = ({
  connections,
  svgDimensions,
}) => {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none">
      {/* SVG Connections */}
      <svg
        className="absolute top-0 left-0"
        width={svgDimensions.width}
        height={svgDimensions.height}
        style={{ overflow: "visible" }}
      >
        {connections.map((conn, index) => (
          <g key={`curves-${index}`}>
            {/* Start Curve */}
            {conn.startCurve && (
              <path
                d={conn.startCurve}
                fill="none"
                stroke="#B4B6C5"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}

            {/* End Curve */}
            {conn.endCurve && (
              <path
                d={conn.endCurve}
                fill="none"
                stroke="#B4B6C5"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}

            {/* Start Half-Cycle Dot (Y-axis) */}
            {conn.startDot && (
              <path
                d={`M ${conn.startDot.x},${conn.startDot.y - 5} 
                    A 5,5 0 1,1 ${conn.startDot.x},${conn.startDot.y + 5}`}
                fill="#086ac5"
              />
            )}

            {/* End Half-Cycle Dot (Y-axis) */}
            {conn.endDot && (
              <path
                d={`M ${conn.endDot.x},${conn.endDot.y - 5} 
                    A 5,5 0 1,0 ${conn.endDot.x},${conn.endDot.y + 5}`}
                fill="#148D8A"
              />
            )}
          </g>
        ))}
      </svg>

      {/* Vertical Connection Lines */}
      {connections.map(
        (conn, index) =>
          conn.line && (
            <div
              key={`line-${index}`}
              className="absolute bg-neutral-300 w-0.5 transition-all duration-300"
              style={{
                top: `${conn.line.top}px`,
                left: `${conn.line.left}px`,
                height: `${conn.line.height}px`,
              }}
            />
          )
      )}
    </div>
  );
};

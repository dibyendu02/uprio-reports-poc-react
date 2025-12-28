export const ConnectionLines: React.FC<{
  connection: any;
  containerDimensions: any;
}> = ({ connection, containerDimensions }) => (
  <div className="relative">
    <svg
      className="absolute top-0 left-0"
      width={containerDimensions.width}
      height={containerDimensions.height}
      style={{ overflow: "visible" }}
    >
      <path
        d={connection.startCurve}
        fill="none"
        stroke="#B4B6C5"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300 ease-in-out"
      />
      <path
        d={connection.endCurve}
        fill="none"
        stroke="#B4B6C5"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300 ease-in-out"
      />
      <path
        d={`M ${connection.startDot.x},${connection.startDot.y - 5} 
          A 5,5 0 1,1 ${connection.startDot.x},${connection.startDot.y + 5}`}
        fill="#10B981"
        className="transition-all duration-300 ease-in-out"
      />
      <path
        d={`M ${connection.endDot.x},${connection.endDot.y - 5} 
          A 5,5 0 1,0 ${connection.endDot.x},${connection.endDot.y + 5}`}
        fill="#10B981"
        className="transition-all duration-300 ease-in-out"
      />
    </svg>
    <div
      className="absolute bg-neutral-300 w-0.5 transition-all duration-300 ease-in-out"
      style={{
        top: `${connection.line.top}px`,
        left: `${connection.line.left}px`,
        height: `${connection.line.height}px`,
      }}
    />
  </div>
);

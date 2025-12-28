export interface Connection {
  startCurve: string;
  endCurve: string;
  line: {
    top: number;
    left: number;
    height: number;
  } | null;
  startDot: {
    x: number;
    y: number;
  };
  endDot: {
    x: number;
    y: number;
  };
  evaluationId?: number;
  dotColor?: string;
}

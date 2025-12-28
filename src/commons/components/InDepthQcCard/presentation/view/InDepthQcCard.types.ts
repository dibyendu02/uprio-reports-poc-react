export interface InterventionData {
  questionsAsked: number;
  answeredCorrectly: number;
  answeredPercentage: number;
  correctSteps: number;
  totalSteps: number;
  correctStepsPercentage: number;
}

export interface InDepthQcCardProps {
  title: string;
  preIntervention: InterventionData;
  postIntervention: InterventionData;
  mobile?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  status?: "success" | "error" | "warning";
  variant?: "improved" | "drop-in-performance" | "same-as-before";
}

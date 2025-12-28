/**
 * Variants that define how improvement status is displayed
 */
export type ImprovementVariant =
  | "improved"
  | "drop-in-performance"
  | "same-as-before";

export interface PostInterventionQCCardProps {
  idx: number;
  isSelected?: boolean;
  categoryTitle: string;
  preInterventionRating: number;
  postInterventionRating: number;
  improvementStatus: string;
  remarks?: string;
  onClick?: () => void;
  handleInternalCardClick?: () => void;
  isInDepth?: boolean;
  className?: string;
  mobileViewData?: {
    preIntervention: InterventionMetrics;
    postIntervention: InterventionMetrics;
    title: string;
  };
}

interface InterventionMetrics {
  questionsAsked: number;
  answeredCorrectly: number;
  answeredPercentage: number;
  correctSteps: number;
  totalSteps: number;
  correctStepsPercentage: number;
}
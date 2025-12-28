export interface SegmentControlProps {
  segments: string[];
  initialSelectedIndex?: number;
  onSegmentChange?: (index: number) => void;
  className?: string;
}

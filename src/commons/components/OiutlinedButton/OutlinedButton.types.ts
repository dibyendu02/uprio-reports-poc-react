import { ReactNode } from "react";

export interface OutlinedButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  rightIcon?: ReactNode;
  className?: string;
}
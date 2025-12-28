export interface TextButtonProps {
  text?: string; // Optional text to be displayed on the button
  iconUrl?: string; // URL or path to the icon image
  iconPosition?: "left" | "right"; // Icon position: "left" or "right"
  onClick: () => void; // Click handler function
  className?: string; // Optional additional classes for customization
}

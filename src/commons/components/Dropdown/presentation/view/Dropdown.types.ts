export interface DropdownProps {
  options: string[];
  placeholder?: string;
  selectedOption?: string; // Optional, allows the parent to control the selected option
  onSelect: (selected: string) => void;
  disabledOptions?: string[]; // Optional list of disabled options
}

import { FC } from "react";
import backIcon from "@/assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";

interface BackHeaderProps {
  title: string;
  route?: string; // Optional route prop
}

export const BackHeader: FC<BackHeaderProps> = ({ title, route }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (route) {
      navigate(route);
    } else {
      window.history.back();
    }
  };

  return (
    <div className="flex items-start gap-2 rounded-md md:hidden">
      <button
        className="flex items-center text-primary-600 hover:text-primary-700"
        onClick={handleBack}
      >
        <img src={backIcon} alt="Back" className="w-5 h-5" />
      </button>
      <span className="font-semibold text-neutral-950">{title}</span>
    </div>
  );
};

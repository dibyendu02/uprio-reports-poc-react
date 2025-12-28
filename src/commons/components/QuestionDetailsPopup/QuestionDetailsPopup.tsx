import { QuestionEntity } from "@/commons/domain/entities/QuestionEntity";
import BottomSheet from "../BottomSheet/presentation/view/BottomSheet";
import CategoryDetailCard from "../CategoryDetailCardPopup/presentation/view/CategoryDetailCard";

const QuestionDetailsPopup: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  questions: QuestionEntity[];
  categoryId: string;
  isMobile: boolean;
}> = ({ isVisible, onClose, questions, categoryId, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <BottomSheet isVisible={isVisible} onClose={onClose}>
          <CategoryDetailCard
            idx={categoryId}
            questions={questions}
            selected={true}
            onClick={onClose}
          />
        </BottomSheet>
      ) : (
        <div
          className={`fixed top-10 right-8 bg-white shadow-lg rounded-lg w-[25vw] z-50 overflow-y-auto
              transition-all duration-300 transform
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
          style={{ marginTop: "64px" }}
        >
          <CategoryDetailCard
            idx={categoryId}
            questions={questions}
            selected={true}
            onClick={onClose}
          />
        </div>
      )}
    </>
  );
};

export default QuestionDetailsPopup;

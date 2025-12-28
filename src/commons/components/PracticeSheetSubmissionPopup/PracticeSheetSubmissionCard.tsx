import React from "react";
import { Search } from "lucide-react";

interface PracticeSheetSubmissionCardProps {
  totalQuestions: number;
  attemptedQuestions: number;
  correctQuestions: number;
  onClick?: () => void;
}

const PracticeSheetSubmissionCard: React.FC<
  PracticeSheetSubmissionCardProps
> = ({ totalQuestions, attemptedQuestions, correctQuestions }) => {
  const correctPercentage = Math.round(
    (correctQuestions / totalQuestions) * 100
  );

  return (
    <div className="bg-white rounded-3xl p-6 w-full max-w-xl shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Search className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            Cubes & Cube Roots PP 1
          </h3>
        </div>
        <span className="text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
          Submitted
        </span>
      </div>

      <div className="grid grid-cols-2 gap-16 mb-8">
        <div>
          <div className="bg-gray-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-2">
            <span className="text-xl font-semibold">{totalQuestions}</span>
          </div>
          <div className="text-gray-600">Total questions</div>
        </div>
        <div>
          <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-2">
            <span className="text-xl font-semibold text-green-700">
              {attemptedQuestions}
            </span>
          </div>
          <div className="text-gray-600">Attempted</div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-orange-50 w-8 h-8 rounded-xl flex items-center justify-center">
            <span className="text-lg font-semibold text-orange-700">
              {correctQuestions}
            </span>
          </div>
          <span className="text-gray-600">({correctPercentage}%)</span>
        </div>
        <div className="text-gray-600">Correct questions</div>
      </div>
    </div>
  );
};

export default PracticeSheetSubmissionCard;

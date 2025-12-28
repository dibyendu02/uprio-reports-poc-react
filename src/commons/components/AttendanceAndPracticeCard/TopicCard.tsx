import { TopicCardProps } from "./AttendanceAndPracticeCard.types";
import notebookIcon from "@/assets/icons/notebook-evaluation-icon.svg";
import redirectIcon from "@/assets/icons/redirect-icon.svg";

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  attendance,
  practice,
  isSelected = false,
}) => (
  <div
    className={`relative bg-white rounded-xl p-4 mb-3 border transition-all duration-200 ${
      isSelected
        ? " shadow-lg before:absolute before:top-3 before:h-[calc(100%-24px)] before:left-0 before:w-1 before:bg-secondary-400 before:rounded-r"
        : "border-neutral-100 hover:shadow-sm hover:border-emerald-100"
    }`}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-[32px] h-[32px] p-[7px] rounded-[50%] border border-neutral-100">
          <img
            src={notebookIcon}
            alt="practice icon"
            className="w-full h-full"
          />
        </div>
        <span className="p203">{title}</span>
      </div>
      <img src={redirectIcon} alt="redirect icon" width={20} height={20} />
    </div>

    <div className="space-y-4">
      {attendance && (
        <div>
          <h3 className="p303 pb-1">Class attendance</h3>
          <div className="py-2 px-3 bg-neutral-50 rounded-lg">
            <div className="flex items-center">
              <div className="flex flex-col items-start w-[calc(100%-5px)] ">
                <div className="font-['Roboto'] font-bold text-[12px] leading-[20px] text-neutral-900 bg-neutral-100 rounded-full px-2 py-[1px] flex items-center justify-center">
                  {attendance.scheduled}
                </div>
                <div className="p301 mt-3">Classes scheduled</div>
              </div>
              <div className="h-10 mx-3 w-[1px] bg-neutral-100"></div>
              <div className="flex flex-col items-start w-[calc(100%-20px)]">
                <div className="font-['Roboto'] font-bold text-[12px] leading-[20px] text-neutral-900 bg-gray-200 rounded-full px-2 py-[1px] flex items-center justify-center">
                  {attendance.attended}
                </div>
                <div className="p301 mt-3">Classes attended</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {practice && (
        <div>
          <h3 className="p303 pb-1">Practice Sheets</h3>
          <div className="py-2 px-3 bg-neutral-50 rounded-lg">
            <div className="flex items-center">
              <div className="flex flex-col items-start w-[calc(100%-15px)]">
                <div className="font-['Roboto'] font-bold text-[12px] leading-[20px] text-neutral-900 bg-neutral-100 rounded-full px-2 py-[1px] flex items-center justify-center">
                  {practice.assigned}
                </div>
                <div className="p301 mt-3">Sheets assigned</div>
              </div>
              <div className="h-10 mx-3 w-[1px] bg-neutral-100"></div>
              <div className="flex flex-col items-start w-[calc(100%-20px)]">
                <div className="font-['Roboto'] font-bold text-[12px] leading-[20px] text-neutral-900 bg-gray-200 rounded-full px-2 py-[1px] flex items-center justify-center">
                  {practice.submitted}
                </div>
                <div className="p301 mt-3">Sheets submitted</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default TopicCard;

interface MobileFooterProps {
  text: string;
  onClick: () => void;
  iconUrl?: string;
  className?: string;
}

const MobileFooter = ({
  text,
  onClick,
  iconUrl,
  className,
}: MobileFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-10">
      <button
        onClick={onClick}
        className={`py-3 px-4 w-full bg-secondary-500 text-white rounded-lg flex gap-2 items-center justify-center hover:bg-secondary-400 transition-colors ${className}`}
      >
        <h1 className="sh201">{text}</h1>
        <img
          src={iconUrl}
          alt="icon"
          className="w-5 h-5"
          style={{ filter: "brightness(0) invert(100)" }}
        />
      </button>
    </div>
  );
};

export default MobileFooter;

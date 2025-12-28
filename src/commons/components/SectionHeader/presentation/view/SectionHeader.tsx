import React from "react";

interface SectionHeaderProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  textColor,
  backgroundColor,
}) => {
  return (
    <div
      className={`bg-gradient-to-r ${backgroundColor} bg-opacity-10 p-3 rounded-lg mb-6 hidden md:block`}
    >
      <h2 className={`p303`} style={{ color: `var(--${textColor})` }}>
        {text}
      </h2>{" "}
    </div>
  );
};

export default SectionHeader;

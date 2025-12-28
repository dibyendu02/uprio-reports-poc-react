import React, { createContext, useContext, useState, ReactNode } from "react";

export type ReportType =
  | "Chapter Level QC Report"
  | "Intervention Impact Report"
  | "Exam Status Report"
  | "";

interface ReportContextType {
  selectedReport: ReportType;
  setSelectedReport: (report: ReportType) => void;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

interface ReportProviderProps {
  children: ReactNode;
  initialPath: string;
}

export const ReportProvider: React.FC<ReportProviderProps> = ({
  children,
  initialPath,
}) => {
  const getInitialReport = (path: string): ReportType => {
    if (path.includes("/exam")) return "Exam Status Report";
    if (path.includes("/understanding")) return "Chapter Level QC Report";
    if (path.includes("/intervention")) return "Intervention Impact Report";
    return "Exam Status Report";
  };

  const [selectedReport, setSelectedReport] = useState<ReportType>(() =>
    getInitialReport(initialPath)
  );

  return (
    <ReportContext.Provider value={{ selectedReport, setSelectedReport }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReport must be used within a ReportProvider");
  }
  return context;
};

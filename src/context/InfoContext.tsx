import { createContext, useContext, useState, ReactNode } from "react";

interface PersonalInfo {
  name: string;
  role?: string;
  location?: string;
  skills?: string[];
  projects?: Array<{
    name: string;
    description: string;
    tech: string[];
  }>;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  email?: string;
  currentlyViewing?: string;
}

interface InfoContextType {
  info: PersonalInfo;
  updateInfo: (newInfo: Partial<PersonalInfo>) => void;
  setCurrentlyViewing: (section: string) => void;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<PersonalInfo>({
    name: "Emin",
    currentlyViewing: "intro",
  });

  const updateInfo = (newInfo: Partial<PersonalInfo>) => {
    setInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const setCurrentlyViewing = (section: string) => {
    setInfo((prev) => ({ ...prev, currentlyViewing: section }));
  };

  return (
    <InfoContext.Provider value={{ info, updateInfo, setCurrentlyViewing }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) throw new Error("useInfo must be used within InfoProvider");
  return context;
};

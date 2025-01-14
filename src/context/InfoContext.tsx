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
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    twitter?: string;
  };
  email?: string;
  currentlyViewing?: string;
  description?: string;
}

interface InfoContextType {
  info: PersonalInfo;
  updateInfo: (newInfo: Partial<PersonalInfo>) => void;
  setCurrentlyViewing: (section: string) => void;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

const BASIC_INFO = {
  name: "Emin Demirci",
  role: "Full Stack Developer",
  location: "Konya, Türkiye",
  email: "",
  social: {
    github: "https://github.com/Ztaclie",
    linkedin: "https://www.linkedin.com/in/mehmet-emin-demirci-ztac/",
    instagram: "https://instagram.com/cyber_ztac",
  },
};

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<PersonalInfo>({
    ...BASIC_INFO,
    currentlyViewing: "intro",
  });

  const updateInfo = (newInfo: Partial<PersonalInfo>) => {
    setInfo((prev) => {
      // Start with basic info
      const updatedInfo = { ...BASIC_INFO };

      // Keep social info if viewing contact section
      if (
        prev.currentlyViewing === "contact" ||
        newInfo.currentlyViewing === "contact"
      ) {
        if (prev.social) updatedInfo.social = prev.social;
        if (prev.email) updatedInfo.email = prev.email;
      }

      // Add new section data
      return {
        ...updatedInfo,
        ...newInfo,
        currentlyViewing: newInfo.currentlyViewing || prev.currentlyViewing,
      };
    });
  };

  const setCurrentlyViewing = (section: string) => {
    setInfo((prev) => {
      const updatedInfo = { ...BASIC_INFO };

      // Keep social info if viewing contact section
      if (section === "contact" || prev.currentlyViewing === "contact") {
        if (prev.social) updatedInfo.social = prev.social;
        if (prev.email) updatedInfo.email = prev.email;
      }

      // Add section specific data
      switch (section) {
        case "skills":
          if (prev.skills) updatedInfo.skills = prev.skills;
          break;
        case "projects":
          if (prev.projects) updatedInfo.projects = prev.projects;
          break;
        case "contact":
          if (prev.social) updatedInfo.social = prev.social;
          if (prev.email) updatedInfo.email = prev.email;
          break;
      }

      return { ...updatedInfo, currentlyViewing: section };
    });
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

import React, { createContext, useContext, useState } from "react";

interface LoadingContextType {
  loadedSections: string[];
  setLoadedSection: (section: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loadedSections, setLoadedSections] = useState<string[]>([]);

  const setLoadedSection = (section: string) => {
    if (!loadedSections.includes(section)) {
      setLoadedSections((prev) => [...prev, section]);
    }
  };

  return (
    <LoadingContext.Provider value={{ loadedSections, setLoadedSection }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within LoadingProvider");
  return context;
};

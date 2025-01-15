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
    console.log("Setting loaded section:", section);
    setLoadedSections((prev) => {
      const newSections = [...prev, section];
      console.log("Updated loaded sections:", newSections);
      return newSections;
    });
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

import React from "react";

interface SectionProps {
  isLoading: boolean;
}

const Section: React.FC<SectionProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default Section;

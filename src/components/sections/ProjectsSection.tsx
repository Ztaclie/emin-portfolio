import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const ProjectsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("projects");
      updateInfo({
        projects: [
          {
            name: "Portfolio Website",
            description: "Personal portfolio built with React and TypeScript",
            tech: ["React", "TypeScript", "Tailwind CSS"]
          },
          // Add more projects here
        ]
      });
    }
  }, [inView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8 cyber-gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Your projects content */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

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
      <div className="w-full animate-fadeIn">
        <div className="flex items-center gap-4 mb-8">
          <RocketLaunchIcon className="w-8 h-8" />
          <h2 className="text-3xl font-bold cyber-gradient-text">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="cyber-card animate-slideUp">
            {/* Project content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

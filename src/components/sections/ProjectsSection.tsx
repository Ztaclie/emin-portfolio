import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useLoading } from "../../context/LoadingContext";

const ProjectsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing, info } = useInfo();
  const { loadedSections } = useLoading();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const isLoaded = loadedSections.includes("projects");

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("projects");
      updateInfo({
        projects: [
          {
            name: "FinanceZtac",
            description: "A JavaScript-based finance application",
            tech: ["JavaScript"],
          },
          {
            name: "Clomosy Development",
            description:
              "Contributing to cross-platform development with Delphi FMX",
            tech: ["Delphi FMX", "Mobile Development"],
          },
          {
            name: "Portfolio Website",
            description: "Personal portfolio built with React and TypeScript",
            tech: ["React", "TypeScript", "Tailwind CSS"],
          },
        ],
      });
    }
  }, [inView]);

  if (!isLoaded) {
    return (
      <section
        id="projects"
        ref={ref}
        className="min-h-screen flex items-center justify-start pl-8"
      >
        <div className="animate-pulse w-full h-64 bg-cyan-500/10 rounded-lg" />
      </section>
    );
  }

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
          {info.projects?.map((project, index) => (
            <div
              key={project.name}
              className="cyber-card animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-2 ">{project.name}</h3>
              <p className="mb-4 ">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm cyber-button py-1 px-3">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

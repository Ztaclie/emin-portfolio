import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const ProjectsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const projects = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React and TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution",
      tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    },
    // Add more projects here
  ];

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("projects");
      updateInfo({ projects });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                  >
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

import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const SkillsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("skills");
      updateInfo({
        skills: [
          "TypeScript",
          "React",
          "JavaScript",
          "Node.js",
          "C#",
          "Python",
          "HTML5",
          "CSS3",
          "MongoDB",
          "MySQL",
          "SQLite",
          "Microsoft SQL Server",
          "Firebase",
          "Delphi FMX",
          "Git",
          "Chart.js",
          "Figma",
          "Canva",
        ],
      });
    }
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="animate-fadeIn">
        <div className="flex items-center gap-4 mb-8">
          <WrenchScrewdriverIcon className="w-8 h-8" />
          <h2 className="text-3xl font-bold cyber-gradient-text">Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["TypeScript", "React", "Node.js", "Redux", "Tailwind CSS"].map(
            (skill, index) => (
              <div
                key={skill}
                className="cyber-card animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

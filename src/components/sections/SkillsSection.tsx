import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useLoading } from "../../context/LoadingContext";

const SkillsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { loadedSections } = useLoading();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const isLoaded = loadedSections.includes("skills");

  useEffect(() => {
    console.log("Skills section loaded state:", isLoaded);
    console.log("Current loaded sections:", loadedSections);
  }, [isLoaded, loadedSections]);

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

  if (!isLoaded) {
    return (
      <section
        id="skills"
        ref={ref}
        className="min-h-screen flex items-center justify-start pl-8"
      >
        <div className="animate-pulse w-full h-64 bg-cyan-500/10 rounded-lg" />
      </section>
    );
  }

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
                className="cyber-card animate-slideUp bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 transition-transform hover:scale-110"
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

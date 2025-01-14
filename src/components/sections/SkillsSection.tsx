import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const SkillsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("skills");
      updateInfo({
        skills: ["TypeScript", "React", "Node.js", "Redux", "Tailwind CSS"],
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["TypeScript", "React", "Node.js", "Redux", "Tailwind CSS"].map(
            (skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
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

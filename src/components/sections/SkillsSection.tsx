import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const SkillsSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "Redux",
    "Tailwind CSS",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
  ];

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("skills");
      updateInfo({ skills });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-8 cyber-gradient-text">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="cyber-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

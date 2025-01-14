import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const IntroSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("intro");
      updateInfo({
        role: "Full Stack Developer",
        location: "Your Location",
      });
    }
  }, [inView]);

  return (
    <section
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 cyber-gradient-text">
          Hi, I'm Emin
        </h1>
        <p className="text-xl md:text-2xl">Full Stack Developer</p>
      </div>
    </section>
  );
};

export default IntroSection;

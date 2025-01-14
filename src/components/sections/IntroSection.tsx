import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const IntroSection: FC = () => {
  const { updateInfo, setCurrentlyViewing, info } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("intro");
      updateInfo({
        role: "Full Stack Web Developer",
        location: "Konya, Türkiye",
        description:
          "I'm a Full-Stack Web Developer and Product Manager at Clomosy, with 2 years of experience in Delphi FMX and web development.",
      });
    }
  }, [inView]);

  return (
    <section
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="animate-fadeIn">
        <div className="flex items-center gap-4 mb-6">
          <UserCircleIcon className="w-8 h-8" />
          <h2 className="text-3xl font-bold cyber-gradient-text">About Me</h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 cyber-gradient-text animate-slideUp">
          Hi, I'm Emin
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-slideUp animation-delay-200">
          Full Stack Web Developer
        </p>
        <p className="text-lg animate-slideUp animation-delay-200">
          {info.description}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;

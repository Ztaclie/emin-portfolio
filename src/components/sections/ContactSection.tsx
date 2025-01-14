import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("contact");
      updateInfo({
        email: "your@email.com",
        social: {
          github: "https://github.com/yourusername",
          linkedin: "https://linkedin.com/in/yourusername",
          twitter: "https://twitter.com/yourusername",
        },
      });
    }
  }, [inView]);

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="animate-fadeIn">
        <div className="flex items-center gap-4 mb-8">
          <EnvelopeIcon className="w-8 h-8" />
          <h2 className="text-3xl font-bold cyber-gradient-text">Contact</h2>
        </div>
        {/* Your contact content with animations */}
      </div>
    </section>
  );
};

export default ContactSection;

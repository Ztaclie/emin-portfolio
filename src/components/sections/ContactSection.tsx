import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

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
      <div>
        <h2 className="text-3xl font-bold mb-8 cyber-gradient-text">Contact</h2>
        {/* Your contact content */}
      </div>
    </section>
  );
};

export default ContactSection;

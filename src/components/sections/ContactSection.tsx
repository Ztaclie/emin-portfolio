import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";

const ContactSection: FC = () => {
  const { updateInfo, setCurrentlyViewing } = useInfo();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your@email.com",
  };

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("contact");
      updateInfo({
        social: {
          github: socialLinks.github,
          linkedin: socialLinks.linkedin,
          twitter: socialLinks.twitter,
        },
        email: socialLinks.email,
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start pl-8"
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
            <div className="space-y-4">
              {Object.entries(socialLinks).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <span className="capitalize">{platform}:</span>
                  <span className="text-blue-500 hover:underline">{link}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

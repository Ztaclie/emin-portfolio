import { FC, useEffect } from "react";
import { useInfo } from "../../context/InfoContext";
import { useInView } from "react-intersection-observer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import { useLoading } from "../../context/LoadingContext";

const ContactSection: FC = () => {
  const { updateInfo, setCurrentlyViewing, info } = useInfo();
  const { loadedSections } = useLoading();
  const { ref, inView } = useInView({ threshold: 0.5 });

  const isLoaded = loadedSections.includes("contact");

  useEffect(() => {
    if (inView) {
      setCurrentlyViewing("contact");
      updateInfo({
        social: {
          github: "https://github.com/Ztaclie",
          linkedin: "https://www.linkedin.com/in/mehmet-emin-demirci-ztac/",
          instagram: "https://instagram.com/cyber_ztac",
        },
        email: "eminfeg@gmail.com",
      });
    }
  }, [inView]);

  if (!isLoaded) {
    return (
      <section
        id="contact"
        ref={ref}
        className="min-h-screen flex items-center justify-start pl-8"
      >
        <div className="animate-pulse w-full h-64 bg-cyan-500/10 rounded-lg" />
      </section>
    );
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubIcon className="w-6 h-6" />,
      url: info.social?.github,
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon className="w-6 h-6" />,
      url: info.social?.linkedin,
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-6 h-6" />,
      url: info.social?.instagram,
    },
  ];

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

        <div className="space-y-8">
          <div className="animate-slideUp">
            <h3 className="text-xl font-bold mb-4">Let's Connect!</h3>
            <p className="mb-2">Feel free to reach out to me at:</p>
            <a
              href={`mailto:${info.email}`}
              className="cyber-button inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 transition-transform hover:scale-110"
            >
              {info.email}
            </a>
          </div>

          <div className="animate-slideUp animation-delay-200">
            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 transition-transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.icon}
                  <span>{link.name}</span>
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

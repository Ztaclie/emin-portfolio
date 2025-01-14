import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import {
  HomeIcon,
  CommandLineIcon,
  FolderIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Navigation: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const navItems = [
    { label: "Home", href: "#intro", icon: HomeIcon },
    { label: "Skills", href: "#skills", icon: CommandLineIcon },
    { label: "Projects", href: "#projects", icon: FolderIcon },
    { label: "Contact", href: "#contact", icon: EnvelopeIcon },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div
        className={`flex flex-col gap-6 p-4 rounded-lg backdrop-blur-sm
        ${
          darkMode
            ? "bg-cyber-dark-darker/70 border-cyber-dark-neon/20"
            : "bg-cyber-light-darker/70 border-cyber-light-neon/20"
        } border`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`w-6 h-6 transition-all duration-300 group relative
                ${
                  darkMode
                    ? "text-cyber-dark-neon/50 hover:text-cyber-dark-neon hover:shadow-[0_0_10px_theme(colors.cyber-dark.neon)]"
                    : "text-cyber-light-neon/50 hover:text-cyber-light-neon hover:shadow-[0_0_10px_theme(colors.cyber-light.neon)]"
                }
              `}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
              <span
                className={`absolute left-full ml-2 px-2 py-1 rounded text-sm whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${
                  darkMode
                    ? "bg-cyber-dark-darker border-cyber-dark-neon/20"
                    : "bg-cyber-light-darker border-cyber-light-neon/20"
                } border`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;

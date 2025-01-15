import { FC } from "react";
import { useInfo } from "../context/InfoContext";
import { useAppSelector } from "../store/hooks";

const Terminal: FC = () => {
  const { info } = useInfo();
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const getTerminalCommand = () => {
    switch (info.currentlyViewing) {
      case "intro":
        return "cd /about-me";
      case "skills":
        return "ls ./skills";
      case "projects":
        return "ls ./projects";
      case "contact":
        return "cat contact.txt";
      default:
        return "pwd";
    }
  };

  const getTerminalOutput = () => {
    switch (info.currentlyViewing) {
      case "intro":
        return "📂 Current directory: /about-me\n→ Viewing profile information...";
      case "skills":
        return "📂 Directory: /skills\n→ Displaying technical expertise...";
      case "projects":
        return "📂 Directory: /projects\n→ Loading project portfolio...";
      case "contact":
        return "📂 Reading: contact.txt\n→ Loading contact information...";
      default:
        return "Welcome to my portfolio terminal! Scroll to navigate.";
    }
  };

  return (
    <div className="fixed top-24 right-4 w-[32rem] h-[calc(100vh-8rem)]">
      <div
        className={`w-full h-full ${
          darkMode ? "bg-dracula-background" : "bg-white"
        } 
        rounded-lg overflow-hidden shadow-xl 
        ${darkMode ? "border-dracula-purple/30" : "border-gray-200"} border`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-2 
          ${darkMode ? "bg-dracula-current-line" : "bg-gray-100"}`}
        >
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-dracula-red"></div>
            <div className="w-3 h-3 rounded-full bg-dracula-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-dracula-green"></div>
          </div>
          <span
            className={`font-cyber ${
              darkMode ? "text-dracula-comment" : "text-gray-500"
            }`}
          >
            terminal
          </span>
        </div>
        <div className="p-4 font-cyber overflow-y-auto h-[calc(100%-2.5rem)] custom-scrollbar">
          <div className="space-y-4">
            <div
              className={`${darkMode ? "text-green-400" : "text-green-600"}`}
            >
              visitor@portfolio:~$ {getTerminalCommand()}
            </div>
            <div className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {getTerminalOutput()}
            </div>
            <div
              className={`animate-pulse ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              visitor@portfolio:~$ █
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

import { FC, useEffect, useState } from "react";
import { useInfo } from "../context/InfoContext";
import { useAppSelector } from "../store/hooks";
import { useTypewriter } from "../hooks/useTypewriter";
import { useLoading } from "../context/LoadingContext";

interface TerminalProps {
  onCommandComplete: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onCommandComplete }) => {
  const { info } = useInfo();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const { setLoadedSection } = useLoading();

  const { displayText: typedCommand, isTyping: isTypingCommand } =
    useTypewriter(currentCommand, 50);
  const { displayText: typedOutput, isTyping: isTypingOutput } = useTypewriter(
    currentOutput,
    30,
    { startDelay: isTypingCommand ? Infinity : 0 }
  );

  useEffect(() => {
    setCurrentCommand(getTerminalCommand());
    setCurrentOutput(getTerminalOutput());
  }, [info.currentlyViewing]);

  useEffect(() => {
    const isTerminalTyping = isTypingCommand || isTypingOutput;
    // You can create a callback prop or context to handle this
    // For example: onTypingStatusChange(isTerminalTyping);
  }, [isTypingCommand, isTypingOutput]);

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

  const handleTypingComplete = (command: string) => {
    // Remove any whitespace and convert to lowercase for consistent matching
    const cleanCommand = command.trim().toLowerCase();

    // Log for debugging
    console.log("Command completed:", cleanCommand);

    // Match commands more flexibly
    if (cleanCommand.includes("skills") || cleanCommand.includes("./skills")) {
      console.log("Loading skills section...");
      setLoadedSection("skills");
    }
    if (
      cleanCommand.includes("projects") ||
      cleanCommand.includes("./projects")
    ) {
      console.log("Loading projects section...");
      setLoadedSection("projects");
    }
    if (
      cleanCommand.includes("contact") ||
      cleanCommand.includes("./contact")
    ) {
      console.log("Loading contact section...");
      setLoadedSection("contact");
    }
  };

  const handleCommand = (command: string) => {
    switch (command) {
      case "ls ./skills":
        setLoadedSection("skills");
        break;
      case "ls ./projects":
        setLoadedSection("projects");
        break;
      case "ls ./contact":
        setLoadedSection("contact");
        break;
    }
  };

  // Add this useEffect for testing
  useEffect(() => {
    // Simulate command completion after 2 seconds
    const timer = setTimeout(() => {
      console.log("Testing: Loading skills section...");
      setLoadedSection("skills");

      setTimeout(() => {
        console.log("Testing: Loading projects section...");
        setLoadedSection("projects");

        setTimeout(() => {
          console.log("Testing: Loading contact section...");
          setLoadedSection("contact");
        }, 1000);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
              visitor@portfolio:~$ {typedCommand}
            </div>
            <div className={darkMode ? "text-gray-300" : "text-gray-700"}>
              {typedOutput}
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

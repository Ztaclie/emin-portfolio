import { FC, useEffect, useState, useCallback } from "react";
import { useInfo } from "../context/InfoContext";
import { useAppSelector } from "../store/hooks";
import { useTypewriter } from "../hooks/useTypewriter";
import { useLoading } from "../context/LoadingContext";
import { Link as ScrollLink } from "react-scroll";

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
  const [manualCommand, setManualCommand] = useState<string | null>(null);

  const { displayText: typedCommand, isTyping: isTypingCommand } =
    useTypewriter(currentCommand, 50);
  const { displayText: typedOutput, isTyping: isTypingOutput } = useTypewriter(
    currentOutput,
    30,
    { startDelay: isTypingCommand ? Infinity : 0 }
  );

  const getCommandAndOutput = (viewing: string) => {
    switch (viewing) {
      case "intro":
        return {
          command: "cd /about-me",
          output:
            "📂 Current directory: /about-me\n→ Viewing profile information...",
        };
      case "skills":
        return {
          command: "ls ./skills",
          output: "📂 Directory: /skills\n→ Displaying technical expertise...",
        };
      case "projects":
        return {
          command: "ls ./projects",
          output: "📂 Directory: /projects\n→ Loading project portfolio...",
        };
      case "contact":
        return {
          command: "cat contact.txt",
          output: "📂 Reading: contact.txt\n→ Loading contact information...",
        };
      default:
        return {
          command: "pwd",
          output: "Welcome to my portfolio terminal! Scroll to navigate.",
        };
    }
  };

  useEffect(() => {
    const { command, output } = getCommandAndOutput(info.currentlyViewing);
    setCurrentCommand(manualCommand || command);
    setCurrentOutput(output);
    setManualCommand(null);
  }, [info.currentlyViewing, manualCommand]);

  useEffect(() => {
    const isTerminalTyping = isTypingCommand || isTypingOutput;
    // You can create a callback prop or context to handle this
    // For example: onTypingStatusChange(isTerminalTyping);
  }, [isTypingCommand, isTypingOutput]);

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
    const section = command.split(" ")[1]?.replace("./", "");
    if (section) setLoadedSection(section);
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

  const handleNavClick = useCallback(
    (section: string) => {
      const commands = {
        intro: "cd /about-me",
        skills: "ls ./skills",
        projects: "ls ./projects",
        contact: "cat contact.txt",
      };
      setManualCommand(commands[section as keyof typeof commands]);
      setLoadedSection(section); // Ensure the section is loaded on button click
    },
    [setLoadedSection]
  );

  useEffect(() => {
    const handleScroll = () => {
      // Debounce or throttle scroll event handling
      // Example: Use a timeout to limit how often the scroll event is processed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="p-4 font-cyber overflow-y-auto h-[calc(100%-6rem)] custom-scrollbar">
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
        <div className="h-14 border-t border-cyan-500/20 flex items-center justify-center gap-4 px-4">
          <ScrollLink
            to="intro"
            smooth={true}
            duration={500}
            className="cyber-button text-sm py-1"
            onClick={() => handleNavClick("intro")}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="cyber-button text-sm py-1"
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cyber-button text-sm py-1"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cyber-button text-sm py-1"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

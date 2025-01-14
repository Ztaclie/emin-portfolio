import { FC } from "react";
import { useInfo } from "../context/InfoContext";
import { useAppSelector } from "../store/hooks";

const Hero: FC = () => {
  const { info } = useInfo();
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const formatWithSyntaxHighlight = (obj: any) => {
    // Remove currentlyViewing from displayed object
    const displayInfo = { ...obj };
    delete displayInfo.currentlyViewing;

    const jsonString = JSON.stringify(displayInfo, null, 2);

    return jsonString.split("\n").map((line, i) => {
      // Handle key-value pairs
      if (line.includes(":")) {
        const [key, ...value] = line.split(":");
        return (
          <span key={i}>
            <span className={darkMode ? "text-cyan-300" : "text-blue-700"}>
              {key}
            </span>
            <span className={darkMode ? "text-gray-100" : "text-gray-900"}>
              :
            </span>
            {value.join(":").includes("{") || value.join(":").includes("[") ? (
              <span className={darkMode ? "text-gray-100" : "text-gray-900"}>
                {value}
              </span>
            ) : (
              <span className={darkMode ? "text-green-300" : "text-green-700"}>
                {value}
              </span>
            )}
            {"\n"}
          </span>
        );
      }
      // Handle brackets and braces
      if (
        line.includes("{") ||
        line.includes("}") ||
        line.includes("[") ||
        line.includes("]")
      ) {
        return (
          <span
            key={i}
            className={darkMode ? "text-dracula-foreground" : "text-gray-800"}
          >
            {line}
            {"\n"}
          </span>
        );
      }
      return (
        <span key={i}>
          {line}
          {"\n"}
        </span>
      );
    });
  };

  return (
    <div className="fixed top-24 right-4 w-[32rem] h-[calc(100vh-8rem)]">
      <div
        className={`w-full h-full ${
          darkMode ? "bg-dracula-background" : "bg-white"
        } 
                      rounded-lg overflow-hidden shadow-xl 
                      ${
                        darkMode
                          ? "border-dracula-purple/30"
                          : "border-gray-200"
                      } border`}
      >
        <div
          className={`flex items-center gap-2 px-4 py-2 
                        ${
                          darkMode ? "bg-dracula-current-line" : "bg-gray-100"
                        }`}
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
            personalInfo.ts
          </span>
        </div>
        <div className="p-4 font-cyber overflow-y-auto h-[calc(100%-2.5rem)] custom-scrollbar">
          <pre className="whitespace-pre-wrap">
            <span
              className={darkMode ? "text-dracula-pink" : "text-purple-600"}
            >
              const
            </span>
            <span
              className={darkMode ? "text-dracula-foreground" : "text-gray-800"}
            >
              {" "}
              personalInfo ={" "}
            </span>
            {formatWithSyntaxHighlight(info)}
            <span
              className={darkMode ? "text-dracula-foreground" : "text-gray-800"}
            >
              ;
            </span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;

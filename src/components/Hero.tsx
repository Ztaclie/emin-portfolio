import { FC } from "react";
import { useInfo } from "../context/InfoContext";

const Hero: FC = () => {
  const { info } = useInfo();

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
            <span className="text-dracula-cyan">{key}</span>
            <span className="text-dracula-foreground">:</span>
            {value.join(":").includes("{") || value.join(":").includes("[") ? (
              <span className="text-dracula-foreground">{value}</span>
            ) : (
              <span className="text-dracula-green">{value}</span>
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
          <span key={i} className="text-dracula-foreground">
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
    <div className="fixed top-24 right-4 w-96 h-[calc(100vh-8rem)]">
      <div className="w-full h-full bg-dracula-background rounded-lg overflow-hidden shadow-xl border border-dracula-purple/30">
        <div className="flex items-center gap-2 px-4 py-2 bg-dracula-current-line">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-dracula-red"></div>
            <div className="w-3 h-3 rounded-full bg-dracula-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-dracula-green"></div>
          </div>
          <span className="text-dracula-comment font-cyber">
            personalInfo.ts
          </span>
        </div>
        <div className="p-4 font-cyber overflow-y-auto h-[calc(100%-2.5rem)] custom-scrollbar">
          <pre className="whitespace-pre-wrap">
            <span className="text-dracula-pink">const</span>
            <span className="text-dracula-foreground"> personalInfo = </span>
            {formatWithSyntaxHighlight(info)}
            <span className="text-dracula-foreground">;</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;

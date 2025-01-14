import { FC } from "react";
import { useInfo } from "../context/InfoContext";

const Hero: FC = () => {
  const { info } = useInfo();

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
        <div className="p-4 text-dracula-green font-cyber overflow-y-auto h-[calc(100%-2.5rem)] custom-scrollbar">
          <pre className="whitespace-pre-wrap">
            <code>{`const personalInfo = ${JSON.stringify(
              info,
              null,
              2
            )};`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;

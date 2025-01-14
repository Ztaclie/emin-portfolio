import { FC } from "react";
import { useInfo } from "../context/InfoContext";

const Hero: FC = () => {
  const { info } = useInfo();

  return (
    <div className="fixed top-24 right-4 w-96 h-[calc(100vh-8rem)]">
      <div className="w-full h-full bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm">personalInfo.ts</span>
        </div>
        <div className="p-4 text-green-400 overflow-y-auto h-[calc(100%-2.5rem)]">
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

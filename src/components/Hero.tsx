import { FC } from "react";

const personalInfo = {
  name: "Emin",
  role: "Full Stack Developer",
  location: "Your Location",
  skills: ["TypeScript", "React", "Node.js"],
  github: "https://github.com/yourusername",
  email: "your@email.com",
};

const Hero: FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          {personalInfo.role}
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm">personalInfo.js</span>
        </div>
        <pre className="p-4 text-green-400 overflow-x-auto">
          <code>{`const personalInfo = ${JSON.stringify(
            personalInfo,
            null,
            2
          )};`}</code>
        </pre>
      </div>
    </section>
  );
};

export default Hero;

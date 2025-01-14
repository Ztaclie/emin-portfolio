import { useAppSelector, useAppDispatch } from "./store/hooks";
import { toggleTheme } from "./store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Hero from "./components/Hero";
import IntroSection from "./components/sections/IntroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import { InfoProvider } from "./context/InfoContext";
import Navigation from "./components/Navigation";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  return (
    <InfoProvider>
      <div
        className={`min-h-screen ${
          darkMode
            ? "bg-cyber-dark-bg text-gray-100"
            : "bg-cyber-light-bg text-gray-900"
        }`}
      >
        <nav
          className={`fixed w-full p-4 backdrop-blur-sm z-50 border-b ${
            darkMode
              ? "bg-cyber-dark-darker/70 border-cyber-dark-neon/20"
              : "bg-cyber-light-darker/70 border-cyber-light-neon/20"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <h1
              className={`text-2xl font-bold ${
                darkMode
                  ? "from-cyber-dark-neon via-cyber-dark-purple to-cyber-dark-pink"
                  : "from-cyber-light-neon via-cyber-light-purple to-cyber-light-pink"
              } bg-gradient-to-r bg-clip-text text-transparent`}
            >
              Emin
            </h1>
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`px-6 py-2 border-2 transition-all duration-300 ${
                darkMode
                  ? "border-cyber-dark-neon text-cyber-dark-neon hover:bg-cyber-dark-neon hover:text-cyber-dark-bg shadow-[0_0_10px_theme(colors.cyber-dark.neon)] hover:shadow-[0_0_20px_theme(colors.cyber-dark.neon)]"
                  : "border-cyber-light-neon text-cyber-light-neon hover:bg-cyber-light-neon hover:text-cyber-light-bg shadow-[0_0_10px_theme(colors.cyber-light.neon)] hover:shadow-[0_0_20px_theme(colors.cyber-light.neon)]"
              }`}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        <Navigation />

        <main className="container mx-auto pt-24 pr-[32rem]">
          <IntroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Hero />
      </div>
    </InfoProvider>
  );
}

export default App;

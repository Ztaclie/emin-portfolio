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
import Terminal from "./components/Terminal";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  const themeClasses = darkMode
    ? "bg-cyber-dark-bg text-gray-100"
    : "bg-cyber-light-bg text-gray-900";

  return (
    <LoadingProvider>
      <InfoProvider>
        <div className={`min-h-screen ${themeClasses}`}>
          <nav
            className={`fixed w-full p-4 backdrop-blur-sm z-50 border-b ${themeClasses}`}
          >
            <div className="container mx-auto flex justify-between items-center">
              <h1
                className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${themeClasses}`}
              >
                Emin
              </h1>
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`px-6 py-2 border-2 transition-all duration-300 ${themeClasses}`}
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

          <Terminal />
        </div>
      </InfoProvider>
    </LoadingProvider>
  );
}

export default App;

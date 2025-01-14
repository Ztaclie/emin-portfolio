import { useAppSelector, useAppDispatch } from "./store/hooks";
import { toggleTheme } from "./store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Hero from "./components/Hero";
import IntroSection from "./components/sections/IntroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import { InfoProvider } from "./context/InfoContext";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  return (
    <InfoProvider>
      <div className="min-h-screen bg-cyber-dark text-cyber-neon">
        <nav className="fixed w-full p-4 backdrop-blur-sm bg-cyber-darker/70 border-b border-cyber-neon/20 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold cyber-gradient-text">Emin</h1>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="cyber-button"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        <main className="container mx-auto pt-24 pr-[28rem]">
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

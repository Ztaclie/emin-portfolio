import { useAppSelector, useAppDispatch } from "./store/hooks";
import { toggleTheme } from "./store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Hero from "./components/Hero";
import IntroSection from "./components/sections/IntroSection";
import SkillsSection from "./components/sections/SkillsSection";
import { InfoProvider } from "./context/InfoContext";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  return (
    <InfoProvider>
      <div
        className={`min-h-screen ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <nav className="fixed w-full p-4 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Emin</h1>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
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
        </main>

        <Hero />
      </div>
    </InfoProvider>
  );
}

export default App;

import { useAppSelector, useAppDispatch } from "./store/hooks";
import { toggleTheme } from "./store/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function App() {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <nav className="fixed w-full p-4 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">
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

      <main className="container mx-auto pt-24 px-4">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'am Emin
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              A Full Stack Developer
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

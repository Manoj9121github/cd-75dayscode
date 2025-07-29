import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🌟 My Vite React App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </header>

        <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2">Card {n}</h2>
              <p className="text-sm">
                This is a simple card built using React and styled with Tailwind
                CSS.
              </p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

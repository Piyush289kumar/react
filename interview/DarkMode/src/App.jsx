import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode"));

    setDarkMode(mode);

    console.log(`mode : ${mode}`);
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));

    console.log(localStorage.setItem("mode = ", JSON.stringify(darkMode)));
  }, []);

  return (
    <>
      <div
        className={`w-full h-screen bg-violet-700 ${
          darkMode && "dark:bg-zinc-900"
        } grid place-content-center`}
      >
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="bg-green-500 text-zinc-200 px-4 py-2 rounded-lg font-bold"
        >
          Dark Mode is : {darkMode ? "Enable" : "Disable"}
        </button>
      </div>
    </>
  );
}

export default App;

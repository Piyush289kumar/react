import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  function toggleHandler() {
    setIsDisplay(!isDisplay);
  }
  return (
    <>
      <div className="container bg-zinc-900 h-screen w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center text-zinc-300">
            <h1
              className={`text-3xl mb-5 font-extrabold block ${
                !isDisplay && "text-transparent"
              }`}
            >
              Welcome to React Challenges
            </h1>
            <button
              onClick={toggleHandler}
              className="bg-green-500 font-bold text-2xl px-3 py-2 rounded-xl"
            >
              Show/Hide
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

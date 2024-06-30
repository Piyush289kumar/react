import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [conter, setconter] = useState(0);

  const increseHandler = () => {
    setconter(conter + 1);
  };
  const decresHanlder = () => {
    setconter(conter - 1);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button>+</button>
        <h1>1</h1>
        <button>-</button>
      </div>
    </>
  );
}

export default App;

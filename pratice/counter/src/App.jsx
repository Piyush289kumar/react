import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [conter, setconter] = useState(0);

  const increseHandler = () => {
    setconter(conter + 1);
  };
  const decresHanlder = () => {
    if (conter > 0) {
      setconter(conter - 1);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={decresHanlder}>-</button>
        <h1>{conter}</h1>
        <button onClick={increseHandler}>+</button>
      </div>
    </>
  );
}

export default App;

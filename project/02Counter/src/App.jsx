import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(2);
  const addVal = () => {
    if (counter <= 20) {
      setCounter(counter++);
    }
  };

  const removeVal = () => {
    if (counter >= 0) {
      setCounter(counter--);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addVal}>Add Value - {counter}</button>
      <br />
      <br />
      <button onClick={removeVal}>Remove Value - {counter}</button>
      <br />
      <br />
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;

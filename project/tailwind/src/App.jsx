import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  Card  from "c:/xampp/htdocs/react/project/tailwind/src/component/Card";


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
      <h1 className="bg-green-400">Tailwind Project</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addVal}>Add Value - {counter}</button>
      <br />
      <br />
      <button onClick={removeVal}>Remove Value - {counter}</button>
      <br />
      <br />
      <Card btn='Click Me'/>
    </>

  );
}

export default App;
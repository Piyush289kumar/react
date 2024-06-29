import { useState } from "react";
import { Form } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center align-middle h-screen">
        <Form />
      </div>
    </>
  );
}

export default App;

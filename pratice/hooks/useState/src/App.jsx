import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  

  const [count, setCount] = useState(()=> 1);

  function addNumber() {
    setCount((prev) => prev + 1)
  }

  function removeNumber() {
    setCount((prev) => prev - 1)
  }

  return (
    <>
      <button onClick={addNumber}>+</button>
      <h1>{count}</h1>
      <button onClick={removeNumber}>-</button>
    </>
  )
}

export default App

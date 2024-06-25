import { useState } from 'react'
import './index.css'
import { TodoBox } from "./componets/index.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex justify-center bg-zinc-400'>
      <TodoBox />
    </div>
    </>
  )
}

export default App

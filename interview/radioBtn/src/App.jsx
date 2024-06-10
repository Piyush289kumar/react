import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Component rendered successfully');
  }, [])
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>You Clike {count} Times</p>
      </div>
    </>
  )
}
export default App

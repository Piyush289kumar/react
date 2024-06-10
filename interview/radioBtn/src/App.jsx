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

      <button onClick={() => setCount(count + 1)}>Click Me</button>
      
    </>
  )
}
export default App

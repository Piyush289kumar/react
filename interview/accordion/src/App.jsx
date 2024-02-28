import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full grid place-items-center'>
        <Accordion />
      </div>
    </>
  )
}

export default App

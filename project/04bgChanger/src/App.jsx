import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-slate-800 h-screen w-screen grid place-items-center space-x-1'>
      <div className=' text-white font-bold mx-5 space-x-6'>
        <button className="bg-red-500 hover:bg-red-900 border-none" id="one">Red</button>
        <button className="bg-yellow-500 hover:bg-yellow-900 border-none" id="one">Yellow</button>
        <button className="bg-green-500 hover:bg-green-900 border-none" id="one">Green</button>
        <button className="bg-sky-500 hover:bg-sky-900 border-none" id="one">Sky Blue</button>
        <button className="bg-purple-500 hover:bg-purple-900 border-none" id="one">Purple</button>
        
      </div>
     </div>
    </>
  )
}

export default App

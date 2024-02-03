import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#212121');

  return (
    <>
     <div className='h-screen w-screen duration-500' style={{backgroundColor:bgColor}}>
      <div className='p-4 fixed bottom-2 flex flex-wrap justify-center inset-x-0 space-x-6 w-auto'>
        
        <div className='text-white font-bold mx-5 bg-white rounded-lg px-5 py-3 flex flex-wrap gap-4'>
          <button className="bg-red-500 hover:bg-red-900 border-none shadow-2xl" onClick={()=>setBgColor("red")}>Red</button>
          <button className="bg-yellow-500 hover:bg-yellow-900 border-none"  onClick={()=>setBgColor("yellow")}>Yellow</button>
          <button className="bg-green-500 hover:bg-green-900 border-none"  onClick={()=>setBgColor("green")}>Green</button>
          <button className="bg-sky-500 hover:bg-sky-900 border-none"  onClick={()=>setBgColor("blue")}>Sky Blue</button>
          <button className="bg-purple-500 hover:bg-purple-900 border-none"  onClick={()=>setBgColor("purple")}>Purple</button>      
        </div>
      </div>
     </div>
    </>
  )
}

export default App

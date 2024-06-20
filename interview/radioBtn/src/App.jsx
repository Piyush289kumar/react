import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [inputColor, setInputColor] = useState('red');

  const randomNumberGenerate = (deg = 0, percentage = 100) => {
    const randomColorR = Math.floor(((Math.random() * 254) + 1))
    const randomColorG = Math.floor(((Math.random() * 254) + 1))
    const randomColorB = Math.floor(((Math.random() * 254) + 1))

    return `${deg}deg, rgb(${randomColorR},${randomColorG},${randomColorB}) ${percentage}%`;    
  }

  function generateNewColor(params) {
    `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`;
    // `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`;
  }




  return (
    <>
      <div style={{ width: 250, height: 250, background: inputColor }}></div>
      <br />
      <br />
      <div>
        <button onClick={() => randomNumberGenerate()}>Click Me</button>
        <input type="text" name="inputColor" id="inputColor" onChange={(e) => setInputColor(e.target.value)} />
      </div>
    </>
  )
}
export default App

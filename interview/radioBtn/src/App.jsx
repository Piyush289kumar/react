import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [inputColor, setInputColor] = useState('red');

  const randomNumberGenerate = (percentage = 100) => {
    const randomColorR = Math.floor(((Math.random() * 254) + 1))
    const randomColorG = Math.floor(((Math.random() * 254) + 1))
    const randomColorB = Math.floor(((Math.random() * 254) + 1))

    return `rgb(${randomColorR},${randomColorG},${randomColorB}) ${percentage}%`;
  }

  function generateNewColor() {
    const generateNewColorCode = `linear-gradient(90deg, ${randomNumberGenerate(0)}, ${randomNumberGenerate(35)}, ${randomNumberGenerate(100)})`;
    console.log('generateNewColorCode', generateNewColorCode);
    setInputColor(generateNewColorCode);
  }




  return (
    <>
      <div style={{ width: 250, height: 250, background: inputColor }}></div>
      <br />
      <br />
      <div>
        <button onClick={() => generateNewColor}>Click Me</button>
        {/* <input type="text" name="inputColor" id="inputColor" onChange={(e) => setInputColor(e.target.value)} /> */}
      </div>
    </>
  )
}
export default App

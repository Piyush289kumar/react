import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [inputColor, setInputColor] = useState('red');
  const [firstColorCode, setFirstColorCode] = useState('');
  const [secondColorCode, setSecondColorCode] = useState('');
  const [thirdColorCode, setThirdColorCode] = useState('');
  const randomNumberGenerate = (percentage = 100) => {
    const randomColorR = Math.floor(((Math.random() * 254) + 1))
    const randomColorG = Math.floor(((Math.random() * 254) + 1))
    const randomColorB = Math.floor(((Math.random() * 254) + 1))
    return `rgb(${randomColorR},${randomColorG},${randomColorB}) ${percentage}%`;
  }
  function generateNewColor() {
    setFirstColorCode(randomNumberGenerate(0));
    setSecondColorCode(randomNumberGenerate(35));
    setThirdColorCode(randomNumberGenerate(100));
    const generateNewColorCode = `linear-gradient(90deg, ${firstColorCode}, ${secondColorCode}, ${thirdColorCode})`;
    console.log('generateNewColorCode', generateNewColorCode);
    setInputColor(generateNewColorCode);
  }
  return (
    <>
      <div style={{ width: 250, height: 250, background: inputColor, borderRadius: 24 }}></div>
      <br />
      <br />
      <div>
        <dir>
          <p>{`${firstColorCode} -> ${secondColorCode} -> ${thirdColorCode}`}</p>
        </dir>
        <button onClick={() => generateNewColor()}>Click Me</button>
        {/* <input type="text" name="inputColor" id="inputColor" onChange={(e) => setInputColor(e.target.value)} /> */}
      </div>
    </>
  )
}
export default App

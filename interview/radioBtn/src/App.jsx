import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [inputColor, setInputColor] = useState('red');
  return (
    <>
      <div style={{ width: 250, height: 250, background: inputColor }}></div>
      <br />
      <br />
      <div>
        <input type="text" name="inputColor" id="inputColor" onChange={(e) => setInputColor(e.target.value)} />
      </div>
    </>
  )
}
export default App

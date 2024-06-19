import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [inputColor, setInputColor] = useState('');

  return (
    <>
      <div>
        <input type="text" name="inputColor" id="inputColor" onChange={(e)=>setInputColor(e.target.value)} />
      </div>
    </>
  )
}
export default App

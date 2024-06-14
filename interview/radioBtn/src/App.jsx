import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [isCliked, setisCliked] = useState(false)


  return (
    <>

      <div>

        <h1>Toggle : {isCliked ? "ON" : "OFF"}</h1>
        <br />
        <br />
        <br />
        <input type="checkbox" name="check" id="chekcBox" onChange={(prev) => { setisCliked(!isCliked) }} />

      </div>

    </>
  )
}
export default App

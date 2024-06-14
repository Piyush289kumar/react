import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [isCliked, setisCliked] = useState(false)
  return (
    <>

      <div>

        <h1>Toggle : {isCliked}</h1>
        <br />
        <br />
        <br />
        <input type="checkbox" name="" id="" />

      </div>

    </>
  )
}
export default App

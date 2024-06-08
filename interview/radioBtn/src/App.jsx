import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const myGames = ['PUBG', "BGMI", "MORTAL KOMBAT"];
  const myDays = ['MONDAY', 'TUESDAY', 'SUNDAY', 'FRIDAY']
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {
          myGames.map((item, idx) => (
            <span style={{ margin: 10 }}>
              <span key={idx}>{item}</span>
              <input type="radio" name="mygames" id={idx} value={item} key={idx} />
            </span>
          ))
        }
        <hr /><hr />
        {
          myDays.map((item, idx) => (
            <span style={{ margin: 10 }}>
              <span key={idx}>{item}</span>
              <input type="radio" name="mydays" id={idx} value={item} key={idx} />
            </span>
          ))
        }
      </div>
    </>
  )
}
export default App

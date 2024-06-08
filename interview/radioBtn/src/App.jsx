import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const myGames = ['PUBG', "BGMI", "MORTAL KOMBAT"];
  const myDays = ['MONDAY', 'TUESDAY', 'SUNDAY', 'FRIDAY']
  const [games, setGames] = useState('')
  useEffect(() => {
    const clikedItem = () => {
      console.log(`games ${games}`);
    }
    clikedItem();
  }, [games])
  return (
    <>
      <div>
        {
          myGames.map((item, idx) => (
            <span style={{ margin: 10 }}>
              <span key={idx}>{item}</span>
              <input type="radio" name="mygames" value={item} onClick={(el) => setGames(el.target.value)} />
            </span>
          ))
        }
        <hr /><hr />
        <hr /><hr />
        <hr /><hr />
        {
          myDays.map((item, idx) => (
            <span style={{ margin: 10 }}>
              <span key={idx}>{item}</span>
              <input type="radio" name="mydays" value={item} />
            </span>
          ))
        }
      </div>
    </>
  )
}
export default App

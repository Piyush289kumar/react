import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuList from './Components/MenuList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <MenuList />
    </>
  )
}

export default App

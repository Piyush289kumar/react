import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgSlider from './Components/ImgSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImgSlider url={'https://picsum.photos/v2/list'} page={1} limit={5} />
    </>
  )
}

export default App

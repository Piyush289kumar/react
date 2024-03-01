import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartRating from './components/StartRating/StartRating'

function App() {

  return (
    < >
      <div className='w-full h-screen bg-violet-600'>
        <StartRating numOfStar={5} />
      </div>
    </>
  )
}

export default App

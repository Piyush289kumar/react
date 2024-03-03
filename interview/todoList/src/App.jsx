import { useState } from 'react'

import './App.css'
import TodoForm from './Components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-violet-500 grid place-content-center'>
        <TodoForm />
      </div>
    </>
  )
}

export default App

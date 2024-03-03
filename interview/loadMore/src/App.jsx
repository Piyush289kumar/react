import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const notify = () => { toast('Load Button Click') };

  return (
    <>
      <div>
        <button onClick={notify} className='bg-violet-600 text-white font-bold px-5 py-2 rounded-lg'>Notify!</button>
        <ToastContainer />
      </div>
    </>
  )
}

export default App

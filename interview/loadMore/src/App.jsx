import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import LoadMore from './components/loadMore/LoadMore';

function App() {

  const notify = () => { toast('Load Button Click') };

  return (
    <>
      <div className='w-full h-screen bg-violet-600'>
       <LoadMore url={'https://picsum.photos/v2/list'} />
      </div>
    </>
  )
}

export default App

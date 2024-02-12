import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(() => { return "posts" });
  const [items, setitems] = useState([])

  function changeDataField(param) {
    setData(param);
  }


  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(json => setitems(json))

  }, [data])


  return (
    <>
      <button onClick={() => changeDataField('posts')}>Post</button>
      <button onClick={() => changeDataField('users')}>User</button>
      <button onClick={() => changeDataField('comments')}>Comment</button>

      <h1>{data}</h1>
      
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}

    </>
  )
}

export default App
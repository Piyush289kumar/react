import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {setuser} = useContext(UserContext);

  const eventHandler = (el) => {
    el.preventDefault();
    setuser({userName, password})
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" name="" id="" placeholder='User Name' value={userName} onChange={(el) => setUserName(el.target.value)} />
      <br />
      <br />
      <input type="password" name="" id="" placeholder='Password' value={password} onChange={(el)=> setPassword(el.target.value)} />
      <br />
      <br />
      <button onClick={eventHandler}>Submit</button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Login
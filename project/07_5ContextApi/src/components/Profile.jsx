import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext);

  if (!user) return <h4>Please Login</h4>

  return (
    <div>
      <h4>Wellcome: {user.userName}</h4>
    </div>
  )
}

export default Profile
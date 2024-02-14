import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams();
  return (    
    <div className='bg-orange-700 text-4xl text-white text-center font-bold p-5'>User: {userId}</div>
  )
}

import React from 'react'
import { useParams} from 'react-router-dom'

export default function Blog() {
    const {bid} = useParams();
    return (
        <>
            <div className='w-full h-1/2 bg-sky-500 grid place-items-center mx-auto text-white'>
                <h1 className='text-4xl font-bold'>Blog Page</h1>
                <p className='text-4xl font-bold'>Link Param : {bid}</p>
            </div>
        </>
    )
}

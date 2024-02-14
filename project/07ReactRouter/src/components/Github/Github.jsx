import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const resData = useLoaderData();
    // const [resData, setResData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Piyush289kumar')
    //         .then((res) => res.json())
    //         .then((data) => setResData(data))
    // }, [])

    return (
        <>
            <h1 className='bg-orange-600 text-white font-bold text-4xl text-center p-5'>Public Repo: {resData['public_repos']}</h1>

            <div className='w-full flex justify-center  m-5'>
                <img src={resData.avatar_url} alt="Github Picture" className='rounded-full border-2' />
            </div>
        </>
    )
}


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Piyush289kumar')
    return res.json();
}

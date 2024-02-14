import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const resData = useLoaderData();
    return (
        <>
            <div className='w-full h-28 bg-sky-100 grid place-items-center mx-auto text-white'>
                <h1 className='text-4xl font-bold'>Public Repo : {resData.public_repos}</h1>
                <img src={resData.avatar_url} alt="Github Picture" className='rounded-full border-2 mt-5' />
            </div>
        </>
    )
}


export const githubInfoFnc = async () => {
    const res = await fetch('https://api.github.com/users/Piyush289kumar')
    return res.json();
}
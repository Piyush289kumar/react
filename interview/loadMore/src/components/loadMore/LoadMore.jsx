import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoadMore({ url }) {
    const [img, setImg] = useState([])
    const [limit, setLimit] = useState(1)
    const [error, setError] = useState(null)

    useEffect(() => {
        (url === '') ? getData(null) : getData(url)
    }, [url, limit])

    const notify = (message) => { toast(message) };

    const handleLoadMore = () => {
        console.log('handleLoadMore');
        let tmp = limit

        if (tmp === 50) { tmp = 1 } else { tmp += 1 }
        setLimit(tmp)
        notify(`Load Count Update ${tmp}`)
    }

    const getData = (getUrl) => {
        try {
            fetch(`${getUrl}?page=1&limit=${limit}`)
                .then((res) => res.json())
                .then((data) => setImg(data))
        } catch (error) {
            setError(error.message)
        }
    }

    if (error) {
        return (
            <div>
                <ToastContainer />
            </div>
        )
    }
    return (
        <div className='grid place-content-center pt-6'>
            <h1 className='bg-white text-2xl font-bold text-center text-violet-600 rounded-2xl px-4 py-2 mb-2'>Item Count : {limit}</h1>
            <button onClick={handleLoadMore} className='bg-white text-violet-600 text-xl font-bold px-4 py-2 rounded-lg'>Load More</button>
            <button onClick={() => { setLimit(1) }} className='bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-lg'>Clear All</button>
            <ToastContainer />
            {img && img.length > 0 ?

                <div className='flex flex-col justify-center'>
                    {img.map((el) => {
                        console.log(el)
                        return (
                            <img src={el.download_url} alt={el.download_url} key={el.id} className='w-[250px] rounded-xl m-1 ' />
                        )
                    })}
                </div>
                : null}
        </div >
    )
}

export default LoadMore
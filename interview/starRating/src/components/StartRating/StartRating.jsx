import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StartRating({ numOfStar = 5 }) {

    const [rating, setRating] = useState(0)
    const [hoverPosition, setHoverPosition] = useState(0)

    const handleClick = (idxPosition) => {
        setRating(idxPosition)
        console.log(idxPosition);
    }

    const handleEnter = (idxPosition) => {
        setHoverPosition(idxPosition)
        console.log(idxPosition);

    }

    const handleLeave = () => {
        setHoverPosition(rating)
    }

    return (
        <div className='grid place-content-center gap-5 grid-flow-col h-[80vh] w-full'>



            {
                [...Array(numOfStar)].map((_, idx) => {
                    idx++;
                    return (<FaStar
                        key={idx}
                        className={idx <= (rating || hoverPosition) ? 'text-yellow-400' : 'text-slate-600'}
                        size={80}
                        onClick={() => handleClick(idx)}
                        onMouseEnter={() => handleEnter(idx)}
                        onMouseLeave={() => handleLeave()}
                    />
                    )
                })
            }
        </div>
    )
}

export default StartRating
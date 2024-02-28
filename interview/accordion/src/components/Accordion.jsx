import React, { useState } from 'react'
import data from '../ApiData/abcApiData'

function Accordion() {

    const [selectedItem, setSelectedItem] = useState(null)

    const handleSubmit = (getId) => {
        console.log(getId);
        setSelectedItem(getId === selectedItem ? null : getId)
    }

    if (!(data && data.length > 0)) {
        return (<div>No Data Found ...!!!</div>)
    } else {
        return (<div className='box duration-500'>
            <h1 className='text-white bg-red-600 mt-5 p-4 rounded-md font-bold'>Accordion Section</h1>
            {data.map((dataItem) => (
                <div>
                    <div onClick={() => handleSubmit(dataItem.id)} key={dataItem.id} className='flex justify-between bg-violet-600 text-white mt-5 p-4 rounded-md font-bold cursor-pointer hover:bg-violet-800 duration-200'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                        {selectedItem === dataItem.id ?
                        <p className='flex justify-between bg-orange-500 text-white p-4 mt-1 rounded-b-lg font-bold cursor-not-allowed duration-200'>{dataItem.answer}</p> : null}
                </div>
            ))}
        </div>)
    }

}

export default Accordion
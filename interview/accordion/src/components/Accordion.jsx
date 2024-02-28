import React, { useState } from 'react'
import data from '../ApiData/abcApiData'

function Accordion() {

    const [selectedItem, setSelectedItem] = useState(null)
    const [isMultiSelectedIsEnable, setIsMultiSelectedIsEnable] = useState(false)
    const [multiSelectedItems, setMultiSelectedItems] = useState([])


    const handleSubmit = (getId) => {
        console.log(getId);
        setSelectedItem(getId === selectedItem ? null : getId)
    }

    const multiSelected = (getId) => {
        console.log("getId : " + getId);
        const cpyArr = [...multiSelectedItems]
        const findIndexOf = cpyArr.indexOf(getId)

        console.log(findIndexOf);

        if (findIndexOf === -1) {
            cpyArr.push(getId)
        } else {
            cpyArr.splice(findIndexOf, 1)
        }

        setMultiSelectedItems(cpyArr)
    }

    if (!(data && data.length > 0)) {
        return (<div>No Data Found ...!!!</div>)
    } else {
        return (<div className='box duration-500'>

            <h1 className='text-white bg-red-600 mt-5 p-4 rounded-md font-bold'>Accordion Section</h1>
            <div className='grid place-content-center mt-4'>
                <button onClick={() => setIsMultiSelectedIsEnable(!isMultiSelectedIsEnable)} className='bg-sky-500 p-4 rounded-lg'>Multi Selection Mode : {isMultiSelectedIsEnable ? 'Enable' : 'Disable'}</button>
            </div>


            {data.map((dataItem) => (
                <div key={dataItem.id}>
                    <div onClick={() => (isMultiSelectedIsEnable ? multiSelected(dataItem.id) : handleSubmit(dataItem.id))} key={dataItem.id} className='flex justify-between bg-violet-600 text-white mt-5 p-4 rounded-md font-bold cursor-pointer hover:bg-violet-800 duration-200'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {selectedItem === dataItem.id || multiSelectedItems.indexOf(dataItem.id) !== -1 ?
                        <p className='flex justify-between bg-orange-500 text-white p-4 mt-1 rounded-b-lg font-bold cursor-not-allowed duration-200'>{dataItem.answer}</p> : null}
                </div>
            ))}
        </div>)
    }

}

export default Accordion
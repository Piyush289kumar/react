import React, {useState} from 'react'
import data from '../ApiData/abcApiData'

function Accordion() {

    const [selectedItem, setSelectedItem] = useState(null)

    const handleSubmit = (getId)=>{
        console.log(getId);
        setSelectedItem(getId === selectedItem ? null : getId)
    }

    if (!(data && data.length > 0)) {
        return (<div>No Data Found ...!!!</div>)
    } else {
        return (<div className='box bg-sky-500 text-white'>
            {data.map((dataItem)=>(
                <div onClick={()=>handleSubmit(dataItem.id)} key={dataItem.id}>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    {selectedItem === dataItem.id ? <p>{dataItem.answer}</p> : null}
                </div>                
            ))}
        </div>)
    }

}

export default Accordion
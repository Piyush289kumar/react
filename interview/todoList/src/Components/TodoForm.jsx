import React, { useState, useId, useEffect } from 'react'

function TodoForm() {

    const todoId = () => {
        return (Math.floor(Math.random() * 100) + 1)
    }

    const [todoTextInput, setTodoTextInput] = useState('')
    const [isTaskDone, setIsTaskDone] = useState(false)

    const [list, setList] = useState(
        [
            {
                todoId: 1,
                todoText: 'Todo Task',
                status: false,
            }
        ]
    )



    const handleSubmit = (e) => {

        e.preventDefault();
        setList([{ todoId: todoId(), todoText: todoTextInput }, ...list])
        setTodoTextInput('')
    }

    const deletedItem = (idx) => {
        let copyList = [...list]
        copyList.splice(idx, 1)
        console.log(copyList);
        setList(copyList)
    }




    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <input type="text" value={todoTextInput} onChange={(e) => setTodoTextInput(e.target.value)} name='inputData' className='bg-white border-4 font-bold text-4xl text-black px-6 py-3 rounded-md' />
                    <button type='submit' className='bg-green-400 font-bold text-4xl text-white px-6 py-3 rounded-md'>Add</button>
                </div>
            </form>

            {list.map((todoItem, idx) => {
                return <div className='flex justify-center bg-yellow-100 p-4 my-3 rounded-lg' key={todoItem.todoId}>
                    <input type="checkbox" onChange={(e) => setIsTaskDone(e.target.value)} />
                    <p className='text-2xl font-bold text-slate-800 px-4'>Id: {todoItem.todoId} || Text: {todoItem.todoText}</p>
                    <button onClick={() => (deletedItem(idx))} className='bg-red-500 font-bold text-md text-white px-4 py-2 rounded-full'>X</button>
                </div>
            })}


        </>
    )
}

export default TodoForm
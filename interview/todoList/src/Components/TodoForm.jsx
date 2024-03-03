import React, { useState, useId, useEffect } from 'react'

function TodoForm() {
    const todoId = useId()

    const [list, setList] = useState(
        [
            {
                todoId: 1,
                todoText: 'Todo Task'
            }
        ]
    )

    useEffect(() => {
        const obj = { todoId: 'todoId', todoText: 'e.target.inputData.value' }
        console.log(list);

        setList(list.push(obj))
    }, [])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = { todoId: todoId, todoText: e.target.inputData.value }
        console.log(list);

        setList([list.push(obj), ...list])
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <input type="text" name='inputData' className='bg-white border-4 font-bold text-4xl text-black px-6 py-3 rounded-md' />
                    <button type='submit' className='bg-green-400 font-bold text-4xl text-white px-6 py-3 rounded-md'>Add</button>
                </div>
            </form>

            {list.map((todoItem) => {
                return <div className='flex justify-center bg-yellow-100 p-4 my-3 rounded-lg' key={todoItem.todoId}>
                    <input type="checkbox" />
                    <p className='text-2xl font-bold text-slate-800 px-4'>{todoItem.todoText}</p>
                    <button className='bg-red-500 font-bold text-md text-white px-4 py-2 rounded-full'>X</button>
                </div>
            })}


        </>
    )
}

export default TodoForm
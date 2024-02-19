import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'

export default function Todos() {
    const todos = useSelector((state) => (state.todos))

    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {todos.map((todo)=>(
                    <li>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

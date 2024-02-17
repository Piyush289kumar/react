import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import { useTodos } from '../Context/TodoContext'


function TodoForm() {

  const [todoSingle, setTodoSingle] = useState("")
  const { ...addTodos } = useTodos()

  const add = (e) => {
    e.preventDefault();
    if (!todoSingle) return

    addTodos({ id: Date.now(), todo: todo, complete: false })
    setTodoSingle("")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoSingle}
        onChange={(e) => setTodoSingle(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;


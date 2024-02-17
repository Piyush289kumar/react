import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodosProvider, useTodos, TodosContext } from './Context'

function App() {

  const [todos, setTodos] = useTodos([])

  const addTodos = (todo) => {
    setTodos.map((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatedTodos = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const todoComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ? { complete: !prevTodo.complete, ...prevTodo } : prevTodo))
  }

  return (
    <TodosProvider value={{ addTodos, updatedTodos, deleteTodos, todoComplete, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodosProvider>
  )
}

export default App

import { useContext, createContext } from 'react'

export const TodosContext = createContext({
    todos: [
        {
            id: 2,
            todo: "To-Do Message",
            complete: false
        }
    ],
    addTodos: (todo) => { },
    updatedTodos: (id, todo) => { },
    deleteTodos: (id) => { },
    todoComplete: (id) => { }
})

export const TodosProvider = TodosContext.Provider;

export const useTodos = () => {
    useContext(TodosContext)
}
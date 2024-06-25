import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { addTaskHandler, checkTaskHandler, deleteTask } from '../features/data/dataSlice'


function TodoBox() {

  const [taskInputText, setTaskInputText] = useState("");

  axios.get('http://localhost:3000/').then(res => {
    console.log('Api Called Res');
  }).catch(error => {
    console.log('Error', error.message);
  })


  const data = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTaskHandler({ taskInputText }));
  }
  const handleCheckTask = (taskId) => {
    dispatch(checkTaskHandler({ taskId }))
  }
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ taskId }));
  }


  return (
    <div className="bg-zinc-700 px-4 py-6 m-9 rounded-2xl">
      <div className="flex justify-start">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          onChange={(e) => setTaskInputText(e.target.value)}
          value={taskInputText}
          className="rounded-xl px-2 text-sm"
        />
        <button
          type="submit"
          onClick={handleAddTask}
          className="text-zinc-50 bg-green-500 px-5 py-0 rounded-xl mx-1"
        >
          Add
        </button>
      </div>
      <div className="h-[100%] overflow-y-auto ">
        {data.map(
          (taskItem, idx) =>
            taskItem.isActive && (
              <div className="flex justify-start mt-5" key={idx}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckTask(taskItem.id)}
                  className="mx-1"
                />
                <p className={`text-zinc-100 ${taskItem.isCompleted && "line-through"}`} >
                  {taskItem.task}
                </p>
                <button
                  className="bg-red-500 text-zinc-100 px-4 rounded-xl mx-1"
                  onClick={() => handleDeleteTask(taskItem.id)}
                >
                  Delete
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}
export default TodoBox;

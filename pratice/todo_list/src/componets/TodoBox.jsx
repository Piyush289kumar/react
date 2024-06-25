import React, { useState, useEffect } from "react";

function TodoBox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiResponse = [
      {
        id: 1,
        task: "Task One",
        isCompleted: false,
        isActive: true,
      },
      {
        id: 2,
        task: "Task Two",
        isCompleted: false,
        isActive: true,
      },
      {
        id: 3,
        task: "Task Three",
        isCompleted: false,
        isActive: true,
      },
    ];
    setData(apiResponse);
  }, []);

  const checkTaskHandler = (taskId) => {
    const updatedData = data.map((task) => {
      if (task.id === taskId) {
        console.log("task.id === taskId");
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setData(updatedData);
  };

  const deleteTask = (taskId) => {
    const updatedData = data.map((task) => {
      if (task.id === taskId) {
        return { ...task, isActive: false };
      }
      return task;
    });

    setData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className="bg-zinc-700 px-20 py-40 m-9 w-full rounded-2xl">
      <div className="flex justify-start">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          className="rounded-xl px-2 text-sm"
        />
        <button
          type="submit"
          className="text-zinc-50 bg-green-500 px-5 py-0 rounded-xl mx-1"
        >
          Add
        </button>
      </div>
      {data.map(
        (taskItem, idx) =>
          taskItem.isActive && (
            <div className="flex justify-start mt-5" key={idx}>
              <input
                type="checkbox"
                onChange={() => checkTaskHandler(taskItem.id)}
                className="mx-1"
              />
              <p
                className={`text-zinc-100 ${
                  taskItem.isCompleted && "line-through"
                }`}
              >
                {taskItem.task}
              </p>
              <button
                className="bg-red-500 text-zinc-100 px-4 rounded-xl mx-1"
                onClick={() => deleteTask(taskItem.id)}
              >
                Delete
              </button>
            </div>
          )
      )}
    </div>
  );
}

export default TodoBox;

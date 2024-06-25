import { createSlice } from "@reduxjs/toolkit";
const initialState = [
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
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTaskHandler: (state, action) => {
      const newTask = {
        id: state.length + 1,
        task: action.payload.taskInputText,
        isCompleted: false,
        isActive: true,
      };
      state.push(newTask);
    },
    checkTaskHandler: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    deleteTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      if (task) {
        task.isActive = !task.isActive;
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTaskHandler, checkTaskHandler, deleteTask } =
  todosSlice.actions;
export default todosSlice.reducer;

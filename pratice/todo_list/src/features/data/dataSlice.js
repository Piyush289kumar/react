import { createSlice } from "@reduxjs/toolkit";
let initialState = [
  {
    id: 1,
    task: "Task One",
    isCompleted: false,
    isActive: true,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    init: (state, action) => {
      return action.payload;
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
export const { init, addTaskHandler, checkTaskHandler, deleteTask } =
  todosSlice.actions;
export default todosSlice.reducer;

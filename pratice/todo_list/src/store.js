import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/data/dataSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

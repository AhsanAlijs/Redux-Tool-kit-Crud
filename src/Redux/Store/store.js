import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

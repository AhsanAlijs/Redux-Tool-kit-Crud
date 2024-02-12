import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // Add Todo Start
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    // Add Todo End

    // Edit Todo Start
    editTodo: (state, action) => {
      state.todos.splice(action.payload.index, 1);
    },
    // Edit Todo End

    // Delete Todo Start
    deleteTodo: (state, action) => {
      const updateValue = prompt("Enter New Value");
      state.todos[action.payload.index].title = updateValue;
    },
    // Delete Todo End
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

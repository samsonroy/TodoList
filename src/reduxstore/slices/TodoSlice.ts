import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: String(uuid.v4()),
        description: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);
    },
    updateTodo(state, action: PayloadAction<{ text: string; id: string }>) {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].description = action.payload.text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

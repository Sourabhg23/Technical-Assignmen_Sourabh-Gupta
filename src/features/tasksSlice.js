import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description || '', // Default to empty string
        state: action.payload.state,
        projectId: action.payload.projectId,
      });
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Merge the new properties
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id); // Remove the task
    },
    moveTask: (state, action) => {
      const { id, newState } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.state = newState; // Update the task's state
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;

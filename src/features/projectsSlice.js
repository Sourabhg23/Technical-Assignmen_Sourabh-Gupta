import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        tasks: [],
      });
    },
    updateProject: (state, action) => {
      const index = state.findIndex((project) => project.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    },
    
  },
});

export const { addProject, updateProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;

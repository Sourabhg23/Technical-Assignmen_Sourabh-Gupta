import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'team',
  initialState: [],
  reducers: {
    addMember: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        role: action.payload.role,
        email: action.payload.email,
      });
    },
    updateMember: (state, action) => {
      const index = state.findIndex((member) => member.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    removeMember: (state, action) => {
      return state.filter((member) => member.id !== action.payload.id);
    },
  },
});

export const { addMember, updateMember, removeMember } = teamSlice.actions;
export default teamSlice.reducer;

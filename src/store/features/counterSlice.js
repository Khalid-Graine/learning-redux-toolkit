// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice for the counter feature
const counterSlice = createSlice({
  
  name: 'counter',

  // Initial state for the counter slice
  initialState: {
    count: 0, // Initial value of the counter
  },

  // Reducer functions to handle state changes
  reducers: {
   
    increment: (state) => {
      state.count += 1;
    },

  
    decrement: (state) => {
      state.count -= 1;
    },

    // Reset the counter value to 0
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export individual action creators for the reducers
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer function for the counter slice
export default counterSlice.reducer;

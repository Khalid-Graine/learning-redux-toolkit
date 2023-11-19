// Import createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice for the counter feature
const counterSlice = createSlice({
  // Name of the slice, used in the Redux store
  name: 'counter',

  // Initial state for the counter slice
  initialState: {
    value: 0, // Initial value of the counter
  },

  // Reducer functions to handle state changes
  reducers: {
    // Increment the counter value by 1
    increment: (state) => {
      state.value += 1;
    },

    // Decrement the counter value by 1
    decrement: (state) => {
      state.value -= 1;
    },

    // Reset the counter value to 0
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export individual action creators for the reducers
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer function for the counter slice
export default counterSlice.reducer;

// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './features/counterSlice';
import userSlice from './features/user';
import colorSlice from "./features/color"
import cartSlice from './features/cartSlice';
// Create the Redux store by combining reducers
const store = configureStore({
  // Define reducers for different slices of the state
  reducer: {
    counter: counterReducer, // Add the counter slice reducer
    user: userSlice, // Add the user slice reducer
    color: colorSlice,
    cart: cartSlice
    // Add other slices here if needed
  },
});

// Export the configured Redux store
export default store;

import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'test'
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
          }
    }
})
export const {change} = userSlice.actions;
export default userSlice.reducer;
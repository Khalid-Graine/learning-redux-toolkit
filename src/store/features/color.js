import { createSlice } from "@reduxjs/toolkit";


const colorSlice = createSlice({
    name: 'color',
    
    initialState: {
        color: 'blue'
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        }
    }
})






export const {changeColor} = colorSlice.actions;
export default colorSlice.reducer;

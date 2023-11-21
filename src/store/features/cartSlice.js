import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../cartItems'
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLeading: true,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: function r(state) {
            state.cartItems = [];
        }
    }
})

export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;
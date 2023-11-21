import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLeading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: function r(state) {
      state.cartItems = [];
    },
    deleteItem: (state, action) => {
      let id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increase: (state,action) => {
       let id = action.payload
       let item = state.cartItems.find((e) => e.id == id);
       item.amount++
    }
  },
});

export const { clearCart, deleteItem,increase } = cartSlice.actions;
export default cartSlice.reducer;

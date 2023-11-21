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
  },
});

export const { clearCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

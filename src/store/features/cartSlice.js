import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 0,
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
       
    },
    decrease: (state,action) => {
        let id = action.payload;
        let item = state.cartItems.find((e) => e.id == id);
        if(item.amount>0) {
            item.amount--
        }
    },
    calculTotal: (state) => {
       let total = 0;
       state.cartItems.forEach((item) => {
       total = total + item.price * item.amount;
       });
       state.total = total.toFixed(2);
    },
    calculAmount: (state) => {
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount
      })
      state.amount = amount;
    }
  },
});

export const { clearCart, deleteItem,increase,decrease,calculTotal, calculAmount } = cartSlice.actions;
export default cartSlice.reducer;

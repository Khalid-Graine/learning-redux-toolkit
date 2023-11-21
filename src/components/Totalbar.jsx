import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/features/cartSlice";

const Totalbar = () => {
    const dispatch = useDispatch()
  return (
    <div className="container flex flex-col gap-4 mb-4">
      <div className="w-full h-[1px] bg-black mt-4"></div>
      <div className="flex justify-between font-semibold ">
        <p>Total</p>
        <p>0$</p>
      </div>
      <button onClick={() => dispatch(clearCart())} className="text-red-500  mx-auto border border-red-500 px-4 py-1 rounded-sm">Clear</button>
    </div>
  );
};

export default Totalbar;

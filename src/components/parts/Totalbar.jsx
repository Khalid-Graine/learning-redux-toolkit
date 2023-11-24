import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/features/cartSlice";

const Totalbar = () => {
    const dispatch = useDispatch()
    const total = useSelector((store) => store.cart.total);
   
  return (
    <div className="container  flex flex-col gap-4 my-4">
      {/* <div className="w-full  h-[1px] bg-black mt-4"></div> */}
      <div className="flex bg-white py-2 px-1 rounded-sm justify-between font-semibold ">
        <p>Total</p>
        <p>{total}$</p>
      </div>
      <button onClick={() => dispatch(clearCart())} className="text-red-500 w-full mx-auto border border-red-500 px-4 py-1 rounded-sm hover:bg-red-500 hover:text-white">Clear All</button>
    </div>
  );
};

export default Totalbar;

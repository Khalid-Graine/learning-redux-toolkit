import React from "react";
import { deleteItem,increase,decrease } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <li  className="flex justify-between border p-2">
    <div className="flex items-center  gap-4">
      <div className=" shadow-md p-1 rounded-sm flex items-center justify-center w-20 h-20 overflow-hidden">
        <img
          src={item.img}
          className="max-w-full max-h-full object-center object-cover"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 items-start ">
        <h3 className="font-semibold"> {item.title}</h3>
        <p>{item.price}$</p>
        <button onClick={() => dispatch(deleteItem(item.id))} className="bg-[#2C195A] text-white px-3 rounded-sm ">delete</button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between text-2xl">
      <span onClick={() => dispatch(increase(item.id))} className="cursor-pointer">
        <IoChevronUpSharp />
      </span>
      <p className="font-semibold text-2xl"> {item.amount}</p>
      <span onClick={() => dispatch(decrease(item.id))} className=" cursor-pointer">
        <IoChevronDownSharp />
      </span>
    </div>
  </li>
  );
};

export default CartItem;

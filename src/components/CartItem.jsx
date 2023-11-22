import React from "react";
import { deleteItem,increase,decrease } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <li  className="flex justify-between">
    <div className="flex  gap-4">
      <div className=" shadow-md p-1 rounded-sm flex items-center justify-center w-20 h-20 overflow-hidden">
        <img
          src={item.img}
          className="max-w-full max-h-full object-center object-cover"
          alt=""
        />
      </div>

      <div>
        <h3 className="font-semibold"> {item.title}</h3>
        <p>{item.price}</p>
        <button onClick={() => dispatch(deleteItem(item.id))} className="text-red-600">delete</button>
      </div>
    </div>
    <div>
      <span onClick={() => dispatch(increase(item.id))} className=" cursor-pointer">+</span>
      <p> {item.amount}</p>
      <span onClick={() => dispatch(decrease(item.id))} className=" cursor-pointer">-</span>
    </div>
  </li>
  );
};

export default CartItem;

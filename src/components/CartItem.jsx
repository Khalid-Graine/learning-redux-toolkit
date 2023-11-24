import React from "react";
import { deleteItem, increase, decrease } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between  p-2">
      {/* child 1 */}
      
      <div className="flex items-center  gap-1">
        {/* picture of the product */}
        <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
          <img
            src={item.img}
            className="max-w-full max-h-full object-center object-cover"
            alt=""
          />
        </div>

        {/* information about the product */}
        <div className="flex flex-col gap-2 items-start ">
          <h3 className="font-semibold"> {item.title}</h3>
          <div className="text-[#195A1D] flex gap-1 font-bold">
            <p>{item.price}</p>
            <span>$</span>
          </div>
          <button
            onClick={() => dispatch(deleteItem(item.id))}
            className="bg-[#2C195A] text-white px-3 rounded-sm "
          >
            delete
          </button>
        </div>
      </div>

      {/* child 2 */}
      <div className="flex flex-col items-center justify-between text-2xl">
        <IoChevronUpSharp
          onClick={() => dispatch(increase(item.id))}
          className="cursor-pointer active:text-gray-400"
        />

        <p className="font-semibold text-2xl">{item.amount}</p>

        <IoChevronDownSharp
          onClick={() => dispatch(decrease(item.id))}
          className=" cursor-pointer active:text-gray-400"
        />
      </div>
    </li>
  );
};

export default CartItem;

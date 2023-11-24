import React from "react";
import { deleteItem, increase, decrease } from "../store/features/cartSlice";
import { useDispatch } from "react-redux";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between  p-2 rounded-sm bg-white">

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
         
          <div className="flex  flex-col">
          <h3 className=" uppercase"> {item.title}</h3>
           <div className="flex text-[#195A1D]">
           <p>{item.price} </p>
           <span className="ml-[1px]">$</span>
           </div> 
          </div>
         
            <MdDelete onClick={() => dispatch(deleteItem(item.id))}
            className=" text-gray-300 text-2xl hover:cursor-pointer hover:text-gray-400" />
        
        </div>
      </div>

      {/* child 2 */}
      <div className="flex flex-col items-center justify-between ">
        <IoChevronUpSharp
          onClick={() => dispatch(increase(item.id))}
          className="cursor-pointer active:text-gray-400"
        />

        <p className="bg-gray-200 px-2 py-1 rounded-sm">{item.amount}</p>

        <IoChevronDownSharp
          onClick={() => dispatch(decrease(item.id))}
          className=" cursor-pointer active:text-gray-400"
        />
      </div>
    </li>
  );
};

export default CartItem;

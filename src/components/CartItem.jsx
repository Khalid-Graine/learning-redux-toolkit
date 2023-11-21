import React from "react";

const CartItem = ({ item }) => {
  return (
    <li key={item.id} className="flex justify-between">
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
      </div>
    </div>
    <div>
      <span>+</span>
      <p> {item.amount}</p>
      <span>-</span>
    </div>
  </li>
  );
};

export default CartItem;

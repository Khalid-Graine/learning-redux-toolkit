import React from "react";
import { CartIcon } from "../../icons";
import { useSelector } from "react-redux";
import { FaStoreAlt } from "react-icons/fa";
const NavBar = () => {
  const { amount } = useSelector((s) => s.cart);
  return (
    <div className=" bg-[#195851] py-2 text-gray-50">
      <div className="container flex justify-between items-center">
        <div className="flex gap-2">
          <FaStoreAlt className="text-2xl" />
          <span className="text-lg">store</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-xl mt-1">{amount}</span>
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

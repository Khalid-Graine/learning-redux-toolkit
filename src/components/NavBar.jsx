import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { FaStoreAlt } from "react-icons/fa";
const NavBar = () => {
  const {amount } = useSelector((s) => s.cart)
  return (
    <div className=" bg-blue-400">
      <div className="container flex justify-between items-center">
      <div className="flex gap-2">
       <FaStoreAlt className="text-2xl" />
       <span className="">store</span>
      </div>
      <div className="flex items-center gap-1">
     <span className=" font-bold text-2xl"> {amount}</span>
      <CartIcon />

      </div>
      </div>
     
    </div>
  );
};

export default NavBar;

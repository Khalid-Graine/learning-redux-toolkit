import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {amount } = useSelector((s) => s.cart)
  return (
    <div className=" bg-blue-400">
      <div className="container flex justify-between items-center">
      <p>LOGo</p>
      <div className="flex items-center gap-1">
     <span className=" font-bold text-2xl"> {amount}</span>
      <CartIcon />
      </div>
      </div>
     
    </div>
  );
};

export default NavBar;

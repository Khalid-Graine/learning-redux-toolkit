import React from "react";
import NoItemsMessage from "./NoItemsMessage";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const ItemsContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const n = cartItems.length;
  return (
    <>
      {n < 1 && <NoItemsMessage />}
      {n > 0 && (
        <div className="mt-5">
          <ul className="container flex flex-col gap-10">
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ItemsContainer;

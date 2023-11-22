import React, {useEffect} from "react";
import NoItemsMessage from "./NoItemsMessage";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculTotal } from "../store/features/cartSlice";
import { calculAmount } from "../store/features/cartSlice";
const ItemsContainer = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const n = cartItems.length;

  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(calculTotal());
   dispatch(calculAmount());
  },[cartItems])

  return (
    <>
      <h2 className="text-center font-bold text-xl my-2 mt-3">Your Bag</h2>
      {n < 1 && <NoItemsMessage />}
      {n > 0 && (
        <div className="mt-5">
          <ul className="container flex flex-col gap-10">
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item}  />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ItemsContainer;

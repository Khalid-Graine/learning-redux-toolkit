import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculTotal, calculAmount } from "../store/features/cartSlice";
import NavBar from "../components/parts/NavBar";
import Totalbar from "../components/parts/Totalbar";
import NoItemsMessage from "../components/NoItemsMessage";
import CartItem from "../components/CartItem";





function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const n = cartItems.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculTotal());
    dispatch(calculAmount());
  }, [cartItems]);

  return (
    <div className="w-full md:w-6/12 mx-auto">
      <NavBar />
      <div>
        <h2 className="container  text-2xl  mt-4">Your Bag :</h2>
        {n < 1 && <NoItemsMessage />}
        {n > 0 && (
          <div className="mt-">
            <ul className="container flex flex-col gap-1">
              {cartItems.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </ul>
          </div>
        )}
      </div>
      <Totalbar />
    </div>
  );
}

export default App;

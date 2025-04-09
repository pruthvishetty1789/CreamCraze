import React from "react";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

const OrderPage = () => {
  return (
    <div>
      <h2 className="text-center my-4">Your Order</h2>
      <Cart />
      <Checkout />
    </div>
  );
};

export default OrderPage;

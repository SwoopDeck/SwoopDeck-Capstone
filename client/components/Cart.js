import { useState } from "react";
import React from "react";
import StripeContainer from "./StripeContainer";
import Display from "./Display";

function Cart() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="Cart">
      <h1>
        <Display />
      </h1>
      <h1>Load total</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$25.00</h3>

          <button onClick={() => setShowItem(true)}>
            Purchase Load Ticket
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

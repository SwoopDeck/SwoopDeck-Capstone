import { useState } from "react";
import React from "react";
import StripeContainer from "./StripeContainer";
import Display from "./Display";

function Cart() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="flex-right">
    <div className="right-top-column" style={{justifyContent: 'space-evenly'}}>
    {/* <div className="Cart"> */}
      <h1>
        <Display />
      </h1>
      <h3>Full Altitude Jump Ticket</h3>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$30.00</h3>

          <button onClick={() => setShowItem(true)}>
            Purchase Jump Ticket
          </button>
        </>
      )}
    </div>
    </div>
    // </div>
  );
}

export default Cart;
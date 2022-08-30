import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const redirect = () => {
    history.push('/alljumps');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    let STRIPE_SECRET_TEST="sk_test_51LcBPfJnsV3y1MlNQynKOFOIw6lsDyaqoMOaLSSC3kQsyTrpfX9LwREGtifIfdyokOA2duaJHGxFbty6VmgPK6vM00bVjniCak"
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/api/stripe/payment", {
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
        redirect();
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div style={{width: '100%', display: 'flex'}}>
      {!success ? (
        <form onSubmit={handleSubmit} style={{width: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button
          type="submit" 
          style={{width: '25%'}}>Join Load</button>
        </form>
      ) : (
        <div>
          <h2>
            Jump ticket purchased
          </h2>
        </div>
      )}
    </div>
  );
}
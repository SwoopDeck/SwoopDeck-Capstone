import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LbRL1JS8mTLWR5ejjJt0IMngYfOJZvBjIQUPy2rUGpN8HPRs7SnLfZz8aeFwmYTkIHafF3i89IRf5apdcCvrrL700E0oPQaLx";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
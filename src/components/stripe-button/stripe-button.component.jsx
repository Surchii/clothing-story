import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51L1SzIKfjK2bqddP2amotXFZuUjvGB9Pms61coe1oniF4NPhaUh7zGVzO3ZiT8bs9VFd7WMcDETTPTpDzBLD8znt00e0fYxK59";
  const onToken = (token) => {
    console.log(token);
    alert("Betalningen är klart");
  };
  return (
    <StripeCheckout
      label="Betala Nu"
      name="Clothing-Story Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Totala priset är $${price}`}
      amount={priceForStripe}
      panelLabel="Betala Nu"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;

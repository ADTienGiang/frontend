import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = () => {
  const publishableKey =
    "pk_test_51MkSgrIokpG9uh4wtfpqpK566F9UBMUJPqNX3jKXnFW6f5HHBHPWyFHIx6yXhqpSLyHxX9NqT17BlaFdYiIdNhlo00nkE2jY3L";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Thanh toán"
      name="Điền thông tin"
      billingAddress
      shippingAddress
      amount={1000}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
// Email: example@example.com
// Card Number: 4242 4242 4242 4242
// Expiration Date: 12/23
// CVC: 123
// Postal Code: 12345
export default StripeCheckoutButton;

import React from "react";

import CustomButton from "./../custom-button/custom-button.composnent";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};
export default CartDropDown;

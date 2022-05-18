import React from "react";
import { connect } from "react-redux";

import CustomButton from "./../custom-button/custom-button.composnent";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "./../../redux/cart/cart.selectors";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const matStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(matStateToProps)(CartDropDown);

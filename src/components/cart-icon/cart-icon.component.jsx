import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "./../../redux/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  const toggleCartHiddenhandler = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-icon" onClick={toggleCartHiddenhandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

export default CartIcon;

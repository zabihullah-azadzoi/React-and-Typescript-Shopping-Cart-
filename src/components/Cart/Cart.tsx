import { ReactElement, useContext, useState } from "react";
import classes from "./Cart.module.css";

import { cartContext } from "../../context/CartContext";
import { formatNumber } from "../../utils/formatNumber";
import CartItem from "./CartItem";

const initialContentState = <p>No Product is available in the Cart!</p>;

const Cart = (): ReactElement => {
  const [content, setContent] = useState<JSX.Element>(initialContentState);
  const { cart, totalItems, totalPrice, submitCartHandler } =
    useContext(cartContext);

  const submitHandler = () => {
    submitCartHandler();
    setContent(
      <p className={classes.placeOrderMessage}>Thanks you for placing Order.</p>
    );
  };

  return (
    <div className={classes.cart}>
      {cart.length > 0
        ? cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })
        : content}
      <div className={classes.totalsContainer}>
        <span>Total Items: {totalItems}</span>
        <span>Total Price: {formatNumber(totalPrice)}</span>
        <button
          className={classes.placeOrderButton}
          onClick={submitHandler}
          disabled={cart.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

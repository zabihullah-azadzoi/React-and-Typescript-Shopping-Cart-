import React, { ChangeEvent, ReactElement, useContext } from "react";
import classes from "./Cart.module.css";
const image1: string = new URL("../../assets/img/watch1.jpg", import.meta.url)
  .href;

import { formatNumber } from "../../utils/formatNumber";
import { cartContext, ProductType } from "../../context/CartContext";

const CartItem = ({ product }: { product: ProductType }): ReactElement => {
  const { increaseQuantityHandler, removeFromCartHandler } =
    useContext(cartContext);

  const optionNumbersArray: number[] = [];
  for (let index = 1; index <= 20; index++) {
    optionNumbersArray.push(index);
  }

  return (
    <div className={classes.cartItem}>
      <img
        className={classes.productImage}
        src={image1.replace("watch1", `watch${product.id}`)}
      />
      <span>{product.name}</span>
      <span>{formatNumber(product.price)}</span>
      <select
        className={classes.selectMenu}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          increaseQuantityHandler({
            ...product,
            quantity: Number(e.target.value),
          })
        }
      >
        {optionNumbersArray.map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <span>{formatNumber(product.price * product.quantity)}</span>
      <button onClick={() => removeFromCartHandler(product)}>X</button>
    </div>
  );
};

export default CartItem;

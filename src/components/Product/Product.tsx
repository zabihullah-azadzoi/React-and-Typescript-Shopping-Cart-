import React, { ReactElement, useContext, useState } from "react";
import classes from "./Product.module.css";
const image1: string = new URL("../../assets/img/watch1.jpg", import.meta.url)
  .href;

import { ProductPropsType } from "../../context/ProductsContext";
import { cartContext, ProductType } from "../../context/CartContext";

const Product = ({ product }: ProductPropsType): ReactElement => {
  const [cartButtonText, setCartButtonText] = useState<string>("Add to Cart");
  const { addToCartHandler } = useContext(cartContext);

  const addToCart = (product: ProductType) => {
    addToCartHandler(product);
    setCartButtonText("Added");
  };

  return (
    <div className={classes.productContainer}>
      <h5>{product.name}</h5>
      <img
        className={classes.productImage}
        src={image1.replace("watch1", `watch${product.id}`)}
      />
      <span>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(Number(product.price))}
      </span>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        {cartButtonText}
      </button>
    </div>
  );
};

export default Product;

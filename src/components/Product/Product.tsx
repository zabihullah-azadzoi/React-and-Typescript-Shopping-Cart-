import React, { ReactElement } from "react";
import classes from "./Product.module.css";
const image1: string = new URL("../../assets/img/watch1.jpg", import.meta.url)
  .href;

import { ProductPropsType } from "../../context/ProductsContext";

const Product = ({ product }: ProductPropsType): ReactElement => {
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
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;

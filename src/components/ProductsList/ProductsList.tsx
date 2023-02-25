import React, { ReactElement, useContext } from "react";
import classes from "./ProductsList.module.css";
import Product from "../Product/Product";

import {
  productContext,
  InitialStateType,
} from "../../context/ProductsContext";

const ProductsList = (): ReactElement => {
  const { products } = useContext<InitialStateType>(productContext);
  return (
    <div className={classes.productsListContainer}>
      {products.map((product): ReactElement => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;

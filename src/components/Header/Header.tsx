import React, { ReactElement, useContext } from "react";
import classes from "./Header.module.css";
import { cartContext } from "../../context/CartContext";
import { formatNumber } from "../../utils/formatNumber";

type HeaderPropsType = { viewCart: boolean; setViewCart: () => void };
const Header = ({ viewCart, setViewCart }: HeaderPropsType): ReactElement => {
  const { totalItems, totalPrice } = useContext(cartContext);

  return (
    <header className={classes.header}>
      <div className={classes.title}>Programmeraan Co.</div>
      <div className={classes.headerPricesContainer}>
        <span>Total Items: {totalItems}</span>
        <span>Total Price: {formatNumber(totalPrice)}</span>
        <button onClick={setViewCart}>
          {viewCart ? "View Products" : "View Cart"}
        </button>
      </div>
    </header>
  );
};

export default Header;

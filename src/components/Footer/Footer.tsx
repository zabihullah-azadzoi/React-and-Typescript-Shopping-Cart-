import React, { ReactElement, useContext } from "react";
import classes from "./Footer.module.css";
import { cartContext } from "../../context/CartContext";
import { formatNumber } from "../../utils/formatNumber";

const Footer = ({ viewCart }: { viewCart: boolean }): ReactElement => {
  const { totalItems, totalPrice } = useContext(cartContext);
  return (
    <footer>
      <div className={classes.footerPricesContainer}>
        {!viewCart && (
          <>
            <span>Total Items: {totalItems}</span>
            <span>Total Price: {formatNumber(totalPrice)}</span>
          </>
        )}
        <span>Shopping Cart &copy; 2022</span>
      </div>
    </footer>
  );
};

export default Footer;

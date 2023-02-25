import React, { ReactElement } from "react";
import classes from "./Footer.module.css";

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className={classes.footerPricesContainer}>
        <span>Total Items: 0</span>
        <span>Total Price: $0.00</span>
        <span>Shopping Cart &copy; 2022</span>
      </div>
    </footer>
  );
};

export default Footer;

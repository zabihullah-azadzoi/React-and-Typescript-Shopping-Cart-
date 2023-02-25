import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>Programmeraan Co.</div>
      <div className={classes.headerPricesContainer}>
        <span>Total Items: 0</span>
        <span>Total Price: $0.00</span>
        <button>View Cart</button>
      </div>
    </header>
  );
};

export default Header;

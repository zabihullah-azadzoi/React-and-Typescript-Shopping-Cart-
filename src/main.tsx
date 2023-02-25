import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets//index.css";

import ProductContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets//index.css";

import ProductContextProvider from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);

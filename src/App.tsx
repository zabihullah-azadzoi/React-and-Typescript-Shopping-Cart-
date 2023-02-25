import React, { ReactElement, ReactNode, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

const App = (): ReactElement => {
  const [viewCart, setViewCart] = useState<boolean>(false);
  return (
    <div className="App">
      <Header
        viewCart={viewCart}
        setViewCart={() => setViewCart((prevState) => !prevState)}
      />
      {viewCart ? <Cart /> : <ProductsList />}
      <Footer viewCart={viewCart} />
    </div>
  );
};

export default App;

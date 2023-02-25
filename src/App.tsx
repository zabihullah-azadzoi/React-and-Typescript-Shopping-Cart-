import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductsList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import ProductListContainer from "../product/product_list_container";

const Splash = () => (
  <div className="container">
    <GreetingContainer />
    <ProductListContainer />
  </div>
);
export default Splash;

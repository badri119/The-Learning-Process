import React from "react";

const Shop = ({ children }) => {
  return (
    <section id="shop">
      <ul id="products">{children}</ul>
    </section>
  );
};

export default Shop;

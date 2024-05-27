import { React } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { CartContextProvider } from "./store/Shopping-cart-context";

const Main2 = () => {
  return (
    <>
      <CartContextProvider>
        <div id="background-main">
          <Header />
          <Shop>
            {DUMMY_PRODUCTS.map((product) => (
              <li key={product.id}>
                <Product {...product} />
              </li>
            ))}{" "}
          </Shop>
        </div>
      </CartContextProvider>
    </>
  );
};

export default Main2;

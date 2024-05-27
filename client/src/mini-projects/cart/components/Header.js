import { useRef } from "react";
import logo from "../../images/logo.png";
import CartModal from "./CartModal";
import { CartContext } from "../store/Shopping-cart-context";
import { useContext } from "react";

export default function Header() {
  const { items } = useContext(CartContext);
  const modal = useRef();

  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    modal.current.open();
  };

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

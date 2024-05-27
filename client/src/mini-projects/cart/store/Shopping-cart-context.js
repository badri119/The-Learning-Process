import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

//creating a dummy context where I'll add whatever is required
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemToCart: () => {},
});

const shoppingCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, //not needed atm but if we have a complex state with more values, it is required so we don't lost anything
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  // creating a useReducer
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  // function to add item to card
  const handleAddItemToCart = (id) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  };

  // function to update item quantity in cart:
  const handleUpdateCartItem = (productId, amount) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId: productId,
        amount: amount,
      },
    });
  };

  //creating the actual values that's been created via useContext
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemToCart: handleUpdateCartItem,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

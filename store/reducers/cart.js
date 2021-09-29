import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ActionSheetIOS } from "react-native";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      if (state.items[payload.id]) {
        const updatedCartItem = new CartItem(
          state.items[payload.id].quantity + 1,
          payload.price,
          payload.title,
          state.items[payload.id].sum + payload.price
        );
        return {
          ...state,
          items: { ...state.items, [payload.id]: updatedCartItem },
          totalAmount: state.totalAmount + payload.price,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          payload.price,
          payload.title,
          payload.price
        );
        console.log("NEW CART ITEM >> ", newCartItem);
        return {
          ...state,
          items: { ...state.items, [payload.id]: newCartItem },
          totalAmount: state.totalAmount + payload.price,
        };
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[payload];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = { ...state.items, [payload]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[payload];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    default:
      return state;
  }
};

import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      if (state.items[payload.id]) {
        const updatedCartItem = new CartItem(
          state.items[payload.id],
          quantity + 1,
          payload.price,
          payload.title,
          state.items[payload.id].sum + payload.price
        );
        return {
          ...state,
          items: { ...state.items, [payload.id]: updatedCartItem },
          totalAmount: state.totalAmount + payload.totalAmount,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          payload.price,
          payload.title,
          payload.price
        );
        return {
          ...state,
          items: { ...state.items, [payload.id]: newCartItem },
          totalAmount: state.totalAmount + payload.totalAmount,
        };
      }

    default:
      return state;
  }
};

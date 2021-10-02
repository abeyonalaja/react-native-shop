import Order from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState = {
  orders: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        payload.items,
        payload.amount,
        new Date()
      );
      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};

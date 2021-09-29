import { ADD_ORDER } from "../actions/orders";

const initialState = {
  orders: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
      return { ...state, ...payload };

    default:
      return state;
  }
};

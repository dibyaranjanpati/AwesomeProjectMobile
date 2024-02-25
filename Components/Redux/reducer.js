import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      let result = state.filter((item) => item.mobile != action.payload);
      return [...result];

    default:
      return state;
    // return [...state, action.payload];
  }
};

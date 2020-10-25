import {
  RECEIVE_FILTERED_PRICE,
  CLEAR_FILTERS,
} from "../actions/product_actions";

const priceFilterReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_PRICE:
      return action.price;
    case CLEAR_FILTERS:
      return "";
    default:
      return state;
  }
};

export default priceFilterReducer;

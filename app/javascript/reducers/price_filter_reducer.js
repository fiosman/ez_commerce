import { RECEIVE_FILTERED_PRICE } from "../actions/product_actions";

const priceFilterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_PRICE:
      return action.price;
    default:
      return state;
  }
};

export default priceFilterReducer;

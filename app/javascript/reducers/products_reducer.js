import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        [action.product.id]: action.product,
      });
    case REMOVE_PRODUCT:
      let currentState = Object.assign({}, state);
      delete currentState[action.productId];
      return currentState;
    default:
      return state;
  }
};

export default productsReducer;

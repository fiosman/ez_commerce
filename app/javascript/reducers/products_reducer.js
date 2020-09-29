import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    default:
      return state;
  }
};

export default productsReducer;

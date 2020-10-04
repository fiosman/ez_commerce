import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/product_actions";
import { REMOVE_CATEGORY } from "../actions/category_actions";

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
    case REMOVE_CATEGORY:
      let newState = Object.assign({}, state);

      for (let key in newState) {
        if (newState[key].category_id == action.categoryId) {
          delete newState[key];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default productsReducer;

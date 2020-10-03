import {
  START_LOADING_ALL_CATEGORIES,
  START_LOADING_SINGLE_CATEGORY,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
} from "../actions/category_actions";

import {
  START_LOADING_ALL_PRODUCTS,
  START_LOADING_SINGLE_PRODUCT,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
} from "../actions/product_actions";

const initialState = {
  categories: false,
  products: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_ALL_CATEGORIES:
      return Object.assign({}, state, { categories: true });
    case START_LOADING_ALL_PRODUCTS:
      return Object.assign({}, state, { products: true });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { products: false });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, { categories: false });
    default:
      return state;
  }
};

export default loadingReducer;

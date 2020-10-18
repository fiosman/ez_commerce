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
  RECEIVE_SINGLE_PRODUCT,
} from "../actions/product_actions";

const initialState = {
  index: {
    categories: false,
    products: false,
  },
  detail: {
    product: false,
  },
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_ALL_CATEGORIES:
      return Object.assign({}, state, { index: { categories: true } });
    case START_LOADING_ALL_PRODUCTS:
      return Object.assign({}, state, { index: { products: true } });
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { index: { products: false } });
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, { index: { categories: false } });
    case RECEIVE_SINGLE_PRODUCT:
      return Object.assign({}, state, { detail: { product: false } });
    case START_LOADING_SINGLE_PRODUCT:
      return Object.assign({}, state, { detail: { product: true } });
    default:
      return state;
  }
};

export default loadingReducer;

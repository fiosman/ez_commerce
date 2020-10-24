import {
  RECEIVE_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/product_actions";
import { REMOVE_CATEGORY } from "../actions/category_actions";

import { RECEIVE_REVIEW } from "../actions/review_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_SINGLE_PRODUCT:
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
    case RECEIVE_REVIEW:
      const currentReviewIds = state[action.review.product_id].reviewIds;
      return {
        ...state,
        [action.review.product_id]: {
          ...state[action.review.product_id],
          reviewIds: [...currentReviewIds, action.review.id],
          avgRating: action.review.average_rating,
        },
      };
    default:
      return state;
  }
};

export default productsReducer;

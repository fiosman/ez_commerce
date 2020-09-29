import { RECEIVE_PRODUCT_ERRORS } from "../actions/product_actions";
import { REMOVE_PRODUCT_ERRORS } from "../actions/product_actions";

const productErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case REMOVE_PRODUCT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default productErrorsReducer;

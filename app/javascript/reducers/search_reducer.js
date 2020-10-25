import {
  RECEIVE_SEARCHED_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/product_actions";

const searchReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_PRODUCTS:
      return action.searchTerm;
    case CLEAR_FILTERS:
      return "";
    default:
      return state;
  }
};

export default searchReducer;

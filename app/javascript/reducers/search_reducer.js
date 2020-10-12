import { RECEIVE_SEARCHED_PRODUCTS } from "../actions/product_actions";

const searchReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_PRODUCTS:
      return action.searchTerm;
    default:
      return state;
  }
};

export default searchReducer;

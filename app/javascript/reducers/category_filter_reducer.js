import { RECEIVE_FILTERED_CATEGORIES } from "../actions/product_actions";

const categoryFilterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoryFilterReducer;

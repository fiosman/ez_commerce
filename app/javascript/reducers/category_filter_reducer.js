import {
  RECEIVE_FILTERED_CATEGORIES,
  CLEAR_FILTERS,
} from "../actions/product_actions";

const categoryFilterReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_CATEGORIES:
      return action.category;
    case CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
};

export default categoryFilterReducer;

import {
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
  REMOVE_CATEGORY,
} from "../actions/category_actions";

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, action.categories);
    case RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        [action.category.id]: action.category,
      });
    case REMOVE_CATEGORY:
      let currentState = Object.assign({}, state);
      delete currentState[action.categoryId];
      return currentState;
    default:
      return state;
  }
};

export default categoriesReducer;

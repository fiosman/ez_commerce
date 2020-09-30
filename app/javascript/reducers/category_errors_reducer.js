import { RECEIVE_CATEGORY_ERRORS } from "../actions/category_actions";
import { REMOVE_CATEGORY_ERRORS } from "../actions/category_actions";

const categoryErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY_ERRORS:
      return action.errors;
    case REMOVE_CATEGORY_ERRORS:
      return [];
    default:
      return state;
  }
};

export default categoryErrorsReducer;

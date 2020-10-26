import { RECEIVE_REVIEW_ERRORS } from "../actions/review_actions";
import { REMOVE_REVIEW_ERRORS } from "../actions/review_actions";

const reviewErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case REMOVE_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

export default reviewErrorsReducer;

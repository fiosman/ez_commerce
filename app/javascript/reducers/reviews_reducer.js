import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      let currentState = Object.assign({}, state);
      delete currentState[action.reviewId];
      return currentState;
    default:
      return state;
  }
};

export default reviewsReducer;

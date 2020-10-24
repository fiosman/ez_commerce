import { postReview, deleteReview } from "../util/review_api_util";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const LOADING_REVIEWS = "LOADING_REVIEWS";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

export const wipeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS,
});

export const startLoadingReviews = () => ({
  type: LOADING_REVIEWS,
});

export const addReview = (review) => (dispatch) =>
  postReview(review)
    .then((review) => dispatch(receiveReview(review)))
    .catch((err) => {
      dispatch(receiveReviewErrors(err.responseJSON));
      throw err;
    });

export const removeReview = (reviewId, productId) => (dispatch) =>
  deleteReview(reviewId, productId).then((review) =>
    dispatch(wipeReview(review.id))
  );

import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
} from "../actions/review_actions";
import reviewsReducer from "../reducers/reviews_reducer";

describe("Reviews Reducer", () => {
  const state = {
    1: {
      author: "test",
      body: "bad review",
      id: 1,
      product_id: 2,
      rating: 5,
    },
  };
  test("handles default state", () => {
    expect(reviewsReducer(state, { type: "none" })).toEqual(state);
  });
  test("handles RECEIVE_REVIEW", () => {
    const payLoad = {
      review: {
        id: 3,
        product_id: 5,
        rating: 3,
        body: "not bad",
        author: "weep",
      },
    };
    expect(
      reviewsReducer(state, {
        type: RECEIVE_REVIEW,
        review: payLoad.review,
      })
    ).toEqual({ ...state, [payLoad.review.id]: payLoad.review });
  });
});

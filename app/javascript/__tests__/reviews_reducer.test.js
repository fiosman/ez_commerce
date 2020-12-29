import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import reviewsReducer from "../reducers/reviews_reducer";

describe("Reviews Reducer", () => {
  const state = {
    1: {
      author: "test",
      body: "bad review",
      id: 1,
      product_id: 2,
      rating: 1,
    },
    2: {
      author: "badman",
      body: "good review",
      id: 2,
      product_id: 6,
      rating: 4,
    },
  };

  it("handles default state", () => {
    expect(reviewsReducer(state, { type: "none" })).toEqual(state);
  });

  it("handles RECEIVE_REVIEW", () => {
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

  it("handles REMOVE_REVIEW", () => {
    expect(
      reviewsReducer(state, {
        type: REMOVE_REVIEW,
        reviewId: state["1"].id,
      })
    ).toEqual({ [state["2"].id]: state["2"] });
  });
});

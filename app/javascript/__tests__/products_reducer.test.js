import {
  REMOVE_PRODUCT,
  RECEIVE_SINGLE_PRODUCT,
} from "../actions/product_actions";

import { REMOVE_CATEGORY } from "../actions/category_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

import productsReducer from "../reducers/products_reducer";

describe("Products Reducer", () => {
  const state = {
    1: {
      avgRating: 4,
      body: "Experience the power",
      category_id: 2,
      id: 1,
      price: "199.99",
      reviewIds: [1, 2, 3],
      title: "Macbook Pro",
    },
    2: {
      avgRating: 4,
      body: "the best book",
      category_id: 4,
      id: 2,
      price: "19.99",
      reviewIds: [5],
      title: "Harry Potter",
    },

    3: {
      avgRating: 4,
      body: "microphone",
      category_id: 4,
      id: 3,
      price: "25.99",
      reviewIds: [1],
      title: "Simple Microphone",
    },
  };

  test("handles RECEIVE_SINGLE_PRODUCT", () => {
    const payLoad = {
      product: {
        id: 4,
        category_id: 4,
        reviewIds: [],
        price: "24.99",
        avgRating: 0,
        body: "great product",
        title: "the awesome product",
      },
    };
    expect(
      productsReducer(state, {
        type: RECEIVE_SINGLE_PRODUCT,
        product: payLoad.product,
      })
    ).toEqual({
      ...state,
      [payLoad.product.id]: payLoad.product,
    });
  });

  test("handles REMOVE_PRODUCT", () => {
    expect(
      productsReducer(state, { type: REMOVE_PRODUCT, productId: 1 })
    ).not.toHaveProperty("1", state["1"]);
  });

  test("handles default", () => {
    expect(productsReducer(state, { type: "INVALID_ACTION" })).toEqual(state);
  });

  test("handles REMOVE_CATEGORY", () => {
    expect(
      productsReducer(state, { type: REMOVE_CATEGORY, categoryId: "4" })
    ).toEqual({ [state[1].id]: state[1] });
  });

  test("handles RECEIVE_REVIEW", () => {
    const review = {
      author: "fares",
      rating: 1,
      body: "bad",
      id: 11,
      product_id: 3,
    };
    const newState = productsReducer(state, {
      type: RECEIVE_REVIEW,
      review: review,
    });
    expect(newState["3"].reviewIds).toContain(review.id);
  });
});

import {
  RECEIVE_LINE_ITEM,
  REMOVE_LINE_ITEM,
  UPDATE_LINE_ITEM,
} from "../actions/line_item_actions";
import lineItemsReducer from "../reducers/line_items_reducer";

describe("LineItems Reducer", () => {
  const state = {
    1: {
      id: 1,
      cart_id: 3,
      product_id: 5,
      quantity: 4,
    },
    2: {
      id: 2,
      cart_id: 3,
      product_id: 7,
      quantity: 5,
    },
  };

  it("handles default state", () => {
    expect(lineItemsReducer(state, { type: "none" })).toEqual(state);
  });

  it("handles RECEIVE_LINE_ITEM", () => {
    const payLoad = {
      item: {
        id: 3,
        product_id: 8,
        cart_id: 3,
        quantity: 1,
      },
    };
    expect(
      lineItemsReducer(state, {
        type: RECEIVE_LINE_ITEM,
        item: payLoad.item,
      })
    ).toEqual({ ...state, [payLoad.item.id]: payLoad.item });
  });

  it("handles REMOVE_LINE_ITEM", () => {
    expect(
      lineItemsReducer(state, {
        type: REMOVE_LINE_ITEM,
        item: state["1"],
      })
    ).toEqual({ [state["2"].id]: state["2"] });
  });

  it("handles UPDATE_LINE_ITEM", () => {
    state["1"].quantity += 4;
    expect(
      lineItemsReducer(state, {
        type: UPDATE_LINE_ITEM,
        item: state["1"],
      })
    ).toEqual(state);
  });
});

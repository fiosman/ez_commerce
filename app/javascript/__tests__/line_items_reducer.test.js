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

  //   it("handles REMOVE_REVIEW", () => {
  //     expect(
  //       reviewsReducer(state, {
  //         type: REMOVE_REVIEW,
  //         reviewId: state["1"].id,
  //       })
  //     ).toEqual({ [state["2"].id]: state["2"] });
  //   });
});

// const lineItemsReducer = (state = {}, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_LINE_ITEM:
//       return Object.assign({}, state, { [action.item.id]: action.item });
//     case RECEIVE_ALL_LINE_ITEMS:
//       return Object.assign({}, state, action.items);
//     case REMOVE_LINE_ITEM:
//       let newState = Object.assign({}, state);
//       delete newState[action.item.id];
//       return newState;
//     case UPDATE_LINE_ITEM:
//       let updatedState = Object.assign({}, state);
//       updatedState[action.item.id] = action.item;
//       return updatedState;
//     default:
//       return state;
//   }
// };

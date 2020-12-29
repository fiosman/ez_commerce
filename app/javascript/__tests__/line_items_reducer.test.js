import {
  RECEIVE_ALL_LINE_ITEMS,
  RECEIVE_LINE_ITEM,
  REMOVE_LINE_ITEM,
  UPDATE_LINE_ITEM,
} from "../actions/line_item_actions";
import lineItemsReducer from "../reducers/line_items_reducer";

// describe("LineItems Reducer", () => {
//   test("has a default state", () => {
//     expect(
//       usersReducer(undefined, {
//         type: "non valid action type",
//       })
//     ).toEqual({});
//   });

//   test("can handle RECEIVE_CURRENT_USER", () => {
//     expect(
//       usersReducer(undefined, {
//         type: RECEIVE_CURRENT_USER,
//         currentUser: { id: 2, username: "test", isAdmin: false },
//       })
//     ).toEqual({
//       2: {
//         id: 2,
//         username: "test",
//         isAdmin: false,
//       },
//     });
//   });
// });

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

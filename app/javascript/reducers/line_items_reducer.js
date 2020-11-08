import {
  RECEIVE_ALL_LINE_ITEMS,
  RECEIVE_LINE_ITEM,
} from "../actions/cart_actions";

const lineItemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LINE_ITEM:
      return Object.assign({}, state, { [action.item.id]: action.item });
    case RECEIVE_ALL_LINE_ITEMS:
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
};

export default lineItemsReducer;

import {
  RECEIVE_ALL_LINE_ITEMS,
  RECEIVE_LINE_ITEM,
  REMOVE_LINE_ITEM,
} from "../actions/line_item_actions";

const lineItemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LINE_ITEM:
      return Object.assign({}, state, { [action.item.id]: action.item });
    case RECEIVE_ALL_LINE_ITEMS:
      return Object.assign({}, state, action.items);
    case REMOVE_LINE_ITEM:
      let newState = Object.assign({}, state);
      delete newState[action.item.id];
      return newState;
    default:
      return state;
  }
};

export default lineItemsReducer;

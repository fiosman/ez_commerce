import { RECEIVE_LINE_ITEM } from "../actions/cart_actions";

const lineItemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LINE_ITEM:
      return Object.assign({}, state, { [action.item.id]: action.item });
    default:
      return state;
  }
};

export default lineItemsReducer;

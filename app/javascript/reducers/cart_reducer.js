import { RECEIVE_CART, EMPTY_CART } from "../actions/cart_actions";
import {
  RECEIVE_LINE_ITEM,
  REMOVE_LINE_ITEM,
} from "../actions/line_item_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CART:
      return { [action.cart.id]: action.cart };
    case RECEIVE_LINE_ITEM:
      const currentCart = state[action.item.cart_id];
      const currentItemIds = currentCart.lineItemIds;
      return {
        [currentCart.id]: {
          ...state[currentCart.id],
          lineItemIds: [...currentItemIds, action.item.id],
        },
      };
    case REMOVE_LINE_ITEM:
      const lineItemIds = state[action.item.cart_id].lineItemIds;
      const userCart = state[action.item.cart_id];
      return {
        [userCart.id]: {
          ...state[userCart.id],
          lineItemIds: lineItemIds.filter(
            (lineItemId) => lineItemId != action.item.id
          ),
        },
      };
    default:
      return state;
  }
};

export default cartReducer;

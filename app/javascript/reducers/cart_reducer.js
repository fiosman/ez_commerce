import {
  RECEIVE_CART,
  EMPTY_CART,
  RECEIVE_LINE_ITEM,
} from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CART:
      return { [action.cart.id]: action.cart };
    case EMPTY_CART:
    case RECEIVE_LINE_ITEM:
      console.log(state);
      const currentCart = state[action.item.cart_id];
      const currentItemIds = currentCart.lineItemIds;
      return {
        [currentCart.id]: {
          ...state[currentCart.id],
          lineItemIds: [...currentItemIds, action.item.id],
        },
      };
    default:
      return state;
  }
};

export default cartReducer;

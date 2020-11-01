import { RECEIVE_CART, EMPTY_CART, ADD_TO_CART } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CART:
      return Object.assign({}, state, { [action.cart.id]: action.cart });
    case EMPTY_CART:
    case ADD_TO_CART:
    default:
      return state;
  }
};

export default cartReducer;

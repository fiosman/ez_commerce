export const RECEIVE_CART = "RECEIVE_CART";
export const EMPTY_CART = "EMPTY_CART";
import { getCart } from "../util/cart_api_util";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const emptyCart = (cartId) => ({
  type: REMOVE_CART,
  cartId,
});

export const pullCart = () => (dispatch) =>
  getCart().then((cart) => dispatch(receiveCart(cart)));

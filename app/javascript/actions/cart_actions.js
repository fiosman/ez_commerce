export const RECEIVE_CART = "RECEIVE_CART";
export const EMPTY_CART = "EMPTY_CART";
export const ADD_TO_CART = "ADD_TO_CART";
import { getCart, addCartItem } from "../util/cart_api_util";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const emptyCart = (cartId) => ({
  type: REMOVE_CART,
  cartId,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const pullCart = () => (dispatch) =>
  getCart().then((cart) => dispatch(receiveCart(cart)));

export const addItemToCart = (itemData) => (dispatch) =>
  addItemToCart(itemData).then((item) => dispatch(addToCart(item)));

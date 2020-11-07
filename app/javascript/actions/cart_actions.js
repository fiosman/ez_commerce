export const RECEIVE_CART = "RECEIVE_CART";
export const EMPTY_CART = "EMPTY_CART";
export const RECEIVE_LINE_ITEM = "RECEIVE_LINE_ITEM";
export const RECEIVE_ALL_LINE_ITEMS = "RECEIVE_ALL_LINE_ITEMS";
import { getCart, addItemToCart, getCartItems } from "../util/cart_api_util";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const emptyCart = (cartId) => ({
  type: REMOVE_CART,
  cartId,
});

export const receiveLineItem = (item) => ({
  type: RECEIVE_LINE_ITEM,
  item,
});

export const receiveAllLineItems = (items) => ({
  type: RECEIVE_ALL_LINE_ITEMS,
  items,
});

export const pullCart = () => (dispatch) =>
  getCart().then((cart) => dispatch(receiveCart(cart)));

export const addCartItem = (itemData) => (dispatch) =>
  addItemToCart(itemData).then((item) => dispatch(receiveLineItem(item)));

export const grabItems = () => (dispatch) =>
  getCartItems().then((line_items) =>
    dispatch(receiveAllLineItems(line_items))
  );

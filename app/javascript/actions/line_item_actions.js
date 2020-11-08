export const RECEIVE_LINE_ITEM = "RECEIVE_LINE_ITEM";
export const RECEIVE_ALL_LINE_ITEMS = "RECEIVE_ALL_LINE_ITEMS";
export const REMOVE_LINE_ITEM = "REMOVE_LINE_ITEM";
import {
  addItemToCart,
  getCartItems,
  deleteLineItem,
} from "../util/cart_api_util";

export const receiveLineItem = (item) => ({
  type: RECEIVE_LINE_ITEM,
  item,
});

export const receiveAllLineItems = (items) => ({
  type: RECEIVE_ALL_LINE_ITEMS,
  items,
});

export const wipeLineItem = (item) => ({
  type: REMOVE_LINE_ITEM,
  item,
});

export const addCartItem = (itemData) => (dispatch) =>
  addItemToCart(itemData).then((item) => dispatch(receiveLineItem(item)));

export const grabItems = () => (dispatch) =>
  getCartItems().then((line_items) =>
    dispatch(receiveAllLineItems(line_items))
  );

export const removeLineItem = (lineItemId) => (dispatch) =>
  deleteLineItem(lineItemId).then((lineItem) => {
    dispatch(wipeLineItem(lineItem));
  });

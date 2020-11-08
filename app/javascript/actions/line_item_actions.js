export const RECEIVE_LINE_ITEM = "RECEIVE_LINE_ITEM";
export const RECEIVE_ALL_LINE_ITEMS = "RECEIVE_ALL_LINE_ITEMS";
export const REMOVE_LINE_ITEM = "REMOVE_LINE_ITEM";
export const UPDATE_LINE_ITEM = "UPDATE_LINE_ITEM";
import {
  addItemToCart,
  getCartItems,
  deleteLineItem,
  updateLineItem,
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

export const patchLineItem = (item) => ({
  type: UPDATE_LINE_ITEM,
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

export const modifyLineItem = (lineItem) => (dispatch) =>
  updateLineItem(lineItem).then((lineItem) =>
    dispatch(patchLineItem(lineItem))
  );

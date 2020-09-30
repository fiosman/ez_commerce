export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const REMOVE_PRODUCT_ERRORS = "REMOVE_PRODUCT_ERRORS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "../util/product_api_util";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const removeProductErrors = () => ({
  type: REMOVE_PRODUCT_ERRORS,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const addProduct = (product) => (dispatch) =>
  createProduct(product)
    .then((product) => dispatch(receiveProduct(product)))
    .catch((err) => dispatch(receiveProductErrors(err.responseJSON)));

export const fetchProducts = () => (dispatch) =>
  getProducts().then((products) => dispatch(receiveProducts(products)));

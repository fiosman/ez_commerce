export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const REMOVE_PRODUCT_ERRORS = "REMOVE_PRODUCT_ERRORS";
export const RECEIVE_SINGLE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const START_LOADING_SINGLE_PRODUCT = "START_LOADING_SINGLE_PRODUCT";
export const START_LOADING_ALL_PRODUCTS = "START_LOADING_ALL_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_SEARCHED_PRODUCTS = "RECEIVE_SEARCHED_PRODUCTS";
export const RECEIVE_FILTERED_CATEGORIES = "RECEIVE_FILTERED_CATEGORIES";
export const RECEIVE_FILTERED_PRICE = "RECEIVE_FILTERED_PRICE";
export const RECEIVE_FILTERED_PRODUCTS = "RECEIVE_FILTERED_PRODUCTS";
import { receiveReviews, startLoadingReviews } from "./review_actions";

import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
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
  type: RECEIVE_SINGLE_PRODUCT,
  product,
});

export const startLoadingSingleProduct = () => ({
  type: START_LOADING_SINGLE_PRODUCT,
});

export const startLoadingAllProducts = () => ({
  type: START_LOADING_ALL_PRODUCTS,
});

export const wipeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId,
});

export const receiveSearchedProducts = (searchTerm) => ({
  type: RECEIVE_SEARCHED_PRODUCTS,
  searchTerm,
});

export const receiveFilteredCategory = (category) => ({
  type: RECEIVE_FILTERED_CATEGORIES,
  category,
});

export const receiveFilteredPrice = (price) => ({
  type: RECEIVE_FILTERED_PRICE,
  price,
});

export const addProduct = (product) => (dispatch) =>
  createProduct(product)
    .then((product) => dispatch(receiveProduct(product)))
    .catch((err) => {
      dispatch(receiveProductErrors(err.responseJSON));
      throw err;
    });

export const fetchProducts = () => (dispatch) => {
  dispatch(startLoadingAllProducts());
  getProducts().then((products) => dispatch(receiveProducts(products)));
};

export const fetchSingleProduct = (productId) => (dispatch) => {
  dispatch(startLoadingSingleProduct());
  dispatch(startLoadingReviews());
  getProduct(productId).then((product) => {
    dispatch(receiveProduct(product));
    dispatch(receiveReviews(product.reviews));
  });
};

export const removeProduct = (productId) => (dispatch) =>
  deleteProduct(productId).then((product) => dispatch(wipeProduct(product.id)));

export const modifyProduct = (product, productId) => (dispatch) =>
  updateProduct(product, productId)
    .then((product) => dispatch(receiveProduct(product)))
    .catch((err) => {
      dispatch(receiveProductErrors(err.responseJSON));
      throw err;
    });

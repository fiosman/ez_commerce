export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";
export const REMOVE_CATEGORY_ERRORS = "REMOVE_CATEGORY_ERRORS";
import { createCategory, deleteCategory } from "../util/category_api_util";

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category,
});

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const receiveCategoryErrors = (errors) => ({
  type: RECEIVE_CATEGORY,
  errors,
});

export const removeCategoryErrors = () => ({
  type: RECEIVE_CATEGORY,
  category,
});

export const addCategory = (category) => (dispatch) =>
  createCategory(category)
    .then((category) => dispatch(receiveCategory(category)))
    .catch((errors) => dispatch(receiveCategoryErrors(errors)));

export const removeCategory = (categoryId) => (dispatch) =>
  deleteCategory(categoryId).catch((errors) =>
    dispatch(receiveCategoryErrors(errors))
  );

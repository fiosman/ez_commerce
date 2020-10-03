export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";
export const REMOVE_CATEGORY_ERRORS = "REMOVE_CATEGORY_ERRORS";
export const START_LOADING_SINGLE_CATEGORY = "START_LOADING_SINGLE_CATEGORY";
export const START_LOADING_ALL_CATEGORIES = "START_LOADING_ALL_CATEGORIES";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../util/category_api_util";

export const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category,
});

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const receiveCategoryErrors = (errors) => ({
  type: RECEIVE_CATEGORY_ERRORS,
  errors,
});

export const removeCategoryErrors = () => ({
  type: REMOVE_CATEGORY_ERRORS,
});

export const startLoadingSingleCategory = () => ({
  type: START_LOADING_SINGLE_CATEGORY,
});

export const startLoadingAllCategories = () => ({
  type: START_LOADING_ALL_CATEGORIES,
});

export const wipeCategory = (categoryId) => ({
  type: REMOVE_CATEGORY,
  categoryId,
});

export const addCategory = (category) => (dispatch) =>
  createCategory(category)
    .then((category) => dispatch(receiveCategory(category)))
    .catch((err) => {
      dispatch(receiveCategoryErrors(err.responseJSON));
      throw err;
    });

export const removeCategory = (categoryId) => (dispatch) =>
  deleteCategory(categoryId).then((category) =>
    dispatch(wipeCategory(category.id))
  );

export const pullCategories = () => (dispatch) => {
  dispatch(startLoadingAllCategories());
  getCategories().then((categories) => dispatch(receiveCategories(categories)));
};

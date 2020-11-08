import { byPrice, byCategory } from "../util/helpers";

export const selectAllCategories = (state) => {
  let arr = [];
  const categories = state.entities.categories;
  for (let category in categories) {
    arr.push(categories[category]);
  }

  return arr;
};

export const selectAllProducts = (state) => {
  let arr = [];
  const products = state.entities.products;
  for (let product in products) {
    arr.push(products[product]);
  }

  return arr;
};

export const selectSearchedProducts = (state) => {
  const products = selectAllProducts(state);

  return products.filter((product) =>
    product.title.includes(state.filters.search)
  );
};

export const selectFilteredProducts = (state) => {
  const products = selectAllProducts(state);
  const categories = state.entities.categories;
  const filters = state.filters;
  return products.filter((product) => {
    return (
      product.title.includes(filters.search) &&
      byCategory(categories[product.category_id].tagging, filters.categories) &&
      byPrice(product.price, filters.price)
    );
  });
};

export const selectProductReviews = (allReviews, product) => {
  const products = product.reviewIds.map((reviewId) => allReviews[reviewId]);
  return products.filter((product) => product != undefined);
};

export const selectLineItemIds = (lineItemIds, lineItems) => {
  return lineItemIds.map((lineItemId) => lineItems[lineItemId]);
};

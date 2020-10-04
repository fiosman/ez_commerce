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

export const selectAllCategories = (state) => {
  let arr = [];
  const categories = state.entities.categories;
  for (let category in categories) {
    arr.push({ [category]: categories[category] });
  }
  return arr;
};

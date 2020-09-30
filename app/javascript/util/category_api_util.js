export const createCategory = (category) =>
  $.ajax({
    method: "POST",
    url: "/api/category",
    data: { category },
  });

export const deleteCategory = (categoryId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/category/${categoryId}`,
  });

export const getCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });

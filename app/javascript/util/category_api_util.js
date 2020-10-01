export const createCategory = (category) =>
  $.ajax({
    method: "POST",
    url: "/api/categories",
    data: { category },
  });

export const deleteCategory = (categoryId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/categories/${categoryId}`,
  });

export const getCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });

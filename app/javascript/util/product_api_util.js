export const createProduct = (product) =>
  $.ajax({
    url: "/api/products",
    method: "POST",
    data: { product },
  });

export const updateProduct = (product) =>
  $.ajax({
    url: `/api/products/${product.id}`,
    method: "PATCH",
    data: { product },
  });

export const deleteProduct = (product) =>
  $.ajax({
    url: `/api/products/${product.id}`,
    method: "DELETE",
  });

export const getProducts = () =>
  $.ajax({
    url: `/api/products`,
    method: "GET",
  });

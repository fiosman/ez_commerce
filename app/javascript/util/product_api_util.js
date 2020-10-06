export const createProduct = (product) =>
  $.ajax({
    url: "/api/products",
    method: "POST",
    data: product,
    contentType: false,
    processData: false,
  });

export const updateProduct = (product) =>
  $.ajax({
    url: `/api/products/${product.id}`,
    method: "PATCH",
    data: { product },
  });

export const deleteProduct = (productId) =>
  $.ajax({
    url: `/api/products/${productId}`,
    method: "DELETE",
  });

export const getProducts = () =>
  $.ajax({
    url: `/api/products`,
    method: "GET",
  });

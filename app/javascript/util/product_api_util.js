export const createProduct = (product) =>
  $.ajax({
    url: "/api/products",
    method: "POST",
    data: product,
    contentType: false,
    processData: false,
  });

export const updateProduct = (product, productId) =>
  $.ajax({
    url: `/api/products/${productId}`,
    method: "PATCH",
    data: product,
    contentType: false,
    processData: false,
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

export const getProduct = (productId) =>
  $.ajax({
    url: `/api/products/${productId}`,
    method: "GET",
  });

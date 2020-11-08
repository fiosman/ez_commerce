export const getCart = () =>
  $.ajax({
    url: "/api/session/cart",
    method: "GET",
  });

export const addItemToCart = (line_item) =>
  $.ajax({
    url: "/api/line_items",
    method: "POST",
    data: { line_item },
  });

export const getCartItems = () =>
  $.ajax({
    url: "/api/line_items",
    method: "GET",
  });

export const deleteLineItem = (lineItemId) =>
  $.ajax({
    url: `api/line_items/${lineItemId}`,
    method: "DELETE",
  });

export const updateLineItem = (line_item) =>
  $.ajax({
    url: `api/line_items/${lineItemId}`,
    method: "PATCH",
    data: { line_item },
  });

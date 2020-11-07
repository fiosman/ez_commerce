export const getCart = () =>
  $.ajax({
    url: "/api/session/cart",
    method: "GET",
  });

export const addItemToCart = (line_item) => {
  $.ajax({
    url: "/api/line_items",
    method: "POST",
    data: { line_item },
  });
};

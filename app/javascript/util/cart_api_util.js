export const getCart = () =>
  $.ajax({
    url: "/api/session/cart",
    method: "GET",
  });

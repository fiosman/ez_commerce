json.partial! "/api/carts/cart", cart: @cart
json.lineItemIds do
  json.array! @cart.line_item_ids
end

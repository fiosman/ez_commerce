json.partial! "/api/products/product", product: @product
if @product.image.attached?
  json.imageUrl url_for(@product.image)
end
  
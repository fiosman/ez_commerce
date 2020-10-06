json.partial! "/api/products/product", product: @product
json.imageUrl url_for(@product.image)

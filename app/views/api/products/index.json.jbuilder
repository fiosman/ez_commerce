@products.each do |product|
  json.set! product.id do
    json.partial! "/api/products/product", product: product
    if product.image.attached?
      json.imageUrl url_for(product.image)
    end
    json.reviewIds []
    json.avgRating product.average_rating
  end
end

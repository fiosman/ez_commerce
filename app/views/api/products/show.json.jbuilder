json.product do
  json.partial! "/api/products/product", product: @product
  if @product.image.attached?
    json.imageUrl url_for(@product.image)
  end
  json.reviewIds do
    json.array! @product.review_ids
  end
end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.partial! "/api/reviews/review", review: review
    end
  end
end

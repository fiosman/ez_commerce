json.product do
  json.partial! "/api/products/product", product: @product
  if @product.image.attached?
    json.imageUrl url_for(@product.image)
  end
  json.reviewIds do
    json.array! @product.review_ids
  end
end

if @product.reviews.length > 0
  json.reviews do
    @product.reviews.each do |review|
      json.set! review.id do
        json.partial! "/api/reviews/review", review: review
        json.author review.author.username
      end
    end
  end
end

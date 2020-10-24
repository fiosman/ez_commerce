json.partial! "api/reviews/review", review: @review
json.author @review.author.username
json.average_rating @review.product.average_rating

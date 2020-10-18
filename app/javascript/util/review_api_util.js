export const postReview = (review) => {
  return $.ajax({
    url: `/api/products/${review.product_id}/reviews`,
    method: "POST",
    data: { review },
  });
};

export const deleteReview = (reviewId, productId) => {
  return $.ajax({
    url: `api/products/${productId}/reviews/${reviewId}`,
    method: "DELETE",
  });
};

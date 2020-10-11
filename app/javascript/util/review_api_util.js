export const postReview = (review, productId) => {
  return $.ajax({
    url: `/api/products/${productId}/reviews`,
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

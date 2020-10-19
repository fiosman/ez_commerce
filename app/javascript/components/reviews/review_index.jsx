import React from "react";

const ReviewIndex = (props) => {
  const reviewIds = Object.keys(props.reviews);
  if (props.reviews) {
    return reviewIds.map((reviewId) => {
      return (
        <section key={reviewId}>
          <ul>
            <li>
              Posted on: {new Date(props.product.created_at).toLocaleString()}{" "}
            </li>
            <li>Rating: {props.reviews[reviewId].rating}</li>
            <li>How was it? {props.reviews[reviewId].body}</li>
            <li>Posted by: {props.reviews[reviewId].author}</li>
          </ul>
        </section>
      );
    });
  } else {
    return <h2>No reviews</h2>;
  }
};

export default ReviewIndex;

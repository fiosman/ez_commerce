import React from "react";

const ReviewIndex = (props) => {
  if (props.reviews.length > 0) {
    return props.reviews.map((review, idx) => {
      return (
        <section key={idx}>
          <ul>
            <li>Posted on: {new Date(review.created_at).toLocaleString()} </li>
            <li>Rating: {review.rating}</li>
            <li>How was it? {review.body}</li>
            <li>Posted by: {review.author}</li>
          </ul>
        </section>
      );
    });
  } else {
    return <h2>No reviews</h2>;
  }
};

export default ReviewIndex;

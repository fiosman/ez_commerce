import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ReviewIndex = (props) => {
  if (props.reviews.length > 0) {
    return props.reviews.map((review, idx) => {
      return (
        <ListGroup key={idx}>
          <ListGroup.Item>
            Posted on: {new Date(review.created_at).toLocaleString()}
          </ListGroup.Item>
          <ListGroup.Item>Rating: {review.rating}</ListGroup.Item>
          <ListGroup.Item>How was it? {review.body} </ListGroup.Item>
          <ListGroup.Item>Posted by: {review.author}</ListGroup.Item>
        </ListGroup>
      );
    });
  } else {
    return <h2>No reviews</h2>;
  }
};

export default ReviewIndex;

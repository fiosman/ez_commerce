import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = (props) => {
  const stars = [...Array(5)].map((star, idx) => {
    if (idx + 1 > props.rating) {
      return <FontAwesomeIcon key={idx} icon={faStar} className="star-empty" />;
    } else {
      return <FontAwesomeIcon key={idx} icon={faStar} className="star-full" />;
    }
  });
  return <div>{stars}</div>;
};

export default StarRating;

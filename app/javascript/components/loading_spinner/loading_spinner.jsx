import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <Spinner className="centered" animation="border" role="status"></Spinner>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;

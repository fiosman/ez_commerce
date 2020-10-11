import React from "react";

const ProductListItem = (props) => {
  const { product } = props;
  return (
    <div>
      <div>
        <figure>
          <img src={product.imageUrl} />
        </figure>
        <h2>{product.title}</h2>
        <h2>${product.price}</h2>
      </div>
    </div>
  );
};

export default ProductListItem;

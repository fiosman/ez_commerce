import React from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <section>
          <h2>Description</h2>
          <p>{product.body}</p>
        </section>
        <section>
          <h2>Reviews</h2>
          {/* <ReviewIndex product={product} reviews={reviews} /> */}
        </section>
      </div>
    );
  }
}

export default ProductDetail;

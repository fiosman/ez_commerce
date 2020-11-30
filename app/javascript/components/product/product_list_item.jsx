import React from "react";
import { withRouter } from "react-router";
class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  render() {
    const { product } = this.props;
    const productRating =
      product.avgRating > 0 ? product.avgRating : "No ratings";
    return (
      <div className="productCard">
        <figure>
          <img src={product.imageUrl} onClick={this.handleClick} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{productRating}</p>
        </figure>
      </div>
    );
  }
}

export default withRouter(ProductListItem);

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
      <div>
        <div>
          <figure>
            <img src={product.imageUrl} onClick={this.handleClick} />
          </figure>
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
          <h2>{productRating}</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductListItem);

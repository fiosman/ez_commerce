import React from "react";

class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.addCartItem({
      ...this.state,
      product_id: this.props.product.id,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default LineItem;

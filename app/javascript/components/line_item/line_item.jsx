import React from "react";

class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      quantity: 1,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleQuantity(e) {
    switch (e.target.name) {
      case "decrement":
        return this.setState({ quantity: this.state.quantity - 1 });
      case "increment":
        return this.setState({ quantity: this.state.quantity + 1 });
      case "user-input":
        return this.setState({ quantity: parseInt(e.target.value) });
    }
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
        <button type="button" onClick={this.handleQuantity} name="decrement">
          -
        </button>
        <input
          type="text"
          value={this.state.quantity}
          onChange={this.handleQuantity}
          name="user-input"
        ></input>
        <button type="button" onClick={this.handleQuantity} name="increment">
          +
        </button>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default LineItem;

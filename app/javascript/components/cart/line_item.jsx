import React from "react";

class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleQuantity(e) {
    switch (e.target.name) {
      case "decrement":
        if (this.state.quantity === 1) {
          return;
        }
        return this.setState({ quantity: this.state.quantity - 1 });
      case "increment":
        return this.setState({ quantity: this.state.quantity + 1 });
      case "user-input":
        return this.setState({ quantity: parseInt(e.target.value) || 1 });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.quantity != this.state.quantity) {
      return this.props.updateCartItem({
        ...this.state,
        id: this.props.item.id,
        product_id: this.props.item.product_id,
      });
    }
  }

  handleRemove() {
    return this.props.removeCartItem(this.props.item.id);
  }
  render() {
    return (
      <tr>
        <td>
          <button onClick={this.handleRemove}>Delete</button>
        </td>
        <td>
          <img src={this.props.product.imageUrl} width="30" height="30" />
        </td>
        <td>{this.props.product.title}</td>
        <td>{this.props.product.price}</td>
        <td>
          <button name="increment" onClick={this.handleQuantity}>
            +
          </button>
          <input
            type="text"
            value={this.state.quantity}
            onChange={this.handleQuantity}
            name="user-input"
          ></input>
          <button name="decrement" onClick={this.handleQuantity}>
            -
          </button>
        </td>

        <td>{this.props.product.price * this.props.item.quantity}</td>
      </tr>
    );
  }
}

export default LineItem;

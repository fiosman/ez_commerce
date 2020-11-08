import React from "react";

class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(e) {
    switch (e.target.name) {
      case "decrement":
        return this.setState({ quantity: this.state.quantity - 1 });
      case "increment":
        return this.setState({ quantity: this.state.quantity + 1 });
      case "user-input":
        return this.setState({ quantity: parseInt(e.target.value) || 1 });
    }
  }

  render() {
    return (
      <tr>
        <td>
          <button>Delete</button>
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
            type="number"
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

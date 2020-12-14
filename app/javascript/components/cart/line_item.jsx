import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
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
          <Button variant="custom" onClick={this.handleRemove}>
            Delete
          </Button>
        </td>
        <td>
          <Image src={this.props.product.imageUrl} width="60" height="60" />
        </td>
        <td>{this.props.product.title}</td>
        <td>${this.props.product.price}</td>
        <td>
          <Button
            variant="custom"
            name="increment"
            onClick={this.handleQuantity}
            className="increment-button"
          >
            +
          </Button>
          <input
            as="input"
            value={this.state.quantity}
            onChange={this.handleQuantity}
            name="user-input"
            style={{ width: "30%" }}
          />
          <Button
            variant="custom"
            name="decrement"
            onClick={this.handleQuantity}
            className="decrement-button"
          >
            -
          </Button>
        </td>
        <td>${this.props.product.price * this.props.item.quantity}</td>
      </tr>
    );
  }
}

export default LineItem;

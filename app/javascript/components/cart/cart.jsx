import React from "react";
import LineItem from "./line_item";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
    this.props.getAllLineItems();
  }

  render() {
    return (
      <div>
        <LineItem />
      </div>
    );
  }
}

export default Cart;

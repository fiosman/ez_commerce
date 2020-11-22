import React from "react";
import LineItem from "./line_item";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllLineItems();
  }

  render() {
    const lineItemsToRender =
      this.props.selectedLineItems.length > 0 ? true : false;
    if (!lineItemsToRender) {
      return <h2>Your Shopping Cart is Empty!</h2>;
    } else {
      const itemsTotalPrice = this.props.selectedLineItems
        .map(
          (lineItem) =>
            this.props.products[lineItem.product_id].price * lineItem.quantity
        )
        .reduce((total, currAmount) => total + currAmount);
      return (
        <div>
          <Link to="/">Return to main page</Link>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {this.props.selectedLineItems.map((lineItem) => {
                return (
                  <LineItem
                    item={lineItem}
                    key={lineItem.id}
                    product={this.props.products[lineItem.product_id]}
                    removeCartItem={this.props.removeCartItem}
                    updateCartItem={this.props.updateCartItem}
                  />
                );
              })}
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${itemsTotalPrice}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${itemsTotalPrice}</td>
              </tr>
            </tbody>
          </table>
          <button disabled>Proceed to checkout</button>
        </div>
      );
    }
  }
}

export default Cart;

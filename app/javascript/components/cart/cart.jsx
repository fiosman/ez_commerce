import React from "react";
import LineItem from "./line_item";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

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
          <Table
            className="cart-table"
            striped
            bordered
            hover
            responsive
            size="sm"
          >
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
          </Table>
          <Table className="cart-table" striped bordered hover responsive>
            <tbody className="totals">
              <tr>
                <td>Subtotal</td>
                <td>${itemsTotalPrice}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${itemsTotalPrice}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="custom" disabled>
            Proceed to checkout
          </Button>
        </div>
      );
    }
  }
}

export default Cart;

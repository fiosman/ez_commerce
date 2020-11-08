import React from "react";
import LineItem from "./line_item";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllLineItems();
  }

  render() {
    console.log(this.props);
    return (
      <div>
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
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;

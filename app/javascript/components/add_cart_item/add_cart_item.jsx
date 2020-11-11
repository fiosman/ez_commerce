import React from "react";

class AddCartItem extends React.Component {
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

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    const errors = this.props.errors.length > 0 ? this.displayErrors() : "";
    const addToCartSection = (
      <div>
        <button onClick={this.addToCart}>Add to Cart</button>
      </div>
    );
    return (
      <div>
        {addToCartSection}
        {errors}
      </div>
    );
  }
}

export default AddCartItem;

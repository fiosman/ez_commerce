import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./product_detail";
import ReviewFormContainer from "../reviews/review_form_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount() {
    this.props.receiveSingleProduct(this.props.productId);
  }

  addToCart() {
    console.log("Added to cart");
  }

  handleQuantity() {
    console.log("Something");
  }

  render() {
    if (this.props.loadingProduct || this.props.loadingReviews) {
      return <h2>Loading Product...</h2>;
    }
    const reviewStatus =
      this.props.location.pathname === `/products/${this.props.productId}` ? (
        <Link to={`/products/${this.props.productId}/review`}>
          {" "}
          Leave a Review
        </Link>
      ) : (
        ""
      );
    return (
      <div>
        <Link to="/">Return to main page</Link>
        <section>
          <figure>
            <img src={this.props.product.imageUrl} width="200" height="40" />
          </figure>
          <div>
            <h2>{this.props.product.title}</h2>
            <h2>{this.props.product.price}</h2>
            <button type="button">-</button>
            <input type="text" value="1" onChange={this.handleQuantity}></input>
            <button type="button">+</button>
            <button onClick={this.addToCart}>Add to Cart</button>
          </div>
          <div>
            <ProductDetail
              product={this.props.product}
              reviews={this.props.productReviews}
            />
          </div>
          <div>
            <h2>{reviewStatus}</h2>
            {this.props.location.pathname ===
            `/products/${this.props.productId}/review` ? (
              <ReviewFormContainer product={this.props.product} />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default ProductShow;

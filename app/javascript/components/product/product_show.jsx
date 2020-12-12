import React from "react";
import { Link } from "react-router-dom";
import ReviewFormContainer from "../reviews/review_form_container";
import ReviewIndex from "../reviews/review_index";
import AddCartItemContainer from "../add_cart_item/add_cart_item_container";
class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveSingleProduct(this.props.productId);
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
      <div className="product-show-container">
        <figure className="product-image-container">
          <img src={this.props.product.imageUrl} />
        </figure>
        <div className="product-description-container">
          <h2>{this.props.product.title}</h2>
          <h2>{this.props.product.price}</h2>
          <div>
            {this.props.product.avgRating} stars (
            {this.props.productReviews.length} reviews)
          </div>
          <AddCartItemContainer product={this.props.product} />
          <section>
            <h2>Description</h2>
            <p>{this.props.product.body}</p>
          </section>
        </div>
        <div className="product-review-container">
          <h2>{reviewStatus}</h2>
          {this.props.location.pathname ===
          `/products/${this.props.productId}/review` ? (
            <ReviewFormContainer product={this.props.product} />
          ) : (
            ""
          )}
          <section>
            <h2>Reviews</h2>
            <ReviewIndex
              product={this.props.product}
              reviews={this.props.productReviews}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default ProductShow;

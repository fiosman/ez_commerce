import React from "react";
import { Link } from "react-router-dom";
import ReviewFormContainer from "../reviews/review_form_container";
import ReviewIndex from "../reviews/review_index";
import AddCartItemContainer from "../add_cart_item/add_cart_item_container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import StarRating from "./star_rating";
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
    const reviewBlob =
      this.props.productReviews.length > 1 ? "Reviews" : "Review";
    return (
      <div className="product-show-container">
        <Card style={{ background: "#f5f5f5" }}>
          <Image
            src={this.props.product.imageUrl}
            className="product-image-container"
          />
        </Card>
        <div className="product-description-container">
          <Card style={{ width: "60%" }}>
            <Card.Header as="h2">
              {this.props.product.title}
              <Card.Text className="product-rating-reviews">
                {this.props.productReviews.length} {reviewBlob} (
                <StarRating rating={this.props.product.avgRating} />)
              </Card.Text>
            </Card.Header>
            <Card.Body style={{ width: "100%" }}>
              <Card.Text className="product-body-text">
                {this.props.product.body}
              </Card.Text>
              <Card.Text className="product-body-price">
                ${this.props.product.price}
              </Card.Text>
              <AddCartItemContainer product={this.props.product} />
            </Card.Body>
          </Card>
        </div>

        <div className="product-review-container">
          {this.props.location.pathname ===
          `/products/${this.props.productId}/review` ? (
            <ReviewFormContainer product={this.props.product} />
          ) : (
            ""
          )}
          <Card style={{ width: "60%" }}>
            <h2>{reviewStatus}</h2>
            <h2>Reviews</h2>
            <div className="review-posts-container">
              <ReviewIndex
                product={this.props.product}
                reviews={this.props.productReviews}
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default ProductShow;

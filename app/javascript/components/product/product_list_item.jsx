import React from "react";
import { withRouter } from "react-router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import StarRating from "./star_rating";
class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/products/${this.props.product.id}`);
  }

  render() {
    const { product } = this.props;
    const productRating =
      product.avgRating > 0 ? product.avgRating : "No ratings";
    return (
      <Card
        style={{
          width: "auto",
          margin: "0px 10px 10px 0px",
          background: "#f5f5f5",
        }}
      >
        <Card.Img
          variant="top"
          src={product.imageUrl}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>${product.price}</ListGroupItem>
          <ListGroupItem>
            {productRating === "No ratings" ? (
              "No ratings"
            ) : (
              <StarRating rating={productRating} />
            )}
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default withRouter(ProductListItem);

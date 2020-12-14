import React from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const property = e.target.name;
    this.setState({
      [property]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let reviewData = Object.assign({}, this.state, {
      product_id: this.props.productId,
    });
    this.props
      .createReview(reviewData)
      .then(() => this.props.history.push(`/products/${this.props.productId}`));
  }

  handleNavigation(e) {
    e.preventDefault();
    return this.props.history.push(`/products/${this.props.productId}`);
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
    const reviewForm = (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Control
            placeholder="Rating"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Review"
            value={this.state.body}
            name="body"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="custom" className="review-form-submit">
          Submit
        </Button>
        <Button onClick={this.handleNavigation} variant="custom">
          Cancel
        </Button>
      </Form>
    );
    return (
      <section>
        {errors}
        {reviewForm}
      </section>
    );
  }
}

export default withRouter(ReviewForm);

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagging: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props
      .addCategory(this.state)
      .then(() => this.props.clearErrors());
  }

  componentDidMount() {
    this.props.clearErrors();
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

  render() {
    const form = (
      <Form>
        <Form.Group>
          <Form.Label>Category Listing</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Listing"
            name="tagging"
            onChange={this.handleInput}
            value={this.state.tagging}
          />
        </Form.Group>
        <Button onClick={this.handleSubmit} variant="custom" type="submit">
          Submit
        </Button>
      </Form>
    );

    const errors = this.props.errors.length > 0 ? this.displayErrors() : "";

    return (
      <div>
        {errors}
        {form}
      </div>
    );
  }
}

export default CategoryForm;

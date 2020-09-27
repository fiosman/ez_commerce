import React from "react";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: "",
      body: "",
      price: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    return this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <h2>Add a product!</h2>
        <label>
          Product Description
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Choose a category
          <input
            type="number"
            name="category_id"
            value={this.state.category_id}
            onChange={this.handleInput}
          />
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default ProductForm;

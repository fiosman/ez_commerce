import React from "react";
class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category_id: "",
      body: "",
      price: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props
      .addProduct(this.state)
      .then(() => this.props.clearErrors());
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
    let options = this.props.categories.map((category, idx) => {
      return (
        <option key={idx} value={category.id}>
          {category.tagging}
        </option>
      );
    });
    const form = (
      <form onSubmit={this.handleSubmit}>
        <h2>Add a product!</h2>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label>
          Description
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
          <select
            value={this.state.category_id}
            onChange={this.handleInput}
            name="category_id"
          >
            <option default>Select</option>
            {options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

    const errors = this.props.errors.length > 0 ? this.displayErrors() : "";

    return (
      <section>
        {errors}
        {form}
      </section>
    );
  }
}

export default ProductForm;

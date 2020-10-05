import React from "react";
import AdminNavBar from "../admin_dashboard/admin_nav_bar";
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

    if (this.props.formType === "new") {
      return this.props
        .addProduct(this.state)
        .then(() => this.props.clearErrors());
    } else if (this.props.formType === "update") {
      return this.props
        .updateProduct(Object.assign({ id: this.props.product.id }, this.state))
        .then(() => this.props.clearErrors());
    }
  }

  componentDidMount() {
    // console.log(this.props);
    if (this.props.formType === "update") {
      const { title, body, category_id, price } = this.props.product;
      return this.setState({
        title,
        body,
        category_id,
        price,
      });
    }
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

    const formHeader =
      this.props.formType === "new" ? "Add Product" : "Edit Product";
    const form = (
      <form onSubmit={this.handleSubmit}>
        <h2>{formHeader}</h2>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={this.state.title}
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
        <AdminNavBar />
        {errors}
        {form}
      </section>
    );
  }
}

export default ProductForm;

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
    console.log(this.state);
    return this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addProduct(this.state);
  }

  render() {
    const categories = this.props.categories;
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
          <select
            placeholder="WHAT"
            value={this.state.category_id}
            onChange={this.handleInput}
            name="category_id"
          >
            {categories.map((category, idx) => {
              const categoryId = category[Object.keys(category)[0]].id;
              const categoryTag = category[Object.keys(category)[0]].tagging;
              return (
                <option key={idx} value={categoryId}>
                  {categoryTag}
                </option>
              );
            })}
          </select>
        </label>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default ProductForm;

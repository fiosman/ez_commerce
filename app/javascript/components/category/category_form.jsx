import React from "react";

class ProductForm extends React.Component {
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
    return this.props.addCategory(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Add a category!</h2>
          <label>
            Category Listing
            <input type="text" name="tagging" onChange={this.handleInput} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ProductForm;

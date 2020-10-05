import React from "react";
import AdminNavBar from "../admin_dashboard/admin_nav_bar";

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
    return this.props
      .addCategory(this.state)
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
    const form = (
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

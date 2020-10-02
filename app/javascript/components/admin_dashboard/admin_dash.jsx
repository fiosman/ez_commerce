import React from "react";
import ProductFormContainer from "../product/product_form_container";
import CategoryFormContainer from "../category/category_form_container";
import GreetingContainer from "../greeting/greeting_container";
class AdminDash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllCategories();
  }

  render() {
    return (
      <div>
        <section>
          <h2>Admin Dashboard</h2>
          <GreetingContainer />
        </section>
        <section>
          <ProductFormContainer />
          <CategoryFormContainer />
        </section>
      </div>
    );
  }
}

export default AdminDash;

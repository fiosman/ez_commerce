import React from "react";
import ProductFormContainer from "../product/product_form_container";
import CategoryFormContainer from "../category/category_form_container";
import GreetingContainer from "../greeting/greeting_container";
import InventoryIndex from "../inventory/inventory_index";
class AdminDash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProducts();
    this.props.getAllCategories();
  }

  render() {
    console.log(this.props.categories);
    const {
      products,
      categories,
      loadingCategories,
      loadingProducts,
    } = this.props;

    if (loadingCategories || loadingProducts) {
      return <div>WAAAAAA</div>;
    }

    return (
      <div>
        <section>
          <h2>Admin Dashboard</h2>
          <GreetingContainer />
        </section>
        <section>
          <ProductFormContainer />
          <CategoryFormContainer />
          <InventoryIndex products={products} categories={categories} />
        </section>
      </div>
    );
  }
}

export default AdminDash;

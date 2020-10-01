import React from "react";
import ProductFormContainer from "../product/product_form_container";
import CategoryFormContainer from "../category/category_form_container";
const AdminDash = (props) => (
  <div>
    <section>
      <h2>Admin Dashboard</h2>
    </section>
    <section>
      <ProductFormContainer />
      <CategoryFormContainer />
    </section>
  </div>
);

export default AdminDash;

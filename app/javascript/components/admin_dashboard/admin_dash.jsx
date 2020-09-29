import React from "react";
import ProductFormContainer from "../product/product_form_container";

const AdminDash = (props) => (
  <div>
    <section>
      <h2>Admin Dashboard</h2>
    </section>
    <section>
      <ProductFormContainer />
    </section>
  </div>
);

export default AdminDash;

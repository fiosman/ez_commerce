import React from "react";
import InventoryIndexItem from "./inventory_index_item";
import AdminNavBar from "../admin_dashboard/admin_nav_bar";
class InventoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
    const props = this.props.categories;
    let categories = {};

    props.forEach((ele) => {
      categories[ele.id] = ele;
    });

    return this.props.products.map((product, idx) => {
      const productProps = {
        id: product.id,
        title: product.title,
        price: product.price,
        category: categories[product.category_id],
        createdAt: new Date(product.created_at).toLocaleString(),
        updatedAt: new Date(product.updated_at).toLocaleString(),
      };
      return (
        <InventoryIndexItem
          key={idx}
          {...productProps}
          deleteProduct={this.props.deleteProduct}
          deleteCategory={this.props.deleteCategory}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <AdminNavBar />
        <h1>Store Inventory</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date Created</th>
              <th>Date Modified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default InventoryIndex;

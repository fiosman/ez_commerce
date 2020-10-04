import React from "react";
import InventoryIndexItem from "./inventory_index_item";

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
        category: categories[product.category_id].tagging,
        createdAt: product.created_at,
        updatedat: product.updated_at,
      };
      return <InventoryIndexItem key={idx} {...productProps} />;
    });
  }

  render() {
    return (
      <div>
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

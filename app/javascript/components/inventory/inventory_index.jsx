import React from "react";
import InventoryIndexItem from "./inventory_index_item";

class InventoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
    const categories = this.props.categories;
    return this.props.products.map((product, idx) => {
      let productKeys = product[Object.keys(product)];
      let productCategory = categories[productKeys.category_id];
      const productProps = {
        id: productKeys.id,
        title: productKeys.title,
        price: productKeys.price,
        category: productCategory[Object.keys(productCategory)[0]].tagging,
        createdAt: productKeys.created_at,
        updatedat: productKeys.updated_at,
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

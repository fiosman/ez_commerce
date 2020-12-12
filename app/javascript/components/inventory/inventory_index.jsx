import React from "react";
import InventoryIndexItem from "./inventory_index_item";
import Table from "react-bootstrap/Table";
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
        <h1>Store Inventory</h1>
        <Table responsive="sm" bordered hover size="sm">
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
        </Table>
      </div>
    );
  }
}

export default InventoryIndex;

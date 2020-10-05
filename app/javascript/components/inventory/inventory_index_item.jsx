import React from "react";
import { withRouter } from "react-router";
class InventoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  render() {
    const {
      id,
      price,
      title,
      createdAt,
      category,
      updatedAt,
      deleteProduct,
      deleteCategory,
    } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{category.tagging}</td>
        <td>{createdAt}</td>
        <td>{updatedAt}</td>
        <td>
          <button onClick={deleteProduct.bind(this, id)}>Delete Product</button>
          <button onClick={deleteCategory.bind(this, category.id)}>
            Delete Category
          </button>
          <button
            name="update"
            onClick={() => this.props.history.push(`/admin/product/${id}/edit`)}
          >
            Update Product
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(InventoryIndexItem);

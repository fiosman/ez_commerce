import React from "react";
import { withRouter } from "react-router";
import Form from "react-bootstrap/Form";
class InventoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    const { deleteProduct, deleteCategory, id, category } = this.props;
    switch (val) {
      case "updateProduct":
        return this.props.history.push(`/admin/product/${id}/edit`);
      case "deleteProduct":
        return deleteProduct(id);
      case "deleteCategory":
        return deleteCategory(category.id);
    }
  }

  render() {
    const { id, price, title, createdAt, category, updatedAt } = this.props;

    return (
      <tr className="table-row">
        <td>{id}</td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{category.tagging}</td>
        <td>{createdAt}</td>
        <td>{updatedAt}</td>
        <td>
          <Form.Group>
            <Form.Control
              as="select"
              className="select-admin"
              size="sm"
              onChange={(e) => this.handleChange(e.target.value)}
            >
              <option default>Select Action</option>
              <option value="updateProduct">Update Product</option>
              <option value="deleteProduct">Delete Product</option>
              <option value="deleteCategory">Delete Category</option>
            </Form.Control>
          </Form.Group>
        </td>
      </tr>
    );
  }
}

export default withRouter(InventoryIndexItem);

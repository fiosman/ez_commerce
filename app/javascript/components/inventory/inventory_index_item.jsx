import React from "react";
import { removeCategory } from "../../actions/category_actions";

const InventoryIndexItem = (props) => {
  const {
    id,
    price,
    title,
    createdAt,
    category,
    updatedAt,
    deleteProduct,
    deleteCategory,
  } = props;
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
        <button>Update Product</button>
      </td>
    </tr>
  );
};

export default InventoryIndexItem;

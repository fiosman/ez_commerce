import React from "react";

const InventoryIndexItem = (props) => {
  const { id, price, title, createdAt, category, updatedAt } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>
        <button>Delete Product</button>
        <button>Delete Category</button>
        <button>Update Product</button>
      </td>
    </tr>
  );
};

export default InventoryIndexItem;

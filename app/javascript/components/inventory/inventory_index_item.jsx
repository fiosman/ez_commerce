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
    </tr>
  );
};

export default InventoryIndexItem;

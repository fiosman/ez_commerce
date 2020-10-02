import React from "react";

class InventoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
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
          <tbody>
            {/* <tr>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InventoryIndex;

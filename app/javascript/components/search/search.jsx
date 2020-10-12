import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.searchByProduct(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search by product..."
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
export default Search;

import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      category: [],
    };
    this.categoryFilter = this.categoryFilter.bind(this);
    this.priceFilter = this.priceFilter.bind(this);
    this.clearProductFilters = this.clearProductFilters.bind(this);
  }

  categoryFilter(e) {
    if (e.target.checked) {
      this.setState({
        category: [...this.state.category, e.target.value],
      });
    } else if (!e.target.checked) {
      this.setState({
        category: this.state.category.filter((category) => {
          return category !== e.target.value;
        }),
      });
    } else {
    }
  }

  priceFilter(e) {
    this.setState({ price: e.target.value });
  }

  clearProductFilters(e) {
    e.preventDefault();
    this.setState({ price: "", category: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.price === "" && prevState.price != "") ||
      (this.state.category.length === 0 && prevState.category.length != 0)
    ) {
      return this.props.clearFilters();
    }
    if (prevState.price != this.state.price) {
      return this.props.filterByPrice(this.state.price);
    }

    if (this.state.category.length != prevState.category.length) {
      return this.props.filterByCategory(this.state.category);
    }
  }
  render() {
    const { categories, products } = this.props;
    return (
      <div>
        <h2>Filters</h2>
        <section>
          <h3>Category</h3>
          {categories.map((category, idx) => {
            return (
              <label key={idx}>
                <input
                  type="checkbox"
                  onChange={this.categoryFilter}
                  name="category"
                  value={category.tagging}
                  checked={this.state.category.includes(category.tagging)}
                />
                {category.tagging}
              </label>
            );
          })}
        </section>

        <section>
          <h3>Price</h3>
          <label>
            <input
              type="radio"
              value="<25"
              name="price"
              checked={this.state.price === "<25"}
              onChange={this.priceFilter}
            />
            Under $25
          </label>
          <label>
            <input
              type="radio"
              value="25-50"
              name="price"
              checked={this.state.price === "25-50"}
              onChange={this.priceFilter}
            />
            $25 to $50
          </label>
          <label>
            <input
              type="radio"
              value="50-100"
              name="price"
              checked={this.state.price === "50-100"}
              onChange={this.priceFilter}
            />
            $50 to $100
          </label>
          <label>
            <input
              type="radio"
              value=">100"
              name="price"
              checked={this.state.price === ">100"}
              onChange={this.priceFilter}
            />
            $100 and Over
          </label>
        </section>
        <section>
          <button onClick={this.clearProductFilters}> Clear Filters </button>
        </section>
      </div>
    );
  }
}

export default Filter;

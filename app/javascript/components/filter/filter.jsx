import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      price: "",
      category: [],
    };
  }

  handleChange(e) {
    if (e.target.name === "category") {
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
      }
    }
  }
  render() {
    console.log(this.state);
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
                  onChange={this.handleChange}
                  name="category"
                  value={category.tagging}
                />
                {category.tagging}
              </label>
            );
          })}
        </section>

        <section>
          <h3>Price</h3>
          <label>
            <input type="radio" value="" />
            Under $25
          </label>
          <label>
            <input type="radio" value="" />
            $25 to $50
          </label>
          <label>
            <input type="radio" value="" />
            $50 to $100
          </label>
          <label>
            <input type="radio" value="" />
            $100 and Over
          </label>
        </section>
      </div>
    );
  }
}

export default Filter;

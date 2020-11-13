import React from "react";
import ProductListItem from "./product_list_item";
import Filter from "../filter/filter";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loadingCategories || this.props.loadingProducts) {
      return <h2>Loading...</h2>;
    }
    return (
      <section>
        <div>
          <Filter {...this.props} />
          {this.props.filteredProducts.length > 0 ? (
            this.props.filteredProducts.map((product, index) => (
              <ProductListItem product={product} key={index} />
            ))
          ) : (
            <h2>No products to display!</h2>
          )}
        </div>
      </section>
    );
  }
}

export default ProductList;

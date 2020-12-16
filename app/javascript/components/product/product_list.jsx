import React from "react";
import ProductListItem from "./product_list_item";
import Filter from "../filter/filter";
import LoadingSpinner from "../loading_spinner/loading_spinner";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loadingCategories || this.props.loadingProducts) {
      return <LoadingSpinner />;
    }
    return (
      <div className="filterProductsContainer">
        <Filter {...this.props} />
        <section className="productsContainer">
          {this.props.filteredProducts.length > 0 ? (
            this.props.filteredProducts.map((product, index) => (
              <ProductListItem product={product} key={index} />
            ))
          ) : (
            <h2>No products to display!</h2>
          )}
        </section>
      </div>
    );
  }
}

export default ProductList;

import React from "react";
import ProductListItem from "./product_list_item";
import Filter from "../filter/filter";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { products, categories } = this.props;
    if (products.length === 0 && categories.length === 0) {
      this.props.getAllProducts();
      this.props.getAllCategories();
    }
  }

  render() {
    const {
      products,
      fetchSearchedProducts,
      searchTerm,
      categories,
      filterByCategory,
      filterByPrice,
      filteredProducts,
      loadingCategories,
      loadingProducts,
      clearAllFilters,
    } = this.props;

    if (loadingCategories || loadingProducts) {
      return <h2>Loading...</h2>;
    }
    return (
      <section>
        <div>
          <Filter
            products={products}
            categories={categories}
            filterByCategory={filterByCategory}
            filterByPrice={filterByPrice}
            clearFilters={clearAllFilters}
            searchByProduct={fetchSearchedProducts}
            search={searchTerm}
          />
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
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

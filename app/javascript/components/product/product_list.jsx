import React from "react";
import ProductListItem from "./product_list_item";
import Search from "../search/search";

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
    const { products, fetchSearchedProducts } = this.props;
    return (
      <section>
        <div>
          <Search products={products} searchByProduct={fetchSearchedProducts} />
          {products.map((product, index) => (
            <ProductListItem product={product} key={index} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList;

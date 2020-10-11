import React from "react";
import ProductListItem from "./product_list_item";

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
    const { products } = this.props;
    return (
      <section>
        <div>
          {products.map((product, index) => (
            <ProductListItem product={product} key={index} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList;

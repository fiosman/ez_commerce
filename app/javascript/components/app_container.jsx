import { connect } from "react-redux";
import App from "./app";
import { pullCart } from "../actions/cart_actions";
import { pullCategories } from "../actions/category_actions";
import { fetchProducts } from "../actions/product_actions";

const mapStateToProps = (state) => {
  const products = state.entities.products;
  const categories = state.entities.categories;

  for (let product in products) {
    if (products[key] != undefined) {
      return true;
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
  getCategories: () => dispatch(pullCategories()),
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

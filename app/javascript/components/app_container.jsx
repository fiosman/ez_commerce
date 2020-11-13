import { connect } from "react-redux";
import App from "./app";
import { pullCart } from "../actions/cart_actions";
import { pullCategories } from "../actions/category_actions";
import { fetchProducts } from "../actions/product_actions";

const mapStateToProps = (state) => ({
  products: state.entities.products,
  categories: state.entities.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
  getCategories: () => dispatch(pullCategories()),
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

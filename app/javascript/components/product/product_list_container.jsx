import ProductList from "./product_list";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  loadingCategories: state.loading.categories,
  loadingProducts: state.loading.products,
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
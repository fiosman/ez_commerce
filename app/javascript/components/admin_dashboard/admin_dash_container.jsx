import AdminDash from "./admin_dash";
import { fetchProducts, removeProduct } from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories, removeCategory } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
  loadingCategories: state.loading.categories,
  loadingProducts: state.loading.products,
});
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
  deleteProduct: (productId) => dispatch(removeProduct(productId)),
  deleteCategory: (categoryId) => dispatch(removeCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDash);

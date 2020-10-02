import AdminDash from "./admin_dash";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
});
const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDash);

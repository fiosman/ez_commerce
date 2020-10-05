import AdminDash from "./admin_dash";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories } from "../../actions/category_actions";

const mapStateToProps = (state) => ({
  loadingCategories: state.loading.categories,
  loadingProducts: state.loading.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDash);

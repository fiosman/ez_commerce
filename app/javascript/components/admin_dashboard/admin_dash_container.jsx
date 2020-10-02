import AdminDash from "./admin_dash";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/category_actions";

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(fetchCategories()),
});

export default connect(null, mapDispatchToProps)(AdminDash);

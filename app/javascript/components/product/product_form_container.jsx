import { connect } from "react-redux";
import ProductForm from "../product/product_form";
import { addProduct, removeProductErrors } from "../../actions/product_actions";
import { selectAllCategories } from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  errors: state.errors.product,
  categories: selectAllCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  clearErrors: () => dispatch(removeProductErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

import { connect } from "react-redux";
import ProductForm from "../product/product_form";
import { addProduct, removeProductErrors } from "../../actions/product_actions";
import { selectAllCategories } from "../../reducers/selectors";

const mapStateToProps = (state, { formType }) => ({
  errors: state.errors.product,
  categories: selectAllCategories(state),
  formType,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  clearErrors: () => dispatch(removeProductErrors()),
  updateProduct: (product) => dispatch(updateProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

import { connect } from "react-redux";
import {
  modifyProduct,
  removeProductErrors,
} from "../../actions/product_actions";
import { selectAllCategories } from "../../reducers/selectors";
import ProductForm from "./product_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.product,
  categories: selectAllCategories(state),
  formType: "update",
  product: state.entities.products[ownProps.match.params.productId],
});

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (product, productId) =>
    dispatch(modifyProduct(product, productId)),
  clearErrors: () => dispatch(removeProductErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

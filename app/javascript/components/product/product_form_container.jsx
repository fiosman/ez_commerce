import { connect } from "react-redux";
import ProductForm from "../product/product_form";
import { addProduct } from "../../actions/product_actions";

const mapStateToprops = (state) => ({
  errors: state.errors.product,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToprops, mapDispatchToProps)(ProductForm);

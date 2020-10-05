import { connect } from "react-redux";
import { addProduct , removeProductErrors} from "../../actions/product_actions";
import { selectAllCategories } from "../../reducers/selectors";
import ProductForm from "./product_form"; 

const mapStateToProps = (state) => ({
  errors: state.errors.product,
  categories: selectAllCategories(state),
  formType: "new"
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  clearErrors: () => dispatch(removeProductErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

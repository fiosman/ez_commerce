import { connect } from "react-redux";
import CategoryForm from "./category_form";
import {
  addCategory,
  removeCategoryErrors,
} from "../../actions/category_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.category,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
  clearErrors: () => dispatch(removeCategoryErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);

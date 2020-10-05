import InventoryIndex from "./inventory_index";
import { removeProduct } from "../../actions/product_actions";
import { connect } from "react-redux";
import { removeCategory } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (productId) => dispatch(removeProduct(productId)),
  deleteCategory: (categoryId) => dispatch(removeCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryIndex);

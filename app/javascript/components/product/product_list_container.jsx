import ProductList from "./product_list";
import {
  fetchProducts,
  receiveSearchedProducts,
  receiveFilteredCategory,
  receiveFilteredPrice,
  clearFilters,
} from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
  selectFilteredProducts,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
  loadingCategories: state.loading.index.categories,
  loadingProducts: state.loading.index.products,
  filteredProducts: selectFilteredProducts(state),
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
  fetchSearchedProducts: (searchTerm) =>
    dispatch(receiveSearchedProducts(searchTerm)),
  filterByCategory: (category) => dispatch(receiveFilteredCategory(category)),
  filterByPrice: (price) => dispatch(receiveFilteredPrice(price)),
  clearAllFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

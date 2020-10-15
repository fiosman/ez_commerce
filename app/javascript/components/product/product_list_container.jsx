import ProductList from "./product_list";
import {
  fetchProducts,
  receiveSearchedProducts,
  receiveFilteredProducts,
  receiveFilteredCategory,
  receiveFilteredPrice,
} from "../../actions/product_actions";
import { connect } from "react-redux";
import { pullCategories } from "../../actions/category_actions";
import {
  selectAllProducts,
  selectAllCategories,
  selectSearchedProducts,
  selectFilteredProducts,
} from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  loadingCategories: state.loading.categories,
  loadingProducts: state.loading.products,
  products: selectAllProducts(state),
  categories: selectAllCategories(state),
  searchedProducts: selectSearchedProducts(state),
  searchTerm: state.filters.search,
  categoryFilter: state.filters.categories,
  priceFilter: state.filters.price,
  productFilters: state.filters,
  filteredProducts: selectFilteredProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(fetchProducts()),
  getAllCategories: () => dispatch(pullCategories()),
  fetchSearchedProducts: (searchTerm) =>
    dispatch(receiveSearchedProducts(searchTerm)),
  filterByCategory: (category) => dispatch(receiveFilteredCategory(category)),
  filterByPrice: (price) => dispatch(receiveFilteredPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

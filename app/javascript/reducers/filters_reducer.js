import { combineReducers } from "redux";
import searchReducer from "./search_reducer";
import categoryFilterReducer from "./category_filter_reducer";
import priceFilterReducer from "./price_filter_reducer";

const filtersReducer = combineReducers({
  search: searchReducer,
  categories: categoryFilterReducer,
  price: priceFilterReducer,
});

export default filtersReducer;

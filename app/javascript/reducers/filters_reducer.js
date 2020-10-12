import { combineReducers } from "redux";
import searchReducer from "./search_reducer";

const filtersReducer = combineReducers({
  search: searchReducer,
});

export default filtersReducer;

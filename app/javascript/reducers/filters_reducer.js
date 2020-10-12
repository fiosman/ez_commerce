import { combineReducer } from "redux";

const filtersReducer = combineReducer({
  search: searchReducer,
});

export default filtersReducer;

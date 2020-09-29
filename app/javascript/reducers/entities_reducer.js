import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";

const entitiesReudcer = combineReducers({
  users: usersReducer,
  products: productsReducer,
});

export default entitiesReudcer;

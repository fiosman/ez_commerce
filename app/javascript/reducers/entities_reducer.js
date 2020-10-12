import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import categoriesReducer from "./categories_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReudcer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  reviews: reviewsReducer,
});

export default entitiesReudcer;

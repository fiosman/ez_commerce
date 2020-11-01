import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import categoriesReducer from "./categories_reducer";
import reviewsReducer from "./reviews_reducer";
import cartReducer from "./cart_reducer";

const entitiesReudcer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer,
  reviews: reviewsReducer,
  cart: cartReducer,
});

export default entitiesReudcer;

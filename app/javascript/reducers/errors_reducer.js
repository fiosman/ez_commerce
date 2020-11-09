import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import productErrorsReducer from "./product_errors_reducer";
import categoryErrorsReducer from "./category_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";
import lineItemErrorsReducer from "./line_item_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  product: productErrorsReducer,
  category: categoryErrorsReducer,
  review: reviewErrorsReducer,
  lineItem: lineItemErrorsReducer,
});

export default errorsReducer;

import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import loadingReducer from "./loading_reducer";
import filtersReducer from "./filters_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  filters: filtersReducer,
  errors: errorsReducer,
  loading: loadingReducer,
});

export default rootReducer;

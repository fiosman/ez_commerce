import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";

const entitiesReudcer = combineReducers({
  users: usersReducer,
});

export default entitiesReudcer;

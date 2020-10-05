import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";
import localPersist from "../util/local_storage";

export const store = createStore(
  rootReducer,
  localPersist.loadState(),
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localPersist.saveState(store.getState());
});

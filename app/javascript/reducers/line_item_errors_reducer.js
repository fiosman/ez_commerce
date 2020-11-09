import {
  RECEIVE_LINE_ITEM_ERRORS,
  REMOVE_LINE_ITEM_ERRORS,
} from "../actions/line_item_actions";

const lineItemErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_LINE_ITEM_ERRORS:
      return action.errors;
    case REMOVE_LINE_ITEM_ERRORS:
      return [];
    default:
      return state;
  }
};

export default lineItemErrorsReducer;

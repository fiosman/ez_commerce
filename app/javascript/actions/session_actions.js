export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
import {
  signupUser,
  updateUser,
  loginUser,
  logoutUser,
} from "../util/session_api_util";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const signup = (user) => (dispatch) =>
  signupUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch((err) => {
      dispatch(receiveSessionErrors(err.responseJSON));
      throw err;
    });

export const update = (user) => (dispatch) =>
  updateUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch((err) => {
      dispatch(receiveSessionErrors(err.responseJSON));
      throw err;
    });

export const login = (user) => (dispatch) =>
  loginUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => {
      dispatch(receiveSessionErrors(err.responseJSON));
      throw err;
    });

export const logout = () => (dispatch) =>
  logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((err) => {
      dispatch(receiveSessionErrors(err.responseJSON));
      throw err;
    });

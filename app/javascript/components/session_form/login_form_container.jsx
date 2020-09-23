import { connect } from "react-redux";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import { login, removeErrors } from "../../actions/session_actions";
import React from "react";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "login",
  navLink: <Link to="/signup"> Sign up </Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

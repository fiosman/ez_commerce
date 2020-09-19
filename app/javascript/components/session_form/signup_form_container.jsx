import { connect } from "react-redux";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
import React from "react";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "signup",
  navLink: <Link to="/login">Sign in</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

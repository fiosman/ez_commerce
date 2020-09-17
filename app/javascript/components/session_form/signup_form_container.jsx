import { connect } from "react-redux";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
  errors: state.errors,
  formType: "signup",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

import { connect } from "react-redux";
import Splash from "./splash";
import { pullCart } from "../../actions/cart_actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

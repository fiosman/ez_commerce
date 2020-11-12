import { connect } from "react-redux";
import Splash from "./splash";
import { pullCart } from "../../actions/cart_actions";

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
});

export default connect(null, mapDispatchToProps)(Splash);

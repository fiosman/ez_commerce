import Cart from "./cart";
import { pullCart } from "../../actions/cart_actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
});

export default connect(null, mapDispatchToProps)(Cart);
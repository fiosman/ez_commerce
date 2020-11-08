import Cart from "./cart";
import { grabItems, pullCart } from "../../actions/cart_actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(pullCart()),
  getAllLineItems: () => dispatch(grabItems()),
});

export default connect(null, mapDispatchToProps)(Cart);

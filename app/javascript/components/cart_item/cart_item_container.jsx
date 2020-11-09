import { connect } from "react-redux";
import CartItem from "./cart_item";
import {
  addCartItem,
  removeLineItemErrors,
} from "../../actions/line_item_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.lineItem,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (itemData) => dispatch(addCartItem(itemData)),
  clearErrors: () => dispatch(removeLineItemErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

import { connect } from "react-redux";
import CartItem from "./cart_item";
import { addCartItem } from "../../actions/line_item_actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (itemData) => dispatch(addCartItem(itemData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

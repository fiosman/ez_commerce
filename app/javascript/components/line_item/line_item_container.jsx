import { connect } from "react-redux";
import LineItem from "./line_item";
import { addCartItem } from "../../actions/cart_actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (itemData) => dispatch(addCartItem(itemData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineItem);
